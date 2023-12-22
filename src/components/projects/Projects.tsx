import styles from "./Projects.module.css";
import Project from "./components/project";
import TypeScriptIcon from "../../assets/tech-icons/TypeScript.svg";
import HTML5Icon from "../../assets/tech-icons/HTML5.svg";
import CSS3 from "../../assets/tech-icons/CSS3.svg";
import AWSIcon from "../../assets/tech-icons/AWS.svg";

const projects = [
    {
        name: "Sine Wave Visualizer",
        href: "https://www.sinewave.stefandecimelli.ca/",
        description: "A small tool app that can display what a sine wave looks like at a specific magnitude and frequency.",
        icons: [
            <img src={TypeScriptIcon} alt="TypeScriptIcon" />,
            <img src={HTML5Icon} alt="HTML5Icon" className="circle" />,
            <img src={CSS3} alt="CSS3" />,
            <img src={AWSIcon} alt="AWSIcon" />,
        ]
    }
]

export default function Projects() {
    return (
        <div className={styles.container}>
            <p>Click any of the links below to see what kind of things I am working on.</p>
            <h6>Projects</h6>
            <div className={styles.projectsList}>
                {projects.map((project) => <Project key={project.name} {...project} />)}
            </div>
        </div>
    )
}
