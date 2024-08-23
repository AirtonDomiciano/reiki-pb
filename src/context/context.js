import img1 from "../images/cigana.jpg";
import img2 from "../images/tarot.jpg";
import img3 from "../images/reiki.webp";
import img4 from "../images/auriculo.jpg";

let resumeData = {
  name: "Airton Evandro Domiciano",
  role: "Sou um programador que gosta de ter novas experiências!",
  linkedinId: "Your LinkedIn Id",
  skypeid: "Your skypeid",
  items: [
    {
      id: 1,
      author: "Valeria Schuster",
      topic: "Salome",
      title: "Cigana",
      description: "Apresentações com a Cigana Salome",
      img: img1,
    },
    {
      id: 2,
      author: "Valeria Schuster",
      topic: "Cartomancia",
      title: "Tarot",
      description:
        "Faça uma consulta de cartas do baralho e descubra sua sorte com a Astral On Line",
      img: img2,
    },
    {
      id: 3,
      author: "Valeria Schuster",
      title: "Reiki",
      topic: "convencionais",
      description:
        "Durante uma sessão de Reiki, o praticante canaliza essa energia vital universal para o paciente, geralmente através da imposição das mãos sobre ou próximo ao corpo. A energia flui para as áreas que mais necessitam, ajudando a dissolver bloqueios energéticos e promovendo a cura e o bem-estar geral.",
      img: img3,
    },
    {
      id: 4,
      author: "Valeria Schuster",
      title: "auriculoterapia",
      topic: "Curas",
      description:
        "As terapias alternativas como a acupuntura têm sido cada vez mais procuradas para solucionar problemas relacionados ao corpo, já que costumam serem pouco invasivas e geralmente apresentam uma série de benefícios complementares à saúde.",
      img: img4,
    },
  ],
};

export default resumeData;
