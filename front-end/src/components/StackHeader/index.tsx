import styles from "./styles.module.css";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface stackHeaderProps {
    title?: string
}
export function StackHeader({ title }: stackHeaderProps) {
    const navigate = useNavigate();
    return (
        <header className={styles.container}>
            <ArrowLeft 
                size={32}  
                onClick={() => navigate(-1)} 
            />
            <span>
                {title}
            </span>
        </header>
    );
}