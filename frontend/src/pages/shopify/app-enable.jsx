import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Enable Shopify App';
const description = '';
const nextPage = '';

export const AppEnable = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={12} />;
};
