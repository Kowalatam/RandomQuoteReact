import React from 'react'

function DisplayTexts(props){
    let tweetUrl = `https://twitter.com/intent/tweet?text= ${props.quotesData.quoteText} - ${props.quotesData.quoteAuthor}`

    return (
        <div className="main">
            <h1>Random Quote Machine</h1>
            <div className="quote-box">
                <p>{props.quotesData.quoteText}</p>
                <p className="author">...<i class="fas fa-pencil-alt"></i> {props.quotesData.quoteAuthor}</p>
                <div className="new_share_b">
                    <button className="new-quote" onClick={props.handleClick}>New Quote</button>
                    <div>
                        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default DisplayTexts