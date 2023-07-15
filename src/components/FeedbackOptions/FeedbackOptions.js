import React from "react";
import { nanoid } from 'nanoid'
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ul className={css.list}>
        {(options.map((option) => {

         return <li key={nanoid(10)}><button className={css.button} type="button" onClick={()=>onLeaveFeedback(option)}>{ option}</button></li>
    }))}
    </ul>
   
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}