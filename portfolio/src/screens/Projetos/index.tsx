import Layout from "../../shared/components/Layout";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.jpg";
import { Container } from "@mui/material";
import ImageWithText from "./components/ImageWithText";

function Projetos() {
  return (
    <Layout>
      <div className="bg-neutral-400 py-6">
        <Container>
          <ul>
            <ImageWithText
              text="Projeto de formulário realizando chamadas HTTP usando
                javascript:"
              image={project1}
            />
            <ImageWithText text="Projeto usando Grid:" image={project2} />
            <ImageWithText
              text="Projeto template WhatsApp utilizando Bootstrap 5:"
              image={project3}
            />
          </ul>
        </Container>
      </div>
    </Layout>
  );
}

export default Projetos;
