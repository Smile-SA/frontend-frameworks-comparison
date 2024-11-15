import type { FeatureCollection, Point } from "geojson";
import type { LatLngTuple, Map } from "leaflet";
import { Component, onMounted, xml } from "@odoo/owl";

const drupalSettings = {
  path: {
    baseUrl: "/",
    scriptPath: null,
    pathPrefix: "fr/",
    currentPath: "node/4",
    currentPathIsAdmin: false,
    isFront: true,
    currentLanguage: "fr",
  },
  pluralDelimiter: "\\u0003",
  suppressDeprecationErrors: true,
  ajaxPageState: {
    libraries:
      "bootstrap/popover,bootstrap/tooltip,core/html5shiv,core/picturefill,paragraphs/drupal.paragraphs.unpublished,smileeu/leaflet,smileeu/smileeu-article-offre,smileeu/smileeu-error-page-animations,smileeu/smileeu-history,smileeu/smileeu-landing-page-video,smileeu/smileeu-list-references,smileeu/smileeu-main-menu,smileeu/smileeu-popin,smileeu/smileeu-tabs,smileeu/smileeu-text-two-columns,smileeu/smileeu-utils,smileeu/smileeu-validation-forms,smileeu/smileeu_theme,smileeu_common/cookie_banner,smileeu_networking/smileeu-networking-hubspot,smileeu_search/smileeu_search,smileeu_tagging/smileeu-tagging.commands,social_media_links/fontawesome.component,social_media_links/social_media_links.theme,system/base",
    theme: "smileeu",
    theme_token: null,
  },
  ajaxTrustedUrl: { "/fr/search_results": true },
  google_analytics: {
    account: "UA-105790765-1",
    trackOutbound: true,
    trackMailto: true,
    trackDownload: true,
    trackDownloadExtensions:
      "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip",
  },
  bootstrap: {
    forms_has_error_value_toggle: 1,
    modal_animation: 1,
    modal_backdrop: "true",
    modal_keyboard: 1,
    modal_show: 1,
    modal_size: "",
    popover_enabled: 1,
    popover_animatboundsLimitsion: 1,
    popover_container: "body",
    popover_content: "",
    popover_delay: "0",
    popover_html: 0,
    popover_placement: "right",
    popover_selector: "",
    popover_title: "",
    popover_trigger: "click",
    popover_trigger_autoclose: 1,
    tooltip_enabled: 1,
    tooltip_animation: 1,
    tooltip_container: "body",
    tooltip_delay: "0",
    tooltip_html: 0,
    tooltip_placement: "auto left",
    tooltip_selector: "",
    tooltip_trigger: "hover",
  },
  smileeu: { map: { isFront: true, taxonomy: "108" } },
  user: {
    uid: 0,
    permissionsHash:
      "ba6c843f1598de2b285cd958d1e81ed3a31083943305d5d273d9d7ea6725fdeb",
  },
};

const agencies: FeatureCollection<Point> = {
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
      geometry: { type: "Point", coordinates: [6.484211500000015, 46.5069803] },
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
      geometry: { type: "Point", coordinates: [-7.635518999999931, 33.594889] },
      properties: {
        name: "\u003Ca href=\u0022/fr/smile-maroc\u0022 hreflang=\u0022fr\u0022\u003ESMILE Maroc\u003C/a\u003E",
        description:
          "\u003Cdiv data-history-node-id=\u00221711\u0022 role=\u0022article\u0022 about=\u0022/fr/groupe/nos-implantations/maroc\u0022 class=\u0022agency is-promoted teaser clearfix\u0022\u003E\n\n    \u003Ch2 class=\u0022title-agency\u0022\u003EMaroc\u003C/h2\u003E\n\n\n  \u003Cdiv class=\u0022first-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022label-address-agency\u0022\u003EAdresse :\u003C/div\u003E\n      \u003Cdiv class=\u0022address-agency\u0022\u003E7, rue Assilah 2 \u00e8me \u00e9tage Commune Moulay Youssef \u003C/div\u003E\n\n\n          \u003Cdiv class=\u0022phone-agency\u0022\u003E\u003Cspan class=\u0022label-phone-agency\u0022\u003ET\u00e9l\u00e9phone :\u003C/span\u003E   +212 (0)5 22 27 13 74\n\u003C/div\u003E\n    \n    \n    \u003Ca href=\u0022/fr/groupe/nos-implantations/maroc\u0022 class=\u0022link-to-agency\u0022\u003EVoir l\u0027agence\u003C/a\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\u0022second-part-agency\u0022\u003E\n    \u003Cdiv class=\u0022collaborater-agency\u0022\u003E  Yacine \n \u003Cspan class=\u0022name-collaborater-agency\u0022\u003E  Bekkar\n\u003C/span\u003E\u003C/div\u003E\n    \u003Cdiv class=\u0022collaborater-job-agency\u0022\u003E  Directeur d\u0026#039;agence\n\u003C/div\u003E\n\n      \u003Ca href=\u0022/fr/contact\u0022 class=\u0022link-to-contact-agency\u0022\u003EContactez l\u0026#039;agence\u003C/a\u003E\n\n\n  \u003C/div\u003E\n\n\u003C/div\u003E\n",
        body: "",
      },
    },
  ],
};

