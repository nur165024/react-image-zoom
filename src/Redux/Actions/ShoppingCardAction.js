export const addToCard = (productData, qty) => async (dispatch, getState) => {
  console.log(productData);
  dispatch({
    id: productData.id,
    category: productData.category,
    title: productData.title,
    price: productData.price,
    image: productData.image,
    qty: qty,
  });
};
