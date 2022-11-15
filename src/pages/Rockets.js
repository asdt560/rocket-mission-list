import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  console.log(rockets);
  const test = rockets[0];
  console.log(test);

  const rend = (
    <Rocket
      key={test.id}
      name={test.name}
      description={test.description}
      images={test.images}
    />
  );

  return (
    <ul>
      {rend}
    </ul>
  );
};

export default Rockets;
