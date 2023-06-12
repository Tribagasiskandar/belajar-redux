import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, productSelectors,deleteProduct } from "../features/ProductSlice";
import { Link } from "react-router-dom";
const ShowProduct = () => {
  const dispacth = useDispatch();
  const product = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispacth(getProduct());
  }, [dispacth]);

  return (
    <div className="box mt-5">
      <Link to="add" className="button is-success">Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`edit/${product.id}`} className="button is-info is-small">Edit</Link>
              </td>
              <td>
                <button onClick={()=> dispacth(deleteProduct(product.id))} className="button is-danger is-small">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
