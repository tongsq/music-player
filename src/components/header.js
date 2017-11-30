import React,{Component} from 'react'
import './header.less'

class Header extends Component{
    render() {
        return (
            <div className="components-header row">
                <img src="/static/images/logo.png" width="40" className="-col-auto" alt=""/>
                <h1 className="caption"> React Music Player</h1>
            </div>
        );
    }
}

export default Header;