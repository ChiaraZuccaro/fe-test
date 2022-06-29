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
import id312 from "./productImg/12.jpg";
import id313 from "./productImg/13.jpg";
import id314 from "./productImg/14.jpg";
import id315 from "./productImg/15.jpg";
import id416 from "./productImg/16.jpg";
import id417 from "./productImg/17.jpg";
import id418 from "./productImg/18.jpg";
import id519 from "./productImg/19.jpg";
import id520 from "./productImg/20.jpg";
import id521 from "./productImg/21.jpg";

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
    description:
      "Display da 15.6” N4020 Fino A 2.80GHz,Ram 8Gb Ddr4 SSd NVMe 256 Gb,Pc portatile,Hdmi,Wi fi,Bluetooth,Windows 11 professional. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  {
    id: 3,
    title: "LG Gram 17Z90P",
    price: 1499.99,
    rating: {
      rate: 4.5,
      count: 119,
    },
    imgs: [id312, id313, id314, id315],
    option: [
      { value: "green", availability: true },
      { value: "pink", availability: true },
      { value: "purple", availability: true },
      { value: "grey", availability: true },
    ],
    description: `Processore Intel Core i7-1165G7 QuadCore di 11a Generazione (2.80GHz, Turbo fino a 4.70GHz, L3 cache 12MB, TDP 28W), Display 17" IPS Quad HD 16:10 (2560x1600) DCI-P3 99%, RAM 16GB DDR4 (4266 MHz), SSD 512GB M.2 NVMe PCIe, Grafica Intel Iris Xe, Chassis in lega di magnesio e Nano Carbon per una struttura solida e leggera,Batteria litio a lunga durata 80Wh, fino a 15 ore di autonomia (MobileMark 2018), Tastiera retroilluminata, layout italiano, accesso rapido con impronta digitale, TPM, HDD Security, HD Webcam, Dual Mic, Audio DTS:X Ultra che offre un'immersione coinvolgente con o senza cuffie, Intel WiFi 6 AX201, Bluetooth 5.0,Durabilità certificata: standard militare MIL-STD 810 G `,
  },
  {
    id: 4,
    title: "Acer Predator Helios 300 PH317-56-71RM PC Gaming",
    price: 2799.0,
    rating: {
      rate: 4.5,
      count: 5,
    },
    imgs: [id416, id417, id418],
    option: [
      { value: "green", availability: true },
      { value: "pink", availability: true },
      { value: "purple", availability: false },
      { value: "grey", availability: true },
    ],
    description: `PRESTAZIONI ESTREME: domina il gaming con prestazioni al livello di un pc desktop con il più recente processore Intel Core di 12a generazione i7-12700H, la scheda grafica NVIDIA GeForce RTX 3070 Ti 8 GB, memoria SSD da 1024 GB e fino a 32 GB di RAM DDR5 4800 MHz, IMPATTO VISIVO: annienta la competizione con il tuo gaming laptop Predator grazie al display 17.3" QHD FHD con formato 16:9 e refresh rate di 165 Hz. Goditi un gameplay fluido, vibrante e dinamico su uno schermo dai colori intensi e realistici, SCHEDA GRAFICA NVIDIA GEFORCE RTX 3070 Ti: le schede grafiche più recenti sono basate sull'architettura NVIDIA 2a Gen RTX Ampere per offrire la grafica con ray-tracing più realistica e funzionalità di intelligenza artificiale all'avanguardia come NVIDIA DLSS, SEMPRE CONNESSO: Sfrutta l'incredibile quantità di porte, tra cui HDMI 2.1, MiniDP e una gamma completa di USB 3.2 con supporto Gen1 e 2 per collegare tutte le periferiche. Thunderbolt 4 supporta anche la funzionalità DisplayPort e Power Delivery, DTS:X ULTRA: trasforma le cuffie o gli speaker in un sofisticato sistema audio surround a 360° per apprezzare al meglio il realismo dell'audio 3D mentre giochi, guardi un film o ascolti musica`,
  },
  {
    id: 5,
    title: "ASUS ROG Zephyrus M16 GU603HR#B08CMZ8CQL",
    price: 2.699,
    rating: {
      rate: 4,
      count: 7,
    },
    imgs: [id519, id520, id521],
    option: [
      { value: "green", availability: true },
      { value: "pink", availability: true },
      { value: "purple", availability: true },
      { value: "grey", availability: true },
    ],
    description: `Notebook con display WQXGA Adaptive Sync con cornici ultra sottili e un rapporto schermo-corpo del 94%, certificazione Pantone Validated con copertura DCI-P3 al 100% e proporzioni 16:10 che espandono il tuo raggio di visione e di azione, Tastiera ottimizzata per essere più resistente e silenziosa con illuminazione RGB a 1 zona, cerniera Ergolift con alzata ergonomica ruotabile fino a 180° per giocare e lavorare con il ottimo comfort, Performance a una velocità di livello ottimo con la scheda grafica NVIDIA GeForce RTX 3070 e il Processore all’avanguardia Intel Core di Undicesima Generazione i7-11800H con applicazione del composto termico di metallo liquido Liquid Thermal per garantire prestazioni elevate anche sotto sforzo, Esperienza audio grazie alla tecnologia Dolby Atmos composta da sei altoparlanti con doppi woofer, array di microfoni 3D e sistema AI bidirezionale per la cancellazione del rumore, Perfetto per chi cerca un Notebook di design, compatto e leggero, che offre prestazioni massime per il gioco e il lavoro professionali anche sotto sforzo e con uso prolungato`,
  },
];

export default commerce;
