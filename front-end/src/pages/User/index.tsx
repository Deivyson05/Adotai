import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";

export function User() {
    return (
        <main className={styles.container}>
            <BottomTabBar currentPage="profile" />
        </main>
    )
}