import axios from 'axios';
import Link from 'next/link';

import { apiEndpoint } from '../lib/constants';

const Index = ({ houses }) => {
  if (!houses) return null;

  return (
    <ul>
      {houses.map(house => {
        // For whatever reason the api does not return ids so we must get it from the url
        const id = house.url.split('/').pop();

        return (
          <li key={id}>
            <Link href={`/house?id=${id}`}>
              <span>{house.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Index.getInitialProps = async () => {
  try {
    const res = await axios.get(`${apiEndpoint}/houses`);
    const houses = res.data;

    return { houses };
  } catch (error) {
    return { houses: null };
  }
};

export default Index;
