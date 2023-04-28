import { LargeCard } from '../../components/large-card';

const title = 'Rules and Flat Rates';
const description =
  'Optional — If you want to create shipping rules (such as free shipping over a certain amount or flat 10 USD shipping), learn how to create flat rate shipping options in the shipping zone.';
const nextPage = 'landed-cost-settings';

export const Rules = () => (
  <LargeCard title={title} description={description} nextPage={nextPage} optional />
);
