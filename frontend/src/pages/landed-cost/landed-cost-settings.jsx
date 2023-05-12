import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Landed Cost Settings';
const description =
  'Select a default country of origin (where most of your products are manufactured) and input a default HS code. These defaults will be used to calculate a duty and tax quote if your products are not assigned a country of origin or HS code at the product level in your ecommerce store. If you do not know your HS codes for your products you can use Classify to look up your HS codes by product descriptions.';
const nextPage = 'tax-ids';

export const LandedCostSettings = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'LandedCostSettings'} />
    </>
  );
};
