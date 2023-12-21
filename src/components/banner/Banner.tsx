import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.pContainer}>
                <p>Full-stack Development with React.js • Next.js and PERN Stack Applications</p>
                <hr />
                <a target="_blank" href="https://github.com/stefandecimelli">
                    <button>Check me out on GitHub  </button>
                </a>
            </div>
        </div>
    )
}
