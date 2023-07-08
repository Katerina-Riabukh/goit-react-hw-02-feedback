import React from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export const Section = ({ title, children }) => {
 
   return <section>
    <h1 className="feedbackTitle">{ title}</h1>
        <FeedbackOptions children={children} />
   </section>
  
};