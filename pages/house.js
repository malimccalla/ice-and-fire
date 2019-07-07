import axios from 'axios';

import { apiEndpoint } from '../lib/constants';
import { Page } from '../components';

const House = ({ house }) => {
  if (!house) return null;

  return (
    <Page>
      <h1>{house.name}</h1>
      <h3>{house.region}</h3>
      <h3>{house.coatOfArms}</h3>
    </Page>
  );
};

House.getInitialProps = async ctx => {
  if (!ctx.query || !ctx.query.id) {
    return { house: null };
  }

  const id = ctx.query.id;

  try {
    const res = await axios.get(`${apiEndpoint}/houses/${id}`);
    const house = res.data;

    return { house };
  } catch (error) {
    return { house: null };
  }
};

export default House;
