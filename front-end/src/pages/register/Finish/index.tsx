import styles from "./styles.module.css";
import { CheckCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Finish() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/match');
    }, 5000);

    return (
        <main className={styles.container}>
            <CheckCircle className={styles.icon} size={100} weight="fill" />
            <div>
                <strong>Cadastro realizado com sucesso!</strong>
                <span>Redirecionando para a página inicial.</span>
            </div>
        </main>
    )
}