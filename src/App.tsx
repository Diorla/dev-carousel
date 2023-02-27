import { useState } from "react";
import { useBoolean, useInterval, useWindowSize } from "react-use";
import Card from "./modules/Card";
import CardQuote from "./modules/CardQuote";
import Cards from "./modules//Cards";
import CardTitle from "./modules//CardTitle";
import getPosition from "./modules//getPosition";
import getSize from "./modules//getSize";
import Image from "./modules//Image";
import imageList from "./modules//imageList";
import Main from "./modules//Main";

export default function Testimonials() {
  const { width } = useWindowSize();

  const [isRunning, setIsRunning] = useBoolean(true);

  const delay = 5e3;
  useInterval(
    () => {
      updateImageList(active);
    },
    isRunning ? delay : null
  );
  const [active, setActive] = useState(0);

  const [images, setImages] = useState(imageList.slice(0, 3));

  const [remaining, setRemaining] = useState(imageList.slice(3));

  const executiveUpdate = (idx: number) => {
    const removedImage = images[active];
    setImages([
      ...images.slice(0, active),
      remaining[0],
      ...images.slice(active + 1)
    ]);
    setRemaining([...remaining.slice(1), removedImage]);
    setActive(idx);
  };
  const updateImageList = (idx: number) => {
    if (idx === active) {
      if (idx === 0) executiveUpdate(2);
      else executiveUpdate(idx - 1);
    } else executiveUpdate(idx);
  };

  return (
    <Main>
      <Cards>
        {images.map((item, idx) => (
          <Card
            key={idx}
            position={getPosition(active, idx)}
            onClick={() => {
              updateImageList(idx);
            }}
            onMouseEnter={() => setIsRunning(false)}
            onMouseLeave={() => setIsRunning(true)}
          >
            <CardQuote title={item.description}>
              This is a short text, I like it
            </CardQuote>
            <Image src={item.src} alt={item.name} />
            <div style={{ textAlign: "center" }}>
              <CardTitle>{item.name}</CardTitle>
              {/* <CardRole href="https://this-person-does-not-exist.com/en">
                  {item.role}
                </CardRole> */}
            </div>
          </Card>
        ))}
      </Cards>
    </Main>
  );
}
