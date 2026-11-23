import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FILTERS = {
  Marca: ['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma'],
  Categoria: ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'],
  Gênero: ['Masculino', 'Feminino', 'Unisex'],
};

const PRODUCTS = [
  {
    id: 1,
    badge: '30% OFF',
    category: 'Tênis',
    productCategory: 'Esporte e lazer',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    relevance: 10,
    name: 'K-Swiss V8 - Masculino',
    price: '$200',
    discountPrice: '$100',
    numericPrice: 100,
    image: '/home-slide-3.jpeg',
  },
  {
    id: 2,
    badge: '30% OFF',
    category: 'Tênis',
    productCategory: 'Esporte e lazer',
    brand: 'Adidas',
    gender: 'Masculino',
    condition: 'Novo',
    relevance: 9,
    name: 'Adidas Runfalcon - Masculino',
    price: '$240',
    discountPrice: '$140',
    numericPrice: 140,
    image: '/home-slide-4.jpeg',
  },
  {
    id: 3,
    badge: null,
    category: 'Tênis',
    productCategory: 'Casual',
    brand: 'Nike',
    gender: 'Feminino',
    condition: 'Novo',
    relevance: 8,
    name: 'Nike Court Vision - Feminino',
    price: '$220',
    discountPrice: '$160',
    numericPrice: 160,
    image: '/home-slide-5.jpeg',
  },
  {
    id: 4,
    badge: null,
    category: 'Tênis',
    productCategory: 'Corrida',
    brand: 'Puma',
    gender: 'Masculino',
    condition: 'Novo',
    relevance: 7,
    name: 'Puma Velocity Nitro - Masculino',
    price: '$280',
    discountPrice: '$190',
    numericPrice: 190,
    image: '/home-slide-6.jpeg',
  },
  {
    id: 5,
    badge: null,
    category: 'Tênis',
    productCategory: 'Utilitário',
    brand: 'Balenciaga',
    gender: 'Unisex',
    condition: 'Usado',
    relevance: 6,
    name: 'Calenciaga Track - Unisex',
    price: '$350',
    discountPrice: '$250',
    numericPrice: 250,
    image: '/home-slide-7.jpeg',
  },
  {
    id: 6,
    badge: null,
    category: 'Tênis',
    productCategory: 'Casual',
    brand: 'K-Swiss',
    gender: 'Feminino',
    condition: 'Novo',
    relevance: 5,
    name: 'K-Swiss Court - Feminino',
    price: '$190',
    discountPrice: '$120',
    numericPrice: 120,
    image: '/home-slide-8.jpeg',
  },
];

export function Produtos({ searchTerm = '' }) {
  const [sortBy, setSortBy] = useState('relevantes');
  const [selected, setSelected] = useState({
    Marca: [],
    Categoria: [],
    Gênero: [],
  });
  const [condition, setCondition] = useState('');

  const toggleCheck = (group, value) => {
    setSelected((prev) => {
      const list = prev[group];
      return {
        ...prev,
        [group]: list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value],
      };
    });
  };

  const query = searchTerm.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchName = !query || item.name.toLowerCase().includes(query);
    const matchBrand =
      selected.Marca.length === 0 || selected.Marca.includes(item.brand);
    const matchCat =
      selected.Categoria.length === 0 ||
      selected.Categoria.includes(item.productCategory);
    const matchGender =
      selected.Gênero.length === 0 || selected.Gênero.includes(item.gender);
    const matchCondition = !condition || item.condition === condition;

    return matchName && matchBrand && matchCat && matchGender && matchCondition;
  }).sort((a, b) => {
    if (sortBy === 'menor-preco') return a.numericPrice - b.numericPrice;
    if (sortBy === 'maior-preco') return b.numericPrice - a.numericPrice;
    return b.relevance - a.relevance;
  });

  return (
    <PageWrapper>
      <Container>
        <TopBar>
          <ResultsText>
            <strong>Resultados para “{searchTerm.trim() || 'Tênis'}”</strong> -{' '}
            {filteredProducts.length} produtos
          </ResultsText>

          <SortBox>
            <label htmlFor="ordenar">Ordenar por:</label>
            <SortSelect
              id="ordenar"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevantes">mais relevantes</option>
              <option value="menor-preco">menor preço</option>
              <option value="maior-preco">maior preço</option>
            </SortSelect>
          </SortBox>
        </TopBar>

        <CatalogLayout>
          <FilterSidebar>
            <FilterTitle>Filtrar por</FilterTitle>
            <Divider />

            {Object.entries(FILTERS).map(([group, options]) => (
              <FilterGroup key={group}>
                <GroupLabel>{group}</GroupLabel>
                {options.map((option) => (
                  <OptionLabel key={option}>
                    <input
                      type="checkbox"
                      checked={selected[group].includes(option)}
                      onChange={() => toggleCheck(group, option)}
                    />
                    <span>{option}</span>
                  </OptionLabel>
                ))}
              </FilterGroup>
            ))}

            <FilterGroup>
              <GroupLabel>Estado</GroupLabel>
              {['Novo', 'Usado'].map((stateOption) => (
                <OptionLabel key={stateOption}>
                  <input
                    type="radio"
                    name="estado"
                    checked={condition === stateOption}
                    onChange={() =>
                      setCondition((prev) => (prev === stateOption ? '' : stateOption))
                    }
                  />
                  <span>{stateOption}</span>
                </OptionLabel>
              ))}
            </FilterGroup>
          </FilterSidebar>

          <ProductsGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} to={`/produtos/${product.id}`}>
                <ImageBox>
                  {product.badge && <DiscountBadge>{product.badge}</DiscountBadge>}
                  <ProductImg
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </ImageBox>

                <CategoryText>{product.category}</CategoryText>
                <ProductName>{product.name}</ProductName>
                <PriceRow>
                  {product.discountPrice && <OldPrice>{product.price}</OldPrice>}
                  <CurrentPrice>{product.discountPrice || product.price}</CurrentPrice>
                </PriceRow>
              </ProductCard>
            ))}
          </ProductsGrid>
        </CatalogLayout>
      </Container>
    </PageWrapper>
  );
}

export default Produtos;

/* ================= STYLED COMPONENTS ================= */

const PageWrapper = styled.section`
  width: 100%;
  background-color: #f9fafb;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 40px 0 72px;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
`;

const ResultsText = styled.p`
  font-size: 15px;
  color: #474747;
  margin: 0;

  strong {
    font-weight: 700;
    color: #1f1f1f;
  }
`;

const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #474747;
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #474747;
`;

const SortSelect = styled.select`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #474747;
  cursor: pointer;
  outline: none;
`;

const CatalogLayout = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSidebar = styled.aside`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 24px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
`;

const FilterTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #474747;
  margin: 0 0 14px 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e6e6e6;
  margin: 0 0 18px 0;
`;

const FilterGroup = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GroupLabel = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #474747;
  margin: 0 0 12px 0;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #474747;
  margin-bottom: 10px;
  cursor: pointer;

  input {
    accent-color: #c92071;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
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
  height: 250px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 12px;
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
`;

const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 12px 14px rgba(0, 0, 0, 0.12));
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
  margin: 4px 0;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OldPrice = styled.span`
  font-size: 16px;
  color: #8f8f8f;
  text-decoration: line-through;
`;

const CurrentPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1f1f1f;
`;