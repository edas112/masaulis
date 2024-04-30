import './kortele.scss';
function Kortele({ title, description, img }) {
  return (
    <div className="kortele container">
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={img} />
    </div>
  );
}

export default Kortele;
