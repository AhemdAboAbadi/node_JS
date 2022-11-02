const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "Ahmed") {
    req.user = { name: "Ahmed", id: 3 };
    next();
  }
  res.status(401).send("Unauthorized");
};

module.exports = authorize;
