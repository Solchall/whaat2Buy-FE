import { useQuery } from 'store';

const Title = () => {
  const query = useQuery();
  return (
    <div className="text-center">
      <h5 className="text-white text-2xl font-semibold mb-2">{query}</h5>
    </div>
  );
};

export default Title;
