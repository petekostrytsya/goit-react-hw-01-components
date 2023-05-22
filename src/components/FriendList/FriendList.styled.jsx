import styled from "styled-components";


export const FriendsList = styled.ul`
    /* list-style: none; */
    margin: 0;
    padding: 0;
    display: flex;
    gap: 40px;
    justify-content: center;
    background-color: beige;
`

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
  /* justify-content: space-between; */
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 40px;
    flex-direction: column;
    gap: 10px;
    transition: all ease-in-out 0.5s;
`



