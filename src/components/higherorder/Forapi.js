import { actionofsetdata } from "../../storeofRedux/ItemData";

const actioncreatfun = (pr) => {
  var meth;
  if (pr == "women's clothing") {
    meth = actionofsetdata.setWomenclothing;
  } else if (pr == "jewelery") {
    meth = actionofsetdata.setjewelery;
  } else {
  }
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products/category/${pr}`)
      .then((res) => res.json())
      .then((res) => dispatch(meth([...res])));
  };
};

export default actioncreatfun;
