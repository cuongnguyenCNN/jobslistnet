import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="subscribe !w-[100vw] p-2 Subscribe_SubscribeV2___Jsl_">
        <div className="container flex flex-col justify-center gap-2 md:items-center sm:flex-row">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <p className="m-0 text-xl font-bold">Get real-time job alerts 🔔</p>
            <p className="">Join .Net professionals on Telegram</p>
          </div>
          <div className="flex md:items-center sm:pl-4">
            <button
              className="flex flex-row content-center justify-center w-full mb-4 text-center text-white md:w-auto md:items-center gap-x-1 sm:m-0 btn bg-telegram hover:bg-telegram/80 hover:text-white"
              aria-label="Join Telegram Channel"
            >
              Join
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="relative inline-block mx-1 mt-[2px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
              </svg>
              Telegram Community
            </button>
          </div>
          <button aria-label="Close" className="Subscribe_closeBtn__gAv4o">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 352 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>
        </div>
      </div>
      <footer className="p-8 pb-4 overflow-hidden text-base text-gray-300 bg-dark-300">
        <div className="container-wide">
          <div className="space-y-8 lg:space-y-3 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="space-y-2 lg:col-span-1">
              <div className="flex flex-wrap justify-center space-x-4 sm:justify-start">
                <Link
                  href="https://twitter.com/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="X"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://www.linkedin.com/company/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="LinkedIn"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://t.me/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="Telegram"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://reddit.com/r/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="Reddit"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://www.youtube.com/@cryptojobslist?sub_confirmation=1"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="Youtube"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://github.com/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="GitHub"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>{" "}
                </Link>

                <Link
                  href="https://warpcast.com/cryptojobslist"
                  className="hover:underline flex items-center gap-1 text-2xl"
                  rel="me"
                  title="Farcaster"
                  target="_blank"
                >
                  <svg
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 323 297"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.5867 0.733337H263.413V296.267H232.907V160.893H232.607C229.236 123.479 197.792 94.16 159.5 94.16C121.208 94.16 89.7642 123.479 86.3926 160.893H86.0933V296.267H55.5867V0.733337Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.293335 42.68L12.6867 84.6267H23.1733V254.32C17.9082 254.32 13.64 258.588 13.64 263.853V275.293H11.7333C6.46822 275.293 2.2 279.562 2.2 284.827V296.267H108.973V284.827C108.973 279.562 104.705 275.293 99.44 275.293H97.5333V263.853C97.5333 258.588 93.2651 254.32 88 254.32H76.56V42.68H0.293335Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M234.813 254.32C229.548 254.32 225.28 258.588 225.28 263.853V275.293H223.373C218.108 275.293 213.84 279.562 213.84 284.827V296.267H320.613V284.827C320.613 279.562 316.345 275.293 311.08 275.293H309.173V263.853C309.173 258.588 304.905 254.32 299.64 254.32V84.6267H310.127L322.52 42.68H246.253V254.32H234.813Z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2">
              <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-bold">For Candidates</h3>
                <Link className="hover:underline undefined" href="/.Net">
                  {" "}
                  .Net Jobs
                </Link>

                <Link className="hover:underline undefined" href="/internship">
                  {" "}
                  Internships
                </Link>

                <Link className="hover:underline undefined" href="/remote">
                  {" "}
                  Remote .Net Jobs
                </Link>

                <Link
                  href="/crypto-events"
                  className="hover:underline undefined"
                  rel="noopener"
                >
                  {" "}
                  .Net Events
                </Link>

                <Link className="hover:underline undefined" href="/courses">
                  {" "}
                  .Net Courses
                </Link>

                <Link
                  href="https://api.cryptojobslist.com/jobs.rss"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  RSS job feed
                </Link>

                <Link
                  href="https://github.com/cryptojobslist/discord-bot"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  Discord Jobs Bot
                </Link>

                <Link
                  href="https://cryptojobslist.com/telegram-bot"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  Telegram Jobs Bot
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-bold">For Recruiters</h3>
                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  href="/hire"
                >
                  {" "}
                  Post Jobs
                </Link>

                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  href="/buy-package"
                >
                  {" "}
                  Buy a Package / Credits
                </Link>

                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  href="/talent"
                >
                  {" "}
                  Find &amp; Hire .Net Talent
                </Link>

                <Link
                  className="hover:underline undefined"
                  href="/success-stories"
                >
                  {" "}
                  Success Stories &amp; Testimonials
                </Link>

                <Link className="hover:underline undefined" href="/dashboard">
                  {" "}
                  Hiring Dashboard Login
                </Link>

                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  rel="nofollow noopener noindex"
                  href="https://tally.so/r/wvMJzD"
                >
                  {" "}
                  .Net Salary Reports
                </Link>

                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  href="/.Net-recruitment-agency"
                >
                  {" "}
                  Blockchain Recruitment
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-bold">Partners</h3>
                <Link
                  href="https://etherscan.io/?ref=CryptoJobsList&amp;utm_source=CryptoJobsList"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  Etherscan
                </Link>

                <Link
                  href="https://coinmarketcap.com/?ref=CryptoJobsList&amp;utm_source=CryptoJobsList"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  CoinMarketCap
                </Link>

                <Link
                  href="https://resumescreening.ai/"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  Resume Screening AI
                </Link>

                <Link
                  href="https://meme.jobs/"
                  className="hover:underline undefined"
                  rel="noopener"
                  target="_blank"
                >
                  {" "}
                  Meme jobs
                </Link>

                <Link
                  className="hover:underline undefined"
                  rel="noopener"
                  href="/blog/our-crypto-partners-appearances"
                >
                  {" "}
                  View all partners
                </Link>

                <hr className="!border-gray-700" />
                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  rel="noopener noindex nofollow"
                  href="https://airtable.com/shr7NABpg7Zz4PdWk"
                >
                  {" "}
                  Partner with us
                </Link>

                <Link
                  className="hover:underline undefined"
                  target="_blank"
                  rel="noopener noindex nofollow"
                  href="https://tally.so/r/me6ykJ"
                >
                  {" "}
                  Promote your agency
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-bold">Company</h3>
                <button className="mb-2 text-left no-underline hover:underline">
                  Support
                </button>
                <Link
                  href="https://cryptojobslist.canny.io/feature-requests"
                  className="hover:underline undefined"
                  rel="nofollow noopener noindex self"
                  target="_blank"
                >
                  {" "}
                  Feedback
                </Link>

                <Link className="hover:underline undefined" href="/about-us">
                  {" "}
                  About us
                </Link>

                <Link
                  href="https://cryptojobslist.transistor.fm/episodes"
                  className="hover:underline undefined"
                  rel="nofollow noopener noindex self"
                  target="_blank"
                >
                  {" "}
                  Podcast
                </Link>

                <Link
                  href="https://www.stickermule.com/cryptojobslist"
                  className="hover:underline undefined"
                  rel="nofollow noopener noindex self"
                  target="_blank"
                >
                  {" "}
                  Merch: Tshirts &amp; Stickers
                </Link>

                <Link className="hover:underline undefined" href="/terms">
                  {" "}
                  Terms
                </Link>

                <div className="flex flex-col pt-4 mt-4 space-y-2 group">
                  <h3 className="m-0 font-bold">
                    Fun <span className="hidden group-hover:inline">🎉</span>
                  </h3>
                  <Link
                    className="hover:underline undefined"
                    href="/json-to-typescript"
                  >
                    {" "}
                    JSON to TypeScript
                  </Link>

                  <Link
                    className="hover:underline undefined"
                    href="/crypto-wordle"
                  >
                    {" "}
                    Crypto WORDLE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 opacity-60">
            © 2025 CryptoJobsList. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
