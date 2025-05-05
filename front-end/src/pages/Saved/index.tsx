import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";
import { PetSaved } from "../../components/PetSaved";

export function Saved() {
    return (
        <main className={styles.container}>
            <PetSaved 
                name="Nome do Pet"
                ongName="Nome da ONG"
            />
            <PetSaved 
                name="Nome do Pet"
                ongName="Nome da ONG"
            />
            <PetSaved 
                name="Nome do Pet"
                ongName="Nome da ONG"
            />
            <PetSaved 
                name="Nome do Pet"
                ongName="Nome da ONG"
            />
            <BottomTabBar currentPage="favorites" />
        </main>
    )
}