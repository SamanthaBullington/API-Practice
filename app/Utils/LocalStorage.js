import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";

export function saveState() {
  localStorage.setItem('CorrectQuestion', JSON.stringify({
    question: ProxyState.question,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('CorrectQuestion'))
  console.log(data)
  if (data != null) {
    ProxyState.question = data.question.map(p => new Question(p))
  }

}