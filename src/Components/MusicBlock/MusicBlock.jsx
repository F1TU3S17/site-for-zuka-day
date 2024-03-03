import "./MusicBlock.css";
import React, { useState } from "react";
import music1 from "./music1.mp3";
import music2 from "./music2.mp3";

export default function MusicBlock() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  function selectTrack(event) {
    console.log(event.target.value);
    return setSelectedTrack(event.target.value);
  }
  return (
    <section>
      <div className="selectdiv">
        <select onChange={selectTrack}>
          <option>Выбор трека</option>
          <option value={music1}>Трек 1</option>
          <option value={music2}>Трек 2</option>
        </select>
      </div>

      {selectedTrack === music1 && (
        <audio controls autoPlay src={music1}></audio>
      )}
      {selectedTrack === music2 && (
        <audio controls autoPlay src={music2}></audio>
      )}
    </section>
  );
}
