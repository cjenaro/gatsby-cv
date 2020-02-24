import styled from 'styled-components'

export const StyledSection = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    text-transform: uppercase;
    position: relative;
    z-index: 2;
    color: ${props => props.theme.hl};

    &:before {
      content: '';
      width: 58px;
      height: 58px;
      background-color: #63636311;
      position: absolute;
      z-index: -1;
      bottom: 8px;
      left: -22px;
    }
  }

  .description {
    margin-top: 8px;
    margin-bottom: 45px;
    font-weight: 100;
  }

  .subtitle {
    text-transform: uppercase;
    color: ${props => props.theme.hl};
  }

  @keyframes shadowFadeIn {
    0% {
      box-shadow: inset -5px -5px 6px ${props => props.theme.btnLightShadow},
        inset 5px 5px 6px ${props => props.theme.btnDarkShadow};
      background-image: linear-gradient(
        145deg,
        ${props => props.theme.btnLightShadow},
        ${props => props.theme.btnDarkShadow}25
      );
    }
    50% {
      box-shadow: none;
      background-image: none;
    }
    100% {
      box-shadow: -5px -5px 6px ${props => props.theme.btnLightShadow},
        5px 5px 6px ${props => props.theme.btnDarkShadow};
      background-image: linear-gradient(
        145deg,
        ${props => props.theme.btnDarkShadow}25,
        ${props => props.theme.btnLightShadow}
      );
    }
  }

  @keyframes shadowFadeOut {
    0% {
      box-shadow: -5px -5px 6px ${props => props.theme.btnLightShadow},
        5px 5px 6px ${props => props.theme.btnDarkShadow};
      background-image: linear-gradient(
        145deg,
        ${props => props.theme.btnDarkShadow}25,
        ${props => props.theme.btnLightShadow}
      );
    }
    50% {
      box-shadow: none;
      background-image: none;
    }
    100% {
      box-shadow: inset -5px -5px 6px ${props => props.theme.btnLightShadow},
        inset 5px 5px 6px ${props => props.theme.btnDarkShadow};
      background-image: linear-gradient(
        145deg,
        ${props => props.theme.btnLightShadow},
        ${props => props.theme.btnDarkShadow}25
      );
    }
  }

  .neumorph {
    box-shadow: -5px -5px 6px ${props => props.theme.btnLightShadow},
      5px 5px 6px ${props => props.theme.btnDarkShadow};
    background-image: linear-gradient(
      145deg,
      ${props => props.theme.btnDarkShadow}25,
      ${props => props.theme.btnLightShadow}
    );

    &.inset {
      box-shadow: inset -5px -5px 6px ${props => props.theme.btnLightShadow},
        inset 5px 5px 6px ${props => props.theme.btnDarkShadow};
      background-image: linear-gradient(
        145deg,
        ${props => props.theme.btnLightShadow},
        ${props => props.theme.btnDarkShadow}25
      );
      animation: shadowFadeOut 0.3s ease-in-out;

      &:hover {
        box-shadow: -5px -5px 6px ${props => props.theme.btnLightShadow},
          5px 5px 6px ${props => props.theme.btnDarkShadow};

        animation: shadowFadeIn 0.3s ease-in-out;
        background-image: linear-gradient(
          145deg,
          ${props => props.theme.btnDarkShadow}25,
          ${props => props.theme.btnLightShadow}
        );
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      padding-left: 22px;

      &:before {
        left: 0;
      }
    }
  }
`

export const NewmorphButton = styled.button`
  border: 0;
  padding: 15px 35px;
  color: ${props => props.theme.hl};
  background: none;
  font-weight: 400;
  cursor: pointer;
  box-shadow: -5px -5px 6px ${props => props.theme.btnLightShadow},
    5px 5px 6px ${props => props.theme.btnDarkShadow};
  border-radius: 16px;
  transition: box-shadow 0.2s ease-in-out;
  background-image: linear-gradient(
    145deg,
    ${props => props.theme.btnDarkShadow}25,
    ${props => props.theme.btnLightShadow}
  );

  &:hover {
    box-shadow: -7px -7px 4px ${props => props.theme.btnLightShadow},
      6px 6px 4px ${props => props.theme.btnDarkShadow};
  }
`
