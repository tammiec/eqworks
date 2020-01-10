let counter = 0;

setInterval(() => {
  counter = 0;
}, 60000);

const rateLimiter = (req, res, next) => {

  counter++;

  if (counter > 20) {
    return res.status(403).send(`We're experiencing heavy traffic, please refresh the page and try again!`)
  } else {
    return next();
  }

}

module.exports = {rateLimiter};