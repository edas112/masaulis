const EmailLink = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return <button onClick={handleClick}>Parašyti el. laišką</button>;
};

export default EmailLink;
