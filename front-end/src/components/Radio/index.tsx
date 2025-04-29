import styles from './styles.module.css';
interface radioProps {
    label: string,
    id?: string,
    name?: string
}

export function Radio({ label, id, name }: radioProps) {
    return (
        <label htmlFor={id} className={styles.container}>
            <input type="radio" name={name} id={id} />
            <span className={styles.checkmark}></span>
            <span>{label}</span>
        </label>
    )
}