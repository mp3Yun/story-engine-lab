import type { Story } from "../domain/story";
import type { StoryPage } from "../domain/storyPage";

export class StoryEngine {
  private story: Story;
  private currentPageIndex: number;
  private isPlaying: boolean = false;
  private mode: "manual" | "auto" = "manual";
  private elapsedTime: number = 0; // in seconds
  private listeners = new Set<() => void>();

  constructor(story: Story) {
    this.story = story;
    this.currentPageIndex = 0;
  }

  nextPage() {
    if (this.currentPageIndex < this.story.pages.length - 1) {
      this.currentPageIndex++;
      this.elapsedTime = 0; // reset elapsed time for the new page
      this.notify(); // 通知訂閱者頁面已更新
    }
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.elapsedTime = 0; // reset elapsed time for the new page
      this.notify(); // 通知訂閱者頁面已更新
    }
  }

  getCurrentPageIndex() {
    return this.currentPageIndex;
  }

  getCurrentPage(): StoryPage | null {
    return this.story.pages[this.currentPageIndex] ?? null;
  }

  setMode(mode: "manual" | "auto") {
    if (this.mode === mode) return;
    this.mode = mode;
    this.notify();
  }

  getMode() {
    return this.mode;
  }

  isPlayingState() {
    return this.isPlaying;
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.elapsedTime = 0; // reset elapsed time when starting
    this.notify(); // 通知訂閱者故事已開始
  }

  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    this.notify();
  }

  reset() {
    this.pause();
    this.currentPageIndex = 0;
    this.elapsedTime = 0;
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.unsubscribe(listener); // 回傳取消訂閱函數
  }

  unsubscribe(listener: () => void) {
    this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l());
  }
}
