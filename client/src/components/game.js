import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);

    //setQuestions is an attribute in setQuestions. creates variable, use function called setQuestions to change questions.     
    const loadData = () => {
        fetch('http://localhost:8050/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length} 
            </div>
            {questions.map((question, index) => {
                //key is like ID, sets a unique value to each question in the question array.
                return <QuestionCard key={index} question={question} />
            })}
        </div>
    )

}

export default Game;
