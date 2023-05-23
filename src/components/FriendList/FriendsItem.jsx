import PropTypes from "prop-types";
import { FriendsListItem, Photo, Name, Online, Ofline } from './FriendsItem.styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListItem>
            <Photo src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
            {isOnline ? <Online /> : <Ofline />}
        </FriendsListItem>
    )
}

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}