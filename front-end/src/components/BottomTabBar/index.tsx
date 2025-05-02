import styles from './styles.module.css';
import { User, PawPrint, BookmarkSimple, ChatCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface BottomTabBarProps {
    currentPage: string
}
export function BottomTabBar({ currentPage }: BottomTabBarProps) {
    const navigate = useNavigate();

    return (
        <nav className={styles.container}>

            <User
                size={32}
                weight="fill"
                className={currentPage === 'profile' ? styles.active : styles.inactive}
                onClick={() => navigate('/user')}
            />


            <PawPrint
                size={32}
                weight="fill"
                className={currentPage === 'match' ? styles.active : styles.inactive}
                onClick={() => navigate('/match')}
            />


            <BookmarkSimple
                size={32}
                weight="fill"
                className={currentPage === 'favorites' ? styles.active : styles.inactive}
                onClick={() => navigate('/favorites')}
            />


            <ChatCircle
                size={32}
                weight="fill"
                className={currentPage === 'chat' ? styles.active : styles.inactive}
                onClick={() => navigate('/chat')}
            />

        </nav>
    )
}