import ContinueButton from '../components/continue-button'
import { useLeadContext } from '../state/context'
import { useLeadFormUtils } from '../utils/useLeadFormUtils'
import styled from 'styled-components'
import {
  DescriptionContainer,
  InputsGroup,
  QuestionContainer,
  Wrapper
} from '../components/styled-components'

export default function Adresse() {
  const { state } = useLeadContext()
  const { changeValue, addError, nextStep } = useLeadFormUtils()
  const validateAndMove = () => {
    if (!state.StreetAdresse) return addError('StreetAdresse', 'street adresse is required')
   console.log({firstName:state.firstName,
    lastName:state.lastName,
    zipCode:state.zipCode,
    Adresse:state.StreetAdresse});

  }
  return (
    <Wrapper>
      <QuestionContainer isFullWidth>
      Let's Learn About Your Home
      </QuestionContainer>
      <DescriptionContainer isFullWidth>
      Next, enter your property's street address
      </DescriptionContainer>
      <InputsGroup>
        <InputContainer hasError={state.errors.StreetAdresse}>
          <input
            type="text"
            name="StreetAdresse"
            id="StreetAdresse"
            placeholder=" Enter street address"
            value={state.StreetAdresse}
            onChange={(e) => changeValue('StreetAdresse', e.target.value)}
          />
          {state.errors.StreetAdresse && <p>{state.errors.StreetAdresse}</p>}
        </InputContainer>
      </InputsGroup>
      <ContinueButton onClick={validateAndMove} text="Show Me Results" />
    </Wrapper>
  )
}

const InputContainer = styled.div`
  width: inherit;
  position: relative;
  ${({ hasError }) =>
    hasError &&
    `
    input {
      border: 1px solid red;
    }
    p {
      font-size: 12px;
      font-family: Montserrat;
      color: red;
      margin: 0px;
      position: absolute;
    }
  `}
`