import React from 'react';
import '../container.css';
import DesignContainer from './DesignContainer';
import 'bootstrap/dist/css/bootstrap.css';

class Container extends React.Component {

    render(){
        return(
            <div className="entire_container">
                <DesignContainer />
                <button  className= "edit_button" type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
            Edit
          </button>
            </div>
        )
    }
}

export default Container

