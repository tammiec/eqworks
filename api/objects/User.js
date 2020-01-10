class User {

  constructor(ipAddress) {
    this.id = ipAddress;
    this.counter = 0;
  }

  incrementCounter() {
    console.log(this.counter);
    return this.counter++;
  }

}

module.exports = { User };