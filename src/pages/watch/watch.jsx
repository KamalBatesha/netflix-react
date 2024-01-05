import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./watch.css";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back" onClick={() => (window.location.href = "/")}>
        <ArrowBackIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}
