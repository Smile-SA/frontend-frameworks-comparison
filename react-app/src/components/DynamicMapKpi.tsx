import { useEffect, useRef, useState } from "react";

const channel = new MessageChannel();
const port = channel.port2;

export default function DynamicMapKpi() {
  const [count, setCount] = useState(0);
  const start = useRef(false);
  const time = useRef(0);

  useEffect(() => {
    channel.port1.onmessage = () => {
      setCount((x) => x + 1);
      increment();
    };
  }, []);

  function startCount() {
    if (count === 0) {
      time.current = Date.now();
      start.current = true;
      increment();
    } else {
      setCount(0);
    }
  }

  function increment() {
    if (start) {
      if (Date.now() - time.current < 1000) {
        port.postMessage("");
      } else {
        start.current = false;
      }
    }
  }

  return (
    <>
      <div className="field field--name-field-map-kpi field--type-entity-reference field--label-hidden field--items">
        <div className="field--item">
          <div className="block-content block-content-kpi singleblock-text">
            <div className="title"> 17</div>
            <div className="subtitle"> Agences</div>
          </div>
        </div>
        <div className="field--item">
          <div className="block-content block-content-kpi singleblock-text">
            <div className="title"> 9</div>
            <div className="subtitle"> PAYS</div>
          </div>
        </div>
        <div className="field--item">
          <div className="block-content block-content-kpi singleblock-text">
            <div className="title"> {count}</div>
            <div className="subtitle"> SMILIENS</div>
          </div>
        </div>
      </div>
      <div className="link-map">
        <div className="link-map-content">
          <button
            type="button"
            onClick={startCount}
            style={{ border: 0, background: "transparent" }}
          >
            Découvrez smile
          </button>
        </div>
      </div>
    </>
  );
}
