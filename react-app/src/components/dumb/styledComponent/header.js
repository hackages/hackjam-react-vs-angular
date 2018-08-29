import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const HeaderStyled = styled.div`
  background-color: #512da8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 6rem;
`

export const Title = styled.h1`
  padding-top: 1rem;
  padding-left: 1.2rem;
  color: #ffffff;
  margin: 0;
`

export const SubTitle = styled.h4`
  color: #d1c4e9;
  padding-left: 1.2rem;
  margin: 0;
`
export const LinkBox = styled.div`
  padding-right: 2rem;
  padding-top: 2.3rem;
`

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  margin-left: 0.4rem;
  text-decoration: none;
`
