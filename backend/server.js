require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000; 

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello Roya")
})


app.post("/send-email", async (req, res) => {
  const { name, email, number, place, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nLocation: ${place}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email not sent!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started ont ${PORT}`);
});
