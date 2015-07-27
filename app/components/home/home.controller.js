'use strict';

class Home {
  constructor() {
    this.title = 'Home';
    this.messages = [];
  }

  addMessage() {
    let rand = Math.round(Math.random() * 100.0);
    this.messages.push(`Message ${rand}`);
  }
}

export default Home;