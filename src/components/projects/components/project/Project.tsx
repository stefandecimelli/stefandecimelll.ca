import { ReactElement } from "react"
import styles from "./Project.module.css"

export default function Project({ name, description, href, icons
}: {
    name: string, description: string, href: string, icons: ReactElement[]
}) {
    return (
        <a target="_blank" href={href}>
            <div className={styles.projectCard}>
                <a target="_blank" href={href}>
                    <h5>{name}</h5>
                </a>
                <hr />
                <div className={styles.bottom}>
                    <div>
                        {icons.map((i) => i)}
                        <p>{description}</p>
                    </div>
                    <a target="_blank" href={href}>
                        <button>Try it out</button>
                    </a>
                </div>
            </div>
        </a>
    )
}
