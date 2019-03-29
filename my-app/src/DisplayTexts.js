import React from 'react'

function DisplayTexts(props){
    return (
        <div className="main">
            <h1>Random Quote Machine</h1>
            <div className="quote-box">
                <p>{props.quotesData.quoteText}</p>
                <p className="author">{props.quotesData.quoteAuthor}</p>
                <div className="new_share_b">
                    <button className="new-quote" onClick={props.handleClick}>New Quote</button>
                </div>
            </div>            
        </div>
    )
}

export default DisplayTexts