import type { FeatureCollection, Point } from "geojson";
import type { LatLngTuple, Map } from "leaflet";

import { component$, useVisibleTask$ } from "@builder.io/qwik";

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

function attach(L: any) {
  let origin: LatLngTuple = [45.48, 20];
  let zoom = 5;
  let minZoom = 3.5;
  let zoomControl = true;
  let boundsLimits = [53.79, -15.05, 32.57, 32.98];
  const zoomDelta = 1;
  let zoomSnap = 1;
  const isFront = drupalSettings.smileeu.map.isFront;
  const mapUri = "http://localhost:3333/smileeu_local_map/pictures_map_global/{z}/{x}/{y}.png";

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
    new L.LatLng(boundsLimits[2], boundsLimits[3])
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
      fetch("http://localhost:3333/agencies")
        .then((r) => r.json())
        .then((agencies) => addDataToMap(L, agencies, map));
      const controllerContainer = document.getElementById("map-controller");
      const controller = document.querySelector(
        "#map>.leaflet-control-container"
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

  if (map.tap) {
    map.tap.disable();
  }
}

function addDataToMap(L: any, data: FeatureCollection<Point>, map: Map) {
  const myIcon = L.icon({
    iconUrl: "http://localhost:3333/map/pin.svg",
    iconSize: [21, 28],
    iconAnchor: [10, 28],
  });

  const dataLayer = L.geoJson(data, {
    pointToLayer: function (feature: any, latlng: any) {
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
        // @ts-expect-error null
        map.setMaxBounds(null);
        map.setView(e.target.getLatLng(), map.getZoom());
      });
    },
  });
  dataLayer.addTo(map);
}

export default component$(() => {
  useVisibleTask$(() => {
    try {
      if (typeof window !== "undefined") {
        import("leaflet").then(attach);
      }
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <>
      <div
        id="map"
        class="map--front"
        style={{ position: "relative" }}
        tabIndex={0}
      ></div>
      <div id="map-controller"></div>
    </>
  );
});
