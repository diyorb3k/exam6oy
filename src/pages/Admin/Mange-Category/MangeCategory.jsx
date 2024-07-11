import { Link, useNavigate } from "react-router-dom";
import "../Mange-Products/Admini.scss";

const MangeCategory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pruductpage">
        <div className="tettle">
          <p className="tavarl">Новый товар</p>
          <div className="linkl">
            <Link className="pruductt" onClick={() => navigate(-1)}>
              <p className="naya">Главная</p>{" "}
            </Link>
            /
            <Link>
              <p className="naya">Товары</p>
            </Link>
            /<p>Новый товар</p>
          </div>
        </div>
        <div className="input_grup">
          <button>Основные</button>
          <div className="inputitem">
            <div className="etiminput">
              <p>Название *</p>
              <form action="">
                <input className="inputetim1" type="text" />
              </form>
            </div>
            <div className="inputt2">
              <form action="">
                <div>
                  <p>Бренд *</p>
                  <input className="input11" type="text" />
                </div>
                <div>
                  <p>Артикул производителя *</p>
                  <input className="input2" type="text" />
                </div>
              </form>
            </div>
            <p className="lorem">Описание *</p>
          </div>
         <div className="texaria">
          <textarea name="text" id="w"></textarea>
         </div>
         <div className="btnetim1">
          <form className="foriminput" action="">
          <div>
          <p>Цена</p>
          <input type="text" />
          </div>
        <div>
        <p>Цена со скидкой</p>
        <input type="text" />
        </div>
          </form>

         </div>
        </div>
       <div className="foter_add">
<div className="saxranit">
  <button className="save">Сохранить</button>
  <button className="otmin">Отмена</button>
</div>
       </div>
      </div>
    </div>
  );
};

export default MangeCategory;
