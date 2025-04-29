import styles from "./styles.module.css";
import { FileMagnifyingGlass, ArrowLeft } from '@phosphor-icons/react';
import { updateData } from "../../core/lStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { TextArea } from "../../components/TextArea";


export function AdoptionResearch() {

    const [petSpace, setPetSpace] = useState(false);
    const [worksOutside, setWorksOutside] = useState(false);
    const [haveOtherPets, setHaveOtherPets] = useState(false);
    const [acceptsVisits, setAcceptsVisits] = useState(false);
    const [petAloneTime, setPetAloneTime] = useState(0);
    const [experienceWithPets, setExperienceWithPets] = useState('');


    const navigate = useNavigate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        updateData('register', 'recearch', {
            petSpace: petSpace,
            worksOutside: worksOutside,
            haveOtherPets: haveOtherPets,
            acceptsVisits: acceptsVisits,
            petAloneTime: petAloneTime,
            experienceWithPets: experienceWithPets
        });
        navigate('/register/preference');
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
                    <FileMagnifyingGlass size={32} className={styles.icon} />
                    <h2>Pesquisa de adoção</h2>
                    <span>Responda o questionário para uma melhor análize dos pedidos de adoção.</span>
                </div>

                <form onSubmit={submit}>
                    <div className={styles.inputs}>

                        <CheckBox
                            label="Tenho espaço para cuidar de um pet"
                            id="petSpace"
                            name="petSpace"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPetSpace(event.target.checked)}
                        />

                        <CheckBox
                            label="Trabalho fora"
                            id="worksOutside"
                            name="worksOutside"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWorksOutside(event.target.checked)}
                        />

                        <CheckBox
                            label="Tenho outros pets"
                            id="haveOtherPets"
                            name="haveOtherPets"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHaveOtherPets(event.target.checked)}
                        />

                        <CheckBox
                            label="Aceito visitas da ong de adoção"
                            id="acceptsVisits"
                            name="acceptsVisits"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAcceptsVisits(event.target.checked)}
                        />

                        <Input
                            label="Tempo que o pet ficaria sozinho em casa"
                            placeholder="Ex: 5hrs"
                            id="number"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPetAloneTime(parseInt(event.target.value))}
                            type="number"
                            required
                        />

                        <TextArea
                            label="Experiência com pets"
                            placeholder="Descreva sua experiência com pets"
                            id="experienceWithPets"
                            required
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setExperienceWithPets(event.target.value)}
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