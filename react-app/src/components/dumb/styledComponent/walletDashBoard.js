import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  background-color: white;
  width: 61%;
  box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  margin: auto;
  padding: 1rem 1rem 1rem 1rem;
  margin-top: 2rem;
  border-radius: 10px;
`
export const Title = styled.h2`
  text-align: center;
  color: #512da8;
`

export const SubTitle = styled.h4`
  text-align: center;
  color: #d1c4fa;
`
export const Table = styled.table`
  margin: auto;
  text-align: center;
  display: table;
`

export const SellLink = styled(Link)`
  color: #512da8;
  text-decoration: none;
  outline: none;
`
