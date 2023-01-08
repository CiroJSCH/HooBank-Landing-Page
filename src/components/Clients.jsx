// Static data
import { clients } from '../constants';

// Styles
import styles from '../styles';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img
            src={client.logo}
            alt='Client'
            className='sm:w-[192px] w-[100px] object-contain'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
