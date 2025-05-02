import styles from "./styles.module.css";
import { MapPin, ArrowLeft } from '@phosphor-icons/react';
import { getData, updateData } from "../../../core/lStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function Adress() {

    const [cep, setCep] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');


    const navigate = useNavigate();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateData('register', 'address', {
            cep: cep,
            state: state,
            city: city,
            neighborhood: neighborhood,
            street: street,
            number: number
        });

        const data = getData('register');
        if (data.howAreYou === 'adopter') {
            navigate('/register/research');
        } else {
            navigate('/register/credentials');
        }
    }

    const searchAdress = async (cepLimpo: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            setState(data.uf);
            setCity(data.localidade);
            setNeighborhood(data.bairro);
            setStreet(data.logradouro);
        } catch (err) {
            console.error('Erro ao buscar o CEP:', err);
            alert('Erro ao buscar o CEP. Tente novamente.');
        }
    };


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
                    <MapPin size={32} className={styles.icon} />
                    <h2>Onde você mora?</h2>
                    <span>Precisamos de sua localização para indicar ongs mais próximas.</span>
                </div>

                <form onSubmit={submit}>
                    <div className={styles.inputs}>
                        <Input
                            label="CEP"
                            placeholder="00000000"
                            id="cep"
                            onChange={(event) => {
                                const valor = event.target.value.replace(/\D/g, '');
                                setCep(valor);

                                if (valor.length === 8) {
                                    // passa direto o valor limpo, sem depender do estado
                                    searchAdress(valor);
                                }
                            }}
                            required
                            value={cep}
                        />

                        <Input
                            label="Estado"
                            placeholder="Ex: PE"
                            id="state"
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    setState(event.target.value);
                                }
                            }
                            required
                            value={state}
                        />

                        <Input
                            label="Cidade"
                            placeholder="Ex: Recife"
                            id="city"
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    setCity(event.target.value);
                                }
                            }
                            required
                            value={city}
                        />

                        <Input
                            label="Bairro"
                            placeholder="Ex: Centro"
                            id="neighborhood"
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    setNeighborhood(event.target.value);
                                }
                            }
                            required
                            value={neighborhood}
                        />

                        <Input
                            label="Rua"
                            placeholder="Ex: Av. Brasil"
                            id="street"
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    setStreet(event.target.value);
                                }
                            }
                            required
                            value={street}
                        />

                        <Input
                            label="Número"
                            placeholder="Ex: 123"
                            id="number"
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    setNumber(event.target.value);
                                }
                            }
                            type="number"
                            required
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