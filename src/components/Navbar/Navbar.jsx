import Container from 'react-bootstrap/Container';
import logo from './assets/logo.png'
import styles from './index.module.scss'

function NavbarHome() {
    return (
        <>
            <nav className={styles.s_navbar}>
                <Container>
                    <div className={styles.navbar}>
                        <div className={styles.imgDiv}>
                            <img data-aos="fade-right" data-aos-duration="500" data-aos-delay="50" className={styles.imgDiv__img} src={logo} alt="" />
                        </div>
                        <div className={styles.links}>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="350" href="#home" className={styles.items}>Inicio</a>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="650" href="#infos" className={styles.items}>Atuações</a>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="950" href="#servicos" className={styles.items}>Serviços</a>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250" href="#sobre" className={styles.items}>Sobre</a>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="1550" href="#postagens" className={styles.items}>Postagens</a>
                            <a data-aos="fade-right" data-aos-duration="500" data-aos-delay="1850" href="#contato" className={styles.items}>Contato</a>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
}

export default NavbarHome;