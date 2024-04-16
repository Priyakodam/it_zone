import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='container-fluid mt-5 bg-dark'>
    <footer style={styles.footer}>
      <div style={styles.column}>
        <p style={styles.workingTime}>WORKING TIME</p>
        <p style={styles.workingTime}>Mon - Sat: 09:00 AM - 06:00 PM</p>
      </div>
      <div style={styles.column}>
        <div style={styles.iconContainer}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          </a>
        </div>
        <p style={styles.text}>© 2024 IT-ZONE</p>
      </div>
      <div style={{ ...styles.column, ...styles.fullWidth }}>
        <hr/>
        <div style={{...styles.row}}>
        <p style={styles.footerText}>
        © 2024 IT-ZONE
        </p>
        <p style={styles.footerText}>
         Privacy Notice
        </p>
        <p style={styles.footerText}>
         Change cookie settings
        </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

const styles = {

  footer: {
    backgroundColor: 'dark',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    // left: 0,
    bottom: 0,
    width: '100%',
    // height: '30vh',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '20px',
    flexWrap: 'wrap', // Allow flex items to wrap
  },
  column: {
    flex: '1 1 50%', // Each column takes 50% width
    textAlign: 'center',
    // marginBottom: '10px',
    paddingTop:"-50px"
  },
  iconContainer: {
    paddingTop: '10px',
    paddingLeft:'20px'
  },
  icon: {
    fontSize: '24px',
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
  workingTime: {
    margin: '10px 0 0',
    fontSize: '14px',
  },
  footerText: {
    fontSize: '12px',
    marginTop: '10px',
  },
  fullWidth: {
    flexBasis: '100%', // Take full width when wrapped
  },
  row:{
    display:"flex",
    justifyContent: 'space-around',
    // flexWrap: 'wrap', 
  }
};


export default Footer;
