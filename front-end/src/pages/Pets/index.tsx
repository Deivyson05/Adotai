import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";
import { Plus } from "@phosphor-icons/react";
import { PetSaved } from "../../components/PetSaved";

export function Pets() {
    return (
        <main className={styles.container}>
            <header>
                <strong>Pets Cadastrados</strong>
                <Plus size={32} />
            </header>


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

            
            <BottomTabBar 
                currentPage="pets" 
                variant="ong"
            />
        </main>
    );
}