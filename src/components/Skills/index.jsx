import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { StyledSkills } from "./styles"
import { StyledSection } from "../../common-styles/styles"

const Skills = () => {
  return (
    <StyledSection>
      <h2 className="title">
        <FormattedMessage id="ABOUT_ME"></FormattedMessage>
      </h2>
      <h3 className="description">
        <FormattedMessage id="ABOUT_ME_DESCRIPTION"></FormattedMessage>
      </h3>
      <StyledSkills>
        <div>
          <h3 className="subtitle">
            <FormattedMessage id="PERSONAL_DETAILS"></FormattedMessage>
          </h3>
        </div>
        <div>
          <h3 className="subtitle">
            <FormattedMessage id="MY_SKILLS"></FormattedMessage>
          </h3>
        </div>
      </StyledSkills>
    </StyledSection>
  )
}

export default Skills
