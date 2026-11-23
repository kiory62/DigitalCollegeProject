import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const PRODUCTS_DATA = {
  1: {
    name: 'K-Swiss V8 - Masculino',
    meta: 'Esporte e lazer | K-Swiss | REF:38416711',
    price: 'R$ 100',
    oldPrice: 'R$ 200',
    image: '/produc-image-1.jpeg',
  },
  2: {
    name: 'Adidas Runfalcon - Masculino',
    meta: 'Esporte e lazer | Adidas | REF:38416712',
    price: 'R$ 140',
    oldPrice: 'R$ 240',
    image: '/produc-image-2.jpeg',
  },
  3: {
    name: 'Nike Court Vision - Feminino',
    meta: 'Casual | Nike | REF:38416713',
    price: 'R$ 160',
    oldPrice: 'R$ 220',
    image: '/produc-image-3.jpeg',
  },
  4: {
    name: 'Puma Velocity Nitro - Masculino',
    meta: 'Corrida | Puma | REF:38416714',
    price: 'R$ 190',
    oldPrice: 'R$ 280',
    image: '/produc-image-4.jpeg',
  },
  5: {
    name: 'Balenciaga Track - Unisex',
    meta: 'Utilitário | Balenciaga | REF:38416715',
    price: 'R$ 250',
    oldPrice: 'R$ 350',
    image: '/produc-image-5.jpeg',
  },
  6: {
    name: 'K-Swiss Court - Feminino',
    meta: 'Casual | K-Swiss | REF:38416716',
    price: 'R$ 120',
    oldPrice: 'R$ 190',
    image: '/product-thumb-4.jpeg',
  },
  7: {
    name: 'K-Swiss V8 - Masculino',
    meta: 'Esporte e lazer | K-Swiss | REF:38416717',
    price: 'R$ 100',
    oldPrice: 'R$ 200',
    image: '/product-thumb-3.jpeg',
  },
  8: {
    name: 'K-Swiss V8 - Masculino',
    meta: 'Esporte e lazer | K-Swiss | REF:38416718',
    price: 'R$ 100',
    oldPrice: 'R$ 200',
    image: '/product-thumb-5.jpeg',
  },
};

const GALLERY_BG = ['#e2e6fc', '#f8e5b8', '#f7b2b7', '#d4be8d', '#e6e1d6'];
const SIZES = ['39', '40', '41', '42', '43'];
const COLORS = ['#65e8ff', '#ff5c77', '#4f4f4f', '#5c6bc0'];

const RELATED = [
  { id: 1, badge: '30% OFF', category: 'Tênis', name: 'K-Swiss V8 - Masculino', price: '$200', discountPrice: '$100', image: '/produc-image-1.jpeg' },
  { id: 2, badge: '30% OFF', category: 'Tênis', name: 'K-Swiss V8 - Masculino', price: '$200', discountPrice: '$100', image: '/produc-image-2.jpeg' },
  { id: 3, badge: null, category: 'Tênis', name: 'K-Swiss V8 - Masculino', price: '$200', discountPrice: '$100', image: '/produc-image-3.jpeg' },
  { id: 4, badge: null, category: 'Tênis', name: 'K-Swiss V8 - Masculino', price: '$200', discountPrice: '$100', image: '/produc-image-4.jpeg' },
];

