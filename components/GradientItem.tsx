import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { addVote } from '../lib/gradient';
import { Gradient } from '../types/gradient';

type Props = {
  gradient: Gradient;
  onError: () => void;
};

function GradientItem({ gradient, onError }: Props) {
  const queryClient = useQueryClient();

  async function onAddVote(uuid: string) {
    try {
      setCount(count + 1);
      await addVote(uuid);
      queryClient.invalidateQueries('gradients');
    } catch (e) {
      setCount(gradient.votes_aggregate.aggregate.count);
      onError();
    }
  }

  const [count, setCount] = useState(gradient.votes_aggregate.aggregate.count);

  return (
    <div className="flex flex-col">
      <span className="font-semibold">
        {count} vote{count === 1 ? '' : 's'}
      </span>
      <div className="shadow-lg">
        <div
          className="h-40 bg-blue-400 rounded rounded-b-none md:h-20"
          style={{ background: gradient.data.toString() }}
        />
        <div className="block hover:hidden">
          <button
            className="w-full px-4 py-2 font-semibold text-white border-t border-white rounded-sm rounded-t-none from-red-600 to-red-800 bg-gradient-to-r"
            onClick={() => onAddVote(gradient.uuid)}
            disabled={gradient.has_voted}
          >
            {gradient.has_voted ? 'Voted!' : 'Vote'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GradientItem;
