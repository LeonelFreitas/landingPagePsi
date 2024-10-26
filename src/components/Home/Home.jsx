import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx/dist/clsx.m';
import foto from './assets/Luana.png';
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';
import logo from '../../../public/logo.png'

function Home() {


    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [interesse, setInteresse] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [errors, setErrors] = useState({});

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        // Resetando os campos e erros ao fechar o modal
        setNome('');
        setEmail('');
        setTelefone('');
        setInteresse('');
        setMensagem('');
        setErrors({});
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!nome) {
            newErrors.nome = "O nome é obrigatório.";
        }

        if (!email) {
            newErrors.email = "O email é obrigatório.";
        } else if (!validateEmail(email)) {
            newErrors.email = "Por favor, insira um email válido.";
        }

        if (!telefone) {
            newErrors.telefone = "O telefone é obrigatório.";
        }

        if (!interesse) {
            newErrors.interesse = "Selecione um tipo de interesse.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Formulário enviado com sucesso!");
            // Aqui você pode processar o formulário, por exemplo, enviá-lo para uma API
            handleClose(); // Fechar o modal após o envio
        }
    };






    return (
        <>
            <section id='home' className={clsx(styles.s_hero, styles.row)}>
                <Container id='container'>
                    <div className={styles.quoteDiv}>
                        <p className={styles.quote}>&quot;Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.&quot; - Carl Jung</p>
                    </div>
                    <ul className={styles.ul}>
                        <li className={clsx(styles.li, styles.items)}>
                            <div className={clsx(styles.hero_texts)}>
                                <h1>Luana Forster</h1>
                                <p className={styles.desc}>Promovendo o bem-estar emocional, cultivando o equilíbrio interior e guiando você rumo a uma vida plena e significativa.</p>
                            </div>
                            <div className={clsx(styles.hero_buttonsQuote)}>
                                <div className={styles.button}>
                                    <a href="#infos" className={clsx(styles.hero_buttonS, styles.button)}>Saiba mais</a>
                                    <a onClick={handleShow} className={clsx(styles.hero_buttonC, styles.button)}>Cadastro de Interesse</a>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles.li, styles.img)}>
                            <div className={clsx(styles.hero_imgContent)}>
                                <img src={foto} alt="Foto Luana" />
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>

            <Modal show={showModal} onHide={handleClose} className={styles.customModal}>
            <Modal.Header closeButton>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ maxWidth: '55px', marginRight: '10px' }} />
                    <Modal.Title style={{ margin: 0 }}>Cadastro de Interesse</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <p>Estamos animados com seu interesse! Por favor, preencha os dados abaixo para que possamos entrar em contato e fornecer mais informações sobre nossos serviços:</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        {errors.nome && <div className="text-danger">{errors.nome}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone<span style={{ color: 'red' }}>*</span></label>
                        <InputMask
                            mask="(99) 99999-9999"
                            className="form-control"
                            id="telefone"
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                        {errors.telefone && <div className="text-danger">{errors.telefone}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="interesse" className="form-label">Tipo de Interesse<span style={{ color: 'red' }}>*</span></label>
                        <select
                            className="form-select"
                            id="interesse"
                            value={interesse}
                            onChange={(e) => setInteresse(e.target.value)}
                            required
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="servico1">Serviço 1</option>
                            <option value="servico2">Serviço 2</option>
                            <option value="servico3">Serviço 3</option>
                            <option value="servico4">Serviço 4</option>
                            <option value="servico4">Serviço 4</option>
                        </select>
                        {errors.interesse && <div className="text-danger">{errors.interesse}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensagem" className="form-label">Mensagem (opcional)</label>
                        <textarea
                            className="form-control"
                            id="mensagem"
                            rows="3"
                            placeholder='Escreva aqui um breve resumo do que está passando...'
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal >

        </>
    );
}

export default Home;
