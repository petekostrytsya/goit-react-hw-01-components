import styled from "styled-components";


export const Transaction = styled.table`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #333232;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  text-align: center; 
`

export const TitleHead = styled.th`
    height: 80px;
    background-color: yellow;
    color: blue;
    transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        background-color: blue;
        color: yellow; 
    }
`

export const Row = styled.tr`
  background-color: #f3f2f2;
`

export const Cell = styled.td`
    border: solid #ccc 1px;
    padding: 12px;
`