import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LibraryPage } from "./features/library/LibraryPage";
import { StoryPlayer } from "./features/player/StoryPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path="/story/:storyId" element={<StoryPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
