import {
  CardContainer,
  Image,
  NormalDiv,
  TypeContainer,
  Font,
} from './Card.styled';

import Product1 from '../../assets/product-1.jpg';
import Product2 from '../../assets/product-2.jpg';
import Product3 from '../../assets/product-3.jpg';
import Product4 from '../../assets/product-4.jpg';
import Product5 from '../../assets/product-5.jpg';
import Product6 from '../../assets/product-6.jpg';
import Product7 from '../../assets/product-7.jpg';
import Product8 from '../../assets/product-8.jpg';
const Card = (props) => {
  const { isSale, isExclusive, price, productImage, productName } = props;

  const productImg = (prodImage) => {
    switch (prodImage) {
      case 'product-1.jpg':
        return Product1;
      case 'product-2.jpg':
        return Product2;
      case 'product-3.jpg':
        return Product3;
      case 'product-4.jpg':
        return Product4;
      case 'product-5.jpg':
        return Product5;
      case 'product-6.jpg':
        return Product6;
      case 'product-7.jpg':
        return Product7;
      case 'product-8.jpg':
        return Product8;

      default:
        return '';
    }
  };
  return (
    <CardContainer>
      <Image src={productImg(productImage)} />
      <NormalDiv visibility={isSale || isExclusive ? 'visible' : 'hidden'}>
        {isSale && <TypeContainer background='red'> Sale</TypeContainer>}
        {isExclusive && (
          <TypeContainer background='green'>Exclusive</TypeContainer>
        )}
      </NormalDiv>
      <NormalDiv visibility='visible'>
        <Font>{productName}</Font>
        <Font fontSize='24px' fontWeight='600'>
          {price}
        </Font>
      </NormalDiv>
    </CardContainer>
  );
};

export default Card;
