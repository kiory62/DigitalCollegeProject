import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    badge: '30% OFF',
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/produc-image-1.jpeg',
    href: '#produto-1',
  },
  {
    id: 2,
    badge: '30% OFF',
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/produc-image-2.jpeg',
    href: '#produto-2',
  },
  {
    id: 3,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/produc-image-3.jpeg',
    href: '#produto-3',
  },
  {
    id: 4,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/produc-image-4.jpeg',
    href: '#produto-4',
  },
  {
    id: 5,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/produc-image-5.jpeg',
    href: '#produto-5',
  },
  {
    id: 6,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/product-thumb-4.jpeg',
    href: '#produto-6',
  },
  {
    id: 7,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/product-thumb-3.jpeg',
    href: '#produto-7',
  },
  {
    id: 8,
    badge: null,
    category: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    image: '/product-thumb-5.jpeg',
    href: '#produto-8',
  },
];

export function ProdutosDestaque({
  title = 'Produtos em alta',
  seeAllText = 'Ver todos',
  seeAllHref = '/produtos',
  products = DEFAULT_PRODUCTS,
  onProductClick,
  onSeeAllClick,
}) {
  const handleImageError = (e) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <SectionWrapper aria-labelledby="produtos-em-alta-titulo">
      <Container>
        <SectionHeader>
          <SectionTitle id="produtos-em-alta-titulo">{title}</SectionTitle>

          <SeeAllLink
            to={seeAllHref}
            onClick={(e) => {
              if (onSeeAllClick) {
                e.preventDefault();
                onSeeAllClick(e);
              }
            }}
          >
            <span>{seeAllText}</span>
          </SeeAllLink>
        </SectionHeader>

        <ProductsGrid>
          {products.map((product) => {
            const hasDiscount = Boolean(product.discountPrice);
            const productRoute = `/produtos/${product.id}`;

            return (
              <ProductCard
                key={product.id}
                to={productRoute}
                onClick={(e) => {
                  if (onProductClick) {
                    e.preventDefault();
                    onProductClick(product);
                  }
                }}
              >
                <ImageBox>
                  {product.badge && <DiscountBadge>{product.badge}</DiscountBadge>}
                  {product.image && (
                    <ProductImg
                      src={product.image}
                      alt={product.name}
                      onError={handleImageError}
                    />
                  )}
                </ImageBox>

                <ProductInfo>
                  {product.category && <CategoryText>{product.category}</CategoryText>}
                  <ProductName title={product.name}>{product.name}</ProductName>

                  <PriceRow>
                    {hasDiscount ? (
                      <>
                        <OldPrice>{product.price}</OldPrice>
                        <CurrentPrice>{product.discountPrice}</CurrentPrice>
                      </>
                    ) : (
                      <CurrentPrice>{product.price}</CurrentPrice>
                    )}
                  </PriceRow>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductsGrid>
      </Container>
    </SectionWrapper>
  );
}

export default ProdutosDestaque;

/* ================= STYLED COMPONENTS ================= */

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #f9fafb;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 24px 0 64px;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 525px) {
    padding: 0 16px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #474747;
  margin: 0;
`;

const SeeAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #c92071;
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;

  &:hover {
    color: #a8185d;
    gap: 11px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 525px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ImageBox = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    height: 270px;
  }

  @media (max-width: 525px) {
    height: 290px;
  }
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #e7ff86;
  color: #474747;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border-radius: 999px;
  padding: 5px 12px;
  z-index: 2;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s ease;

  ${ProductCard}:hover & {
    transform: scale(1.03);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CategoryText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8f8f8f;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #474747;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
`;

const OldPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #8f8f8f;
  text-decoration: line-through;
`;

const CurrentPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1f1f1f;
`;