const { RequestQueue } = require('../objects/RequestQueue');
const { User } = require('../objects/User');

const requestQueue = new RequestQueue(20, 60000);
requestQueue.clearQueue();

const rateLimiter = (req, res, next) => {
  
  // console.log('requestQueue:', requestQueue)

  // get IP address of current user
  const ip = req.connection.remoteAddress;

  let user;

  if (!requestQueue.users[ip]) { // if user doesn't exist, create a new user and add to queue
    user = new User(ip);
    requestQueue.addUser(user);
  } else { // otherwise, set user to the user in queue
    user = requestQueue.users[ip];
  }
  
  user.incrementCounter();
  // console.log('user:', user)
  
  if (user.counter > requestQueue.maxRequests) {
    return res.status(403).send(`You have exceeded the maximum requests allowed. Please try again in ${requestQueue.interval / 1000} seconds`);
  } else {
    return next();
  }

};

module.exports = {rateLimiter};