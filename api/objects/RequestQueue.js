class RequestQueue {
  
  constructor(maxRequests, interval) {
    this.maxRequests = maxRequests;
    this.interval = interval;
    this.users = {};
  }

  addUser(user) {
    return this.users[user.id] = user
  }

  clearQueue() {
    setInterval(() => {
      this.users = {};
    }, this.interval);
  }

}

module.exports = { RequestQueue };