import styled from 'styled-components'
import { colors } from '../../../styles/styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`
export const Item = styled.li`
  position: relative;

  > img {
    border-radius: 8px;
    border: 2px solid ${colors.white};
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  place-items: center;
  &.visible {
    display: grid;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }
  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`