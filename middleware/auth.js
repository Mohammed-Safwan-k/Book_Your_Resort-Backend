import jwt from "jsonwebtoken";

export const verifyToken = async (req, res) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Acess Denied");
        }

        if (token.startsWith("Bearer")){
            token = token.slice(7, tokens.length)
        }

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}