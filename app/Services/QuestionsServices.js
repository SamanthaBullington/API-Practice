import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"

class QuestionsService {
  async getAllQuestions() {
    const res = await api.get()

    console.log(res.data)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
    let question = res.data.results.map(p => new Question(p))
    ProxyState.question = question
  }

  Answer() {
    console.log('questionsservices working')
    if (onclick() == correct_answer) {
      window.alert('correct')
    }
    else window.alert('incorrect')

  }

}


export const questionsService = new QuestionsService()
