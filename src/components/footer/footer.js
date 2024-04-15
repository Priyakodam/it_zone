import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
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
        <p style={styles.text}>© 2024 IT ZONE</p>
      </div>
      
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  column: {
    flex: 1,
  },
  iconContainer: {
    marginBottom: '5px',
    marginTop: '10px',
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
};

export default Footer;
