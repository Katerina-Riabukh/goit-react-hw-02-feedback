import React from "react";   

   
export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => ( 
     <>
         <ul className="feedbackResult"></ul>
             <li>Good:
                            <span className="counter">{good}</span>
                        </li>
                        <li>Neutral:
                            <span className="counter">{neutral}</span>
                        </li>
                        <li>Bad:
                            <span className="counter">{bad}</span>
                        </li>
                        <li>Total:
                            <span className="counter">{total}</span>
                        </li>
                         <li>Positive fedback:
                            <span className="counter">{positiveFeedback}%</span>
                        </li>
             <ul/>
     </>
);



