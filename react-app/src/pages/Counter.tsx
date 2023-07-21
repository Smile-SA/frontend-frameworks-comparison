import { useEffect, useRef, useState } from "react";

import AsyncHomepage from "../components/AsyncHomepage";
import DynamicLayout from "../layouts/DynamicLayout";

const channel = new MessageChannel();
const port = channel.port2;

export default function Counter() {
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
    <DynamicLayout>
      <AsyncHomepage count={count} onStart={startCount} />
    </DynamicLayout>
  );
}
