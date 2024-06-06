import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function FoodCard({ data }) {
  return (
    <Card sx={{ position: "relative",maxWidth: 245 ,height: 450}} >
      

      <CardContent>
        <Typography span color="text.secondary" gutterBottom>
        <Box  style={{ width: "100%", fontWeight: "bold" }}>
            <img style={{ width: "100%" }} src={data.strMealThumb} />
          </Box>
          
        </Typography>
        
        <Typography variant="h5" component="div">
          {data.strMeal}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
          {data.strCategory}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions  sx={{ justifyContent: "center",position: "absolute", bottom: 0, width: "100%" }} TextAlign="center">

        <Button  variant="contained" size="medium">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
