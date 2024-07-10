import { Link, useNavigate } from 'react-router-dom'
import '../Mange-Products/Admini.scss'


const MangeCategory = () => {
    const navigate = useNavigate()
  return (
    <div>
    <div className='pruductpage'>
      <div className='tettle'>

<p className='tavarl'>Новый товар
</p>
<div className='linkl'>
<Link className='pruductt' onClick={() =>navigate(-1)} ><p className='naya'>Главная</p> </Link>
/
<Link><p className='naya'>Товары</p></Link>
/
<p>Новый товар</p>
</div>
</div>
    </div>
    </div>
  )
}

export default MangeCategory