import React, { Component } from 'react'
import "./style.css"


export default class Title extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const title = document.querySelector('.padTitle');
        let titleTextContent = title.textContent;
        let splitTxt = titleTextContent.split(''); 
        title.innerHTML = '';
        for(let i = 0; i < splitTxt.length; i++){
            title.innerHTML += '<span>' + splitTxt[i]+ '</span>'
        }
        let char = 0;
       
        let onTick = () => {
            const span = document.querySelectorAll('span')[char];
            span.classList.add('fade');
            console.log(span);
            char++;
            if(char == splitTxt.length){
                //stop
                complete();
                return;
            }
        }

        let complete = () => {
            clearInterval(timer);
            timer = null;
        }

        let timer = setInterval(onTick, 260);
                
    }

    
    render() {
        return (
            <div>
                <h1 className="padTitle" >D E S I G N P A D</h1>
            </div>
        )
    }
}
