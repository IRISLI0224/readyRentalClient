import backendApi from '../../../../api/backendApi';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyContainer, DescItem, HeroContainer } from '../Container';
import { getUserFromToken } from '../../../../utils/authentication';
import StyledText from '../../../../hoc/Text';
import EnquiryButton from '../EnquiryButton';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import swal from 'sweetalert';
import { RRColors } from '../../../../utils/constants';

const ContactContainer = styled.div`
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
  }
`;

const BodyContainers = styled(BodyContainer)`
  @media screen and (max-width: 1024px) {
    min-width: 100%;
  }
`;

const CheckboxContainer = styled.div`
  @media (min-width: 501px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  margin: 5px;
`;

const DescItems = styled(DescItem)`
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;
const EnquiryButtons = styled(EnquiryButton)`
  @media screen and (max-width: 1024px) {
    width: 81vw;
  }
`;

const FORM_FIELDS = [
  {
    key: 'email',
    label: 'Email',
    type: 'text',
    getErrorMessage: (data) => {
      if (!data.email) {
        return 'Please input your email';
      }
      return '';
    },
  },
  {
    key: 'name',
    label: 'Name',
    type: 'name',
    getErrorMessage: (data) => {
      if (!data.name) {
        return 'Please input your name';
      }
      return '';
    },
  },
];

function getAvailableDate(date) {
  const newDate = new Date(String(date).split('T')[0]);
  return date ? newDate.toDateString() : 'Now';
}

const validate = (data) =>
  Object.keys(FORM_FIELDS).every((key) => {
    const field = FORM_FIELDS[key];
    return !field.getErrorMessage(data);
  });

const ContactForm = ({ id, property }) => {
  const { address, availableDate } = property;
  const [Response, setResponse] = useState();
  const [Loading, setLoading] = useState();
  const contactUser = getUserFromToken();
  const blue = RRColors.themeBlue;

  const [data, setData] = useState({
    phone: '',
    message: '',
    isAvailableDate: false,
    isLengthOfLease: false,
    isInspection: false,
    isRentalApplication: false,
  });

  const [touched, setTouched] = useState({
    email: '',
    name: '',
    message: '',
    phone: '',
  });

  return (
    <>
      <BodyContainers direction="column">
        <ContactContainer>
          <DescItems>
            <StyledText bold size="1.1rem">
              Email enquiry to the landlord
            </StyledText>
            <HeroContainer>
              <StyledText bold="0.2rem">
                {address
                  ? `${address.streetNumber} ${address.streetName}, ${address.city}, ${address.state}, 
        ${address.postCode}`
                  : address}
              </StyledText>
              <StyledText bold="0.2rem">Rent: ${property.rent} per week</StyledText>
              <StyledText bold="0.2rem">
                Available Date: {getAvailableDate(availableDate)}
              </StyledText>
            </HeroContainer>
          </DescItems>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!validate(data)) {
                swal('Error', 'Please fill in all the required fields', 'error');
                return;
              }
              setLoading(true);
              backendApi
                .post('/contact', {
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  message: data.message,
                  address: `${address.streetNumber} ${address.streetName}, ${address.city}, ${address.state}, 
                  ${address.postCode}`,
                  id: id,
                  isAvailableDate: data.isAvailableDate,
                  isLengthOfLease: data.isLengthOfLease,
                  isInspection: data.isInspection,
                  isRentalApplication: data.isRentalApplication,
                  contactUser: contactUser,
                })
                .then(setResponse)
                .catch((error) => {
                  setResponse(error.response);
                  swal('Error', 'error');
                  return;
                })
                .finally(() => setLoading(false));
              swal('Success', 'Thank you for your enquiry', 'success');
            }}
          >
            <DescItems>
              <StyledText bold size="1.1rem">
                What's your enquiry about?
              </StyledText>
              <CheckboxContainer>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    value={data.isAvailableDate}
                    onChange={(event) =>
                      setData((prevData) => ({ ...prevData, isAvailableDate: event.target.value }))
                    }
                  />
                </CheckboxWrapper>
                <StyledText>Available date</StyledText>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    value={data.isLengthOfLease}
                    onChange={(event) =>
                      setData((prevData) => ({ ...prevData, isLengthOfLease: event.target.value }))
                    }
                  />
                </CheckboxWrapper>
                <StyledText>Length of lease</StyledText>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    value={data.isInspection}
                    onChange={(event) =>
                      setData((prevData) => ({ ...prevData, isInspection: event.target.value }))
                    }
                  />
                </CheckboxWrapper>
                <StyledText>Inspection</StyledText>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    value={data.isRentalApplication}
                    onChange={(event) =>
                      setData((prevData) => ({
                        ...prevData,
                        isRentalApplication: event.target.value,
                      }))
                    }
                  />
                </CheckboxWrapper>
                <StyledText>Rental application</StyledText>
              </CheckboxContainer>
              {FORM_FIELDS.map((field) => (
                <TextInput
                  key={field.key}
                  label={field.label}
                  type={field.type}
                  error={touched[field.key] && field.getErrorMessage(data)}
                  value={data[field.key]}
                  onChange={(event) =>
                    setData((prevData) => ({
                      ...prevData,
                      [field.key]: event.target.value,
                    }))
                  }
                  onBlur={() =>
                    setTouched((prevTouched) => ({
                      ...prevTouched,
                      [field.key]: true,
                    }))
                  }
                />
              ))}
              <TextInput
                label="Phone number (optional)"
                size="506px"
                type="number"
                value={data.phone}
                onChange={(event) =>
                  setData((prevData) => ({ ...prevData, phone: event.target.value }))
                }
              />
              <TextArea
                label="Message"
                type="text"
                value={data.message}
                onChange={(event) =>
                  setData((prevData) => ({
                    ...prevData,
                    message: event.target.value,
                  }))
                }
              />
              <EnquiryButtons
                size="507px"
                margin="5px"
                color="#fff"
                background={blue}
                type="submit"
              >
                Send enquiry
              </EnquiryButtons>
            </DescItems>
          </form>
        </ContactContainer>
      </BodyContainers>
    </>
  );
};
export default ContactForm;
