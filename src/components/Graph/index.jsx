import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Graph = ({ width, progress = 0 }) => {
  return (
    <div style={{ width: width }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          backgroundColor: "##E365C1",
          textColor: "#E365C1",
          pathColor: "#E365C1",
          trailColor: "#E2B6CF",
          textSize: "24px",
        })}
      />
    </div>
  );
};

export default Graph;
