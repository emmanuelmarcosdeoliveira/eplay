import styled from 'styled-components';
import { colors } from '../../styles';

export const HeaderBar = styled.header`
  background-color: ${colors.color3};
  padding: 24px;
  color: ${colors.color1};
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
    }
  }
  a {
    color: ${colors.color1}; 
    font-weight: 700;
    text-decoration: none;
   }
 `
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  img {
  margin-left: 16px;
}
`