import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul className={css.statisticList}>
      <li className={css.statisticsItem}>
        <p>
          Good: <span className={css.statValue}>{good}</span>
        </p>
      </li>

      <li className={css.statisticsItem}>
        <p>
          Neutral: <span className={css.statValue}>{neutral}</span>
        </p>
      </li>

      <li className={css.statisticsItem}>
        <p>
          Bad: <span className={css.statValue}>{bad}</span>
        </p>
      </li>

      <li className={css.statisticsItem}>
        <p>
          Total: <span className={css.statValue}>{total}</span>
        </p>
      </li>

      <li className={css.statisticsItem}>
        <p>
          Positive Feedback: <span className={css.statValue}>{positivePercentage}</span>
        </p>
      </li>
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
