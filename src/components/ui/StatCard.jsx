import Card from './Card';

const StatCard = ({ title, value }) => {
  return (
    <Card>
      <p className='text-sm text-gray-500'>{title}</p>
      <p className='text-3xl font-bold mt-2'>{value}</p>
    </Card>
  );
};

export default StatCard;
