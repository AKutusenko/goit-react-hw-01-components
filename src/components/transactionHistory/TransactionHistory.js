import PropTypes from 'prop-types';
import Container from '../container/Container';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id} className={s.tr}>
                <td className={s.td}>{item.type}</td>
                <td className={s.td}>{item.amount}</td>
                <td className={s.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

TransactionHistory.defaultProps = {
  type: 'Type not found',
  amount: 'Amount not found',
  currency: 'Currency not found',
};
