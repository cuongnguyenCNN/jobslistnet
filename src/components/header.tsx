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
              aria-label=".Net Jobs List"
              title=".Net Jobs List"
              href="/"
            >
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

            {/* <Link
              className="block !border-b border-transparent border-solid rounded-t btn btn-link lg:border-0 lg:rounded"
              href="/blog"
            >
              Blog
            </Link> */}
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
