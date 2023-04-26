import { LargeCard } from '../../components/large-card';

const title = 'Team';
const description =
  'Ensure everyone who needs to use Dashboard can access it. Add as many users as you like. Learn how to manage your team.';
const nextPage = 'app-enable';

export const Team = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} />
);
