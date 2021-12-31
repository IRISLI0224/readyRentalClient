import React from 'react';
import styled from 'styled-components';
import { BodyContainer, DescItem, HeroContainer, VerticalMargin } from '../Container';
import StyledText from '../../../../hoc/Text';
import EnquiryButton from '../EnquiryButton';
import Input from '../../../../hoc/Input';

const ContactContainer = styled.div`
  @media(min-width:641px) { 
    border-radius:0.1875rem;
  `;

const CheckboxContainer = styled.div`
  @media(min-width:501px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.75rem;
  flex-shrink: 0;
`;

const ContactForm = ({property}) => {
  const {address}= property;
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
            {address?`${address.streetNumber} ${address.streetName}, ${address.city}, ${address.state}, 
        ${address.postCode}`:address}
            </StyledText>
            <StyledText bold="0.2rem">Rent: ${property.rent} per week</StyledText>
            <StyledText bold="0.2rem">Next open: Sat 18 Dec, 9:00am - 9:15am</StyledText>
          </HeroContainer>
        </DescItem>
        <DescItem>
          <VerticalMargin margin="1rem">
            <EnquiryButton size="507px">Apply</EnquiryButton>
          </VerticalMargin>
          <VerticalMargin margin="0.5rem">
            <StyledText bold="0.2rem">What's your enquiry about?</StyledText>
          </VerticalMargin>
          <CheckboxContainer>
            <CheckboxWrapper>
              <input type="checkbox" />
            </CheckboxWrapper>
            <StyledText>Available date</StyledText>
            <CheckboxWrapper>
              <input type="checkbox" />
            </CheckboxWrapper>
            <StyledText>Length of lease</StyledText>
            <CheckboxWrapper>
              <input type="checkbox" />
            </CheckboxWrapper>
            <StyledText>Inspection</StyledText>
            <CheckboxWrapper>
              <input type="checkbox" />
            </CheckboxWrapper>
            <StyledText>Rental application</StyledText>
          </CheckboxContainer>
          <VerticalMargin margin="1rem">
            <StyledText bold="0.1rem">Message</StyledText>
            <Input size="506px" height="80px" />
            <StyledText bold="0.1rem">Name(required)</StyledText>
            <Input id="Name" size="506px" />
            <StyledText bold="0.1rem">Email address(required)</StyledText>
            <Input name="email" id="email" type="email" size="506px" />
            <StyledText bold="0.1rem">Phone number</StyledText>
            <Input size="506px" />
          </VerticalMargin>
          <EnquiryButton size="507px" color="#fff" background="#a30000">
            Send enquiry
          </EnquiryButton>
        </DescItem>
        <DescItem>
          <StyledText size="0.7rem">Personal Information Collection Statement</StyledText>
          <StyledText size="0.7rem">
            Your personal information and associated behavioural data related to search activities
            will be passed to the Agency and/or its authorised service provider to assist the Agency
            to contact you about your property enquiry. They are required not to use your
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
);}
export default ContactForm;