import React from 'react';
import styled from 'styled-components';
import camiseta from '../../assets/icon-camiseta.png'
import calca from '../../assets/icon-calca.png'
import fone from '../../assets/icon-fone.png'
import tenis from '../../assets/icon-tenis.png'
const DEFAULT_FEATURED_CARDS = [
  {
    id: 1,
    badge: '30% OFF',
    ctaText: 'Comprar',
    href: '#drop-supreme',
    image: '/collection-1.png',
    imageAlt: 'Novo drop Supreme',
  },
  {
    id: 2,
    badge: '30% OFF',
    ctaText: 'Comprar',
    href: '#colecao-adidas',
    image: '/collection-2.png',
    imageAlt: 'Coleção Adidas',
  },
  {
    id: 3,
    badge: '30% OFF',
    ctaText: 'Comprar',
    href: '#beats-bass',
    image: '/collection-3.png',
    imageAlt: 'Novo Beats Bass',
  },
];

const DEFAULT_CATEGORIES = [
  {
    id: 'camisetas',
    label: 'Camisetas',
    href: '#categoria-camisetas',
    icon: 'tshirt',
    active: true,
  },
  {
    id: 'calcas',
    label: 'Calças',
    href: '#categoria-calcas',
    icon: 'pants',
    active: false,
  },
  {
    id: 'bones',
    label: 'Bonés',
    href: '#categoria-bones',
    icon: 'cap',
    active: false,
  },
  {
    id: 'headphones',
    label: 'Headphones',
    href: '#categoria-headphones',
    icon: 'headphones',
    active: false,
  },
  {
    id: 'tenis',
    label: 'Tênis',
    href: '#categoria-tenis',
    icon: 'shoes',
    active: false,
  },
];

function CategoryIcon({ type, active }) {
  const strokeColor = active ? '#C92071' : '#666666';

  switch (type) {
    case 'tshirt':
      return (
        <img src={camiseta} alt='Camisas'/>
      );
    case 'pants':
      return (
        <img src={calca} alt='Calças'/>
      );
    case 'cap':
      return (
        <img src={calca} alt='Bonés'/>
      );
    case 'headphones':
      return (
        <img src={fone} alt='Headphones'/>
      );
    case 'shoes':
    default:
      return (
        <img src={tenis} alt='Tenis'/>
      );
  }
}

export function Colecoes({
  featuredCards = DEFAULT_FEATURED_CARDS,
  categories = DEFAULT_CATEGORIES,
  onCardClick,
  onCategoryClick,
}) {
  const handleImageError = (e) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <ColecoesWrapper>
      
      <SectionBlock aria-labelledby="colecoes-destaque-titulo">
        <Container>
          <LeftSectionTitle id="colecoes-destaque-titulo">
            Coleções em destaque
          </LeftSectionTitle>

          <CardsGrid>
            {featuredCards.map((card) => (
              <PromoCard key={card.id}>
                {card.image && (
                  <CardImage
                    src={card.image}
                    alt={card.imageAlt || `Coleção ${card.id}`}
                    onError={handleImageError}
                  />
                )}

                <CardOverlay>
                  {card.badge && <DiscountBadge>{card.badge}</DiscountBadge>}
                  <BuyButton
                    href={`/produtos:${card.id}`}
                    onClick={(e) => {
                      if (onCardClick) {
                        e.preventDefault();
                        onCardClick(card);
                      }
                    }}
                  >
                    {card.ctaText || 'Comprar'}
                  </BuyButton>
                </CardOverlay>
              </PromoCard>
            ))}
          </CardsGrid>
        </Container>
      </SectionBlock>


      <CategoriesBlock aria-labelledby="categorias-destaque-titulo">
        <Container>
          <CenterSectionTitle id="categorias-destaque-titulo">
            Coleções em destaque
          </CenterSectionTitle>

          <CategoriesRow>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                href={category.href || '#'}
                onClick={(e) => {
                  if (onCategoryClick) {
                    e.preventDefault();
                    onCategoryClick(category);
                  }
                }}
              >
                <CategoryCircle>
                  <CategoryIcon type={category.icon} active={category.active} />
                </CategoryCircle>
                <CategoryLabel>{category.label}</CategoryLabel>
              </CategoryItem>
            ))}
          </CategoriesRow>
        </Container>
      </CategoriesBlock>
    </ColecoesWrapper>
  );
}

export default Colecoes;

/* ================= STYLED COMPONENTS ================= */

const ColecoesWrapper = styled.div`
  width: 100%;
  background-color: #f9fafb;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
`;

const SectionBlock = styled.section`
  padding: 40px 0 36px;
`;

const CategoriesBlock = styled.section`
  padding: 24px 0 64px;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
`;

const LeftSectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #474747;
  margin: 0 0 20px 0;
`;

const CenterSectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #474747;
  text-align: center;
  margin: 0 0 28px 0;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const PromoCard = styled.article`
  position: relative;
  background-color: #dbe4f2;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
  min-height: 220px;
  overflow: hidden;
  display: flex;
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  z-index: 1;
`;

const CardOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const DiscountBadge = styled.span`
  background-color: #e7ff86;
  color: #474747;
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
  padding: 5px 14px;
  display: inline-block;
`;

const BuyButton = styled.a`
  background-color: #f8f9fa;
  color: #c92071;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  padding: 10px 28px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CategoriesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 36px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CategoryCircle = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #474747;
`;