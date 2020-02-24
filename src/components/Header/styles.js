import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 210px;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto 100px;
  padding: 0 20px;

  ul {
    display: flex;

    li {
      margin-left: 40px;
    }

    &.theme-and-lang {
      justify-content: flex-end;
      margin-bottom: 50px;
      margin-top: 100px;
    }
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.hl};
    }
  }

  .close {
    display: none;
  }

  .open {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.hl}99;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    padding-top: 20px;

    &.open {
      display: block;

      .close {
        display: block;
      }
    }

    .close {
      font-size: 40px;
      position: absolute;
      top: 0;
      right: 15px;
    }

    nav {
      max-width: 100%;
    }

    button {
      &:hover {
        color: #ffffff;
      }
    }

    ul {
      &.theme-and-lang {
        justify-content: center;

        li {
          margin-left: 10px;
        }
      }
    }

    .links {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        margin-left: 0px;
      }

      button {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`

export const StyledHamburguer = styled.button`
  border: 0;
  background: 0;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  z-index: 1000;

  &.menu-open {
    display: none;
  }

  @media(min-width: 768px) {
    display: none;
  }
`
