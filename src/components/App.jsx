import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styles from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = e => {
    const { name } = e.target.dataset;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const arrFeedbackNames = Object.keys(this.state);
    return (
      <div className={styles.wrapped}>
        <Section className={styles.section} title="Please leave feedback">
          <FeedbackOptions
            options={arrFeedbackNames}
            onLeaveFeedback={this.handlerClick}
          />
        </Section>
        <Section title="Statsectionistics">
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
