
import React,{Component} from "react"
import ReactDOM from 'react-dom'
export default class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (<div>
            "hello,react"
        </div>)
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))