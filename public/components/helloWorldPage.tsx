import React, { useState } from 'react';


export function HelloWorldPage() {
  const [name, setName] = useState("World");

  const handleClick = () => {
    setName("Kibana");
  };

  return (
    <div>
      <h1>Hello World Plugin</h1>
      <button onClick={handleClick}>Hello {name}!</button>
    </div>
  );
}
