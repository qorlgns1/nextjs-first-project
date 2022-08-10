import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const style = {
    color: '#000',
    textDecoration: 'none',
    marginRight: '5px',
  };

  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          style={
            router.pathname === '/'
              ? { ...style, color: 'red' }
              : { ...style, color: 'blue' }
          }
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={
            router.pathname === '/about'
              ? { ...style, color: 'red' }
              : { ...style, color: 'blue' }
          }
        >
          About
        </a>
      </Link>
    </nav>
  );
}
