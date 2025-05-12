import styles from "./styles.module.css";
import { CheckCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../core/lStorage";

export function Finish() {
    const navigate = useNavigate();

    setTimeout(() => {
        if(getData('register').howAreYou === 'adopter') {
            navigate('/match');
        }else {
            navigate('/pets');
        }
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