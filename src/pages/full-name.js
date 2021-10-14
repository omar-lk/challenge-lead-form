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

export default function FullNameCapture() {
  const { state } = useLeadContext()
  const { changeValue, addError, nextStep } = useLeadFormUtils()
  const validateAndMove = () => {
    if (!state.firstName) return addError('firstName', 'first name is required')
    if (!state.lastName) return addError('lastName', 'last name is required')
    nextStep()
  }
  return (
    <Wrapper>
      <QuestionContainer isFullWidth>
        Okay, Home Refinance it is!
      </QuestionContainer>
      <DescriptionContainer isFullWidth>
        Who would be requesting the loan?
      </DescriptionContainer>
      <InputsGroup>
        <InputContainer hasError={state.errors.firstName}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name..."
            value={state.firstName}
            onChange={(e) => changeValue('firstName', e.target.value)}
          />
          {state.errors.firstName && <p>{state.errors.firstName}</p>}
        </InputContainer>

        <InputContainer hasError={state.errors.lastName}>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name..."
            value={state.lastName}
            onChange={(e) => changeValue('lastName', e.target.value)}
          />
          {state.errors.lastName && <p>{state.errors.lastName}</p>}
        </InputContainer>
      </InputsGroup>
      <ContinueButton onClick={validateAndMove} />
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
