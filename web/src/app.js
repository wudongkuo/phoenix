
import React,{Component} from "react"
import ReactDOM from 'react-dom'
export default class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (<div>
            <button>hels</button>
        </div>)
    }
}

var rootInstance=ReactDOM.render(<App/>,document.getElementById("app"))

if(module.hot){
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      // 帮助 React Hot Loader 识别出页面中的根组件
      return [rootInstance];
    }
  });
}