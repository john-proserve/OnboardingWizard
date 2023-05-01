import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';
import { Information } from '../../styles/global';

const title = 'Rules and Flat Rates';
const description =
  'Optional — If you want to create shipping rules (such as free shipping over a certain amount or flat 10 USD shipping), learn how to create flat rate shipping options in the shipping zone.';
const nextPage = 'landed-cost-settings';

export const Rules = () => {
  useHome(false);
  return (
    <LargeCard title={title} description={description} nextPage={nextPage} optional step={7}>
      <Information>
        <p>
          You also have the option of setting up free shipping or tiered flat rates from within the shipping zones you have configured. Here is some more
          information on these options:
        </p>
        <button>
          <a target="_blank" rel="noreferrer" href="https://docs.zonos.com/shipping/custom-shipping/flat-rate-shipping">
            Zonos Flat Rates/Free Shipping
          </a>
        </button>
      </Information>
    </LargeCard>
  );
};
