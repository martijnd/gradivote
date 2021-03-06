import { FormEvent, useState } from 'react';
import { useQueryClient } from 'react-query';
import { addGradient } from '../lib/gradient';

function NewGradientForm() {
  const queryClient = useQueryClient();
  const directionOptions = [
    'to right',
    'to right top',
    'to right bottom',
    'to left',
    'to left top',
    'to left bottom',
  ];

  const [color1, setColor1] = useState('#7714c8');
  const [color2, setColor2] = useState('#c60c5f');
  const [direction, setDirection] = useState(directionOptions[0]);
  const result = `linear-gradient(${direction}, ${color1}, ${color2})`;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await addGradient(result);
      queryClient.invalidateQueries('gradients');
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <div className="py-3">
      <h2 className="mb-4 text-xl font-bold text-blue-500">Add a gradient</h2>
      <form onSubmit={onSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="direction">
              Direction
              <select
                className="block w-full lg:w-60 p-2 mb-4 mr-2 border rounded"
                name="direction"
                onChange={(e) => setDirection(e.target.value)}
              >
                {directionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="color1">
              Color 1
              <input
                className="block h-10 mb-4 w-full lg:w-60"
                type="color"
                name="color1"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
              />
            </label>
            <label htmlFor="color2">
              Color 2
              <input
                className="block h-10 mb-4 w-full lg:w-60"
                type="color"
                name="color2"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
              />
            </label>
          </div>
          <div>
            <h3 className="italic font-bold">Result</h3>
            {result}
            <div
              className="w-full h-52 rounded preview"
              style={{ background: result }}
            ></div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-300 text-white font-semibold py-4 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewGradientForm;
