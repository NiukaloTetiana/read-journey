import {
  star_mobile_1x,
  star_mobile_2x,
  star_tablet_1x,
  star_tablet_2x,
} from "../assets";

import { AddReading, Dashboard, MyBook } from "../components";

const ReadingPage = () => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-[27px]">
      <div className="container flex flex-col gap-[10px] md:gap-4 lg:flex-row">
        <Dashboard>
          <AddReading />
          <div className="rounded-[12px] pb-5 md:h-[272px] md:w-[305px] md:pb-0">
            <h3 className="text-dashboard mb-[14px] text-[#f9f9f9]">
              Progress
            </h3>

            <p className="description mb-5 text-[#686868] md:mb-[50px] lg:mb-[60px]">
              Here you will see when and how much you read. To record, click on
              the red button above.
            </p>

            <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-[#262626] md:size-[100px]">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${star_tablet_1x} 1x, ${star_tablet_2x} 2x`}
                  width={50}
                  height={50}
                  type="image/webp"
                />
                <img
                  srcSet={`${star_mobile_1x} 1x, ${star_mobile_2x} 2x`}
                  src={star_mobile_1x}
                  alt="Star picture"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </Dashboard>

        <MyBook />
      </div>
    </div>
  );
};

export default ReadingPage;
