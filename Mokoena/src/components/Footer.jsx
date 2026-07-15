
// const year = new Date().getFullYear(); this will update the current year, every year automatically {year} will hold current year
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Mokoena TT Holdings. All rights reserved.</p>
    </footer>
  );
}

export default Footer;