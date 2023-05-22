import PropTypes from "prop-types";
import { FriendsList, FriendsItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        </FriendsItem>
      ))}
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