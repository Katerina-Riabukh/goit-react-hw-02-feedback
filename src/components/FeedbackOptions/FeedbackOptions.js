import React from "react";


export const FeedbackOptions = (...children) => {
 
    const options = children[0];
    const good = options.children[0]
    const neutral = options.children[1]
     const bad = options.children[2]

    return (<>
                <button className="GoodBtn" type="button" onClick={good}>Good</button>
                <button className="NeutralBtn" type="button" onClick={neutral}>Neutral</button>
                <button className="BadBtn" type="button" onClick={bad}>Bad</button>
            </>
    );
};

