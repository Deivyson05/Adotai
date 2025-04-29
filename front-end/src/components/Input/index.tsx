import styles from './styles.module.css';
import { EyeClosed, Eye } from '@phosphor-icons/react';
import { useState } from 'react';

interface InputProps {
    label: string,
    placeholder: string,
    type?: 'text' | 'password' | 'email' | 'number',
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    id?: string,
    required?: boolean
}

export function Input({ label, placeholder, type = 'text', onChange, value, id, required }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);	
    
    return (
        <label htmlFor={id} className={styles.container}>
            <span>{label}</span>
            <div>
                <input required={required} id={id} value={value} placeholder={placeholder} type={type === 'password' && showPassword ? 'text' : type} onChange={onChange}/>
                {
                    type === 'password' && (
                        showPassword ? (
                            <EyeClosed className={styles.eye} size={24} onClick={() => setShowPassword(!showPassword)}/>
                        ) : (
                            <Eye className={styles.eye} size={24} onClick={() => setShowPassword(!showPassword)}/>
                        )
                    )
                }
            </div>
        </label>
    );
}