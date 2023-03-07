import React from "react";
import { MyDiv } from "./Feedback.styled";
import { Statistics } from "./Statistics";
import {FeedbackOptions} from "./FeedbackOptions";
import { Section } from "./Section";

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

  AllClick = clickType=> {  
    this.setState(prevState => {
          return {[clickType]: prevState[clickType] + 1,}
        });
  }

  render() {
    return (<MyDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good','neutral','bad']} AllClick={this.AllClick} />
      </Section>
      <Section title="Statistics">
        <Statistics state={this.state} />
      </Section>   
    </MyDiv>);
  }

}

export default App;
