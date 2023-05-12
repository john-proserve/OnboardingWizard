import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Tax IDs';
const description =
  'Using the Zonos Landed Cost guarantee allows you to use our international tax IDs for low-value tax schemes like UK VAT, EU IOSS, and Norway VOEC.';
const nextPage = 'buffers';

export const TaxIds = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'TaxIds'} />
    </>
  );
};
