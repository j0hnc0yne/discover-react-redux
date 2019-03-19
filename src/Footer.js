import React from 'react';

const Footer = (props) => {
  const {company} = props;

  return (
    <footer>
      <p>Copyright &copy; 2019, {company}</p>
    </footer>
  );
};

export default Footer;
