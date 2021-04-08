import { ProxyState } from "../AppState.js"
import Player from "../Models/Player.js"
import { sandbox } from "./AxiosService.js"

class PlayersService {
  async createPlayer(player) {
    let res = await sandbox.post('', player)
    ProxyState.players = [...ProxyState.players, new Player(res.data)]
  }
  async score(correct) {
    if (correct) {
      ProxyState.activePlayer.points += ProxyState.question.value
    } else {
      ProxyState.activePlayer.points -= ProxyState.question.value
    }
    // send to da server
    await sandbox.put(ProxyState.activePlayer.id, ProxyState.activePlayer)

    ProxyState.activePlayer = ProxyState.activePlayer
    ProxyState.players = ProxyState.players
  }
  setActive(id) {
    // search for the player object
    let player = ProxyState.players.find(p => p.id === id)
    // set the player as active player in proxystate
    ProxyState.activePlayer = player
  }
  async getAllPlayers() {
    let res = await sandbox.get()
    ProxyState.players = res.data.map(p => new Player(p))
  }

  // TODO set active player

}

export const playersService = new PlayersService()