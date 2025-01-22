# ResQAI 🚨🤖

**ResQAI** is an advanced disaster response and management system designed to enhance coordination among government agencies, citizens, volunteers, and NGOs during natural calamities like earthquakes, floods, and cyclones. By leveraging AI and real-time data, ResQAI aims to improve response times, predict resource needs, and streamline communication among all stakeholders.


## Complete Project Demonstration Video ▶️

<a href="https://www.youtube.com/watch?v=MFNXVV5wh7U&ab_channel=AbhayDixit">
  <img src="https://img.youtube.com/vi/MFNXVV5wh7U/hqdefault.jpg" alt="Watch the video" width="400" height="300">
</a>

<br/>

## 🌟 Features

- **Real-time Disaster Alerts**: Government agencies can issue disaster alerts, notifying people in affected areas with actionable guidance.
- **AI-driven Insights**: Predictions of disaster severity, resource requirements, and affected population using Google Gemini and Vertex AI.
- **Centralized Coordination**: Manage tasks and resources across government agencies, NGOs, and volunteers.
- **Geospatial Analysis**: Seamless integration with Google Maps API and Google Earth Engine for location-specific data.
- **Volunteer and Donation Management**: Mobilize support effectively with targeted notifications.
- **Report Generation**: Automatically generate and analyze situational reports using AI.
- **Collaborative Chat**: Enable real-time communication between departments and agencies using Socket.IO.

<br/>

## 🛠️ Tech Stack

### **AI & Machine Learning**

- Google Gemini
- Vertex AI
- AI Studio

### **Frontend**

- Next.js
- TypeScript
- Tailwind CSS

### **Backend**

- Express.js
- Socket.IO
- Flask (Python)

### **Database**

- Google Cloud Firestore

### **Cloud Infrastructure**

- Google Cloud Platform (GCP)
- Google Cloud Storage
- Google Cloud Run

### **Geospatial Analysis**

- Google Maps API
- Google Earth Engine

<br/>

## 🚀 Setup Procedure

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Google Cloud SDK

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ResQAI/ResQAI.git
   cd ResQAI
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory with the following:

   ```env
   # Environment Variables
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
   NEXT_PUBLIC_JWT_SECRET=
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

5. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000`.

<br/>

## 📚 How It Works

1. **Disaster Alert**:

   - Government agencies issue disaster alerts via a centralized interface.
   - Alerts are stored in Google Cloud Firestore and displayed on the home page for users.

2. **Resource Management**:

   - Users can view, accept, or reject resource requests based on real-time needs.
   - AI suggests optimized allocation of resources and manpower.

3. **Situational Reports**:

   - Generate detailed reports with AI assistance.
   - Use Gemini-1.5 Flash 001 and Vertex AI for autofill functionality based on historical data and real-time inputs.
   - Generate detailed analysis on stored reports on disaster using Gemini-1.5 Pro-002.

4. **Collaborative Communication**:

   - Departments can chat in disaster-specific groups to coordinate tasks efficiently.
   - Built using Socket.IO for real-time communication.

5. **Geospatial Insights**:

   - Visualize affected areas and evacuation routes using Google Maps API.
   - Analyze satellite data with Google Earth Engine.

<br/>

## 🌐 Deployment

ResQAI is deployed on **Google Cloud Platform (GCP)** to ensure scalability and reliability. The infrastructure includes:

- **Google Cloud Run**: Hosting the backend and AI services.
- **Google Cloud Storage**: Storing disaster-related data, reports, and logs.
- **Google Cloud Firestore**: Real-time database for disaster alerts and user data.

<br/>

## 🛡️ Scalability & Performance

ResQAI utilizes multi-region availability through **Google Cloud Run** to handle high traffic and ensure low latency during critical times. The integration with Vertex AI ensures rapid processing of complex datasets.

<br/>

## 🤔 But what about the AI models Flask APIs?

Don't worry! To view all our AI models Flask APIs visit [ResQAI-ML-models-AI-APIs](https://github.com/ResQAI/ResQAI-ML-models-AI-APIs.git) repository.

<br/>

## 🤝 Contributions

We welcome contributions to enhance ResQAI. Please follow these steps:

1. Fork the repository.
2. Commit and push your changes.
3. Open a pull request.

<br/>

## 🌟 Future Plans

- Integration with IoT devices for real-time disaster monitoring.
- Expansion of AI models for more precise predictions.
- Multilingual support for wider accessibility.

<br/>

## 📝 License

This project is licensed under the [MIT License](https://github.com/ResQAI/ResQAI/blob/main/LICENSE) 📄.

