import styled from "styled-components";


export const ContainerProfile = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 520px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    border: 2px solid rgb(9, 16, 110);
    transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        box-shadow: 0 0 30px 5px rgba(3, 110, 160, 0.5);
    }
`

export const DescriptionProfile = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const Photo = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 20px;
    transition: all ease-in-out 0.25s;

    &:hover,
    &:focus {
        box-shadow: 0 0 30px 5px rgba(3, 110, 160, 0.5);
    }
`

export const Name = styled.p`
    font-size: 28px;
    color: black;
    font-weight: bold;
`

export const Tag = styled.p`
    font-size: 18px;
    color: black;
    margin-top: 5px;
`

export const Location = styled.p`
    font-size: 18px;
    color: black;
    margin-top: 5px;
`

export const StatsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 36px;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;
`

export const Label = styled.span`
    font-size: 24px;
    color: red;
    margin-top: 60px;
`

export const Quantity = styled.span`
    font-size: 20px;
    color: #8787f8;
    margin-top: 20px;
`

