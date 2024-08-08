import TextInput from "../componentes/TextInput";
import { useState } from 'react';
import styles from "./index.module.css"
import Tweet from "../componentes/Tweet";

    
export default function Index(){
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);
    const maxLength = 125;

    const tweet = {
        date: new Date().toDateString(),
        text: text,
        user:{
            name: 'Wellington',
            username:'@welington',
            picture:'https://avatars.githubusercontent.com/u/62801449?s=400&u=d0f908af891158a3ff26dd27be96c818bb11b16c&v=4'
        }
    }

    function onTextChange(event){
        const text = event.target.value;
        if(text.length <= maxLength){
            setText(text);
        }
    }

    function sendTweet(){
        setTweetList([...tweetList, tweet]);
        
    }

    return(
        <div>
            <h1 className={styles.pageTitle} >Wellington Tweet</h1>
            <div className={styles.tweetConatiner}>
                <img className={styles.avatar} src={'https://avatars.githubusercontent.com/u/62801449?s=400&u=d0f908af891158a3ff26dd27be96c818bb11b16c&v=4'}/>
                <TextInput 
                    placeholder={'O que esta acontecendo'}
                    rows={3}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button onClick={sendTweet}
                className={styles.postButton}
                >Twetar</button>
            </div>
            <ul className={styles.tweetList}>
            {tweetList.map(tweet => {
                return (
                    <li className={styles.tweetListItem}>
                    <Tweet tweet={tweet}/> 
                    </li>
                    
                ) 
           
                })}
            </ul>
        </div>
    )
}
