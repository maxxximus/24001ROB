class Question{
    constructor(question, incorrectAnswers ,correctAnswer){
            this.incorrectAnswers = incorrectAnswers
            this.correctAnswer = correctAnswer
            this.question = question
    }
 checkAnswer(attempt){
    if (attempt == this.correctAnswer){
        console.log(true);
        return true
       
    }else{
        console.log(false);
        return false
       
    }
 }
}

export default Question