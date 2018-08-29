import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`

export const SubHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;
  background-color: #d1c4e9;
  box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  position: sticky;
  top: 0;
  color: #673ab7;
  padding: 0.5em 0;
  z-index: 5;
`

export const Search = styled.input`
  box-sizing: content-box;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: 40px;
  border: 1px solid #512da8;
  color: #512da8;
  border-radius: 4px;
  padding: 0 16px 0 40px;
  line-height: 16px;
  transition: all 0.2s;
  &:focus {
    border-color: #673ab7;
    outline: none;
    color: #673ab7;
  }
  margin-top: 1rem;
  font-size: 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const RefreshButton = styled.button`
  background-color: #673ab7;
  color: white;
  font-size: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
  border-radius: 6px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`


