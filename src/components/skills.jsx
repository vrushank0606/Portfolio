import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaAws,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCsharp,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiJenkins,
  SiKubernetes,
  SiGraphql,
  SiRabbitmq,
  SiApachekafka,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiAngular } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container py-40">
      {/* Professional Skillset Section */}
      <h2 className="skills-heading">
        Professional <span className="highlight">SkillSet</span>
      </h2>
      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skills-card">
          <FaJava size={40} />
          <p>Java</p>
        </div>
        <div className="skills-card">
          <SiJavascript size={40} />
          <p>JavaScript</p>
        </div>
        <div className="skills-card">
          <SiCsharp size={40} />
          <p>C#</p>
        </div>
        <div className="skills-card">
          <FaPython size={40} />
          <p>Python</p>
        </div>

        {/* Frameworks */}
        <div className="skills-card">
          <FaNodeJs size={40} />
          <p>Node.js</p>
        </div>
        <div className="skills-card">
          <SiAngular size={40} />
          <p>Angular</p>
        </div>
        <div className="skills-card">
          <FaReact size={40} />
          <p>React</p>
        </div>
        <div className="skills-card">
          <SiRedux size={40} />
          <p>Redux</p>
        </div>
        <div className="skills-card">
          <SiDjango size={40} />
          <p>Django</p>
        </div>
        <div className="skills-card">
          <SiTailwindcss size={40} />
          <p>Tailwind CSS</p>
        </div>

        {/* Databases */}
        <div className="skills-card">
          <SiMysql size={40} />
          <p>MySQL</p>
        </div>
        <div className="skills-card">
          <SiPostgresql size={40} />
          <p>PostgreSQL</p>
        </div>
        <div className="skills-card">
          <SiMongodb size={40} />
          <p>MongoDB</p>
        </div>

        {/* Cloud Services */}
        <div className="skills-card">
          <FaAws size={40} />
          <p>AWS</p>
        </div>
        <div className="skills-card">
          <FaDocker size={40} />
          <p>Docker</p>
        </div>
        <div className="skills-card">
          <SiKubernetes size={40} />
          <p>Kubernetes</p>
        </div>

        {/* Tools & Services */}
        <div className="skills-card">
          <FaGitAlt size={40} />
          <p>Git</p>
        </div>
        <div className="skills-card">
          <SiJenkins size={40} />
          <p>Jenkins</p>
        </div>
        <div className="skills-card">
          <SiGraphql size={40} />
          <p>GraphQL</p>
        </div>
        <div className="skills-card">
          <SiRabbitmq size={40} />
          <p>RabbitMQ</p>
        </div>
        <div className="skills-card">
          <SiApachekafka size={40} />
          <p>Kafka</p>
        </div>
      </div>

      {/* Tools I Use Section */}
      <h2 className="tools-heading">
        <span className="highlight">Tools</span> I Use
      </h2>
      <div className="tools-grid">
        <div className="skills-card">
          <VscCode size={40} />
          <p>VS Code</p>
        </div>
        <div className="skills-card">
          <SiPostman size={40} />
          <p>Postman</p>
        </div>
        <div className="skills-card">
          <SiSlack size={40} />
          <p>Slack</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
