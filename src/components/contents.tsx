import Link from "next/link";


export default function Contents() {
  return (
    <div>
      <section className="relative grid items-start grid-cols-10 gap-2 mt-4 mb-10  container-wide mx-auto">
        <section className="col-span-10 mb-4 @container md:col-span-4">
          <div className="flex items-center justify-between col-span-10 gap-2 mb-4">
            <div className="SearchBar_sexyPurpleBlueGradient__zXlKD z-10 h-9 px-3 ![background-image:none] !text-sm py-1 dark:!bg-dark-200 flex w-full items-center justify-between whitespace-nowrap rounded-md !border border-input !shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:!ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 bg-background">
              <div className="inline-block w-1/2">
                <div className="relative inline-flex w-full dark:bg-dark-200 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="absolute h-full left-3"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                  <input
                    name="term"
                    className="w-full py-0.5 pl-10 pr-4 border-0 rounded-l rounded-r-none sm:pl-12 sm:pr-6 focus:outline-none text-foreground placeholder-foreground/70"
                    placeholder="Search"
                    autoComplete="off"
                    value=""
                  />
                </div>
              </div>
              <div className="inline-block w-1/2">
                <div className="relative inline-flex w-full dark:bg-dark-200 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="absolute h-full left-3"
                    color="grey"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                  </svg>
                  <input
                    name="location"
                    className="w-full py-0.5 pl-10 pr-4 border-0 rounded-l-none rounded-r sm:pl-12  sm:pr-6 focus:outline-none dark:bg-gray-900 dark:text-white"
                    placeholder="Location, Remote"
                    autoComplete="off"
                    value=""
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:rt:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 notranslate !max-w-[100px] bg-white dark:bg-dark-200"
              aria-label="Sort"
            >
              <span>Sort</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 opacity-50"
                aria-hidden="true"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              aria-label="Job Filters"
              className="hover:opacity-90 whitespace-nowrap text-sm bg-white dark:bg-dark-200 h-[31.5px] px-3 rounded-md shadow-sm border border-input ring-offset-background flex items-center justify-center"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:ru:"
              data-state="closed"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="opacity-80 !m-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
              </svg>
              <span className="sr-only">Job Filters</span>
            </button>
          </div>
          <div className="flex items-center justify-between px-2 mb-2 text-sm">
            <div>
              <h2 className="hidden text-sm font-normal sm:inline opacity-60">
                Crypto Jobs.
              </h2>
              <p className="inline ml-.5 sm:ml-1 opacity-60">
                Latest: 1 hour ago
              </p>
              <div className="inline-block space-x-2">
                <Link

                  aria-label="RSS feed"
                  target="_blank"
                  className='after:!content-[""]'
                  href="https://api.cryptojobslist.com/rss.xml"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="ml-2 text-orange-500"
                    height="13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>RSS</title>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                  </svg>
                </Link>

                <button
                  className="opacity-60"
                  aria-label="Turn on job notifications"
                  title="Turn on job notifications"
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
                    <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs inline-flex items-center gap-2 text-sm opacity-60">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  className="!m-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
                </svg>
                Bookmarks
              </button>
            </div>
          </div>
          <table className="w-full job-preview-inline-table @[500px]:![--vertical-spacing:1.5rem] @[500px]:![--image-size:60px] @[500px]:![--container-padding:.8rem]">
            <thead className="hidden">
              <tr>
                <th>Job Title</th>
                <th colSpan={2}>Company Name</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Tags</th>
                <th>Posted</th>
              </tr>
            </thead>
            <tbody>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Yieldschool logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/deb0c8bc-be1e-433a-a67c-9fe32d8eca7d.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/defi-analyst-and-customer-success-account-manager-yieldschool-remote"
                    >
                      DeFi Analyst and Customer Success/Account Manager
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/yieldschool"
                  >
                    Yieldschool{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">60k-300k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Analyst
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Sales
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Non Tech
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3w
                </td>
              </tr>
              <tr
                className="bg-transparent md:bg:white dark:bg-transparent md:dark:!bg-dark-300 border-none md:!border-solid md:!border-foreground/15"
                role="button"
              >
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Bisq logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4e48e12a-0a91-4571-87b4-48c8d6fc4329.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/bisq-is-hiring-senior-java-developers-at-bisq"
                    >
                      Senior Java Developers
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/bisq"
                  >
                    Bisq{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">8k-16k/month</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Developer
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Exchange
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Open Source
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Java
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Seer logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/67c2ec90-05a0-4b6d-a2ea-26f17442ab86.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/prediction-markets-business-developer-at-seer"
                    >
                      [Prediction Markets] Business Developer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/seer"
                  >
                    Seer{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">70k-140k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Business Development
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Full Time
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Seer logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/02b470f4-5d29-4ea6-a635-1043b1b5e223.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/general-assistant-prediction-market-at-seer"
                    >
                      General Assistant (Prediction Market)
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/seer"
                  >
                    Seer{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Kleros logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/zx1ttfemm0jwqmma0vvf-1693470344849.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/event-manager-at-kleros"
                    >
                      Event Manager - Blockchain/LegalTech/FinTech
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/kleros"
                  >
                    Kleros{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">30k-70k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Web3
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Paradex logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/54a54eda-d42c-45cb-922f-b8ff65e80120.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/fullstack-engineer-singapore-or-new-york-in-office-at-paradex"
                    >
                      Fullstack Engineer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/paradex"
                  >
                    Paradex{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">
                    📍 Singapore OR New York - In Office
                  </span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    ZK
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Golang
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Python
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Paradex logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/54a54eda-d42c-45cb-922f-b8ff65e80120.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/data-engineer-singapore-on-site-at-paradex"
                    >
                      Data Engineer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/paradex"
                  >
                    Paradex{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">📍 Singapore - On Site</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Engineering
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Exchange
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Data
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Trading
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Paradex logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/54a54eda-d42c-45cb-922f-b8ff65e80120.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/technical-support-solutions-engineer-singapore-at-paradex"
                    >
                      Technical Support/Solutions Engineer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/paradex"
                  >
                    Paradex{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">📍 Singapore</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Python
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Exchange
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Zark Lab logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/5c41dad4-b45d-431a-956a-4a8e560d15bc.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/senior-ai-ml-engineer-search-at-zark-lab"
                    >
                      Senior AI/ML Engineer, Search
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/zark-lab"
                  >
                    Zark Lab{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Engineering
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    AI
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Machine Learning
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="EoT Labs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/5cdacd76-4001-477a-991d-f6c753c7b957.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/senior-software-engineer-freelance-at-eot-labs"
                    >
                      Senior Software Engineer (Freelance)
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/eot-labs-gmbh"
                  >
                    EoT Labs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Developer
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Freelance
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Almanak logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/49e2bf85-57d9-4c7c-b09c-13c982fc6782.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/quantitative-researcher-at-almanak"
                    >
                      Quantitative Researcher
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/almanak"
                  >
                    Almanak{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Research
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Trading
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Python
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    DeFi
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Swaps.io logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a785f59f-9326-4b31-a2a1-ecb7afd9521f.jpeg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/business-development-manager-fundraising-swaps-io-remote"
                    >
                      Investment Advisor / Growth Lead
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/kinetex-network"
                  >
                    Swaps.io{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Business Development
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="prePO logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/42840059-8749-4fff-98e8-f694738b3510.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/senior-frontend-engineer-at-prepo-1"
                    >
                      Senior Frontend Engineer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/prepo"
                  >
                    prePO{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">150k-300k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    DeFi
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Frontend
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Engineering
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3d
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Thrive Protocol logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/85773fdb-0375-4e5d-8a02-061a7714d2e0.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/head-of-growth-remote-at-thrive-protocol"
                    >
                      Head of Growth
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/thrive-protocol"
                  >
                    Thrive Protocol{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">120k-180k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">📍 Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0 !max-w-[10rem] @[400px]:!max-w-none">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Marketing
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Developer
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="NodeShift logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/158c97eb-9cb6-4052-b759-ff32afc1c4a3.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/social-media-content-manager-at-nodeshift"
                    >
                      Social Media Content Manager (Web3/Crypto)
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/nodeshift"
                  >
                    NodeShift{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">30k-42k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Social Media
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  4w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="KRNL Labs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/6e08be27-e53c-4056-b3f1-2cf50424ae25.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/community-manager-at-krnl-labs"
                    >
                      Community Manager
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/krnl-labs"
                  >
                    KRNL Labs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Marketing
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Community Manager
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2d
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Mangrove logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/12f4cf51-132b-4db0-87ce-c09b5b118d9a.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/frontend-blockchain-developer-paris-or-remote-europe-at-mangrove"
                    >
                      Frontend / Blockchain Developer
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/mangrove"
                  >
                    Mangrove{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">60k-150k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">
                    📍 Paris or Remote (Europe)
                  </span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0 !max-w-[10rem] @[400px]:!max-w-none">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    UI/UX
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Frontend
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    DeFi
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  5d
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Innovion logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/46997e7b-2e6a-4b3f-96bc-5904e476dc04.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/web3-web2-cto-opportunity-at-innovion"
                    >
                      Web3 &amp; Web2 CTO Opportunity
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/innovion"
                  >
                    Innovion{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Developer
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    CTO
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Kadena logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4645ee34-61b3-495d-a405-fdfc616ade6d.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/business-development-analyst-labs-at-kadena"
                    >
                      Business Development Analyst, Labs
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/kadena"
                  >
                    Kadena{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">75k-90k/year</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Research
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Analyst
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Twyne logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/70cc8d81-4e4e-41ef-85af-2ac67721d938.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/head-of-marketing-social-media-defi-at-twyne"
                    >
                      Marketing &amp; Social Media [1st hire]
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/twyne"
                  >
                    Twyne{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Marketing
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Content
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Community
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Discord
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  2w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="HyroTrader logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4995ebac-df14-4921-bfbf-71a8f86eb0e1.jpg"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/crypto-trader-analyst-at-hyrotrader-dubai-at-hyrotrader"
                    >
                      Crypto Trader / Analyst at HyroTrader
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/hyrotrader"
                  >
                    HyroTrader{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2">
                  <div className="flex items-center my-1 text-sm !my-0 pt-1.5 -ml-1 pl-0 !mr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">2.5k-6k/month</span>
                  </div>
                </td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-sm !mr-2">📍 Dubai</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0 !max-w-[10rem] @[400px]:!max-w-none">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Trading
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Analyst
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60 hidden @[430px]:!inline-block">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  5d
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded dark:hidden"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a5b0137b-2af3-4804-9ecd-22aa84234a84.png"
                      />
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="hidden rounded dark:inline-block"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f5eacd3a-0e01-4219-b6a2-5ecfb953241c.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/ceo-blockchain-at-chainlabs"
                    >
                      CEO - Blockchain Data
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/chainlabs"
                  >
                    Chainlabs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Full Time
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded dark:hidden"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a5b0137b-2af3-4804-9ecd-22aa84234a84.png"
                      />
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="hidden rounded dark:inline-block"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f5eacd3a-0e01-4219-b6a2-5ecfb953241c.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/senior-backend-engineer-web-scraping-at-chainlabs"
                    >
                      Senior Backend Engineer (Web Scraping)
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/chainlabs"
                  >
                    Chainlabs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Developer
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Engineering
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Python
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded dark:hidden"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a5b0137b-2af3-4804-9ecd-22aa84234a84.png"
                      />
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="hidden rounded dark:inline-block"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f5eacd3a-0e01-4219-b6a2-5ecfb953241c.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/investigator-blockchain-at-chainlabs"
                    >
                      Investigator - Blockchain
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/chainlabs"
                  >
                    Chainlabs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Aml
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Non Tech
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  1w
                </td>
              </tr>
              <tr className="" role="button">
                <td className="inline-block">
                  <div className="flex items-center">
                    <div className="job-company-logo">
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="rounded dark:hidden"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a5b0137b-2af3-4804-9ecd-22aa84234a84.png"
                      />
                      <img
                        alt="Chainlabs logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="hidden rounded dark:inline-block"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f5eacd3a-0e01-4219-b6a2-5ecfb953241c.png"
                      />
                    </div>
                    <Link

                      className="job-title-text text-base @[500px]:text-xl @[500px]:!ml-[calc(var(--container-padding)_/_2)] @[500px]:!max-w-[var(--job-title-max-width)]"
                      href="/jobs/web3-data-labels-researcher-at-chainlabs"
                    >
                      Web3 Data Labels Researcher
                    </Link>

                  </div>
                </td>
                <td className="block -mt-2 @[500px]:mt-0 @[500px]:inline-block sm:!ml-1">
                  <Link

                    target="_blank"
                    className="job-company-name-text @[500px]:!max-w-48 text-base @[500px]:text-xl @[500px]:leading-[1]"
                    href="/companies/chainlabs"
                  >
                    Chainlabs{" "}
                  </Link>

                </td>
                <td></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2"></td>
                <td className="inline-block -mt-1 @[500px]:-mt-2 !ml-0 hidden">
                  <span className="hidden">Remote</span>
                </td>
                <td className="job-tags -mt-1 @[500px]:-mt-2 !ml-0">
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Remote
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Web3
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Research
                  </span>
                  <span className="text-xs @[500px]:text-sm category opacity-60">
                    Analyst
                  </span>
                </td>
                <td className="job-time-since-creation @[500px]:!text-lg">
                  3d
                </td>
              </tr>
            </tbody>
          </table>
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-10 py-1 mb-4">
            <p className="p-0 m-0">You viewed 25 out of 265 Crypto jobs </p>
            <div className="w-full h-2 my-4 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-500">
              <div className="h-2 rounded-full bg-foreground"></div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 leading-6">
              Load more jobs
            </button>
          </div>
          <nav
            role="navigation"
            aria-label="pagination"
            className="mx-auto flex w-full justify-center"
            arial-label="Pagination"
          >
            <ul className="flex flex-row items-center gap-1">
              <li className="">
                <Link

                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5 pointer-events-none"
                  aria-label="Previous page"
                  rel="prev"
                  href="/?page=1"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 !m-0"
                  >
                    <path
                      d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Previous</span>
                </Link>

              </li>
              <li className="">
                <span
                  aria-current="page"
                  className="pointer-events-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                >
                  1
                </span>
              </li>
              <li className="">
                <Link

                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-9 w-9"
                  href="/?page=2"
                >
                  2
                </Link>

              </li>
              <li className="">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 !m-0"
                  >
                    <path
                      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">More pages</span>
                </span>
              </li>
              <li className="">
                <Link

                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pr-2.5"
                  aria-label="Next page"
                  rel="next"
                  href="/?page=2"
                >
                  <span>Next</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 !m-0"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>

              </li>
            </ul>
          </nav>
        </section>
        <div
          id="splitViewJobContainer"
          className="hidden  rounded-lg md:block col-span-6 bg-white dark:bg-dark-300 h-[calc(100dvh_-_100px_-_1rem)] sticky top-[4.1rem] z-[1] overflow-y-auto ring-1 ring-foreground/15 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
        >
          <div className="sticky top-0 p-6 pb-3 bg-white dark:bg-dark-300 ring-slate-200 ring-1 dark:ring-dark-100 z-[1]">
            <div className="flex flex-row-reverse items-start justify-between gap-6">
              <div className="size-[120px] flex items-start">
                <img
                  alt="Bisq logo"
                  loading="lazy"
                  width="120"
                  height="120"
                  decoding="async"
                  data-nimg="1"
                  className="rounded h-full object-contain"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/gs:/job-listing-logos/4e48e12a-0a91-4571-87b4-48c8d6fc4329.png"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="mb-0 font-bold leading-2 text-light-green">
                  ⭐ Featured Opportunity
                </p>
                <h2 className="!m-0 text-4xl font-bold">
                  Senior Java Developers{" "}
                  <Link

                    title="Open on a new tab"
                    target="_blank"
                    className="hover:text-brand-blue hover:underline"
                    href="/jobs/bisq-is-hiring-senior-java-developers-at-bisq"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="!w-4 !ml-1 rotate-45"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                    </svg>
                  </Link>

                </h2>
                <h3 className="!m-0 text-2xl flex items-center gap-2">
                  at{" "}
                  <Link

                    target="_blank"
                    className="hover:underline"
                    href="/companies/bisq"
                  >
                    Bisq
                  </Link>
{" "}
                  <span className="pl-4 md:pl-0 space-x-2">
                    <Link

                      aria-label="Company Site"
                      target="_blank"
                      className="hover:text-brand-blue"
                      rel="noopener nofollow noindex ugc"
                      href="https://bisq.network?ref=CryptoJobsList&amp;utm_source=CryptoJobsList"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="!w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                      </svg>
                    </Link>

                    <Link

                      aria-label="Company Twitter"
                      target="_blank"
                      className="hover:text-brand-blue hover:underline"
                      rel="nofollow noopener"
                      href="https://twitter.com/bisq_network"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="!w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </Link>

                  </span>
                </h3>
                <div className="flex flex-wrap items-center float-right gap-2 mt-2">
                  <div className="flex items-center my-1 !inline-block text-sm !mr-2 !my-0">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="m-0 mr-1 sm:-ml-[1px] text-light-green size-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z"></path>
                    </svg>
                    <span className="align-middle">8k-16k/month</span>
                  </div>
                  <Link
 className="category text-sm !my-0" href="/developer">
                    Developer
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/exchange">
                    Exchange
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/open-source">
                    Open Source
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/java">
                    Java
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/bitcoin">
                    Bitcoin
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/ui-ux">
                    UI/UX
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/remote">
                    Remote
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/senior">
                    Senior
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/security">
                    Security
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/cryptography">
                    Cryptography
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/rust">
                    Rust
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/kotlin">
                    Kotlin
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/mobile">
                    Mobile
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/full-time">
                    Full Time
                  </Link>

                  <Link
 className="category text-sm !my-0" href="/web3">
                    Web3
                  </Link>

                </div>
              </div>
            </div>
            <div className="flex justify-between mt-2 items-middle">
              <div className="flex items-end gap-2 pr-1">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand-blue text-white hover:text-white shadow hover:bg-brand-blue/90 h-10 rounded-md px-8 leading-6 !px-9 !font-bold">
                  Apply
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 leading-6 gap-2 text-foreground/70 border-foreground/15 hover:text-foreground dark:bg-transparent">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    className="!m-0 text-xs "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
                  </svg>
                  Save for later
                </button>
                <button
                  title="Report this job"
                  aria-label="Report this job"
                  className="p-1 cursor-pointer hover:opacity-100 hover:text-red-500 opacity-30 group"
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
                    <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"></path>
                  </svg>{" "}
                  <span className="hidden underline group-hover:text-red-500 group-hover:inline-block">
                    Report
                  </span>
                </button>
              </div>
              <div className="flex flex-col items-start gap-6">
                <div className="items-center hidden gap-4 sm:flex">
                  <span className="text-sm leading-6 text-right opacity-80">
                    Posted by Bisq
                    <br />
                    <span className="text-xs">Mar 16, 2025</span>
                  </span>
                  <img
                    width="40"
                    height="40"
                    src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:90/height:90/plain/gs:/job-listing-logos/e53fb217-e086-4bf1-a50b-497e6c9ad6bb.png"
                    alt="Bisq"
                    className="rounded-full ring-1 ring-foreground/10 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 py-4 mb-10">
            <div className="text-lg leading-relaxed">
              <p>
                Bisq, a decentralized, open-source peer-to-peer Bitcoin
                exchange, is looking for experienced and self-driven Senior Java
                Developers to help build the future of financial sovereignty. We
                operate without project managers, embrace open-source
                collaboration, and focus on security, privacy, and
                decentralization.
              </p>
              <h3>What You’ll Do</h3>
              <ul>
                <li>
                  <p>
                    Contribute to the development of Bisq 2, the next iteration
                    of our exchange.
                  </p>
                </li>
                <li>
                  <p>
                    Design and implement key features within a large and complex
                    Java codebase.
                  </p>
                </li>
                <li>
                  <p>
                    Work on new trade protocols, peer-to-peer networking,
                    cryptography, and decentralized exchange infrastructure.
                  </p>
                </li>
                <li>
                  <p>
                    Solve challenging problems in privacy-focused and
                    decentralized systems.
                  </p>
                </li>
                <li>
                  <p>
                    Engage with the open-source community, participate in
                    discussions, and review contributions.
                  </p>
                </li>
              </ul>
              <h3>Who You Are</h3>
              <ul>
                <li>
                  <p>
                    Proficient in Java, with extensive experience in
                    high-performance and secure applications.
                  </p>
                </li>
                <li>
                  <p>
                    A self-managed engineer who thrives in independent,
                    asynchronous workflows.
                  </p>
                </li>
                <li>
                  <p>
                    Comfortable with reading, understanding, and improving
                    large, complex codebases.
                  </p>
                </li>
                <li>
                  <p>
                    Have a strong grasp of cryptography, distributed systems,
                    and P2P networks.
                  </p>
                </li>
                <li>
                  <p>
                    Security- and privacy-focused—you think deeply about system
                    security, attack vectors, and data privacy.
                  </p>
                </li>
                <li>
                  <p>
                    Quick learner, capable of becoming productive in a new
                    environment without extensive guidance.
                  </p>
                </li>
                <li>
                  <p>Available full-time.</p>
                </li>
              </ul>
              <h3>Bonus Points for Experience In:</h3>
              <ul>
                <li>
                  <p>
                    Bitcoin Development (MuSig, BDK, PSBTs, UTXO management)
                  </p>
                </li>
                <li>
                  <p>Tor, I2P</p>
                </li>
                <li>
                  <p>Cryptography</p>
                </li>
                <li>
                  <p>Low-level networking, P2P networks, distributed systems</p>
                </li>
                <li>
                  <p>User Experience (UX) with JavaFX</p>
                </li>
                <li>
                  <p>Rust (used in our new MuSig based trade protocol)</p>
                </li>
                <li>
                  <p>Kotlin KMP (Mobile Development)</p>
                </li>
                <li>
                  <p>Lightning Network</p>
                </li>
                <li>
                  <p>Monero, Liquid (Sidechains)</p>
                </li>
                <li>
                  <p>Contributions to Open-Source Projects</p>
                </li>
              </ul>
              <h3>Why Join Bisq?</h3>
              <ul>
                <li>
                  <p>
                    Contribute on Bitcoins core mission. Build
                    censorship-resistant Bitcoin infrastructure.
                  </p>
                </li>
                <li>
                  <p>
                    100% Remote. Work from anywhere in the world. No geographic
                    restrictions.
                  </p>
                </li>
                <li>
                  <p>Compensation based on international market rates.</p>
                </li>
                <li>
                  <p>
                    No micromanagement. Work independently with meaningful
                    impact.
                  </p>
                </li>
              </ul>
              <h3>How to Apply?</h3>
              <p>
                If you’re passionate about Bitcoin, privacy, and open-source
                development, we’d love to hear from you.
              </p>
              <ul>
                <li>
                  Matrix Bisq 2 Dev Channel:{" "}
                  <Link
 href="https://matrix.to/#/#bisq2-dev:matrix.org">
                    https://matrix.to/#/#bisq2-dev:matrix.org
                  </Link>

                </li>
              </ul>
              <h3>Learn More About Bisq</h3>
              <ul>
                <li>
                  <p>
                    Website:{" "}
                    <Link
 href="https://bisq.network">https://bisq.network</Link>

                  </p>
                </li>
                <li>
                  <p>
                    GitHub:{" "}
                    <Link
 href="https://github.com/bisq-network">
                      https://github.com/bisq-network
                    </Link>

                  </p>
                </li>
              </ul>
              <p className="cjl-hid-lnk">
                Listed in:{" "}
                <Link
 href="https://cryptojobslist.com">Cryptocurrency Jobs</Link>
,{" "}
                <Link
 href="https://cryptojobslist.com/developer">
                  Developer Web3 Jobs
                </Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/exchange">
                  Exchange Web3 Jobs
                </Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/open-source">
                  Open Source Web3 Jobs
                </Link>

                , <Link
 href="https://cryptojobslist.com/java">Java Web3 Jobs</Link>
,{" "}
                <Link
 href="https://cryptojobslist.com/bitcoin">
                  Bitcoin Crypto Jobs
                </Link>

                , <Link
 href="https://cryptojobslist.com/ui-ux">UI/UX Web3 Jobs</Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/remote">Remote Web3 Jobs</Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/senior">
                  Senior Crypto Jobs
                </Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/security">
                  Security Web3 Jobs
                </Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/cryptography">
                  Cryptography Crypto Jobs
                </Link>

                , <Link
 href="https://cryptojobslist.com/rust">Rust Crypto Jobs</Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/kotlin">
                  Kotlin Crypto Jobs
                </Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/mobile">Mobile Web3 Jobs</Link>

                ,{" "}
                <Link
 href="https://cryptojobslist.com/full-time">
                  Full Time Crypto Jobs
                </Link>

                , <Link
 href="https://cryptojobslist.com/web3">Web3 Crypto Jobs</Link>

                .
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link

                target="_blank"
                className="block p-1 px-4 pb-1.5 font-normal text-left border border-foreground/15 hover:border-foreground bg-transparent text-foreground/80 hover:text-foreground btn clickable"
                href="https://t.me/cryptojobslist/8188"
              >
                Discuss on{" "}
                <span className="text-telegram">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>{" "}
                  Telegram
                </span>
              </Link>

              <Link

                target="_blank"
                className="block p-1 px-4 pb-1.5 font-normal text-left border border-foreground/15 hover:border-foreground bg-transparent text-foreground/80 hover:text-foreground btn clickable"
                href="https://x.com/CryptoJobsList/status/1901239105104588880"
              >
                Discuss on{" "}
                <span className="text-twitter">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1"
                    aria-label="X"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </span>
              </Link>

            </div>
            <div id="JobApplicationForm2">
              <form id="JobApplicationForm">
                <div className="divider-line"></div>
                <h3 className="my-5 text-2xl">Apply</h3>
                <div className="grid grid-cols-8 gap-4">
                  <div className="col-span-8 md:col-span-3">
                    <div className="form-field required">
                      <label>Your Full Name</label>
                      <input
                        data-component-name="fullName"
                        type="text"
                        name="fullName"
                        value="NGUYEN NGOC CUONG"
                      />
                    </div>
                    <div className="form-field">
                      <label>Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        placeholder="+1 (234) 456 7890"
                        value="+84964675349"
                      />
                    </div>
                  </div>
                  <div className="col-span-8 md:col-span-3">
                    <div className="form-field required">
                      <label>Email</label>
                      <input
                        data-component-name="email"
                        type="text"
                        name="email"
                        value="cuongnguyen71195@gmail.com"
                      />
                    </div>
                    <div className="form-field">
                      <label>Current Location</label>
                      <input type="text" name="location" />
                    </div>
                  </div>
                  <div className="[grid-row:1] md:[grid-row:unset] col-span-8 cursor-pointer md:col-span-2">
                    <label className="relative block mb-1 font-bold leading-5 text-center">
                      <span className="text-[0.875rem]">Photo</span>
                    </label>
                    <div className="text-center">
                      <div className="FileDrop">
                        <div className="file-drop-target">
                          <div className="DroppableAreaImageHolder DroppableAreaImageHolderCircular">
                            <div className="relative DroppableArea">
                              <img
                                className="inline w-40 max-w-full transition-all items-center cursor-pointer border border-foreground/10 border-solid hover:shadow-xl dark:shadow-dark-100 rounded-full"
                                title="[object Object]"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/v1538625638/profile_avatar_placeholder_tfqspf.png"
                              />
                            </div>
                          </div>
                          <input
                            type="file"
                            className="hide"
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                            name="picture"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="questions">
                  <div className="form-field required">
                    <label>
                      Why are you a great fit for this job? (Cover Letter)
                    </label>
                    <textarea
                      data-component-name="message"
                      rows={6}
                      name="message"
                      placeholder="Write your answer here..."
                    ></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="form-field col-span-2 md:col-span-1">
                    <label>
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 496 512"
                          className="mr-1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                        GitHub
                      </span>
                    </label>
                    <input
                      id="github"
                      name="github"
                      type="text"
                      placeholder="https://github.com/user"
                      value="https://github.com/cuongnguyenCNN"
                    />
                  </div>
                  <div className="form-field col-span-2 md:col-span-1">
                    <label>
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          className="mr-1 text-linkedin"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                        LinkedIn
                      </span>
                    </label>
                    <input
                      id="linkedin"
                      name="linkedin"
                      type="text"
                      placeholder="https://www.linkedin.com/user/"
                    />
                  </div>
                  <div className="col-span-2 form-field md:col-span-1">
                    <label className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 496 512"
                        className="mr-2 text-telegram"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                      </svg>
                      Telegram Handle
                    </label>
                    <div className="relative input-file">
                      <input
                        id="telegramHandle"
                        placeholder="satoshi_nakamoto"
                        type="text"
                        name="telegramHandle"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 form-field md:col-span-1">
                    <label>
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 288 512"
                          className="mr-1 text-green-500"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                        </svg>
                        Current Salary in USD
                      </span>
                    </label>
                    <input
                      name="salaryExpectations"
                      type="text"
                      placeholder="Example: $3000/month"
                    />
                  </div>
                  <div className="col-span-2 form-field md:col-span-1">
                    <label className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 384 512"
                        className="mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                      </svg>
                      Resume/CV
                    </label>
                    <div className="relative input-file">
                      <input
                        type="file"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="resume-file"
                        accept="image/jpeg, image/png, .pdf, .doc, .docx, application/msword,text/plain, application/pdf"
                        name="attachment"
                      />
                    </div>
                  </div>
                  <div className="form-field col-span-2 md:col-span-1">
                    <label>
                      <span className="flex items-center">
                        Years of Experience
                      </span>
                    </label>
                    <input
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      type="number"
                      placeholder="4"
                      value="5"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full col-span-2 mb-6 space-y-2">
                  <div className="form-field">
                    <label className="mb-0 mt-4 !text-2xl">
                      Video Application
                      <span className="right-0 mb-2 ml-2 font-normal opacity-50">
                        Optional
                      </span>
                    </label>
                    <ol className="flex space-x-4">
                      <li>Smile 😃</li>
                      <li>→</li>
                      <li>Introduce yourself</li>
                      <li>→</li>
                      <li>Explain why you are a good fit for this role</li>
                    </ol>
                  </div>
                  <div className="flex flex-col p-4 items-center justify-center max-h-full gap-4 overflow-y-auto rounded-lg min-h-[33ch] bg-slate-200 dark:bg-dark-100 md:aspect-video">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                      type="button"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 576 512"
                        className="w-5 h-5 m-0 mr-2 opacity-90"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                      </svg>
                      Record a Video Application
                    </button>
                  </div>
                  <div></div>
                  <p className="mb-2">
                    Video application is optional, but it will make your
                    application stand out.
                  </p>
                </div>
                <div>
                  <iframe
                    aria-hidden="true"
                    data-hcaptcha-widget-id="4en16170whuc"
                    data-hcaptcha-response=""
                    src="https://newassets.hcaptcha.com/captcha/v1/14dbe0f1619b8014e2630bcdde727e7785a80dee/static/hcaptcha.html#frame=checkbox-invisible"
                  ></iframe>
                  <textarea
                    id="g-recaptcha-response-4en16170whuc"
                    name="g-recaptcha-response"
                  ></textarea>
                  <textarea
                    id="h-captcha-response-4en16170whuc"
                    name="h-captcha-response"
                  ></textarea>
                </div>
                <button
                  data-component-name="submit"
                  type="submit"
                  className="w-full mb-5 btn btn-lg btn-blue disabled:opacity-50 group"
                >
                  Submit{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="left-0 -mt-1.5 transition-all group-hover:left-2 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </button>
                <div className="flex justify-between mt-1 dark:text-white">
                  <div className="dark:text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="w-10 text-green-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
                    </svg>
                    Invite your colleagues to recommend you after you apply.
                  </div>
                  <span className="relative inline Popup_popup__ptPAE">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="w-10 ml-3 text-gray-600"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                    </svg>
                    <span className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm shadow-xl">
                      <span>
                        You can ask your colleagues and friends for{" "}
                        <b>recommendations</b>.<br />
                        <br /> Recommendation letters are delivered directly to
                        the employer.
                        <br />
                        <br />
                        We observe a +27.5% increase in job acceptance rates,
                        compared to applicants without recommendations.
                      </span>
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
