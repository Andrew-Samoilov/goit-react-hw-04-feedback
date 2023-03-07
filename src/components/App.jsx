import React, { useState } from "react";
import { MyDiv } from "./Feedback.styled";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const AllClick = (clickType) => {
    switch (clickType) {
      case 'good':
        setGood(() => (good + 1));
        break;
      case 'neutral':
        setNeutral(() => (neutral + 1));
        break;
      case 'bad':
        setBad(() => (bad + 1));
        break;
      default:
        break;
    }
    // setState(prevState => {
    //       return {[clickType]: prevState[clickType] + 1,}
    //     });
  }

  return (<MyDiv>
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} AllClick={AllClick} />
    </Section>
    <Section title="Statistics">
      <Statistics good={good} neutral={neutral} bad={bad} />
    </Section>
  </MyDiv>);

}
