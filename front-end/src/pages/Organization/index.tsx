import styles from "./styles.module.css";
import { BuildingOffice, ArrowLeft } from '@phosphor-icons/react';
import { updateData } from "../../core/lStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function Organization() {

    const [name, setName] = useState('');
    const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateData('register', 'organization', {
            name: name,
            cpfOrCnpj: cpfOrCnpj,
            description: description
        });

        
        navigate('/register/address');
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
                    <BuildingOffice size={32} className={styles.icon} />
                    <h2>Dados da Organização</h2>
                    <span>Nos fale melhor sobre sua ONG.</span>
                </div>

                <form onSubmit={submit}>
                    <div className={styles.inputs}>
                        <Input
                            label="Nome da ONG"
                            placeholder="Digite seu nome"
                            id="name"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                            }}
                            required={true}
                        />

                        <Input
                            label="CPF ou CNPJ"
                            placeholder="Digite seu CPF ou CNPJ"
                            id="cpfOrCnpj"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCpfOrCnpj(event.target.value);
                            }}
                            required={true}
                        />

                        <TextArea
                            label="Descrição da ONG"
                            placeholder="Descreva sua ONG"
                            id="description"
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setDescription(event.target.value);
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