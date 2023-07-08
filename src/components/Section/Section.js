import React from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export const Section = ({ title, children}) => {
    console.log(children);
    console.log(title);
    <section>
    <h1 className="feedbackTitle">{ title}</h1>
        <FeedbackOptions children={children} />
   </section>
  
};