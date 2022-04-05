const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "bharath") {
    req.user = { name: "Bharath", id: 40 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
