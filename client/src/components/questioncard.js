import { useState } from "react";

const QuestionCard = ({ question }) => {
  const [numberClicked, updateNumberClicked] = useState(0);
  function decodeHtml(html) {
    //converting to a text area registers as special character
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  //e is the variable that is stored as the handle click
  const handleClick = (e) => {
    //can't do ++
    updateNumberClicked(numberClicked+1);
    console.log(e.target.value, "your answer");
    console.log(question.correct_answer, "correct answer");
    console.log("BACKGROUND", [e.target.style.backgroundColor]);
    //numberClicked has lag, since it's defined in the function, it doesn't process until after the DOM is updated
    if (numberClicked % 2 == 1) {
      e.target.style.backgroundColor = "";
    } else {
      if (e.target.value == question.correct_answer) {
        e.target.style.backgroundColor = "green";
      } else {
        e.target.style.backgroundColor = "red";
      }
    }
  };
  //keep track of how many times the button has been clicked
  //if even > button to be ''
  //else the other two if-statements

  return (
    <div className={"question-section"}>
      <div className="question-text">{decodeHtml(question.question)}</div>
      <div className="answer-section">
        {numberClicked} 
        <button value="True" onClick={handleClick}>
          True
        </button>
        <button value="False" onClick={handleClick}>
          False
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
