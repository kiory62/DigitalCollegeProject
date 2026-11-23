import React from 'react';
import styled from 'styled-components';
import tenisOferta from '../../assets/laye-1.png'

export function Ofertas() {
  return (
    <OfferSection aria-labelledby="oferta-especial-titulo">
      <OfferContainer>
        <VisualColumn>
          <BackdropCircle aria-hidden="true" />
          <OfferImage
            src={tenisOferta}
            alt="Par de tênis Air Jordan em destaque"
          />
        </VisualColumn>

        <ContentColumn>
          <OfferBadge>Oferta especial</OfferBadge>
          <OfferTitle id="oferta-especial-titulo">
            Air Jordan edição de colecionador
          </OfferTitle>
          <OfferDescription>
            Aproveite esta edição especial com condições exclusivas por tempo
            limitado na loja.
          </OfferDescription>
          <OfferButton href="#oferta-especial">Ver Oferta</OfferButton>
        </ContentColumn>
      </OfferContainer>
    </OfferSection>
  );
}

export default Ofertas;
/* ================= STYLED COMPONENTS ================= */

const OfferSection = styled.section`
  width: 100%;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 64px 0;
`;

const OfferContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const VisualColumn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;

  @media (max-width: 600px) {
    min-height: 260px;
  }
`;

const BackdropCircle = styled.div`
  position: absolute;
  width: 390px;
  height: 390px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(226, 214, 255, 0.55) 0%,
    rgba(247, 245, 255, 0.1) 100%
  );
  pointer-events: none;
  z-index: 1;

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

const OfferImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 500px;
  max-height: 330px;
  object-fit: contain;
 

  @media (max-width: 600px) {
    max-height: 220px;
  }
`;

const ContentColumn = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OfferBadge = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #c92071;
  margin-bottom: 12px;
`;

const OfferTitle = styled.h2`
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.8px;
  color: #474747;
  margin: 0 0 18px 0;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const OfferDescription = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: #666666;
  margin: 0 0 28px 0;
`;

const OfferButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c92071;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 36px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: #a8185d;
  }

  &:active {
    transform: scale(0.98);
  }
`;