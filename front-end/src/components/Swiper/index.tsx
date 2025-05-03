import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import { X, Heart, ShareFat } from "@phosphor-icons/react";

type Info = {
    id: number;
    name: string;
    image: string;
    ongName: string;
    address: string;
}

const dados: Info[] = [
    {
        id: 1,
        name: "Cachorro",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7yQJcIBsZHjYtTbv2hl7SYSFWwUOm3pymw&s",
        ongName: "ONG",
        address: "Endereço"
    },
    {
        id: 2,
        name: "Gato",
        image: "https://images.steamusercontent.com/ugc/81469096706086309/3E924CEFA4AB2AED1072DE57F16DFB0C448D3D70/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        ongName: "ONG",
        address: "Endereço"
    },
    {
        id: 3,
        name: "Papagaio",
        image: "https://metro.co.uk/wp-content/uploads/2014/01/parakeet-selfie_1556779735.png",
        ongName: "ONG",
        address: "Endereço"
    },
    {
        id: 4,
        name: "Elefante",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHP1LykmKqHMg7HCe_VjCaRr-I0mY6-LBXw&s",
        ongName: "ONG",
        address: "Endereço"
    },
    {
        id: 5,
        name: "Ema",
        image: "https://pm1.aminoapps.com/6481/f203af0ce0407b23b5f7083846df8912fdc538fc_00.jpg",
        ongName: "ONG",
        address: "Endereço"
    }
];

export function Swiper() {
    const [index, setIndex] = useState(0);
    const [direcao, setDirecao] = useState<"esquerda" | "direita">("direita");

    const handleNext = () => {
        setIndex((prev) => (prev < dados.length - 1 ? prev + 1 : 0));
    };

    const currentInfo = dados[index];

    return (
        <div style={{ width: "300px", height: "", overflow: "hidden", position: "relative" }}>


            <AnimatePresence mode="wait">
                <motion.div
                    key={currentInfo.id}
                    initial={{ x: direcao === "direita" ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direcao === "direita" ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={styles.container}
                >
                    <div
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${currentInfo.image})`
                        }}
                    >
                        

                        <div>
                            <p>{currentInfo.name}</p>
                            <p>{currentInfo.ongName}</p>
                            <p>{currentInfo.address}</p>
                        </div>

                    </div>
                    <div className={styles.buttons}>
                        <button><ShareFat size={32} weight="fill"/></button>
                        <button><Heart size={32} weight="fill"/></button>
                        <button onClick={handleNext}><X size={32}/></button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}