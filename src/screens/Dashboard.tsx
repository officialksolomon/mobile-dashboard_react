import React, { useEffect, useState } from 'react';
import { FaBeer, FaPhone, FaSpotify } from 'react-icons/fa';
import Box from '../components/Box';
import Header from '../components/Header';
import IconBox from '../components/IconBox';
import Actions from '../components/Actions';
import SpendingList from '../components/SpendingList';
import Avatar from '../components/Avatar';
import dp from '../assets/images/dp.jpg';
import Hero from '../components/Hero';
import Loading from '../components/Loading';

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeIrID = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timeIrID);
    };
  }, []);

  return (
    <>
      <Box boxStyle={{ padding: 0, margin: 0 }}>
        {loading && <Loading />}
        <Header
          title="DashBoard"
          titleSize={30}
          headerRight={<Avatar image={dp} />}
        />
        <Box
          boxStyle={{
            backgroundColor: 'white',
            border: 'none',
            borderRadius: 0,
            opacity: loading ? 0.4 : 1
          }}
        >
          <Hero />
          <SpendingList />
          <Actions />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
