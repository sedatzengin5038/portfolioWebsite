import express from "express"
import mysql from "mysql"
import cors from 'cors'
import cookieParser from "cookie-parser"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import crypto from "crypto"
import {mailTransport } from "./contact.js"
const app = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  database: "admin",
  user: "root",
  password: "software5038"
}

)




dotenv.config()
const myemail = process.env.EMAIL
const mypassword = process.env.PASSWORD

async function sendVerificationEmail(email,verificationLink) {
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: myemail,
      pass: mypassword
    },
    tls: {rejectUnauthorized: false}
  });

  const mailOptions = {
    to: email, // Alıcı e-posta adresi
    subject: 'Email verification',
    html: ` <a href="${verificationLink}">Please click here to confirm your verification</a>.`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi: ' + info.response);
  } catch (error) {
    console.log('E-posta gönderilemedi: ' + error);
  };


}
function generateVerificationLink() {
  const verificationToken = crypto.randomBytes(20).toString('hex');
  const verificationLink = `http://localhost:8081/verify/${verificationToken}`;
  return { verificationToken, verificationLink };
}

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});
let singleRowInsert = async (req) => {

  let query = `INSERT INTO signup
        (name,email,password) VALUES (? ,?, ?);`;

  // Value to be inserted
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  const { verificationToken, verificationLink } = generateVerificationLink(email);
  await sendVerificationEmail(email,verificationLink)
  app.get("/verify/:token",(req,res)=>{
    const {token} = req.params
    if(token != verificationToken){
      return res.status(404).json({ error: 'invalid' });
    }
    db.query(query, [
      name,
      email, password], (err, rows) => {
        if (err) throw err;
  
      });
    return res.status(200).json({message:'confirmation succeded'})
   })
  
};





let ALLRowSelect = (callback) => {
  const tableName = 'signup';

  // Create the SELECT query to retrieve all rows from the table
  const query = `SELECT email, password FROM ${tableName}`;

  // Execute the query
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return callback(err, null);
    }

    // The 'results' variable will contain an array of rows that match the query
    if (results.length > 0) {
      console.log('Rows found:', results);
      return callback(null, results);
    } else {
      console.log('No matching rows found.');
      return callback(null, []);
    }
  });
};


const singleRowSelect = (id, callback) => {
  const tableName = 'signup';

  // Create the SELECT query to retrieve all rows from the table
  const query = `SELECT email,password FROM ${tableName} WHERE email='${id}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return callback(err, null);
    }

    // Check if the result is an empty array (no matching rows)
    if (Object.entries(result).length == 0) {
      console.log('No matching rows found.');
      return callback(null, {}); // Return false if no matching rows
    } else {

      return callback(null, result)


    }
  });
};
app.post("/signupForm", (req, res) => {
  singleRowInsert(req)
});

app.get('/signupForm', (req, res) => {
  ALLRowSelect((err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send the fetched data as the response in JSON format
    return res.status(200).json(results);
  });
});





app.get("/loginForm/:email", (req, res) => {
  let email = req.params.email; // Access the email from req.params instead of req.query

  singleRowSelect(email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Check if the result is not empty (matching row found)
    if (Object.entries(result).length !== 0) {
      // Send the fetched data as the response in JSON format
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ error: 'No matching row found.' });
    }
  });
});


app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  // Set a cookie with the name 'myCookie' and value 'cookieValue'
  res.cookie('myCookie', 'cookieValue', { id: 5038, httpOnly: true });
  res.send('Cookie set successfully');
});

app.get('/get-cookie', (req, res) => {
  // Get the value of the cookie named 'myCookie'
  const myCookieValue = req.cookies.myCookie;
  res.send(`The value of myCookie is: ${myCookieValue}`);
});




const portfolioSelect = (callback)=>{
  const query ="SELECT * FROM portfolio";

  db.query(query,(err,result)=>{
    if(err){
      console.log(err)
      return callback(null,err);
    }
    return callback(null,result)
  })
}

app.get("/portfolio",(req,res)=>{
  portfolioSelect((err,result)=>{
    if(err){
      return res.status(500).json({err})
    }
    return res.status(200).json(result)
  })
})

app.post("/portfolio",(req,res)=>{
  const data = req.body;
  console.log(data)
  mailTransport(data.contact.email,data.contact.text)
  console.log(data)
})

app.listen(8081, () => {

})