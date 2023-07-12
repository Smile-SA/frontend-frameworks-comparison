import express, { Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

const timeout = 1000;
function send(res: Response, content: unknown) {
  setTimeout(() => res.send(content), timeout);
}

app.get("/agencies", function (req, res) {
  send(res, {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-3.9890979, 5.3877885] },
        properties: {
          name: "\u003Ca href=\u0022/fr/node/2110\u0022 hreflang=\u0022fr\u0022\u003ESmile C\u00f4te d\u2019Ivoire\u003C/a\u003E",
          description: "",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [5.9002841, 49.5220412] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-luxembourg\u0022 hreflang=\u0022fr\u0022\u003ESmile Luxembourg\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221713\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/luxembourg\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003ELuxembourg\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E115a, rue Emile Mark, Differdange \u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   (+352) 26 58 06 03\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/luxembourg\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Romain\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Joly\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Responsable d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [30.516295, 50.439909] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-ukraine\u0022 hreflang=\u0022fr\u0022\u003ESmile Ukraine\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221712\u0022 role=\u0022article\u0022 about=\u0022/fr/groupe/nos-implantations/ukraine\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EUkraine\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E45/2 Pushkinska str, office 32\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +38 (044) 498-30-28\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupe/nos-implantations/ukraine\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Vitalyi\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Pashuk\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Responsable d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [2.299, 48.91165] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-paris\u0022 hreflang=\u0022fr\u0022\u003ESmile Paris\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221726\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/paris\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EParis\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E163 Quai du Dr Dervaux\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   01 41 40 11 00\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/paris\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Emmanuel\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Tornini\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur G\u00e9n\u00e9ral\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [3.0715851, 50.6287936] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-lille\u0022 hreflang=\u0022fr\u0022\u003ESmile Lille\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221729\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/lille\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003ELille\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E7 Boulevard Louis XIV\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   09 72 10 96 16\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/lille\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Catherine \n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Kara\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Responsable d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.54271778834914, 44.822503562191],
        },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-bordeaux\u0022 hreflang=\u0022fr\u0022\u003ESmile Bordeaux\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221702\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/bordeaux\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EBordeaux\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E2, Rue du Jardin de l\u0026#039;Ars\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   05 56 87 51 18\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/bordeaux\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Erwan\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Kerzreho\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Digital Skill Center Director (France)\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [3.8714959, 43.6072503] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-montpellier\u0022 hreflang=\u0022fr\u0022\u003ESmile Montpellier\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221688\u0022 role=\u0022article\u0022 about=\u0022/fr/groupe/nos-implantations/montpellier\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EMontpellier\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E26 cours Gambetta\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   04 99 77 20 10\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupe/nos-implantations/montpellier\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Erwan\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Kerzreho\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [1.430551, 43.614143] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-toulouse\u0022 hreflang=\u0022fr\u0022\u003ESmile Toulouse\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221662\u0022 role=\u0022article\u0022 about=\u0022/fr/groupe/nos-implantations/toulouse\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EToulouse\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E55, boulevard de l\u2019Embouchure -  b\u00e2timent C/4\u00e8me \u00e9tage \u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   05 82 08 27 55\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupe/nos-implantations/toulouse\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Alexandre\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Lahaye\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [5.7220192, 45.1868703] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-grenoble\u0022 hreflang=\u0022fr\u0022\u003ESmile Grenoble\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221659\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/grenoble\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EGrenoble\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E14 Rue G\u00e9nissieu\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   + 33 4 56 60 00 06\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/grenoble\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Eric\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Mutel\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Responsable d\u2019agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [6.484211500000015, 46.5069803],
        },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-suisse\u0022 hreflang=\u0022fr\u0022\u003ESmile Suisse\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221655\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/suisse\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003ESuisse\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003ERoute de la Longeraie 9, 1110 Morges\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +41 21 544 28 00\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/suisse\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Christophe\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Pellier\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Responsable d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-1.5798565, 47.2135176] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-nantes\u0022 hreflang=\u0022fr\u0022\u003ESmile Nantes\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221657\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/nantes\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003ENantes\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E10-12 rue Nicolas Appert\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   02 40 35 75 01\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/nantes\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Olivier\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Ferger\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [5.3888828, 43.308604] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-marseille\u0022 hreflang=\u0022fr\u0022\u003ESmile Marseille\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221651\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/marseille\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EMarseille\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003EP\u00f4le Media de la Belle de Mai - 37/41 rue Guibal \u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   04 84 25 40 10\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/marseille\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Gilles\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Luis\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [4.8595798, 45.7770138] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-lyon\u0022 hreflang=\u0022fr\u0022\u003ESmile Lyon\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221650\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/lyon\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003ELyon\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E107 boulevard de Stalingrad\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   04 37 23 18 85\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/lyon\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Christophe\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Rivory\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [5.108229, 52.092852] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-pays-bas\u0022 hreflang=\u0022fr\u0022\u003ESmile Pays-Bas\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221647\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/pays-bas\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EPays-Bas\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003ELeidseveer 2-10, 3511 SB UTRECHT\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +31 (0)346 557 070\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/pays-bas\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  ...\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  ...\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [4.4037182, 50.8227004] },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-belgique\u0022 hreflang=\u0022fr\u0022\u003ESmile Belgique\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221646\u0022 role=\u0022article\u0022 about=\u0022/fr/groupenos-implantations/belgique\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EBelgique\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003EAvenue de Broqueville 12, 1150 Brussels\u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +32 2 894 17 31\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupenos-implantations/belgique\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Florent\n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Sabourin\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-7.635518999999931, 33.594889],
        },
        properties: {
          name: "\u003Ca href=\u0022/fr/smile-maroc\u0022 hreflang=\u0022fr\u0022\u003ESMILE Maroc\u003C/a\u003E",
          description:
            "\u003Cdiv data-history-node-id=\u00221711\u0022 role=\u0022article\u0022 about=\u0022/fr/groupe/nos-implantations/maroc\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EMaroc\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E7, rue Assilah 2 \u00e8me \u00e9tage Commune Moulay Youssef \u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +212 (0)5 22 27 13 74\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupe/nos-implantations/maroc\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Yacine \n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Bekkar\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
          body: "",
        },
      },
    ],
  });
});

