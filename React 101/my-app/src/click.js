import React from "react";

class Click extends React.Component {
    clickMe() {
        console.log("I was clicked")
    }



    render() {
        return (
            <h1 onClick={() => this.clickMe()}> Click Me</h1>
        )
    }
}


export default Click;