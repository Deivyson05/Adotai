import styles from "./styles.module.css";
import { Question, Person, PawPrint } from '@phosphor-icons/react';
import { setData, updateData } from "../../../core/lStorage";
import { useNavigate } from "react-router-dom";


export function HowAreYou() {
    const navigate = useNavigate();

    setData('register', {
        howAreYou: '',
        about: {
            firstName: '',
            lastName: '',
            phone: ''
        },
        address: {
            cep: '',
            state: '',
            city: '',
            neighborhood: '',
            street: '',
            number: ''
        },
        recearch: {
            petSpace: false,
            worksOutside: false,
            haveOtherPets: false,
            acceptsVisits: false,
            petAloneTime: 0,
            experienceWithPets: ''
        },
        preference: {
            species: '',
            size: '',
            age: '',
            gender: '',
            temperament: '',
        },
        login: {
            email: '',
            password: ''
        },
        organization: {
            name: '',
            cpfOrCnpj: '',
            description: ''
        }
    });

    return (
        <main className={styles.container}>
            <div className={styles.question}>
                <Question size={32} className={styles.icon} />
                <h2>Quem é você?</h2>
                <span>Está a procura de um pet ou é uma ONG?</span>
            </div>

            <div className={styles.buttons}>
                <button
                    onClick={() => {
                        updateData('register', 'howAreYou', 'adopter');
                        navigate('/register/about');
                    }}
                >
                    <Person size={52} />
                    <span>Adotante</span>
                </button>
                <button
                    onClick={() => {
                        updateData('register', 'howAreYou', 'organization');
                        navigate('/register/about');
                    }}
                >
                    <PawPrint size={52} />
                    <span>ONG de Adoção</span>
                </button>
            </div>
        </main>
    );
}