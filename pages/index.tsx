import Nav from '../components/nav';
import { useGradients } from '../lib/gradient';
import GradientList from '../components/GradientList';

function IndexPage() {
  const { status, data, error, isFetching } = useGradients();

  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <h1 className="text-blue-500 font-bold text-xl mb-4">Gradients</h1>
        <div>
          {status === 'loading' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <GradientList gradients={data} />

              <div>{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
