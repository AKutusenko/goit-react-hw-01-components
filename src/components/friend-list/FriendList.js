import PropTypes from 'prop-types';

export default function FriendList({ friends = [] }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <span
              className="status"
              style={{ backgroundColor: getOnlineStatus(friend.isOnline) }}
            >
              o
            </span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
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
