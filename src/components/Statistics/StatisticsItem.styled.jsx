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
`

export const Label = styled.span`
    margin-bottom: 10px;
    font-size: 12px;
    color: #888;
`

export const Percentage = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #000;
`