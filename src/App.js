import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/FriendList';
import friendListData from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactionData from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friendListData} />,
      <TransactionHistory items={transactionData} />
    </div>
  );
}
