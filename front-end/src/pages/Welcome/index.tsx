import logo from "../../assets/logo1.png";
import background from "../../assets/background.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Radio } from "../../components/Radio";
import styles from "./styles.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Welcome() {

    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const [loginActive, setLoginActive] = useState(false);

    return (
        <main 
            className={styles.container}
            style={{backgroundImage: `url(${background})`}}

        >
            
            <section>
                <div className={styles.slogan}>
                    <img src={logo} alt="" />
                    <span>Seu pet, a um match!</span>
                </div>
                <form 
                    className={styles.login}
                    style={{display: loginActive ? 'flex' : 'none'}}
                >
                    <Input
                        label="Email"
                        placeholder="Digite seu email"
                        type="email"
                        id="email"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                    />

                    <Input
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        id="password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(event.target.value);
                        }}
                    />
                    
                    <Radio
                        label="Sou um adotante"
                        id="adotante"
                        name="select"
                    />

                    <Radio
                        label="Sou uma organização"
                        id="ong"
                        name="select"
                    />


                    <Button>Entrar</Button>

                    <strong
                        onClick={()=>{
                            setLoginActive(false);
                        }}
                    >
                        Não tenho uma conta
                    </strong>
                </form>
                <div 
                    className={styles.options}
                    style={{display: loginActive ? 'none' : 'flex'}}
                >
                    <Button 
                        variant="secondary"
                        onClick={()=>{
                            setLoginActive(true);
                        }}
                    >
                        Entrar
                    </Button>

                    <Button
                        onClick={() => navigate('/register/howareyou')}
                    >
                        Realizar Cadastro
                    </Button>
                </div>
            </section>
        </main>
    );
}