import { Component } from "react";

class Clock extends Component{
    state = {
        date : new Date()
    }
    //component mount method be call to set the function
    componentDidMount(){
        this.timerId = setInterval(this.tick, 1000);
    }
    //unMount the component 
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick = ()=> {
        this.setState({
            date : new Date()
        })
    }

    render(){
        const {date} =this.state 
        return (
            <div>
                <h1>Clock</h1>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock
