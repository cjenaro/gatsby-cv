import styled from "styled-components"

export const ThemeStyles = styled.div`
  display: flex;
  cursor: pointer;

  .icon {
    background-color: #000000;
    color: #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: grid;
    align-items: center;
    justify-content: center;

    .icon-container {
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      opacity: 1;

      &.sun {
        transform: translateY(-10px);
      }

      &.moon {
        transform: translateY(10px);
      }

      &.hidden {
        transform: translateY(-50px);
        opacity: 0;
      }
    }
  }

  span {
    display: grid;
    align-items: center;
    margin-left: 15px;
  }
`
