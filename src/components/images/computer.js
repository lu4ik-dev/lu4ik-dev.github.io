import React from 'react';
import randomFacts from '../js/randomFacts';

function ImageComputer() {
  const handleSvgClick = () => {
    console.log('SVG clicked!');
  };

  const handleSvgReload = () => {
    window.location.reload();
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="600"
      height="600"
      version="1.1"
      id="decorationLaptop"
      viewBox="0 0 600 600"
      xmlSpace="preserve">
      <defs>
        <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
          <path d="M0 450h450V0H0z"></path>
        </clipPath>
        <clipPath id="clipPath26" clipPathUnits="userSpaceOnUse">
          <path d="M11.53 271h413V0h-413z"></path>
        </clipPath>
        <clipPath id="clipPath30" clipPathUnits="userSpaceOnUse">
          <path d="M11.53 271h413V0h-413z"></path>
        </clipPath>
        <mask id="mask32" width="1" height="1" x="0" y="0" maskUnits="userSpaceOnUse">
          <g>
            <g clipPath="url(#clipPath30)">
              <g>
                <g transform="matrix(413 0 0 271 11.53 0)">
                  <image
                    width="1"
                    height="1"
                    imageRendering="optimizeSpeed"
                    preserveAspectRatio="none"
                    transform="matrix(1 0 0 -1 0 1)"
                    xlinkHref="data:image/png;base64,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"></image>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <mask id="mask44" width="1" height="1" x="0" y="0" maskUnits="userSpaceOnUse">
          <image
            width="1"
            height="1"
            imageRendering="optimizeSpeed"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"></image>
        </mask>
        <clipPath id="clipPath68" clipPathUnits="userSpaceOnUse">
          <path d="M188.874 257.748a20.015 20.015 0 012.761-3.737c1.494-1.567 2.53-2.218 3.445-2.788-.472.314-.805 1.686-.8 3.527-2.918 1.683-5.287 5.785-5.275 9.137-1.635.944-2.672 1.95-2.669 2.515-.001-3.701 1.589-7.011 2.538-8.654m6.232-6.541l-.026.016.026-.016"></path>
        </clipPath>
        <clipPath id="clipPath80" clipPathUnits="userSpaceOnUse">
          <path d="M186.705 396.602l-.041-14.467-.041-14.466-.041-14.467-.042-14.466-.04-14.467-.042-14.467-.04-14.467-.042-14.467-.04-14.466c-.003-.565 1.034-1.571 2.669-2.515l.41 144.668c-1.635.944-2.671 1.95-2.67 2.515z"></path>
        </clipPath>
        <clipPath id="clipPath92" clipPathUnits="userSpaceOnUse">
          <path d="M191.581 417.937c-.545-.114-.765-.161-1.088-.298 1.565.6 3.579.343 5.774-.924a.36.36 0 00.386.008c-1.92 1.094-3.246 1.215-3.745 1.26a6.03 6.03 0 01-1.327-.046m-1.709-.595c.269.135.458.227.621.297a4.318 4.318 0 01-.621-.297"></path>
        </clipPath>
        <clipPath id="clipPath160" clipPathUnits="userSpaceOnUse">
          <path d="M189.872 417.342l-.307-.179c1.635.95 3.897.817 6.396-.625l.306.177c-1.449.837-2.819 1.233-4.033 1.233-.879 0-1.676-.208-2.362-.606"></path>
        </clipPath>
        <clipPath id="clipPath228" clipPathUnits="userSpaceOnUse">
          <path d="M189.565 417.163c-.619-.365-1.484-1.074-2.086-2.375-.347-.752-.463-1.332-.608-2.066-.08-.407-.093-.772-.126-1.652-.001-.565 1.035-1.571 2.67-2.515.008 3.354 2.391 4.713 5.309 3.026.007 2.343.561 4.564 1.237 4.957-1.449.836-2.819 1.232-4.033 1.232-.879 0-1.676-.208-2.363-.607"></path>
        </clipPath>
        <clipPath id="clipPath296" clipPathUnits="userSpaceOnUse">
          <path d="M195.106 251.207l189.866-109.619c-.485.28-.83 1.668-.825 3.543L194.28 254.75c-.005-1.874.34-3.263.826-3.543"></path>
        </clipPath>
        <clipPath id="clipPath308" clipPathUnits="userSpaceOnUse">
          <path d="M394.878 147.214l.001.028-.001-.028m-.197-.302c-.007-2.505-.791-4.355-2.088-5.397.525.415 1.11 1.052 1.553 2.008.348.752.462 1.333.608 2.066.078.403.091.74.124 1.625a.365.365 0 00-.197-.302m-2.622-5.764a4.73 4.73 0 000 0"></path>
        </clipPath>
        <clipPath id="clipPath360" clipPathUnits="userSpaceOnUse">
          <path d="M394.375 146.734c-.009-2.833-1.008-4.826-2.621-5.764l.305.178c1.614.937 2.613 2.931 2.622 5.764z"></path>
        </clipPath>
        <clipPath id="clipPath412" clipPathUnits="userSpaceOnUse">
          <path d="M384.147 145.131c-.005-1.875.34-3.263.825-3.543 1.92-1.094 3.247-1.214 3.745-1.26a5.979 5.979 0 011.328.046c.818.173.904.192 1.709.596 1.613.938 2.612 2.931 2.621 5.764-.675-.392-2.879.244-4.918 1.422-.008-3.354-2.392-4.712-5.31-3.025"></path>
        </clipPath>
        <clipPath id="clipPath464" clipPathUnits="userSpaceOnUse">
          <path d="M395.092 291.579l-.411-144.667c.134.078.198.19.198.33l.042 14.467.04 14.467.042 14.467.04 14.466.042 14.468.041 14.466.041 14.467.041 14.466.041 14.467.041 14.467a.37.37 0 00-.198-.331"></path>
        </clipPath>
        <clipPath id="clipPath504" clipPathUnits="userSpaceOnUse">
          <path d="M196.267 416.715l189.865-109.62a.364.364 0 00.387.009L196.653 416.723a.353.353 0 01-.182.052.398.398 0 01-.204-.06"></path>
        </clipPath>
        <clipPath id="clipPath560" clipPathUnits="userSpaceOnUse">
          <path d="M0 450h450V0H0z"></path>
        </clipPath>
        <clipPath id="clipPath572" clipPathUnits="userSpaceOnUse">
          <path d="M389.457 148.156c2.039-1.178 4.243-1.814 4.918-1.422l.411 144.668c-.676-.392-2.879.244-4.92 1.422z"></path>
        </clipPath>
        <clipPath id="clipPath624" clipPathUnits="userSpaceOnUse">
          <path d="M194.724 411.581l189.868-109.62c.006 2.344.559 4.565 1.235 4.957l-189.866 109.62c-.676-.393-1.23-2.614-1.237-4.957"></path>
        </clipPath>
        <clipPath id="clipPath692" clipPathUnits="userSpaceOnUse">
          <path d="M386.132 307.095c4.965-2.865 8.975-9.812 8.96-15.516a.37.37 0 01.198.331c.001 3.7-1.59 7.01-2.538 8.653-.793 1.373-1.774 2.701-2.762 3.739-1.411 1.479-2.502 2.222-3.471 2.802a.362.362 0 01-.182.052.403.403 0 01-.205-.061"></path>
        </clipPath>
        <clipPath id="clipPath812" clipPathUnits="userSpaceOnUse">
          <path d="M385.827 306.918c4.964-2.866 8.974-9.813 8.959-15.516l.306.177c.015 5.704-3.995 12.651-8.96 15.516z"></path>
        </clipPath>
        <clipPath id="clipPath960" clipPathUnits="userSpaceOnUse">
          <path d="M384.592 301.961c2.918-1.682 5.286-5.785 5.274-9.137 2.041-1.178 4.244-1.814 4.92-1.422.015 5.703-3.995 12.65-8.959 15.516-.676-.392-1.229-2.613-1.235-4.957"></path>
        </clipPath>
        <linearGradient
          id="linearGradient1168"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(225.85 -225.85) rotate(15.038 5.579 2.208)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="0.513" stopColor="#4a148c" stopOpacity="1"></stop>
          <stop offset="0.954" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#6a1b9a" stopOpacity="1"></stop>
        </linearGradient>
        <clipPath id="clipPath1178" clipPathUnits="userSpaceOnUse">
          <path d="M185.765 254.953c-2.142 0-3.812-.329-4.617-.524-2.1-.511-3.178-1.084-4.122-1.592.51.255 1.879-.141 3.485-1.069 2.898 1.687 7.644 1.691 10.567 0 1.621.942 2.996 1.336 3.48 1.056-3.221 1.851-6.882 2.129-8.783 2.129h-.01m-8.767-2.13a.365.365 0 01.028.014l-.028-.014"></path>
        </clipPath>
        <clipPath id="clipPath1246" clipPathUnits="userSpaceOnUse">
          <path d="M176.998 252.823L51.926 180.139c.488.283 1.878-.111 3.512-1.055l125.073 72.684c-1.286.743-2.42 1.145-3.083 1.145a.873.873 0 01-.43-.09"></path>
        </clipPath>
        <clipPath id="clipPath1314" clipPathUnits="userSpaceOnUse">
          <path d="M48.125 173.488c-.043.251-.07.519-.073.803a4.269 4.269 0 01.073-.803m.975-2.271c.468-.663.971-1.098 1.504-1.56.312-.27.599-.448 1.354-.919a.363.363 0 00-.161.323c-2.147 1.239-3.372 2.811-3.672 4.427a5.475 5.475 0 01.975-2.271m2.883-2.495l-.025.016.025-.016"></path>
        </clipPath>
        <clipPath id="clipPath1326" clipPathUnits="userSpaceOnUse">
          <path d="M48.052 174.291c-.006-1.892 1.244-3.786 3.745-5.23l.002.353c-2.502 1.446-3.752 3.339-3.746 5.23z"></path>
        </clipPath>
        <clipPath id="clipPath1338" clipPathUnits="userSpaceOnUse">
          <path d="M51.926 180.139c-1.236-.721-2.209-1.577-2.892-2.547-.419-.593-.631-1.165-.633-1.17-.264-.794-.292-.877-.348-1.778-.006-1.891 1.244-3.784 3.746-5.23.001.782 1.647 2.371 3.674 3.549-2.929 1.689-2.944 4.432-.034 6.121-1.286.742-2.42 1.145-3.083 1.145a.873.873 0 01-.43-.09"></path>
        </clipPath>
        <clipPath id="clipPath1406" clipPathUnits="userSpaceOnUse">
          <path d="M191.078 251.768l189.858-109.615c1.622.942 2.996 1.338 3.481 1.057l-18.986 10.962-18.986 10.961-18.985 10.962-18.987 10.961-18.985 10.962-18.987 10.96-18.984 10.962-18.987 10.962-18.985 10.961-18.987 10.961a.839.839 0 01-.421.089c-.656 0-1.781-.403-3.059-1.145"></path>
        </clipPath>
        <clipPath id="clipPath1454" clipPathUnits="userSpaceOnUse">
          <path d="M388.289 136.611c.037.225.056.451.056.677a10.694 10.694 0 00-.056-.677m-3.628-4.481a.366.366 0 00-.186-.337c1.234.72 2.206 1.577 2.89 2.546.418.593.63 1.166.632 1.171.177.534.248.746.292 1.101-.265-1.636-1.474-3.229-3.628-4.481"></path>
        </clipPath>
        <clipPath id="clipPath1506" clipPathUnits="userSpaceOnUse">
          <path d="M384.662 132.484l-.001-.354c2.451 1.425 3.678 3.29 3.684 5.158l.001.353c-.006-1.868-1.234-3.733-3.684-5.157"></path>
        </clipPath>
        <clipPath id="clipPath1546" clipPathUnits="userSpaceOnUse">
          <path d="M380.936 142.153c2.928-1.687 2.938-4.436.034-6.121 2.041-1.178 3.694-2.766 3.692-3.548 2.45 1.424 3.678 3.289 3.684 5.157-.019 1.618-.793 2.713-1.046 3.073-.468.664-.971 1.1-1.504 1.561-.315.271-.605.452-1.379.935a.857.857 0 01-.422.088c-.657 0-1.781-.402-3.059-1.145"></path>
        </clipPath>
        <clipPath id="clipPath1666" clipPathUnits="userSpaceOnUse">
          <path d="M259.589 59.446a.369.369 0 00-.187-.337l12.507 7.269 12.508 7.268 12.506 7.269 12.508 7.268 12.507 7.268 12.507 7.269 12.508 7.268 12.507 7.269c8.338 4.844 16.675 9.691 25.015 14.536.119.07.186.181.186.337z"></path>
        </clipPath>
        <clipPath id="clipPath1718" clipPathUnits="userSpaceOnUse">
          <path d="M51.983 168.722l18.986-10.961 18.986-10.962 18.986-10.962 18.986-10.961 18.985-10.962 18.986-10.961 18.986-10.962 18.986-10.96 18.986-10.962 18.986-10.962a.363.363 0 00-.187.339L51.797 169.061c0-.157.065-.269.186-.339"></path>
        </clipPath>
        <clipPath id="clipPath1738" clipPathUnits="userSpaceOnUse">
          <path d="M0 450h450V0H0z"></path>
        </clipPath>
        <clipPath id="clipPath1750" clipPathUnits="userSpaceOnUse">
          <path d="M255.898 63.348c2.04-1.177 3.693-2.767 3.692-3.548l125.072 72.684c.002.782-1.651 2.37-3.692 3.548z"></path>
        </clipPath>
        <clipPath id="clipPath1898" clipPathUnits="userSpaceOnUse">
          <path d="M51.799 169.414L241.657 59.8c.002.781 1.647 2.371 3.675 3.548L55.473 172.963c-2.027-1.178-3.673-2.767-3.674-3.549"></path>
        </clipPath>
        <clipPath id="clipPath1966" clipPathUnits="userSpaceOnUse">
          <path d="M241.655 59.446c0-.157.065-.269.187-.339 3.229-1.854 6.892-2.131 8.788-2.131a20.08 20.08 0 014.619.525c1.985.482 3.17 1.058 4.153 1.608.12.071.186.182.187.337-4.94-2.871-12.961-2.871-17.934 0"></path>
        </clipPath>
        <clipPath id="clipPath2018" clipPathUnits="userSpaceOnUse">
          <path d="M245.332 63.348c-2.028-1.177-3.673-2.767-3.675-3.548 4.972-2.87 12.993-2.87 17.933 0 .001.781-1.652 2.371-3.692 3.548-2.907-1.691-7.64-1.691-10.566 0"></path>
        </clipPath>
        <clipPath id="clipPath2214" clipPathUnits="userSpaceOnUse">
          <path d="M241.657 59.8l-.002-.354c4.973-2.871 12.994-2.871 17.934 0l.001.354c-4.94-2.87-12.961-2.87-17.933 0"></path>
        </clipPath>
        <clipPath id="clipPath2266" clipPathUnits="userSpaceOnUse">
          <path d="M0 450h450V0H0z"></path>
        </clipPath>
        <clipPath id="clipPath2274" clipPathUnits="userSpaceOnUse">
          <path d="M122.172 237.851h236.947V101.347H122.172z"></path>
        </clipPath>
        <clipPath id="clipPath2278" clipPathUnits="userSpaceOnUse">
          <path d="M180.023 237.851h13.605v-7.87h-13.605z"></path>
        </clipPath>
        <clipPath id="clipPath2282" clipPathUnits="userSpaceOnUse">
          <path d="M192.751 230.502h13.606v-7.87h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2286" clipPathUnits="userSpaceOnUse">
          <path d="M205.48 223.153h13.609v-7.872H205.48z"></path>
        </clipPath>
        <clipPath id="clipPath2290" clipPathUnits="userSpaceOnUse">
          <path d="M218.214 215.801h13.604v-7.869h-13.604z"></path>
        </clipPath>
        <clipPath id="clipPath2294" clipPathUnits="userSpaceOnUse">
          <path d="M230.943 208.452h13.608v-7.871h-13.608z"></path>
        </clipPath>
        <clipPath id="clipPath2298" clipPathUnits="userSpaceOnUse">
          <path d="M243.675 201.101h13.605v-7.87h-13.605z"></path>
        </clipPath>
        <clipPath id="clipPath2302" clipPathUnits="userSpaceOnUse">
          <path d="M256.403 193.752h13.606v-7.87h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2306" clipPathUnits="userSpaceOnUse">
          <path d="M269.132 186.403h13.606v-7.869h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2310" clipPathUnits="userSpaceOnUse">
          <path d="M281.861 179.054h13.609v-7.871h-13.609z"></path>
        </clipPath>
        <clipPath id="clipPath2314" clipPathUnits="userSpaceOnUse">
          <path d="M294.595 171.702h13.608v-7.87h-13.608z"></path>
        </clipPath>
        <clipPath id="clipPath2318" clipPathUnits="userSpaceOnUse">
          <path d="M307.323 164.354h13.609v-7.872h-13.609z"></path>
        </clipPath>
        <clipPath id="clipPath2322" clipPathUnits="userSpaceOnUse">
          <path d="M320.055 157.003h13.606v-7.87h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2326" clipPathUnits="userSpaceOnUse">
          <path d="M332.784 149.654h13.606v-7.87h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2330" clipPathUnits="userSpaceOnUse">
          <path d="M345.513 142.305h13.606v-7.87h-13.606z"></path>
        </clipPath>
        <clipPath id="clipPath2334" clipPathUnits="userSpaceOnUse">
          <path d="M168.839 233.559h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2338" clipPathUnits="userSpaceOnUse">
          <path d="M181.567 226.21h17.406v-10.077h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2342" clipPathUnits="userSpaceOnUse">
          <path d="M194.296 218.861h17.409v-10.079h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2346" clipPathUnits="userSpaceOnUse">
          <path d="M207.03 211.51h17.403v-10.077H207.03z"></path>
        </clipPath>
        <clipPath id="clipPath2350" clipPathUnits="userSpaceOnUse">
          <path d="M219.759 204.161h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2354" clipPathUnits="userSpaceOnUse">
          <path d="M232.491 196.81h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2358" clipPathUnits="userSpaceOnUse">
          <path d="M245.219 189.461h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2362" clipPathUnits="userSpaceOnUse">
          <path d="M257.948 182.112h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2366" clipPathUnits="userSpaceOnUse">
          <path d="M270.677 174.763h17.408v-10.08h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2370" clipPathUnits="userSpaceOnUse">
          <path d="M283.411 167.411h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2374" clipPathUnits="userSpaceOnUse">
          <path d="M296.139 160.062h17.409v-10.079h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2378" clipPathUnits="userSpaceOnUse">
          <path d="M308.871 152.711h17.406v-10.077h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2382" clipPathUnits="userSpaceOnUse">
          <path d="M321.6 145.363h30.134v-17.427H321.6z"></path>
        </clipPath>
        <clipPath id="clipPath2386" clipPathUnits="userSpaceOnUse">
          <path d="M157.655 227.06h28.662v-16.577h-28.662z"></path>
        </clipPath>
        <clipPath id="clipPath2390" clipPathUnits="userSpaceOnUse">
          <path d="M183.112 212.362h17.409v-10.08h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2394" clipPathUnits="userSpaceOnUse">
          <path d="M195.846 205.01h17.403v-10.077h-17.403z"></path>
        </clipPath>
        <clipPath id="clipPath2398" clipPathUnits="userSpaceOnUse">
          <path d="M208.575 197.661h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2402" clipPathUnits="userSpaceOnUse">
          <path d="M221.307 190.31h17.405v-10.077h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2406" clipPathUnits="userSpaceOnUse">
          <path d="M234.035 182.962h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2410" clipPathUnits="userSpaceOnUse">
          <path d="M246.764 175.613h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2414" clipPathUnits="userSpaceOnUse">
          <path d="M259.493 168.264h17.408v-10.08h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2418" clipPathUnits="userSpaceOnUse">
          <path d="M272.227 160.912h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2422" clipPathUnits="userSpaceOnUse">
          <path d="M284.955 153.563h17.409v-10.08h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2426" clipPathUnits="userSpaceOnUse">
          <path d="M297.687 146.212h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2430" clipPathUnits="userSpaceOnUse">
          <path d="M146.471 220.56h21.005v-12.156h-21.005z"></path>
        </clipPath>
        <clipPath id="clipPath2434" clipPathUnits="userSpaceOnUse">
          <path d="M163.107 210.956h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2438" clipPathUnits="userSpaceOnUse">
          <path d="M175.836 203.607h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2442" clipPathUnits="userSpaceOnUse">
          <path d="M188.564 196.258h17.406V186.18h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2446" clipPathUnits="userSpaceOnUse">
          <path d="M201.293 188.909h17.409v-10.08h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2450" clipPathUnits="userSpaceOnUse">
          <path d="M214.027 181.557h17.408v-10.079h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2454" clipPathUnits="userSpaceOnUse">
          <path d="M226.756 174.208h17.408v-10.08h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2458" clipPathUnits="userSpaceOnUse">
          <path d="M239.488 166.857h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2462" clipPathUnits="userSpaceOnUse">
          <path d="M252.216 159.508h17.406V149.43h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2466" clipPathUnits="userSpaceOnUse">
          <path d="M264.945 152.159h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2470" clipPathUnits="userSpaceOnUse">
          <path d="M277.675 144.81h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2474" clipPathUnits="userSpaceOnUse">
          <path d="M290.408 137.458h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2478" clipPathUnits="userSpaceOnUse">
          <path d="M304.4 138.863h36.15v-23.926H304.4z"></path>
        </clipPath>
        <clipPath id="clipPath2482" clipPathUnits="userSpaceOnUse">
          <path d="M135.287 214.061h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2486" clipPathUnits="userSpaceOnUse">
          <path d="M148.015 206.712h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2490" clipPathUnits="userSpaceOnUse">
          <path d="M160.744 199.363h17.409v-10.079h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2494" clipPathUnits="userSpaceOnUse">
          <path d="M173.478 192.011h17.403v-10.076h-17.403z"></path>
        </clipPath>
        <clipPath id="clipPath2498" clipPathUnits="userSpaceOnUse">
          <path d="M186.207 184.662h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2502" clipPathUnits="userSpaceOnUse">
          <path d="M198.939 177.312h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2506" clipPathUnits="userSpaceOnUse">
          <path d="M211.667 169.963h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2510" clipPathUnits="userSpaceOnUse">
          <path d="M224.396 162.614h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2514" clipPathUnits="userSpaceOnUse">
          <path d="M237.125 155.265h17.408v-10.08h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2518" clipPathUnits="userSpaceOnUse">
          <path d="M249.859 147.913h17.407v-10.079h-17.407z"></path>
        </clipPath>
        <clipPath id="clipPath2522" clipPathUnits="userSpaceOnUse">
          <path d="M262.587 140.564h17.409v-10.08h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2526" clipPathUnits="userSpaceOnUse">
          <path d="M275.319 133.213h17.406v-10.078h-17.406z"></path>
        </clipPath>
        <clipPath id="clipPath2530" clipPathUnits="userSpaceOnUse">
          <path d="M288.048 125.864h30.134v-17.427h-30.134z"></path>
        </clipPath>
        <clipPath id="clipPath2534" clipPathUnits="userSpaceOnUse">
          <path d="M124.1 207.561h17.407v-10.079H124.1z"></path>
        </clipPath>
        <clipPath id="clipPath2538" clipPathUnits="userSpaceOnUse">
          <path d="M136.828 200.212h17.408v-10.079h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2542" clipPathUnits="userSpaceOnUse">
          <path d="M149.557 192.863h17.411v-10.081h-17.411z"></path>
        </clipPath>
        <clipPath id="clipPath2546" clipPathUnits="userSpaceOnUse">
          <path d="M162.291 185.511h17.405v-10.078h-17.405z"></path>
        </clipPath>
        <clipPath id="clipPath2550" clipPathUnits="userSpaceOnUse">
          <path d="M175.02 178.162h68.328v-39.478H175.02z"></path>
        </clipPath>
        <clipPath id="clipPath2554" clipPathUnits="userSpaceOnUse">
          <path d="M238.672 141.413h17.409v-10.08h-17.409z"></path>
        </clipPath>
        <clipPath id="clipPath2558" clipPathUnits="userSpaceOnUse">
          <path d="M251.4 134.064h17.411v-10.081H251.4z"></path>
        </clipPath>
        <clipPath id="clipPath2562" clipPathUnits="userSpaceOnUse">
          <path d="M264.132 126.713h17.408v-10.079h-17.408z"></path>
        </clipPath>
        <clipPath id="clipPath2566" clipPathUnits="userSpaceOnUse">
          <path d="M281.754 119.364h12.514v-7.235h-12.514z"></path>
        </clipPath>
        <clipPath id="clipPath2570" clipPathUnits="userSpaceOnUse">
          <path d="M276.861 116.518h12.51v-7.233h-12.51z"></path>
        </clipPath>
        <clipPath id="clipPath2574" clipPathUnits="userSpaceOnUse">
          <path d="M289.59 112.015h17.407v-10.079H289.59z"></path>
        </clipPath>
        <clipPath id="clipPath2578" clipPathUnits="userSpaceOnUse">
          <path d="M122.172 164.98h109.962v-63.633H122.172z"></path>
        </clipPath>
        <clipPath id="clipPath3502" clipPathUnits="userSpaceOnUse">
          <path d="M194.719 395.007h97.911V248.902h-97.911z"></path>
        </clipPath>
        <clipPath id="clipPath3506" clipPathUnits="userSpaceOnUse">
          <path d="M288.448 342.885l-89.281 51.547c-2.317 1.337-4.203.262-4.21-2.399l-.239-83.767c-.006-2.652 1.867-5.907 4.183-7.245l89.281-51.546c2.318-1.337 4.203-.253 4.211 2.399l.238 83.767c.006 2.661-1.867 5.907-4.183 7.244"></path>
        </clipPath>
        <linearGradient
          id="linearGradient3518"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(-123.99192 123.99192) rotate(-69.587 1.015 2.898)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#fff" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#fff" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <mask id="mask3520" width="1" height="1" x="0" y="0" maskUnits="userSpaceOnUse">
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill="url(#linearGradient3518)"
                    stroke="none"
                    d="M-32768 32767h65535v-65535h-65535z"></path>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <linearGradient
          id="linearGradient3538"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(-123.99192 123.99192) rotate(-69.587 1.015 2.898)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#e040fb" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#e040fb" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#212121" stopOpacity="1"></stop>
        </linearGradient>
        <clipPath id="clipPath3564" clipPathUnits="userSpaceOnUse">
          <path d="M248.981 356.754h37.649v-24.955h-37.649z"></path>
        </clipPath>
        <clipPath id="clipPath3580" clipPathUnits="userSpaceOnUse">
          <path d="M200.778 384.557h34.129v-74.123h-34.129z"></path>
        </clipPath>
        <clipPath id="clipPath3596" clipPathUnits="userSpaceOnUse">
          <path d="M241.432 348.597h45.164v-68.029h-45.164z"></path>
        </clipPath>
        <clipPath id="clipPath3612" clipPathUnits="userSpaceOnUse">
          <path d="M200.718 322.056h84.578v-62.134h-84.578z"></path>
        </clipPath>
        <clipPath id="clipPath3628" clipPathUnits="userSpaceOnUse">
          <path d="M241.578 361.02h4.507v-5.799h-4.507z"></path>
        </clipPath>
        <clipPath id="clipPath3644" clipPathUnits="userSpaceOnUse">
          <path d="M307.539 321.377h69.131v-63.558h-69.131z"></path>
        </clipPath>
        <clipPath id="clipPath3648" clipPathUnits="userSpaceOnUse">
          <path d="M307.539 321.377h69.131v-63.558h-69.131z"></path>
        </clipPath>
        <clipPath id="clipPath3652" clipPathUnits="userSpaceOnUse">
          <path d="M307.539 321.377h69.131v-63.558h-69.131z"></path>
        </clipPath>
        <clipPath id="clipPath3656" clipPathUnits="userSpaceOnUse">
          <path d="M307.539 319.095h33.373v-40.63h-33.373z"></path>
        </clipPath>
        <clipPath id="clipPath3660" clipPathUnits="userSpaceOnUse">
          <path d="M307.539 321.377h30.132V278.47h-30.132z"></path>
        </clipPath>
        <clipPath id="clipPath3664" clipPathUnits="userSpaceOnUse">
          <path d="M348.17 298.45h28.5v-28.808h-28.5z"></path>
        </clipPath>
        <clipPath id="clipPath3668" clipPathUnits="userSpaceOnUse">
          <path d="M343.298 300.729h33.372v-42.91h-33.372z"></path>
        </clipPath>
        <clipPath id="clipPath3744" clipPathUnits="userSpaceOnUse">
          <path d="M195.026 294.498h40.041v-48.434h-40.041z"></path>
        </clipPath>
        <clipPath id="clipPath3748" clipPathUnits="userSpaceOnUse">
          <path d="M195.093 294.498h3.043v-3.913h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath3752" clipPathUnits="userSpaceOnUse">
          <path d="M195.071 286.607h3.042v-3.913h-3.042z"></path>
        </clipPath>
        <clipPath id="clipPath3756" clipPathUnits="userSpaceOnUse">
          <path d="M195.048 278.716h3.043v-3.913h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath3760" clipPathUnits="userSpaceOnUse">
          <path d="M195.026 270.835h3.043v-3.914h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath3764" clipPathUnits="userSpaceOnUse">
          <path d="M202.176 289.938h32.891V269.73h-32.891z"></path>
        </clipPath>
        <clipPath id="clipPath3768" clipPathUnits="userSpaceOnUse">
          <path d="M202.154 282.054h32.89v-20.215h-32.89z"></path>
        </clipPath>
        <clipPath id="clipPath3772" clipPathUnits="userSpaceOnUse">
          <path d="M202.132 274.165h32.89v-20.21h-32.89z"></path>
        </clipPath>
        <clipPath id="clipPath3776" clipPathUnits="userSpaceOnUse">
          <path d="M202.109 266.274H235v-20.21h-32.891z"></path>
        </clipPath>
        <clipPath id="clipPath3884" clipPathUnits="userSpaceOnUse">
          <path d="M242.986 259.82h49.616v-46.849h-49.616z"></path>
        </clipPath>
        <clipPath id="clipPath3888" clipPathUnits="userSpaceOnUse">
          <path d="M242.986 249.406h1.873v-8.881h-1.873z"></path>
        </clipPath>
        <clipPath id="clipPath3892" clipPathUnits="userSpaceOnUse">
          <path d="M247.767 253.022h1.882V237.77h-1.882z"></path>
        </clipPath>
        <clipPath id="clipPath3896" clipPathUnits="userSpaceOnUse">
          <path d="M252.539 259.82h1.909v-24.805h-1.909z"></path>
        </clipPath>
        <clipPath id="clipPath3900" clipPathUnits="userSpaceOnUse">
          <path d="M257.311 253.167h1.898V232.26h-1.898z"></path>
        </clipPath>
        <clipPath id="clipPath3904" clipPathUnits="userSpaceOnUse">
          <path d="M262.083 254.413h1.91v-24.909h-1.91z"></path>
        </clipPath>
        <clipPath id="clipPath3908" clipPathUnits="userSpaceOnUse">
          <path d="M266.855 246.24h1.895v-19.491h-1.895z"></path>
        </clipPath>
        <clipPath id="clipPath3912" clipPathUnits="userSpaceOnUse">
          <path d="M271.628 242.425h1.891v-18.431h-1.891z"></path>
        </clipPath>
        <clipPath id="clipPath3916" clipPathUnits="userSpaceOnUse">
          <path d="M276.4 232.237h1.87v-10.998h-1.87z"></path>
        </clipPath>
        <clipPath id="clipPath3920" clipPathUnits="userSpaceOnUse">
          <path d="M281.172 234.793h1.885v-16.312h-1.885z"></path>
        </clipPath>
        <clipPath id="clipPath3924" clipPathUnits="userSpaceOnUse">
          <path d="M285.944 237.342h1.901v-21.616h-1.901z"></path>
        </clipPath>
        <clipPath id="clipPath3928" clipPathUnits="userSpaceOnUse">
          <path d="M290.717 229.283h1.885v-16.312h-1.885z"></path>
        </clipPath>
        <clipPath id="clipPath4072" clipPathUnits="userSpaceOnUse">
          <path d="M299.898 276.911h83.767V160.812h-83.767z"></path>
        </clipPath>
        <clipPath id="clipPath4076" clipPathUnits="userSpaceOnUse">
          <path d="M299.898 276.911h83.767V160.812h-83.767z"></path>
        </clipPath>
        <clipPath id="clipPath4080" clipPathUnits="userSpaceOnUse">
          <path d="M299.898 276.911h83.767V160.812h-83.767z"></path>
        </clipPath>
        <clipPath id="clipPath4084" clipPathUnits="userSpaceOnUse">
          <path d="M299.898 276.911h83.767V160.812h-83.767z"></path>
        </clipPath>
        <clipPath id="clipPath4088" clipPathUnits="userSpaceOnUse">
          <path d="M380.018 232.379l-76.264 44.031c-2.02 1.167-3.672.226-3.678-2.086l-.178-62.651c-.007-2.322 1.634-5.164 3.654-6.33l76.265-44.031c2.02-1.167 3.663-.221 3.67 2.1l.178 62.651c.006 2.313-1.626 5.15-3.647 6.316"></path>
        </clipPath>
        <linearGradient
          id="linearGradient4100"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(0 -85.66846 -85.66846 0 341.781 256.409)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#fff" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#fff" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <mask id="mask4102" width="1" height="1" x="0" y="0" maskUnits="userSpaceOnUse">
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill="url(#linearGradient4100)"
                    stroke="none"
                    d="M-32768 32767h65535v-65535h-65535z"></path>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <linearGradient
          id="linearGradient4120"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(0 -85.66846 -85.66846 0 341.781 256.409)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#e040fb" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#e040fb" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#212121" stopOpacity="1"></stop>
        </linearGradient>
        <clipPath id="clipPath4170" clipPathUnits="userSpaceOnUse">
          <path d="M302.546 259.693h78.445V178.03h-78.445z"></path>
        </clipPath>
        <clipPath id="clipPath4174" clipPathUnits="userSpaceOnUse">
          <path d="M302.546 259.693h78.445V178.03h-78.445z"></path>
        </clipPath>
        <clipPath id="clipPath4178" clipPathUnits="userSpaceOnUse">
          <path d="M304.511 238.159h74.443v-58.595h-74.443z"></path>
        </clipPath>
        <clipPath id="clipPath4230" clipPathUnits="userSpaceOnUse">
          <path d="M167.491 427.488h238.807V116.405H167.491z"></path>
        </clipPath>
        <clipPath id="clipPath4234" clipPathUnits="userSpaceOnUse">
          <path d="M167.491 427.488h238.807V116.405H167.491z"></path>
        </clipPath>
        <linearGradient
          id="linearGradient4250"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(178.49998 -86 -86 -178.49998 191.277 318.015)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad">
          <stop offset="0" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="0.015" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="0.513" stopColor="#4a148c" stopOpacity="1"></stop>
          <stop offset="0.954" stopColor="#6a1b9a" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#6a1b9a" stopOpacity="1"></stop>
        </linearGradient>
        <clipPath id="clipPath4280" clipPathUnits="userSpaceOnUse">
          <path d="M202.416 334.533h30.853v-20.45h-30.853z"></path>
        </clipPath>
        <clipPath id="clipPath4296" clipPathUnits="userSpaceOnUse">
          <path d="M202.416 342.024h30.853v-20.45h-30.853z"></path>
        </clipPath>
        <clipPath id="clipPath4312" clipPathUnits="userSpaceOnUse">
          <path d="M202.416 349.024h30.853v-20.45h-30.853z"></path>
        </clipPath>
        <clipPath id="clipPath4328" clipPathUnits="userSpaceOnUse">
          <path d="M202.416 356.096h30.853v-20.45h-30.853z"></path>
        </clipPath>
        <clipPath id="clipPath4344" clipPathUnits="userSpaceOnUse">
          <path d="M203.15 376.547h12.547v-10.035H203.15z"></path>
        </clipPath>
        <clipPath id="clipPath4360" clipPathUnits="userSpaceOnUse">
          <path d="M203.15 369.475h12.547v-10.036H203.15z"></path>
        </clipPath>
        <clipPath id="clipPath4376" clipPathUnits="userSpaceOnUse">
          <path d="M202.416 362.971h12.546v-10.035h-12.546z"></path>
        </clipPath>
        <clipPath id="clipPath4392" clipPathUnits="userSpaceOnUse">
          <path d="M220.322 369.081h11.956v-25.969h-11.956z"></path>
        </clipPath>
        <clipPath id="clipPath4408" clipPathUnits="userSpaceOnUse">
          <path d="M243.994 342.808h40.04v-48.433h-40.04z"></path>
        </clipPath>
        <clipPath id="clipPath4412" clipPathUnits="userSpaceOnUse">
          <path d="M244.061 342.808h3.043v-3.913h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath4416" clipPathUnits="userSpaceOnUse">
          <path d="M244.038 334.917h3.043v-3.913h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath4420" clipPathUnits="userSpaceOnUse">
          <path d="M244.016 327.026h3.043v-3.913h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath4424" clipPathUnits="userSpaceOnUse">
          <path d="M243.994 319.145h3.043v-3.914h-3.043z"></path>
        </clipPath>
        <clipPath id="clipPath4428" clipPathUnits="userSpaceOnUse">
          <path d="M251.144 338.248h32.89V318.04h-32.89z"></path>
        </clipPath>
        <clipPath id="clipPath4432" clipPathUnits="userSpaceOnUse">
          <path d="M251.122 330.365h32.89v-20.216h-32.89z"></path>
        </clipPath>
        <clipPath id="clipPath4436" clipPathUnits="userSpaceOnUse">
          <path d="M251.099 322.475h32.891v-20.21h-32.891z"></path>
        </clipPath>
        <clipPath id="clipPath4440" clipPathUnits="userSpaceOnUse">
          <path d="M251.077 314.584h32.89v-20.209h-32.89z"></path>
        </clipPath>
        <clipPath id="clipPath4548" clipPathUnits="userSpaceOnUse">
          <path d="M251.144 285.028h30.854v-20.451h-30.854z"></path>
        </clipPath>
        <clipPath id="clipPath4564" clipPathUnits="userSpaceOnUse">
          <path d="M251.729 290.793h30.853v-20.451h-30.853z"></path>
        </clipPath>
        <clipPath id="clipPath4580" clipPathUnits="userSpaceOnUse">
          <path d="M243.007 296.312h6.27v-13.618h-6.27z"></path>
        </clipPath>
        <clipPath id="clipPath4596" clipPathUnits="userSpaceOnUse">
          <path d="M235.067 301.184h6.27v-13.619h-6.27z"></path>
        </clipPath>
        <clipPath id="clipPath4612" clipPathUnits="userSpaceOnUse">
          <path d="M202.123 312.992h30.854v-20.45h-30.854z"></path>
        </clipPath>
        <clipPath id="clipPath4628" clipPathUnits="userSpaceOnUse">
          <path d="M202.708 318.757h30.854v-20.451h-30.854z"></path>
        </clipPath>
      </defs>
      <g transform="matrix(1.33333 0 0 -1.33333 0 600)">
        <g>
          <g clipPath="url(#clipPath18)">
            <g>
              <g>
                <g clipPath="url(#clipPath26)" opacity="0.6">
                  <g>
                    <g mask="url(#mask32)">
                      <g transform="matrix(413 0 0 271 11.53 0)">
                        <image
                          width="1"
                          height="1"
                          imageRendering="optimizeSpeed"
                          mask="url(#mask44)"
                          preserveAspectRatio="none"
                          transform="matrix(1 0 0 -1 0 1)"
                          xlinkHref="data:image/png;base64,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"></image>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath68)">
            <g transform="translate(195.105 251.208)">
              <path
                fill="#250a46"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-5.115 3.183-8.558 9.122-8.77 15.131-.001-.501 1.035-1.507 2.669-2.451-.011-3.352 2.358-7.454 5.276-9.137C-.83 1.668-.484.28 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath80)">
            <g transform="translate(189.415 408.555)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.41-144.667c-1.635.944-2.671 1.95-2.669 2.514l.041 14.467.041 14.467.041 14.467.041 14.466.041 14.467.041 14.466.041 14.467.041 14.467.041 14.467.021 7.233.02 7.234C-2.671 1.95-1.635.944 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath92)">
            <g transform="translate(189.872 417.341)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.827.417 3.024 1.522 6.781-.618a.362.362 0 01-.386-.008C3.897.816 1.634.95 0 0"></path>
            </g>
            <g transform="translate(196.326 416.745)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a5.332 5.332 0 01-.346.13c-2.383 1.291-4.537 1.38-6.108.466l.503.254c.19.068.442.167.637.222l.569.12c.21.021.491.055.702.062l.625-.016c.226-.028.527-.059.751-.1l.669-.157c.234-.076.55-.172.78-.259L-.514.42C-.261.289.079.119.327-.021A.356.356 0 010 0"></path>
            </g>
            <g transform="translate(196.376 416.762)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.403.191-.494.219-.764.304-2.237 1.106-4.25 1.141-5.74.275l.503.254c.19.068.442.167.637.222l.569.12c.21.021.491.055.702.062l.625-.016c.226-.028.528-.059.751-.1l.669-.157c.235-.076.55-.172.78-.259l.705-.302c.252-.131.592-.301.84-.442A.352.352 0 010 0"></path>
            </g>
            <g transform="translate(196.416 416.771)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.426.211-.708.351-1.166.466-2.092.937-3.969.924-5.378.104l.503.254c.19.069.442.167.637.222l.569.121c.21.02.491.054.702.062l.625-.017c.226-.028.528-.059.751-.1l.669-.157c.234-.076.55-.172.78-.259l.704-.302c.253-.131.593-.301.841-.441A.357.357 0 010 0"></path>
            </g>
            <g transform="translate(196.454 416.775)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.701.359-1.154.538-1.564.615-1.948.78-3.691.723-5.018-.049.15.077.352.178.503.254.19.069.442.167.637.222l.569.121c.21.021.491.054.702.062l.625-.017c.226-.028.527-.059.751-.1l.669-.157c.234-.076.55-.172.78-.259L-.642.39c.253-.131.593-.301.841-.441A.361.361 0 010 0"></path>
            </g>
            <g transform="translate(196.49 416.774)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.587.309-1.278.64-1.961.751-1.802.634-3.412.54-4.657-.184.15.076.351.178.503.253.19.069.442.167.636.222l.57.121c.21.021.491.055.702.062l.625-.016c.226-.028.527-.06.751-.1l.669-.157c.234-.077.55-.173.78-.26l.704-.301C-.425.26-.085.09.163-.051A.37.37 0 010 0"></path>
            </g>
            <g transform="translate(196.526 416.77)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.971.523-1.721.8-2.36.874-1.655.5-3.133.372-4.294-.303.15.076.351.178.503.253.19.069.442.167.636.222l.57.121c.21.021.491.055.702.062l.625-.016c.225-.028.527-.06.751-.1l.669-.157c.234-.077.55-.173.78-.26l.704-.301c.253-.131.593-.301.841-.442A.37.37 0 010 0"></path>
            </g>
            <g transform="translate(196.563 416.762)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.103.605-2.033.936-2.765.984-1.506.376-2.852.22-3.926-.404l.503.253c.19.069.442.167.636.222l.57.121c.21.021.491.054.702.062l.625-.016c.225-.029.527-.06.751-.1l.669-.158c.234-.076.549-.172.78-.259l.704-.302c.253-.131.593-.3.841-.441A.368.368 0 010 0"></path>
            </g>
            <g transform="translate(196.603 416.748)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.665.924-2.707 1.074-3.18 1.081-1.354.263-2.567.085-3.551-.488l.502.254c.191.069.443.167.637.222l.57.12c.21.021.491.055.702.062l.625-.016c.225-.028.527-.059.751-.1l.669-.157c.234-.076.549-.172.78-.259l.704-.302C-.538.286-.198.116.05-.024A.569.569 0 010 0"></path>
            </g>
            <g transform="translate(196.648 416.727)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.436.799-2.65 1.191-3.61 1.166-1.2.162-2.277-.034-3.166-.551l.503.253c.19.069.442.167.636.222l.57.121c.21.021.491.055.702.062l.625-.016c.225-.028.527-.06.751-.1L-2.32 1c.234-.077.549-.173.78-.26l.704-.302c.253-.13.593-.3.841-.441A.022.022 0 000 0"></path>
            </g>
            <g transform="translate(194.781 417.585)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.308.427-1.937.368-2.145.349C-3.184.421-4.12.215-4.909-.244c.15.077.351.178.503.254.19.069.442.167.636.222l.57.121c.21.021.491.054.702.062l.625-.017c.226-.028.527-.059.751-.1l.669-.157.592-.189L0 0"></path>
            </g>
            <g transform="translate(193.598 417.894)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.598.099-1 .114-1.387.054-.87-.004-1.659-.212-2.34-.607l.503.253c.191.069.443.167.637.222l.569.121c.21.021.492.055.703.062L-.69.089c.221-.028.518-.058.738-.098L0 0"></path>
            </g>
            <g transform="translate(192.57 418)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a3.187 3.187 0 01-.816-.073 4.51 4.51 0 01-1.881-.586l.503.254c.19.069.442.167.636.222l.57.121c.21.02.491.054.702.062l.348-.001L0 0"></path>
            </g>
            <g transform="translate(191.672 417.95)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.207-.035-.256-.043-.428-.097A4.406 4.406 0 01-1.8-.609l.503.253c.191.069.443.167.637.222l.569.121.152.021L0 0"></path>
            </g>
            <g transform="translate(190.712 417.724)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.097-.04A4.348 4.348 0 01-.84-.382l.503.253.435.163L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath160)">
            <g transform="translate(189.565 417.164)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178c.23.134.472.246.727.337L.728.336A4.218 4.218 0 010 0"></path>
            </g>
            <g transform="translate(190.293 417.5)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178c.202.072.411.13.628.173L.629.173A4.484 4.484 0 010 0"></path>
            </g>
            <g transform="translate(190.922 417.673)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.177c.169.034.341.059.517.075L.518.075A4.783 4.783 0 010 0"></path>
            </g>
            <g transform="translate(191.44 417.748)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.459.192.614.199.771.2L.466.022A5.47 5.47 0 010 0"></path>
            </g>
            <g transform="translate(191.905 417.77)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.444.179.586.174.729.164L.423-.014C.279-.004.139.001 0 0"></path>
            </g>
            <g transform="translate(192.328 417.756)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.437.168.57.155.705.137L.399-.041A6.204 6.204 0 010 0"></path>
            </g>
            <g transform="translate(192.727 417.715)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.436.161.566.139.699.113L.394-.064A7.163 7.163 0 010 0"></path>
            </g>
            <g transform="translate(193.12 417.65)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178A8.74 8.74 0 00.674.096L.368-.082A7.668 7.668 0 010 0"></path>
            </g>
            <g transform="translate(193.489 417.569)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.429.147.553.113.678.075L.371-.103A7.63 7.63 0 010 0"></path>
            </g>
            <g transform="translate(193.86 417.466)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178A7.9 7.9 0 00.666.06L.36-.118A7.936 7.936 0 010 0"></path>
            </g>
            <g transform="translate(194.22 417.349)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.426.135.547.09.669.042L.362-.136A9.468 9.468 0 010 0"></path>
            </g>
            <g transform="translate(194.583 417.212)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178C.426.13.545.079.666.025L.359-.153A9.9 9.9 0 010 0"></path>
            </g>
            <g transform="translate(194.942 417.06)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178C.427.124.548.067.67.006L.364-.171C.242-.111.121-.054 0 0"></path>
            </g>
            <g transform="translate(195.306 416.888)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.428.117.551.054.674-.013L.368-.191C.245-.124.122-.061 0 0"></path>
            </g>
            <g transform="translate(195.674 416.697)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.401.126.496.073.592.018L.286-.16A9.238 9.238 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath228)">
            <g transform="translate(186.746 411.07)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.046 1.238.167 4.528 2.819 6.094 1.635.95 3.898.816 6.396-.626-.676-.392-1.23-2.613-1.236-4.957-2.918 1.688-5.302.329-5.31-3.026C1.034-1.57-.002-.564 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.572.914 3.724.825 6.108-.466H.858c-.004-.061-.006-.076.223-.284C.478 4.219.007 2.163 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.49.866 3.504.831 5.741-.275l-.086-.006c-.003-.014-.013-.033-.009-.047.003-.012.043-.09.539-.482C.449 4.093.006 2.096 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.409.819 3.286.833 5.378-.104l-.086-.007c.063-.156.063-.156.846-.757C.426 3.985.006 2.04 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.328.772 3.071.828 5.018.048l-.088-.008C-.23 5.535-.23 5.535.936 4.654.403 3.881.006 1.985 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.246.724 2.856.818 4.658.184l-.089-.011c.011-.072.011-.072 1.481-1.17C.382 3.774.006 1.929 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.161.675 2.64.803 4.295.303l-.09-.013c-.01-.01-.031-.02-.033-.034-.007-.048.139-.153.227-.215.53-.38 1.081-.728 1.605-1.115C.359 3.662.006 1.871 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351 1.075.625 2.421.781 3.928.404a2.523 2.523 0 01-.092-.015c-.011-.01-.034-.018-.038-.033-.012-.046.107-.131.172-.176C-.538 5.299.16 4.906.796 4.419.335 3.54.006 1.807 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.985.572 2.198.751 3.553.488l-.093-.018c-.013-.01-.037-.016-.043-.032-.029-.069.195-.203.478-.373A19.14 19.14 0 00.74 4.309C.31 3.4.005 1.734 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.89.518 1.968.713 3.167.551l-.094-.02c-.015-.01-.044-.014-.049-.031-.022-.073.053-.128.621-.454A17.576 17.576 0 00.68 4.172C.28 3.239.005 1.65 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.79.459 1.726.665 2.765.593l-.095-.024c-.017-.01-.046-.015-.055-.032-.023-.051-.042-.091.418-.342.647-.353 1.533-.836 2.733-1.783C.248 3.045.005 1.55 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.68.396 1.471.603 2.341.606l-.098-.027c-.018-.01-.047-.016-.059-.033a.109.109 0 01-.012-.079c.017-.06.21-.163.675-.412C-1.067 4.973-.261 4.367.522 3.753.21 2.803.005 1.424 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351a4.512 4.512 0 001.882.585c-.064-.021-.183-.061-.196-.105-.025-.083.03-.138.461-.37.651-.349 1.862-.997 3.43-2.29C.165 2.48.004 1.258 0 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.419.243.879.416 1.373.513-.417-.16-.3-.273.34-.648C-2.049 4.629-.794 3.756.285 2.852A14.432 14.432 0 010 0"></path>
            </g>
            <g transform="translate(194.724 411.58)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.918 1.687-5.302.329-5.31-3.026-1.634.944-2.67 1.95-2.669 2.515l.03.807c.028.253.057.593.096.845l.141.709c.066.226.146.53.222.753l.245.605c.1.193.229.454.342.641l.341.494c.134.156.309.367.455.513l.427.376c.156.106.359.255.521.351.235.137.483.251.744.342l-.101-.048c-.303-.185-.346-.348.204-.825C-2.931 3.854-1.324 2.968.119 1.856A15.318 15.318 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath296)">
            <g transform="translate(194.28 254.75)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.867-109.62c-.006-1.875.34-3.262.825-3.543l-9.494 5.482-9.493 5.48-9.493 5.482-9.493 5.48-9.493 5.482-9.495 5.48-9.493 5.482-9.493 5.48-9.493 5.482-9.493 5.48-9.493 5.481-9.494 5.481-9.494 5.481-9.493 5.482-9.493 5.48-9.493 5.482-9.493 5.48-9.494 5.482-9.494 5.48L.825-3.543C.341-3.263-.005-1.875 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath308)">
            <g transform="translate(394.88 147.242)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.046-1.238-.168-4.528-2.82-6.095C-1.207-5.157-.207-3.163-.198-.33c.134.078.197.19.198.33"></path>
            </g>
            <g transform="translate(394.681 146.887)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.136.107.197.219.198.355l-.03-.806C.141-.705.11-1.045.072-1.297l-.141-.709c-.065-.225-.145-.529-.222-.752l-.244-.605c-.102-.194-.231-.454-.343-.642l-.341-.494c-.135-.155-.309-.367-.454-.514l-.429-.375c-.155-.106-.358-.256-.52-.351C-1.014-4.804-.015-2.819 0 0"></path>
            </g>
            <g transform="translate(394.67 146.456)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.025.173.075.342.093.517a.35.35 0 01.116.269C.2.544.187.222.179-.021.151-.274.121-.614.083-.866l-.142-.709c-.064-.226-.144-.529-.221-.752l-.244-.606c-.102-.193-.231-.454-.343-.641l-.341-.494c-.135-.156-.31-.368-.454-.514l-.429-.375c-.155-.106-.358-.256-.52-.352C-1.086-4.422-.108-2.592 0 0"></path>
            </g>
            <g transform="translate(394.644 146.028)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-.001C.077.26.113.4.16.988c.051.064.075.14.075.226C.196.163.195.122.109-.438l-.141-.709c-.065-.226-.145-.53-.222-.752l-.244-.606c-.102-.193-.231-.454-.343-.641l-.341-.495c-.134-.155-.309-.367-.454-.513l-.428-.375c-.156-.107-.359-.256-.521-.352C-1.146-4.044-.193-2.366 0 0"></path>
            </g>
            <g transform="translate(394.6 145.6)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.19.811.19.811.233 1.461a.357.357 0 01.046.182C.271 1.4.258 1.078.249.836.222.582.191.242.153-.01L.012-.719c-.065-.225-.145-.529-.222-.752l-.244-.605c-.102-.194-.231-.454-.343-.642l-.341-.494c-.134-.155-.309-.367-.454-.514l-.429-.375c-.155-.106-.358-.255-.52-.351C-1.189-3.666-.269-2.14 0 0"></path>
            </g>
            <g transform="translate(394.536 145.168)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.238.828.287 1 .32 1.94a.367.367 0 01.024.134l-.031-.806C.286 1.014.256.674.218.422L.076-.287c-.064-.226-.144-.529-.222-.752l-.244-.606c-.101-.193-.23-.454-.342-.641l-.341-.494c-.135-.156-.31-.367-.454-.514l-.429-.375c-.155-.106-.358-.256-.521-.352C-1.218-3.289-.332-1.914 0 0"></path>
            </g>
            <g transform="translate(394.448 144.728)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.245.708.38 1.098.424 2.435a.4.4 0 01.008.079l-.031-.807C.374 1.453.344 1.113.306.861L.164.152C.1-.073.02-.377-.058-.6l-.244-.605c-.101-.193-.23-.454-.343-.642l-.34-.494c-.135-.155-.31-.367-.454-.513l-.429-.375c-.155-.107-.359-.256-.521-.352C-1.229-2.906-.385-1.686 0 0"></path>
            </g>
            <g transform="translate(394.33 144.275)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.159.289.529 1.154.55 2.956v.011C.511 1.916.51 1.875.424 1.314L.282.605C.218.38.138.076.061-.146l-.245-.606c-.101-.193-.23-.454-.342-.642l-.341-.494c-.135-.155-.31-.367-.454-.513l-.429-.375c-.155-.107-.358-.256-.521-.352C-1.217-2.516-.425-1.453 0 0"></path>
            </g>
            <g transform="translate(394.173 143.799)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.269.537.463.926.611 2.002-.041-.278-.117-.645-.172-.92C.375.856.295.553.218.33l-.244-.605c-.102-.194-.231-.454-.343-.642l-.341-.494c-.135-.155-.31-.367-.454-.514l-.429-.375c-.155-.106-.358-.256-.52-.351C-1.179-2.107-.449-1.21 0 0"></path>
            </g>
            <g transform="translate(393.956 143.284)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.294.478.355.577.544 1.179C.45.893.303.519.19.239.089.046-.04-.215-.152-.402l-.341-.494c-.135-.156-.31-.368-.454-.514l-.429-.375c-.155-.107-.358-.256-.52-.352C-1.1-1.673-.452-.952 0 0"></path>
            </g>
            <g transform="translate(393.62 142.675)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.267.345.267.345.403.599a12.356 12.356 0 00-.561-.886c-.135-.155-.31-.367-.454-.514l-.429-.375c-.155-.106-.358-.256-.521-.351A4.58 4.58 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath360)">
            <g transform="translate(394.375 146.734)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178V.152L0-.025z"></path>
            </g>
            <g transform="translate(394.375 146.709)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178a12.316 12.316 0 00-.011-.435L-.01-.435C-.004-.292 0-.147 0 0"></path>
            </g>
            <g transform="translate(394.365 146.274)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a9.543 9.543 0 00-.027-.424l-.305-.178c.011.139.02.28.026.424"></path>
            </g>
            <g transform="translate(394.339 145.85)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a9.59 9.59 0 00-.045-.433l-.306-.178c.018.142.033.286.045.433"></path>
            </g>
            <g transform="translate(394.294 145.418)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a8.07 8.07 0 00-.064-.43L-.063-.43c.023.141.044.284.063.43"></path>
            </g>
            <g transform="translate(394.23 144.988)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a8.996 8.996 0 00-.089-.44l-.306-.177C-.056-.297-.026-.15 0 0"></path>
            </g>
            <g transform="translate(394.141 144.549)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a7.494 7.494 0 00-.119-.459l-.306-.178c.044.148.083.302.119.459"></path>
            </g>
            <g transform="translate(394.022 144.09)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a7.113 7.113 0 00-.158-.474l-.305-.178C-.101-.32-.048-.163 0 0"></path>
            </g>
            <g transform="translate(393.865 143.616)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a6.583 6.583 0 00-.215-.511l-.307-.178c.078.163.15.334.216.511"></path>
            </g>
            <g transform="translate(393.65 143.106)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178a5.833 5.833 0 00-.34-.615l-.306-.178c.123.193.236.398.339.615"></path>
            </g>
            <g transform="translate(393.31 142.49)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178a4.575 4.575 0 00-1.557-1.521l-.306-.178A4.575 4.575 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath412)">
            <g transform="translate(391.754 140.97)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.827-.416-3.024-1.521-6.781.618-.486.28-.831 1.668-.825 3.543 2.918-1.687 5.301-.329 5.309 3.026 2.04-1.178 4.243-1.815 4.918-1.422C2.613 2.932 1.613.937 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.92-1.109 3.987-1.738 4.785-1.479l.04-.065.093.097c-.014-2.82-1.013-4.805-2.622-5.739l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.821-1.05 3.772-1.671 4.65-1.512l.009-.041c.037-.145.106-.412.154-.416.04-.003.066.064.095.091-.109-2.591-1.086-4.421-2.612-5.308l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.747-1.008 3.613-1.62 4.538-1.528.096-.498.167-.856.247-.876.04-.009.075.063.096.099-.193-2.366-1.145-4.044-2.585-4.881l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.674-.966 3.459-1.568 4.418-1.536.011-.067.028-.156.04-.223.127-.712.191-1.07.279-1.079.043-.004.077.068.1.104-.268-2.14-1.189-3.667-2.541-4.452l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.596-.921 3.293-1.511 4.278-1.537l.032-.176c.259-1.509.259-1.509.314-1.54.025-.013.07-.007.094.007.026.015.038.057.055.08-.332-1.914-1.218-3.289-2.477-4.02l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.506-.869 3.101-1.444 4.105-1.527.41-2.178.41-2.178.425-2.183.053-.019.123.06.155.106-.385-1.687-1.228-2.907-2.389-3.582l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.395-.805 2.868-1.358 3.875-1.501l.013-.065c.502-2.612.502-2.612.516-2.614.06-.011.126.073.163.122-.425-1.453-1.217-2.516-2.271-3.128l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.249-.72 2.558-1.239 3.542-1.442.016-.079.04-.185.057-.263.14-.686.21-1.031.341-1.875.106-.686.159-1.03.251-1.075.086-.042.13.013.219.12-.45-1.21-1.179-2.107-2.114-2.651-.652-.328-.691-.348-1.139-.475l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025 1.033-.595 2.107-1.053 3.004-1.309.285-1.192.388-2.421.76-3.594.129-.403.232-.373.429-.146-.452-.953-1.1-1.673-1.897-2.137-.652-.328-.691-.348-1.139-.475l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
            <g transform="translate(384.147 145.13)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.918-1.687 5.302-.329 5.31 3.025a15.225 15.225 0 011.985-.961l.044-.192C8.37-2.89 8.645-3.138 9.167-2.634a4.56 4.56 0 00-1.561-1.527l-.503-.253c-.19-.068-.442-.167-.636-.222l-.57-.121c-.21-.02-.491-.055-.703-.062l-.624.016c-.225.029-.527.06-.751.1l-.669.157c-.235.077-.549.173-.78.26l-.705.302c-.253.13-.593.3-.84.441C.34-3.263-.006-1.875 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath464)">
            <g transform="translate(394.681 146.912)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667.005.003L.005.003A.022.022 0 010 0"></path>
            </g>
            <g transform="translate(394.686 146.915)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667a.579.579 0 01.076.057l-.02-7.234-.021-7.233-.02-7.234-.021-7.232-.02-7.234-.021-7.234-.02-7.233-.021-7.234-.02-7.233-.021-7.232-.02-7.234-.021-7.233-.02-7.234-.021-7.233-.02-7.233-.021-7.234-.02-7.233-.021-7.234-.02-7.233L.076.057A.502.502 0 000 0"></path>
            </g>
            <g transform="translate(394.762 146.972)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233.021 7.234.02 7.233.021 7.232.02 7.234.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233a.335.335 0 01.041.044L.041.044A.282.282 0 000 0"></path>
            </g>
            <g transform="translate(394.803 147.016)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.012.015.022.03.03.045l-.02-7.233-.021-7.233-.02-7.234-.021-7.233-.02-7.234-.021-7.232-.02-7.234-.021-7.233-.02-7.234-.021-7.233-.02-7.233-.021-7.234-.02-7.233-.021-7.234-.02-7.233-.021-7.233-.02-7.234-.021-7.233-.02-7.234L.03.045A.32.32 0 000 0"></path>
            </g>
            <g transform="translate(394.834 147.06)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233.021 7.234.02 7.233.021 7.233.02 7.234.021 7.233.02 7.234.021 7.232.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233a.312.312 0 01.023.049L.022.049A.194.194 0 000 0"></path>
            </g>
            <g transform="translate(394.856 147.11)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667a.358.358 0 01.016.056l-.021-7.234-.02-7.233-.021-7.234-.02-7.233-.021-7.233-.02-7.234-.021-7.233-.02-7.234-.021-7.233-.02-7.233L.2 65.155l-.02-7.233-.021-7.234-.02-7.233-.021-7.233-.02-7.234-.021-7.233-.02-7.234-.021-7.232L.016.056A.258.258 0 000 0"></path>
            </g>
            <g transform="translate(394.872 147.165)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.021 7.233.02 7.233.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233.021 7.234.02 7.233.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233.021 7.234.02 7.233a.361.361 0 01.008.067l-.021-7.233-.02-7.233-.021-7.234-.02-7.233-.021-7.233-.02-7.234-.021-7.233-.02-7.234-.021-7.233-.02-7.234-.021-7.233-.02-7.233-.021-7.233-.02-7.233-.021-7.234-.02-7.233-.021-7.233-.02-7.234-.021-7.233L.008.067A.361.361 0 000 0"></path>
            </g>
            <g transform="translate(394.88 147.232)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.232.021 7.234.02 7.233.021 7.233.02 7.234.021 7.233.02 7.234.021 7.233.02 7.233.021 7.234.02 7.233.021 7.234.02 7.233v.01L.369 130.21l-.041-14.466-.041-14.467-.041-14.466-.041-14.467-.041-14.467L.123 43.41.082 28.943.041 14.477 0 .01z"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath504)">
            <g transform="translate(386.132 307.096)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62a.785.785 0 00.05.026L.051.026C.034.019.018.01 0 0"></path>
            </g>
            <g transform="translate(386.183 307.122)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62.059.021L.059.021C.039.016.02.008 0 0"></path>
            </g>
            <g transform="translate(386.242 307.143)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62a.424.424 0 00.038.008L.039.008 0 0"></path>
            </g>
            <g transform="translate(386.281 307.15)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62a.515.515 0 00.039.004L.038.004A.49.49 0 010 0"></path>
            </g>
            <g transform="translate(386.32 307.155)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62.037-.001L.038 0H0"></path>
            </g>
            <g transform="translate(386.357 307.155)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62a.465.465 0 00.037-.004L.036-.004A.22.22 0 010 0"></path>
            </g>
            <g transform="translate(386.393 307.15)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62.036-.009L.037-.009A.25.25 0 010 0"></path>
            </g>
            <g transform="translate(386.43 307.142)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62a.285.285 0 00.043-.016L.042-.015A.352.352 0 010 0"></path>
            </g>
            <g transform="translate(386.472 307.127)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.619c.013-.005.027-.013.042-.02L.042-.021A.33.33 0 010 0"></path>
            </g>
            <g transform="translate(386.514 307.107)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62c.001-.002.003-.002.005-.003l9.493-5.482 9.493-5.48 9.493-5.482 9.493-5.481 9.494-5.481 9.494-5.481 9.493-5.48 9.493-5.481 9.493-5.481 9.494-5.481 9.493-5.481 9.494-5.481 9.493-5.481 9.493-5.481 9.494-5.481 9.493-5.481 9.493-5.481 9.494-5.481 9.493-5.481L.005-.003A.022.022 0 010 0"></path>
            </g>
          </g>
        </g>
        <g transform="translate(394.786 291.402)">
          <path
            fill="#390f6c"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0l-.411-144.668.307.178L.306.177z"></path>
        </g>
        <g transform="translate(195.96 416.538)">
          <path
            fill="#401179"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0l.306.178 189.866-109.62-.306-.178z"></path>
        </g>
        <g>
          <g clipPath="url(#clipPath560)">
            <g transform="translate(384.591 301.96)">
              <path
                fill="#280b4b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.919-1.682 5.287-5.785 5.275-9.137l-.41-144.668c-.008-3.354-2.391-4.713-5.309-3.025L-190.312-47.21c-2.917 1.682-5.287 5.784-5.275 9.136l.41 144.668c.008 3.355 2.392 4.713 5.31 3.026L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath572)">
            <g transform="translate(389.457 148.156)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.668a14.873 14.873 0 011.982-.96L1.981-.959C1.342-.708.662-.382 0 0"></path>
            </g>
            <g transform="translate(391.438 147.197)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.357-.141.7-.258 1.022-.35L1.021-.35C.7-.259.356-.141 0 0"></path>
            </g>
            <g transform="translate(392.46 146.848)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.187-.053.366-.098.535-.133L.535-.133A7.183 7.183 0 000 0"></path>
            </g>
            <g transform="translate(392.995 146.715)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.115-.024.227-.043.332-.059L.332-.06A6.223 6.223 0 000 0"></path>
            </g>
            <g transform="translate(393.327 146.655)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.668a3.48 3.48 0 01.233-.027L.232-.026A4.335 4.335 0 000 0"></path>
            </g>
            <g transform="translate(393.56 146.629)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.06-.004.117-.008.173-.009L.173-.01A3.62 3.62 0 000 0"></path>
            </g>
            <g transform="translate(393.732 146.62)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667.141.001L.141.001A2.188 2.188 0 000 0"></path>
            </g>
            <g transform="translate(393.873 146.62)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.043.001.084.004.123.008L.123.008A1.556 1.556 0 000 0"></path>
            </g>
            <g transform="translate(393.996 146.628)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.039.004.076.009.112.016L.112.016A1.207 1.207 0 000 0"></path>
            </g>
            <g transform="translate(394.108 146.644)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.667c.051.009.097.021.14.035L.14.034A1.249 1.249 0 000 0"></path>
            </g>
            <g transform="translate(394.248 146.678)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.41 144.668c.047.016.09.034.128.056L.127.057A.747.747 0 000 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath624)">
            <g transform="translate(384.591 301.96)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62c.002.637.045 1.265.119 1.85L.118 1.851A15.252 15.252 0 010 0"></path>
            </g>
            <g transform="translate(384.71 303.812)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.619c.044.35.099.685.165.997L.165.996A13.093 13.093 0 010 0"></path>
            </g>
            <g transform="translate(384.875 304.808)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62c.041.193.085.378.133.552L.133.552A9.545 9.545 0 010 0"></path>
            </g>
            <g transform="translate(385.007 305.36)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62c.033.122.068.239.104.351L.105.352A6.445 6.445 0 010 0"></path>
            </g>
            <g transform="translate(385.113 305.712)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62c.028.083.056.163.085.24L.085.24A5.117 5.117 0 010 0"></path>
            </g>
            <g transform="translate(385.198 305.952)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62c.023.062.048.122.072.18L.072.18A3.373 3.373 0 010 0"></path>
            </g>
            <g transform="translate(385.27 306.132)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62.06.134L.061.135C.04.092.02.046 0 0"></path>
            </g>
            <g transform="translate(385.33 306.267)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62a3.7 3.7 0 00.055.109L.054.109C.035.074.018.038 0 0"></path>
            </g>
            <g transform="translate(385.385 306.376)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62c.016.032.033.063.051.093L.052.094C.034.064.017.032 0 0"></path>
            </g>
            <g transform="translate(385.436 306.47)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62c.014.026.03.051.045.075L.045.076C.029.051.015.026 0 0"></path>
            </g>
            <g transform="translate(385.481 306.545)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.62c.015.024.03.047.046.069L.045.069A2.07 2.07 0 010 0"></path>
            </g>
            <g transform="translate(385.526 306.615)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62c.014.021.03.042.045.062L.046.063 0 0"></path>
            </g>
            <g transform="translate(385.572 306.678)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.867 109.619a.89.89 0 00.047.057L.046.057C.03.039.016.02 0 0"></path>
            </g>
            <g transform="translate(385.618 306.734)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62a.798.798 0 00.061.067L.062.067C.041.047.021.024 0 0"></path>
            </g>
            <g transform="translate(385.68 306.802)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.866 109.62a.725.725 0 00.147.116L.147.116A.785.785 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath692)">
            <g transform="translate(386.52 307.104)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c5.116-3.183 8.559-9.122 8.771-15.131-.001-.203-.065-.315-.199-.393C8.588-9.821 4.577-2.874-.387-.008A.366.366 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.008 2.886-1.015 6.09-2.671 8.923l-.249.423c-.15.237-.351.551-.509.783-1.522 2.254-3.441 4.182-5.53 5.387a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.007 2.629-.842 5.523-2.244 8.16l-.069.134c-.289.538-.829 1.538-1.656 2.598-1.425 1.924-3.141 3.557-4.99 4.624a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.007 2.456-.732 5.142-1.974 7.633a17.219 17.219 0 01-2.369 3.749c-1.347 1.711-2.927 3.159-4.616 4.134a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.006 2.305-.646 4.813-1.751 7.174l-.016.037c-1.012 2.257-2.148 3.747-2.922 4.599-1.269 1.524-2.723 2.813-4.27 3.706a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.006 2.165-.568 4.508-1.554 6.74l-.195.481c-.68 1.49-1.548 3.126-3.281 4.987-1.186 1.351-2.519 2.494-3.929 3.308a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.006 2.026-.497 4.21-1.37 6.312l-.132.358c-.621 1.507-1.699 3.76-3.88 5.928-1.095 1.181-2.305 2.184-3.577 2.918a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.005 1.888-.431 3.912-1.196 5.879l-.076.235c-1.267 3.449-3.132 5.638-4.475 6.867-.997 1.016-2.079 1.882-3.212 2.535a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.005 1.747-.368 3.611-1.03 5.438-.01.035-.024.081-.032.116-1.44 4.508-4.243 7.113-5.067 7.805-.89.853-1.841 1.586-2.83 2.157a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.004 1.603-.31 3.303-.872 4.983l-.001.006c-1.034 3.847-3.583 7.16-5.65 8.737a14.494 14.494 0 01-2.436 1.79.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.004 1.454-.254 2.988-.722 4.515l-.108.489c-1.39 4.8-4.484 7.96-6.094 9.071a14.034 14.034 0 01-2.035 1.441.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.003 1.303-.203 2.67-.583 4.04-.662 3.759-3.749 8.504-6.741 10.362-.53.418-1.076.792-1.635 1.114a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.003 1.151-.158 2.354-.458 3.563l-.042.325c-1.062 5.233-4.937 9.548-7.22 10.816-.405.297-.818.569-1.239.812a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a14.352 14.352 0 01-.348 3.09l-.018.232c-.438 4.1-4.346 9.984-7.743 11.658-.28.192-.563.371-.85.536a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.002.853-.085 1.733-.253 2.624l-.004.131c-.229 3.927-4.153 10.59-8.236 12.479-.154.098-.31.192-.466.282a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.002.707-.058 1.432-.174 2.166l.001.023C-.218 6.77-4.851 13.842-8.871 15.465l-.088.051a.363.363 0 00.387.008l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a13.44 13.44 0 01-.11 1.718c.137 4.197-3.973 11.549-8.789 13.828a.353.353 0 00.327-.022l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.001.419-.02.846-.061 1.276l.018.242c.01 4.5-3.754 11.462-8.807 14.045.097.026.19.012.278-.039l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.001.277-.008.558-.026.84L0 1.066c.128 4.563-3.458 11.643-8.809 14.506a.357.357 0 00.237-.048l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.091 291.58)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c0 .135-.002.271-.006.407l.025.149c.325 4.06-2.861 11.737-8.79 15.02a.354.354 0 00.199-.052l.718-.446c.225-.161.53-.369.75-.537l.681-.553c.206-.187.485-.431.686-.624l.635-.642c.187-.209.44-.482.622-.695l.581-.717c.167-.226.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.449-.819c.124-.251.294-.584.412-.838l.372-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.89l.188-.865c.044-.271.11-.631.145-.903l.083-.851C.178.964.198.602.198.33A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.098 291.584)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.666 3.259-2.221 11.859-8.742 15.571a.372.372 0 00.163-.05l.719-.447c.224-.161.529-.369.749-.537l.681-.553c.206-.187.485-.431.686-.624l.636-.642c.186-.209.439-.482.621-.695l.581-.717c.167-.225.393-.522.554-.752l.52-.775c.145-.24.345-.557.485-.8l.45-.819c.124-.251.293-.584.412-.838l.371-.849c.099-.26.238-.605.332-.868l.284-.864c.073-.267.177-.621.243-.889l.189-.866c.044-.271.109-.631.144-.903l.083-.851C.171.96.191.598.191.326A.365.365 0 000 0"></path>
            </g>
            <g transform="translate(395.174 291.64)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.367 4.801-3.074 12.179-8.781 15.511a.384.384 0 00.127-.047l.718-.447c.225-.161.53-.369.749-.537l.682-.552c.206-.187.484-.432.686-.624l.635-.643c.187-.208.44-.482.622-.695l.581-.716c.167-.226.393-.523.554-.752l.52-.776c.145-.24.344-.556.485-.799l.449-.82c.124-.251.294-.583.412-.837l.372-.849c.099-.261.238-.605.332-.868l.284-.865c.073-.267.177-.621.243-.889l.188-.866c.044-.271.11-.631.145-.903l.083-.851C.096.903.116.542.116.27A.353.353 0 000 0"></path>
            </g>
            <g transform="translate(395.215 291.684)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.263 4.774-3.021 12.042-8.784 15.458a.378.378 0 00.089-.038l.718-.447c.225-.16.53-.369.749-.536l.682-.553c.206-.187.484-.432.686-.624l.635-.643c.187-.208.44-.482.621-.695l.582-.716c.167-.226.393-.523.554-.752l.52-.776c.145-.24.344-.556.485-.799l.449-.82c.124-.251.294-.583.412-.837l.372-.849c.099-.261.238-.605.332-.868l.284-.865c.073-.266.177-.62.243-.889l.188-.866c.044-.271.11-.631.145-.903l.083-.851c.01-.272.03-.633.03-.905A.35.35 0 000 0"></path>
            </g>
            <g transform="translate(395.244 291.728)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.095 5.821-3.596 12.298-8.773 15.4l.767-.471c.225-.16.529-.368.749-.536l.682-.553c.206-.187.484-.432.685-.624l.636-.643c.187-.208.44-.482.621-.695l.581-.716c.167-.226.394-.523.555-.752l.519-.776c.146-.239.345-.556.486-.799l.449-.82c.124-.251.294-.583.412-.837l.371-.849c.1-.261.239-.605.332-.868l.284-.865c.074-.266.177-.62.244-.889l.188-.866c.044-.271.109-.631.145-.903l.083-.851C.025.815.046.454.046.182A.367.367 0 000 0"></path>
            </g>
            <g transform="translate(386.514 307.107)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.005-.003.263-.156L0 0"></path>
            </g>
            <g transform="translate(395.266 291.775)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.021 2.003-.334 3.81-1.186 6.04.166-.444.372-1.041.52-1.491.073-.267.177-.621.243-.889l.189-.866c.044-.271.109-.631.144-.903l.083-.851c.01-.272.03-.634.03-.906A.37.37 0 000 0"></path>
            </g>
            <g transform="translate(395.282 291.83)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.007.878-.054 1.596-.216 2.557.071-.47.148-1.099.194-1.572.009-.272.03-.634.03-.906A.407.407 0 000 0"></path>
            </g>
            <g transform="translate(395.29 291.898)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a24.302 24.302 0 000 .011V0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath812)">
            <g transform="translate(385.827 306.918)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178.089-.052-.306-.177L0 0"></path>
            </g>
            <g transform="translate(385.916 306.867)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.433.103.56.025.686-.055L.38-.233C.254-.153.127-.075 0 0"></path>
            </g>
            <g transform="translate(386.296 306.634)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.434.096.562.012.687-.075L.382-.252C.256-.166.128-.082 0 0"></path>
            </g>
            <g transform="translate(386.678 306.381)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.437.088.567-.005.696-.1L.391-.278C.262-.183.131-.09 0 0"></path>
            </g>
            <g transform="translate(387.068 306.103)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.438.08.57-.02.7-.123L.395-.301C.265-.198.133-.098 0 0"></path>
            </g>
            <g transform="translate(387.463 305.803)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.134-.106.268-.215.4-.327L.4-.327C.268-.215.135-.106 0 0"></path>
            </g>
            <g transform="translate(387.863 305.476)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.44.064.573-.052.705-.171L.399-.349C.268-.229.134-.113 0 0"></path>
            </g>
            <g transform="translate(388.262 305.127)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.438.058.57-.064.7-.189L.395-.367C.265-.242.133-.12 0 0"></path>
            </g>
            <g transform="translate(388.657 304.76)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.434.056.56-.069.685-.197L.379-.375C.254-.247.128-.122 0 0"></path>
            </g>
            <g transform="translate(389.036 304.386)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.43.052.553-.077.674-.208L.368-.385C.247-.255.124-.126 0 0"></path>
            </g>
            <g transform="translate(389.404 304)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.424.05.54-.079.655-.21L.35-.388C.234-.256.118-.127 0 0"></path>
            </g>
            <g transform="translate(389.754 303.613)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.423.044.539-.091.653-.229L.347-.406C.232-.269.117-.133 0 0"></path>
            </g>
            <g transform="translate(390.1 303.207)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178C.424.037.539-.106.653-.251L.347-.428C.233-.284.117-.141 0 0"></path>
            </g>
            <g transform="translate(390.447 302.778)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.177C.441.005.575-.169.706-.347L.399-.524C.269-.347.136-.172 0 0"></path>
            </g>
            <g transform="translate(390.846 302.254)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178c.195-.265.384-.536.568-.811L.569-.811A21.02 21.02 0 010 0"></path>
            </g>
            <g transform="translate(391.416 301.443)">
              <path
                fill="#7b53ab"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.538-.169.761-.523.973-.884l-.307-.178C.454-.701.232-.347 0 0"></path>
            </g>
            <g transform="translate(392.082 300.38)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178c.152-.261.3-.524.442-.79L.443-.79C.302-.523.153-.26 0 0"></path>
            </g>
            <g transform="translate(392.525 299.591)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.095-.179.188-.359.279-.54L.278-.54C.188-.359.096-.179 0 0"></path>
            </g>
            <g transform="translate(392.803 299.052)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178C.385.021.461-.138.536-.297L.229-.474C.155-.315.079-.157 0 0"></path>
            </g>
            <g transform="translate(393.033 298.578)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.177C.374.034.439-.111.504-.256L.198-.434C.134-.289.068-.145 0 0"></path>
            </g>
            <g transform="translate(393.231 298.144)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.368.035.43-.107.489-.25L.184-.428C.124-.285.062-.143 0 0"></path>
            </g>
            <g transform="translate(393.415 297.715)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.06-.145.119-.291.175-.437L.176-.437A19.94 19.94 0 010 0"></path>
            </g>
            <g transform="translate(393.59 297.279)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.056-.147.112-.294.165-.44L.165-.44C.111-.293.057-.146 0 0"></path>
            </g>
            <g transform="translate(393.756 296.838)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.361.025.414-.127.466-.28L.159-.458C.108-.305.056-.152 0 0"></path>
            </g>
            <g transform="translate(393.915 296.38)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178c.051-.155.101-.31.148-.465L.149-.464C.102-.31.052-.155 0 0"></path>
            </g>
            <g transform="translate(394.064 295.916)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.354.02.4-.139.444-.297L.139-.475C.095-.316.049-.158 0 0"></path>
            </g>
            <g transform="translate(394.203 295.44)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.35.019.392-.14.431-.299L.125-.477C.086-.318.044-.159 0 0"></path>
            </g>
            <g transform="translate(394.328 294.964)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.039-.157.076-.314.11-.471L.11-.471C.076-.314.039-.157 0 0"></path>
            </g>
            <g transform="translate(394.438 294.494)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.34.021.371-.135.4-.291L.095-.469C.065-.313.034-.157 0 0"></path>
            </g>
            <g transform="translate(394.533 294.025)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.334.026.36-.125.385-.276L.079-.454A18.78 18.78 0 010 0"></path>
            </g>
            <g transform="translate(394.612 293.57)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.329.026.351-.124.369-.274L.063-.452C.045-.302.023-.151 0 0"></path>
            </g>
            <g transform="translate(394.675 293.12)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.019-.147.035-.294.049-.44L.049-.44C.035-.294.019-.147 0 0"></path>
            </g>
            <g transform="translate(394.724 292.68)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.307.178C.32.031.332-.114.341-.259L.035-.437C.026-.292.015-.146 0 0"></path>
            </g>
            <g transform="translate(394.76 292.242)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178c.009-.145.016-.29.02-.435L.021-.435C.016-.29.009-.146 0 0"></path>
            </g>
            <g transform="translate(394.78 291.807)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.306.178C.31.042.312-.093.312-.228L.006-.405C.006-.271.004-.136 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath960)">
            <g transform="translate(384.591 301.96)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.007 2.344.56 4.564 1.235 4.957 4.964-2.866 8.975-9.812 8.959-15.516-.675-.393-2.879.244-4.919 1.422C5.287-5.785 2.919-1.682 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 2.089-1.206 4.008-3.134 5.53-5.387l-.16.23c-.335.457-1.226 1.671-1.849 2.067.08-.197 3.847-6.191 3.992-6.35-.076.625-.669 1.881-1.225 2.847 1.655-2.833 2.679-6.038 2.671-8.923C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.849-1.068 3.564-2.7 4.99-4.625-.102.131-.24.304-.343.434-.524.61-.92 1.055-1.252 1.237.018-.046.035-.111.061-.152l4.126-6.507c-.034.41-.326 1.169-.868 2.256 1.403-2.636 2.252-5.53 2.245-8.159C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.689-.975 3.269-2.424 4.616-4.135l-.347.408c-.469.498-.727.772-1.016.925.613-1.329 1.683-2.345 2.444-3.573.661-1.066 1.169-2.217 1.838-3.279.028-.045.081-.096.116-.137-.011.34-.204.893-.666 1.908 1.241-2.492 1.981-5.178 1.974-7.633C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.547-.893 3.001-2.182 4.269-3.706a165.3 165.3 0 01-.394.426c-.574.561-.645.586-.772.632.023-.049.047-.117.077-.163.776-1.232 1.741-2.331 2.508-3.57.725-1.17 1.124-2.523 2.032-3.589.012.257-.117.667-.512 1.627C4.273 3.391 4.925.883 4.919-1.422 4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.41-.814 2.743-1.957 3.929-3.307a.646.646 0 00-.036.038c-.52.51-.756.743-.931.772.019-.047.039-.115.066-.159.815-1.292 1.84-2.435 2.651-3.731.765-1.226 1.206-2.633 2.113-3.781.009.082.037.331-.388 1.392.987-2.232 1.561-4.576 1.555-6.74C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.272-.735 2.482-1.738 3.577-2.918a7.957 7.957 0 01-.735.609c.008-.056-.003-.139.027-.186.952-1.53 2.185-2.863 3.108-4.413.675-1.132 1.08-2.411 1.889-3.47.022.076.062.217-.278 1.173.874-2.101 1.376-4.285 1.371-6.311C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957 1.133-.654 2.215-1.52 3.211-2.535l-.135.117a4.617 4.617 0 01-.448.314c.016-.063.021-.156.057-.211.895-1.431 2.079-2.653 2.968-4.087.839-1.354 1.313-2.907 2.285-4.187-.006.394-.006.394-.175.952C4.488 2.49 4.924.466 4.919-1.422 4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957.989-.571 1.94-1.304 2.83-2.157l-.183.135a1.94 1.94 0 01-.268.148c.035-.078.072-.188.117-.261.945-1.501 2.21-2.767 3.145-4.275.884-1.428 1.471-3.016 2.38-4.431.017.23-.04.539-.093.763.663-1.828 1.036-3.691 1.031-5.438C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957a14.5 14.5 0 002.436-1.791l-.221.132-.102.021c.006-.028.006-.068.022-.092C-.86 10.713.558 9.339 1.588 7.676 2.519 6.173 3.082 4.477 4.061 3c.051.16.017.396-.014.561.562-1.681.876-3.381.872-4.983C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957.7-.405 1.382-.89 2.035-1.441l-.166.076c-.013-.17-.013-.17.447-.688a32.353 32.353 0 002.976-3.87c.618-.954 1.465-2.355 2.523-4.729.278-.62.372-.736.372-.736.04-.004.073.062.084.099.026.083-.021.201-.034.287.468-1.527.726-3.061.722-4.514C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957a13.865 13.865 0 001.635-1.115l-.128.041c.016-.053.025-.13.055-.177.025-.038.069-.081.098-.115C.46 9.419.967 8.602 1.554 7.655c.899-1.449 1.498-2.674 2.121-4.066.569-1.273.569-1.273.634-1.259.085.019.03.201.027.287.38-1.369.586-2.737.583-4.039C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957a13.23 13.23 0 001.238-.813l-.104.019c.093-.19.093-.19 1.05-1.225a28.183 28.183 0 003.072-3.928 31.098 31.098 0 002.577-4.912c.258-.605.461-1.084.532-1.195.021-.031.056-.065.08-.093l.056.194c.3-1.21.461-2.412.458-3.563C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957.286-.165.569-.344.849-.536l-.092.007c.017-.038.034-.093.057-.129.055-.085.434-.464.595-.623 1.37-1.358 2.547-2.765 3.497-4.184C2.658 5.957 3.471 3.946 4.124 2.33c.241-.597.285-.662.373-.791l.074.128c.229-1.048.35-2.088.348-3.089C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957.156-.09.311-.184.465-.282h-.004a2.41 2.41 0 01-.085.002c.142-.232.142-.232.659-.716.693-.648 2.804-2.622 4.802-5.993 1.275-2.152 1.947-3.912 2.487-5.327.244-.64.293-.664.298-.664.036-.005.059.061.084.087.167-.89.255-1.771.253-2.623C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.006 2.344.559 4.564 1.235 4.957l.088-.052a3.564 3.564 0 01-.108.012c.143-.22.143-.22.651-.668.699-.618 2.828-2.498 4.869-5.789 1.646-2.653 2.436-4.89 2.96-6.37.142-.399.186-.468.217-.514.014-.023.047-.062.073-.055.027.008.024.06.035.085.115-.734.176-1.459.174-2.165C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.005 2.163.477 4.219 1.081 4.833l.059-.053c1.606-1.349 5.871-4.932 8.406-12.457.331-.984.409-1.218.448-1.227.032-.008.063.043.09.062.074-.581.111-1.155.11-1.717C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.005 2.096.449 4.093 1.025 4.773l.338-.271C-1.213 11.443 2.43 7.408 4.459.655c.212-.705.285-.86.309-.865.032-.008.063.045.089.064.042-.431.063-.857.062-1.276C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.005 2.039.424 3.985.979 4.715l.322-.253c2.8-2.255 6.55-6.426 8.514-13.493.188-.674.246-.754.262-.758.034-.007.063.049.091.07.017-.283.026-.563.026-.84C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.005 1.985.403 3.881.935 4.654l.299-.232c2.356-1.888 6.602-6.182 8.568-13.724.135-.515.241-.921.294-.932.036-.007.065.057.092.081.004-.136.006-.272.006-.406C4.243-1.815 2.04-1.178 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.005 1.929.38 3.774.89 4.586l.25-.192c2.453-1.959 6.848-6.416 8.707-14.245.162-.682.189-.725.213-.766C3.987-1.739 1.921-1.109 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.87.358 3.661.844 4.509l.155-.118C.227 9.95 3.229 4.889 4.65-1.514 3.772-1.672 1.821-1.052 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.806.335 3.539.795 4.419C.063 9.976 3.351 4.477 4.538-1.529 3.613-1.621 1.747-1.009 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.734.308 3.4.74 4.309l.272-.213c4.372-3.58 7.617-9.101 8.681-14.77C3.459-1.569 1.675-.967 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.651.28 3.239.678 4.172l.413-.331C.068 9.359 3.232 3.933 4.278-1.538 3.293-1.513 1.597-.922 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.55.248 3.046.607 3.995l.395-.321C1.765 7.604 3.598 1.048 4.105-1.528 3.102-1.445 1.507-.87 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.425.21 2.803.522 3.754l.089-.072C1.108 7.955 3.164 1.758 3.875-1.502 2.868-1.359 1.396-.806 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.004 1.258.164 2.48.417 3.404l.389-.33C.619 7.688 2.696 2.289 3.542-1.443 2.559-1.24 1.249-.721 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.003 1.021.109 2.019.285 2.852l.372-.318c2.583-2.238 6.003-6.307 7.624-12.982C2.108-1.055 1.033-.597 0 0"></path>
            </g>
            <g transform="translate(389.867 292.824)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.012 3.352-2.356 7.455-5.275 9.137.002.64.044 1.27.119 1.857l.071-.056c4.717-3.883 6.257-8.399 7.072-11.9C1.346-.71.664-.384 0 0"></path>
            </g>
            <g transform="translate(393.155 297.77)">
              <path
                fill="#7b53ab"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.633.874-1.037 1.878-1.604 2.791a37.11 37.11 0 01-1.33 1.995c-.665.929-.665.929-.748 1.134C-2.438 5.065-.129 1.389.119-.132.084-.093.031-.043 0 0"></path>
            </g>
            <g transform="translate(393.085 297.932)">
              <path
                fill="#7f59ae"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.717.987-1.191 2.118-1.846 3.143-.264.415-.72 1.083-1.008 1.488-.564.797-.564.797-.634.989C-2.258 4.711-.165 1.376.123-.136.086-.095.032-.044 0 0"></path>
            </g>
            <g transform="translate(393.116 297.981)">
              <path
                fill="#835fb1"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.03.033-.077.07-.1.108-.491.822-.942 1.668-1.447 2.482-.569.918-1.227 1.777-1.801 2.693-.027.043-.041.111-.058.159C-2.13 4.43-.215 1.224.023-.026A.285.285 0 010 0"></path>
            </g>
            <g transform="translate(392.946 298.245)">
              <path
                fill="#8764b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.659.89-1.095 1.913-1.69 2.84-.349.543-.653.984-.975 1.451-.388.563-.388.563-.46.757C-1.998 4.119-.235 1.309.127-.137.089-.096.033-.045 0 0"></path>
            </g>
            <g transform="translate(392.875 298.4)">
              <path
                fill="#8b69b5"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.626.844-1.046 1.811-1.611 2.691-.412.642-.857 1.262-1.27 1.903-.028.045-.043.117-.061.168.937-.776 2.661-3.39 3.072-4.904C.091-.099.034-.046 0 0"></path>
            </g>
            <g transform="translate(392.839 298.515)">
              <path
                fill="#8f6db8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.012.012-.028.027-.037.041C-.452.71-.832 1.4-1.245 2.071c-.14.226-.454.724-.984 1.513-.496.735-.496.735-.568.931C-1.644 3.45-.218 1.044.098-.106.068-.074.028-.032 0 0"></path>
            </g>
            <g transform="translate(392.724 298.715)">
              <path
                fill="#9272ba"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.021.028-2.529 4.057-2.575 4.181.888-.84 2.221-2.828 2.716-4.337C.099-.109.038-.051 0 0"></path>
            </g>
            <g transform="translate(392.647 298.875)">
              <path
                fill="#9576bc"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.02.025-2.347 3.769-2.391 3.888C-1.59 3.126-.336 1.233.144-.16.101-.112.038-.052 0 0"></path>
            </g>
            <g transform="translate(392.567 299.034)">
              <path
                fill="#987abe"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.016.022-2.146 3.45-2.204 3.593C-.853 2.165-.033.357.147-.163.104-.114.04-.053 0 0"></path>
            </g>
            <g transform="translate(392.598 299.07)">
              <path
                fill="#9b7ec0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.015.016-1.905 2.875-2.121 3.409C-.981 2.187-.16.526.039-.044L0 0"></path>
            </g>
            <g transform="translate(392.376 299.405)">
              <path
                fill="#9e81c1"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.014.019-1.723 2.77-1.785 2.925.123-.133 1.222-1.348 1.96-3.133C.122-.146.048-.066 0 0"></path>
            </g>
            <g transform="translate(392.28 299.586)">
              <path
                fill="#a185c3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.012.016-1.365 2.068-1.578 2.594C-1.28 2.271-.386 1.136.178-.209.124-.146.052-.064 0 0"></path>
            </g>
            <g transform="translate(392.318 299.607)">
              <path
                fill="#a488c5"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.07.087-1.185 1.741-1.478 2.384C-.807 1.57-.295.75.045-.052L0 0"></path>
            </g>
            <g transform="translate(391.987 300.108)">
              <path
                fill="#a68cc7"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.007.01-.758 1.136-1.008 1.688C-.32.846.052.084.252-.325.176-.228.07-.101 0 0"></path>
            </g>
            <g transform="translate(392.02 300.135)">
              <path
                fill="#a98fc8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a9.761 9.761 0 00-.869 1.415A9.59 9.59 0 00.079-.101C.056-.071.022-.031 0 0"></path>
            </g>
            <g transform="translate(391.71 300.656)">
              <path
                fill="#ab92ca"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a7.341 7.341 0 00-.339.565 8.78 8.78 0 00.493-.787C.108-.155.044-.068 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <g>
                <path
                  fill="url(#linearGradient1168)"
                  stroke="none"
                  d="M189.952 405.087l-.393-138.495c-.007-2.724 1.906-6.029 4.268-7.393l190.05-109.724c2.36-1.364 4.287-.276 4.295 2.447l.392 138.496c.008 2.723-1.906 6.029-4.268 7.392L194.247 407.535c-.69.399-1.343.588-1.921.588-1.402 0-2.369-1.109-2.374-3.036"></path>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1178)">
            <g transform="translate(176.999 252.823)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c5.289 2.843 12.16 2.856 17.506.033-.431.249-1.806-.146-3.427-1.088C11.156.636 6.41.633 3.513-1.055 1.877-.11.487.284 0 0"></path>
            </g>
            <g transform="translate(192.56 252.51)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.532-.048-1.005.203-1.508.304-2.219.444-6.835 1.368-10.89-.849-1.482.801-2.71 1.122-3.163.858l.742.399c.251.115.583.275.837.382l.816.314c.265.085.615.205.882.282l.873.229c.273.058.637.141.911.192l.911.145c.278.032.65.08.929.105l.931.062c.281.006.656.021.936.021l.936-.021c.28-.018.653-.037.932-.062l.924-.103c.275-.044.644-.095.919-.146l.894-.186c.268-.07.628-.157.894-.234l.849-.269c.257-.098.602-.222.857-.327l.783-.354c.242-.127.568-.29.804-.427C1.673.504.94.386 0 0"></path>
            </g>
            <g transform="translate(193.372 252.791)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.056.001-.123.039-.176.056-.138.045-3.455 1.089-7.416.914-3.426-.152-5.402-1.221-6.052-1.573-1.285.636-2.322.872-2.729.635l.741.398c.251.115.583.275.837.382l.816.314c.265.085.616.205.882.283l.873.229c.274.057.637.14.911.191l.912.146c.278.031.649.079.928.104l.932.063c.28.005.655.02.936.02l.935-.02c.28-.019.653-.038.933-.062l.924-.103c.275-.044.643-.096.918-.146l.894-.187c.269-.07.629-.157.895-.233l.848-.27c.257-.098.603-.222.858-.327L.383.46C.625.333.95.17 1.187.034.962.164.545.148 0 0"></path>
            </g>
            <g transform="translate(193.796 252.884)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.06.007-.13.052-.186.075-1.93.778-4.826 1.223-7.376 1.134-3.565-.125-5.649-1.039-6.906-1.716-1.097.491-1.965.658-2.329.446l.741.398c.251.116.583.275.837.382l.817.314c.264.085.615.205.881.283l.874.229c.273.058.636.141.911.191l.911.146c.278.031.649.079.929.104l.931.063c.28.006.655.02.936.02l.935-.02c.281-.019.654-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.187c.269-.07.629-.156.895-.233l.848-.27c.257-.098.603-.221.858-.327l.783-.353C.201.241.526.077.763-.059.601.035.338.053 0 0"></path>
            </g>
            <g transform="translate(194.053 252.911)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.27.238-2.412.895-3.684 1.128-.884.162-2.315.346-4.11.301-2.734-.069-5.188-.678-7.293-1.809-.925.37-1.643.48-1.967.292l.742.398c.25.115.583.275.836.382l.817.314c.264.085.615.205.882.283l.873.229c.273.057.636.14.911.191l.911.145c.278.032.649.08.929.105l.931.062c.281.006.656.021.936.021l.935-.021c.281-.018.654-.037.933-.062l.924-.103c.275-.044.643-.095.919-.146l.893-.186c.269-.07.629-.157.895-.233l.849-.27c.256-.098.602-.222.857-.327L-.298.34C-.056.213.27.05.506-.086.388-.018.216.01 0 0"></path>
            </g>
            <g transform="translate(194.221 252.91)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.272.335-2.438.99-3.733 1.254-.898.183-2.357.394-4.209.364-1.991-.034-4.932-.386-7.637-1.876-.768.271-1.359.336-1.644.17l.742.399c.251.115.583.274.836.381l.817.314c.265.085.615.205.882.283l.873.229c.273.058.636.141.911.191l.911.146c.278.031.649.08.929.104l.931.063c.281.006.656.02.936.02l.935-.02c.281-.019.654-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.187c.269-.069.629-.156.895-.233l.849-.27c.256-.098.602-.221.857-.327l.783-.353C-.225.214.101.05.337-.086A.754.754 0 010 0"></path>
            </g>
            <g transform="translate(194.341 252.898)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.252.415-2.424 1.052-3.722 1.337a19.307 19.307 0 01-4.324.434c-2.951-.028-5.622-.675-7.936-1.923-.63.191-1.113.222-1.361.077l.741.399c.251.115.583.275.837.382l.817.314c.264.084.615.205.882.282l.873.229c.273.058.636.141.911.192l.911.145c.278.031.649.08.929.105l.931.062c.281.006.656.021.936.021l.935-.021c.281-.018.654-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.186c.269-.07.629-.157.895-.234l.848-.269c.257-.098.603-.222.858-.327l.783-.354C-.345.227-.02.063.217-.073A.63.63 0 010 0"></path>
            </g>
            <g transform="translate(194.43 252.878)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.289.929-9.255 3.755-16.317-.064-.509.127-.9.134-1.115.009l.742.398c.251.115.583.275.836.382l.817.314c.265.085.615.205.882.283l.873.229c.273.057.636.14.911.191l.911.146c.278.031.649.079.929.104l.931.063c.281.006.656.02.936.02l.935-.02c.281-.019.654-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.187c.269-.07.629-.157.895-.233l.849-.27c.256-.098.602-.221.857-.327l.783-.353c.242-.127.568-.291.804-.427A.553.553 0 010 0"></path>
            </g>
            <g transform="translate(194.499 252.854)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-8.008 3.789-14.275 1.268-16.599.007-.405.079-.717.069-.901-.038l.741.398c.251.115.583.275.837.382l.817.314c.264.085.615.205.881.283l.873.229c.274.057.637.14.912.191l.911.146c.278.031.649.079.928.104l.932.063c.28.005.655.02.936.02l.935-.02c.28-.019.653-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.187c.269-.07.629-.157.895-.233l.848-.27c.257-.098.603-.222.858-.327l.783-.354c.242-.126.567-.29.804-.426A.415.415 0 010 0"></path>
            </g>
            <g transform="translate(194.553 252.829)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.835 2.715-11.915 2.742-16.835.063-.317.043-.563.021-.719-.069l.742.399c.25.115.583.274.836.381l.817.314c.264.085.615.205.882.283l.873.229c.273.058.636.141.911.192l.911.145c.278.031.649.08.929.105l.931.062c.281.006.656.021.936.021l.935-.021c.281-.019.654-.037.933-.062l.924-.103c.275-.044.643-.096.919-.146l.893-.187c.269-.069.629-.156.895-.233l.849-.269c.256-.099.602-.222.857-.328l.783-.353C-.556.296-.23.132.006-.004L0 0"></path>
            </g>
            <g transform="translate(192.018 253.965)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-3.771 1.247-9.549 1.625-14.459-1.057-.241.017-.432-.01-.561-.085l.742.398c.251.116.583.275.837.382l.816.314c.265.085.615.205.882.283l.873.229c.273.057.637.14.911.191l.911.146c.278.031.65.079.929.104l.932.063c.28.006.655.02.935.02l.936-.02c.28-.019.653-.037.932-.062l.924-.103c.275-.044.644-.096.919-.146l.894-.187c.268-.07.628-.157.894-.233l.849-.27.286-.103L0 0"></path>
            </g>
            <g transform="translate(189.246 254.663)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-2.472.412-7.293.731-11.823-1.75a.848.848 0 01-.424-.09l.741.399c.251.115.583.274.837.381l.816.314c.265.085.616.205.882.283l.873.229c.274.058.637.141.911.192l.912.145c.278.031.649.08.928.105l.932.062c.28.006.655.021.936.021l.935-.021c.28-.019.653-.037.933-.062l.924-.103c.275-.044.643-.096.918-.146L.35-.063 0 0"></path>
            </g>
            <g transform="translate(186.351 254.945)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-3.558.046-6.433-.601-9.049-2.038a.738.738 0 01-.304-.085l.742.399c.251.115.583.275.837.382l.816.314c.265.085.615.205.882.282l.873.229c.273.058.637.141.911.192l.911.145c.278.032.65.08.929.105l.931.062c.281.006.656.021.936.021l.799-.015C.149-.005.064-.001 0 0"></path>
            </g>
            <g transform="translate(182.965 254.765)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-3.173-.442-4.993-1.444-5.771-1.872a.632.632 0 01-.195-.07l.741.399c.251.115.583.274.837.381l.817.314c.264.085.615.205.882.283l.873.229c.273.058.636.141.911.191l.911.146.308.04L0 0"></path>
            </g>
            <g transform="translate(179.528 253.963)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.048-.38-1.526-.596-2.437-1.098a.522.522 0 01-.092-.043l.741.399c.251.115.583.275.837.382l.816.314.515.171L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1246)">
            <g transform="translate(180.511 251.768)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684c-.118.068-.236.134-.351.196l6.253 3.634 6.254 3.635 6.254 3.634 6.254 3.633 6.253 3.635 6.254 3.634 6.254 3.635 6.252 3.633 6.254 3.635 6.254 3.634 6.254 3.634 6.253 3.635 6.254 3.633 6.254 3.635 6.253 3.634 6.254 3.634 6.254 3.634 6.253 3.634 6.254 3.635L-.351.196C-.235.133-.118.068 0 0"></path>
            </g>
            <g transform="translate(180.16 251.964)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-6.254-3.634-6.254-3.635-6.253-3.633-6.254-3.635-6.254-3.634-6.252-3.634-6.254-3.634-6.254-3.634-6.253-3.635-6.254-3.634-6.254-3.634-6.254-3.634-6.253-3.634-6.254-3.635-6.254-3.634-6.253-3.634-6.254-3.634-6.253-3.634-6.254-3.635-6.253-3.634c-.147.08-.291.154-.432.224L-.433.224C-.291.154-.146.08 0 0"></path>
            </g>
            <g transform="translate(179.728 252.188)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.071-72.684c-.137.067-.271.131-.401.188L-.4.188C-.27.13-.136.067 0 0"></path>
            </g>
            <g transform="translate(179.328 252.376)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.071-72.684a8.673 8.673 0 01-.363.153L-.361.154C-.244.107-.123.056 0 0"></path>
            </g>
            <g transform="translate(178.966 252.53)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.685a7.407 7.407 0 01-.323.122l6.253 3.635 6.254 3.634 6.254 3.634 6.254 3.635 6.253 3.633 6.254 3.635 6.254 3.634 6.253 3.635 6.254 3.634 6.254 3.633 6.253 3.635 6.253 3.634 6.254 3.635 6.253 3.633 6.254 3.634 6.254 3.635 6.254 3.634 6.253 3.635 6.254 3.633L-.322.122A8.94 8.94 0 000 0"></path>
            </g>
            <g transform="translate(178.644 252.652)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-6.254-3.634-6.254-3.634-6.253-3.635-6.254-3.634-6.254-3.634-6.253-3.634-6.253-3.634-6.254-3.635-6.254-3.634-6.253-3.634-6.254-3.634-6.254-3.634-6.253-3.635-6.254-3.633-6.254-3.635-6.253-3.634-6.254-3.635-6.253-3.634-6.254-3.633-6.253-3.635c-.098.034-.193.065-.284.094L-.284.093A5.19 5.19 0 000 0"></path>
            </g>
            <g transform="translate(178.36 252.745)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684c-.085.026-.168.048-.247.069L-.247.068C-.168.049-.085.026 0 0"></path>
            </g>
            <g transform="translate(178.113 252.814)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684a2.86 2.86 0 01-.213.047L-.213.048C-.145.035-.073.019 0 0"></path>
            </g>
            <g transform="translate(177.9 252.861)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.685a3.735 3.735 0 01-.183.032L-.183.03C-.124.022-.063.012 0 0"></path>
            </g>
            <g transform="translate(177.718 252.892)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684a2.39 2.39 0 01-.157.016L-.157.017C-.106.013-.055.007 0 0"></path>
            </g>
            <g transform="translate(177.56 252.908)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.685a1.626 1.626 0 01-.137.005L-.137.005C-.093.005-.048.003 0 0"></path>
            </g>
            <g transform="translate(177.424 252.913)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.685c-.042 0-.083-.002-.121-.004L-.121-.005C-.083-.002-.042 0 0 0"></path>
            </g>
            <g transform="translate(177.303 252.908)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684a1.211 1.211 0 01-.11-.016L-.109-.015c.034.006.071.012.109.015"></path>
            </g>
            <g transform="translate(177.193 252.893)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.685a.632.632 0 01-.104-.027L-.104-.028c.033.011.067.02.104.028"></path>
            </g>
            <g transform="translate(177.09 252.864)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-125.072-72.684a.422.422 0 01-.091-.042l6.253 3.635 6.254 3.634 6.254 3.634 6.254 3.635 6.252 3.633 6.254 3.635 6.254 3.634 6.253 3.634 6.254 3.634 6.254 3.634 6.254 3.635 6.253 3.634 6.254 3.635 6.254 3.633 6.253 3.634 6.254 3.635 6.253 3.634 6.253 3.634 6.254 3.634L-.091-.042c.028.017.058.03.091.042"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1314)">
            <g transform="translate(51.983 168.722)">
              <path
                fill="#250a46"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-1.064.664-3.893 2.427-3.932 5.569-.006-1.891 1.244-3.786 3.745-5.23C-.187.183-.121.07 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1326)">
            <g transform="translate(51.799 169.414)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.002-.354c-2.501 1.445-3.751 3.339-3.745 5.231l.001.353C-3.752 3.339-2.502 1.445 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1338)">
            <g transform="translate(48.053 174.644)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.145 2.285 1.222 3.82 3.845 5.478.516.299 1.906-.094 3.542-1.039-2.91-1.689-2.896-4.431.034-6.121C5.394-2.859 3.748-4.448 3.746-5.23 1.244-3.785-.006-1.892 0 0"></path>
            </g>
            <g transform="translate(55.088 179.28)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.503-.303-2.035-1.222-2.486-2.815-.277-.977-.316-4.707.105-5.593-.564-.577-.907-1.101-.908-1.458-2.502 1.445-3.752 3.339-3.746 5.23l.035.563c.037.199.079.466.13.662l.183.553c.089.192.202.452.303.638l.33.533c.139.18.319.425.467.598l.475.499c.185.164.428.388.621.544l.618.456c.213.135.494.321.712.448C-2.709 1.121-1.48.802 0 0"></path>
            </g>
            <g transform="translate(54.656 179.504)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-5.199-3.073-2.912-8.176-2.274-8.987-.369-.435-.583-.821-.583-1.103-2.502 1.445-3.752 3.339-3.747 5.231l.036.562c.037.199.079.466.13.662l.183.553c.089.192.201.452.303.639l.33.532c.139.181.318.426.467.599l.474.499c.186.164.429.387.621.543l.619.457c.212.134.494.321.712.448C-2.322.872-1.285.636 0 0"></path>
            </g>
            <g transform="translate(54.256 179.692)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.707-2.762-4.21-7.224-2.041-9.383-.266-.349-.416-.659-.416-.895-2.502 1.445-3.752 3.339-3.746 5.23l.035.563c.037.199.079.465.13.662l.184.552c.088.193.201.453.302.639l.33.532c.139.181.319.426.467.599l.475.499c.185.164.428.388.621.544l.618.456c.213.135.494.321.712.448C-1.965.658-1.098.492 0 0"></path>
            </g>
            <g transform="translate(53.893 179.847)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.212-2.379-5.028-6.812-1.783-9.681-.2-.291-.312-.548-.312-.752-2.502 1.446-3.752 3.339-3.746 5.231l.035.562c.037.2.079.466.13.662l.184.553c.089.193.201.452.303.639l.33.532c.138.181.318.426.466.599l.475.499c.186.164.429.387.621.544l.618.456c.213.135.494.321.712.448C-1.644.48-.925.37 0 0"></path>
            </g>
            <g transform="translate(53.57 179.969)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.986-2.927-4.679-7.425-1.532-9.914-.155-.245-.239-.464-.239-.641-2.502 1.446-3.752 3.339-3.747 5.231l.036.562c.037.2.079.466.129.662l.184.553c.089.193.201.452.303.639l.33.532c.139.181.318.426.467.599l.474.499c.186.164.429.387.621.544l.619.456c.212.134.494.321.711.448C-1.359.335-.768.271 0 0"></path>
            </g>
            <g transform="translate(53.287 180.061)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.647-2.735-5.207-7.075-1.303-10.095-.12-.21-.185-.397-.185-.552-2.502 1.445-3.752 3.338-3.746 5.23.009.169.024.394.035.563.037.199.079.465.13.662l.183.552c.089.193.201.452.303.639l.33.532c.139.181.318.426.467.599l.474.499c.186.164.429.388.622.544l.618.456c.213.135.494.321.712.448C-1.112.222-.63.19 0 0"></path>
            </g>
            <g transform="translate(53.04 180.13)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.76-2.816-5.222-7.122-1.098-10.238-.093-.18-.144-.341-.144-.478-2.502 1.445-3.752 3.339-3.746 5.231.009.169.024.393.035.562.037.199.079.466.13.662l.183.553c.089.192.202.452.303.639l.33.532c.139.181.319.426.467.599l.475.499c.185.164.428.387.621.543l.618.457c.213.134.494.321.712.448C-.899.134-.51.127 0 0"></path>
            </g>
            <g transform="translate(52.828 180.177)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.065-2.339-5.769-6.763-.918-10.352a.992.992 0 01-.111-.411c-2.502 1.446-3.752 3.339-3.746 5.231.009.169.024.393.035.562.037.199.079.466.13.662l.183.553c.089.192.201.452.303.639l.33.532c.139.181.318.426.467.599l.474.499c.186.164.429.387.622.544l.618.456c.213.134.494.321.712.448C-.718.069-.405.079 0 0"></path>
            </g>
            <g transform="translate(52.645 180.208)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.833-2.89-5.153-7.281-.762-10.441a.926.926 0 01-.085-.353c-2.502 1.445-3.752 3.339-3.746 5.231l.035.562c.037.199.079.466.13.662l.184.553c.089.192.201.452.303.639l.33.532c.138.18.318.426.466.598l.475.499c.186.164.429.388.621.544l.618.456c.213.135.494.322.712.449.156.09.402.112.719.069"></path>
            </g>
            <g transform="translate(52.487 180.224)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.865-2.922-5.129-7.343-.626-10.513a.845.845 0 01-.062-.297C-3.19-9.364-4.44-7.471-4.435-5.579l.036.562c.037.2.079.466.129.663l.184.552c.089.193.201.452.303.639l.33.532c.139.181.318.426.467.599l.474.499c.186.164.429.387.621.544l.619.456c.212.135.494.321.711.448.128.075.32.103.561.085"></path>
            </g>
            <g transform="translate(52.35 180.228)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.916-2.964-5.13-7.409-.508-10.569a.795.795 0 01-.044-.245c-2.502 1.445-3.752 3.338-3.746 5.23l.035.563c.037.199.079.465.13.662l.184.552c.089.193.201.453.303.639l.33.532c.138.181.318.426.466.599l.475.499c.186.164.429.388.621.544l.618.456c.213.135.494.321.712.448.103.061.246.09.424.09"></path>
            </g>
            <g transform="translate(52.23 180.224)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.952-2.996-5.122-7.461-.403-10.617a.73.73 0 01-.029-.193c-2.502 1.446-3.752 3.339-3.746 5.231l.035.562c.038.2.08.466.13.663l.184.552c.089.193.201.452.303.639l.33.532c.138.181.318.426.467.599l.474.499c.186.164.429.387.621.544l.618.456c.213.135.495.321.712.448A.729.729 0 000 0"></path>
            </g>
            <g transform="translate(52.122 180.209)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.969-3.016-5.099-7.497-.309-10.656a.77.77 0 01-.014-.139C-2.825-9.35-4.075-7.456-4.069-5.564c.009.168.024.393.035.562.037.199.079.466.13.662l.183.553c.089.192.201.452.303.639l.33.532c.139.18.318.426.467.598l.475.499c.185.165.428.388.621.544l.618.456c.213.135.494.322.712.449.053.031.12.054.195.07"></path>
            </g>
            <g transform="translate(52.02 180.18)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.966-3.021-5.057-7.519-.216-10.691a.493.493 0 01-.005-.076c-2.502 1.446-3.752 3.339-3.746 5.231l.035.562c.037.2.079.466.13.662l.184.553c.089.193.201.452.303.639l.33.532c.138.181.318.426.466.599l.475.499c.186.164.429.387.621.544l.618.456c.213.135.494.321.712.448.028.017.059.03.093.042"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1406)">
            <g transform="translate(380.936 142.153)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.525.305 1.025.553 1.477.739L1.478.739A11.952 11.952 0 010 0"></path>
            </g>
            <g transform="translate(382.414 142.893)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.293.12.564.215.811.282L.812.282A7.029 7.029 0 010 0"></path>
            </g>
            <g transform="translate(383.225 143.175)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.152.041.294.073.424.093L.425.094A3.898 3.898 0 010 0"></path>
            </g>
            <g transform="translate(383.65 143.269)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.092.014.178.023.259.028L.26.027A2.322 2.322 0 010 0"></path>
            </g>
            <g transform="translate(383.91 143.296)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.059.003.115.003.168 0L.168 0A1.568 1.568 0 010 0"></path>
            </g>
            <g transform="translate(384.078 143.296)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615c.043-.003.084-.007.122-.013L.122-.013A1.113 1.113 0 010 0"></path>
            </g>
            <g transform="translate(384.2 143.283)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.614a.788.788 0 00.087-.019L.087-.02C.06-.012.03-.006 0 0"></path>
            </g>
            <g transform="translate(384.287 143.264)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615a.66.66 0 00.067-.024L.067-.023A.871.871 0 010 0"></path>
            </g>
            <g transform="translate(384.354 143.24)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615a.415.415 0 00.056-.027L.057-.026A.607.607 0 010 0"></path>
            </g>
            <g transform="translate(384.41 143.214)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-189.858 109.615a.022.022 0 00.005-.004l18.987-10.962 18.985-10.961 18.986-10.961 18.986-10.962 18.986-10.961 18.985-10.962 18.987-10.961 18.985-10.962 18.987-10.961L.006-.004 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1454)">
            <g transform="translate(388.345 137.288)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.059-.919-.213-3.361-3.871-5.495.12.07.186.182.186.337C-1.233-3.733-.006-1.868 0 0"></path>
            </g>
            <g transform="translate(384.66 132.129)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.051.03.118.07.169.102 2.338 1.41 3.51 3.232 3.516 5.057l-.037-.562c-.036-.2-.079-.467-.129-.662l-.183-.553c-.089-.194-.201-.453-.302-.64l-.33-.531c-.139-.181-.318-.426-.466-.599l-.474-.499C1.578.949 1.336.726 1.145.57L.527.114C.313-.021.032-.208-.187-.336c.121.07.186.182.187.336"></path>
            </g>
            <g transform="translate(384.66 132.108)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.722.445 1.13.719 1.765 1.306C3.041 2.485 3.682 3.832 3.686 5.18c-.046-.729-.049-.773-.166-1.225l-.183-.553c-.089-.193-.201-.453-.302-.639l-.33-.532c-.139-.18-.318-.425-.466-.598l-.474-.499C1.579.97 1.337.746 1.146.591L.528.135C.314-.001.033-.187-.186-.315c.116.067.18.171.186.315"></path>
            </g>
            <g transform="translate(384.659 132.089)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.587.362 1.68 1.035 2.552 2.172.754.959 1.132 1.992 1.135 3.027l-.037-.562c-.036-.2-.079-.467-.129-.662l-.183-.553c-.089-.193-.201-.453-.302-.64l-.33-.531c-.139-.181-.318-.426-.466-.599l-.474-.499C1.58.989 1.338.766 1.146.61L.529.154C.315.019.034-.168-.185-.296A.36.36 0 010 0"></path>
            </g>
            <g transform="translate(384.657 132.068)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.751.462 2.147 1.322 3.061 2.946.416.737.626 1.505.627 2.274l-.036-.563c-.036-.199-.079-.467-.13-.662l-.182-.553c-.089-.193-.201-.453-.302-.639l-.33-.532c-.139-.18-.318-.425-.466-.598l-.474-.499c-.186-.164-.428-.388-.62-.543L.531.175C.317.039.036-.147-.183-.275c.104.06.167.152.183.275"></path>
            </g>
            <g transform="translate(384.654 132.048)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.846.52 2.605 1.601 3.401 3.687.192.511.288 1.032.29 1.553l-.036-.562c-.036-.199-.079-.467-.13-.662l-.182-.553c-.089-.193-.201-.453-.302-.64l-.33-.531c-.139-.181-.318-.426-.466-.599l-.474-.499c-.186-.164-.428-.387-.62-.543L.534.195C.32.06.039-.127-.18-.255A.36.36 0 010 0"></path>
            </g>
            <g transform="translate(384.65 132.026)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.429.877 3.13 2.172 3.611 4.422.056.279.084.559.085.84l-.036-.563c-.036-.199-.079-.467-.13-.662l-.182-.553c-.089-.193-.202-.453-.302-.639l-.33-.532c-.139-.18-.319-.425-.466-.598l-.475-.499c-.185-.164-.427-.388-.619-.543L.539.217C.325.081.044-.105-.175-.233c.092.053.152.13.175.233"></path>
            </g>
            <g transform="translate(384.643 132.004)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.522.933 3.562 2.483 3.7 5.172l.002.112-.036-.562c-.036-.2-.079-.467-.13-.662l-.182-.553c-.089-.194-.202-.453-.302-.64l-.33-.531c-.139-.181-.319-.426-.466-.599l-.475-.499c-.185-.164-.427-.387-.619-.543L.545.239C.331.104.05-.083-.169-.211c.085.05.143.12.169.211"></path>
            </g>
            <g transform="translate(384.635 131.978)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.891.545 3.258 1.994 3.662 4.654l-.114-.558-.004-.011-.183-.553c-.089-.193-.201-.453-.301-.639l-.331-.532c-.138-.18-.318-.425-.465-.598l-.475-.499C1.604 1.1 1.361.876 1.17.721L.553.265C.339.129.058-.058-.161-.186A.36.36 0 010 0"></path>
            </g>
            <g transform="translate(384.623 131.95)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.762.466 2.786 1.702 3.496 3.904l-.208-.55-.216-.433-.33-.531c-.138-.181-.318-.426-.466-.599l-.474-.499c-.186-.164-.428-.388-.619-.543L.565.293C.352.157.07-.029-.148-.157A.36.36 0 010 0"></path>
            </g>
            <g transform="translate(384.602 131.913)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.305.796 2.339 1.62 3.145 3.056-.105-.195-.266-.442-.382-.629-.139-.181-.319-.426-.466-.599l-.475-.499c-.185-.164-.427-.388-.619-.543L.586.33C.372.194.091.008-.128-.12A.361.361 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1506)">
            <g transform="translate(388.346 137.642)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354-.002-.111.001.354L0 0"></path>
            </g>
            <g transform="translate(388.344 137.53)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a4.365 4.365 0 00-.083-.727l.001.353c.048.242.076.485.083.728"></path>
            </g>
            <g transform="translate(388.261 136.803)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a4.548 4.548 0 00-.205-.714l.001.354c.089.236.157.475.205.714"></path>
            </g>
            <g transform="translate(388.056 136.089)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a5.102 5.102 0 00-.338-.721l.001.353c.134.238.247.479.338.722"></path>
            </g>
            <g transform="translate(387.719 135.367)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a5.955 5.955 0 00-.511-.757l.001.353C-.315-.51-.146-.257 0 0"></path>
            </g>
            <g transform="translate(387.208 134.61)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a7.242 7.242 0 00-.786-.845l.001.353C-.49-.572-.228-.289 0 0"></path>
            </g>
            <g transform="translate(386.422 133.764)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a9.844 9.844 0 00-1.605-1.188l.001.354C-.989-.818-.455-.42 0 0"></path>
            </g>
            <g transform="translate(384.816 132.575)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354-.154-.091.001.353L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1546)">
            <g transform="translate(384.417 143.21)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.064-.663 3.891-2.426 3.93-5.568-.006-1.869-1.235-3.734-3.685-5.159.002.783-1.65 2.372-3.691 3.549C-.542-5.493-.553-2.744-3.48-1.057-1.859-.114-.484.28 0 0"></path>
            </g>
            <g transform="translate(384.467 133.053)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.005.041.059.097.039.133-.02.038-.099.033-.141.028-.564.83-1.872 1.94-3.395 2.818 2.904 1.685 2.893 4.434-.034 6.122 1.621.942 2.996 1.337 3.48 1.056l.691-.429c.207-.152.488-.347.688-.506l.55-.478c.165-.169.391-.39.546-.567l.408-.516c.119-.183.283-.426.391-.616l.263-.543c.07-.194.168-.452.225-.65l.117-.559c.019-.211.048-.492.051-.704C3.873 2.721 2.645.855.194-.569.194-.409.126-.217 0 0"></path>
            </g>
            <g transform="translate(384.51 132.976)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.032.174.378.182.282.386C.241.475-.021.411-.231.36c-.605.815-1.859 1.86-3.309 2.697C-.636 4.741-.646 7.49-3.574 9.178c1.621.942 2.996 1.337 3.48 1.056l.691-.429c.207-.152.488-.347.688-.506l.55-.478c.165-.169.391-.39.546-.567l.408-.516c.119-.183.283-.426.391-.616l.263-.543c.07-.194.168-.452.225-.65l.117-.559c.019-.211.048-.492.051-.704C3.83 2.798 2.602.933.151-.492.151-.352.099-.186 0 0"></path>
            </g>
            <g transform="translate(384.536 132.927)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.076.319.68.25.578.646C.543.781.217.699-.335.511c-.63.799-1.84 1.792-3.23 2.594C-.661 4.79-.672 7.539-3.6 9.227c1.621.942 2.996 1.336 3.481 1.056l.69-.429c.207-.152.489-.347.689-.506l.55-.478c.165-.169.39-.391.545-.567l.409-.516c.119-.183.283-.426.39-.616l.264-.543c.069-.194.168-.452.225-.65l.117-.559c.018-.211.048-.492.051-.704C3.805 2.847 2.576.981.126-.443.126-.315.082-.166 0 0"></path>
            </g>
            <g transform="translate(384.554 132.889)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.119.493.949.322.914.939a.112.112 0 01-.038.075C.752 1.103.093.853-.437.652c-.65.78-1.816 1.724-3.147 2.492C-.68 4.828-.69 7.577-3.618 9.265c1.621.942 2.996 1.337 3.48 1.056l.691-.429c.207-.152.488-.347.688-.506l.55-.478c.165-.169.391-.39.546-.567l.408-.516c.119-.183.283-.426.391-.616l.263-.543c.07-.194.168-.452.225-.65l.117-.559c.019-.211.048-.492.051-.704C3.786 2.885 2.558 1.02.107-.405A.987.987 0 010 0"></path>
            </g>
            <g transform="translate(384.57 132.855)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.023.085.169.118.242.169C.765.533 1.43 1.204 1.28 1.386c-.1.122-.398 0-1.83-.586-.665.757-1.782 1.646-3.05 2.378 2.905 1.684 2.894 4.433-.034 6.121 1.621.942 2.996 1.337 3.481 1.056l.69-.429c.207-.152.488-.347.689-.506l.549-.478c.165-.169.391-.39.546-.567l.408-.516c.12-.183.284-.425.391-.616l.264-.543c.069-.194.168-.452.224-.65l.118-.559c.018-.211.047-.492.05-.704C3.771 2.919 2.542 1.054.092-.371A.932.932 0 010 0"></path>
            </g>
            <g transform="translate(384.583 132.823)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.044.151.302.211.431.302.45.315 1.434 1.251 1.303 1.548-.071.16-.071.16-2.414-.889-.674.726-1.737 1.559-2.932 2.248C-.708 4.894-.719 7.643-3.646 9.33c1.621.942 2.996 1.337 3.48 1.057l.69-.43c.207-.151.489-.347.689-.506l.55-.477c.165-.169.39-.391.546-.568l.408-.515c.119-.184.283-.426.39-.617l.264-.543c.069-.194.168-.452.225-.65l.117-.559c.018-.21.048-.492.051-.704C3.758 2.95 2.529 1.085.079-.34A.897.897 0 010 0"></path>
            </g>
            <g transform="translate(384.595 132.794)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.04.128.261.175.373.25.712.476 3.272 3.2.881 1.958-1.599-.831-1.599-.831-2.092-1.065-.677.689-1.674 1.453-2.787 2.095 2.904 1.685 2.894 4.434-.034 6.121 1.621.943 2.996 1.337 3.48 1.057l.691-.43C.719 9.835 1 9.64 1.2 9.48l.55-.477c.165-.169.391-.391.546-.567l.408-.516c.119-.184.283-.426.391-.616l.263-.543c.07-.195.168-.452.225-.651l.117-.558c.019-.211.048-.492.051-.704C3.745 2.979 2.517 1.114.066-.311A.87.87 0 010 0"></path>
            </g>
            <g transform="translate(384.606 132.765)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.049.15.307.203.437.29 1.661 1.099 3.065 3.539 1.616 2.809C.997 2.565.037 1.862-1.03 1.352c-.668.64-1.589 1.329-2.606 1.916C-.731 4.952-.742 7.701-3.67 9.389c1.621.942 2.996 1.337 3.481 1.056l.69-.429c.207-.152.488-.347.688-.506l.55-.478c.165-.169.391-.39.546-.567l.408-.516c.12-.183.284-.426.391-.616l.264-.543c.069-.194.168-.452.224-.65l.117-.559c.019-.211.048-.492.051-.704C3.734 3.009 2.506 1.144.056-.281A.833.833 0 010 0"></path>
            </g>
            <g transform="translate(384.616 132.736)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.052.149.308.2.44.286.242.157 1.481 1.001 2.169 2.256.367.668.571 1.684-.194 1.342C1.082 3.289.021 2.257-1.267 1.59a14.294 14.294 0 01-2.379 1.706C-.741 4.98-.752 7.729-3.68 9.417c1.621.942 2.996 1.337 3.481 1.057l.69-.43c.207-.151.488-.347.689-.506l.549-.477c.166-.169.391-.391.546-.568l.409-.515c.119-.184.283-.426.39-.617l.264-.543c.069-.194.168-.452.225-.65l.117-.559c.018-.211.048-.492.05-.704C3.725 3.037 2.496 1.172.046-.253A.819.819 0 010 0"></path>
            </g>
            <g transform="translate(384.625 132.709)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.054.148.31.199.442.284.615.395 1.747 1.263 2.422 2.645.375.769.48 2.03-.284 1.733-.231-.091-.579-.358-.856-.582C.4 3.012-.224 2.566-1.551 1.857a14.709 14.709 0 01-2.103 1.466C-.75 5.008-.761 7.757-3.688 9.444c1.621.943 2.996 1.337 3.48 1.057l.69-.43c.207-.151.489-.346.689-.506l.55-.477c.165-.169.39-.391.546-.567l.408-.516c.119-.184.283-.426.39-.616l.264-.543c.069-.195.168-.452.225-.651l.117-.558c.018-.211.048-.492.051-.704C3.716 3.064 2.487 1.199.037-.226A.8.8 0 010 0"></path>
            </g>
            <g transform="translate(384.632 132.683)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.057.147.311.197.443.281.196.124 1.924 1.257 2.578 2.889.54 1.349.257 2.567-.521 2.248-.313-.129-.695-.484-1.178-.935C.061 3.307-.777 2.755-1.883 2.148c-.527.416-1.134.83-1.779 1.202 2.904 1.684 2.893 4.433-.034 6.121 1.621.942 2.996 1.337 3.48 1.056l.691-.429c.207-.152.488-.347.688-.506l.55-.478c.165-.169.391-.39.546-.567l.408-.516c.119-.183.283-.426.391-.616l.263-.543c.07-.194.168-.452.225-.65l.117-.559c.019-.211.048-.492.051-.704C3.708 3.091 2.479 1.226.029-.199A.736.736 0 010 0"></path>
            </g>
            <g transform="translate(384.64 132.657)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c4.5 2.843 3.531 5.986 2.701 6.243-.512.158-1.028-.414-1.681-1.139C-.086 3.879-.914 3.211-2.26 2.455c-.434.319-.91.632-1.409.92C-.765 5.06-.775 7.809-3.703 9.496c1.621.942 2.996 1.337 3.48 1.057l.691-.43c.207-.151.488-.347.688-.506l.55-.477c.165-.169.391-.391.546-.568l.408-.515c.119-.184.283-.426.391-.617l.263-.543c.07-.194.168-.452.225-.65l.117-.559c.019-.21.048-.492.051-.704C3.701 3.116 2.473 1.251.022-.174A.734.734 0 010 0"></path>
            </g>
            <g transform="translate(384.645 132.632)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c5.244 3.292 3.342 6.904 2.237 7.094-.685.118-1.164-.576-1.586-1.188-.966-1.402-1.675-2.187-3.326-3.135-.317.217-.653.429-1 .629 2.904 1.685 2.894 4.434-.034 6.121 1.621.943 2.996 1.337 3.48 1.057l.691-.43c.207-.151.488-.346.688-.505l.55-.478c.165-.169.391-.391.546-.567l.408-.516c.119-.184.284-.426.391-.616l.264-.543c.069-.194.168-.452.224-.651l.117-.558c.019-.211.048-.492.051-.704C3.695 3.142 2.467 1.276.017-.148A.723.723 0 010 0"></path>
            </g>
            <g transform="translate(384.65 132.608)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.063.145.312.195.446.279.833.523 2.799 1.997 3.058 4.42.206 1.935-1.31 3.777-2.658 3.232-.523-.212-.711-.706-.973-1.39-.529-1.386-1.187-2.396-2.988-3.459-.184.117-.372.231-.564.342 2.905 1.684 2.894 4.433-.034 6.121 1.621.942 2.996 1.337 3.481 1.057l.69-.43c.207-.151.488-.347.688-.506l.55-.478c.165-.168.391-.39.546-.567l.408-.516c.12-.183.284-.425.391-.616l.264-.543c.069-.194.168-.452.224-.65l.117-.559c.019-.211.048-.492.051-.704C3.691 3.165 2.463 1.3.013-.125A.61.61 0 010 0"></path>
            </g>
            <g transform="translate(384.654 132.586)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c5.828 3.642 3.311 8.344.53 8.975-1.558.353-2.212-.04-1.944-1.169.319-1.345.312-2.922-2.162-4.422-.036.021-.071.042-.108.062C-.779 5.131-.79 7.88-3.718 9.567c1.621.943 2.996 1.337 3.481 1.057l.69-.43c.207-.151.488-.346.689-.506l.549-.477c.165-.169.391-.391.546-.567l.409-.516c.119-.184.283-.426.39-.616l.264-.543c.069-.195.168-.452.224-.651l.118-.558c.018-.211.047-.492.05-.704C3.687 3.188 2.458 1.322.008-.103A.726.726 0 010 0"></path>
            </g>
            <g transform="translate(384.657 132.565)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.067.143.312.194.446.278.885.551 3.716 2.605 3.001 5.9-.674 3.104-4.317 3.865-5.689 4.151.941.387 1.675.506 2.002.317l.69-.43c.207-.152.488-.347.689-.506l.549-.478c.166-.169.391-.39.546-.567l.409-.516c.119-.183.283-.425.39-.616l.264-.543c.069-.194.168-.452.224-.65l.118-.559c.018-.211.048-.492.05-.704C3.684 3.209 2.455 1.344.005-.081A.765.765 0 010 0"></path>
            </g>
            <g transform="translate(384.659 132.543)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.07.142.313.194.447.278.593.368 3.532 2.368 3.11 5.501-.17 1.263-1.044 3.574-4.988 4.854.546.148.964.164 1.189.034l.69-.43c.207-.151.489-.346.689-.506l.55-.477c.165-.169.39-.391.545-.567l.409-.516c.119-.184.283-.426.39-.616l.264-.543c.069-.195.168-.452.225-.651l.117-.558c.018-.211.048-.492.051-.704C3.682 3.23 2.453 1.365.003-.06L0 0"></path>
            </g>
            <g transform="translate(384.66 132.523)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.072.141.312.194.447.277 1.037.644 3.417 2.465 3.134 5.488-.07.751-.609 3.331-4.589 4.981.339.054.602.035.764-.058l.69-.43c.207-.152.489-.347.689-.506l.55-.478c.165-.169.39-.39.545-.567l.409-.516c.119-.183.283-.425.39-.616l.264-.543c.069-.194.168-.452.225-.65l.117-.559c.018-.211.048-.492.051-.704C3.68 3.251 2.451 1.386.001-.039L0 0"></path>
            </g>
            <g transform="translate(384.662 132.502)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.074.14.313.194.447.277 2.029 1.257 3.308 3.307 3.184 5.102-.212 3.045-2.836 4.699-4.382 5.415.216.011.388-.018.506-.086l.69-.43c.207-.151.489-.346.689-.506l.55-.477c.165-.169.39-.391.545-.567l.409-.516c.119-.184.283-.426.39-.616l.264-.543c.069-.195.168-.452.225-.651l.117-.558c.018-.211.048-.492.051-.704C3.679 3.271 2.45 1.406 0-.019V0"></path>
            </g>
            <g transform="translate(385.11 132.76)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c5.209 3.58 3.567 8.168-1.03 10.536a.758.758 0 00.337-.086l.69-.429c.207-.152.488-.347.689-.506l.549-.478c.165-.169.391-.391.546-.567l.408-.516c.12-.183.284-.426.391-.616l.264-.543c.069-.194.168-.452.224-.65l.118-.559c.018-.211.047-.492.05-.704C3.23 3.057 2.059 1.235-.279-.176c.084.053.196.121.279.176"></path>
            </g>
            <g transform="translate(386.611 133.948)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.438 3.685 1.267 7.343-2.411 9.335a.675.675 0 00.217-.073l.69-.43c.207-.151.488-.347.689-.506l.549-.477c.165-.169.391-.391.546-.568l.408-.515c.12-.184.284-.426.391-.617l.264-.543c.069-.194.168-.452.224-.65l.118-.559c.018-.21.047-.492.05-.704C1.731 2.346 1.091 1-.186-.181-.13-.126-.055-.056 0 0"></path>
            </g>
            <g transform="translate(387.432 134.92)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.887 3.017.712 6.136-3.144 8.342a.553.553 0 00.128-.053l.691-.43c.207-.151.488-.346.688-.505l.55-.478c.165-.169.391-.391.546-.567l.408-.516c.119-.184.283-.426.391-.616l.263-.543c.07-.195.168-.452.225-.651l.117-.558c.019-.211.048-.492.051-.704C.911 1.687.533.652-.22-.306c.066.092.157.212.22.306"></path>
            </g>
            <g transform="translate(387.835 135.592)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.865 4.198-2.19 6.915-3.478 7.647a.37.37 0 00.06-.029l.69-.43c.207-.151.489-.346.689-.505l.55-.478c.165-.169.39-.391.546-.567l.408-.516c.119-.184.283-.426.39-.616l.264-.543c.069-.194.168-.452.225-.65l.117-.559c.018-.211.048-.492.051-.704C.51 1.281.3.514-.116-.224c.035.068.083.156.116.224"></path>
            </g>
            <g transform="translate(384.41 143.214)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l.006-.004L.4-.241 0 0"></path>
            </g>
            <g transform="translate(388.12 136.28)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.223.809.412 1.792-.152 3.241l.192-.553.018-.063.117-.559c.018-.211.048-.492.051-.704A4.463 4.463 0 00-.064-.19c.019.056.046.132.064.19"></path>
            </g>
            <g transform="translate(388.292 136.978)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.06.527.088.894-.021 1.511L.047.949.055.663C.054.383.025.103-.03-.176c.009.053.022.122.03.176"></path>
            </g>
            <g transform="translate(388.346 137.682)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001.06L0-.04l-.002-.112L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1666)">
            <g transform="translate(259.589 59.446)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684v-.001L0-.002v.001"></path>
            </g>
            <g transform="translate(259.589 59.444)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685-.001-.022L-.001-.021A.148.148 0 010 0"></path>
            </g>
            <g transform="translate(259.588 59.423)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685-.001-.022L-.001-.021 0 0"></path>
            </g>
            <g transform="translate(259.587 59.402)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684-.002-.021-6.254-3.634-6.253-3.634-6.254-3.634-6.253-3.634-6.254-3.635-6.254-3.634-6.253-3.634-6.254-3.634-6.254-3.635-6.253-3.634-6.254-3.633-6.254-3.635-6.253-3.634-6.253-3.635-6.254-3.634-6.254-3.634-6.253-3.634-6.254-3.634-6.254-3.635L-.002-.021 0 0"></path>
            </g>
            <g transform="translate(259.585 59.382)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l6.253 3.634 6.254 3.635 6.254 3.633 6.253 3.634 6.254 3.635 6.253 3.634 6.254 3.634 6.253 3.634 6.254 3.635 6.254 3.634 6.253 3.634 6.254 3.634 6.254 3.634 6.253 3.635 6.254 3.634 6.254 3.634 6.253 3.634 6.253 3.634 6.254 3.635 6.254 3.634a.142.142 0 00-.004-.02L-.004-.021 0 0"></path>
            </g>
            <g transform="translate(259.58 59.361)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685-.004-.02L-.004-.019 0 0"></path>
            </g>
            <g transform="translate(259.577 59.343)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684a.268.268 0 00-.007-.027L-.007-.026A.138.138 0 010 0"></path>
            </g>
            <g transform="translate(259.57 59.316)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684-.009-.029L-.01-.028C-.006-.02-.003-.01 0 0"></path>
            </g>
            <g transform="translate(259.56 59.288)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684-.011-.027-6.254-3.635-6.253-3.633-6.254-3.634-6.254-3.635-6.254-3.634-6.253-3.634-6.254-3.634-6.254-3.635-6.254-3.634-6.253-3.634-6.253-3.634-6.254-3.634-6.253-3.635-6.254-3.634-6.254-3.633-6.253-3.635-6.254-3.634-6.254-3.635-6.254-3.634L-.012-.027A.358.358 0 010 0"></path>
            </g>
            <g transform="translate(259.549 59.26)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l6.253 3.635 6.254 3.634 6.254 3.634 6.254 3.634 6.253 3.635 6.253 3.634 6.254 3.633 6.253 3.635 6.254 3.634 6.254 3.635 6.253 3.634 6.254 3.633 6.254 3.635 6.254 3.634 6.253 3.635 6.254 3.633 6.254 3.635 6.253 3.634 6.253 3.634 6.254 3.635a.36.36 0 00-.022-.039L-.022-.038 0 0"></path>
            </g>
            <g transform="translate(259.526 59.223)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684a.379.379 0 00-.124-.114l-6.254-3.633-6.254-3.635-12.506-7.268-12.507-7.268-12.508-7.269-12.507-7.268-12.508-7.269-12.507-7.269-12.506-7.267-12.508-7.269-6.254-3.634L-.124-.113A.356.356 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1718)">
            <g transform="translate(51.797 169.06)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614c0-.157.066-.27.187-.339L171.06-98.992 152.073-88.03l-18.985 10.961-18.986 10.962-18.986 10.961L76.13-44.185 57.145-33.224 38.158-22.262 19.173-11.3.187-.339A.364.364 0 000 0"></path>
            </g>
          </g>
        </g>
        <g transform="translate(384.662 132.483)">
          <path
            fill="#390f6c"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0l-.001-.354-125.072-72.683.001.353z"></path>
        </g>
        <g transform="translate(241.657 59.8)">
          <path
            fill="#280b4b"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0l-.002-.354-189.858 109.615.002.353z"></path>
        </g>
        <g>
          <g clipPath="url(#clipPath1738)">
            <g transform="translate(380.936 142.153)">
              <path
                fill="#401179"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.928-1.687 2.938-4.437.034-6.121l-125.072-72.684c-2.907-1.691-7.641-1.691-10.566 0L-325.463 30.81c-2.93 1.689-2.944 4.431-.034 6.121l125.072 72.684c2.898 1.687 7.644 1.69 10.567 0L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1750)">
            <g transform="translate(255.898 63.349)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.036-.021.073-.041.108-.063L.107-.062 0 0"></path>
            </g>
            <g transform="translate(256.006 63.286)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.155-.091.307-.184.456-.279L.456-.279A15.82 15.82 0 010 0"></path>
            </g>
            <g transform="translate(256.462 63.007)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685c.149-.095.294-.192.437-.289L.437-.288A14.99 14.99 0 010 0"></path>
            </g>
            <g transform="translate(256.898 62.719)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.14-.096.277-.193.409-.29L.409-.29C.276-.192.14-.096 0 0"></path>
            </g>
            <g transform="translate(257.307 62.429)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.127-.093.25-.187.369-.282L.369-.281C.25-.187.126-.094 0 0"></path>
            </g>
            <g transform="translate(257.676 62.148)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.112-.088.22-.176.324-.264L.323-.265A9.95 9.95 0 010 0"></path>
            </g>
            <g transform="translate(258 61.883)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685c.096-.081.188-.162.277-.241L.276-.24C.187-.16.096-.08 0 0"></path>
            </g>
            <g transform="translate(258.276 61.643)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685c.079-.072.155-.142.227-.211L.227-.211C.154-.141.078-.07 0 0"></path>
            </g>
            <g transform="translate(258.503 61.432)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685c.064-.061.124-.121.182-.179L.182-.179C.123-.119.063-.06 0 0"></path>
            </g>
            <g transform="translate(258.684 61.253)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685c.05-.051.098-.101.144-.151L.144-.149C.098-.101.05-.05 0 0"></path>
            </g>
            <g transform="translate(258.828 61.103)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.117-.129L.117-.13A12.47 12.47 0 010 0"></path>
            </g>
            <g transform="translate(258.945 60.974)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.1-.118L.1-.117 0 0"></path>
            </g>
            <g transform="translate(259.045 60.856)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.084-.104L.084-.103A2.7 2.7 0 010 0"></path>
            </g>
            <g transform="translate(259.129 60.754)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.082-.109L.082-.108 0 0"></path>
            </g>
            <g transform="translate(259.21 60.645)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.031-.04.059-.08.085-.12L.085-.119A2.666 2.666 0 010 0"></path>
            </g>
            <g transform="translate(259.296 60.526)">
              <path
                fill="#7b53ab"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.057-.088L.057-.088 0 0"></path>
            </g>
            <g transform="translate(259.352 60.438)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684c.029-.045.055-.088.078-.131L.077-.132A1.864 1.864 0 010 0"></path>
            </g>
            <g transform="translate(259.43 60.307)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.073 72.685.027-.052L.027-.052C.019-.034.01-.018 0 0"></path>
            </g>
            <g transform="translate(259.457 60.255)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.026-.052L.025-.051A.599.599 0 010 0"></path>
            </g>
            <g transform="translate(259.482 60.204)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.015-.032L.015-.032 0 0"></path>
            </g>
            <g transform="translate(259.497 60.172)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.013-.031L.013-.03 0 0"></path>
            </g>
            <g transform="translate(259.51 60.142)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.013-.031L.013-.03 0 0"></path>
            </g>
            <g transform="translate(259.522 60.111)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.011-.031L.011-.029 0 0"></path>
            </g>
            <g transform="translate(259.533 60.082)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.011-.029L.011-.029 0 0"></path>
            </g>
            <g transform="translate(259.544 60.053)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.008-.028L.008-.026 0 0"></path>
            </g>
            <g transform="translate(259.551 60.026)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684a.198.198 0 00.008-.026L.008-.026 0 0"></path>
            </g>
            <g transform="translate(259.56 60)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.007-.027L.007-.025 0 0"></path>
            </g>
            <g transform="translate(259.566 59.975)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.006-.026L.006-.025 0 0"></path>
            </g>
            <g transform="translate(259.572 59.95)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684a.221.221 0 00.005-.025L.006-.025 0 0"></path>
            </g>
            <g transform="translate(259.578 59.924)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.071 72.685a.185.185 0 00.004-.023L.003-.021 0 0"></path>
            </g>
            <g transform="translate(259.58 59.902)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.004-.022L.004-.021 0 0"></path>
            </g>
            <g transform="translate(259.585 59.88)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.684.002-.021L.002-.021 0 0"></path>
            </g>
            <g transform="translate(259.587 59.86)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.002-.021L.002-.021 0 0"></path>
            </g>
            <g transform="translate(259.589 59.839)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685.001-.021L.001-.021 0 0"></path>
            </g>
            <g transform="translate(259.59 59.818)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l125.072 72.685v-.02L0-.019z"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1898)">
            <g transform="translate(55.473 172.963)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614c-1.101-.64-2.089-1.401-2.763-2.088L-2.763-2.088C-2.09-1.4-1.102-.64 0 0"></path>
            </g>
            <g transform="translate(52.71 170.875)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.857-109.614a7.747 7.747 0 01-.325-.355L-.326-.354C-.228-.239-.119-.12 0 0"></path>
            </g>
            <g transform="translate(52.385 170.52)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614a8.316 8.316 0 01-.17-.212L-.17-.211c.053.068.109.14.17.211"></path>
            </g>
            <g transform="translate(52.215 170.31)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615a3.802 3.802 0 01-.102-.141L-.103-.141 0 0"></path>
            </g>
            <g transform="translate(52.112 170.169)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615-.071-.108L-.071-.108c.022.036.047.071.071.108"></path>
            </g>
            <g transform="translate(52.04 170.06)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614c-.019-.032-.039-.064-.056-.095L-.057-.095C-.039-.063-.02-.032 0 0"></path>
            </g>
            <g transform="translate(51.984 169.966)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614-.039-.072L-.039-.07c.012.023.025.047.039.07"></path>
            </g>
            <g transform="translate(51.945 169.895)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615-.035-.07L-.035-.069c.011.022.022.046.035.069"></path>
            </g>
            <g transform="translate(51.91 169.826)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615-.026-.058L-.026-.059 0 0"></path>
            </g>
            <g transform="translate(51.883 169.768)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614-.022-.056L-.022-.056 0 0"></path>
            </g>
            <g transform="translate(51.861 169.712)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614-.018-.055L-.019-.054 0 0"></path>
            </g>
            <g transform="translate(51.843 169.658)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615a1.103 1.103 0 01-.016-.054L-.017-.054 0 0"></path>
            </g>
            <g transform="translate(51.826 169.605)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.615-.012-.052L-.013-.053 0 0"></path>
            </g>
            <g transform="translate(51.813 169.552)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614-.011-.074L-.012-.073A.925.925 0 000 0"></path>
            </g>
            <g transform="translate(51.801 169.478)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l189.858-109.614a.74.74 0 01-.003-.065L-.003-.064c0 .021.001.043.003.064"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath1966)">
            <g transform="translate(259.402 59.11)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-5.29-2.844-12.161-2.856-17.507-.033-.175.1-.24.213-.24.37 4.973-2.871 12.994-2.871 17.934 0A.368.368 0 000 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c4.11-2.373 10.304-2.784 15.117-1.234 1.457.475 2.149.86 2.817 1.232a.365.365 0 00-.187-.335l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.462-1.999 8.402-2.606 12.752-1.821 2.392.43 3.801 1.03 5.181 1.8a.36.36 0 00-.186-.316c-.979-.526-.998-.537-1.58-.781l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.038-1.754 7.214-2.437 11.13-2.047 3.82.344 5.91 1.509 6.802 2.006a.36.36 0 00-.185-.296l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.678-1.546 6.238-2.26 9.727-2.141 4.165.111 6.571 1.169 8.203 2.079a.357.357 0 00-.183-.275l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.346-1.354 5.37-2.069 8.429-2.146 3.731-.125 6.749.532 9.498 2.064a.356.356 0 00-.18-.255l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.026-1.17 4.56-1.863 7.185-2.079 4.096-.379 7.709.285 10.737 1.975a.356.356 0 00-.175-.233l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.708-.986 3.775-1.634 5.955-1.942 3.114-.478 7.717-.551 11.961 1.815a.349.349 0 00-.169-.21l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.377-.795 2.988-1.37 4.702-1.725 4.812-1.052 9.501-.494 13.205 1.573a.352.352 0 00-.16-.185l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.015-.586 2.156-1.052 3.372-1.398 3.823-1.198 9.647-1.506 14.524 1.217a.367.367 0 00-.149-.156l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
            <g transform="translate(241.655 59.446)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0a13.879 13.879 0 011.844-.884c4.024-1.743 10.758-2.278 16.031.667a.36.36 0 00-.128-.12l-.743-.399c-.251-.116-.583-.276-.837-.382l-.817-.315c-.265-.085-.617-.205-.883-.283l-.873-.229c-.274-.058-.637-.141-.912-.192l-.911-.145c-.278-.031-.649-.079-.928-.105l-.932-.061c-.28-.007-.654-.022-.935-.022l-.935.022c-.28.018-.653.037-.933.061l-.922.104c-.276.044-.645.096-.919.146l-.894.187c-.269.07-.628.157-.894.233l-.848.271c-.257.097-.603.221-.857.327L.99-.766c-.241.127-.566.291-.803.427C.065-.27 0-.157 0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath2018)">
            <g transform="translate(255.898 63.349)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.04-1.178 3.693-2.768 3.691-3.549-4.939-2.87-12.961-2.87-17.932 0 .002.781 1.647 2.371 3.675 3.549C-7.641-1.691-2.907-1.691 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#754ca8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.525-.88 2.833-1.99 3.397-2.821l-.181-.018c-1.89-.459-3.74-1.075-5.655-1.437-3.579-.677-3.579-.677-3.581-.703-.045-.834 7.239-.276 9.409 1.869.036.035.075.091.108.131.126-.216.195-.41.195-.57-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#7045a4"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.451-.837 2.705-1.882 3.309-2.697a.318.318 0 01-.033-.008C9.909-3.86 9.909-3.86 9.09-4.034a52.597 52.597 0 00-3.065-.528c-1.236-.174-1.715-.289-1.708-.409.039-.605 6.772-.593 9.789 1.913.099-.184.152-.35.152-.491-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#693ca0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.391-.803 2.601-1.797 3.231-2.596l-.333-.111c-2.23-.764-3.457-1.113-5.912-1.556l-.101-.018a83.217 83.217 0 00-1.919-.293c-.328-.047-1.324-.189-1.404-.307-.018-.025-.024-.076-.008-.103.156-.265 5.714-1.087 10.012 1.878.082-.165.126-.315.126-.443-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#60309a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.331-.769 2.497-1.712 3.147-2.492l-.173-.065c-1.273-.465-3.644-1.332-6.996-1.8-1.54-.215-2.652-.371-2.689-.507-.142-.533 5.653-1.115 9.845 1.424.139.084.319.202.45.295a.97.97 0 00.108-.404c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#4a148c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.268-.731 2.385-1.622 3.05-2.379a95.654 95.654 0 00-.481-.189c-2.009-.791-4.267-1.371-6.709-1.726-2.392-.346-2.822-.408-2.841-.55-.063-.467 5.742-1.412 10.58 1.666a.914.914 0 00.093-.371c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#491489"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.196-.69 2.258-1.521 2.933-2.249-3.343-1.45-6.35-1.862-8.765-2.193-1.257-.173-1.444-.31-1.442-.376.011-.621 6.474-1.248 10.887 1.609a.921.921 0 00.079-.34c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#471386"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.114-.643 2.111-1.407 2.788-2.097l-.196-.089c-3.2-1.384-5.522-1.722-8.737-2.19-.872-.127-1.339-.239-1.387-.333-.022-.044-.013-.122.012-.164.186-.303 5.935-1.516 11.144 1.634a.854.854 0 00.068-.31c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#461384"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 1.017-.587 1.938-1.276 2.606-1.917l-.44-.204c-.766-.335-3.101-1.355-6.731-1.882-2.651-.385-3.281-.476-3.325-.664-.138-.591 6.217-1.795 11.526 1.399a.858.858 0 00.056-.281c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#441281"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0a14.352 14.352 0 002.379-1.706l-.421-.205C9.61-3.254 7.166-3.63 3.782-4.15c-1.005-.155-1.462-.298-1.479-.466-.057-.507 6.332-1.932 11.909 1.32a.824.824 0 00.046-.253c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#43127e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0a14.643 14.643 0 002.104-1.467l-.402-.202c-1.943-.907-3.69-1.424-6.446-1.905-3.885-.678-3.885-.678-3.921-.894-.13-.768 6.621-2.131 12.32 1.145a.8.8 0 00.037-.226c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#41127b"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0a15.133 15.133 0 001.78-1.202l-.382-.196C9.683-2.486 7.683-2.939 4.789-3.396 2.63-3.735-.058-4.159 2.301-4.934c1.504-.493 6.923-1.262 11.928 1.584a.772.772 0 00.029-.199c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#401178"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 .499-.288.975-.601 1.41-.92l-.36-.188C9.358-2.2 7.389-2.605 4.323-3.012-.586-3.661.715-4.459 1.927-4.876c1.667-.574 7.127-1.424 12.308 1.5a.736.736 0 00.023-.173c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#3e1176"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 .347-.2.683-.412 1.001-.63l-.336-.179C8.977-1.911 6.875-2.265 4.008-2.504c-7.009-.584-2.534-2.285-2.487-2.302C3.25-5.43 8.905-6.393 14.24-3.4a.672.672 0 00.018-.149c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#3d1073"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0 .192-.11.38-.225.564-.342a47.136 47.136 0 00-.31-.168C8.102-1.851 5.47-1.938 2.788-1.913c-5.37.052-3.586-2.164-1.606-2.842 2.46-.844 7.98-1.512 13.063 1.331a.625.625 0 00.013-.125c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(245.332 63.349)">
              <path
                fill="#3b1070"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.926-1.691 7.659-1.691 10.566 0l.108-.062-.284-.157C6.562-2.125 2.603-1.192.911-.794c-2.709.637-2.757-1.167-2.739-1.535.047-.956 1.142-1.879 2.932-2.47 2.503-.825 8.087-1.469 13.146 1.352a.735.735 0 00.008-.102c-4.94-2.87-12.961-2.87-17.933 0C-3.673-2.768-2.027-1.178 0 0"></path>
            </g>
            <g transform="translate(242.566 61.258)">
              <path
                fill="#3a106d"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.65-3.567 10.73-4.883 17.019-1.378-4.935-2.95-12.957-2.95-17.928-.08.001.356.344.881.909 1.458"></path>
            </g>
            <g transform="translate(242.24 60.902)">
              <path
                fill="#380f6a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.158-3.646 11.751-4.162 17.347-1.043-4.937-2.93-12.958-2.93-17.93-.06 0 .282.215.668.583 1.103"></path>
            </g>
            <g transform="translate(250.206 58.44)">
              <path
                fill="#7b53ab"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.174.088.919.212 2.147.396C2.158.398 3.274.572 4.36.8c1.423.299 2.797.789 4.22 1.092.11.023.303.099.378.015C9.255 1.576 5.47-.584 1.03-.334c-.194.011-1.163.075-1.133.257.006.038.069.059.103.077"></path>
            </g>
            <g transform="translate(242.073 60.695)">
              <path
                fill="#370f68"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.283-3.182 11.471-4.224 17.516-.856-4.939-2.91-12.96-2.91-17.932-.04 0 .237.15.546.416.896"></path>
            </g>
            <g transform="translate(250.447 58.435)">
              <path
                fill="#7f59ae"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.151.067.892.199 1.344.267a47.16 47.16 0 012.789.495c1.313.274 2.588.704 3.901.979.117.025.3.095.401.029.013-.01.027-.032.027-.048C8.442.649.932-1-.087-.155c-.02.016-.048.051-.041.077.013.044.087.06.128.078"></path>
            </g>
            <g transform="translate(250.636 58.41)">
              <path
                fill="#835fb1"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.059.03.213.11 1.729.343.007.001.928.151 1.679.296 1.393.267 2.748.696 4.136.985.106.022.429.09.486.05a.086.086 0 00.032-.072C7.901.582.755-.939-.073-.131c-.017.018-.035.055-.027.077.013.033.07.038.1.054"></path>
            </g>
            <g transform="translate(241.969 60.55)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.549-3.012 11.658-4.053 17.621-.732C12.682-3.621 4.66-3.621-.312-.751-.312-.548-.2-.29 0 0"></path>
            </g>
            <g transform="translate(250.928 58.437)">
              <path
                fill="#8764b3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.013.354 2.086.375 3.126.576 1.287.248 2.541.639 3.827.889.316.06.589.113.594 0 .004-.101-1.039-.933-3.684-1.489C1.947-.427-.023-.323-.165-.158c-.016.018-.023.056-.013.077.029.052.123.062.178.081"></path>
            </g>
            <g transform="translate(241.896 60.44)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c4.218-3.163 10.511-3.221 14.877-1.875C10.063-3.425 3.87-3.014-.239-.641c0 .177.085.396.239.641"></path>
            </g>
            <g transform="translate(250.963 58.358)">
              <path
                fill="#8b69b5"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.044.063 7.156 1.543 7.247 1.507.024-.009.058-.034.059-.06.002-.093-.991-.863-3.48-1.383C1.861-.345.093-.212-.003-.077-.017-.059-.014-.02 0 0"></path>
            </g>
            <g transform="translate(251.174 58.362)">
              <path
                fill="#8f6db8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.042.05.396.124.631.174l5.931 1.213c.074.014.315.054.326-.035.008-.081-.94-.796-3.276-1.281C1.705-.323.048-.189-.018-.078-.029-.057-.016-.019 0 0"></path>
            </g>
            <g transform="translate(241.843 60.352)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c4.627-3.362 10.787-2.666 12.565-2.373-4.349-.784-9.29-.178-12.751 1.821 0 .156.066.343.186.552"></path>
            </g>
            <g transform="translate(251.391 58.37)">
              <path
                fill="#9272ba"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.058.052 6.437 1.423 6.467 1.258.016-.09-.968-.749-3.074-1.182C1.557-.302.014-.184-.034-.079-.045-.056-.019-.018 0 0"></path>
            </g>
            <g transform="translate(241.802 60.276)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.778-1.958 6.68-2.854 10.984-2.523-3.916-.39-8.091.293-11.129 2.046 0 .137.051.298.145.477"></path>
            </g>
            <g transform="translate(251.611 58.378)">
              <path
                fill="#9576bc"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.03.023 5.872 1.232 6.047 1.166C4.961-.034.039-.332-.053-.08c-.009.027.03.062.053.08"></path>
            </g>
            <g transform="translate(251.818 58.377)">
              <path
                fill="#987abe"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.028.019 5.241 1.194 5.626 1.091-.602-.728-4.48-1.52-5.685-1.16L0 0"></path>
            </g>
            <g transform="translate(241.768 60.21)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.353-2.289 7.463-2.581 9.614-2.552-3.488-.118-7.049.595-9.725 2.141A1 1 0 000 0"></path>
            </g>
            <g transform="translate(252.07 58.403)">
              <path
                fill="#9b7ec0"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.027.016 4.729 1.073 5.177.983C4.543.311 1.044-.396-.097-.083c.03.024.064.065.097.083"></path>
            </g>
            <g transform="translate(241.742 60.151)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.842-1.879 6.105-2.396 8.343-2.498-3.059.077-6.083.792-8.428 2.146 0 .104.029.222.085.352"></path>
            </g>
            <g transform="translate(252.307 58.42)">
              <path
                fill="#9e81c1"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.025.013 4.216.97 4.728.89C4.201.336 1.022-.38-.117-.086c.035.025.078.067.117.086"></path>
            </g>
            <g transform="translate(241.72 60.097)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.753-.482 3.045-1.95 7.121-2.376-2.625.216-5.158.909-7.183 2.079A.85.85 0 000 0"></path>
            </g>
            <g transform="translate(252.414 58.355)">
              <path
                fill="#a185c3"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.32.199 3.897.914 4.398.879C3.846.348.968-.23 0-.005V0"></path>
            </g>
            <g transform="translate(252.858 58.472)">
              <path
                fill="#a488c5"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.021.008 3.063.713 3.718.686C3.271.262.697-.31-.196-.097c.058.029.134.075.196.097"></path>
            </g>
            <g transform="translate(241.7 60.044)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.81-1.13 3.467-1.742 5.91-2.187-2.18.309-4.247.957-5.954 1.943 0 .074.015.156.044.244"></path>
            </g>
            <g transform="translate(252.997 58.44)">
              <path
                fill="#a68cc7"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.195.082 2.437.611 3.327.64C2.772.2.559-.193-.081-.039L0 0"></path>
            </g>
            <g transform="translate(241.685 59.992)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.269-.783 2.493-1.376 4.673-1.917-1.714.355-3.325.93-4.701 1.725 0 .059.009.124.028.192"></path>
            </g>
            <g transform="translate(253.567 58.56)">
              <path
                fill="#a98fc8"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.014.004 1.724.409 2.456.433C2.063.124.409-.242-.342-.123c.103.037.238.092.342.123"></path>
            </g>
            <g transform="translate(241.672 59.938)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.859-.523 1.704-1.001 3.356-1.536C2.141-1.189.999-.724-.015-.138c0 .044.005.09.015.138"></path>
            </g>
            <g transform="translate(253.584 58.488)">
              <path
                fill="#ab92ca"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.544.176 1.359.335 2.075.405C1.383.003.233-.048-.021-.007L0 0"></path>
            </g>
            <g transform="translate(241.662 59.875)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.707-.427.951-.566 1.838-.958-.649.256-1.267.55-1.843.883 0 .024.001.049.005.075"></path>
            </g>
            <g transform="translate(254.16 58.58)">
              <path
                fill="#ae95cb"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.274.069.647.134.927.177C.621.071.332-.028-.047-.014L0 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath2214)">
            <g transform="translate(259.59 59.8)">
              <path
                fill="#350e65"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.848-.492-1.785-.9-2.783-1.223l.002.353A14.44 14.44 0 010 0"></path>
            </g>
            <g transform="translate(256.807 58.576)">
              <path
                fill="#340e62"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.002-.354a18.065 18.065 0 00-2.4-.597l.001.353C-1.575-.448-.77-.249 0 0"></path>
            </g>
            <g transform="translate(254.406 57.978)">
              <path
                fill="#320e5f"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a20.868 20.868 0 00-1.616-.225l.001.353C-1.071-.171-.531-.096 0 0"></path>
            </g>
            <g transform="translate(252.79 57.753)">
              <path
                fill="#310d5c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354a22.555 22.555 0 00-1.404-.093l.001.354C-.935-.077-.465-.046 0 0"></path>
            </g>
            <g transform="translate(251.386 57.66)">
              <path
                fill="#2f0d5a"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354A21.572 21.572 0 00-1.298-.36l.001.353C-.865-.018-.432-.016 0 0"></path>
            </g>
            <g transform="translate(250.089 57.653)">
              <path
                fill="#2e0c57"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.418.011-.834.033-1.248.067l.001.354C-.834.033-.418.011 0 0"></path>
            </g>
            <g transform="translate(248.84 57.72)">
              <path
                fill="#2c0c54"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.413.034-.824.08-1.231.138l.001.354C-.824.08-.413.034 0 0"></path>
            </g>
            <g transform="translate(247.61 57.858)">
              <path
                fill="#2b0c51"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.424.06-.844.132-1.257.218l.001.355C-.844.133-.424.06 0 0"></path>
            </g>
            <g transform="translate(246.352 58.077)">
              <path
                fill="#290b4e"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.448.092-.891.201-1.322.324l.001.354C-.891.2-.448.093 0 0"></path>
            </g>
            <g transform="translate(245.03 58.401)">
              <path
                fill="#280b4c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.529.151-1.045.324-1.541.52l.001.354C-1.045.324-.529.15 0 0"></path>
            </g>
            <g transform="translate(243.489 58.92)">
              <path
                fill="#260a49"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-.001-.354c-.645.255-1.259.548-1.833.879l.002.354A13.766 13.766 0 010 0"></path>
            </g>
          </g>
        </g>
        <g>
          <g clipPath="url(#clipPath2266)">
            <g>
              <g>
                <g clipPath="url(#clipPath2274)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2278)">
                        <g transform="translate(193.247 232.73)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.9c-.507.293-1.336.293-1.84 0l-2.519-1.463c-.504-.293-.502-.773.006-1.066l8.488-4.901c.507-.293 1.336-.293 1.84 0l2.52 1.465C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2282)">
                        <g transform="translate(205.975 225.38)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.293-1.336.293-1.839 0l-2.52-1.463c-.504-.293-.501-.774.006-1.067l8.488-4.9c.508-.293 1.336-.293 1.84 0l2.52 1.464C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2286)">
                        <g transform="translate(218.704 218.032)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.292-1.336.292-1.84 0l-2.52-1.464c-.504-.292-.501-.773.006-1.066l8.489-4.9c.515-.298 1.335-.293 1.839 0l2.52 1.464C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2290)">
                        <g transform="translate(231.432 210.684)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.515.297-1.336.292-1.839 0l-2.52-1.464c-.504-.293-.51-.768.006-1.066l8.48-4.896c.516-.297 1.336-.292 1.84 0L.006-1.065C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2294)">
                        <g transform="translate(244.16 203.334)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.479 4.896c-.516.298-1.336.293-1.84 0l-2.52-1.463c-.504-.293-.51-.769.006-1.066l8.48-4.896c.516-.298 1.344-.298 1.848-.005L.015-1.07C.519-.777.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2298)">
                        <g transform="translate(256.898 195.98)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            onClick={handleSvgReload}
                            onPress={handleSvgReload}
                            d="M0 0l-8.488 4.901c-.508.292-1.336.292-1.84 0l-2.52-1.463c-.504-.293-.501-.774.006-1.067l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2302)">
                        <g transform="translate(269.627 188.632)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-2.52-1.463c-.504-.293-.501-.773.007-1.066l8.488-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2306)">
                        <g transform="translate(282.356 181.283)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.9c-.507.293-1.336.293-1.84 0l-2.519-1.463c-.504-.293-.502-.773.006-1.066l8.488-4.901c.507-.293 1.336-.293 1.84 0l2.52 1.465C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2310)">
                        <g transform="translate(295.085 173.934)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.293-1.335.293-1.839 0l-2.52-1.463c-.504-.293-.501-.774.006-1.067l8.488-4.9c.516-.298 1.336-.293 1.84 0l2.52 1.464C.51-.772.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2314)">
                        <g transform="translate(307.813 166.585)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.292-1.84 0l-2.519-1.464c-.504-.293-.51-.768.006-1.066l8.48-4.895c.515-.298 1.344-.298 1.848-.005L.015-1.07C.519-.777.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2318)">
                        <g transform="translate(320.55 159.231)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.9c-.515.298-1.336.293-1.839 0l-2.52-1.463c-.504-.293-.509-.768.006-1.066l8.488-4.901c.508-.292 1.336-.292 1.84 0l2.52 1.465C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2322)">
                        <g transform="translate(333.279 151.882)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-2.52-1.463c-.504-.293-.501-.774.006-1.066l8.489-4.901c.507-.293 1.335-.293 1.839 0l2.52 1.464C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2326)">
                        <g transform="translate(346.007 144.533)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.292-1.336.292-1.84 0l-2.52-1.464c-.504-.292-.501-.773.006-1.066l8.489-4.9c.507-.293 1.336-.293 1.839 0l2.52 1.464C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2330)">
                        <g transform="translate(358.736 137.185)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-2.52-1.463c-.503-.293-.501-.773.007-1.066l8.488-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2334)">
                        <g transform="translate(185.862 228.439)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.501-.773.005-1.066l8.49-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2338)">
                        <g transform="translate(198.59 221.09)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.292-1.336.292-1.84 0l-6.318-3.672c-.505-.293-.502-.773.005-1.066l8.489-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2342)">
                        <g transform="translate(211.32 213.741)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.502-.773.005-1.066l8.489-4.901c.515-.297 1.336-.292 1.84 0L.006-1.065C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2346)">
                        <g transform="translate(224.049 206.393)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.292-1.84 0l-6.32-3.672c-.504-.293-.508-.769.007-1.066l8.48-4.896c.515-.298 1.336-.293 1.84 0L.006-1.066C.51-.773.515-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2350)">
                        <g transform="translate(236.777 199.043)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.509-.769.006-1.067l8.481-4.895c.514-.298 1.343-.298 1.847-.005L.014-1.07C.518-.777.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2354)">
                        <g transform="translate(249.513 191.69)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.501-.773.005-1.066l8.489-4.901c.507-.292 1.336-.292 1.84 0L.007-1.065C.511-.773.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2358)">
                        <g transform="translate(262.243 184.34)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.9c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.506-.293 1.335-.293 1.839 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2362)">
                        <g transform="translate(274.971 176.991)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.501-.773.005-1.066l8.49-4.9c.506-.293 1.336-.293 1.839 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2366)">
                        <g transform="translate(287.7 169.643)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.292-1.336.292-1.84-.001l-6.318-3.671c-.505-.293-.502-.773.004-1.066l8.49-4.9c.515-.298 1.336-.293 1.84 0L.006-1.065C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2370)">
                        <g transform="translate(300.428 162.294)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.479 4.896c-.516.297-1.336.292-1.84 0l-6.32-3.672c-.504-.293-.509-.769.006-1.066l8.481-4.896c.515-.298 1.343-.298 1.848-.005L.015-1.07C.519-.778.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2374)">
                        <g transform="translate(313.166 154.94)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.516.298-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.509-.768.006-1.066l8.489-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2378)">
                        <g transform="translate(325.894 147.59)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.292-.502-.773.005-1.066l8.489-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2382)">
                        <g transform="translate(351.352 132.894)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-11.807 6.815-.623.361-8.788 5.073c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.293-.501-.772.006-1.065l8.788-5.074.623-.36 11.806-6.816c.507-.293 1.336-.293 1.84 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2386)">
                        <g transform="translate(185.935 215.44)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-2.769 1.599-6.642 3.835-10.335 5.965c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.501-.773.006-1.066L-17.564.695l6.643-3.835 2.769-1.598c.506-.293 1.335-.293 1.839 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2390)">
                        <g transform="translate(200.136 207.241)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.501-.773.005-1.066l8.49-4.9c.515-.298 1.336-.293 1.84 0L.006-1.065C.51-.772.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2394)">
                        <g transform="translate(212.864 199.893)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.335.292-1.839 0l-6.32-3.672c-.504-.292-.509-.768.006-1.066l8.481-4.895c.515-.298 1.336-.293 1.84 0L.006-1.065C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2398)">
                        <g transform="translate(225.593 192.544)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.479 4.896c-.516.297-1.336.292-1.84 0l-6.32-3.672c-.504-.293-.509-.768.006-1.066l8.481-4.896c.515-.298 1.343-.298 1.847-.005L.015-1.07C.519-.778.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2402)">
                        <g transform="translate(238.33 185.19)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.501-.773.006-1.065l8.489-4.901c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2406)">
                        <g transform="translate(251.058 177.84)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.292-.502-.773.005-1.066l8.489-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2410)">
                        <g transform="translate(263.787 170.492)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.501-.773.005-1.066l8.489-4.901c.507-.292 1.336-.292 1.84 0L.007-1.065C.51-.773.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2414)">
                        <g transform="translate(276.516 163.144)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.9c-.507.293-1.335.293-1.839 0l-6.319-3.671c-.504-.293-.501-.774.005-1.066l8.489-4.901c.515-.298 1.336-.293 1.84 0L.006-1.066C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2418)">
                        <g transform="translate(289.245 155.794)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.298-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.509-.769.006-1.067l8.481-4.895c.515-.298 1.343-.298 1.847-.005L.015-1.07C.519-.777.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2422)">
                        <g transform="translate(301.982 148.44)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.515.297-1.336.292-1.84 0l-6.318-3.672c-.504-.293-.51-.768.005-1.066l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2426)">
                        <g transform="translate(314.71 141.092)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.506-.293 1.336-.293 1.839 0L.006-1.065C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2430)">
                        <g transform="translate(167.095 213.361)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-12.089 6.979c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.774.007-1.067l12.088-6.978c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2434)">
                        <g transform="translate(180.13 205.835)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.292-1.335.292-1.839 0l-6.319-3.672c-.504-.292-.501-.773.005-1.066l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2438)">
                        <g transform="translate(192.86 198.486)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.506-.293 1.336-.293 1.839 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2442)">
                        <g transform="translate(205.588 191.137)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.507.293-1.336.293-1.84 0l-6.319-3.672c-.503-.292-.501-.773.006-1.065l8.489-4.901c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2446)">
                        <g transform="translate(218.316 183.788)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.507.292-1.336.292-1.84 0l-6.318-3.672c-.504-.293-.502-.773.005-1.066l8.489-4.9c.515-.298 1.336-.293 1.84 0L.006-1.065C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2450)">
                        <g transform="translate(231.045 176.44)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.479 4.896c-.516.297-1.336.292-1.84 0l-6.32-3.672c-.504-.293-.508-.768.006-1.066l8.481-4.896c.515-.297 1.344-.297 1.848-.005L.015-1.07C.519-.777.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2454)">
                        <g transform="translate(243.782 169.086)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.516.298-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.51-.769.005-1.066l8.489-4.901c.506-.293 1.336-.293 1.84 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2458)">
                        <g transform="translate(256.511 161.736)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.292-.501-.773.005-1.066l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2462)">
                        <g transform="translate(269.24 154.388)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.292-1.336.292-1.839 0l-6.319-3.672c-.504-.293-.501-.773.005-1.066l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2466)">
                        <g transform="translate(281.969 147.04)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.506-.293 1.336-.293 1.839 0L.006-1.066C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2470)">
                        <g transform="translate(294.697 139.69)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.298-1.344.298-1.848.005l-6.319-3.672c-.504-.292-.501-.773.014-1.07l8.481-4.896c.515-.298 1.336-.293 1.84 0L.006-1.065C.51-.772.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2474)">
                        <g transform="translate(307.425 132.34)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.515.297-1.335.293-1.839 0l-6.32-3.672c-.504-.292-.509-.768.006-1.066l8.481-4.895c.515-.298 1.344-.298 1.847-.005L.015-1.07C.519-.777.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2478)">
                        <g transform="translate(340.168 126.394)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-21.217 12.25c-.508.293-1.336.293-1.84 0l-6.319-3.672c-.504-.293-.501-.773.007-1.065L-26.751 6c.898-.519.903-1.363.011-1.882l-8.649-5.025c-.504-.293-.508-.769.007-1.066l16.046-9.264c.507-.293 1.336-.293 1.839 0l10.268 5.966 4.072 2.367L.006-1.065C.51-.772.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2482)">
                        <g transform="translate(152.31 208.94)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.292-1.335.293-1.84 0l-6.318-3.672c-.504-.292-.501-.773.005-1.066l8.49-4.9c.506-.293 1.335-.293 1.839 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2486)">
                        <g transform="translate(165.039 201.592)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.506-.292 1.336-.292 1.84 0L.006-1.065C.51-.773.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2490)">
                        <g transform="translate(177.767 194.243)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.774.006-1.066l8.489-4.901c.515-.298 1.336-.293 1.84 0L.006-1.066C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2494)">
                        <g transform="translate(190.496 186.894)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.479 4.896c-.516.297-1.336.293-1.84 0l-6.32-3.671c-.504-.293-.508-.769.006-1.067l8.481-4.895c.515-.298 1.336-.293 1.84 0L.007-1.065C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2498)">
                        <g transform="translate(203.225 179.545)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.292-1.84 0l-6.32-3.672c-.504-.293-.508-.768.007-1.066l8.48-4.896c.515-.297 1.344-.297 1.848-.004L.014-1.07C.518-.777.515-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2502)">
                        <g transform="translate(215.962 172.191)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.84 0l-6.318-3.671c-.504-.293-.502-.773.005-1.066l8.489-4.901c.506-.293 1.336-.293 1.84 0L.006-1.066C.51-.773.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2506)">
                        <g transform="translate(228.691 164.842)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.292-.501-.773.005-1.066l8.489-4.9c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2510)">
                        <g transform="translate(241.42 157.493)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.292-1.336.292-1.839 0l-6.319-3.672c-.504-.293-.501-.773.005-1.066l8.49-4.9c.506-.293 1.335-.293 1.839 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2514)">
                        <g transform="translate(254.148 150.144)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.901c.515-.297 1.336-.292 1.84 0L.006-1.065C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2518)">
                        <g transform="translate(266.877 142.795)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.515.298-1.335.293-1.84 0l-6.319-3.671c-.504-.293-.509-.769.006-1.066l8.481-4.896c.515-.298 1.343-.298 1.847-.005L.015-1.07C.519-.777.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2522)">
                        <g transform="translate(279.614 135.441)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.516.297-1.336.293-1.84 0l-6.319-3.672c-.504-.292-.509-.768.005-1.066l8.49-4.9c.506-.293 1.335-.293 1.839 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2526)">
                        <g transform="translate(292.342 128.093)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.84 0l-6.319-3.671c-.504-.293-.501-.773.005-1.066l8.49-4.9c.506-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2530)">
                        <g transform="translate(317.8 113.394)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-11.807 6.816-.623.361-8.788 5.073c-.507.293-1.336.293-1.84 0l-6.318-3.672c-.504-.293-.501-.773.006-1.065l8.788-5.075.623-.359 11.806-6.816c.507-.293 1.336-.293 1.84 0L.006-1.065C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2534)">
                        <g transform="translate(141.126 202.441)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.507.293-1.336.293-1.848-.004l-6.31-3.667c-.513-.298-.502-.773.005-1.066l8.489-4.901c.506-.293 1.328-.297 1.84 0l6.31 3.668C.51-.773.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2538)">
                        <g transform="translate(153.854 195.092)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.507.293-1.336.293-1.848-.005l-6.31-3.667c-.513-.297-.501-.773.005-1.066l8.489-4.9c.507-.293 1.328-.298 1.84 0l6.31 3.667C.511-.772.508-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2542)">
                        <g transform="translate(166.584 187.743)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.292-1.335.292-1.848-.005l-6.31-3.667c-.512-.297-.501-.773.005-1.066l8.49-4.9c.514-.298 1.327-.298 1.839 0l6.31 3.667C.51-.772.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2546)">
                        <g transform="translate(179.312 180.394)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.292-1.848-.005l-6.311-3.667c-.512-.298-.509-.768.006-1.066l8.481-4.896c.515-.297 1.327-.297 1.84 0l6.31 3.668C.51-.773.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2550)">
                        <g transform="translate(242.964 143.644)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-7.897 4.561-1.514.873-2.395 1.382-10.334 5.967-2.394 1.382-10.334 5.967-2.395 1.383-10.334 5.965-11.806 6.817c-.515.298-1.335.293-1.848-.005l-6.311-3.667c-.511-.298-.509-.769.006-1.065l11.806-6.817 10.335-5.967 2.394-1.381 10.334-5.967 2.395-1.383 10.334-5.966 2.395-1.383 1.512-.874 7.899-4.559c.515-.298 1.328-.298 1.84 0l6.31 3.667C.511-.772.516-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2554)">
                        <g transform="translate(255.693 136.296)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.48 4.896c-.516.297-1.336.293-1.848-.004l-6.311-3.668c-.512-.297-.509-.768.006-1.066l8.48-4.895c.515-.298 1.336-.303 1.848-.005L.006-1.075C.518-.777.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2558)">
                        <g transform="translate(268.43 128.942)">
                          <path
                            class="keyboard-hover-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.516.298-1.336.293-1.848-.004l-6.31-3.667c-.513-.298-.51-.768.005-1.066l8.489-4.901c.507-.292 1.328-.297 1.84 0l6.31 3.668C.511-.773.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2562)">
                        <g transform="translate(281.159 121.593)">
                          <path
                            class="keyboard-hover-arrow-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.489 4.901c-.507.293-1.336.293-1.848-.005l-6.31-3.667c-.512-.297-.501-.773.005-1.065l8.489-4.901c.507-.293 1.328-.298 1.84 0l6.31 3.667C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2566)">
                        <g transform="translate(293.887 114.244)">
                          <path
                            class="keyboard-hover-arrow-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.849-.005l-1.421-.826c-.504-.292-.501-.772.007-1.065l8.488-4.901c.507-.292 1.336-.292 1.84 0l1.421.826C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2570)">
                        <g transform="translate(288.989 111.397)">
                          <path
                            class="keyboard-hover-arrow-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.901c-.508.293-1.336.293-1.84 0l-1.421-.826c-.512-.297-.501-.772.006-1.065l8.489-4.901c.507-.293 1.327-.297 1.839 0l1.421.826C.51-.772.507-.292 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2574)">
                        <g transform="translate(306.616 106.895)">
                          <path
                            class="keyboard-hover-arrow-element"
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-8.488 4.9c-.508.293-1.336.293-1.849-.004l-6.31-3.667c-.512-.298-.501-.773.006-1.066l8.489-4.901c.506-.292 1.327-.297 1.84 0l6.31 3.668C.51-.772.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath2578)">
                        <g transform="translate(230.975 125.534)">
                          <path
                            class="touchpad-hover-element"
                            fill="#e0e0e0"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-67.177 38.784c-1.53.884-4 .884-5.527-.005l-34.965-20.318c-1.519-.884-1.512-2.315.019-3.197l67.176-38.785c1.538-.888 4.008-.888 5.528-.004L.018-3.207C1.546-2.318 1.538-.888 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3502)" opacity="0.3">
                  <g>
                    <g clipPath="url(#clipPath3506)">
                      <g>
                        <g mask="url(#mask3520)">
                          <g>
                            <path
                              fill="url(#linearGradient3538)"
                              stroke="none"
                              d="M288.448 342.885l-89.281 51.547c-2.317 1.337-4.203.262-4.21-2.399l-.239-83.767c-.006-2.652 1.867-5.907 4.183-7.245l89.281-51.546c2.318-1.337 4.203-.253 4.211 2.399l.238 83.767c.006 2.661-1.867 5.907-4.183 7.244"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3564)" opacity="0.7">
                  <g transform="translate(284.414 337.284)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-33.193 19.164c-1.234.712-2.236.141-2.241-1.276v-.058c-.004-1.408.993-3.132 2.226-3.845L-.015-5.179c1.234-.712 2.227-.136 2.231 1.272l.001.057C2.221-2.432 1.233-.712 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3580)" opacity="0.7">
                  <g transform="translate(233.042 366.837)">
                    <path
                      class="screen-element-code-left"
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-30.247 17.463c-1.032.596-1.866.121-1.869-1.065l-.148-51.864c-.003-1.177.826-2.621 1.858-3.217L-.159-56.146c1.032-.596 1.874-.116 1.878 1.06l.146 51.865C1.869-2.035 1.032-.596 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3596)" opacity="0.7">
                  <g transform="translate(284.739 324.48)">
                    <path
                      class="screen-element-question-mark"
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-41.326 23.859c-1.032.597-1.865.121-1.869-1.065l-.112-39.376c-.003-1.176.825-2.62 1.858-3.216l41.325-23.86c1.032-.595 1.866-.111 1.869 1.066l.111 39.375C1.86-2.03 1.032-.596 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3612)" opacity="0.7">
                  <g transform="translate(283.438 275.136)">
                    <path
                      class="screen-element-code-bottom"
                      fill="#fff"
                      fillOpacity="1"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-80.821 46.662c-1.033.596-1.867.121-1.869-1.065l-.031-10.676c-.003-1.186.825-2.62 1.858-3.216L-.042-14.958c1.032-.596 1.866-.121 1.869 1.066l.03 10.675C1.861-2.03 1.033-.596 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3628)" opacity="0.7">
                  <g transform="translate(243.835 360.712)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0c-1.242.717-2.252.141-2.256-1.296-.005-1.427.999-3.166 2.241-3.883 1.251-.722 2.261-.146 2.266 1.281C2.255-2.461 1.251-.722 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3644)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3648)">
                        <g>
                          <g>
                            <g clipPath="url(#clipPath3652)">
                              <g>
                                <g>
                                  <g clipPath="url(#clipPath3656)" opacity="0.502">
                                    <g transform="translate(324.28 319.095)">
                                      <path
                                        fill="#fff"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        stroke="none"
                                        d="M0 0l-.016-5.599c-6.509 3.759-11.832.726-11.852-6.754.02 7.48 5.343 10.513 11.852 6.754C6.502-9.362 11.781-18.515 11.76-25.995c-.013-4.329-1.793-7.167-4.552-8.066.848.272 1.61.729 2.26 1.371l3.916-5.567c2.03 2.005 3.236 5.225 3.248 9.449C16.662-18.242 9.203-5.314 0 0m-16.74-9.54c-.031-10.576 7.427-23.494 16.632-28.808.079-.046.159-.09.238-.135-.079.045-.159.089-.238.135C-9.313-33.034-16.771-20.116-16.74-9.54M6.885-34.154l-.009-.003.009.003m-6.2.986l-.106.053.106-.053m8.544-7.284l-.01-.002.01.002m-.135-.026c-2.563-.459-5.569.155-8.683 1.84 3.197-1.733 6.175-2.3 8.683-1.84m-8.72 1.86l-.201.111.201-.111"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <g clipPath="url(#clipPath3660)">
                                    <g transform="translate(324.28 319.095)">
                                      <path
                                        class="circular-digram-pink"
                                        fill="#fff"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        stroke="none"
                                        d="M0 0c-9.203 5.313-16.711 1.026-16.74-9.54-.031-10.576 7.427-23.494 16.632-28.808.079-.046.159-.09.238-.135l.043-.024.201-.111.037-.02c3.114-1.685 6.12-2.299 8.683-1.84l.125.024.01.002a8.013 8.013 0 014.162 2.186l-.007.009-3.916 5.567a5.637 5.637 0 00-2.26-1.371l-.003-.001a6.205 6.205 0 00-.194-.058c-.042-.012-.084-.024-.126-.034l-.009-.003c-1.799-.464-3.946-.135-6.191.989l-.106.053-.113.059-.231.123-.061.034a8.965 8.965 0 00-.267.15c-6.51 3.758-11.797 12.906-11.775 20.396.02 7.48 5.343 10.513 11.852 6.754L0 0"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <g clipPath="url(#clipPath3664)" opacity="0.502">
                                    <g transform="translate(360.039 298.45)">
                                      <path
                                        fill="#fff"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        stroke="none"
                                        d="M0 0l-.017-5.598c-6.509 3.758-11.831.726-11.852-6.755.021 7.481 5.343 10.513 11.852 6.755C6.502-9.361 11.78-18.514 11.76-25.995l4.872-2.812C16.661-18.241 9.203-5.313 0 0"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g>
                                <g>
                                  <g clipPath="url(#clipPath3668)">
                                    <g transform="translate(360.039 298.45)">
                                      <path
                                        class="circular-digram-pink"
                                        fill="#fff"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                        stroke="none"
                                        d="M0 0c-9.195 5.309-16.711 1.026-16.741-9.54-.03-10.575 7.436-23.498 16.632-28.807 9.204-5.314 16.711-1.036 16.741 9.54l-4.872 2.812c-.022-7.489-5.335-10.517-11.853-6.754-6.511 3.759-11.797 12.907-11.776 20.396.021 7.481 5.343 10.513 11.852 6.755L0 0"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3744)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3748)">
                        <g transform="translate(196.62 294.29)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.524.095-1.526-.87-.003-.965.676-2.142 1.515-2.627.84-.484 1.525-.095 1.527.87C1.519-1.662.839-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3752)">
                        <g transform="translate(196.597 286.399)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.523.095-1.526-.87-.003-.965.676-2.142 1.515-2.627.84-.484 1.525-.095 1.527.87C1.519-1.662.84-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3756)">
                        <g transform="translate(196.575 278.508)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.523.095-1.526-.87-.003-.965.676-2.142 1.516-2.627.839-.484 1.524-.095 1.527.87C1.519-1.662.84-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3760)">
                        <g transform="translate(196.553 270.626)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.523.095-1.526-.87-.003-.964.676-2.142 1.516-2.627.84-.484 1.524-.094 1.527.871C1.52-1.662.84-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3764)">
                        <g transform="translate(234.205 271.824)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.273-.857.055-.859-.49-.001-.544.38-1.214.853-1.488L-.006-1.978c.475-.273.866-.049.868.495C.863-.938.474-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3768)">
                        <g transform="translate(234.182 263.943)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.273-.857.045-.859-.5-.001-.544.38-1.214.853-1.488L-.006-1.987c.475-.274.866-.05.868.494C.863-.948.474-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3772)">
                        <g transform="translate(234.16 256.052)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.273-.857.054-.859-.499-.001-.545.38-1.205.853-1.479L-.005-1.978c.474-.273.865-.059.867.485C.863-.938.475-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3776)">
                        <g transform="translate(234.137 248.16)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.274-.857.055-.859-.49-.001-.554.38-1.214.853-1.487L-.005-1.978c.474-.273.865-.059.867.496C.863-.938.475-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath3884)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3888)">
                        <g transform="translate(243.938 249.277)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.515.298-.932.06-.934-.522l-.018-6.506c-.002-.583.413-1.301.928-1.599.507-.293.924-.055.925.528L.92-1.593C.922-1.011.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3892)">
                        <g transform="translate(248.73 252.894)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.516.297-.925.055-.926-.528l-.037-12.878c-.001-.582.404-1.295.92-1.593.508-.293.925-.056.926.527L.92-1.593C.921-1.011.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3896)">
                        <g transform="translate(253.528 259.692)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.516.298-.924.055-.926-.527l-.063-22.432c-.002-.583.404-1.296.92-1.593.506-.293.923-.055.925.528L.92-1.593C.922-1.01.508-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3900)">
                        <g transform="translate(258.29 253.04)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.516.297-.925.055-.927-.528l-.052-18.533c-.001-.583.405-1.296.92-1.594.507-.293.924-.054.926.529L.92-1.593C.921-1.011.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3904)">
                        <g transform="translate(263.073 254.287)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.507.293-.924.055-.926-.528l-.063-22.536c-.002-.582.412-1.3.92-1.593.506-.293.923-.056.925.527L.92-1.593C.922-1.011.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3908)">
                        <g transform="translate(267.83 246.115)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.507.293-.924.055-.926-.528l-.049-17.119c-.001-.583.413-1.301.92-1.594.508-.292.925-.055.926.528L.92-1.594C.922-1.011.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3912)">
                        <g transform="translate(272.6 242.3)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.508.292-.925.055-.926-.528l-.046-16.06c-.002-.582.413-1.3.92-1.593.507-.293.924-.054.926.528L.92-1.594C.922-1.011.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3916)">
                        <g transform="translate(277.35 232.111)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.507.293-.924.056-.926-.527L-.95-9.154c-.002-.583.412-1.3.92-1.593.507-.293.924-.056.926.527L.92-1.593C.922-1.01.507-.293 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3920)">
                        <g transform="translate(282.137 234.668)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.507.293-.924.055-.926-.527l-.039-13.939c-.002-.583.412-1.301.92-1.594.515-.296.924-.054.925.529L.92-1.593C.922-1.011.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3924)">
                        <g transform="translate(286.925 237.215)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.507.293-.924.064-.926-.527L-.98-19.769c-.001-.582.413-1.299.919-1.592.516-.298.925-.055.926.527L.92-1.593C.922-1.001.516-.298 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath3928)">
                        <g transform="translate(291.682 229.157)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.508.293-.925.056-.926-.527l-.04-13.939c-.002-.583.413-1.301.92-1.593.516-.297.924-.055.926.528L.92-1.593C.921-1.01.515-.297 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4072)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4076)">
                        <g>
                          <g>
                            <g clipPath="url(#clipPath4080)">
                              <g>
                                <g>
                                  <g clipPath="url(#clipPath4084)" opacity="0.3">
                                    <g>
                                      <g clipPath="url(#clipPath4088)">
                                        <g>
                                          <g mask="url(#mask4102)">
                                            <g>
                                              <path
                                                fill="url(#linearGradient4120)"
                                                stroke="none"
                                                d="M380.018 232.379l-76.264 44.031c-2.02 1.167-3.672.226-3.678-2.086l-.178-62.651c-.007-2.322 1.634-5.164 3.654-6.33l76.265-44.031c2.02-1.167 3.663-.221 3.67 2.1l.178 62.651c.006 2.313-1.626 5.15-3.647 6.316"></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4170)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4174)" opacity="0.5">
                        <g transform="translate(380.69 178.596)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-77.91 44.981c-.125.073-.234.011-.235-.132 0-.153.108-.33.233-.402L-.002-.535c.125-.071.226-.015.226.139A.506.506 0 010 0"></path>
                        </g>
                        <g transform="translate(380.716 187.614)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-77.91 44.981c-.125.073-.234.021-.234-.132a.528.528 0 01.232-.403L-.001-.535c.124-.071.225-.005.225.139A.49.49 0 010 0"></path>
                        </g>
                        <g transform="translate(380.74 196.633)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-77.91 44.981c-.125.073-.234.02-.234-.123 0-.153.108-.33.233-.402L-.001-.525c.125-.073.225-.015.226.137 0 .144-.1.316-.225.388"></path>
                        </g>
                        <g transform="translate(380.767 205.661)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-77.911 44.981c-.124.072-.234.011-.234-.133 0-.143.108-.33.233-.402L-.002-.535c.125-.072.225-.006.226.138 0 .143-.1.325-.224.397"></path>
                        </g>
                        <g transform="translate(380.793 214.679)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-77.911 44.982c-.124.072-.233.02-.234-.124 0-.152.108-.329.233-.401L-.002-.525"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4178)" opacity="0.5">
                        <g transform="translate(342.495 235.244)">
                          <path
                            fill="#fff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-6.235 3.6-5.386-19.952-9.385-17.643-4.008 2.314-5.16 18.826-7.962 20.443-3.233 1.867-3.453-19.623-7.302-17.401-2.926 1.69-4.046 12.173-7.979 14.444-3.924 2.265-5.355-12.256-5.355-12.256l74.309-43.191.133-.076c-.492 5.417-2.96 14.104-8.136 17.092a8.182 8.182 0 01-1.066.517c-.42.167-.816.358-1.185.572-7.339 4.236-4.982 17.17-9.051 19.52-3.309 1.91-2.768-10.182-6.003-8.363l-.011.007C7.707-24.43 6.802-3.927 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>

            <g>
              <g>
                <g clipPath="url(#clipPath4280)" opacity="0.7">
                  <g transform="translate(231.453 318.577)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.012.584-1.832.116-1.836-1.046v-.048c-.003-1.153.812-2.566 1.823-3.15L-.013-4.244c1.012-.584 1.826-.111 1.829 1.042v.048C1.819-1.993 1.011-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4296)" opacity="0.7">
                  <g transform="translate(231.453 326.068)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.012.584-1.832.115-1.836-1.046v-.048c-.003-1.153.812-2.567 1.823-3.15L-.013-4.244c1.012-.584 1.826-.111 1.829 1.042v.048C1.819-1.993 1.011-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4312)" opacity="0.7">
                  <g transform="translate(231.453 333.068)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.012.584-1.832.116-1.836-1.046v-.048c-.003-1.153.812-2.566 1.823-3.15L-.013-4.244c1.012-.584 1.826-.111 1.829 1.042v.048C1.819-1.993 1.011-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4328)" opacity="0.7">
                  <g transform="translate(231.453 340.14)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.012.583-1.832.115-1.836-1.046v-.048c-.003-1.153.812-2.567 1.823-3.151L-.013-4.244c1.012-.584 1.826-.112 1.829 1.042v.047C1.819-1.993 1.011-.584 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4344)" opacity="0.7">
                  <g transform="translate(214.197 370.979)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-9.211 5.317c-1.012.583-1.832.116-1.836-1.046v-.048c-.003-1.154.813-2.566 1.823-3.15L0-4.251c1.011-.584 1.496.078 1.5 1.231C1.503-1.858 1.011-.584 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4360)" opacity="0.7">
                  <g transform="translate(214.197 363.906)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-9.211 5.317c-1.012.584-1.832.116-1.836-1.046v-.047c-.003-1.154.813-2.567 1.823-3.151L0-4.25c1.011-.584 1.496.077 1.5 1.231C1.503-1.857 1.011-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4376)" opacity="0.7">
                  <g transform="translate(213.463 357.403)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-9.211 5.317c-1.012.583-1.832.116-1.836-1.046v-.047c-.003-1.154.813-2.567 1.823-3.151L0-4.251c1.011-.583 1.496.078 1.5 1.231C1.503-1.858 1.011-.584 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4392)" opacity="0.7">
                  <g transform="translate(231.625 362.873)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-10.597 6.118c-.361.209-.653.042-.655-.373l-.051-18.17c-.002-.413.289-.919.651-1.127L-.056-19.67c.362-.209.657-.041.659.371l.05 18.17C.655-.713.361-.209 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4408)">
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4412)">
                        <g transform="translate(245.587 342.6)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.839.485-1.523.095-1.526-.87-.002-.965.677-2.142 1.516-2.627.84-.484 1.525-.095 1.527.87C1.52-1.662.84-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4416)">
                        <g transform="translate(245.565 334.709)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.524.095-1.526-.87-.003-.965.676-2.142 1.515-2.627.84-.484 1.525-.095 1.527.87C1.519-1.662.839-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4420)">
                        <g transform="translate(245.543 326.818)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.524.095-1.526-.87-.003-.965.676-2.142 1.515-2.627.84-.484 1.525-.095 1.527.87C1.519-1.662.839-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4424)">
                        <g transform="translate(245.52 318.936)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0c-.84.485-1.523.095-1.526-.87-.003-.964.676-2.142 1.516-2.627.839-.484 1.524-.094 1.527.871C1.519-1.662.84-.485 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4428)">
                        <g transform="translate(283.173 320.134)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.475.274-.857.055-.859-.49-.002-.544.38-1.214.853-1.488L-.006-1.977c.474-.274.866-.05.868.494C.863-.938.474-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4432)">
                        <g transform="translate(283.15 312.253)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.475.273-.857.045-.859-.499-.002-.545.38-1.215.853-1.489L-.006-1.987c.475-.274.866-.05.868.494C.863-.948.474-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4436)">
                        <g transform="translate(283.128 304.362)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.273-.857.054-.859-.499-.001-.545.38-1.205.853-1.479L-.006-1.978c.475-.273.866-.059.868.485C.863-.938.474-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g clipPath="url(#clipPath4440)">
                        <g transform="translate(283.105 296.47)">
                          <path
                            fill="#fff"
                            fillOpacity="0.3"
                            fillRule="nonzero"
                            stroke="none"
                            d="M0 0l-31.169 17.996c-.474.273-.857.054-.859-.49-.001-.554.38-1.214.853-1.488L-.005-1.978c.474-.273.865-.059.867.495C.863-.938.475-.273 0 0"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4548)" opacity="0.7">
                  <g transform="translate(280.181 269.072)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.012.584-1.833.116-1.836-1.046v-.048c-.003-1.153.812-2.566 1.823-3.15L-.013-4.244c1.012-.584 1.825-.111 1.829 1.042v.048C1.819-1.993 1.011-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4564)" opacity="0.7">
                  <g transform="translate(280.765 274.837)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.011.583-1.832.115-1.835-1.046v-.048c-.004-1.153.812-2.567 1.823-3.15L-.012-4.244c1.011-.584 1.825-.112 1.829 1.042v.047C1.82-1.993 1.012-.584 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4580)" opacity="0.7">
                  <g transform="translate(248.934 293.057)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-5.557 3.208c-.19.11-.342.023-.343-.195l-.028-9.529c0-.216.152-.482.342-.591l5.557-3.209c.19-.109.344-.021.345.195L.343-.592A.75.75 0 010 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4596)" opacity="0.7">
                  <g transform="translate(240.995 297.928)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-5.558 3.208c-.189.11-.342.022-.343-.195l-.027-9.53a.752.752 0 01.341-.59l5.558-3.209c.189-.109.343-.021.344.195L.343-.592A.756.756 0 010 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4612)" opacity="0.7">
                  <g transform="translate(231.16 297.036)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.011.584-1.832.115-1.835-1.046v-.048c-.004-1.153.812-2.567 1.823-3.15L-.012-4.244c1.011-.584 1.825-.111 1.828 1.042l.001.048C1.82-1.993 1.012-.583 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g clipPath="url(#clipPath4628)" opacity="0.7">
                  <g transform="translate(231.745 302.801)">
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      fillRule="nonzero"
                      stroke="none"
                      d="M0 0l-27.201 15.705c-1.011.583-1.832.115-1.835-1.046v-.048c-.004-1.154.812-2.567 1.823-3.151L-.012-4.244c1.011-.584 1.825-.112 1.828 1.042l.001.047C1.82-1.993 1.012-.584 0 0"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default ImageComputer;
