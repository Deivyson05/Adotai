import styles from './styles.module.css';
interface checkProps {
    label: string,
    id?: string,
    name?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function CheckBox({ label, id, name, onChange }: checkProps) {
    return (
        <label htmlFor={id} className={styles.container}>
            <input type="checkbox" name={name} id={id} onChange={onChange} />
            <span className={styles.checkmark}></span>
            <span>{label}</span>
        </label>
    )
}