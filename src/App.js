import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>🎵goodmusic</h1>

      <p>
        Checkout my all playlists of songs. Select any one of them and fall in
        love with music.
      </p>

      <ul className="list-non-bullet">
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}> Sad & Romantic</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}> Devotional</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}> Instrumental</button>
        </li>
        <li className="list-inline">
          <button style={{ borderRadius: "0.5rem" }}>Old songs</button>
        </li>
      </ul>

      <hr></hr>
    </div>
  );
}
