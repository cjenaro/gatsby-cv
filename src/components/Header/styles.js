import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 210px;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .name {
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 102.1%;
    color: #070707;
  }

  .lang {
    span {
      cursor: pointer;
      color: #828282;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      &.selected, &:hover {
        color: #000000;
      }
    }
  }

  svg {
    cursor: pointer;
  }
`

