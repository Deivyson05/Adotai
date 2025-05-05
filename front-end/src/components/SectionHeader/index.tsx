import styles from "./styles.module.css";

export function SectionHeader({ title }: { title: string }) {
    return (
        <header className={styles.container}>
            <h4>{title}</h4>
        </header>
    );
}