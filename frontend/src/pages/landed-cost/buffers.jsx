import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';
import { Information } from '../../styles/global';

const title = 'Buffers';
const description =
  'Optional — Shipping buffers can increase your margin or build certain costs into the amount your customer pays. You can add buffers on the shipping amount either per carrier or per shipping service level.';
const nextPage = 'team';

export const Buffers = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} optional step={'Buffers'}>
        <Information>
          <p>If you would like to buffer a portion or all of our quotes (positively OR negatively), you may do so by following the steps listed here:</p>
          <button>
            <a target="_blank" rel="noreferrer" href="https://docs.zonos.com/shipment-rating/custom-rating/add-a-buffer">
              Zonos Buffers
            </a>
          </button>
          <ul style={{ textAlign: 'left', width: '70%', margin: 'auto' }}>
            Some examples of situations where these are useful:
            <li>You do not have dimensions listed for your products and would like to cushion your shipping costs</li>
            <li>You would like to subsidize the cost of duty and tax for your customers by only collecting a portion from them</li>
            <li>You want to make a small margin on shipping costs</li>
          </ul>
        </Information>
      </LargeCard>
    </>
  );
};
