import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: 'primary' | 'secondary',
    type?: 'button' | 'submit'
}

export function Button( { children, onClick, variant = 'primary', type }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`${styles.container} ${styles[variant]}`}
            type={type}
        >
            {children}
        </button>
    )
}