import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
<div className='app__header app__wrapper section__padding' id="home">
  <div className='app__wrapper_info'>
    <SubHeading title="chase the new flavour" />
    <h1 className='app__header-h1' >
      The key to fine dining
    </h1>
    <p className='p__opensans' stye={{margin: '2rem 0'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic quos commodi est necessitatibus dolor, quod assumenda alias, sint incidunt repellendus fugiat iusto animi sit? Sint deserunt ullam beatae libero.
    </p>
    <button className='custom__button'>Explore Menu</button>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.welcome} alt="Haeder img">

    </img>
  </div>


</div>
);

export default Header;
