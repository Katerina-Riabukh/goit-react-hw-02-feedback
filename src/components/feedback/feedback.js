import { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/notification/notification";



export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClickFeedback = (option) => {

        this.setState((prevState) => ({ [option]: prevState[option] + 1 }));

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
                <Section title='Pleas leave feedback'>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClickFeedback} />
                </Section>

                <Section title='Statistics'>
                    {total === 0 ? (
                        <Notification message={"There is no feedback yet..."} />
                    ) : (
                        <Statistics good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={total}
                            positiveFeedback={positiveFeedback} />
                    )}
                </Section>

            </div>

        )

    };
};

