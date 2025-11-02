import React, { use } from 'react';
import Slider from '../Hero/Slider';
import TopRated from '../TopRated/TopRated';
import PlantCare from '../PlantCare/PlantCare';
import GreenExpert from '../GreenExpert/GreenExpert';
import PlantWeek from '../PlantWeek/PlantWeek';

const Home = ({ dataPromise }) => {
  const data = use(dataPromise);
  return (
    <div>
      <Slider key={data.plantId} data={data}></Slider>
      <TopRated key={data.plantId} data={data}></TopRated>
      <PlantCare key={data.plantId} data={data}></PlantCare>
      <GreenExpert></GreenExpert>
      <PlantWeek key={data.plantId} data={data}></PlantWeek>
    </div>
  );
};

export default Home;