import {Component} from 'react'
import Clock from './components/Clock'

class App extends Component {
    state ={clockShow : false}

    onToggleClockShows = () =>{
        this.setState(prevState => {
            const {clockShow} = prevState 
            return {
                clockShow : !clockShow
            }
        })
    }
    render() {
        const {clockShow} = this.state 
        return (
            <div>
                <button onClick = {this.onToggleClockShows} type ="button">
                    {clockShow?"Hide Clock" : "Show Clock"}
                </button>
                {clockShow && 
                    <Clock/>
                    
                }
            </div>
        )
    }
}
export default App