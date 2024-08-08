export default function Tweet(props){
return (
    <div className={styles.tweetontainer}>
        <img src={'https://avatars.githubusercontent.com/u/62801449?s=400&u=d0f908af891158a3ff26dd27be96c818bb11b16c&v=4'} />
        <div className={styles.user}>
            <span>Wellington</span>
            <span>@welinro</span>
            <span> Há data</span>

        </div>
        <div className={styles.tweet.text}>

             {props.children}
        </div>
    </div>
    
)
}