import styled from "styled-components";


export const FriendsList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 40px;
    justify-content: center;
`

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 40px;
    flex-direction: column;
    gap: 10px;
    transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: inset 0 0 10px 20px rgba(152, 2, 252, 0.25);
        background-color: #f5f5f5;
        scale: 1.1;
    }
`

export const Photo = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    margin-bottom: 20px;
`

export const Name = styled.p`
    font-weight: bold;
`

export const Online = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
`

export const Ofline = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`



