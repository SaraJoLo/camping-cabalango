import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './btnback.scss';

const BtnBack = () => {
  const navigate = useNavigate();
  return (
    <button className="btnback" onClick={() => navigate(-1)}>
      <FaArrowLeft />
      <p>Volver</p>
    </button>
  );
};

export default BtnBack;
