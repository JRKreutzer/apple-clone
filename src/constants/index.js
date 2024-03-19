import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Loja", "Mac", "iPhone", "Suporte"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Introduzindo A17 Pro.",
        "Chip revolucionário.",
        "Desempenho inovador.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4
    },
    {
      id: 2,
      textLists: [
        "iPhone 15 Pro Max tem o",
        "maior zoom óptico já feito",
        "no iPhone. De Longe.",
      ],
      video: highlightSecondVideo,
      videoDuration: 2
    },
    {
      id: 3,
      textLists: ["Titânio.", "Tão forte. Tão leve. Tão Profissional."],
      video: highlightThirdVideo,
      videoDuration: 5
    },
    {
      id: 4,
      textLists: ["Novo botão de Ação.", "O que o seu fará?."],
      video: highlightFourthVideo,
      videoDuration: 3.63
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro em Titânio Natural",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro em Titânio Azul",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro em Titânio Branco",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro em Titânio Preto",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '15.5', value: "small" },
    { label: '17.0', value: "large" },
  ];
  
  export const footerLinks = [
    "Política de Privacidade",
    "Termos de Uso",
    "Política de Vendas",
    "Legal",
    "Mapa do Site",
  ];