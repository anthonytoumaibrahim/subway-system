import { Map, Marker } from "pigeon-maps";

import { maptiler, osm } from "pigeon-maps/providers";

const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "streets-v2");

const App = () => {
  return (
    <div className="App">
      <Map
        provider={osm}
        height={800}
        defaultCenter={[33.884444, 35.505833]}
        defaultZoom={13}
        width={1200}
      >
        <Marker
          width={50}
          anchor={[33.884444, 35.505833]}
          onClick={() => alert("hello")}
        />
        <Marker width={50} color="red" anchor={[33.889544, 35.505833]} />
      </Map>
    </div>
  );
};

export default App;
