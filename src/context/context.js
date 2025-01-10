import img1 from "../images/Reiki.jpeg";
import img2 from "../images/Constelacao.jpeg";
import img3 from "../images/Tarot.jpeg";
import img4 from "../images/Hipnose.jpeg";

let resumeData = {
  name: "Airton Evandro Domiciano",
  role: "Sou um programador que gosta de ter novas experiências!",
  linkedinId: "Your LinkedIn Id",
  skypeid: "Your skypeid",
  items: [
    {
      id: 1,
      url: 'sobre-o-reiki',
      author: "Valeria Schuster",
      title: "Reiki",
      topic: "Uma técnica de cura energética que atua por meio da imposição das mãos",
      topicCard: "Energia para Equilibrar Corpo e Mente.",
      description: `O Reiki busca harmonizar os campos energéticos do corpo, promovendo equilíbrio físico, mental e emocional, 
      auxiliando no alívio de tensões e no aumento do bem-estar.`,
      img: img1,
    },
    {
      id: 2,
      url: 'sobre-a-constelacao',
      author: "Valeria Schuster",
      title: "Constelação",
      topic: "Uma abordagem terapêutica que desvela padrões ocultos nos sistemas familiares.",
      topicCard: "Curando Dinâmicas Relacionais.",
      description:
        "A Constelação Familiar permite identificar desarmonias nos relacionamentos e promover equilíbrio, compreendendo os laços familiares de forma profunda.",
      img: img2,
    },
    {
      id: 3,
      url: 'sobre-o-tarot',
      author: "Valeria Schuster",
      title: "Tarot",
      topic: "Uma ferramenta simbólica para autoconhecimento e tomada de decisões.",
      topicCard: "Reflexões e Orientações Através das Cartas.",
      description: 
      "O Tarot utiliza cartas como espelhos de situações e sentimentos, ajudando a trazer clareza e novas perspectivas sobre a vida e seus desafios.",
      img: img3,
    },
    {
      id: 4,
      url: 'sobre-a-hipnose',
      author: "Valeria Schuster",
      title: "Hipnose",
      topic: "Uma prática terapêutica que utiliza o estado hipnótico para mudanças positivas.",
      topicCard: "Transformação Através da Mente Subconsciente.",
      description: 
      "A Hipnose auxilia no tratamento de traumas, fobias e hábitos indesejados, permitindo acessar e ressignificar memórias e crenças limitantes.",
      img: img4,
    },
  ],
};

export default resumeData;
