import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const testing = (req, res) => {
  res.json("from controller");
};

export const register = (req, res) => {
  //check exisiting user

  const q = "select * from users where email=? or username=?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User Already Exists");

    //hashing the pswd before saving

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "insert into users(`username`,`email`,`password`) values (?,?,?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  const q = "select * from users where username=?";
  db.query(q, req.body.username, (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(401).json("User Not Authenticated, Please Try Again");

    const { password, ...restOfTheData } = data[0];

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    restOfTheData["jwt"] = token;

    res.status(200).json(restOfTheData);
  });
};

export const logout = (req, res) => {};
