import { Gradient } from '../types/gradient';
import GradientItem from './Gradient';

type Props = {
  gradients: Gradient[];
};

function GradientList({ gradients }: Props) {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        {gradients.map((gradient) => (
          <GradientItem key={gradient.uuid} gradient={gradient} />
        ))}
      </div>
    </>
  );
}

export default GradientList;
