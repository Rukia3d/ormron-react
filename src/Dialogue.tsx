import React, { useContext, useState } from 'react';
import { AppContext } from "./AppContext";
import { IDialogue } from "./data/Types";
import { findDialogue } from './helpers';
import { dialogues } from './data/Dialogues';

type DialogueProps = {
    dialogue: IDialogue,
  }


const DialogueLine = (props: any) => {
    const dialogueLineStyle = {
        fontSize: "18pt",
        padding: "2em",
    }
    return (
    <div style={dialogueLineStyle} onClick={props.nextLine}>{props.line}</div>
    )
}
  
const DialogueCharacter = (props: DialogueProps) => {
    const dialogueCharacterStyle = {
        backgroundImage: `url(${props.dialogue.image})`,
        position: 'absolute' as 'absolute',
        height: "400px",
        width: "500px",
        top: "100px",
    }
    return (
        <div style={dialogueCharacterStyle}></div>
    )
}

const DialogueOutput = (props: DialogueProps) => {
    const dialoguePaperStyle = {
        height: "200px",
        width: "1024px",
        backgroundImage: `url("temp-backg1.png")`,
        bottom: "0",
        margin: "0px 0 auto",
        position: 'absolute' as 'absolute',
    }
    const [lineN, setLineN] = useState(0);
    const context = useContext(AppContext);
    const nextLine = () => {
        const isLastLine = lineN===props.dialogue.lines.length-1;
        if(isLastLine){
            console.log("Is Last line");
            if(typeof props.dialogue.nextNode=="string"){
                context.setDialogue(findDialogue(props.dialogue.nextNode));
                setLineN(0);
            } else {
                context.cleanDialogue();
            }
        }
        
        if(!isLastLine){
            setLineN(lineN + 1);
        }
    }

    return (
        <div style={dialoguePaperStyle}>
            <DialogueLine line={props.dialogue.lines[lineN]} nextLine={nextLine} />
        </div>
    )
}




export const Dialogue = (props: DialogueProps) => {
    const dialogueStyle = {
        height: "760px",
        width: "1024px",
        bottom: "0",
        margin: "0px 0 auto",
        position: 'absolute' as 'absolute',
    }

    return(
        <div style={dialogueStyle} id="DialoguePopup">   
            {props.dialogue ? <DialogueCharacter dialogue={props.dialogue} /> : null }
            {props.dialogue ? <DialogueOutput dialogue={props.dialogue} /> : null }
        </div>
    )
}