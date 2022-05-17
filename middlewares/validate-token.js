import jwt from "jsonwebtoken";

//middleware to validate token (protected routes)
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.usuario = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
export default verifyToken;
