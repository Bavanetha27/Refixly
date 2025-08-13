# 🔧 Refixly – AI + AR Powered DIY Repair Assistant

**Refixly** is an open-source web application that aims to empower users to repair household and electronic items using the power of **AI** and **Augmented Reality (AR)**. With an intelligent front end, computer vision support, and planned AR overlays, Refixly aspires to become a go-to tool for real-time object detection, repair tutorials, and DIY community collaboration.

---

<details>
  <summary><strong>📑 Table of Contents</strong></summary>

- [🎯 Project Vision](#-project-vision)
- [📦 Tech Stack Overview](#-tech-stack-overview)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🧠 AI Model (Planned)](#-ai-model-planned)
- [🌐 Live Demo](#-live-demo)
- [🧑‍💻 How to Contribute](#-how-to-contribute)
- [✅ Guidelines](#-guidelines)
- [📄 License](#-license)
- [🙌 Acknowledgements](#-acknowledgements)
- [📬 Contact](#-contact)


</details>

---


## 🎯 Project Vision

Refixly's ultimate goal is to allow users to:
- 📸 Detect broken objects using their **webcam**
- 🧠 Suggest fixes using **AI**
- 📹 Provide tutorial videos using **YouTube API**
- 🛠️ Guide users with **AR overlays (planned)**
- 🤝 Collaborate with others via a **DIY community forum (planned)**

This repository includes the **homepage UI**, the **initial backend setup**, and is open for community contributions.

---

## 📦 Tech Stack Overview

Here’s a complete breakdown of the technologies used (or planned) for Refixly.

### 🖥️ Frontend (React + Vite)

| Tech               | Purpose |
|--------------------|---------|
| **React.js**       | Component-based UI development |
| **Vite**           | Fast build tool and dev server for React |
| **Tailwind CSS**   | Utility-first CSS framework for styling |
| **React Router DOM** | Routing and page navigation |
| **WebRTC / MediaDevices API** | Accessing webcam for live detection |
| **TensorFlow.js** | In-browser ML (e.g., object detection using COCO-SSD) |

---

### 🛠️ Backend (Node.js + Express)

| Tech               | Purpose |
|--------------------|---------|
| **Node.js**        | Server-side runtime environment |
| **Express.js**     | Web framework to handle routes and APIs |
| **MongoDB Atlas**  | Cloud NoSQL database for storing users, posts, and repair data |
| **Mongoose**       | ODM for MongoDB to structure and manage data schemas |
| **YouTube Data API v3** | Fetch video tutorials based on object detection |

---

### 🔐 Authentication (Planned)

| Tech                  | Purpose |
|-----------------------|---------|
| **Firebase Auth**     | Secure user login (email/password, Google sign-in) |

---

### 🕶️ AR Integration (Future Enhancement)

| Tech                  | Purpose |
|-----------------------|---------|
| **Zappar WebAR SDK**  | Lightweight JavaScript AR overlay (WebXR-compatible) |
| **8thWall**           | Commercial AR SDK (if free tier needed for advanced features) |

---

### 📦 Dev Tools & Hosting

| Tool/Service      | Purpose |
|-------------------|---------|
| **Vercel**        | Frontend hosting with GitHub CI/CD integration (free tier) |
| **Render**        | Backend hosting for Node.js server (free tier) |
| **Thunder Client / Postman** | Local API testing |

---

## 📁 Project Structure

```bash
refixly/
├── client/           # React Frontend (Vite)
│   ├── components/
│   ├── pages/
│   ├── assets/
├── server/           # Node.js + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
├── public/           # Static files (logo, manifest, favicon)
├── README.md
├── .env.example
````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/refixly.git
cd refixly
```

### 2. Setup Frontend

```bash
cd client
npm install
npm run dev
```

### 3. Setup Backend

```bash
cd ../server
npm install
```

### 4. Add Environment Variables

Create a `.env` file in `/client`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id

```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
YOUTUBE_API_KEY=your_youtube_api_key
```

### 5. Run Frontend Server

```bash
npm run dev
```
### 5. Run Backend Server

```bash
node server.js
```

---

## 🧠 AI Model (Planned)

We will use **TensorFlow\.js** with **COCO-SSD** for in-browser object detection.

* No need for server-based inference
* Runs in user browser for speed and privacy
* Can be extended to YOLOv8 (with server hosting)

---

## 🌐 Live Demo

> 🔗 [https://refixly.vercel.app](https://refixly.vercel.app)

---

## 🧑‍💻 How to Contribute

We welcome open source contributors to build Refixly together!

### 📌 Contribution Steps:

1. Fork this repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit: `git commit -m "Added X feature"`
5. Push to your fork
6. Create a Pull Request

### 📖 Good First Issues

Check the [Issues](https://github.com/yourusername/refixly/issues) tab for beginner-friendly contributions like:

* Add "About" or "Tutorials" pages
* Setup MongoDB models
* Create AR component placeholder
* Integrate TensorFlow\.js

---

## ✅ Guidelines

* Follow consistent naming and code formatting
* Use comments where necessary
* Keep PRs focused and well-explained
* Respect the community — be kind and constructive ❤️

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

* [React.js](https://reactjs.org)
* [Tailwind CSS](https://tailwindcss.com)
* [TensorFlow.js](https://www.tensorflow.org/js)
* [Zappar](https://zap.works/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Render](https://render.com)
* [Vercel](https://vercel.com)
* [Firebase](https://firebase.google.com)

---

## 📬 Contact

* 🧑‍💻 Maintainer: [Bavanetha M R](https://github.com/Bavanetha27)
* 📧 Email: [bavanethamr@gmail.com](mailto:bavanethamr@gmail.com)

---

> 🛠️ *Refixly – Let’s fix the future, one repair at a time.*

<p align="center">
  <a href="#top" style="font-size: 18px; padding: 8px 16px; display: inline-block; border: 1px solid #ccc; border-radius: 6px; text-decoration: none;">
    ⬆️ Back to Top
  </a>
</p>
