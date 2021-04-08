import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { jService } from "./AxiosService.js"

class QuestionsService {
  async getQuestion() {
    let res = await jService.get()
    ProxyState.question = new Question(res.data[0])
  }


}

export const questionsService = new QuestionsService()