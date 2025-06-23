# AiNepal – Fact Video Creator App

A web application designed for creating and publishing fact-based educational videos in the Nepali language. Tailored for AiNepal YouTube creators and digital educators.

## 🚀 Features

### 🧠 Content Creation
- Script Writer with Fact Checklist
- AI Script Suggestions (optional)
- Language Support: Nepali + English

### 🎤 Voiceover & Recording
- In-browser Audio Recorder
- Text-to-Speech (Nepali support)
- Auto-subtitles

### 🎬 Video Builder
- Drag-and-drop Editor
- Scene Transitions & Captions
- Export for YouTube (16:9), Shorts/Reels (9:16)

### 📤 Publishing Tools
- Connect YouTube, TikTok, Facebook
- Auto-generate Video Description & Hashtags
- Watermark & Branding Options

## 🧑‍💻 Tech Stack

### Frontend:
- React.js / Next.js
- Tailwind CSS
- Remotion / FFmpeg (for video rendering)

### Backend:
- Node.js
- Express.js
- MongoDB / Firebase (Auth + Storage)

### AI/Tools:
- OpenAI (Script Suggestions)
- Google TTS API (Nepali voice)
- Cloudinary (Media Hosting)

## 📁 Project Structure

```
ainpeal-video-creator/
├── client/                  # Frontend (React)
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── public/
├── server/                  # Backend (Node/Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── uploads/                 # Temporary uploads
├── .env                     # API keys & secrets
├── package.json
└── README.md
```

## 📌 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ainepal-video-creator.git
cd ainepal-video-creator

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🙌 Credits
Created with ❤️ by AiNepal to empower Nepali creators and educators.

## 📜 License
[MIT](LICENSE)
