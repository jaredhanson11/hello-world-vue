export default class TodoItem {
  constructor(id, title, description) {
    this.id = id
    this.title = title
    this.description = description
    this.comments = []
  }
}
