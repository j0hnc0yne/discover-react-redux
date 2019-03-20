import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {company} = props;

  return (
    <footer>
      <p>Copyright &copy; 2019, {company}</p>
    </footer>
  );
};

Footer.defaultProps = {
  company: 'Discover'
};

Footer.propTypes = {
  company: PropTypes.string
};

export default Footer;
