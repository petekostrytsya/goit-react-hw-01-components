import PropTypes from "prop-types";
import { FriendsItem } from "./FriendsItem";
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
    <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (<FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
        })}
    </FriendsList>
  )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}