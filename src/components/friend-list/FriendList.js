import PropTypes from 'prop-types';
import Container from '../container/Container';
import s from './FriendList.module.css';

export default function FriendList({ friends = [] }) {
  return (
    <Container>
      <ul className="friend-list">
        {friends.map(friend => {
          return (
            <li className={s.item} key={friend.id}>
              <span
                className={s.status}
                style={{ backgroundColor: getOnlineStatus(friend.isOnline) }}
              ></span>
              <img
                className={s.avatar}
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className={s.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

FriendList.defaultProps = {
  avatar: '../../images/default.png',
  name: 'Not enough information',
  isOnline: false,
};

function getOnlineStatus(status) {
  let color = '';
  status ? (color = 'green') : (color = 'red');
  return color;
}
