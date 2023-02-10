import jwt from "jsonwebtoken";

export const verifyToken = async (req, res) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Acess Denied");
    }

    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postResortAuth = async (req, res, next) => {
  try {
    let token = req.body.headers.Authorization;

    if (!token) {
      token = req.header("Authorization");
      return res.status(403).send("Acess Denied");
    }

    const resort = await jwt.verify(token, process.env.JWT_SECRET);
    req.resort = resort.email;
    req.id = resort.id;

    next();
  } catch (error) {
    res.status(403).send("Invalid Token");
  }
};

export const getResortAuth = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Acess Denied");
    }

    const resort = await jwt.verify(token, process.env.JWT_SECRET);
    req.resort = resort.email;
    req.id = resort.id;

    next();
  } catch (error) {
    res.status(403).send("Invalid Token");
  }
};
