import React from "react"

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    	isLogin:'',
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.home && nextProps.home.state.isLogin) {
    	let isLogin = nextProps.home.state.isLogin
    	this.setState({
    		isLogin:isLogin
    	});
    }
  }

  componentDidMount(){
  	setTimeout(()=> {
    	this.props.changePage(); 
  	},3000);
  }

  render(){
    return <h1 id="title">page:{this.state.isLogin}</h1>
  }
}

export default Home;