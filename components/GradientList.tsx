import { Gradient } from '../types/gradient';
import GradientItem from './Gradient';

type Props = {
  gradients: Gradient[];
};

function GradientList({ gradients }: Props) {
  return (
    <>
      <div>
        {gradients.map((gradient) => (
          <GradientItem key={gradient.uuid} gradient={gradient} />
        ))}
      </div>
    </>
  );
}

export default GradientList;
