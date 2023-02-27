import React from "react";
class StateCom extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            clicks : 0,
            remaining : 100
        }
    }
    clickMe() {
        this.setState({
        clicks: this.state.clicks + 1,
        remaining: this.state.remaining - 1 
    })
}

render() {
    return (
        <div>
        <button onClick={() => this.clickMe()}>Click Me</button>
        <div>{this.state.clicks} clicks, remaining {this.state.remaining}</div>
        </div>
    )
}
}

export default StateCom;