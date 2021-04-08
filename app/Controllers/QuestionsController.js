import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { questionsService } from "../Services/QuestionsService.js";

function _draw() {
  document.getElementById('game').innerHTML = ProxyState.question.Template
}


export default class QuestionsController {
  constructor() {
    ProxyState.on('question', _draw)
  }


  async getQuestion() {
    try {
      await questionsService.getQuestion()
    } catch (error) {
      console.error(error)
    }
  }

  async score(correct) {
    try {
      await playersService.score(correct)
      await questionsService.getQuestion()
    } catch (error) {
      console.error()
    }
  }
}