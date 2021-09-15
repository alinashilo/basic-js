
/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  numbers: [],
  getLength() {
    return this.numbers.length;
  },
  addLink(value) {
    arguments.length ? this.numbers.push(String(value)) : this.numbers.push('( )');
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position < 1 || !Number(position)) {
      this.numbers.length = 0
      throw Error('You can\'t remove incorrect link!');
    }

    this.numbers.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.numbers.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.numbers.join(' )~~( ')} )`;
    this.numbers.length = 0;
    return result;
  }
};
