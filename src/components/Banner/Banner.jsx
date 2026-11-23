import React, { useState } from 'react';
import styled from 'styled-components';

const DEFAULT_SLIDES = [
  {
    id: 1,
    eyebrow: 'Melhores ofertas personalizadas',
    title: 'Queima de estoque Nike',
    emoji: '🔥',
    description:
      'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    ctaText: 'Ver Ofertas',
    ctaHref: '#ofertas',
    image: '/home-slide-8.jpeg',
    imageAlt: 'Tênis Nike branco com detalhes vermelhos',
  },
  {
    id: 2,
    eyebrow: 'Novidades da temporada',
    title: 'Lançamentos em destaque',
    emoji: '⚡',
    description:
      'Estilo urbano e conforto para o dia a dia com condições especiais de lançamento na loja.',
    ctaText: 'Ver Ofertas',
    ctaHref: '#lancamentos',
    image:
      '/home-slide-7.jpeg',
    imageAlt: 'Tênis esportivo em destaque',
  },
  {
    id: 3,
    eyebrow: 'Seleção especial da loja',
    title: 'Tênis com até 40% OFF',
    emoji: '👟',
    description:
      'Aproveite descontos exclusivos por tempo limitado nos modelos mais procurados.',
    ctaText: 'Ver Ofertas',
    ctaHref: '#promocoes',
    image:
      '/home-slide-6.jpeg',
    imageAlt: 'Tênis casual em promoção',
  },
  {
    id: 4,
    eyebrow: 'Frete rápido e garantido',
    title: 'Clássicos que nunca saem de moda',
    emoji: '✨',
    description:
      'Combine autenticidade e qualidade em cada passo com os clássicos da Digital Store.',
    ctaText: 'Ver Ofertas',
    ctaHref: '#classicos',
    image:
      '/home-slide-5.jpeg',
    imageAlt: 'Tênis clássico em destaque',
  },
];

export function Banner({ slides = DEFAULT_SLIDES, onCtaClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides.length) return null;

  const currentSlide = slides[activeIndex] || slides[0];

  const handleSelectSlide = (index) => {
    setActiveIndex(index);
  };

  const handleActionClick = (e, slide) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick(slide);
    }
  };

  return (
    <BannerSection aria-label="Banner promocional">
      <DotsPattern aria-hidden="true" />

      <BannerContainer>
        <ContentColumn>
          {currentSlide.eyebrow && <Eyebrow>{currentSlide.eyebrow}</Eyebrow>}

          <Title>
            {currentSlide.title}
            {currentSlide.emoji && (
              <Emoji role="img" aria-label="destaque">
                {currentSlide.emoji}
              </Emoji>
            )}
          </Title>

          {currentSlide.description && (
            <Description>{currentSlide.description}</Description>
          )}

          {currentSlide.ctaText && (
            <CtaButton
              href={currentSlide.ctaHref || '#ofertas'}
              onClick={(e) => handleActionClick(e, currentSlide)}
            >
              {currentSlide.ctaText}
            </CtaButton>
          )}
        </ContentColumn>

        <ImageColumn>
          <ProductImage
            key={currentSlide.id ?? activeIndex}
            src={currentSlide.image}
            alt={currentSlide.imageAlt || currentSlide.title}
          />
        </ImageColumn>
      </BannerContainer>

      <CarouselDots role="tablist" aria-label="Slides do banner">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <DotButton
              key={slide.id ?? index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para o slide ${index + 1}`}
              $active={isActive}
              onClick={() => handleSelectSlide(index)}
            />
          );
        })}
      </CarouselDots>
    </BannerSection>
  );
}

export default Banner;

/* ================= STYLED COMPONENTS ================= */

const BannerSection = styled.section`
  position: relative;
  width: 100%;
  background-color: #f5f5f5;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 56px 0 36px;
  overflow: hidden;
`;

const DotsPattern = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
  width: 110px;
  height: 110px;
  pointer-events: none;
  background-image: radial-gradient(#f3d08a 2px, transparent 2px);
  background-size: 12px 12px;
  opacity: 0.9;

  @media (max-width: 768px) {
    width: 76px;
    height: 76px;
    top: 16px;
    right: 16px;
  }
`;

const BannerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: left;
    gap: 24px;
  }
`;

const ContentColumn = styled.div`
  max-width: 500px;
`;

const Eyebrow = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #f6aa1c;
  margin-bottom: 14px;
  position: sticky;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -1px;
  color: #1f1f1f;
  margin: 0 0 20px 0;

  @media (max-width: 1024px) {
    font-size: 44px;
  }

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const Emoji = styled.span`
  margin-left: 10px;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #474747;
  margin: 0 0 32px 0;
  max-width: 440px;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c92071;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  padding: 13px 38px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: #a8185d;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @media (max-width: 900px) {
    order: -1;
    min-height: 220px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 620px;
  max-height: 360px;
  object-fit: contain;
  transform: rotate(-16deg);
  filter: drop-shadow(0 24px 28px rgba(0, 0, 0, 0.14));
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-height: 250px;
    transform: rotate(-10deg);
  }
`;

const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
  position: relative;
  z-index: 2;
`;

const DotButton = styled.button`
  width: 12px;
  height: 12px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#c92071' : '#cccccc')};
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.$active ? '#c92071' : '#a8a8a8')};
    transform: scale(1.1);
  }
`;