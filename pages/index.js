import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

import { apiEndpoint } from '../lib/constants';
import { Grid, Page, GridItem } from '../components';

const Index = ({ houses }) => {
  if (!houses) return null;

  return (
    <Page>
      <Grid>
        {houses.map(house => {
          // For whatever reason the api does not return ids so we must get it from the url
          const id = house.url.split('/').pop();

          return (
            <Link key={id} href={`/house?id=${id}`}>
              <GridItem>
                <h2>{house.name}</h2>
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </Page>
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
