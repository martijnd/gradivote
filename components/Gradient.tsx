import { Gradient } from '../types/gradient';

type Props = {
  gradient: Gradient;
};

function GradientItem({ gradient }: Props) {
  return (
    <div
      className="w-40 h-20 my-4 bg-blue-400 rounded"
      style={{ background: `linear-gradient(${gradient.data})` }}
    >
      <div className="flex justify-center items-center w-full h-full text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
        <button className="border-2 px-2 py-1 rounded">Vote</button>
      </div>
    </div>
  );
}

export default GradientItem;
