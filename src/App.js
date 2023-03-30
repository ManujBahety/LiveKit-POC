import {
  LiveKitRoom,
  ParticipantLoop,
  ParticipantTile,
  RoomName,
  VideoTrack,
  ParticipantName,
  ControlBar,
} from "@livekit/components-react";

import { Track } from "livekit-client";
import "./App.css";

function App() {
  const config = {
    url: "wss://glue-vdvsfwd7.livekit.cloud",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTI5MDY0MDIsImlzcyI6IkFQSThpWHlIenlBN1FOQyIsIm5iZiI6MTY3OTU3MzA2OSwic3ViIjoiYnVsbGEgYmFyb29kIiwidmlkZW8iOnsiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwicm9vbSI6ImZlbWFsZSIsInJvb21Kb2luIjp0cnVlfX0.KlZVgqzSoVlmU9dxnToFagrKiXdKsq3g6WLYFVxtvgk",
  };

  return (
    <LiveKitRoom
      serverUrl={config.url}
      token={config.token}
      audio={true}
      video={true}
      roomName={"female"}
      connect={true}
      onConnected={() => {
        console.log("gg");
      }}
      onDisconnected={() => {
        console.log("rip");
      }}
    >
      {/* <video src={} /> */}
      <RoomName />
      <div className="flex gap-10">
        <ParticipantLoop className="flex ">
          <ParticipantTile>
            <VideoTrack
              className="max-w-sm h-72"
              source={Track.Source.Camera}
            ></VideoTrack>
            <ParticipantName />
          </ParticipantTile>
        </ParticipantLoop>
      </div>
      <ControlBar className="flex justify-center items-center"></ControlBar>
    </LiveKitRoom>
  );
}

export default App;
