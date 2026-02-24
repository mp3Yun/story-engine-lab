import type { StoryPage } from "./storyPage";

export type Story = {
  id: string;
  title: string;
  pages: StoryPage[];
};
