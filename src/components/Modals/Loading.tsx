import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center font-inter">
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="66" height="66" fill="#F5F5F5" />
        <g filter="url(#filter0_b_0_1)">
          <rect
            width="1440"
            height="960"
            transform="translate(-687 -405)"
            fill="#00359E"
            fill-opacity="0.1"
          />
          <g filter="url(#filter1_dd_0_1)">
            <g clip-path="url(#clip0_0_1)">
              <rect
                x="-167"
                y="-23"
                width="400"
                height="196"
                rx="12"
                fill="white"
              />
              <rect
                width="400"
                height="196"
                transform="translate(-167 -23)"
                fill="white"
              />
              <rect
                width="400"
                height="172"
                transform="translate(-167 -23)"
                fill="white"
              />
              <path
                d="M62 33C62 36.8083 61.2499 40.5794 59.7925 44.0978C58.3351 47.6163 56.199 50.8132 53.5061 53.5061C50.8132 56.199 47.6163 58.3351 44.0978 59.7925C40.5794 61.2499 36.8083 62 33 62C29.1917 62 25.4206 61.2499 21.9022 59.7925C18.3837 58.3351 15.1868 56.199 12.4939 53.5061C9.801 50.8132 7.66488 47.6163 6.20749 44.0978C4.7501 40.5794 4 36.8083 4 33C4 29.1917 4.75011 25.4206 6.2075 21.9022C7.66489 18.3837 9.80101 15.1868 12.4939 12.4939C15.1868 9.801 18.3837 7.66487 21.9022 6.20749C25.4206 4.7501 29.1917 4 33 4C36.8083 4 40.5794 4.75011 44.0978 6.2075C47.6163 7.66489 50.8132 9.80101 53.5061 12.4939C56.199 15.1868 58.3351 18.3838 59.7925 21.9022C61.2499 25.4206 62 29.1917 62 33L62 33Z"
                stroke="url(#paint0_angular_0_1)"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="0.1 8"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_0_1"
            x="-703"
            y="-421"
            width="1472"
            height="992"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_0_1"
            x="-187"
            y="-23"
            width="440"
            height="236"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_0_1"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_0_1"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1"
              result="effect2_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_angular_0_1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(33 33) rotate(169.077) scale(29.0258)">
            <stop stop-color="#00359E" />
            <stop offset="1" stop-color="#00359E" stop-opacity="0" />
          </radialGradient>
          <clipPath id="clip0_0_1">
            <rect
              x="-167"
              y="-23"
              width="400"
              height="196"
              rx="12"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="mt-4 mb-3 lg:mt-5 lg:mb-4 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[28px] text-[#344054] font-medium">
        Loading...
      </p>
      <p className="text-[14px] text-[#475467] leading-[20px] font-normal">
        Please wait while we confirm your transfer.
      </p>
    </div>
  );
};

export default Loading;
