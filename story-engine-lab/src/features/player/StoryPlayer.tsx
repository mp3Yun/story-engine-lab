import { useParams } from "react-router-dom";
import { mockStories } from "../library/mockData";

export const StoryPlayer = () => {
  // useParams 會回傳一個 object，key 對應路由裡的 :storyId
  const { storyId } = useParams<{ storyId: string }>();
  // TODO: fake Data，之後會改成從後端 API 獲取故事數據
  const story = mockStories.find((s) => s.id === storyId);
  if (!story) return <div>Story not found</div>;
  return <></>;
};
