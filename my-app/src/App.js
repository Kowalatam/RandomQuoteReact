import React from 'react'
import DisplayTexts from './DisplayTexts'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      //loading: false,  //part of loading... set up removed as api call is quite fast
      quotesData: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // fetch the data from the api and assign to this.state.quotesdata
  componentDidMount(){
    //setstate loading true so Loading is diplayed while fectch is still running
  /*   this.setState({      //part of loading...
      loading : true 
    }) */

    fetch('https://quota.glitch.me/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        quotesData: data
      })
    })

    /* this.setState({      //part of loading...
      loading: false
    }) */
  }
  // when button is clicked, get new quote from componentDidMount()
  handleClick(){
    this.componentDidMount()
  }

  render(){
    /* const isLoading = this.state.loading ? "Loading" : "done" */ //part of loading...
    
    return(
      <div>
        <DisplayTexts 
          /* isLoading={isLoading}  */          //part of loading...
          quotesData={this.state.quotesData} 
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App