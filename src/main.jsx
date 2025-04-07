import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app/globals.css";
import { createRoot } from "react-dom/client";
import Header from "./layout/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import { UserContextProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./pages/CreateProfile";
import EditProfile from "./pages/EditProfile";
import WorkoutsPage from "./pages/WorkoutsPage";
import SavedWorkouts from "./pages/SavedWorkouts";
import PostsPage from "./pages/PostsPage";
import PostForm from "./components/PostForm";
import EditPostPage from "./pages/EditPostPage";
import PostPage from "./pages/PostPage";
import DailyWorkoutTracker from "./pages/DailyWorkoutTracker";
import WorkoutPlanner from "./pages/WorkoutPlanner";

createRoot(document.getElementById("root")).render(
  <Router>
    <UserContextProvider>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create-profile" element={<CreateProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workouts/saved" element={<SavedWorkouts />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/posts/edit/:id" element={<EditPostPage />} />
          <Route path="/daily-tracker" element={<DailyWorkoutTracker />} />
          <Route path="/workout-planner" element={<WorkoutPlanner />} />
          <Route
            path="/posts/new"
            element={
            <PostForm 
                fetchPosts={() => {}}
                selectedPost={null}
                setSelectedPost={() => {}}
              />
            }
          />
        </Routes>
      </div>
    </UserContextProvider>
  </Router>
);
