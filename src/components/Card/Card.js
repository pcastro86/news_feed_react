import React, { Component } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: "100%"
  },
  media: {
    height: 140
  }
});
/* bayes_category_id: PropTypes.string,
category: PropTypes.string,
content_views_count: PropTypes.string,
date: PropTypes.number,
img_url: PropTypes.string,
news_id: PropTypes.number,
reactions_count: PropTypes.string,
source_id: PropTypes.number,
source_name: PropTypes.string,
title: PropTypes.string,
url: PropTypes.string, */

export default function CardNews({news}) {
  const classes = useStyles();
  const {title, img_url, source_name, date, url} = news

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img_url} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h6">{title}</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {source_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank">
            Ver más
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
