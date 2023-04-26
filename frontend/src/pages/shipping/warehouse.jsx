import { LargeCard } from '../../components/large-card';

const title = 'Warehouse';
const description =
  'Second, add your warehouse locations by clicking Create warehouse.';
const nextPage = 'shipping-zones';

export const Warehouse = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
