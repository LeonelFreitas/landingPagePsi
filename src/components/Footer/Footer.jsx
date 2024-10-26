import clsx from "clsx/dist/clsx.m"
import { Container } from "react-bootstrap"
import styles from './index.module.scss'

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <Container>
                <div className="d-flex justify-content-between py-2">
                    <small className={clsx("py - 4")}>
                        Todos os Direitos Reservados &copy; 2024 Luana Forster
                    </small>
                    <small>Desenvolvido por Leonel Freitas  |
                        <a href="https://br.linkedin.com/in/leonel-freitas-4787aa223" className="ms-1 text-decoration-none">LinkedIn</a>  &
                        <a href="https://github.com/LeonelFreitas" className="ms-1 text-decoration-none">GitHub</a></small>
                </div>
            </Container>
        </footer >
    )
}

export default Footer