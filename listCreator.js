const linkedList = require('./linkedList')

class ListCreator {
  constructor(){
    this.list = new linkedList()
  }

  start(){
    let numbers = [1, 2, 3, 4]
    for(let value of numbers) {
      this.list.append(value)
    }
    this.list.delete(3)
    this.list.prepend(99)
  }
}

module.exports = ListCreator
