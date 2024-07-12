import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import rasim from "././../../../assets/Корзина.svg";
import rasim12 from "././../../../assets/Редактировать.svg";
import axios from "axios"; 
import "../Mange-Products/Admini.scss";
import "../../Admin/Admin.css";
import { useEffect, useState } from "react";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const [albom, setAlbom] = useState([]);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [dale, setDale] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3300/products")
      .then((response) => {
        setProducts(response.data);
        setDale((p) => !p);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dale]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3300/products/${id}`)
      .then(() => {
        confirm("Malumot uchirilsinmi");
        setProducts(products.filter((product) => product.id !== id));
        setDale((p) => !p);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3300/products")
      .then((res) => {
        setAlbom(res?.data);
        setDale((p) => !p);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dale]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3300/products/${edit.id}`, edit)
      .then(() => {
        setProducts(products.map((product) => (product.id === edit.id ? edit : product)));
        setEdit(null);
        setDale((p) => !p);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const card = albom
    ?.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
    .map((el) => {
      return (
        <div className="form card" key={el.id}>
          <table className="styled-table">
            <thead>
              <tr className="table">
                <td className="tade">
                  <p className="pay">{el.name}</p>
                </td>
                <td className="tade">
                  <p className="pay">{el.code}</p>
                </td>
                <td className="tade">
                  <p className="pay">{el.brand}</p>
                </td>
                <td className="tade">
                  <p className="pay">{el.price}</p>
                </td>
                <td className="tade">
                  <p className="pay">{el.priceInSale}</p>
                </td>
                <td onClick={() => setEdit(el)}>
                  <img className="edit" src={rasim12} alt="" />
                </td>
                <td>
                  <img
                    onClick={() => deleteProduct(el.id)}
                    className="delete"
                    src={rasim}
                    alt=""
                  />
                </td>
              </tr>
            </thead>
          </table>
        </div>
      );
    });

  return (
    <>
      <div className="productPage">
        <div className="tettle">
          <p className="tavarl">Товары</p>
          <div className="linkl">
            <Link className="pruductt">
              <p className="naya">Главная</p>
            </Link>
            /
            <Link onClick={() => navigate(1)}>
              <p className="naya">Товары</p>
            </Link>
            /
          </div>
        </div>
      </div>
      <div className="Editt">
        {edit ? (
          <form className="Edit1" action="" onSubmit={handleSubmit}>
            <div>
              <p>Наименование</p>
              <input
                className="inputetim1"
                type="text"
                value={edit.name}
                onChange={(e) => setEdit((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="inpiut_edit">
              <p>Артикул</p>
              <input
                className="inputetim1"
                type="text"
                value={edit.code}
                onChange={(e) => setEdit((prev) => ({ ...prev, code: e.target.value }))}
              />
            </div>
            <div className="inpiut_edit1">
              <p>Бренд</p>
              <input
                className="inputetim1"
                type="text"
                value={edit.brand}
                onChange={(e) => setEdit((prev) => ({ ...prev, brand: e.target.value }))}
              />
            </div>
            <div className="inpiut_edit2">
              <p>Цена</p>
              <input
                className="inputetim1"
                type="text"
                value={edit.price}
                onChange={(e) => setEdit((prev) => ({ ...prev, price: e.target.value }))}
              />
            </div>
            <div className="inpiut_edit3">
              <p>Цена со скидкой</p>
              <input
                className="inputetim1"
                type="text"
                value={edit.priceInSale}
                onChange={(e) => setEdit((prev) => ({ ...prev, priceInSale: e.target.value }))}
              />
            </div>
            <button className="submitbtn">submit</button>
          </form>
        ) : (
          <></>
        )}
      </div>
      <div className="APIdata">
        <div className="commit_search">
          <h4>Все товары (5)</h4>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Поиск"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              className="input"
            />
            <hr />
            <div></div>
          </div>
        </div>
        <div className="dataa">
          <table>
            <thead>
              <tr>
                <td className="taded">Наименование</td>
                <td className="taded">Артикул</td>
                <td className="taded">Бренд</td>
                <td className="taded">Цена</td>
                <td className="taded">Цена со скидкой</td>
              </tr>
            </thead>
          </table>
          {card}
        </div>
      </div>
      <div className="foterr">
        <Link to="/MangeCategory">
          <button className="nove">+ Новый товар</button>
        </Link>
        <p>© Anymarket 2024</p>
      </div>
    </>
  );
};

export default ManageProducts;
