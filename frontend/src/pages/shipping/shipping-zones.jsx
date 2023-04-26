import { LargeCard } from '../../components/large-card';

const title = 'Shipping Zones';
const description =
  'Lastly, Create a shipping zone. Within the shipping zone that you create, select the countries you want to ship to, the warehouse that ships there, and the shipping service levels you would like to offer to customers in those countries. You can create multiple shipping zones if you want these settings to vary by country.';
const nextPage = 'rules-flat-rates';

export const ShippingZones = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
