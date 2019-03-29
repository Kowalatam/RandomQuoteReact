import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      quotesData: {}
    }
  }

  // fetch the data from the api and assign to this.state.quotesdata
  componentDidMount(){
    fetch('https://quota.glitch.me/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        quotesData: data
      })
    })
  }

  render(){
    console.log(this.state.quotesData)
    return(
      <div>
        <h1>{this.state.quotesData.quoteText}</h1>
        <h1>{this.state.quotesData.quoteAuthor}</h1>
      </div>
    )
  }
}

export default App