export function ProductViewPage() {
  const { id } = useParams();
  const currentProductId = id || 1;
  const product = PRODUCTS_DATA[currentProductId] || PRODUCTS_DATA[1];

  const gallery = GALLERY_BG.map((bg, index) => ({
    src: product.image,
    bg,
    alt: `${product.name} - visualização ${index + 1}`,
  }));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState('41');
  const [selectedColor, setSelectedColor] = useState(COLORS[1]);

  useEffect(() => {
    setActiveImg(0);
  }, [currentProductId]);

  const prevImg = () => {
    setActiveImg((i) => (i === 0 ? gallery.length - 1 : i - 1));
  };

  const nextImg = () => {
    setActiveImg((i) => (i === gallery.length - 1 ? 0 : i + 1));
  };

  const hideBrokenImg = (e) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <PageWrapper data-product-id={currentProductId}>
      <Container>
        <MainGrid>
          <GalleryColumn>
            <MainStage $bg={gallery[activeImg].bg}>
              <ArrowButton type="button" onClick={prevImg} aria-label="Imagem anterior">
                ‹
              </ArrowButton>

              <MainImage
                src={gallery[activeImg].src}
                alt={gallery[activeImg].alt}
                onError={hideBrokenImg}
              />

              <ArrowButton type="button" onClick={nextImg} aria-label="Próxima imagem">
                ›
              </ArrowButton>
            </MainStage>

            <ThumbRow>
              {gallery.map((item, index) => (
                <ThumbButton
                  key={index}
                  type="button"
                  $bg={item.bg}
                  $active={index === activeImg}
                  onClick={() => setActiveImg(index)}
                  aria-label={`Ver imagem ${index + 1}`}
                >
                  <img src={item.src} alt={item.alt} onError={hideBrokenImg} />
                </ThumbButton>
              ))}
            </ThumbRow>
          </GalleryColumn>

          <DetailsColumn>
            <ProductTitle>{product.name}</ProductTitle>
            <MetaInfo>{product.meta}</MetaInfo>

            <RatingRow>
              <Stars aria-label="4.7 de 5 estrelas">★★★★☆</Stars>
              <RatingBadge>4.7 ★</RatingBadge>
              <ReviewCount>(90 avaliações )</ReviewCount>
            </RatingRow>

            <PriceBlock>
              <CurrentPrice>
                {product.price}<small>,00</small>
              </CurrentPrice>
              <OldPrice>{product.oldPrice}</OldPrice>
            </PriceBlock>

            <SectionLabel>Descrição do produto</SectionLabel>
            <Description>
              Modelo pensado para o dia a dia com cabedal respirável, ajuste firme e
              amortecimento confortável para caminhadas e uso casual.
            </Description>

            <OptionGroup>
              <SectionLabel>Tamanho</SectionLabel>
              <SizesRow>
                {SIZES.map((size) => (
                  <SizeButton
                    key={size}
                    type="button"
                    $active={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </SizeButton>
                ))}
              </SizesRow>
            </OptionGroup>

            <OptionGroup>
              <SectionLabel>Cor</SectionLabel>
              <ColorsRow>
                {COLORS.map((color) => (
                  <ColorButton
                    key={color}
                    type="button"
                    $color={color}
                    $active={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Cor ${color}`}
                  />
                ))}
              </ColorsRow>
            </OptionGroup>

            <BuyButton type="button">COMPRAR</BuyButton>
          </DetailsColumn>
        </MainGrid>

        <RelatedSection>
          <RelatedHeader>
            <RelatedTitle>Produtos Relacionados</RelatedTitle>
            <SeeAllLink to="/produtos">Ver todos →</SeeAllLink>
          </RelatedHeader>

          <RelatedGrid>
            {RELATED.map((item) => (
              <RelatedCard key={item.id} to={`/produtos/${item.id}`}>
                <CardImageBox>
                  {item.badge && <DiscountBadge>{item.badge}</DiscountBadge>}
                  <CardImage
                    src={item.image}
                    alt={item.name}
                    onError={hideBrokenImg}
                  />
                </CardImageBox>

                <CardCategory>{item.category}</CardCategory>
                <CardName>{item.name}</CardName>
                <CardPriceRow>
                  {item.discountPrice && <CardOldPrice>{item.price}</CardOldPrice>}
                  <CardCurrentPrice>
                    {item.discountPrice || item.price}
                  </CardCurrentPrice>
                </CardPriceRow>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedSection>
      </Container>
    </PageWrapper>
  );
}

export default ProductViewPage;

/* ================= STYLED COMPONENTS ================= */

const PageWrapper = styled.main`
  width: 100%;
  background-color: #f9fafb;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 40px 0 80px;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
`;

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const MainStage = styled.div`
  position: relative;
  background-color: ${(props) => props.$bg || '#e2e6fc'};
  border-radius: 6px;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 56px;
  transition: background-color 0.2s;

  @media (max-width: 600px) {
    height: 300px;
    padding: 16px 42px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 30px;
  color: #474747;
  cursor: pointer;
  padding: 8px;
  line-height: 1;

  &:first-of-type {
    left: 14px;
  }

  &:last-of-type {
    right: 14px;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 18px 20px rgba(0, 0, 0, 0.14));
`;

const ThumbRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const ThumbButton = styled.button`
  background-color: ${(props) => props.$bg || '#f2f2f2'};
  border: 2px solid ${(props) => (props.$active ? '#c92071' : 'transparent')};
  border-radius: 6px;
  height: 82px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transform: rotate(-12deg);
  }

  @media (max-width: 600px) {
    height: 56px;
  }
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #1f1f1f;
  margin: 0 0 8px 0;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const MetaInfo = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0 0 12px 0;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

const Stars = styled.span`
  color: #f6aa1c;
  font-size: 16px;
  letter-spacing: 2px;
`;

const RatingBadge = styled.span`
  background-color: #f6aa1c;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  padding: 3px 8px;
`;

const ReviewCount = styled.span`
  font-size: 13px;
  color: #8f8f8f;
`;

const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
`;

const CurrentPrice = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #1f1f1f;

  small {
    font-size: 16px;
    font-weight: 600;
  }
`;

const OldPrice = styled.span`
  font-size: 15px;
  color: #cccccc;
  text-decoration: line-through;
`;

const SectionLabel = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: #8f8f8f;
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #474747;
  margin: 0 0 22px 0;
`;

const OptionGroup = styled.div`
  margin-bottom: 18px;
`;

const SizesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SizeButton = styled.button`
  min-width: 44px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$active ? '#c92071' : '#cccccc')};
  background-color: ${(props) => (props.$active ? '#c92071' : '#ffffff')};
  color: ${(props) => (props.$active ? '#ffffff' : '#474747')};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const ColorsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  border: 2px solid #ffffff;
  outline: 2px solid ${(props) => (props.$active ? '#c92071' : 'transparent')};
  cursor: pointer;
`;

const BuyButton = styled.button`
  margin-top: 8px;
  width: 220px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: #f6aa1c;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.96);
  }
`;

const RelatedSection = styled.section`
  margin-top: 64px;
`;

const RelatedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RelatedTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #474747;
  margin: 0;
`;

const SeeAllLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: #c92071;
  text-decoration: none;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CardImageBox = styled.div`
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
  z-index: 1;
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #e7ff86;
  color: #474747;
  font-size: 11px;
  font-weight: 700;
  border-radius: 999px;
  padding: 5px 12px;
  z-index: 2;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s ease;

  ${RelatedCard}:hover & {
    transform: scale(1.03);
  }
`;

const CardCategory = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8f8f8f;
`;

const CardName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #474747;
  margin: 4px 0;
`;

const CardPriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardOldPrice = styled.span`
  font-size: 16px;
  color: #8f8f8f;
  text-decoration: line-through;
`;

const CardCurrentPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1f1f1f;
`;