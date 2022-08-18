import React from 'react';
import { useRouter } from 'next/router';

export default function Slug({ staticDate }) {
  const router = useRouter();
  return (
    <div>
      <h1>Slug: {router.query.slug}</h1>
      <h2>Date generated: {staticDate}</h2>
    </div>
  );
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async () => {
  return {
    revalidate: 600,
    props: {
      staticDate: (new Date()).toString()
    }
  }
}