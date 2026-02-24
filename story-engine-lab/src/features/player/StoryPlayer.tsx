import { useParams } from "react-router-dom";
import { mockStories } from "../library/mockData";
import { useStoryEngine } from "./hooks/useStoryEngine";
import { StoryControls } from "./StoryControls";

export const StoryPlayer = () => {
  // useParams 會回傳一個 object，key 對應路由裡的 :storyId
  const { storyId } = useParams<{ storyId: string }>();
  // TODO: fake Data，之後會改成從後端 API 獲取故事數據
  const story = mockStories.find((s) => s.id === storyId);
  if (!story) return <div>Story not found</div>;

  const { engine, currentPage } = useStoryEngine(story);

  if (!currentPage) return <div>Loading...</div>;

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          border: "1px solid #ccc",
        }}
      >
        {/* 背景 */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: currentPage.background
              ? // ? `url(${currentPage.background}) center/cover no-repeat`
                currentPage.background
              : "#fff",
          }}
        />
        {/* 畫面元素 */}
        {currentPage.text && (
          <div>
            <div className="absolute text-4xl font-bold text-blue-500 z-10">
              Tailwind v4 works!
            </div>
            <div
              style={{
                position: "absolute",
                top: 100,
                left: 100,
                border: "1px solid #000",
              }}
            >
              {currentPage.text}
            </div>
          </div>
        )}
        {/* 控制列 */}
        <StoryControls engine={engine} />
      </div>
    </>
  );
};
