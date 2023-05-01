import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Buffers';
const description =
  'Optional — Shipping buffers can increase your margin or build certain costs into the amount your customer pays. You can add buffers on the shipping amount either per carrier or per shipping service level.';
const nextPage = 'team';

export const Buffers = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} optional step={10} />;
};
