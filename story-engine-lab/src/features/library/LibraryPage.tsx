import { Link } from "react-router-dom";
import { mockStories } from "./mockData";

export const LibraryPage = () => {
  // 這裡可以從後端 API 獲取故事列表，現在先使用 mock 數據
  return (
    <div>
      <h1>Library</h1>
      <ul>
        {mockStories.map((story) => (
          <li key={story.id}>
            <Link to={`/story/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
