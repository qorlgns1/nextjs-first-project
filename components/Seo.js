import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>Kihoon's {title} | Next Movies </title>
    </Head>
  );
}
