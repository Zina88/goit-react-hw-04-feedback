import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['Good', 'Neutral', 'Bad'];

  const handleClickButton = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'Good':
        setGood(good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral + 1);
        break;

      case 'Bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((good / totalFeedback) * 100);
    }
    return `${result}%`;
  };

  return (
    <div className={css.container}>
      <div className={css.section}>
        <Section title="Please leave feedback!">
          <FeedbackOptions options={options} onLeaveFeedback={handleClickButton} />
        </Section>
      </div>

      <div className={css.section}>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
