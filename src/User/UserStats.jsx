import React from 'react';
import Head from '../Components/Helper/Head';
import useFetch from '../Hooks/useFetch';
import { STATS_GET } from '../Api';
import Loading from '../Components/Helper/Loading';
import Error from '../Components/Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  }
  return null;
};

export default UserStats;
