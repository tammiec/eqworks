class User {

  constructor(ipAddress) {
    this.id = ipAddress;
    this.counter = 0;
  }

  incrementCounter() {
    return this.counter++;
  }

}

module.exports = { User };