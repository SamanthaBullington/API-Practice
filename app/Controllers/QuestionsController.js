import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsServices.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let question = ProxyState.question
  let template = ''
  question.forEach(p => template += p.Template)
  document.getElementById('question').innerHTML = template

  // document.getElementById('buttons').innerHTML = `
  //   <button type="button" class="btn btn-warning" ${ProxyState.previous ? '' : 'disabled'}
  //     onclick="app.questionsController.getMore('previous')">previous</button>
  //   <button type="button" class="btn btn-success" ${ProxyState.next ? '' : 'disabled'}
  //     onclick="app.questionsController.getMore('next')">next</button>
  // `


}


export default class QuestionsController {
  constructor() {
    ProxyState.on('question', _draw)
    this.getAll()
  }

  async getAll() {
    try {
      await questionsService.getAllQuestions()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }


  async getMore(direction) {
    try {
      await questionsService.getAllQuestions(ProxyState[direction])
    } catch (e) {
      window.alert("Something went wrong: " + e)
    }
  }
  Answer() {
    console.log('questions controller working')
    // questionsService.Answer()
  }

}