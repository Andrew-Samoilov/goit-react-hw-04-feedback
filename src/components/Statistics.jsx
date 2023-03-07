import PropTypes from 'prop-types'
import { Notification } from "./Notification";

export const Statistics = ({ good, neutral, bad }) => {
    // console.log(good+neutral+bad);
    let countTotalFeedback = () => good + neutral + bad;
    let countPositiveFeedbackPercentage = () => Math.ceil((good + neutral) * 100 / (countTotalFeedback()));
   
    if (countTotalFeedback() === 0) {
        return (<div>
            <Notification message={"There is no feedback"}/>
        </div>);
    } else {
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p><b>Total: {countTotalFeedback()}</b></p>
                <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
            </div>);
    }
}

Statistics.propTypes = {
    state: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
}