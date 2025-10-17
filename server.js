
// 🚨 Smart Emergency Alert Backend
// Handles alerts from ESP8266 and serves them to the dashboard

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

let alerts = [];

// ✅ Route for ESP8266 to send alert (GET /alert?lat=..&lng=..)
app.get("/alert", (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) return res.status(400).send("Missing coordinates");

  const alert = {
    id: "ESP" + Math.floor(Math.random() * 900 + 100),
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    time: new Date().toISOString(),
    status: "Active"
  };
  alerts.unshift(alert);

  console.log("📍 New Alert Received:", alert);
  res.send("Alert received");
});

// ✅ Route for dashboard to get all alerts
app.get("/alerts", (req, res) => {
  res.json(alerts);
});

// ✅ Route to resolve alert
app.get("/resolve/:id", (req, res) => {
  const alert = alerts.find(a => a.id === req.params.id);
  if (alert) alert.status = "Resolved";
  res.send("Alert resolved");
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
