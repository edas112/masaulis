function Kortele({ title, description, img }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={img} />
    </div>
  );
}

export default Kortele;
