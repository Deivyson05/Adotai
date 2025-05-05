import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";
import { PetRequest } from "../../components/PetRequest";
import { SectionHeader } from "../../components/SectionHeader";

export function Requests() {
    return (
        <main className={styles.container}>
            <SectionHeader title="Pedidos de adoção" />
            <PetRequest
                name="Nome do Pet"
                status="Em análise"
            />
            <PetRequest
                name="Nome do Pet"
                status="Em análise"
            />
            
            <BottomTabBar currentPage="chat" />
        </main>
    )
}