export default class Player {
  constructor({ name, points, id }) {
    this.id = id
    this.name = name
    this.points = points
  }

  get ListTemplate() {
    return `<div class="d-flex justify-content-between border border-primary p-2 hover-action" onclick="app.playersController.setActive('${this.id}')">
    <p class="m-0">${this.name}</p>
    <p class="m-0">${this.points}</p>
</div>`
  }
}