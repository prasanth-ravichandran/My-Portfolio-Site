import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function Project(props) {
  return (
    <div
      className="project__container col-sm-12 col-md-12 col-lg-4 col-xl-6 col-xxl-4"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div
        className="content__project"
        style={{
          border: "none",
          borderRadius: "10px",
          backgroundColor: " rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.card.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-uppercase"
              >
                {props.card.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                className="text-uppercase"
              >
                {props.card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href={props.card.weblink}>
              <Button size="medium">Click To View</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default Project;
