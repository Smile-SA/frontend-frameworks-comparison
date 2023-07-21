import { Component, createSignal, onMount } from "solid-js";

import DynamicLayout from "../layouts/DynamicLayout";
import AsyncHomepage from "../components/AsyncHomepage";

const channel = new MessageChannel();
const port = channel.port2;

const Async: Component = () => {
  const [count, setCount] = createSignal(0);
  let start = false;
  let time = 0;

  onMount(() => {
    channel.port1.onmessage = () => {
      setCount(count() + 1);
      increment();
    };
  });

  function startCount() {
    if (count() === 0) {
      time = Date.now();
      start = true;
      increment();
    } else {
      setCount(0);
    }
  }

  function increment() {
    if (start) {
      if (Date.now() - time < 1000) {
        port.postMessage("");
      } else {
        start = false;
      }
    }
  }

  return (
    <DynamicLayout>
      <AsyncHomepage count={count} onStart={startCount} />
    </DynamicLayout>
  );
};

export default Async;
