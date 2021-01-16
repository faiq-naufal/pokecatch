import styled from "@emotion/styled";

export const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background: #fff;
  box-shadow: rgba(108, 114, 124, 0.16) 0px -2px 4px 0px;

  @media (min-width: 768px) {
    background: transparent;
    box-shadow: none;
    top: 0;
    right: 0;
    bottom: unset;
    left: unset;
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  li {
    flex: 1;
    display: block;

    @media (min-width: 768px) {
      max-width: 180px;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0.375rem 0.5rem;
    width: 100%;
    height: 100%;
    color: #171923;
    text-decoration: none;

    @media (min-width: 768px) {
      padding: 0.5rem;
      color: #fff;
      font-size: 1.5rem;
      &:hover {
        text-decoration: underline;
      }
    }

    .link__icon {
      max-width: 30px;
      max-height: 30px;
      display: inline-flex;
      justify-content: center;

      @media (min-width: 768px) {
        max-width: 36px;
        max-height: 36px;
      }

      img {
        width: auto;
        height: 100%;
      }
    }

    .link__label {
      margin-top: 0.25rem;
      display: flex;
      @media (min-width: 768px) {
        display: inline-flex;
      }
    }
  }
`;
