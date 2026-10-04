# AutoML Studio

An end-to-end web platform for building and managing automated machine learning workflows.

## Folder Structure

```text
automl-studio/
├── frontend/
│   └── index.html         # Web application client (UI, Glassmorphism Login/Signup)
└── backend/
    ├── package.json       # Backend Node/Express setup & dependencies
    └── src/
        └── server.js      # API endpoints (Auth, Health checks, AI service logic)
```

## Running the Application

### Frontend
Serve the static files from the `frontend` folder:
```bash
npx serve frontend
# or
python3 -m http.server 8000 --directory frontend
```

### Backend
Navigate to the `backend` folder and start the API server:
```bash
cd backend
npm install
npm start
```
Backend will run at `http://localhost:5000`.
