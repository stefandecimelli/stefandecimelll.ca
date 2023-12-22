import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.bannerContent}>
                <strong>Hello, welcome to my website!</strong>
                <p>I am a full-stack developer who specializes in React.js apps. Right now you are on a website made with React.js, hosted on AWS using AWS Amplify. If you want a website designed and develped by me, then feel free to <a target="_blank" href="https://www.linkedin.com/in/stefandecimelli/"><u>contact me on LinkedIn.</u></a></p>
                <p>or,</p>
                <a target="_blank" href="https://github.com/stefandecimelli">
                    <button>Check me out on GitHub  </button>
                </a>
            </div>
        </div>
    )
}
