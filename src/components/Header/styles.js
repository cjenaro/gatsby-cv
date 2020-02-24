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
`
