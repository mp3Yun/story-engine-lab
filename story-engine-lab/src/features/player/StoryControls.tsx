import type { StoryEngine } from "../../engine/storyEngine";

interface Props {
  engine: StoryEngine;
}

export const StoryControls = ({ engine }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        display: "flex",
        gap: 10,
      }}
    >
      <button onClick={() => engine.prevPage()}>Prev</button>
      <button onClick={() => engine.nextPage()}>Next</button>
      <button
        onClick={() =>
          engine.isPlayingState() ? engine.pause() : engine.start()
        }
      >
        {engine.isPlayingState() ? "Pause" : "Play"}
      </button>
      <button
        onClick={() =>
          engine.setMode(engine.getMode() === "manual" ? "auto" : "manual")
        }
      >
        Mode: {engine.getMode()}
      </button>
    </div>
  );
};
