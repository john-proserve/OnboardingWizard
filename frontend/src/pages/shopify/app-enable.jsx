import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Enable Shopify App';
const description = '';
const nextPage = '';

export const AppEnable = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'EnableApp'} />
    </>
  );
};
