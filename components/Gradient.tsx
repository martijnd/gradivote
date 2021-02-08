import { useState } from 'react';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { addVote } from '../lib/gradient';
import { Gradient } from '../types/gradient';

type Props = {
  gradient: Gradient;
};

function GradientItem({ gradient }: Props) {
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState('');
  async function castVote(uuid: string) {
    try {
      await addVote(uuid);
      setErrorMessage('');
      queryClient.invalidateQueries('gradients');
    } catch (e) {
      setErrorMessage('Already voted on this gradient!');
    }
  }
  const count = gradient.votes_aggregate.aggregate.count;

  return (
    <div className="flex flex-col">
      <div
        className="h-20 mt-4 bg-blue-400 rounded"
        style={{ background: `linear-gradient(${gradient.data})` }}
      >
        <button
          className="flex items-center justify-center w-full h-full text-white transition-opacity duration-200 opacity-0 hover:opacity-100"
          onClick={() => castVote(gradient.uuid)}
        >
          Vote
        </button>
      </div>
      <span className="block hover:hidden">
        {count} vote{count === 1 ? '' : 's'}
      </span>
      {errorMessage !== '' && (
        <div className="px-4 py-2 text-red-700 bg-red-200 border border-red-700 rounded">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default GradientItem;
