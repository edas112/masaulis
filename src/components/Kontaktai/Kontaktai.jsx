import EmailLink from './EmailLink/EmailLink';

function Kontaktai() {
  return (
    <div className="galerija container">
      <h1>Kontaktai</h1>
      <div>
        <h1>Sveiki!</h1>
        <p>Spauskite mygtuką norėdami parašyti man laišką:</p>
        <EmailLink email="mbmasaulis@gmail.com" />
      </div>
    </div>
  );
}

export default Kontaktai;
