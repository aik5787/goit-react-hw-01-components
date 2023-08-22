import PropTypes from 'prop-types';
import { FriendListItemContainer, StatusIndicator, Avatar, FriendName, FriendListContainer } from './FriendList.styled'


export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListItemContainer>
    <StatusIndicator $isOnline={isOnline} />
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <FriendName>{name}</FriendName>
  </FriendListItemContainer>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export const FriendList = ({ friends }) => (
  <FriendListContainer>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </FriendListContainer>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};