import { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";


export class Feedback extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClickGood = () => {
        this.setState((prevState) => ({ good: prevState.good + 1 }));
    };

    handleClickNeutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1}));
    };

    handleClickBad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1}));
    };

    countTotalFeedback = () => {
 
        return Object.values(this.state).reduce((total, value) => total += value, 0);
    };
    
    countPositiveFeedbackPercentage = (goodValue, total) => {
        
        return goodValue === 0 ? 0 : Math.round(((100 * goodValue) / total));
    };
     
   
    render() {
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage(this.state.good, total);

        return (
         
            <div>
                <h1 className="feedbackTitle">Please leave feedback</h1>
                {/* <button className="GoodBtn" type="button" onClick={this.handleClickGood}>Good</button>
                <button className="NeutralBtn" type="button" onClick={this.handleClickNeutral}>Neutral</button>
                <button className="BadBtn" type="button" onClick={this.handleClickBad}>Bad</button> */}
                <FeedbackOptions handleClickGood={this.handleClickGood} handleClickNeutral={this.handleClickNeutral} handleClickBad={this.handleClickBad}/>
                <p className="feedbackDescription">Statistics</p>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positiveFeedback}/>
            </div>

     )
    
    };
};

