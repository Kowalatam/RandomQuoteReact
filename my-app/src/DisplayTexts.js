import React from 'react'

function DisplayTexts(props){
    return (
        <div>
            <h1>Random Quote Machine</h1>
            <p>{props.quotesData.quoteText}</p>
            <p>{props.quotesData.quoteAuthor}</p>
            <button className="new-quote" onClick={props.handleClick}>New Quote</button>
        </div>
    )
}

export default DisplayTexts