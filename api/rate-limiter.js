const rateLimiter = (req, res, next) => {
  console.log('using rate-limiter middleware')
  return next();
}

module.exports = {rateLimiter};