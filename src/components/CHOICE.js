import React from 'react';



class CHOICE extends React.Component 
{
    constructor(props) {
        super(props)
    }

    render()
    {
        return(
            <div>
                <div className="choices">
                    <h3 >options</h3>
                    <div>
                        {this.props.children}                    
                    </div>  
                </div>
            </div>
        )
    }


}

export default CHOICE