import { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
// import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";


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
        const feedbackTitle = 'Please leave feedback'
        const handleClickGood = this.handleClickGood
        const handleClickNeutral = this.handleClickNeutral
        const handleClickBad = this.handleClickBad

        return (
         
            <div>
                <Section title={ feedbackTitle} children={({handleClickGood, handleClickNeutral, handleClickBad})}/>
                 {/* <FeedbackOptions handleClickGood={this.handleClickGood} handleClickNeutral={this.handleClickNeutral} handleClickBad={this.handleClickBad}/> */}
                <p className="feedbackDescription">Statistics</p>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positiveFeedback}/>
            </div>

     )
    
    };
};

