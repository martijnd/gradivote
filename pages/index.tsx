import GradientList from '../components/GradientList';
import NewGradientForm from '../components/NewGradientForm';
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Gradivote</title>
      </Head>
      <main className="container mt-8 mx-auto px-4 grid lg:grid-cols-2 lg:gap-5 divide-y-2 md:divide-y-0 divide-dotted">
        <GradientList />
        <NewGradientForm />
      </main>
    </div>
  );
}

export default IndexPage;
