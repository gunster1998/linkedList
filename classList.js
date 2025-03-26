export class Node {
    constructor(value, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
 export class linkedList {
    constructor() {
      this.headElement = null;
    }
  
    append(value) {
      const newElement = new Node(value);
  
      if (this.headElement === null) {
        this.headElement = newElement;
      } else {
        let current = this.headElement;
        while (current.nextNode !== null) {
          current = current.nextNode;
        }
        current.nextNode = newElement;
      }
    }
  
    prepend(value) {
      const newElement = new Node(value);
  
      if (this.headElement === null) {
        this.headElement = newElement;
      } else {
        newElement.nextNode = this.headElement;
        this.headElement = newElement;
      }
    }
  
    size() {
      let current = this.headElement;
      let count = 0;
      while (current !== null) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    head() {
      return this.headElement;
    }
  
    tail() {
      if (this.headElement === null) {
        return null;
      }
      let current = this.headElement;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
  
      return current;
    }
  
    at(index) {
      if (this.headElement === null ) {
          return null;
        }
      let current = this.headElement;
      let count = 0;
      while (count !== index && current !== null) {
        count++;
        current = current.nextNode;
      }
  
      return current
    }
  
    pop() {
      if (this.headElement === null) {
          return;
        }
        let previous
        let current = this.headElement;
        while (current.nextNode !== null) {
          previous = current
          current = current.nextNode;
        }
        if (current === this.headElement) {
          this.headElement = null
          return
        }
        previous.nextNode = null
        return
    }
  
    contains(value) {
      if (this.headElement === null) {
          return false;
        }
        let current = this.headElement;
        let finde = false;
        while (current !== null) {
          if (current.value === value) {
              return true
          }
          current = current.nextNode;
        }
    
        return false;
    }
  
    find(value) {
      if (this.headElement === null) {
          return null;
        }
        let current = this.headElement;
        let count = 0;
        while (current !== null) {
  
          if (current.value === value) {
              return count
          }
          current = current.nextNode;
          count++
        }
    
        return null;
    }
  
    toString() {
      if (this.headElement === null) {
          console.log('( Пусто )')
          return;
        }
        let textOutput = ''
        let count = 0;
        let current = this.headElement;
        while (current !== null) {
  
          if (count === 0) {
              textOutput = textOutput + `( ${current.value} )`
          } else {
              textOutput = textOutput + ` -> ( ${current.value} )`
          }
          current = current.nextNode;
          count++
        }
      textOutput = textOutput + ` -> null`
    
        return textOutput
    }
  }
  