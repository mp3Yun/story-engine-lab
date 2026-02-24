import type { Story } from "../../domain/story";

export const mockStory: Story = {
  id: "1",
  title: "Test Story",
  pages: [
    {
      id: "p1",
      duration: 5,
      background: "#547eb0",
      text: "這是第一頁",
    },
    {
      id: "p2",
      duration: 5,
      background: "#dbeafe",
      text: "這是第二頁",
    },
    {
      id: "p3",
      duration: 5,
      background: "#fee2e2",
      text: "這是第三頁",
    },
  ],
};

export const mockStories: Story[] = [mockStory];
