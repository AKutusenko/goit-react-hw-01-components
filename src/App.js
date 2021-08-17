import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

export default function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
