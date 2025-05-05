import styles from "./styles.module.css";
import { ChatCircle } from "@phosphor-icons/react";

interface petRequestProps {
    name: string;
    status: string;
}

export function PetRequest({ name, status }: petRequestProps) {
    return (
        <article className={styles.container}>
            <img src="https://placehold.co/400" alt="pet" />
            <div>
                <h3>{name}</h3>
                <span>{status}</span>
            </div>
            <ChatCircle size={24} />
        </article>
    );
}