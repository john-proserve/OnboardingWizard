import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Billing';
const description = 'Review your payment plan, payment method, primary billing contact and their information and make changes as needed.';
const nextPage = 'integration';

export const Billing = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'Billing'} />
    </>
  );
};
