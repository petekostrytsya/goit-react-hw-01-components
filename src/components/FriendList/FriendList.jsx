import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        </li>
      ))}
    </ul>
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