app.get("/opensource", function (req, res) {
  send(res, [
    {
      title: "Préférez l'Open Source",
      description:
        "Au menu de l'open source : des bénéfices économiques, une source inépuisée d’innovations, une liberté retrouvée... Et plein d'autres avantages qui se comptent par centaines !",
      link: "Découvrez l'open source",
      url: "https://www.smile.eu/fr/groupe/lopen-source-quest-ce-que-cest",
    },
    {
      title: "Guide de l’open source",
      description:
        "Vous avez besoin d’y voir plus clair dans l’éventail de solutions open source du marché ? Notre livre blanc qui…",
      link: "Voir le livre blanc",
      url: "https://www.smile.eu/fr/livres-blancslivres-blancs/guide-lopen-source",
    },
  ]);
});

app.get("/cards", function (req, res) {
  send(res, [
    {
      type: "reference",
      image:
        "https://www.smile.eu/sites/default/files/styles/reference_picture_preview_pages/public/2017-09/Eram_logo_2006.png?itok=MNFYZ3bU",
      description:
        "Découvrez comment Smile a réussi le challenge de concevoir et développer un nouveau site e-commerce pour Eram…",
      link: "Voir la référence",
      url: "http://www.smile.eu/fr/references/eram",
    },
    {
      type: "news",
      title: "Palindrome.js",
      description:
        "Le suivi d'informations multidimensionnelles est complexe dans un monde en 2D : soit les dimensions ou les…",
      link: "Voir l'actualité",
      url: "http://www.smile.eu/fr/groupeactualites/palindromejs",
    },
    {
      type: "image",
      image:
        "http://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2023-05/Palindrome%20-%20logo%20only%20-%20hd%20%282%29.jpg?itok=g-naVpLx",
    },
    {
      type: "technology",
      title: "Drupal",
      description:
        "Devinez qui est le 1er expert Français de Drupal ? Smile ! Construire une expérience digitale riche avec…",
      link: "Voir la technologie",
      url: "http://www.smile.eu/fr/technologies/drupal",
    },
    {
      type: "event",
      day: "24",
      month: "03",
      title: "Quick Talk Tech a Smile",
      description: "en ligne - tous les jours",
      link: "Voir l'événement",
      url: "http://www.smile.eu/fr/groupeevenements/quick-talk-tech-smile",
    },
    {
      type: "whitePaper",
      title: "Linux RT",
      link: "Voir le livre blanc",
      url: "http://www.smile.eu/fr/livres-blancslivres-blancs/linux-rt",
    },
  ]);
});

