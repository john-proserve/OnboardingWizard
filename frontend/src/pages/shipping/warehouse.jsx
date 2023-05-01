import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Warehouse';
const description = 'Second, add your warehouse locations by clicking Create warehouse.';
const nextPage = 'shipping-zones';

export const Warehouse = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={5} />;
};
