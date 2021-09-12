import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const songPlaylists = {
  Romance: [
    { name: "Agar Tum Sath Ho", singer: "Alka Yagnik,Arijit Singh" },
    {
      name: "Phir Bhi Tmko Chaahunga",
      singer: "Arijit Singh,Shashaa Tirupati"
    },
    { name: "Raataan Lambiyan", singer: "Jubin Nautyal,Asees Kaur" }
  ],
  Devotional: [
    { name: "Shiv Tandav Stotram", singer: "Sachet Tandon, Parampara Tandon" },
    { name: "Kabira", singer: "Jubin Nautyal, Raaj Aashoo" },
    { name: "Namo Namo", singer: "Amit Trivedi" }
  ],
  Punjabi: [
    { name: "Do You Know", singer: "Diljit Dosanjh" },
    { name: "Bad Munda", singer: "Jass Manak, Emiway Bantai" },
    { name: "Libaas", singer: "Kaka" }
  ],
  BestRap: [
    { name: "Blue Eyes", singer: "Yo Yo Honey Singh" },
    { name: "All Black", singer: "Raftaar, Sukh-E Musical Doctorz" },
    { name: "Lungi Dance", singer: "Yo Yo Honey Singh" }
  ]
};

const playlists = Object.keys(songPlaylists);

export default function App() {
  const [selectedPlaylist, setPlaylist] = useState("Romance");
  function clickHandler(userInput) {
    setPlaylist(userInput);
  }

  return (
    <div className="App">
      <h1>🎵goodmusic</h1>
      <div>
        <p style={{ fontWeight: "bold" }}>
          Checkout my all playlists of songs. Select any one of them and fall in
          love with music.
        </p>

        {/* <ul className="list-non-bullet">
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}>Romance</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}> Devotional</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}>Punjabi</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}>BestRap</button>
        </li>
      </ul> */}

        {playlists.map((
          playlist //using map func to appply click handler to each buttons
        ) => (
          <button
            onClick={() => clickHandler(playlist)}
            key={playlist}
            className="button"
          >
            {playlist}{" "}
          </button>
        ))}

        <hr></hr>

        <ul className="unordered-list">
          {songPlaylists[selectedPlaylist].map((song) => (
            <li className="list" key={song.name}>
              <div style={{ fontWeight: "bold" }}>{song.name} </div>
              <div>{song.singer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
