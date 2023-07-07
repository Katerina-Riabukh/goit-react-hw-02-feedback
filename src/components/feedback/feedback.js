import { Component } from "react";


export class Feedback extends Component{

    // static defolteProps = {
    //     positivefeedback: 0,
    // };
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivefeedback: 0

    };

    handleClickGood = () => {
        this.setState((prevState) => ({ good: prevState.good + 1 }));
        this.countTotalFeedback()
    };

    handleClickNeutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1}));
        this.countTotalFeedback();
    };

    handleClickBad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1}));
        this.countTotalFeedback();
    };

    countTotalFeedback = () => {
        this.setState((prevState) => ({ total: prevState.total + 1 }));
        this.countPositiveFeedbackPercentage()
    }


    countPositiveFeedbackPercentage = () => {
        const count = Math.round(((100 * this.state.good) / this.state.total));
       
        this.setState((prevState) => ({ positiveFeedback: prevState.positivefeedback = count })
        );
    }
     
   
    render() {
        const goodValue = this.state.good;
        const neutralValue = this.state.neutral;
        const badValue = this.state.bad;
        const total = this.state.total
        // const positiveFeedback = Math.round(((100 * goodValue) / total)) ;
        const positiveFeedback = this.state.positivefeedback;




        console.log(goodValue);
        console.log(neutralValue);
        console.log(badValue);
        console.log(total);
        console.log(positiveFeedback);

        return (
         
            <div>
                <h1 className="feedbackTitle">Please leave feedback</h1>
                <button className="GoodBtn" type="button" onClick={ this.handleClickGood}>Good</button>
                <button className="NeutralBtn" type="button" onClick={this.handleClickNeutral}>Neutral</button>
                <button className="BadBtn" type="button" onClick={this.handleClickBad}>Bad</button>
                <p className="feedbackDescription">Statistics</p>
                <ul className="feedbackResult">
                    <li>Good:
                        <span className="counter">{goodValue}</span>
                    </li>
                    <li>Neutral:
                        <span className="counter">{neutralValue}</span>
                    </li>
                    <li>Bad:
                        <span className="counter">{badValue}</span>
                    </li>
                    <li>Total:
                        <span className="counter">{total}</span>
                    </li>
                     <li>Positive fedback:
                        <span className="counter">{positiveFeedback}%</span>
                    </li>
                </ul>

            </div>





     )
           

    
    };
};

