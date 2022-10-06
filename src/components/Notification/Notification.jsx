import PropTypes from 'prop-types';
import css from './Notification.module.css';

function Notification({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
