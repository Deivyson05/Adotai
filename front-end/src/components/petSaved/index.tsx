import styles from "./styles.module.css";
import { Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface petSavedProps {
    name: string;
    ongName: string;
    img: string;
}

export function PetSaved({ name, ongName, img }: petSavedProps) {
    const navigate = useNavigate();
    return (
        <article 
            className={styles.container}
            onClick={() => {
                navigate('/about-the-pet');
            }}
        >
            <img src={img} alt="pet" />
            <div>
                <h3>{name}</h3>
                <span>{ongName}</span>
            </div>
            <Trash size={24} />
        </article>
    );
}