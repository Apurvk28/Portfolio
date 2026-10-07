import { Timeline } from "../components/Timeline.jsx";
import { education } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full z-0">
      <Timeline data={education} />
    </div>
  );
};

export default Experiences;
