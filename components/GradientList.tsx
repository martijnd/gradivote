import { useGradients } from '../lib/gradient';
import GradientItem from './GradientItem';

function GradientList() {
  const { status, data: gradients, error, isFetching } = useGradients();
  return (
    <article className="py-3">
      <h1 className="text-blue-500 font-bold text-xl mb-4">
        Gradients {isFetching ? '- loading...' : ''}
      </h1>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {gradients.map((gradient) => (
            <GradientItem key={gradient.uuid} gradient={gradient} />
          ))}
        </div>
      )}
    </article>
  );
}

export default GradientList;
