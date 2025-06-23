
## 🎥 AiNepal – Fact Video Creator App

### 🧩 1. **Project Description**

> A web/mobile application designed to **help AiNepal creators easily script, record, edit, and publish fact-based educational videos in Nepali** (shorts, reels, and long-form content).

---

### 🔧 2. **Core Features**

#### 📜 Script & Planning

* ✅ Topic Idea Generator (based on AI or manual entry)
* ✅ Script Template (headline → hook → facts → CTA)
* ✅ Fact Verification Checklist (link sources)
* ✅ Language Toggle (Nepali + English)

#### 🎤 Voice & Video Creation

* ✅ Record voiceover (in-app, with noise reduction)
* ✅ Auto-subtitle (Nepali + English)
* ✅ Stock Footage Library (relevant for Nepal)
* ✅ Drag-and-drop video editor (clips, music, text overlays)

#### ✨ AI Features (Optional)

* 🎙️ Text-to-Speech (Nepali TTS, for voiceover automation)
* 🧠 AI Script Generator (based on topic + audience)
* 🎬 Auto Edit Assistant (scene transitions, background music)

#### 📱 Output Formats

* ✅ YouTube (16:9, 1080p)
* ✅ TikTok/Instagram (9:16, 60s or less)
* ✅ Reels Shorts Export (with watermark and captions)

#### 📤 Publishing

* 🔗 Connect with YouTube, TikTok, Facebook for one-click upload
* 📅 Schedule Posting
* 🏷️ Auto-generate hashtags and video descriptions (Nepali/English)

---

### 🧑‍💻 3. **Tech Stack Recommendation**

#### 🌐 For Web App

* **Frontend**: React.js / Next.js + Tailwind CSS
* **Backend**: Node.js + Express + MongoDB
* **Authentication**: Firebase or Auth0
* **File Handling**: Cloudinary or Firebase Storage
* **Video Editing**: FFmpeg (backend) or Remotion (React-based editor)
* **AI Integration**: OpenAI API (for scripts), Google TTS (Nepali voice)

#### 📱 For Mobile App

* **Framework**: React Native / Flutter
* **Video Editing**: React Native Video Editor SDK or Lottie
* **Voiceover Tools**: Expo Audio or Flutter Sound

---

### 🧰 4. **Folder Structure (Web App)**

```
ainepal-video-creator/
├── client/                  # Frontend - React/Next.js
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── public/
├── server/                  # Backend - Node.js/Express
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── uploads/                 # Temporary video/voice files
├── .env
├── package.json
└── README.md
```

---

### 💡 5. **Future Add-ons**

* ✍️ Community-submitted script library (Nepali creators can reuse ideas)
* 🏅 Creator Dashboard (views, uploads, publishing stats)
* 🎓 Video tutorials for first-time content creators
* 💬 Local language support: Maithili, Bhojpuri, Tamang, Newar, etc.

---

### ✅ 6. **Action Plan**

| Week   | Tasks                                                   |
| ------ | ------------------------------------------------------- |
| Week 1 | Set up project structure, plan UI/UX                    |
| Week 2 | Build script editor and audio recorder                  |
| Week 3 | Integrate video upload & editing                        |
| Week 4 | Add AI features (optional) and connect publishing tools |
| Week 5 | Testing, bug fixing, and deployment                     |

---

### 📌 Sample MVP Features (Minimum Viable Product)

* ✅ Login/Signup
* ✅ Script Writer + Fact Checklist
* ✅ Audio Recorder
* ✅ Video Builder (drag-and-drop)
* ✅ Export to MP4 (YouTube, Shorts)
* ✅ Manual Upload to YouTube/TikTok


