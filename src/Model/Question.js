class Question {
  constructor(question, incorrectAnswers, correctAnswer) {
    this.incorrectAnswers = incorrectAnswers;
    this.correctAnswer = correctAnswer;
    this.question = question;
  }
  checkAnswer(attempt) {
   return (attempt === this.correctAnswer) ? true : false
  }
}

export default Question;
