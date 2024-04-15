import './kortele.scss';
function Kortele({ title, description, img }) {
  return (
    <div className="kortele container">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={img} />
      </div>
    </div>
  );
}

export default Kortele;