app.get("/solutions", function (req, res) {
  send(res, [
    {
      title: "Digital",
      description:
        "Vous avez de grandes ambitions pour votre écosystème digital ? Ça tombe bien ! Chez Smile, nous voyons les choses en grand.",
      url: "https://www.smile.eu/fr/offres/digital",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/DIGITAL_1.png?itok=4CXdbzM4",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-08/DIGITAL_1.png?itok=cBv5EibO",
    },
    {
      title: "Business Apps",
      description:
        "Vous avez des projets de transformation ? Super, on adore ça ! Que vous soyez prêts ou pas ;) Nous vous accompagnons de A à Z, de la conception à l’accompagnement.",
      url: "https://www.smile.eu/fr/offres/business-apps",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/BA_1.png?itok=-YAV1P9c",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-08/BA_1.png?itok=owtmLuUn 1x",
    },
    {
      title: "Embedded & IOT",
      description:
        "Vous souhaitez lancer des produits connectés parmi les plus innovants ? Vous êtes au bon endroit ! Nous imaginons, prototypons et concevons les objets d’aujourd’hui et de demain.",
      url: "https://www.smile.eu/fr/offres/embarque-iot",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/EM_0.png?itok=5G7mbT3o",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-08/EM_0.png?itok=8gsfRthJ 1x",
    },
    {
      title: "Infra",
      description:
        "Vous cherchez à industrialiser votre infrastructure ? À tirer parti du Cloud pour gagner en agilité et faire des économies ?",
      url: "https://www.smile.eu/fr/offres/infrastructure",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/INFRA_1.png?itok=A0SrMgg-",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-08/INFRA_1.png?itok=yk1PCdKI 1x",
    },
  ]);
});

app.get("/technologies", function (req, res) {
  send(res, [
    {
      title: "Drupal",
      description: "Devinez qui est le 1er expert Français de Drupal ? Smile !",
      url: "https://www.smile.eu/fr/livres-blancslivres-blancs/guide-drupal-8",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Drupal%20Copy.png?itok=PFW89xHs",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-09/Drupal%20Copy.png?itok=ODF4d7qI 1x",
    },
    {
      title: "Jahia",
      description:
        "Smile est aujourd’hui partenaire de Jahia, niveau Platinum (le plus haut niveau) et a reçu le prix «Europe Partner of the Year» !",
      url: "https://www.smile.eu/fr/technologies/jahia",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Jahai_2.png?itok=GTrBwm3k",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-09/Jahai_2.png?itok=_xTjwFLT 1x",
    },
    {
      title: "Magento",
      description:
        "Smile, premier expert européen de Magento, est aussi partenaire Global Elite Magento - un statut accordé à seulement 5 entreprises dans le monde !",
      url: "https://www.smile.eu/technologies/magento",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Magento%20Copy.png?itok=cVhTCR1i",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-09/Magento%20Copy.png?itok=lFXtOokc 1x",
    },
    {
      title: "Liferay",
      description:
        "Devinez qui est le premier partenaire Platinum de Liferay en France ? Smile !",
      url: "https://www.smile.eu/fr/technologies/liferay",
      image:
        "https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Liferay%20Copy_1.png?itok=cNLKMYiR",
      mobileImage:
        "https://www.smile.eu/sites/default/files/styles/expertise_item_mobile/public/2017-09/Liferay%20Copy_1.png?itok=ETwF-A93 1x",
    },
  ]);
});

const port = 3333;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
