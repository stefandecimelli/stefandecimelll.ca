import styles from "./TechStack.module.css"
import ReactIcon from "../../assets/tech-icons/React.svg"
import TypeScriptIcon from "../../assets/tech-icons/TypeScript.svg"
import NextIcon from "../../assets/tech-icons/Next.js.svg"
import AWSIcon from "../../assets/tech-icons/AWS.svg"
import JavaScriptIcon from "../../assets/tech-icons/JavaScript.svg"
import HTML5Icon from "../../assets/tech-icons/HTML5.svg"
import CSS3Icon from "../../assets/tech-icons/CSS3.svg"
import NodeIcon from "../../assets/tech-icons/Node.js.svg"

export default function TechStack() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h6>My Tech Stack</h6>
                <p>These are the technologies and programming languages I use when I develop my apps.</p>
                <div>
                    <img src={TypeScriptIcon} alt="TypeScriptIcon" height="64" width="64" />
                    <p>TypeScript</p>
                </div>
                <div>
                    <img src={ReactIcon} alt="ReactIcon" height="64" width="64" />
                    <p>React.js</p>
                </div>
                <div>
                    <img src={NextIcon} alt="NextIcon" height="64" width="64" />
                    <p>Next.js</p>
                </div>
                <div>
                    <img src={NodeIcon} alt="NodeIcon" height="64" width="64" />
                    <p>Node.js</p>
                </div>
                <div>
                    <img src={AWSIcon} alt="AWSIcon" height="64" width="64" />
                    <p> AWS Amplify</p>
                </div>
                <div className={styles.divider} />
                <div>
                    <img src={JavaScriptIcon} alt="JavaScriptIcon" height="64" width="64" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={HTML5Icon} alt="HTML5Icon" height="64" width="64" />
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={CSS3Icon} alt="CSS3Icon" height="64" width="64" />
                    <p>CSS3</p>
                </div>
            </div>
        </div>
    )
}
