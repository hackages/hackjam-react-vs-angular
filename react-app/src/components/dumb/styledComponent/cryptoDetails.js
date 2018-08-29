import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.div`
  background-color: #673ab7;
  margin: 1rem 0 1rem 0;
  box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  border-radius: 10px;
  width: 280px;
`

export const CardHeader = styled.div`
  padding: 0 1rem 0 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 78px;
`

export const PlusButton = styled(Link)`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ffc107;
  color: white;
  top: -22px;
  right: 15px;
  border-radius: 50%;
  border: none;
  outline: none;
  font-size: 22px;
  text-decoration: none;
`

export const CardBody = styled.div`
  position: relative;
  padding: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 0.1rem solid white;
  color: #673ab7;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding-top: 0.6rem;
  p {
    margin: 0;
    &:last-of-type {
      margin-top: 0.4rem;
      font-size: 0.855rem;
    }
  }
`
export const Values = styled.span`
  color: ${props => (props.positif ? 'green' : 'red')};
`
