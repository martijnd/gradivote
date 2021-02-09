import { useState } from 'react';
import { useGradients } from '../lib/gradient';
import GradientItem from './GradientItem';

function GradientList() {
  const { status, data: gradients, error, isFetching } = useGradients();
  const [errorMessage, setErrorMessage] = useState('');
  const [opacityClass, setOpacityClass] = useState('');
  function handleOnError() {
    setErrorMessage('Already voted on this gradient!');
    setOpacityClass('opacity-100');
    setTimeout(() => {
      setOpacityClass('opacity-0');
    }, 2000);
  }

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
            <GradientItem
              key={gradient.uuid}
              gradient={gradient}
              onError={handleOnError}
            />
          ))}
        </div>
      )}
      {errorMessage !== '' && (
        <div
          className={`fixed bottom-4 px-4 py-2 mt-4 text-red-700 bg-red-200 border border-red-700 rounded ${opacityClass} transition-opacity`}
        >
          {errorMessage}
        </div>
      )}
    </article>
  );
}

export default GradientList;
