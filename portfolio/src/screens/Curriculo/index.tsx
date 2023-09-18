import Header from "../../shared/components/Header";
import Layout from "../../shared/components/Layout";
import curriculum from "../../img/cv.jpg";
import { Container } from "@mui/material";

function Curriculo() {
  return (
    <Layout>
      <div className="bg-neutral-400">
        <Container>
          <img src={curriculum} alt="curriculo" />
        </Container>
      </div>
    </Layout>
  );
}

export default Curriculo;
