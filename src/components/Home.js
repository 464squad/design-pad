import React , {useState , useEffect} from "react";

function Home() {
    const [joke, setJoke] = useState({setup:"", punchline: ""});
    useEffect(() => {
        const fetchJokeJSON = async() => {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const joke = await response.json();
            console.log(joke)
            setJoke(joke)
          };
            fetchJokeJSON()
    },[]);
    return (
        <div>
         <h2>Home</h2>
    <p>{joke.setup}</p>
    <p>{joke.punchline}</p>
        </div>
    )}

  export default Home