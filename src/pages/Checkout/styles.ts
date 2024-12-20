import styled from 'styled-components'
import { breakPoints, colors } from '../../../styles/styles'

type inputGroupProps = {
  maxWidth?: string
  marginTop?: string
}
type rowProps = {
  marginTop?: string
}
type tabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<rowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin-top: 16px;
  }
`

export const InputGroup = styled.div<inputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
  label {
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border-radius: 4px;
    width: 100%;
    &.error {
      border: 1px solid red;
    }
  }
  select {
    width: max-content;
  }
`
export const TabButton = styled.button<tabButtonProps>`
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.secondary : colors.black};
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
