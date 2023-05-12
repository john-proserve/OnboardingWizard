import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Integration';
const description = 'Stuff and things need to go here';
const nextPage = 'carrier-account';

export const Integration = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'Integration'} />
    </>
  );
};
