import { Information } from '../../styles/global';
import { LargeCard } from '../../components/large-card';
import { Navbar } from '../../components/navbar';

const title = 'Carrier Account';
const description = '';
const nextPage = 'warehouse';

export const CarrierAccount = () => {
  return (
    <>
      <Navbar />
      <LargeCard title={title} description={description} nextPage={nextPage} step={'CarrierAccount'}>
        <Information>
          <p>
            If you ship with DHL, UPS, USPS, FedEx, or APC, you have the option of connecting your carrier account directly to Zonos to pull your actual rates
            in real time.
          </p>
          <p>
            Here is our help page on connecting your carrier accounts to your Zonos Dashboard. <br />
            <button>
              <a
                rel="noreferrer"
                href="https://docs.zonos.com/support/carrier-account-connection/#learn-how-to-connect-your-carrier-accounts-to-your-zonos-account-in-order-to-get-live-carrier-rates."
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Zonos Carrier Accounts
              </a>
            </button>
          </p>
          <p>Here is a video showing how to get to the correct screen and input the credentials</p>
          <iframe title="Carrier Account Video" src="https://www.loom.com/embed/fa05a70779fd49dbadb1d1b1f1542c49" frameBorder="0" allowFullScreen></iframe>
          <p>
            *This option requires accurate weight data for the shipment rating we pull from your carrier to match with what you will be charged for the
            shipment. If you elect to use this method of quoting, please ensure the weight data you have listed in your Shopify product pages is as complete and
            accurate as possible.*
          </p>
        </Information>
      </LargeCard>
    </>
  );
};
