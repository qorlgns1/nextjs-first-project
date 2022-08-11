import React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

export default function App({ Component, ...pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <div>배기훈짱</div>
      </Layout>
    </>
  );
}
