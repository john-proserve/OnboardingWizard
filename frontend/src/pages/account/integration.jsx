import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Integration';
const description = 'Stuff and things need to go here';
const nextPage = 'carrier-account';

export const Integration = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={3} />;
};
