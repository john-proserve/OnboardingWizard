import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';

const title = 'Billing';
const description = 'Review your payment plan, payment method, primary billing contact and their information and make changes as needed.';
const nextPage = 'integration';

export const Billing = () => {
  useHome(false);
  return <LargeCard title={title} description={description} nextPage={nextPage} step={2} />;
};
