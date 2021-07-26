export default class Question {

  constructor({ question, type, correct_answer, incorrect_answers }) {
    this.type = type
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers
  }

  get Template() {
    return `<li>${this.question}</li> <btn onclick= "app.Questionscontroller.Answer()" class="btn btn-success" > ${this.incorrectAnswers[2]} </btn> <btn onclick ="app.Questionscontroller.Answer()" class="btn btn-success" >${this.correctAnswer}</btn> <btn onclick ="app.Questionscontroller.Answer()" class="btn btn-success" >${this.incorrectAnswers[0]}</btn> <btn onclick ="app.Questionscontroller.Answer()" class="btn btn-success" >${this.incorrectAnswers[1]}</btn>`
  }
}