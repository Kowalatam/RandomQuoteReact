import React from 'react'
import DisplayTexts from './DisplayTexts'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      quotesData: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // fetch the data from the api and assign to this.state.quotesdata
  componentDidMount(){
    //setstate loading true so Loading is diplayed while fectch is still running
    this.setState({
      loading : true 
    })

    fetch('https://quota.glitch.me/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        quotesData: data
      })
    })

    this.setState({
      loading: false
    })
  }
  // when button is clicked, get new quote from componentDidMount()
  handleClick(){
    this.componentDidMount()
  }

  render(){
    const isLoading = this.state.loading ? "Loading" : "done"
    
    return(
      <div>
        <DisplayTexts 
          isLoading={isLoading} 
          quotesData={this.state.quotesData} 
          handleClick={this.handleClick}
        />
      </div>

      /* <div>
            <h1>{isLoading}</h1>
            <h1>{this.state.quotesData.quoteText}</h1>
            <h1>{this.state.quotesData.quoteAuthor}</h1>
            <button onClick={this.handleClick}>Click Me</button>
      </div> */
    )
  }
}

export default App