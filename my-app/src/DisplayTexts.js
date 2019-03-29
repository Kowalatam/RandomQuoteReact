import React from 'react'

function DisplayTexts(props){
    return (
        <div>
            <h1>{props.isLoading}</h1>
            <h1>{props.quotesData.quoteText}</h1>
            <h1>{props.quotesData.quoteAuthor}</h1>
            <button onClick={props.handleClick}>Click Me</button>
        </div>
    )
}

export default DisplayTexts