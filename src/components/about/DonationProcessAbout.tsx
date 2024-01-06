import React from "react";

import style from "@/app/styles/about.module.css";

type DonationProcessAboutProps = {};

const DonationProcessAbout: React.FC<DonationProcessAboutProps> = () => {
  return (
    <section className="py-[116px]">
      <div className="common">
        <div>
          <div className="text-center mb-5 sm:mb-10">
            <h3 className="text-base sm:text-xl text-primary font-medium mb-3 uppercase">
              What We Do
            </h3>
            <h1 className="text-[#111] font-bold text-2xl lg:text-5xl">
              Donation Process
            </h1>
          </div>
          <div>
            <ul className="ul__item">
              <li style={{ "--accent-color": "#41516C" } as any}>
                <div className={style.date}>2002</div>
                <div className={style.title}>Title 1</div>
                <div className={style.descr}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  itaque hic quibusdam fugiat est numquam harum, accusamus
                  suscipit consequatur laboriosam!
                </div>
              </li>
              <li style={{ "--accent-color": "#FBCA3E" } as any}>
                <div className={style.date}>2007</div>
                <div className={style.title}>Title 2</div>
                <div className={style.descr}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  adipisci nobis nostrum vero nihil veniam.
                </div>
              </li>
              <li style={{ "--accent-color": "#E24A68" } as any}>
                <div className={style.date}>2012</div>
                <div className={style.title}>Title 3</div>
                <div className={style.descr}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  minima consequuntur soluta placeat iure totam commodi
                  repellendus ea delectus, libero fugit quod reprehenderit,
                  sequi quo, et dolorum saepe nulla hic.
                </div>
              </li>
              <li style={{ "--accent-color": "#1B5F8C" } as any}>
                <div className={style.date}>2017</div>
                <div className={style.title}>Title 4</div>
                <div className={style.descr}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit, cumque.
                </div>
              </li>
              <li style={{ "--accent-color": "#4CADAD" } as any}>
                <div className={style.date}>2022</div>
                <div className={style.title}>Title 5</div>
                <div className={style.descr}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, non.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DonationProcessAbout;
