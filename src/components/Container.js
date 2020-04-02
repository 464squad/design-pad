import React from 'react';
import '../container.css';
import DesignContainer from './DesignContainer';
//import 'bootstrap/dist/css/bootstrap.css';
import Btn from './btn';


class Container extends React.Component {

    btn = {
        name: 'Foo Bar',
        handler: () => new Promise((resolve) => setTimeout(() => resolve(), 3000))
    };

    render(){
        return(
            <div className="entire_container">
                <DesignContainer />
                <Btn name={this.btn.name} handler={this.btn.handler.bind(this)} />
           
            </div>
        )
    }
}

export default Container




