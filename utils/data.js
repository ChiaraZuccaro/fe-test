import id001 from "./productImg/01.jpg";
import id002 from "./productImg/02.jpg";
import id003 from "./productImg/03.jpg";
import id004 from "./productImg/04.jpg";
import id105 from "./productImg/05.jpg";
import id106 from "./productImg/06.jpg";
import id107 from "./productImg/07.jpg";
import id208 from "./productImg/08.jpg";
import id209 from "./productImg/09.jpg";
import id210 from "./productImg/10.jpg";
import id211 from "./productImg/11.jpg";

const commerce = [
  {
    id: 0,
    title: "HP 255 G8 Computer portatile",
    price: 274.8,
    rating: {
      rate: 4.5,
      count: 128,
    },
    option: [
      { value: "blue", availability: true },
      { value: "red", availability: false },
      { value: "green", availability: true },
      { value: "grey", availability: true },
    ],
    imgs: [id001, id002, id003, id004],
    description:
      'HP 255 G8. Tipo di prodotto: Computer portatile, Fattore di forma: Clamshell. Famiglia processore: AMD 3000, Modello del processore: 3020E, Frequenza del processore: 1,2 GHz. Dimensioni schermo: 39,6 cm (15.6"), Tipologia HD: HD, Risoluzione del display: 1366 x 768 Pixel. RAM installata: 8 GB, Tipo di RAM: DDR4-SDRAM. Capacità totale di archiviazione: 256 GB, Supporto di memoria: SSD. Modello scheda grafica integrata: AMD Radeon Graphics. Sistema operativo incluso: Windows 10 Home. Colore del prodotto: Nero',
  },
  {
    id: 1,
    title: "Acer Notebook pc portatile",
    price: 319.99,
    rating: {
      rate: 3.5,
      count: 15,
    },
    option: [
      { value: "blue", availability: true },
      { value: "red", availability: true },
      { value: "pink", availability: true },
      { value: "grey", availability: false },
    ],
    imgs: [id105, id106, id107],
    description: `
      Display da 15.6” N4020 Fino A 2.80GHz,Ram 8Gb Ddr4 SSd NVMe 256 Gb,Pc portatile,Hdmi,Wi fi,Bluetooth,Windows 11 professional`,
  },
  {
    id: 2,
    title:
      "HP - PC Spectre x360 16 Notebook Convertibile,Lettore Impronte digitali, Pen Inclusa",
    price: 1699.99,
    rating: {
      rate: 4,
      count: 10,
    },
    imgs: [id208, id209, id210, id211],
    option: [
      { value: "blue", availability: true },
      { value: "red", availability: true },
      { value: "purple", availability: true },
      { value: "grey", availability: true },
    ],
    description:
      'Sistema operativo: Windows 11 Home, Processore: Intel Core i7-11390H, Memoria: RAM 16 GB - SSD 1 TB, Display: Diagonale da 40,6 cm (16"), 3K+ (3072 x 1920), predisposizione per multitouch, IPS, micro-edge, vetro Corning Gorilla NBT antiriflesso, riduzione della luce blu, 400 nit, 100% sRGB, Tastiera: Tastiera Nightfall Black di dimensioni standard, con retroilluminazione e supporto gesti multi-touch',
  },
];

export default commerce;
