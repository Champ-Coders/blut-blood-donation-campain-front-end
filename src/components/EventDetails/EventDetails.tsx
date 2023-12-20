import Image from "next/image";
import React from "react";
import image from "../../../public/assets/event/1.jpg";
import image2 from "../../../public/assets/event/7.jpg";
import { FaCheck } from "react-icons/fa";

type EventDetailsProps = {};

const EventDetails: React.FC<EventDetailsProps> = () => {
  const textData: {
    text: string;
    id: string;
  }[] = [
    {
      id: "1",
      text: "Vivamus starlord finibus, dictum massa eget, suscipit metus nami at tristique elit started",
    },
    {
      id: "2",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
    {
      id: "3",
      text: "Proin ex sem, ultrices drax the sit amet, facilisis destrogen et odio profession risusest.",
    },
    {
      id: "4",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
    {
      id: "5",
      text: "Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies purus praesent gamora.",
    },
  ];
  return (
    <div>
      <div className="common">
        <div>
          <Image src={image.src} alt="details event image" />
          <div>
            <div>
              <h2 className="text-[#111] text-2xl font-semibold mb-5">
                Wood Custom
              </h2>
              <p className="text-[#7a7a7a] leading-6 mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi dicta architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia totamio voluptas sit aspernatur{" "}
              </p>
            </div>
            <div className="flex gap-10">
              <div>
                <Image src={image2.src} alt="details image" />
              </div>
              <div>
                <ul>
                  {textData.map((item) => (
                    <li
                      key={item.id}
                      className="text-[#7a7a7a] leading-6 mb-5 w-full flex items-center gap-2"
                    >
                      <span className="text-[#ea062b]">
                        <FaCheck />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
