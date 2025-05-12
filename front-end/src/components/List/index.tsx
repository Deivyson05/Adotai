import styles from './styles.module.css'

interface listProps {
    label: string
    id?: string
    name?: string
    options: string[],
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}


export function List( { label, id, name, options, onChange }: listProps ) {
    return (
        <label htmlFor={id} className={styles.container}>
            <h5>{label}</h5>
            <div>
                <select id={id} name={name} onChange={onChange}>
                {
                    options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))
                }
                </select>
            </div>
            
        </label>
    );
}