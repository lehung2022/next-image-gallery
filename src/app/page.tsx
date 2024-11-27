import React from 'react';
import Content from "@/components/Content";
import { EventEmitter } from 'events';

// Increase the limit of event listeners for the EventEmitter
EventEmitter.defaultMaxListeners = 50; // Set the desired limit (e.g., 50)

export default function Home() {
  return (
    <>
      <Content />
    </>
  );
}
