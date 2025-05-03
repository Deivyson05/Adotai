import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";
import { GearSix, Dog, FileMagnifyingGlass, SignOut } from "@phosphor-icons/react";

export function User() {
    return (
        <main className={styles.container}>
            <div className={styles.profile}>
                <img src="https://placehold.co/400" alt="" />
                <div>
                    <h2>Nome</h2>
                    <span>example@email.com</span>
                </div>
            </div>
            <ul>
                <li>
                    <GearSix size={32} weight="fill"/>
                    <span>Configurações</span>
                </li>
                <li>
                    <Dog size={32} weight="fill"/>
                    <span>Preferências</span>
                </li>
                <li>
                    <FileMagnifyingGlass size={32} weight="fill"/>
                    <span>Pesquisa de Adoção</span>
                </li>
                <li>
                    <SignOut size={32} weight="fill"/>
                    <span>Sair</span>
                </li>
            </ul>
            <BottomTabBar currentPage="profile" />
        </main>
    )
}