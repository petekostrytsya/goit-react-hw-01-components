import PropTypes from "prop-types";
import { FriendsList, FriendsItem, Photo, Name, Online, Ofline } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <Photo src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
          { isOnline ? <Online /> : <Ofline /> }
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