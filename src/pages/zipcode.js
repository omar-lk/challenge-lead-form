import React from 'react'
import {
  DescriptionContainer,
  InputsGroup,
  QuestionContainer,
  Wrapper
} from '../components/styled-components'
import ContinueButton from '../components/continue-button'


export default function ZipCode() {
  
  return (
    <Wrapper>
      <QuestionContainer isFullWidth>
        Let's Learn About Your Home
      </QuestionContainer>
      <DescriptionContainer isFullWidth>
        Enter your property's <strong>zip code</strong>
      </DescriptionContainer>
      <InputsGroup isAddress>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          placeholder="Enter zip code..."
        />
      </InputsGroup>
      <ContinueButton />
    </Wrapper>
  )
}
