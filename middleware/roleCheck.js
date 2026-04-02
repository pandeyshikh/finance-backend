module.exports = (...allowedRoles) => {
  return (req, res, next) => {

    // check if user exists (from auth middleware)
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // check if user's role is allowed
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: Access denied" });
    }

    next(); // allowed → continue
  };
};