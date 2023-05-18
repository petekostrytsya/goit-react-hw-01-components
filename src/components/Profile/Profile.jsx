import PropTypes from "prop-types";


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (  <div className ="profile">
  <div className ="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p className ="name">{username}</p>
    <p className ="tag">@{tag}</p>
    <p className ="location">{location}</p>
  </div>

  <ul className ="stats">
    <li>
        <span className="label">{followers}</span>
      <span className ="quantity">1000</span>
    </li>
    <li>
      <span className ="label">{views}</span>
      <span className ="quantity">2000</span>
    </li>
    <li>
      <span className ="label">{likes}</span>
      <span className ="quantity">3000</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.exact ({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),)
}

