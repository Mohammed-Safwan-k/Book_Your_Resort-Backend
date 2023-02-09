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

export const resortAuth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(" ")[1];
    let decodedData;
    if (!token) {
      return res.status(403).send("Acess Denied");
    }
    decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.resortId = decodedData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};
