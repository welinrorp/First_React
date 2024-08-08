import TextInput from "../componentes/TextInput";
import { useState } from 'react';
import styles from "./index.module.css"

    
export default function Index(){
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;

    function onTextChange(event){
        const text = event.target.value;
        if(text.length <= maxLength){
            setText(text);
        }
    }

    function sendTweet(){
        setTweetList([...tweetList, text]);
        
    }

    return(
        <div>
            <h1 className={styles.pageTitle} >Welllington Tweet</h1>
            <div>
                <img src={'https://github.com/wesleygado.png'}/>
                <TextInput 
                    placeholder={'O que esta acontecendo'}
                    rows={3}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div>
                <div>{text.length} / {maxLength}</div>
                <button onClick={sendTweet}>Twetar</button>
            </div>
            <ul>
            {tweetList.map(tweet => {
                return <li>{tweet}</li>   
           
                })}
            </ul>
        </div>
    )
}
