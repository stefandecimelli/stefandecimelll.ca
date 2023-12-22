import styles from "./Projects.module.css";
import Project from "./components/project";

const projects = [
    { 
        name: "Sine Wave Visualizer",
        href: "https://www.sinewave.stefandecimelli.ca/",
        description: "A small tool app that can display what a sine wave looks like at a specific magnitude and frequency."
    }
]

export default function Projects() {
    return (
        <div className={styles.container}>
             <p>Click any of the links below to see what kind of things I am working on.</p>
            <h6>Projects</h6>
            <div className={styles.projectsList}>
            {
                projects.map((project) => <Project {...project} />)
            }
            </div>
        </div>
    )
}
