import { SectionCard } from '../components/section-card';
import { useHome } from '../hooks/use-home';

const accountInfo = {
  title: 'Account Info',
  description: '',
  nextPage: 'general',
};

const shipping = {
  title: 'Shipping Info',
  description: '',
  nextPage: 'carrier-account',
};

const landedCost = {
  title: 'Landed Cost Info',
  description: '',
  nextPage: 'landed-cost-settings',
};

const shopify = {
  title: 'Shopify Connection',
  description: '',
  nextPage: 'app-enable',
};

export const HomePage = () => {
  useHome(true);

  return (
    <>
      <SectionCard title={accountInfo.title} description={accountInfo.description} nextPage={accountInfo.nextPage} />
      <SectionCard title={shipping.title} description={shipping.description} nextPage={shipping.nextPage} />
      <SectionCard title={landedCost.title} description={landedCost.description} nextPage={landedCost.nextPage} />
      <SectionCard title={shopify.title} description={shopify.description} nextPage={shopify.nextPage} />
    </>
  );
};
