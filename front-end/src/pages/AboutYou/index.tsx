import styles from "./styles.module.css";
import { IdentificationCard, ArrowLeft } from '@phosphor-icons/react';
import { getData, updateData } from "../../core/lStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function AboutYou() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateData('register', 'about', {
            firstName: name,
            lastName: lastName,
            phone: phone
        });

        const data = getData('register');
        if (data.howAreYou === 'adopter') {
            navigate('/register/address');
        } else {
            navigate('/register/organization');
        }
    }



    return (
        <main className={styles.container}>
            <header>
                <ArrowLeft size={32} 
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </header>
            <section>
                <div className={styles.question}>
                    <IdentificationCard size={32} className={styles.icon} />
                    <h2>Queremos te conhecer melhor!</h2>
                    <span>Precisamos de suas informações básicas.</span>
                </div>

                <form onSubmit={submit}>
                    <div className={styles.inputs}>
                        <Input
                            label="Nome"
                            placeholder="Digite seu nome"
                            id="name"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                            }}
                            required={true}
                        />

                        <Input
                            label="Sobrenome"
                            placeholder="Digite seu sobrenome"
                            id="lastName"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setLastName(event.target.value);
                            }}
                            required={true}
                        />

                        <Input
                            label="Telefone"
                            placeholder="Digite seu telefone"
                            id="phone"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPhone(event.target.value);
                            }}
                            required={true}
                        />
                    </div>

                    <Button type="submit">
                        Prosseguir
                    </Button>
                </form>

            </section>

        </main >
    );
}