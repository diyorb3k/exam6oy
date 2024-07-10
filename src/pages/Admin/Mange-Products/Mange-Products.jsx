import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import rasim from "././../../../assets/Корзина.svg";
import rasim12 from "././../../../assets/Редактировать.svg";
import axios from "axios"; // Axios kutubxonasini import qilish
// import './Admin.scss';
import "../Mange-Products/Admini.scss";
import "../../Admin/Admin.css";
import { useEffect, useState } from "react";
const ManageProducts = () => {
  const navigate = useNavigate();

  const [albom, setAlbom] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setAlbom(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const card = albom
    ?.filter((user) => user.name.toLowerCase().includes(query.toLowerCase())) // 'body'ni 'name'ga o'zgartirdim
    .map((el) => {
      return (
        <div className="form card" key={el.id}>
          <table className="styled-table">
            <thead>
              <tr className="table">
                <td className="tade">
                  {" "}
                  <p className="pay">{el.name}</p>
                </td>
                <td className="tade">
                  {" "}
                  <p className="pay">{el.code}</p>
                </td>
                <td className="tade">
                  {" "}
                  <p className="pay">{el.brand}</p>
                </td>
                <td className="tade">
                  {" "}
                  <p className="pay">{el.price}</p>
                </td>
                <td className="tade">
                  {" "}
                  <p className="pay">{el.priceInSale}</p>
                </td>
                <td>
                  <img className="edit" src={rasim12} alt="" />
                </td>
                <td>
                  <img className="delete" src={rasim} alt="" />
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
              <p className="naya">Главная</p>{" "}
            </Link>
            /
            <Link onClick={() => navigate(1)}>
              <p className="naya">Товары</p>
            </Link>
            /
          </div>
        </div>
      </div>
      <div className="APIdata">
        <div className="commit_search">
          <h4>Все товары (5)</h4>
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Поиск"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              class="input"
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
    </>
  );
};

export default ManageProducts;
