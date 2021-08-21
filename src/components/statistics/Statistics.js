import PropTypes from 'prop-types';
import Container from '../container/Container';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(statsItem => {
            return (
              <li
                className="item"
                key={statsItem.id}
                style={{ backgroundColor: getColor() }}
              >
                <span className="label">{statsItem.label}</span>
                <span className="percentage">{statsItem.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function getColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
