import { LargeCard } from '../../components/large-card';

const title = 'General';
const description =
  'Enter your store information (business address and email). The EIN number is not needed with this integration.';
const nextPage = 'billing';

export const General = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
