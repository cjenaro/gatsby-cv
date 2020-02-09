import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 210px;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;

  ul {
    display: flex;

    li {
      margin-left: 40px;
    }

    &.theme-and-lang {
      justify-content: flex-end;
    }
  }
`
