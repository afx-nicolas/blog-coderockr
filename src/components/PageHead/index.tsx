import Head from 'next/head'

interface PageHeadProps {
  children: React.ReactNode;
  title: string;
}

const PageHead= ({ title, children }: PageHeadProps) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      { children }
    </>
  );
};

export default PageHead;
