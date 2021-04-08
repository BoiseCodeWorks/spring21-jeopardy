export default class Question {
  constructor({ answer, question, value, category }) {
    this.answer = answer
    this.question = question
    this.value = value
    this.category = category.title
  }

  get Template() {
    return `
    <div class="bg-blue text-yellow p-4">
      <div class="d-flex justify-content-around">
      <h4>Category: ${this.category}</h4>
      <h4>Value: ${this.value}</h4>
      </div>
      <div class="p-3 question">
          <h1>${this.question}</h1>
          <div class="answer p-5">
              <p class="m-0">${this.answer}</p>
          </div>
      </div>
      <div class="d-flex justify-content-around">
          <button type="button" class="btn btn-xl btn-success" onclick="app.questionsController.score(true)">Correct</button>
          <button type="button" class="btn btn-xl btn-danger" onclick="app.questionsController.score(false)">Incorrect</button>
      </div>
    </div>
    `
  }
}
