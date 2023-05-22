// import React, { useState } from "react";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";

// function RecipeItem({ getRecipe, addFavourite, removeFavourite }) {
//   console.log(getRecipe.data);

//   const [isFavourite, setIsFavourite] = useState(false);

//   const toggleFavourite = () => {
//     if (isFavourite) {
//       removeFavourite(getRecipe.data);
//     } else {
//       addFavourite(getRecipe.data);
//     }
//     setIsFavourite(!isFavourite);
//   };

//   return (
//     <div>
//       <div className="card">
//         <img src={getRecipe.data.strMealThumb} alt="" />
//         <div className="info">
//           <h2>{getRecipe.data.strMeal}</h2>
//           <p>{getRecipe.data.strCategory}</p>
//           <p>{getRecipe.data.strArea} Food</p>
//           <p>{getRecipe.data.strIngredient}</p>
//           <p>{getRecipe.data.strInstructions}</p>
//         </div>
//         <IconButton onClick={toggleFavourite}>
//           <FavoriteIcon color={isFavourite ? "secondary" : "primary"} />
//         </IconButton>
//       </div>
//     </div>
//   );
// }

// export default RecipeItem;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  getRecipe,
  addFavourite,
  removeFavourite,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(getRecipe.data);
    } else {
      addFavourite(getRecipe.data);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {getRecipe.data.strMeal[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={getRecipe.data.strMeal}
        subheader={getRecipe.data.strCategory}
      />
      <CardMedia
        component="img"
        height="194"
        image={getRecipe.data.strMealThumb}
        alt={getRecipe.data.strMeal}
        sx={{
          margin: "15px",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {getRecipe.data.strIngredients}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={toggleFavourite} aria-label="add to favorites">
          <FavoriteIcon color={isFavourite ? "secondary" : "primary"} />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{getRecipe.data.strInstructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
