import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'General';
const description = 'Enter your store information (business address and email). The EIN number is not needed with this integration.';
const nextPage = 'billing';

export const General = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={1}/>;
};
