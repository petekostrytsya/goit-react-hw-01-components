import styled from "styled-components";


export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    width: 100%;
    max-width: 200px;
    text-align: center;
    transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: inset 0 0 10px 0 rgba(201, 200, 200, 0.5);
    }
`

export const Label = styled.span`
    font-size: 24px;
    color: yellow;
    margin-bottom: 24px;
`

export const Percentage = styled.span`
    font-size: 36px;
    font-weight: 700;
    color: blue;
`