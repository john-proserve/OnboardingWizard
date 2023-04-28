import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Tax IDs';
const description =
  'Using the Zonos Landed Cost guarantee allows you to use our international tax IDs for low-value tax schemes like UK VAT, EU IOSS, and Norway VOEC.';
const nextPage = 'buffers';

export const TaxIds = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={9} />;
};
