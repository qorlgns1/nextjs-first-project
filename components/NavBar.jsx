import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.custom_a_tag} ${
            router.pathname === '/' ? styles.red_color : styles.blue_color
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.custom_a_tag} ${
            router.pathname === '/about' ? styles.red_color : styles.blue_color
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
