import "./NotFound.scss";
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="wrapper">
    <h1 className="error container">ERROR 404 PAGE NOT FOUND</h1>
    <Link to='/' className="error__btn">PRESS TO HOME</Link>
    </div>
  );
}

export { NotFound };
