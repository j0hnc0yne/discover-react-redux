import React from 'react';

class FooterClass extends React.Component {
  render() {
    const { company } = this.props;

    return (
      <footer>
        <p><strong>Copyright</strong> &copy; 2019, {company}</p>
      </footer>
    );
  }
}

export default FooterClass;
