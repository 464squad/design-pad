import React from 'react';



class EDIT extends React.Component 
{

         constructor(props)
         {
             super(props)
            this.state ={ 
                EDIT: this.props.edit 
            }
          }


        ButtonPressed = () => 
        {
            // console.log(this.state.EDIT);
            this.props.editting();
        }





   /* If (EDIT = 'editing')
    {
        allowDrop = true;
    }
    else if 
    {
        allowDrop = false;

    }*/ 

        
    render(){
        // console.log(this.state.EDIT)
        return(
            <div>
                <div>
                    <button className="button" onClick={this.ButtonPressed}>Edit</button>  
                </div>
            </div>
        )
    }


}

export default EDIT






//Anything major - git add * 
// Git status 
// Git commit -m "message here" 
//Git push

//Git log (commit history)
//GIT CHECKOUT "BRANCH NAME" - Switches branches
//Git pull to pull branches
//Git merge PadInput/ or branch name

//Source control in VS accept current changes for package-lock.json