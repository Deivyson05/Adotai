import styles from './styles.module.css'

interface textAreaProps {
    label: string,
    placeholder: string,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string,
    id?: string,
    required?: boolean
}

export function TextArea({ label, placeholder, onChange, value, id, required }: textAreaProps) {
    return (
        <label htmlFor={id} className={styles.container}>
            <span>
                <h5>{label}</h5>
                <p>{required? '*' : ''}</p>
            </span>
            <div>
                <textarea rows={10} required={required} id={id} value={value} placeholder={placeholder} onChange={onChange}/>
            </div>
        </label>
    )
}