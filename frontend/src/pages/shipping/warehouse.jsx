import { LargeCard } from '../../components/large-card';
import { useHome } from '../../hooks/use-home';
import { Information } from '../../styles/global';

const title = 'Warehouse';
const description = 'Second, add your warehouse locations by clicking Create warehouse.';
const nextPage = 'shipping-zones';

export const Warehouse = () => {
  useHome(false);
  return (
    <LargeCard title={title} description={description} nextPage={nextPage} step={5} optional>
      <Information>
        <p>
          <i>
            <b>If your products ship from an address other than the one set in your Zonos General settings,</b>
          </i>
          you will need to configure a warehouse. Otherwise, you may mark this step <u>Not Applicable.</u>
        </p>
        <ol style={{ width: '70%', margin: 'auto', textAlign: 'left' }}>
          <li>Log in to Dashboard.</li>
          <li>Go to Settings on the left sidebar.</li>
          <li>Select Shipping rates -{'>'} Warehouses.</li>
          <li>Click Create warehouse.</li>
          <li>A popup will appear with a form that, when filled out, will create your new warehouse location.</li>
          <li>Give your warehouse a recognizable Name.</li>
          <li>Your customers will not see this; it is only for you to distinguish between your warehouses.</li>
          <li>Add the Phone number for the warehouse.</li>
          <li>Enter an Email address for the warehouse.</li>
          <li>Select the Country where your warehouse is located.</li>
          <li>Enter the fields for the address of your warehouse. Remember, it is important that this is the address that your items ship from.</li>
          <li>Click Save.</li>
        </ol>
      </Information>
    </LargeCard>
  );
};
