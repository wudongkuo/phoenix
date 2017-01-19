
import React,{Component} from "react"
import ReactDOM from 'react-dom'


export default class App extends Component {
    constructor(){
        super()
    }
    render(){
        return <div>Hello,World</div>
    }
}

var rootInstance=ReactDOM.render(<App/>,document.getElementById("app"))

if(module.hot){
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      return [rootInstance];
    }
  });
}