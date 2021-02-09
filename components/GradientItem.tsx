import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { addVote } from '../lib/gradient';
import { Gradient } from '../types/gradient';

type Props = {
  gradient: Gradient;
};

function GradientItem({ gradient }: Props) {
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState('');
  async function onAddVote(uuid: string) {
    try {
      setCount(count + 1);
      await addVote(uuid);
      setErrorMessage('');
      queryClient.invalidateQueries('gradients');
    } catch (e) {
      setCount(gradient.votes_aggregate.aggregate.count);
      setErrorMessage('Already voted on this gradient!');
    }
  }

  const [count, setCount] = useState(gradient.votes_aggregate.aggregate.count);

  return (
    <div className="flex flex-col">
      <span>
        {count} vote{count === 1 ? '' : 's'}
      </span>
      <div
        className="h-40 md:h-20 bg-blue-400 rounded"
        style={{ background: gradient.data.toString() }}
      />
      <div className="block hover:hidden">
        <button
          className="w-full px-4 py-2 my-2 font-semibold text-white rounded-sm from-red-600 to-red-800 bg-gradient-to-r"
          onClick={() => onAddVote(gradient.uuid)}
        >
          Vote
        </button>
      </div>
      {errorMessage !== '' && (
        <div className="px-4 py-2 text-red-700 bg-red-200 border border-red-700 rounded">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default GradientItem;
