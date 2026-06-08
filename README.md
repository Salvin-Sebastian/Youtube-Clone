# Modern YouTube Clone 📺

A sleek, fully responsive, and highly dynamic YouTube Clone application built using modern web development practices. This application mirrors the core experience of YouTube, featuring a custom horizontal category chip row, rounded video thumbnails, and channel avatars for a premium look.

## 🌟 Features

- **Modern UI/UX**: Completely customized dark theme with beautiful, responsive grid layouts matching the current YouTube design.
- **Dynamic Categories**: Filter videos by popular categories (Music, Gaming, Coding, NextJS, etc.) using a sleek top-row scrolling chip navigation.
- **Video Detail Page**: Watch videos directly on the site via an embedded player, alongside related videos and channel metadata.
- **Channel Detail Page**: View channel profiles, complete with custom gradient banners, subscriber counts, and their uploaded videos.
- **Search Functionality**: A fully functional search bar to query any content via the YouTube v3 API.

## 🛠️ Tech Stack

- **Framework**: [React.js](https://react.dev/) (via Vite for lightning-fast bootstrapping)
- **Styling**: [Material UI (MUI v5)](https://mui.com/) & Vanilla CSS
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Media**: [React Player](https://www.npmjs.com/package/react-player)
- **API**: [YouTube v3 API (via RapidAPI)](https://rapidapi.com/ytdlfree/api/youtube-v31/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Salvin-Sebastian/Youtube-Clone.git
   cd Youtube-Clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Rename `.env.example` to `.env`
   - Grab your free API key from [RapidAPI YouTube v3](https://rapidapi.com/ytdlfree/api/youtube-v31/).
   - Add your key to the `.env` file:
     ```env
     VITE_APP_RAPID_API_KEY=your_rapidapi_youtube_v3_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Salvin-Sebastian/Youtube-Clone/issues).

## 📝 License

This project is licensed under the MIT License.
