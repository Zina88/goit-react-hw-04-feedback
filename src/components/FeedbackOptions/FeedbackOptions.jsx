import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedbackList}>
    {options.map(option => (
      <li className={css.feedbackItem} key={option}>
        <button
          type="button"
          className={css.feedbackButton}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
