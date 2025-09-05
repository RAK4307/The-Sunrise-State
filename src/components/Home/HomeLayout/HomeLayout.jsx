import React from 'react';
import Home from '../homepage/Home';
import Middle from '../homemiddle/Middle';
import Politics from '../poltics/Poltics';
import Science from '../science/Science';
import Culture from '../culture/Culture';
import Real from '../real/Real';
import Health from '../health/Health';

const HomePageLayout = () => {
  return (
    <>
      <Home />
      <Middle />
      <Politics />
      <Science />
      <Culture />
      <Real />
      <Health />
    </>
  );
};

export default HomePageLayout;
