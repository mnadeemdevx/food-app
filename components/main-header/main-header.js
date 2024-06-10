'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import MainHeaderBg from './main-header-bg/main-header-bg';
import logoImg from '@/assets/logo.png';
import NavLink from './nav-link/nav-link';
import classes from './main-header.module.css';

const MainHeader = () => {
    const path = usePathname();
    return (
        <>
            <MainHeaderBg />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A food on a plate!" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
