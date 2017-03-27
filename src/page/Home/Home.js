import React from "react"

class Home extends React.Component{
    constructor(props){
        super(props)
        console.log('home');
    }

    render(){
        return <h1 id="title">Home</h1>
    }
}

export default Home;