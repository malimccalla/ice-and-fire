import axios from 'axios';

import { apiEndpoint } from '../lib/constants';

const House = ({ house }) => {
  if (!house) return null;

  return <div>{house.name}</div>;
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
