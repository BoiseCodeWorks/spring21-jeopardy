import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

function _drawPlayers() {
  let players = ProxyState.players
  let template = ''
  players.forEach(p => template += p.ListTemplate)
  document.getElementById('players').innerHTML = template
}

function _drawPlayer() {
  let player = ProxyState.activePlayer
  let template = `<h2>${player.name} | ${player.points}</h2>`
  document.getElementById('active-player').innerHTML = template
}

function _drawPlayButton() {
  document.getElementById('game').innerHTML = '<button class="btn btn-large btn-success" onclick="app.questionsController.getQuestion()">Play</button>'
}

export default class PlayersController {
  constructor() {
    ProxyState.on('players', _drawPlayers)
    ProxyState.on('activePlayer', _drawPlayer)

    this.getAllPlayers()
  }
  async getAllPlayers() {
    try {
      await playersService.getAllPlayers()
    } catch (error) {
      console.error(error)
    }
  }

  async createPlayer() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let player = {
        // @ts-ignore
        name: form.name.value
      }
      await playersService.createPlayer(player)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }


  setActive(id) {
    playersService.setActive(id)
    _drawPlayButton()
  }

}

