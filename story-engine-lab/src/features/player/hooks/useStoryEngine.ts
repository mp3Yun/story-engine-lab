import { useEffect, useState } from "react";
import type { Story } from "../../../domain/story";
import { StoryEngine } from "../../../engine/storyEngine";

export const useStoryEngine = (story: Story) => {
  const [engine] = useState(() => new StoryEngine(story));
  const [currentPage, setCurrentPage] = useState(engine.getCurrentPage());

  useEffect(() => {
    const unsubscribe = engine.subscribe(() => {
      console.log("Current page changed:", engine.getCurrentPage());
      setCurrentPage(engine.getCurrentPage());
    });
    return unsubscribe;
  }, [engine]);

  return { engine, currentPage };
};
