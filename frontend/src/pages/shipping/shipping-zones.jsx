import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';
import { Information } from '../../styles/global';

const title = 'Shipping Zones';
const description = '';
const nextPage = 'rules-flat-rates';

export const ShippingZones = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'ShippingZones'} optional>
        <Information>
          <p>
            When you created your Zonos dashboard, you were asked which countries you want to ship to. Your answer to this question created your first Shipping
            Zone in the Zonos dashboard. Please ensure all of the carrier rates you would like active are selected and saved within this zone.
          </p>
          <p>
            If you would like, you can configure more zones based on destination country that ship from different warehouses or use different methods to quote
            shipping. Otherwise, you can mark this step <u>Not Applicable.</u>
          </p>
          <ul style={{ textAlign: 'left', width: '70%', margin: 'auto' }}>
            Here are some examples of how they can be organized:
            <li>
              All countries, same shipping options - If you want to offer the same shipping options and service levels to all countries, you can make one zone
              and include all of the countries that you want to ship to, and then enable the service levels and/or custom shipping options you want to offer for
              the zone.
            </li>
            <li>
              Different groups of countries, different sets of rates - You can divide the world into different zones with different shipment pricing and options
              depending on which zone you are in. For example, you could add all EU countries to a zone called “EU” and offer live carrier rates to that zone
              via a carrier account connection, and create a second zone containing all South American countries and offer free shipping to that zone.
            </li>
            <li>
              Single country, unique rates - It is possible for you to create a shipping zone with only one country and charge a unique rate for that country.
            </li>
          </ul>
          <p>More information here (with video walkthrough):</p>
          <button>
            <a target="_blank" rel="noreferrer" href="https://docs.zonos.com/support/create-shipping-zones">
              Zonos Shipping Zones
            </a>
          </button>
        </Information>
      </LargeCard>
    </>
  );
};
