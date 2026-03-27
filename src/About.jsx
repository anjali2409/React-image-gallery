import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type here..." />;
});

export default About;