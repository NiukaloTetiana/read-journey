import {
  iphone_mobile_1x,
  iphone_mobile_2x,
  iphone_desktop_1x,
  iphone_desktop_2x,
} from "../../assets";

export const ImgBlock = () => {
  return (
    <div className="flex shrink-0 rounded-[30px] bg-[#1f1f1f] px-10 pt-5 md:hidden lg:block lg:h-[736px] lg:px-[98px] lg:pt-20">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${iphone_desktop_1x} 1x, ${iphone_desktop_2x} 2x`}
          width={405}
          height={656}
          type="image/webp"
          className=""
        />
        <img
          srcSet={`${iphone_mobile_1x} 1x, ${iphone_mobile_2x} 2x`}
          src={iphone_mobile_1x}
          alt="Iphone picture"
          width={255}
          height={331}
          loading="lazy"
        />
      </picture>
    </div>
  );
};
