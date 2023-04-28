import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Team';
const description = 'Ensure everyone who needs to use Dashboard can access it. Add as many users as you like. Learn how to manage your team.';
const nextPage = 'app-enable';

export const Team = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={11} />;
};
