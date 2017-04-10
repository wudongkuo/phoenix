
import React,{Component} from "react"
import ReactDOM from 'react-dom'

import ScheduleActions from './modules/schedule-actions'
import ScheduleGrid from './modules/schedule-grid'
import ScheduleDetail from './modules/schedule-detail'

import "./index.less"
export default class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
           <div className="box">
            <div className="article">
             <div className="top">
               <ScheduleGrid/>
             </div>
             <div className="bottom">
               <ScheduleDetail/>
             </div>
            </div>
            <div className="slide">
              <ScheduleActions/>
            </div>
           </div>
          )
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