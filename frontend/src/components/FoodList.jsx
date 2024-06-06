import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FoodCard from './FoodCard';
import { TextField, Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function FoodList() {
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function getProducts() {
      try {

        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        console.log(res);
       const data = await res.json();
        console.log(data);
        setProducts(data.meals);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  async function onSearchSubmit(e) {
    e.preventDefault();
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const data=await res.json();
    setProducts(data.meals);
  }

  return (
    <>
     <Box  sx={{ width: 300,margin:"auto",display:"flex"}}>
        <TextField onChange={onSearchChange} id="outlined-basic" label="Search" variant="outlined" />
        <Button onClick={onSearchSubmit} sx={{marginLeft:"10px"}} size='small' variant ="contained">Search</Button>
        </Box>
    <Box sx={{ flexGrow: 1, width: "80%", margin:"auto",marginTop: "5%", }}>
      <Grid container columns={{ xs: 1, sm: 2, md: 3 }} rowSpacing={3} spacing={{ xs: 2, md: 3 }}>
        {products?.map((product) => (
          <Grid item xs={2} sm={1} md={1}>
          <FoodCard item key={product.idMeal} data={product}/>
          </Grid>
        ))}
       
      </Grid>
    </Box>
    </>
  );
}