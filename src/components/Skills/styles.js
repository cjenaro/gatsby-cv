import styled from 'styled-components'

export const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

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
`
