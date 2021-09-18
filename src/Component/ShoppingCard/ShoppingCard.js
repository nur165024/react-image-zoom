/* eslint-disable array-callback-return */
import { Badge, ButtonGroup, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCard = () => {
  // localstorage
  const cartItem = JSON.parse(localStorage.getItem("cart"));

  // react state
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState(cartItem || []);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((data) =>
      setProducts(data.data)
    );
  }, []);

  const handleClickAddCard = (data, id) => {
    const exist = card.find((x) => x.id === id);

    if (exist) {
      const cartAllData = card.map((x) =>
        x.id === id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCard(cartAllData);
    } else {
      const cartItem = {
        id: data.id,
        title: data.title,
        category: data.category,
        image: data.image,
        price: data.price,
        qty: 1,
      };
      setCard([...card, cartItem]);
    }
  };

  const handleClickIncreage = (id, type) => {
    const exist = card.find((x) => x.id === id);
    if (exist && type === "inc") {
      const cartAllData = card.map((x) =>
        x.id === id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCard(cartAllData);
    } else {
      const cartAllData = card.map((x) =>
        x.id === id ? { ...exist, qty: exist.qty === 1 ? 1 : exist.qty - 1 } : x
      );
      setCard(cartAllData);
    }
  };

  const handleClickRemove = (id) => {
    const getRemoveItem = card.filter((x) => x.id !== id);
    setCard(getRemoveItem);
    console.log(getRemoveItem);
  };
  localStorage.setItem("cart", JSON.stringify(card));

  return (
    <section>
      <div className="container">
        {/* breadcumb */}
        <div className="row">
          <div className="col">
            <nav>
              <ul>
                <li>
                  <Link to="/">Back</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* shopping list */}
        <div className="row">
          <div className="col-4">
            <IconButton onClick={() => setShow(!show)} variant="contained">
              <Badge badgeContent={cartItem.length || 0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>

        {/* product list */}
        <div className="row">
          {products.length === 0 ? (
            <CircularProgress />
          ) : (
            products.map((data, index) => (
              <div className="col-4 my-3" key={index}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 140 }}
                      image={data.image}
                      title={data.category}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        component="h6"
                        gutterBottom
                      >
                        Category : {data.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        {data.description}
                      </Typography>
                      <Typography color="secondary" component="span">
                        price: ${data.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button
                      startIcon={<LocalMallIcon />}
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleClickAddCard(data, data.id)}
                    >
                      Add To card
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))
          )}
        </div>

        {/*  card items list */}
        <div className={`shopppingCartList ${show ? "showSideBar" : " "}`}>
          <Button
            onClick={() => setShow(!show)}
            variant="contained"
            size="small"
          >
            <CloseIcon />
          </Button>

          <div className="row my-3 mx-2">
            {card.map((x) => (
              <div key={x.id} className="col-12 mb-2">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src={x.image} alt="..." width="80" height="70" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6>{x.title}</h6>
                    <p>
                      ${x.price} X {x.qty} = ${x.price * x.qty}
                    </p>
                    <ButtonGroup>
                      <Button
                        size="small"
                        onClick={() => handleClickIncreage(x.id, "dec")}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Button
                        size="small"
                        onClick={() => handleClickIncreage(x.id, "inc")}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                      <Button
                        onClick={() => handleClickRemove(x.id)}
                        size="small"
                      >
                        <CloseIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCard;
