import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  RiDeleteBin6Line,
} from 'react-icons/ri';
import Comparaison from './Comparaison.jsx';
import {
  ImageRelatedProduct,
} from '../lib/styledComponents';
import { getData } from '../../../lib';
import defaultImage from '../lib/images/noProductAvailable.png';

// what info do I need to use same component as product card
/*
{
  product: { productDetails, styles, meta },
  setProperty,
  property,
  idx,
}
*/

const ProductCardYourOutfit = ({
  outfitItem, outfitItems,
  setOutfitItems,
  idxOfItem,
}) => {
  const { isDarkMode } = useSelector((state) => state.productPage);
  let image = '';
  for (let i = 0; i < outfitItem.styles.length; i += 1) {
    if (outfitItem.styles[i]['default?'] === true) {
      image = outfitItem.styles[i].photos[0].thumbnail_url;
      break;
    }
  }
  if (!image) {
    image = defaultImage;
  }
  const deleteItem = () => {
    const copy = [...outfitItems];
    copy.splice(idxOfItem, 1);
    setOutfitItems(copy);
    localStorage.setItem('outfits', JSON.stringify([...copy]));
  };
  const cardStyle = {
    '--card-color': isDarkMode ? '#303233' : '#FBF9F9',
  };
  return (
    <div className="card" style={cardStyle}>
      <RiDeleteBin6Line type="button" className="removeButton" onClick={deleteItem} />
      <div>
        <ImageRelatedProduct src={image} alt={outfitItem.name} />
      </div>
      <div className="productInfo">
        <p className="productName">{outfitItem.name}</p>
        <p className="itemCategory">{outfitItem.category}</p>
        <p className="productPrice">
          $
          {outfitItem.styles[0].original_price}
        </p>
      </div>
    </div>
  );
};

export default ProductCardYourOutfit;