import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./SocialMediaIcons.module.css"

export default function SocialMediaIcons() {
    return (
        <div className={styles.container}>
            <a target='_blank' href="https://www.linkedin.com/in/stefandecimelli/">
                <LinkedInIcon className={styles.fix} />
            </a>
            <a target='_blank' href="https://github.com/stefandecimelli">
                <GitHubIcon />
            </a>
        </div>
    )
}
