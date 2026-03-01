import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          Motivated Computer Science student specializing in Computer Science and
          Business Systems with strong skills in software development, data
          analysis, and system building. Experienced in developing real-world
          applications used by thousands of users and leading college-level
          initiatives.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I enjoy building scalable applications, solving real-world problems,
          and working in collaborative environments. Passionate about startups,
          innovation, and continuous learning.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
