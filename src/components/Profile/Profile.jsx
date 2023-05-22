import PropTypes from "prop-types";
import { ContainerProfile, DescriptionProfile, Photo, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from "./Profile.styled";


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (
<ContainerProfile>
  <DescriptionProfile>
    <Photo
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </DescriptionProfile>

  <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
</ContainerProfile>
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

