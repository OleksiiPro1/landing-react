/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import VideoComponent from './video.js';

const divPStyle = css`
  max-width: 500px;
  margin-top: 16px;
  font-family: 'TWK Lausanne', sans-serif;
  color: #fff;
  font-size: 22px;
  line-height: 32.5px;
  font-weight: 200;
`;

const imageStyles = css`
  display: flex;
`;
const divH1Styles = css`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 230px;
  margin-left: 100px;
`;
const h2Styles = css`
  margin-top: 300px;
  font-size: 52px;
  line-height: 58px;
  font-weight: 400;
`;
const h1Styles = css`
  font: 100px;
  max-width: 780px px;
  color: #fff;
  font-size: 100px;
  line-height: 92px;
  font-weight: 500;
  letter-spacing: -1px;
`;
const headerStyles = css`
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0%;
  top: 75px;
  right: 0%;
  bottom: auto;
`;
const navigationMenu = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 40px;
  li > a {
    text-decoration: none;
    color: hsla(0, 0%, 100%, 0.7);
    font-size: 20px;
    line-height: 36px;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }
`;

const mainStyles = css``;
const wrapperStyles = css`
  margin-top: 0px;
  width: 100%;
`;
function App() {
  return (
    <div css={mainStyles}>
      <main>
        <div css={wrapperStyles}>
          <VideoComponent />
          <header css={headerStyles}>
            <svg
              width="34"
              height="46"
              viewBox="0 0 34 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9905 12.9743C17.4873 12.9735 17.9794 13.0688 18.4386 13.2548C18.8979 13.4408 19.3153 13.7139 19.6669 14.0583C20.0185 14.4028 20.2974 14.8119 20.4877 15.2623C20.678 15.7127 20.776 16.1954 20.776 16.683V42.0603C20.776 42.3666 20.652 42.6604 20.4313 42.877C20.2105 43.0936 19.9112 43.2153 19.599 43.2153C19.2868 43.2153 18.9874 43.0936 18.7667 42.877C18.546 42.6604 18.422 42.3666 18.422 42.0603V16.683C18.422 16.3137 18.2725 15.9596 18.0064 15.6985C17.7403 15.4374 17.3795 15.2907 17.0032 15.2907C16.6269 15.2907 16.266 15.4374 15.9999 15.6985C15.7339 15.9596 15.5844 16.3137 15.5844 16.683V42.0603C15.5844 43.1051 16.0074 44.1072 16.7602 44.8461C17.5131 45.5849 18.5343 46 19.599 46C20.6637 46 21.6849 45.5849 22.4377 44.8461C23.1906 44.1072 23.6136 43.1051 23.6136 42.0603V16.683C23.6119 14.9606 22.9133 13.3093 21.6713 12.0922C20.4293 10.8751 18.7456 10.1919 16.9905 10.1927C15.2386 10.196 13.5597 10.8813 12.3222 12.0981C11.0846 13.3149 10.3896 14.9638 10.3896 16.683V42.0603C10.3896 42.3666 10.2656 42.6604 10.0449 42.877C9.82412 43.0936 9.52474 43.2153 9.21257 43.2153C8.90041 43.2153 8.60103 43.0936 8.38029 42.877C8.15956 42.6604 8.03555 42.3666 8.03555 42.0603V16.683C8.03555 14.349 8.98035 12.1106 10.6621 10.4602C12.3439 8.80978 14.6248 7.88259 17.0032 7.88259C19.3815 7.88259 21.6625 8.80978 23.3443 10.4602C25.026 12.1106 25.9708 14.349 25.9708 16.683V42.0603C25.9708 43.1051 26.3938 44.1072 27.1467 44.8461C27.8995 45.5849 28.9207 46 29.9854 46C31.0501 46 32.0713 45.5849 32.8242 44.8461C33.577 44.1072 34 43.1051 34 42.0603V16.683C34 12.2584 32.2089 8.01501 29.0208 4.88634C25.8327 1.75767 21.5087 0 17 0C12.4913 0 8.1673 1.75767 4.97918 4.88634C1.79107 8.01501 0 12.2584 0 16.683V44.6077C0 44.9769 0.149479 45.3311 0.415553 45.5922C0.681627 45.8533 1.0425 46 1.41879 46C1.79507 46 2.15595 45.8533 2.42202 45.5922C2.6881 45.3311 2.83757 44.9769 2.83757 44.6077V16.683C2.78076 14.8236 3.10489 12.972 3.79073 11.2378C4.47658 9.5036 5.5102 7.92217 6.83033 6.58723C8.15045 5.2523 9.73022 4.19101 11.476 3.46628C13.2218 2.74155 15.0981 2.36811 16.9936 2.36811C18.8892 2.36811 20.7655 2.74155 22.5113 3.46628C24.257 4.19101 25.8368 5.2523 27.1569 6.58723C28.4771 7.92217 29.5107 9.5036 30.1965 11.2378C30.8824 12.972 31.2065 14.8236 31.1497 16.683V42.0603C31.1497 42.3666 31.0257 42.6604 30.805 42.877C30.5842 43.0936 30.2848 43.2153 29.9727 43.2153C29.6605 43.2153 29.3611 43.0936 29.1404 42.877C28.9197 42.6604 28.7957 42.3666 28.7957 42.0603V16.683C28.7957 13.6104 27.5519 10.6637 25.338 8.49112C23.1241 6.3185 20.1214 5.09793 16.9905 5.09793C13.8595 5.09793 10.8568 6.3185 8.64292 8.49112C6.42901 10.6637 5.18525 13.6104 5.18525 16.683V42.0603C5.18525 43.1051 5.60822 44.1072 6.3611 44.8461C7.11398 45.5849 8.13511 46 9.19985 46C10.2646 46 11.2857 45.5849 12.0386 44.8461C12.7915 44.1072 13.2144 43.1051 13.2144 42.0603V16.683C13.2144 15.6999 13.6122 14.7571 14.3202 14.0616C15.0283 13.3662 15.9887 12.9751 16.9905 12.9743Z"
                fill="white"
              />
            </svg>

            <nav>
              <ul css={navigationMenu}>
                <li>
                  <a href="https://www.driveghost.com/difference">Difference</a>
                </li>
                <li>
                  <a href="https://www.driveghost.com/benefits">Benefits</a>
                </li>
                <li>
                  <a href="https://www.driveghost.com/platform">Platform</a>
                </li>
                <li>
                  <a href="https://www.driveghost.com/safety">Safety</a>
                </li>
                <li>
                  <a href="https://www.driveghost.com/company">Company</a>
                </li>
                <li>
                  <a href="https://blog.driveghost.com/">Blog</a>
                </li>
              </ul>
            </nav>
          </header>

          <div css={divH1Styles}>
            <h1 css={h1Styles}>
              Freedom behind
              <br /> the wheel.
            </h1>
            <div css={divPStyle}>
              Ghost is building the attention-free self-driving platform for a
              new generation of consumer cars.
            </div>
          </div>
        </div>
        <div>
          <h2 css={h2Styles}>
            The first self-driving system so safe <br />
            that it doesn&apos;t need your attention.
          </h2>
          <div css={imageStyles}>
            <img src="2b.jpg" className="2b" alt="pic" />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
