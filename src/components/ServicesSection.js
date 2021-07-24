import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design and dev"
            desc="I do UI/UX design for the websites and develop them to client liking."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="ethical hacking"
            desc="White hat hacking, specializing in penetration testing and other testing methodologies that ensure the security of an organization's network and computer systems."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="full stack app Dev"
            desc="I develop both frontend and backend of mobile applications with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
