import { LargeCard } from '../components/large-card';

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

export const HomePage = () => (
  <>
    <LargeCard
      title={accountInfo.title}
      description={accountInfo.description}
      nextPage={accountInfo.nextPage}
    />
    <LargeCard
      title={shipping.title}
      description={shipping.description}
      nextPage={shipping.nextPage}
    />
    <LargeCard
      title={landedCost.title}
      description={landedCost.description}
      nextPage={landedCost.nextPage}
    />
    <LargeCard
      title={shopify.title}
      description={shopify.description}
      nextPage={shopify.nextPage}
    />
  </>
);
