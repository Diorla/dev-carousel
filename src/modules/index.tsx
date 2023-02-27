import SectionTitle from "components/SectionTitle";
import { useRef, useState } from "react";
import {
  useBoolean,
  useIntersection,
  useInterval,
  useWindowSize,
} from "react-use";
import truncateText from "scripts/truncate-text";
import Card from "./Card";
import CardQuote from "./CardQuote";
// import CardRole from "./CardRole";
import Cards from "./Cards";
import CardTitle from "./CardTitle";
import Container from "./Container";
import getPosition from "./getPosition";
import getSize from "./getSize";
import Image from "./Image";
import imageList from "./imageList";
import Main from "./Main";

export default function Testimonials({
  setPath,
  path,
}: {
  setPath: (path: string) => void;
  path: string;
}) {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  if (intersection && intersection.intersectionRatio >= 1)
    setPath("testimonial");
  const [isRunning, setIsRunning] = useBoolean(true);

  const delay = 5e3;
  useInterval(
    () => {
      updateImageList(active);
    },
    isRunning && path === "testimonial" ? delay : null
  );
  const [active, setActive] = useState(0);

  const [images, setImages] = useState(imageList.slice(0, 3));

  const [remaining, setRemaining] = useState(imageList.slice(3));

  const executiveUpdate = (idx: number) => {
    const removedImage = images[active];
    setImages([
      ...images.slice(0, active),
      remaining[0],
      ...images.slice(active + 1),
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
      <SectionTitle ref={ref} id="testimonial" style={{ color: "white" }}>
        Testimonials
      </SectionTitle>
      <Container>
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
                {truncateText(item.description, getSize(width))}
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
      </Container>
    </Main>
  );
}
