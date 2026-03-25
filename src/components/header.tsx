"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 gap-8">
          <div className="flex items-center">
            <Link
              className="LogoButton_logoButton__4UWfl flex content-center z-10"
              aria-label="Crypto Jobs List"
              title="Crypto Jobs List"
              href="/"
            >
              {/* <svg
                  viewBox="0 0 545.4 75.9"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-full mt-2"
                  width="238"
                >
                  <g fill="#453dff">
                    <path d="m34.3 23.2c.4.7 1.2 1.6 1.9 1.6 3.8.2 7.6.1 11.6.1-.5-3.5-1.8-6.5-3.8-9.2-1.2-1.5-1.5-2.6-.3-4.3 1.2-1.6 2.1-3.6 3.2-5.5-3.5-2-6.9-3.9-10.4-5.9-1.2 2-2.3 3.8-3.3 5.7-.6 1.2-1.2 1.5-2.6 1.3-3.2-.4-6.4-.8-9.6-.6-9.6.6-17.5 7-20.1 16.2-2.9 10.5-1.5 20.2 6 28.6-1.4 2.5-2.9 5.1-4.4 7.8 3.6 2 6.9 4 10.4 6 1.4-2.4 2.7-4.6 3.9-6.8.6-1.1 1.4-1.2 2.6-1.3 4.1 0 8.2.2 12.1-.6 8.2-1.6 15.3-9.5 16.2-17.7-3.6 0-7 .1-10.5 0-1.4 0-2.3.4-3 1.7-4 6.7-13.5 7.8-18.7 2.2-4.9-5.2-4.9-16.5.1-21.7 5.3-5.4 14.6-4.2 18.7 2.4z"></path>
                    <path d="m144.3 23.1c-.1.1-.3 0-.7.1 0-1.9 0-3.8 0-5.8-4.1 0-7.9 0-11.9 0v58.4h12c0-4.2 0-8.3 0-12.3 0-4.1 0-8.2 0-12.7.6.5.8.6.9.7 4.6 7.9 18.2 8 24.2.1 5.6-7.4 6.1-15.7 2.9-24.1-4.7-12.2-19.1-14.4-27.4-4.4zm8.2 23.7c-5.3.1-8.9-4-8.9-9.8s3.5-9.5 8.8-9.5 8.7 3.8 8.6 9.7c.1 5.7-3.4 9.6-8.5 9.6z"></path>
                    <path d="m353.4 22.6c-.1.2-.4.3-1.1.9 0-1.3 0-2.1 0-2.9 0-4.7 0-9.5 0-14.2 0-1.5-.4-2-1.9-2-2.6.1-5.2.1-7.8 0-2-.1-2.5.5-2.5 2.5.1 15.8 0 31.6.1 47.4 0 .8.1 1.5.1 2.3h12.1c0-1.9 0-3.7 0-5.8.5.4.8.5.9.8 4.9 8.1 18.9 7.4 24.6-.7 5.4-7.5 5.4-20.3-.1-27.7-6.1-8.3-19.7-8.4-24.4-.6zm6.2 24.1c-4.4-.5-7.3-4.3-7.3-9.6 0-7.2 5.6-11.5 12-9.2 3.7 1.3 5.1 4.4 5.5 8 .4 5.9-2.6 11.7-10.2 10.8z"></path>
                    <path d="m114.9 17.4c-.6 0-1.3.7-1.6 1.3-1 2.4-1.8 4.8-2.7 7.3-1.8 5-3.6 9.9-5.7 15.5-.6-1.3-.9-1.9-1.1-2.6-2.6-6.6-5.2-13.2-7.8-19.8-.3-.7-1-1.6-1.5-1.7-4.1-.1-8.1-.1-12.5-.1.4 1 .7 1.7 1 2.4 4.9 11.2 9.7 22.4 14.6 33.5.7 1.6.7 2.9-.1 4.4-2.5 5.3-4.9 10.7-7.3 16-.3.6-.5 1.3-.9 2.1 4 0 7.7-.1 11.3 0 1.6.1 2.2-.6 2.8-1.9 7.6-18.1 15.3-36.2 22.9-54.4.3-.7.5-1.4.9-2.3-4.4.2-8.3.2-12.3.3z"></path>
                    <path d="m313.2 16.9c-12-.2-20.7 8.1-20.6 20.1.1 12.2 7.8 20 20.1 20.3 12 .3 21-7.8 20.8-20 .1-12.1-8-20.2-20.3-20.4zm1.6 29.8c-4.4.9-8.4-1.3-9.4-5.6-.6-2.4-.6-5-.2-7.4.9-4.6 4.5-6.7 9.3-6.2 3.6.4 6.5 3.9 6.6 8.1v1.5c.1 5.4-2.1 8.8-6.3 9.6z"></path>
                    <path d="m228.1 16.8c-12.1-.1-20.4 8-20.6 20-.2 12.2 7.9 20.5 20.1 20.6 12.5.1 20.8-7.8 21-20 .3-12.1-8.1-20.5-20.5-20.6zm2 29.8c-4.1 1.1-8.1-1-9.5-5-1-2.9-1.1-5.8-.1-8.7 1.2-3.8 4.6-6 8.4-5.6 3.9.4 6.7 3.2 7.2 7.4.1.8.1 1.6.1 2.2 0 5.4-2.1 8.7-6.1 9.7z"></path>
                    <path d="m417.8 38c-1.9-1.5-4.3-2.5-6.6-3.3-3.4-1.2-7-2-10.5-3.1-1.5-.5-2.4-1.6-2.2-3.3.3-1.8 1.4-2.7 3.2-3 3.1-.4 5.8 1 7.3 3.8.3.5.9 1.2 1.4 1.2 3.3.1 6.6.1 10.5.1-1-2.3-1.6-4.2-2.6-6-5.5-9.7-20.7-9.1-26.6-4.5-5.4 4.2-6.5 14.2 1.7 18 2.3 1.1 4.9 1.6 7.3 2.4 2.5.8 5 1.4 7.4 2.2 1.4.5 2.2 1.8 1.7 3.3-.3 1-1.1 2.4-2 2.7-2.9 1.2-7.8 0-8.9-3.5-.2-.5-.8-1.3-1.2-1.3-3.4-.1-6.8-.1-10.5-.1.6 4.7 2.7 8.1 6.4 10.5 4.4 2.9 9.4 3.2 14.5 3 3.2-.1 6.2-1.1 8.8-3 5.5-3.8 6-11.9.9-16.1z"></path>
                    <path d="m510.4 36.4c-2.4-1.2-5.1-1.9-7.7-2.7-2.4-.8-4.8-1.3-7.2-2.1-1.5-.5-2.4-1.6-2.1-3.3.3-1.8 1.5-2.6 3.1-2.8 3.2-.5 5.8 1 7.2 3.8.2.5.8 1.2 1.2 1.2 3.4.1 6.8.1 10.4.1-.5-3.4-1.9-6.1-3.9-8.5-5.8-6.8-19.3-6.4-24.8-2.1-5.8 4.5-5.8 13.8.4 17.4 2.5 1.5 5.5 2.1 8.2 3 2.5.8 5.1 1.4 7.6 2.2 1.5.5 2 1.7 1.9 3.2-.1 1.6-1 2.5-2.5 2.9-3.3 1-7-.7-8.4-3.8-.2-.5-.9-1.1-1.5-1.1-3.4-.1-6.7-.1-10.5-.1.4 1.5.7 2.7 1.1 3.8 1.7 4.4 5 7.3 9.5 8.6 6.1 1.8 12.2 2 18-1.1 3.7-2 5.5-5.3 5.5-9.5.1-4.2-1.8-7.3-5.5-9.1z"></path>
                    <path d="m276.5 6.6c-1.9-.1-2.4.6-2.4 2.4.1 10.3 0 20.5 0 30.8 0 .9 0 1.7-.2 2.6-.5 2.7-1.8 4-4.4 4.1-2.3.1-4.3-1.2-5-3.6-.3-1.1-.5-2.2-.8-3.5-3.5 0-6.9 0-10.3.1-.4 0-1.2.8-1.2 1.3.3 4.9 1.6 9.4 5.6 12.7s8.6 3.9 13.5 3.8c8.5-.2 14.5-6.1 14.6-14.5.1-11.3.1-22.7.1-34 0-.6-.1-1.2-.2-2.1-3.2-.1-6.3.1-9.3-.1z"></path>
                    <path d="m545.4 27.5c0-3.5 0-6.7 0-10.2-2.2 0-4.1-.1-6.1 0-1.5.1-2-.5-2-2 .1-2.5 0-5.1 0-7.7-4.2 0-8 0-12 0v5c0 4.5 0 4.5-4.4 4.7-.3 0-.5.1-.8.2v10.1h5.2v2.6c0 4.4-.1 8.8 0 13.1.1 3.3.6 6.5 2.9 9 4.7 5.4 11 4.6 17.1 4.5 0-3.6 0-6.9 0-10.4-1.6 0-3.1.1-4.5 0-1.6-.1-3.1-.8-3.2-2.6-.1-5.4 0-10.7 0-16.3z"></path>
                    <path d="m201.9 17.7c-.7-.9-3.5-.4-5.3-.3-1.7.1-2.3-.4-2.2-2.2.1-2.5 0-5 0-7.5-4.2 0-8.1 0-12.1 0v7.9c0 1.3-.4 1.8-1.7 1.8-1.1-.1-2.2 0-3.4 0v10.2h5.2v2.7c0 4.7-.1 9.5.1 14.2.2 4.6 1.8 8.6 6.2 10.8s9 1.8 13.6 1.7c0-3.5 0-6.9 0-10.4-1.6 0-3 .1-4.5 0-1.7-.1-3.2-.8-3.2-2.8-.1-5.3 0-10.6 0-16.1h3.8c4 0 4.1 0 4-4.1 0-2.1.5-4.6-.5-5.9z"></path>
                    <path d="m440.5 6.8c-4.1 0-8 0-11.9 0v50h28c0-3.1 0-6 0-9.1-5.3 0-10.6 0-16.1 0 0-13.8 0-27.3 0-40.9z"></path>
                    <path d="m67.1 23.8c0-2.1 0-4.2 0-6.4-4.1 0-7.9 0-11.8 0v39.4h11.9c0-1.5 0-2.8 0-4.2.1-5.1-.1-10.2.2-15.3.3-4.5 2.6-6.6 7.1-7.2 2-.3 4.1-.3 6.2-.5 0-4.3 0-8.5 0-12.8-5.7.2-9.8 3.1-13.6 7z"></path>
                    <path d="m471.2 17.3c-1.8-.2-2.7.5-3.5 2-1.2 2.3-2.7 4.4-3.8 6.7-.7 1.4-1.2 3.1-1.2 4.6-.1 7-.1 14.1-.1 21.1v5h12c0-13.2 0-26.3 0-39.5-1.3.1-2.4.2-3.4.1z"></path>
                  </g>
                </svg> */}
              <h1>DevJobsHub</h1>
            </Link>
          </div>
          <nav className="items-end hidden lg:flex">
            <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded bg-black/5 text-gray-800 dark:text-gray-300 dark:bg-white/10 pointer-events-none"
              href="/"
            >
              Jobs
            </Link>

            <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
              href="/talent"
            >
              Talent
            </Link>

            <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
              href="/companies"
            >
              Companies
            </Link>

            <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
              href="/salaries"
            >
              Salaries
            </Link>

            <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
              href="/blog"
            >
              Blog
            </Link>

            <button
              title="Toggle Dark/Light mode"
              className="inline-block text-center btn btn-link md:rounded hover:text-brand-blue w-full text-center lg:w-auto"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="m-0 mb-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path>
              </svg>
              <span className="ml-2 lg:hidden">Dark Mode</span>
            </button>
            <button
              className="change-log-button hidden w-full text-center lg:block lg:w-auto btn btn-link md:rounded hover:text-brand-blue"
              data-canny-changelog="true"
              aria-label="Changelog"
              style={{ position: "relative" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path>
              </svg>
              <div className="Canny_BadgeContainer">
                <div className="Canny_Badge"></div>
              </div>
            </button>
            <div className="relative text-left group block text-center">
              <div className="">
                <button
                  className="block w-full text-center lg:w-auto btn btn-link lg:rounded lg:border-0"
                  title="Resources"
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
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>{" "}
                  <span className="lg:hidden">More</span>
                </button>
              </div>
              <div className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible group-hover:visible hover:visible w-max">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                  className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                >
                  <div className="grid grid-cols-2 p-2">
                    <div>
                      <Link
                        className="block text-left btn btn-link lg:rounded"
                        href="/success-stories"
                      >
                        🎉 Success Stories
                      </Link>

                      <Link
                        className="block text-left btn btn-link lg:rounded"
                        href="/stats"
                      >
                        🔥 Platform Activity
                      </Link>

                      <Link
                        className="block text-left btn btn-link lg:rounded"
                        href="/trends"
                      >
                        📊 Web3 Job Trends
                      </Link>

                      <Link
                        className="block text-left btn btn-link lg:rounded"
                        href="/newsletter"
                      >
                        📧 Newsletter
                      </Link>
                    </div>

                    <div>
                      <Link
                        className="block text-left border-b border-gray-200 btn btn-link lg:rounded"
                        href="/telegram-bot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jobs Bot for Telegram
                      </Link>

                      <Link
                        className="block text-left border-b border-gray-200 btn btn-link lg:rounded"
                        href="https://github.com/cryptojobslist/discord-bot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jobs Bot for Discord
                      </Link>

                      <hr className="my-0" />
                      <hr className="my-0" />
                      <div className="grid grid-cols-4 gap-0">
                        <Link
                          href="https://twitter.com/cryptojobslist"
                          className="text-foreground btn btn-link"
                          target="_blank"
                          title="X"
                          rel="noreferrer me"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            className="p-0 m-0"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://www.linkedin.com/company/cryptojobslist/"
                          className="text-foreground btn btn-link"
                          target="_blank"
                          title="LinkedIn"
                          rel="noreferrer me"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            className="p-0 m-0"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://t.me/cryptojobslist/"
                          className="text-foreground btn btn-link"
                          target="_blank"
                          title="Telegram"
                          rel="noreferrer me"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 496 512"
                            className="p-0 m-0"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://warpcast.com/cryptojobslist"
                          className="text-foreground btn btn-link"
                          target="_blank"
                          title="Farcaster"
                          rel="noreferrer me"
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
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="block mr-0 text-center sm:mr-2 btn btn-link lg:rounded hover:text-brand-blue"
              title="Profile"
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
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
              </svg>
              <span className="ml-2 sm:hidden">Profile</span>
            </div>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand-blue text-white hover:text-white shadow hover:bg-brand-blue/90 h-9 px-4 py-2 block w-full mr-0 text-center rounded-none rounded-b lg:w-auto lg:rounded"
              href="/hire"
            >
              Post jobs
            </Link>
          </nav>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex rounded items-center justify-center p-3.5 bg-transparent border-0 cursor-pointer hover:bg-gray-100 focus:outline-none dark:text-white dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="container mt-4 lg:hidden" aria-hidden="false">
            <nav className="border border-solid rounded border-foreground/30">
              <Link
                className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
                href="/"
              >
                Jobs
              </Link>
              <Link
                className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
                href="/talent"
              >
                Talent
              </Link>
              <Link
                className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
                href="/companies"
              >
                Companies
              </Link>
              <Link
                className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
                href="/salaries"
              >
                Salaries
              </Link>
              <Link
                className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
                href="/blog"
              >
                Blog
              </Link>
              <button
                title="Toggle Dark/Light mode"
                className="inline-block text-center btn btn-link md:rounded hover:text-brand-blue w-full text-center lg:w-auto"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="m-0 mb-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path>
                </svg>
                <span className="ml-2 lg:hidden">Dark Mode</span>
              </button>
              <button
                className="change-log-button hidden w-full text-center lg:block lg:w-auto btn btn-link md:rounded hover:text-brand-blue"
                data-canny-changelog="true"
                aria-label="Changelog"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path>
                </svg>
              </button>
              <div className="relative text-left group block text-center">
                <div className="">
                  <button
                    className="block w-full text-center lg:w-auto btn btn-link lg:rounded lg:border-0"
                    title="Resources"
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
                      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>{" "}
                    <span className="lg:hidden">More</span>
                  </button>
                </div>
                <div
                  className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible group-hover:visible hover:visible w-max"
                  style={{ right: "-9px;" }}
                >
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                    className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                  >
                    <div className="grid grid-cols-2 p-2">
                      <div>
                        <Link
                          className="block text-left btn btn-link lg:rounded"
                          href="/success-stories"
                        >
                          🎉 Success Stories
                        </Link>
                        <Link
                          className="block text-left btn btn-link lg:rounded"
                          href="/stats"
                        >
                          🔥 Platform Activity
                        </Link>
                        <Link
                          className="block text-left btn btn-link lg:rounded"
                          href="/trends"
                        >
                          📊 Web3 Job Trends
                        </Link>
                        <Link
                          className="block text-left btn btn-link lg:rounded"
                          href="/newsletter"
                        >
                          📧 Newsletter
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="block text-left border-b border-gray-200 btn btn-link lg:rounded"
                          href="/telegram-bot"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Jobs Bot for Telegram
                        </Link>
                        <Link
                          className="block text-left border-b border-gray-200 btn btn-link lg:rounded"
                          href="https://github.com/cryptojobslist/discord-bot"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Jobs Bot for Discord
                        </Link>
                        <hr className="my-0" />
                        <hr className="my-0" />
                        <div className="grid grid-cols-4 gap-0">
                          <Link
                            href="https://twitter.com/cryptojobslist"
                            className="text-foreground btn btn-link"
                            target="_blank"
                            title="X"
                            rel="noreferrer me"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              className="p-0 m-0"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/company/cryptojobslist/"
                            className="text-foreground btn btn-link"
                            target="_blank"
                            title="LinkedIn"
                            rel="noreferrer me"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              className="p-0 m-0"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                          </Link>
                          <Link
                            href="https://t.me/cryptojobslist/"
                            className="text-foreground btn btn-link"
                            target="_blank"
                            title="Telegram"
                            rel="noreferrer me"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 496 512"
                              className="p-0 m-0"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                            </svg>
                          </Link>
                          <Link
                            href="https://warpcast.com/cryptojobslist"
                            className="text-foreground btn btn-link"
                            target="_blank"
                            title="Farcaster"
                            rel="noreferrer me"
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
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-left group block text-center">
                <div className="">
                  <div
                    role="button"
                    className="block mr-0 text-center md:mr-2 btn btn-link lg:rounded hover:text-brand-blue"
                    title="Profile"
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
                      <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                    </svg>
                    <span className="ml-2 lg:hidden">Profile</span>
                  </div>
                </div>
                <div
                  className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible group-hover:visible hover:visible w-max"
                  style={{ right: "104px;" }}
                >
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                    className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                  ></div>
                </div>
              </div>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand-blue text-white hover:text-white shadow hover:bg-brand-blue/90 h-9 px-4 py-2 block w-full mr-0 text-center rounded-none rounded-b lg:w-auto lg:rounded"
                href="/hire"
              >
                Post jobs
              </Link>
            </nav>
          </div>
        )}
        <div
          className="container mt-4 lg:hidden hidden"
          aria-hidden="true"
        ></div>
      </div>
    </header>
  );
}
