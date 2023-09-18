import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import FooterTextItem from "./components/FooterTextItem";
import "./index.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

function Footer() {
  return (
    <footer className="bg-image">
      <Container>
        <div className="flex justify-between items-center text-center text-base py-10 text-white">
          <ImportantDevicesIcon sx={{ fontSize: 80 }} />
          <ul>
            <FooterTextItem text="Nome: Gustavo Rodrigues" />
            <FooterTextItem text="Curso: Programação Web" />
            <ul className="flex justify-around">
              <li>
                <Link to="https://wa.me/5531999999999">
                  <WhatsAppIcon sx={{ fontSize: 40 }} />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/gustavorodrigues13/">
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/gustavorsx">
                  <GitHubIcon sx={{ fontSize: 40 }} />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
