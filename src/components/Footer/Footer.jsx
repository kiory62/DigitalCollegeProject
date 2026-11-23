import React from 'react';
import styled from 'styled-components';
import logoPreta from '../../assets/logo-preta.png';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <FooterMain>
          <BrandColumn>
            <Logo href="/">
              <img src={logoPreta} alt="logo-footer" />
            </Logo>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </Description>
            <SocialLinks>
              <SocialIcon href="#facebook" aria-label="Facebook">
                <img src={facebook} alt="facebook" />
              </SocialIcon>
              <SocialIcon href="#instagram" aria-label="Instagram">
                <img src={instagram} alt="instagram" />
              </SocialIcon>
              <SocialIcon href="#twitter" aria-label="Twitter">
                <img src={twitter} alt="twitter" />
              </SocialIcon>
            </SocialLinks>
          </BrandColumn>

          <NavColumn>
            <ColumnTitle>Informação</ColumnTitle>
            <LinkList>
              <li><FooterLink href="#sobre">Sobre Drip Store</FooterLink></li>
              <li><FooterLink href="#seguranca">Segurança</FooterLink></li>
              <li><FooterLink href="#wishlist">Wishlist</FooterLink></li>
              <li><FooterLink href="#blog">Blog</FooterLink></li>
              <li><FooterLink href="#trabalhe-conosco">Trabalhe conosco</FooterLink></li>
              <li><FooterLink href="#meus-pedidos">Meus Pedidos</FooterLink></li>
            </LinkList>
          </NavColumn>

          <NavColumn>
            <ColumnTitle>Categorias</ColumnTitle>
            <LinkList>
              <li><FooterLink href="#camisetas">Camisetas</FooterLink></li>
              <li><FooterLink href="#calcas">Calças</FooterLink></li>
              <li><FooterLink href="#bones">Bonés</FooterLink></li>
              <li><FooterLink href="#headphones">Headphones</FooterLink></li>
              <li><FooterLink href="#tenis">Tênis</FooterLink></li>
            </LinkList>
          </NavColumn>

          <ContactColumn>
            <ColumnTitle>Contato</ColumnTitle>
            <ContactText>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </ContactText>
            <ContactPhone href="tel:+558530513411">(85) 3051-3411</ContactPhone>
          </ContactColumn>
        </FooterMain>

        <Divider />

        <FooterBottom>
          <Copyright>© 2022 Digital College</Copyright>
        </FooterBottom>
      </InnerContainer>
    </FooterContainer>
  );
}

export default Footer;

/* ================= STYLED COMPONENTS ================= */

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1f1f1f;
  color: #ffffff;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 60px 0 24px;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 48px;

  @media (max-width: 525px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  margin-bottom: 22px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
  margin: 0 0 24px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 22px 0;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
`;

const ContactText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
  margin: 0 0 16px 0;
`;

const ContactPhone = styled.a`
  font-size: 14px;
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #333333;
  margin: 0 0 24px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.span`
  font-size: 12px;
  color: #ffffff;
`;