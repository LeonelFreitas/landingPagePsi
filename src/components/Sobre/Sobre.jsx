import styles from './index.module.scss';
import foto from './assets/thayse_livro.jpg';
import clsx from 'clsx/dist/clsx.m';
import { Row, Col, Container } from 'react-bootstrap';

const Sobre = () => {
    return (
        <section id='sobre' className={clsx(styles.s_sobre)}>
            <Container>
                <h2 data-aos="slide-down" data-aos-duration="1000" className={clsx(styles.titulo, 'text-center pt-4 pb-4')}>Sobre a Dra. Luana Forster</h2>
                <Row className='my-auto'>
                    <Col data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" lg={7}>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel earum sapiente repellat exercitationem ducimus ab vero optio aperiam sit, quibusdam dolore impedit at pariatur, numquam ullam quo quasi. Id.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad repellendus autem voluptatem iusto sequi, voluptatum at harum, eius, adipisci odit dolor dolorem inventore quis quia ex sed delectus exercitationem.
                            <br />
                            <br />
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam excepturi sunt natus culpa quae doloribus beatae illum dolorum alias. Odit repellat quam maxime. Magni quidem dicta placeat minima cumque?
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel earum sapiente repellat exercitationem ducimus ab vero optio aperiam sit, quibusdam dolore impedit at pariatur, numquam ullam quo quasi. Id.
                            <br />
                            <br />
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel earum sapiente repellat exercitationem ducimus ab vero optio aperiam sit, quibusdam dolore impedit at pariatur, numquam ullam quo quasi. Id.
                            <br />
                            <br />
                             </p>
                    </Col>
                    <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="350" lg={5}>
                        <img className={clsx(styles.image)} src={foto} alt="Foto Dra. Luana" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sobre