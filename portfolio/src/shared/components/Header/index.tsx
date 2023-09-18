import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import NavItem from "./components/NavItem";
import { RouteList } from "../../routing/routeList";
import { Container } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate(RouteList.curriculo);
  };
  return (
    <header className="bg-neutral-300">
      <Container>
        <div className="flex justify-between my-0 items-center py-5">
          <AccountCircleIcon
            sx={{ fontSize: 80 }}
            className="text-gray-800"
            onClick={onClickLogo}
          />
          <nav>
            <ul className="[&>*:last-child]:mr-0">
              <NavItem link={RouteList.curriculo} name="Quem sou eu" />
              <NavItem link={RouteList.projetos} name="Projetos" />
              <NavItem link={RouteList.clientes} name="Clientes" />
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
