import "./MusicBlock.css";
import React, { useState } from "react";
import music1 from "./music1.mp3";
import music2 from "./music2.mp3";
import music3 from "./music3.mp3";
import music4 from "./music4.mp3";
import music5 from "./music5.mp3";

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
          <option value={music3}>Трек 3</option>
          <option value={music4}>Трек 4</option>
          <option value={music5}>Трек 5</option>
        </select>
      </div>

      {selectedTrack === music1 && (
        <audio controls autoPlay src={music1}></audio>
      )}
      {selectedTrack === music2 && (
        <audio controls autoPlay src={music2}></audio>
      )}
      {selectedTrack === music3 && (
        <audio controls autoPlay src={music3}></audio>
      )}
      {selectedTrack === music4 && (
        <audio controls autoPlay src={music4}></audio>
      )}
      {selectedTrack === music5 && (
        <audio controls autoPlay src={music5}></audio>
      )}
    </section>
  );
}
