const { RequestQueue } = require('../objects/RequestQueue');
const { User } = require('../objects/User');


// Basic Fixed Window Rate Limiter

const rateLimiter = options => {
  
  const requestQueue = new RequestQueue(options.maxRequests, options.interval);
  requestQueue.clearQueue();
  
  return (req, res, next) => {
    console.log('requestQueue:', requestQueue)
    
    // get IP address of current user
    const ip = req.connection.remoteAddress;
  
    let user;
  
    if (!requestQueue.users[ip]) { // if user doesn't exist, create a new user and add to queue
      user = new User(ip);
      requestQueue.addUser(user);
    } else { // otherwise, set user to the user in queue
      user = requestQueue.users[ip];
    }
    console.log('user:', user)
    user.incrementCounter();
    
    if (user.counter > requestQueue.maxRequests) {
      return res.status(403).send(`You have exceeded the maximum requests allowed. Please try again in ${requestQueue.interval / 1000} seconds`);
    } else {
      return next();
    }
  
  };

};

module.exports = { rateLimiter };