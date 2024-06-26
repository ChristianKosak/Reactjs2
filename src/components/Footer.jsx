import React from 'react';

const Footer = () => {
  return (
      <footer>
          <div style={{ padding: '20px', backgroundColor: '#808080', textAlign: 'center' }}>
              <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
              <p>Christian W Kosak</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ display: 'inline', margin: '0 10px' }}>
                      <a href="/about" style={{ textDecoration: 'none', color: '#000' }}>Sobre Nosotros</a>
                  </li>
                  <li style={{ display: 'inline', margin: '0 10px' }}>
                      <a href="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contacto</a>
                  </li>
                  <li style={{ display: 'inline', margin: '0 10px' }}>
                      <a href="/privacy" style={{ textDecoration: 'none', color: '#000' }}>Política de Privacidad</a>
                  </li>
              </ul>
              <div style={{ marginTop: '10px' }}>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                      <img src="https://icons.iconarchive.com/icons/hopstarter/rounded-square/256/Social-Network-Facebook-icon.png" alt="Facebook" style={{ width: '24px' }} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                      <img src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000" alt="Twitter" style={{ width: '24px' }} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                      <img src="https://img.icons8.com/?size=100&id=119026&format=png&color=000000" alt="Instagram" style={{ width: '24px' }} />
                  </a>
              </div>
          </div>
      </footer>
  );
}

export default Footer