import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyContainer, DescItem, HeroContainer, VerticalMargin } from '../Container';
import StyledText from '../../../../hoc/Text';
import EnquiryButton from '../EnquiryButton';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import swal from 'sweetalert';

const ContactContainer = styled.div`
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
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
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState();

  const [data, setData] = useState({
    phone: '',
    message: '',
    isAvailableDate: false,
    isLengthOfLease: false,
    isInspection: false,
    isRentalApplication: false,
  });
  const [touched, setTouched] = useState({
    email: false,
    name: false,
    message: false,
    phone: false,
  });

  return (
    <>
      <BodyContainer direction="column">
        <ContactContainer>
          <DescItem>
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
          </DescItem>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!validate(data)) {
                swal('Error', 'Please fill in all the required fields', 'error');
                return;
              }
              setLoading(true);
              axios
                .post('http://localhost:8080/api/v1/contact', {
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
                })
                .then(setResponse)
                .catch((error) => {
                  setResponse(error.response);
                })
                .finally(() => setLoading(false));
              swal('Success', 'Thank you for your enquiry', 'success');
            }}
          >
            <DescItem>
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
              <EnquiryButton
                size="507px"
                margin="5px"
                color="#fff"
                background="#a30000"
                type="submit"
              >
                Send enquiry
              </EnquiryButton>
            </DescItem>
          </form>
          <DescItem>
            <StyledText size="0.7rem">Personal Information Collection Statement</StyledText>
            <StyledText size="0.7rem">
              Your personal information and associated behavioural data related to search activities
              will be passed to the Agency and/or its authorised service provider to assist the
              Agency to contact you about your property enquiry. They are required not to use your
              information for any other purpose. Our Privacy policy explains how we store personal
              information and how you may access, correct or complain about the handling of personal
              information.
            </StyledText>
            <StyledText size="0.7rem">
              This form is only to be used for sending genuine email enquiries to the Agent. We
              reserves its right to take any legal or other appropriate action in relation to misuse
              of this service.
            </StyledText>
          </DescItem>
        </ContactContainer>
      </BodyContainer>
    </>
  );
};
export default ContactForm;
