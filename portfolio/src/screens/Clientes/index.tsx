import Layout from "../../shared/components/Layout";
import dti from "../../img/dti.jpg";
import telemont from "../../img/telemont.png";
import suppo7 from "../../img/suppo7.jpg";
import ImageWithText from "../Projetos/components/ImageWithText";
import { Container } from "@mui/material";

function Clientes() {
  return (
    <Layout>
      <div className="bg-neutral-400 py-6">
        <Container>
          <ul>
            <ImageWithText text="dti Digital:" image={dti} />
            <ImageWithText text="Telemont:" image={telemont} />
            <ImageWithText text="Suppo7:" image={suppo7} />
          </ul>
        </Container>
      </div>
    </Layout>
  );
}

export default Clientes;
