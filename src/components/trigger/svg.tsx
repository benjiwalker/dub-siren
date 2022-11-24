const svg = (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 204 204"
    version="1.1"
  >
    <desc>Created with Sketch.</desc>
    <defs>
      <linearGradient
        x1="50%"
        y1="50%"
        x2="50%"
        y2="100%"
        id="47316fb2-a59e-4b50-ceda-09bd1d390705"
      >
        <stop stopColor="#444040" stopOpacity="0.51098279" offset="0%" />
        <stop stopColor="#131111" stopOpacity="0.893200861" offset="100%" />
      </linearGradient>
      <circle
        id="a8908868-f9be-3667-0ab3-430475e94c79"
        cx="99.0392157"
        cy="99.0392157"
        r="98.0392157"
      />
      <filter
        x="-3.3%"
        y="-3.3%"
        width="106.6%"
        height="106.6%"
        filterUnits="objectBoundingBox"
        id="5d3664c4-4759-0e66-82b2-254431cb5c64"
      >
        <feMorphology
          radius="0.5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="0"
          dy="0"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="44528800-8ce5-eb6a-7ad1-06d5aae13fc7"
      >
        <stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%" />
        <stop stopColor="white" stopOpacity="1" offset="100%" />
      </linearGradient>
      <circle
        id="a7cd6a96-548d-b11c-880b-eb9be361a78a"
        cx="99"
        cy="99"
        r="86"
      />
      <filter
        x="-4.1%"
        y="-3.5%"
        width="108.1%"
        height="108.1%"
        filterUnits="objectBoundingBox"
        id="f27693d7-7634-bfdd-e1f1-7475ac0772f3"
      >
        <feMorphology
          radius="0.5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="0"
          dy="1"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="s9" transform="translate(3.000000, 3.000000)">
        <g id="container">
          <g id="Oval-2">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#5d3664c4-4759-0e66-82b2-254431cb5c64)"
              xlinkHref="#a8908868-f9be-3667-0ab3-430475e94c79"
            />
            <use
              stroke="#979797"
              strokeWidth="1"
              fill="url(#47316fb2-a59e-4b50-ceda-09bd1d390705)"
              fillRule="evenodd"
              xlinkHref="#a8908868-f9be-3667-0ab3-430475e94c79"
            />
          </g>
          <g id="Oval-2">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#f27693d7-7634-bfdd-e1f1-7475ac0772f3)"
              xlinkHref="#a7cd6a96-548d-b11c-880b-eb9be361a78a"
            />
            <use
              fill=""
              fillRule="evenodd"
              xlinkHref="#a7cd6a96-548d-b11c-880b-eb9be361a78a"
            />
            <use
              stroke="#4A4A4A"
              strokeWidth="1"
              fill="url(#44528800-8ce5-eb6a-7ad1-06d5aae13fc7)"
              fillRule="evenodd"
              xlinkHref="#a7cd6a96-548d-b11c-880b-eb9be361a78a"
            />
          </g>
          <g id="knob" transform="translate(28.431373, 28.431373)">
            <circle id="Oval-5" fill="#DC143C" cx="71" cy="71" r="71" />
          </g>
          <g id="label" stroke="#979797">
            <circle
              id="Oval-6"
              transform="translate(100.000000, 100.000000) rotate(-45.000000) translate(-100.000000, -100.000000) "
              cx="100"
              cy="100"
              r="70.5882353"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default svg;
