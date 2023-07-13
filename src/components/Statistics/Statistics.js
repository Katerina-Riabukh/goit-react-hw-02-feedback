import React from "react";   
import css from './Statistics.module.css'
import PropTypes from 'prop-types';

   
export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => ( 
    <>
        <ul className={css.feedbackResult}>
             <li className={css.listItem}>Good
                <span  className={css.counter}>{good}</span>
            </li>
            <li className={css.listItem}>Neutral
                <span className={css.counter}>{neutral}</span>
            </li>
            <li className={css.listItem}>Bad
                <span className={css.counter}>{bad}</span>
            </li>
        </ul>
        <ul className={css.feedbackTotal}>
            <li className={css.listItemTotal}>Total
                <span className={css.counter}>{total}</span>
            </li>
            <li className={css.listItemPersent}> Positive fedback
            <span className={css.counter}>{positiveFeedback}%</span>
            </li>
        </ul>
     </>
);

   

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback:PropTypes.number.isRequired,
}