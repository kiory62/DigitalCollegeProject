import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import carrinho from '../../assets/carrinho.png';
import lupa from '../../assets/lupa.png';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Produtos', to: '/produtos' },
    { label: 'Categorias', to: null },
    { label: 'Meus Pedidos', to: null },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchTerm);
  };

  return (
    <HeaderContainer>
      <InnerContainer>
        <HeaderTop>
          <Link to="/">
            <img src={logo} alt="logo do digital college" />
          </Link>

          <SearchBar onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton type="submit" aria-label="Pesquisar">
              <img src={lupa} alt="lupa de pesquisa" />
            </SearchButton>
          </SearchBar>

          <UserActions>
            <RegisterLink href="#cadastro">Cadastre-se</RegisterLink>
            <LoginButton type="button">Entrar</LoginButton>
            <CartButton type="button">
              <img src={carrinho} alt="carrinho de compra" />
            </CartButton>
          </UserActions>
        </HeaderTop>

        <Nav>
          <NavList>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <NavLink to={item.to} $isActive={pathname === item.to}>
                    {item.label}
                  </NavLink>
                ) : (
                  <NavAnchor
                    href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    $isActive={false}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.label}
                  </NavAnchor>
                )}
              </li>
            ))}
          </NavList>
        </Nav>
      </InnerContainer>
    </HeaderContainer>
  );
}

export default Header;

/* ================= STYLED COMPONENTS ================= */

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  padding: 24px 0 20px;
  border-bottom: 1px solid #f3f4f6;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const SearchBar = styled.form`
  flex: 1;
  max-width: 560px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    order: 3;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 52px;
  background-color: #f8f8f8;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0 48px 0 20px;
  font-size: 15px;
  color: #474747;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #c92071;
    background-color: #ffffff;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-shrink: 0;
`;

const RegisterLink = styled.a`
  color: #474747;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s;

  &:hover {
    color: #c92071;
  }
`;

const LoginButton = styled.button`
  background-color: #c92071;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a8185d;
  }
`;

const CartButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  margin-left: 8px;
  background: none;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const navLinkStyles = `
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 6px;
  transition: all 0.2s;
`;

const NavLink = styled(Link)`
  ${navLinkStyles}
  font-weight: ${(props) => (props.$isActive ? '700' : '400')};
  color: ${(props) => (props.$isActive ? '#c92071' : '#474747')};
  border-bottom: 2px solid ${(props) => (props.$isActive ? '#c92071' : 'transparent')};

  &:hover {
    color: #c92071;
  }
`;

const NavAnchor = styled.a`
  ${navLinkStyles}
  font-weight: 400;
  color: #474747;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #c92071;
  }
`;