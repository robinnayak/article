import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
//

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Article.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Article(props) {
  const classes = useStyles();
  const history = useHistory();
  const loaduser = () => {
    history.push("/Add/Delete");
    history.push("/");
  };
  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:8000/api/${id}/`);
    loaduser();
  };
  const [del, setDel] = useState([0]);

  return (
    <div className="items">
      <Card
        className={classes.root}
        style={{
          boxShadow: "3px 3px 5px 6px #ccc",
          margin: "2rem",
          minWidth: "250px",
          maxWidth: "250px",
          minHeight: "150px",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography className="read" variant="body2" component="p">
            {props.content}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/detail/${props.articleID}`}
            className="btn btn-outline-primary mx-1"
          >
            View
          </Link>
          <Link
            to={`/Edit/${props.articleID}`}
            className="btn btn-outline-warning mx-1"
          >
            Edit
          </Link>
          <Link
            onClick={() => {
              deleteuser(props.articleID);
              setDel(del + 1);
            }}
            className="btn btn-outline-danger mx-1"
          >
            Delete
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
