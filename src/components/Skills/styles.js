import styled from 'styled-components'

export const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));

  .certificates {
    a {
      color: ${props => props.theme.color};

      &:hover,
      &:active {
        color: ${props => props.theme.hl};
      }
    }

    ul {
      padding: 0;
      font-size: 30px;
      font-weight: 400;
      margin-top: 50px;

      li > a {
        text-align: left;
      }

      li > ul {
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-left: 0;
        margin-top: 10px;

        > li {
          margin-left: 10px;
        }
      }
    }
  }

  .skills {
    margin-top: 50px;
    padding: 20px;
    border-radius: 40px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      li {
        i {
          width: 100%;
          height: 100%;
          display: block;
          padding: 10px 35px;
        }
      }

      &.big {
        li {
          width: 33%;
        }
      }

      &.medium {
        li {
          width: 22%;
        }
      }

      &.small {
        li {
          width: 15%;
          i {
            padding: 10px 15px;
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .skills {
      ul {
        li {
          i {
            padding: 0;
          }
        }

        &.small {
          display: none;
        }
      }
    }
  }
`
