import { LargeCard } from '../../components/large-card';

const title = 'Tax IDs';
const description =
  'Using the Zonos Landed Cost guarantee allows you to use our international tax IDs for low-value tax schemes like UK VAT, EU IOSS, and Norway VOEC.';
const nextPage = 'buffers';

export const TaxIds = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