function attach(L: any) {
  let origin: LatLngTuple = [45.48, 20];
  let zoom = 5;
  let minZoom = 3.5;
  let zoomControl = true;
  let boundsLimits = [53.79, -15.05, 32.57, 32.98];
  const zoomDelta = 1;
  let zoomSnap = 1;
  const isFront = drupalSettings.smileeu.map.isFront;
  const mapUri =
    "http://localhost:3333/smileeu_local_map/pictures_map_global/{z}/{x}/{y}.png";

  if (window.innerWidth < 1400 && window.innerWidth > 1200) {
    zoom = 4.8;
    minZoom = 3.5;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 1200 && window.innerWidth > 1100) {
    zoom = 4.7;
    minZoom = 3;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 1100 && window.innerWidth > 900) {
    zoom = 4.4;
    minZoom = 3;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 900 && window.innerWidth > 700) {
    zoom = 4;
    minZoom = 3;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 700 && window.innerWidth > 480) {
    zoom = 3.8;
    minZoom = 2.8;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 600 && window.innerWidth > 480) {
    zoom = 3.5;
    minZoom = 2.5;
    zoomSnap = 0.1;
  }

  if (window.innerWidth <= 480) {
    origin = [48.86, 10.29];
    zoom = 3.3;
    minZoom = 3;
    zoomSnap = 0.1;

    if (isFront) {
      origin = [48.86, 2.29];
      zoomControl = false;
      zoom = 3;
    }

    boundsLimits = [68.8, -25.53, -12.15, 137.94];
  }

  const bounds = new L.LatLngBounds(
    new L.LatLng(boundsLimits[0], boundsLimits[1]),
    new L.LatLng(boundsLimits[2], boundsLimits[3]),
  );

  const map = L.map("map", {
    zoomDelta: zoomDelta,
    zoomSnap: zoomSnap,
    scrollWheelZoom: false,
    minZoom: minZoom,
    maxZoom: 7,
    center: origin,
    zoom: zoom,
    zoomControl: zoomControl,
    attributionControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1,
  });
  map.addLayer(L.tileLayer(mapUri));

  if (zoomControl) {
    map.zoomControl.setPosition("topright");
  }

  L.Icon.Default.imagePath = "http://localhost:3333/map/";
  if (drupalSettings.smileeu.map.taxonomy[1]) {
    if ((window.innerWidth > 480 && isFront) || !isFront) {
      addDataToMap(L, agencies, map);
      const controllerContainer = document.getElementById("map-controller");
      const controller = document.querySelector(
        "#map>.leaflet-control-container",
      );
      if (controllerContainer && controller) {
        controllerContainer.appendChild(controller);
      }
    }

    if (window.innerWidth <= 480 && isFront) {
      disableControl(map);
    }
  }
}

function disableControl(map: Map) {
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();

  if (map.tapHold) {
    map.tapHold.disable();
  }
}

function addDataToMap(L: any, data: FeatureCollection<Point>, map: Map) {
  const myIcon = L.icon({
    iconUrl: "http://localhost:3333/map/pin.svg",
    iconSize: [21, 28],
    iconAnchor: [10, 28],
  });

  const dataLayer = L.geoJson(data, {
    pointToLayer: function (_feature: any, latlng: any) {
      return L.marker(latlng, { icon: myIcon });
    },
    onEachFeature: function (feature: any, layer: any) {
      const popupText = feature.properties.description;

      if (window.innerWidth <= 480) {
        layer.bindPopup(popupText, {
          className: "agencies-map-popup-encart",
          maxWidth: 250,
        });
      } else {
        layer.bindPopup(popupText, {
          className: "agencies-map-popup-encart",
        });
      }

      layer.on("click", function clickZoom(e: any) {
        // @ts-expect-error ignore
        map.setMaxBounds(null);
        map.setView(e.target.getLatLng(), map.getZoom());
      });
    },
  });
  dataLayer.addTo(map);
}

export class DynamicMap extends Component {
  static template = xml`<div
  id="map"
  class="map--front leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
  style="position: relative;"
  tab-index="0"
></div>
<div id="map-controller"></div>`;
  setup(): void {
    onMounted(() => {
      try {
        if (typeof window !== "undefined") {
          import("leaflet").then(attach);
        }
      } catch (e) {
        console.error(e);
      }
    });
  }
}
