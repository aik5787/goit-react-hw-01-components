
import PropTypes from 'prop-types';
import {Container, Description, Avatar, Name, DescriptionItem, Stats, StatsItem, Label, Quantity } from './Profile.styled'





export const Profile = ({ username, tag, location, avatar, stats }) => {

  return (
    <Container>
      <Description >
        <Avatar  src={avatar} alt="User avatar" className="avatar"/>
        <Name >{username}</Name>
        <DescriptionItem>@{tag}</DescriptionItem>
        <DescriptionItem>{location}</DescriptionItem>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

