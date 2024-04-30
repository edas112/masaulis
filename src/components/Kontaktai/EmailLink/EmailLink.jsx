import { useState } from 'react';
import emailjs from 'emailjs-com';
import './emailLink.scss';

function EmailLink() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s2xz8o2',
        'template_9zq1vxr',
        e.target,
        'ZdQ0RPh5ciyCtQZwy'
      )
      .then(
        (result) => {
          if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
          ) {
            alert('Visi laukai turi būti užpildyti!');
            return;
          }
          console.log(result.text);
          const { name, email, phone, message } = e.target.elements;
          name.value = '';
          email.value = '';
          phone.value = '';
          message.value = '';
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(formData);
    // isvalyti forma
  };

  return (
    <div className="email-link container">
      <h1>Susisiekite</h1>
      <form className="form" onSubmit={handleSubmit}>
        Vardas
        <input
          type="text"
          name="name"
          placeholder="Vardas"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        El. paštas
        <input
          type="email"
          name="email"
          placeholder="El. paštas"
          value={formData.email}
          onChange={handleChange}
          required
        />
        Telefono numeris
        <input
          type="tel"
          name="phone"
          placeholder="Telefono numeris"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        Jūsų pranešimas
        <textarea
          name="message"
          placeholder="Jūsų pranešimas"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Siųsti</button>
      </form>
    </div>
  );
}

export default EmailLink;
