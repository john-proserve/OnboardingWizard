import { LargeCard } from '../../components/large-card';

const title = 'Carrier Account';
const description =
  'First, Connect a carrier. If you want to use live rates from a carrier, click Connect carrier account in the top right. Live rates will use the weight of your products to calculate the shipment cost. If your products do not have weights in your eCommerce platform, please contact us to help you set up a factor to estimate them.';
const nextPage = 'warehouse';

export const CarrierAccount = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
