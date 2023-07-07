import React from "react";


export const FeedbackOptions = ({handleClickGood, handleClickNeutral,handleClickBad}) => {
    
    <div>
        <button className="GoodBtn" type="button" onClick={handleClickGood}>Good</button>
        <button className="NeutralBtn" type="button" onClick={handleClickNeutral}>Neutral</button>
        <button className="BadBtn" type="button" onClick={handleClickBad}>Bad</button>
    </div>
};