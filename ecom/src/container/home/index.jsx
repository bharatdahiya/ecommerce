import Products from '../../products.json';
import {
  ProductsContainer,
  Header,
  MainContainer,
  Select,
} from './index.styled';
import Card from '../../common/card/Card';
import { useState, useEffect } from 'react';
const Home = () => {
  const [size, setSize] = useState('');
  const [products, setProducts] = useState();

  const selectSizes = [
    { label: 'Extra Small', value: 'XS' },
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' },
    { label: 'Extra Large', value: 'XL' },
  ];

  useEffect(() => {
    setProducts(Products);
  }, []);

  useEffect(() => {
    console.log(size);
    setProducts(
      Products.filter((item) => {
        if (item.size.includes(size)) {
          return { ...item };
        } else if (size === '') {
          return { ...item };
        }
      })
    );
  }, [size]);

  console.log(products);
  return (
    <MainContainer>
      <Header>
        <>Women's Tops</>
        <>
          <Select
            name='sizes'
            placeholder='Filter by size'
            onChange={(e) => setSize(e.target.value)}
            value={size}
          >
            <option value=''>Filter by size</option>
            {selectSizes.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Select>
        </>
      </Header>
      <ProductsContainer>
        {products?.map((item) => {
          return <Card key={item.index} {...item} />;
        })}
      </ProductsContainer>
    </MainContainer>
  );
};

export default Home;
