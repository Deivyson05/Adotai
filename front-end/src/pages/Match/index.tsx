import styles from "./styles.module.css";
import { BottomTabBar } from "../../components/BottomTabBar";
import { Swiper } from "../../components/Swiper";

export function Match() {
    return (
        <main className={styles.container}>
            <Swiper />
            <BottomTabBar currentPage="match" />
        </main>
    )
}