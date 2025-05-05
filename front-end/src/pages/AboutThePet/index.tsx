import styles from "./styles.module.css";
import { StackHeader } from "../../components/StackHeader";
import { Button } from "../../components/Button";

export function AboutThePet() {
    return (
        <main className={styles.container}>
            <StackHeader />
            <img src="https://placehold.co/400" alt="" />
            <section>
                <div>
                    <h3>Nome do Pet</h3>
                    <span>ONG</span>
                    <span>Idade</span>
                    <span>Sexo</span>
                    <span>Porte</span>
                    <span>Raça</span>
                    <span>Cor</span>
                    <span>Descrição</span>
                </div>
                <Button>
                    Adotar este pet
                </Button>
            </section>

        </main>
    )
}