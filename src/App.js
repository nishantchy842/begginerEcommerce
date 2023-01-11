import React from 'react';

import Product from './Container/Products';
const App=()=> {
  const originalProductList = [
    {name: 'Cooker', price:30,image:'https://m.media-amazon.com/images/I/51XzoKlhEBL.jpg', backgroundColor:'orange', isLiked: false, cartCount:0},
    {name: 'Ball', price:31,image:'https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png', backgroundColor:'grey', isLiked:false,cartCount:0},
    {name: 'Keybord', price:3000,image:'https://www.pngkey.com/png/full/429-4290320_redragon-k579-mechanical-gaming-keyboard-wired-rgb-iball.png', backgroundColor:'pink', isLiked: false,cartCount:0},
    {name: 'HeadPhone', price:3500,image:'https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856', backgroundColor:'orange', isLiked: false,cartCount:0}
  ]
  return (
    <>
        <Product myproduct={originalProductList}/>
    </>
  );
}
export default App;

