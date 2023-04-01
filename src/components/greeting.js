import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/greet';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, error } = useSelector((state) => state.messages);
  const store = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  console.log(store);

  if (error) return <h1>Something Went Wrong!</h1>;

  return <h1>{greeting}</h1>;
};

export default Greeting;
