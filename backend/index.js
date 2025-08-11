const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
const mongoURI = "mongodb://localhost:27017/form";
app.get('/backend' , (req,res)=>{
  res.send("Hello from backend!");
})

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// Create a schema for form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  // Add other fields you expect from the form
}, { timestamps: true });

// Create a model from schema
const FormData = mongoose.model("FormData", formDataSchema);

app.get('/backend', (req, res) => {
  res.send("Hello from backend!");
});

app.post("/submit-form", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    console.log("Form data saved:", formData);
    res.json({ message: "Form data received and saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Failed to save form data" });
  }
});



app.post("/submit-form", (req, res) => {
  console.log("Received form data:", req.body);
  res.json({ message: "Form data received successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
