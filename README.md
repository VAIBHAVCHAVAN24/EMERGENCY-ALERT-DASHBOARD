# 🚨EMERGENCY-ALERT-SYSTEAM
IoT-based emergency alert system using ESP8266 + GSM + GPS with live web dashboard built in HTML, CSS, JS, and Node.js.
 
When a user presses the emergency button, the system:
- Sends an SMS + makes a call to a predefined contact 📞  
- Transmits GPS location data to the backend server 🌍  
- Displays the live alert with coordinates and status on a web dashboard 💻  

🧠 Overview

🔧 Hardware Components:
- ESP8266 (NodeMCU)
- GSM Module (SIM800L)
- GPS Module (NEO-6M)
- Push Button (Trigger Input)
- 5V 2A Power Supply

💻 Software Stack:
Frontend: HTML, CSS, JavaScript, Google Maps API  
Backend: Node.js + Express  
Hardware: Arduino IDE (C++ / .ino)

⚙️ Project Flow

```text
[Button Pressed]
        ↓
[ESP8266 + GSM + GPS]
        ↓
(HTTP Request)
        ↓
[Node.js Backend → /alert?lat=..&lng=..]
        ↓
[Frontend Dashboard]
        ↓
Shows live alert on Google Map + table
🗺️ Dashboard Preview
A simple and responsive UI showing:

Total Active Alerts

Resolved Alerts

Last Trigger Time

Map with Real-Time Markers

Alert Table with Resolve Option

🧩 Hosted Demo (Frontend): [Your GitHub Pages Link Here]

⚙️ Setup Guide
🔹 1. Backend Setup (Node.js)
bash
Copy code
cd backend
npm install
node server.js
Server runs on http://localhost:3000

Endpoint for ESP8266: /alert?lat=16.7&lng=74.5

Endpoint for frontend: /alerts

🔹 2. Frontend Setup
Open frontend/index.html in browser

Update your Google Maps API key inside:

html
Copy code
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
Replace the mock “Trigger Alert” button code with real API calls once ESP integration is done

🔹 3. ESP8266 Code
File: /esp8266/emergency_alert.ino

Upload using Arduino IDE

cpp
Copy code
// Replace Wi-Fi + Server details before uploading
const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";
const char* serverName = "http://YOUR_SERVER_IP:3000/alert";
When the button is pressed:

GSM makes a call + sends SMS

GPS gets coordinates

ESP sends data to backend

🧭 Google Maps API Setup
Go to Google Cloud Console

Create a new project

Enable:

Maps JavaScript API

Geocoding API

Places API (optional)

Go to “Credentials” → Create API Key

Copy your key and add it in index.html:
```
🧩 Future Improvements
✅ Live Firebase / MQTT data sync

✅ SMS + Call acknowledgment status

✅ Admin login for multiple devices

✅ Real-time Google Maps updates

🧠 Developer Notes
This project was created as a demonstration of IoT + Web Integration, showing how embedded devices can communicate with modern web apps for emergency response systems.

👨‍💻 Author
Vaibhav Rajendra Chavan
💼 Aspiring Frontend + Embedded Developer
🌐 [https://www.linkedin.com/in/vaibhav-chavan-555134368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ]
