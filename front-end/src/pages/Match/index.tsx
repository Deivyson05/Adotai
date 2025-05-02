import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";

export function Match() {
    return (
        <main className={styles.container}>
            <BottomTabBar currentPage="match" />
        </main>
    )
}