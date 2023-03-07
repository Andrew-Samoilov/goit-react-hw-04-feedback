import PropTypes from 'prop-types';
import { Btn } from "./Feedback.styled";

export const FeedbackOptions = ({ options, AllClick, }) => {
    return (
        <div className="btn-group">
            {options.map(
                val => <Btn key={val} type="button" onClick={() => AllClick(val)}>{val}</Btn>)}
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    Option: PropTypes.arrayOf(PropTypes.string),
    AllClick: PropTypes.func.isRequired,
}
