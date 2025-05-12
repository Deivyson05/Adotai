import styles from "./styles.module.css";
import { BuildingOffice, ArrowLeft } from '@phosphor-icons/react';
import { updateData } from "../../../core/lStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../../components/Input";
import { CheckBox } from "../../../components/CheckBox";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";

export function Organization() {

    const [name, setName] = useState('');
    const [hasCnpj, setHasCnpj] = useState(false);
    const [cnpj, setCnpj] = useState('');
    const [description, setDescription] = useState('');
    const [hasWebsite, setHasWebsite] = useState(false);
    const [website, setWebsite] = useState('');

    const navigate = useNavigate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateData('register', 'organization', {
            name: name,
            cnpj: cnpj,
            website: website,
            description: description,
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

                        <CheckBox
                            label="Possui CNPJ?"
                            id="hasCnpj"
                            name="hasCnpj"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setHasCnpj(event.target.checked);
                            }}
                        />

                        <Input
                            label="CPF ou CNPJ"
                            placeholder="Digite seu CPF ou CNPJ"
                            id="cnpj"
                            active={hasCnpj}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCnpj(event.target.value);
                            }}
                            required={hasCnpj}
                        />

                        <CheckBox
                            label="Possui site?"
                            id="hasWebsite"
                            name="hasWebsite"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setHasWebsite(event.target.checked);
                            }}
                        />

                        <Input
                            label="Site"
                            placeholder="Digite seu site"
                            id="website"
                            active={hasWebsite}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setWebsite(event.target.value);
                            }}
                            required={hasWebsite}
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