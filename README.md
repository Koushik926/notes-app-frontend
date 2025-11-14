# 📝 Notes App - React Frontend

A modern, responsive React frontend for a full-stack Notes CRUD application. Built with React 18, Vite, and Axios, featuring a beautiful gradient UI and seamless MongoDB backend integration.

## 🌟 Features

- ✨ **Full CRUD Operations**: Create, Read, Update, and Delete notes
- 🎨 **Modern UI Design**: Beautiful purple gradient background with card-based layout
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔄 **Real-time Updates**: Instant feedback with loading states and error handling
- 🎯 **User-Friendly**: Intuitive interface with edit/delete confirmation
- 🔗 **API Integration**: Connects to MongoDB backend via REST API

## 🛠️ Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Next-generation frontend tooling
- **Axios** - Promise-based HTTP client
- **CSS3** - Custom styling with gradients and animations

## 📁 Project Structure

```
notes-app-frontend/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── .env.example         # Environment variables template
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Running backend API (see [backend repo](https://github.com/Koushik926/mongodb-notes-crud-api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Koushik926/notes-app-frontend.git
   cd notes-app-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your backend API URL:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 Usage

### Creating a Note
1. Enter a title and content in the form
2. Click "➕ Add Note" button
3. Your note appears in the grid below

### Editing a Note
1. Click "✏️ Edit" on any note card
2. Form populates with note data
3. Make changes and click "✏️ Update"

### Deleting a Note
1. Click "🗑️ Delete" on any note card
2. Confirm deletion in the dialog
3. Note is removed from the list

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub** (already done!)

2. **Import project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure environment variables**
   - Add `VITE_API_URL` with your deployed backend URL
   - Example: `https://your-backend-api.onrender.com/api`

4. **Deploy**
   - Vercel will auto-detect Vite and deploy
   - Get your live URL

### Environment Variables for Production

```env
VITE_API_URL=https://your-backend-api.onrender.com/api
```

## 📦 Build for Production

```bash
npm run build
```

Production files will be in the `dist/` directory.

## 🔗 API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/notes` | Get all notes |
| POST   | `/api/notes` | Create a new note |
| PUT    | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🎨 Customization

### Changing Colors

Edit `src/App.css` to customize the theme:

```css
/* Change gradient background */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change primary button color */
.btn-primary {
  background: #667eea;
}
```

## 🐛 Troubleshooting

### Cannot connect to API
- Ensure backend is running
- Check `VITE_API_URL` in `.env`
- Verify backend CORS settings

### Notes not displaying
- Check browser console for errors
- Verify API is returning data
- Ensure MongoDB is running

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**R Koushik**
- GitHub: [@Koushik926](https://github.com/Koushik926)
- University: REVA University

## 🤝 Related Projects

- [MongoDB Notes Backend API](https://github.com/Koushik926/mongodb-notes-crud-api) - Backend for this project
- [SQL Student Management System](https://github.com/Koushik926/sql-student-management-system) - Task 1 project

## 🙏 Acknowledgments

- React documentation
- Vite team for amazing tooling
- REVA University Day-0 Project Series

---

**Built with ❤️ as part of REVA University hands-on projects**
