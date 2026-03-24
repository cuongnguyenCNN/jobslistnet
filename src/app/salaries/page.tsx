

import Link from "next/link";
function convertStyleStringToObject(styleString: string) {
  const styleObject: { [key: string]: string } = {};

  styleString.split(";").forEach((style) => {
    if (style.trim()) {
      const [property, value] = style.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
        styleObject[camelCaseProperty] = value.trim();
      }
    }
  });

  return styleObject;
}

export default function Salaries() {
  return (
    <main className="SubmitSalary_submitSalary__t_gMh">
      <div className="mx-auto max-w-[90em] ui">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <header>
            <h1 className="ui header">Crypto &amp; Web3 Salaries</h1>
            <h2
              className="mb-10 text-2xl"
              style={convertStyleStringToObject(
                "font-size: 1.5em; font-weight: normal;"
              )}
            >
              Benchmark your salary against others.
              <br className="desktop-only" /> 100% anonymous. Fully private.
            </h2>
            <p className="md:text-2xl">
              The average web3 salary (globally) is <b>$104,751</b> per year.
              <br /> Salary estimates are based on anonymous submissions by
              web3s, website users just like you and collected from past and
              present job posts.
            </p>
            <div
              className="flex my-5 justify-around items-center flex-row text-center"
              style={convertStyleStringToObject("margin: 5vh auto;")}
            >
              <div className="" title="Average per year">
                <div className="text-3xl text-brand-blue">$105k</div>
                <div className="">
                  per year
                  <br /> average
                </div>
              </div>
              <div className="" title="10th Percentile">
                <div className="text-3xl text-brand-blue">$18k</div>
                <div className="">
                  per year
                  <br /> (Bottom 10%)
                </div>
              </div>
              <div className="" title="90th Percentile">
                <div className="text-3xl text-brand-blue">$160k</div>
                <div className="">
                  per year
                  <br /> (Top 10%)
                </div>
              </div>
              <div className="" title="Based on 6368 contributions">
                <div className="text-3xl text-brand-blue">6368</div>
                <div className="">
                  Approved <br />
                  Salaries
                </div>
              </div>
            </div>
            <div className="mb-5 -mt-4 text-center sm:-mt-8">
              <Link
                href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fcryptojobslist.com&amp;text=%F0%9F%92%B0+Crypto+%26+Web3+Salaries%0A%0A-+%24160%2C000+-+top+10%25%0A-+%24104%2C751+-+median%0A-+%2418%2C000+-+bottom+10%25%0A%0ABased+on+6368+samples.%0A%0ABenchmark+your+salary+against+others+here+%F0%9F%91%87+%40CryptoJobsList%0A%0Ahttps%3A%2F%2Fcryptojobslist.com%2Fsalaries"
                target="_blank"
                className="font-bold inline-block text-white bg-twitter px-4 pr-5 btn rounded-full w-32 hover:text-white hover:bg-telegram"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>{" "}
                Post
              </Link>
            </div>
            <p className="md:text-2xl">
              Once your submission is reviewed by the community, youll get
              access to all salary reports. Review process might take a day or
              two, so please check this page in a few hours.
            </p>
            <em className="block mt-5 text-2xl opacity-70">
              Updated Mar 27, 2025
            </em>
          </header>
          <aside className="flex flex-col justify-center">
            <h2 className="text-center">
              Salary confession booth
              <img
                alt="pepe money meme"
                loading="lazy"
                width="41"
                height="60"
                decoding="async"
                data-nimg="1"
                className="ml-2 !w-[60px] !h-[41px]"
                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:48/rs:fill/ex:1/plain/https://cryptojobslist.com/images/pepe/pepe-money-meme.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:96/rs:fill/ex:1/plain/https://cryptojobslist.com/images/pepe/pepe-money-meme.png 2x"
                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:96/rs:fill/ex:1/plain/https://cryptojobslist.com/images/pepe/pepe-money-meme.png"
                style={convertStyleStringToObject("color: transparent;")}
              />
            </h2>
            <form
              id="submit-salary"
              className="SubmitSalary_submitArea__yvwWm !w-full"
              autoComplete="off"
            >
              <div className="form-field form-field-lg huge required">
                <label className="!text-lg">
                  💸 Whats your annual base pay? (in USD, per year)
                </label>
                <div className="relative">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 288 512"
                    className="absolute self-center text-2xl left-4 top-[50%] -translate-y-[50%]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                  </svg>
                  <input
                    name="salary"
                    type="number"
                    placeholder="160 000 / year"
                    style={convertStyleStringToObject("padding-left: 3rem;")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 mb-0 gap-x-4 form-field">
                <div className="form-field">
                  <input
                    id="annualBonus"
                    name="annualBonus"
                    type="number"
                    placeholder="💰 Annual Bonus value in USD"
                    title="Annual Bonus value in USD. Tokens? Cash?"
                    value=""
                  />
                </div>
                <div className="form-field">
                  <input
                    id="equityPercent"
                    name="equityPercent"
                    type="number"
                    placeholder="🤑 Equity Percent. E.g.: 0.5%"
                    title="Example: 0.5%"
                    value=""
                  />
                </div>
              </div>
              <div className="form-field required">
                <label className="!text-lg">👨‍💻 Job Title</label>
                <div className="relative text-left group w-full dropdown-select bg-white dark:border-dark-100 dark:bg-dark-100">
                  <div className="">
                    <input
                      className="flex items-center justify-between py-1.5 text-left text-black shadow-sm md:rounded"
                      placeholder="Your Job Title"
                      value=""
                      style={convertStyleStringToObject(
                        "min-height: 38px; border: none;"
                      )}
                    />
                  </div>
                  <div
                    className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible w-full"
                    style={convertStyleStringToObject("right: 1px;")}
                  >
                    <div
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                      className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                    >
                      <ul
                        className="z-20 w-full p-0 m-0 overflow-auto"
                        style={convertStyleStringToObject("max-height: 150px;")}
                      ></ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field required">
                <label className="!text-lg">
                  📝 Job Description. Whats unique about what you do?
                </label>
                <textarea
                  name="jobDescription"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="jobDescription"
                  rows={3}
                  placeholder="Your duties, responsibilities, and what makes your job unique. E.g. &quot;Im a Solidity Developer working on NFTs and DeFi projects. I write smart contracts and work on the front-end too."
                ></textarea>
              </div>
              <div className="form-field required">
                <label className="!text-lg">🌶 Share your work confession</label>
                <textarea
                  name="notes"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-xs"
                  id="notes"
                  rows={5}
                  placeholder="Whats the hustle like? Anything controversial at work? Underpaid? Overpaid? Paygap? Lost money? Crazy perks? Share as much as you want! Keep it anonymous. If your story is spicy, well feature it on Twitter/X."
                ></textarea>
              </div>
              <div className="grid grid-cols-3 gap-x-4">
                <div className="form-field">
                  <input
                    className="pr-1!important"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="number"
                    placeholder="Years of Experience"
                    value=""
                  />
                </div>
                <div className="form-field">
                  <input
                    id="yearsAtTheCompany"
                    name="yearsAtTheCompany"
                    type="number"
                    placeholder="Years at the Company"
                    value=""
                  />
                </div>
                <div className="form-field">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    value=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-field">
                  <input
                    className="h-10"
                    id="companySize"
                    name="companySize"
                    type="number"
                    placeholder="Company Size"
                    value=""
                  />
                </div>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r6:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 notranslate bg-white dark:bg-dark-200 !h-10"
                >
                  <span
                    style={convertStyleStringToObject("pointer-events: none;")}
                  >
                    <span className="text-[1.1em] text-foreground/50">
                      Employment Type
                    </span>
                  </span>
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
                <select
                  aria-hidden="true"
                  tabIndex={-1}
                  style={convertStyleStringToObject(
                    "position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
                  )}
                >
                  <option value=""></option>
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACTOR">Contractor</option>
                  <option value="SELF_EMPLOYED">Self Employed</option>
                </select>
              </div>
              <div className="grid grid-cols-2 mb-0 gap-x-4 form-field">
                <div className="form-field">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="📍 Location. Where are you based?"
                    value=""
                  />
                </div>
                <div className="justify-around form-field inline-flex">
                  <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                    <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                      <input
                        name="remote"
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer"
                      />
                      <svg
                        className="hidden mb-0 text-green-500 pointer-events-none fill-current size-4"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center select-none">
                      <span className="font-normal text-[1.1em]">
                        100% Remote work
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label className="text-lg font-bold">
                  💎 What % of your salary is paid in Crypto?
                </label>
                <div className="flex flex-row items-center gap-3 mx-2 mb-4">
                  <span className="text-lg font-bold">0%</span>
                  <div className="w-full my-3 Range_rangeSlider__l2Adi">
                    <span className="Range_rangeBar__iNxri !bg-foreground/20 !h-2 !rounded-md"></span>
                    <span
                      className="Range_rangeLine__V_wew green !h-2"
                      style={convertStyleStringToObject("width: 0%;")}
                    ></span>
                    <input type="range" min="0" max="100" title="0" value="0" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="z-10 w-full btn btn-lg btn-blue"
                title="All submissions are 100% anonymous. We dont track your user account or any identifiable information"
              >
                Submit Anonymously{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </button>
              <p className="mt-2 text-center">
                10.6% of submissions get rejected because they are inaccurate or
                false.
                <br /> Please ensure your submission is detailed and true.
              </p>
            </form>
          </aside>
        </div>
        <div className="SearchBar_sexyPurpleBlueGradient__zXlKD !mt-10 max-w-7xl !mx-auto">
          <div className="inline-block w-1/2">
            <div className="relative inline-flex w-full text-lg sm:text-2xl">
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
                style={convertStyleStringToObject("color: grey;")}
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
              <input
                name="term"
                className="w-full py-3 pl-10 pr-4 border-0 rounded-l rounded-r-none sm:pl-12 sm:py-4 sm:pr-6 focus:outline-none dark:bg-gray-900 dark:text-white"
                placeholder="Search: Blockchain Developer"
                value=""
              />
            </div>
          </div>
          <div className="inline-block w-1/2">
            <div className="relative inline-flex w-full text-lg sm:text-2xl">
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
                style={convertStyleStringToObject("color: grey;")}
              >
                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
              </svg>
              <input
                name="location"
                className="w-full py-3 pl-10 pr-4 border-0 rounded-l-none rounded-r sm:pl-12 sm:py-4 sm:pr-6 focus:outline-none dark:bg-gray-900 dark:text-white"
                placeholder="Location"
                value=""
              />
            </div>
          </div>
        </div>
        <nav
          role="navigation"
          className="no-scrollbar capitalize px-2 sm:p-0 my-4 flex justify-start gap-2 sm:gap-2 text-center whitespace-nowrap flex-wrap leading-6 sm:px-2 !justify-center mx-auto my-8 text-lg !text-center"
          itemType="https://schema.org/SiteNavigationElement"
        >
          <Link
            itemProp="url"
            className="category !border-brand-blue"
            href="/salaries"
          >
            All Salaries
          </Link>
          <Link
            itemProp="url"
            className="category"
            href="/salaries/salary-remote"
          >
            Remote Salary
          </Link>
          <Link
            itemProp="url"
            className="category"
            href="/salaries/solidity-salary"
          >
            Solidity Salary
          </Link>
          <Link
            itemProp="url"
            className="category"
            href="/salaries/developer-salary"
          >
            Blockchain Developer Salary
          </Link>
          <Link itemProp="url" className="category" href="/salaries/nft-salary">
            NFT Salary
          </Link>
          <Link
            itemProp="url"
            className="category"
            href="/salaries/marketing-salary"
          >
            Crypto Marketing Salary
          </Link>
          <Link
            itemProp="url"
            className="category"
            href="/salaries/designer-salary"
          >
            Web3 Designer Salary
          </Link>
          <button className="text-foreground opacity-80 hover:opacity-100 text-[1rem] hover:underline inline-block sm:w-auto sm:mx-0 sm:ml-1">
            Show less
          </button>
        </nav>
        <div className="flex flex-col justify-around my-4 md:flex-row">
          <h2 className="text-center cursor-pointer ui header">
            Like these stats? — Ask your friends to contribute.{" "}
            <Link
              href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fcryptojobslist.com&amp;text=%F0%9F%92%B0+Crypto+%26+Web3+Salaries%0A%0A-+%24160%2C000+-+top+10%25%0A-+%24104%2C751+-+median%0A-+%2418%2C000+-+bottom+10%25%0A%0ABased+on+6368+samples.%0A%0ABenchmark+your+salary+against+others+here+%F0%9F%91%87+%40CryptoJobsList%0A%0Ahttps%3A%2F%2Fcryptojobslist.com%2Fsalaries"
              target="_blank"
              className="font-bold inline-block text-white bg-twitter px-4 pr-5 btn rounded-full w-32 hover:text-white hover:bg-telegram ml-2 -mt-1"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>{" "}
              Post
            </Link>
          </h2>
          <div
            className="flex justify-center mb-2 overflow-hidden text-lg rounded "
            role="group"
          >
            <button className="px-4 py-0 mx-0 text-gray-500 border-none cursor-pointer dark:bg-dark-100 hover:opacity-80 focus:shadow-outline">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path>
              </svg>
            </button>
            <button className="px-4 py-0 mx-0 text-gray-500 border-none cursor-pointer dark:bg-dark-100 hover:opacity-80 focus:shadow-outline">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-wrap justify-center gap-4 space-y-3 sm:flex sm:space-y-0 items-top">
          <div className="p-4 px-5 border border-solid shadow border-foreground/15 sm:max-w-md rounded-xl hover:bg-slate-50 dark:hover:bg-dark-200">
            <div className="mb-1 text-sm opacity-50" title="2am Mar 28, 2025">
              8 hours ago
            </div>
            <div>
              <span className="text-xl text-green-500">
                $
                <span
                  className="select-none blur-sm"
                  title="Submit your current salary, to view this data."
                >
                  XXX,000
                </span>
                /yr
              </span>
              <span
                className="ml-2"
                title="Submit your current salary, to view this data."
              >
                + <b className="text-green-500 select-none blur-sm">XX,000</b>{" "}
                bonus
              </span>{" "}
            </div>
            <h3 className="m-0 mb-2 text-xl">
              <Link
                className="capitalize hover:underline"
                href="/salaries/community-manager-salary"
              >
                Community Manager <span className="sr-only">Salary</span>
              </Link>
            </h3>
            <p className="flex flex-col">
              <span className="block mt-3">✍️ Underpaid </span>
              <span>
                📍 Remote / Remote{" "}
                <span className="relative inline Popup_popup__ptPAE">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1 self-baseline opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span
                    className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm flex flex-col w-64 -ml-32 text-white bg-black"
                    style={convertStyleStringToObject(
                      "min-width: 28rem; margin-left: -14rem; bottom: 110%;"
                    )}
                  >
                    <span>
                      <b>Barcelona, Spain</b>
                      <span className="text-sm">
                        ↑ Based on GeoIP. Might not be accurate if submitted via
                        VPN.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>🕑 1 years at the company</span>
              <span>⏳ 6 years of experience</span>
              <span>🎂 30 years old </span>
            </p>
          </div>
          <div className="p-4 px-5 border border-solid shadow border-foreground/15 sm:max-w-md rounded-xl hover:bg-slate-50 dark:hover:bg-dark-200">
            <div className="mb-1 text-sm opacity-50" title="9pm Mar 27, 2025">
              13 hours ago
            </div>
            <div>
              <span className="text-xl text-green-500">
                $
                <span
                  className="select-none blur-sm"
                  title="Submit your current salary, to view this data."
                >
                  XXX,000
                </span>
                /yr
              </span>
              <span
                className="ml-2"
                title="Submit your current salary, to view this data."
              >
                + <b className="text-green-500 select-none blur-sm">XX,000</b>{" "}
                bonus
              </span>{" "}
            </div>
            <h3 className="m-0 mb-2 text-xl">
              <Link
                className="capitalize hover:underline"
                href="/salaries/crypto-marketing-and-community-manager-salary"
              >
                Crypto Marketing &amp; Community Manager{" "}
                <span className="sr-only">Salary</span>
              </Link>
            </h3>
            <p className="flex flex-col">
              <span className="block mt-3">
                ✍️ genuinely love the energy of this industry, but I also
                recognize its unpredictability. I’ve seen incredible innovation
                and life-changing opportunities, but I’ve also witnessed
                FOMO-driven decisions, market volatility, and overhyped projects
                that don’t always deliver.
              </span>
              <span>
                📍 Bangladesh / Remote{" "}
                <span className="relative inline Popup_popup__ptPAE">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1 self-baseline opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span
                    className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm flex flex-col w-64 -ml-32 text-white bg-black"
                    style={convertStyleStringToObject(
                      "min-width: 28rem; margin-left: -14rem; bottom: 110%;"
                    )}
                  >
                    <span>
                      <b>Lakshmīpur, Bangladesh</b>
                      <span className="text-sm">
                        ↑ Based on GeoIP. Might not be accurate if submitted via
                        VPN.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>🕑 5 years at the company</span>
              <span>⏳ 5 years of experience</span>
              <span>🎂 28 years old </span>
            </p>
          </div>
          <div className="p-4 px-5 border border-solid shadow border-foreground/15 sm:max-w-md rounded-xl hover:bg-slate-50 dark:hover:bg-dark-200">
            <div className="mb-1 text-sm opacity-50" title="9pm Mar 27, 2025">
              13 hours ago
            </div>
            <div>
              <span className="text-xl text-green-500">
                $
                <span
                  className="select-none blur-sm"
                  title="Submit your current salary, to view this data."
                >
                  XXX,000
                </span>
                /yr
              </span>
              <span
                className="ml-2"
                title="Submit your current salary, to view this data."
              >
                + <b className="text-green-500 select-none blur-sm">XX,000</b>{" "}
                bonus
              </span>{" "}
            </div>
            <h3 className="m-0 mb-2 text-xl">
              <Link
                className="capitalize hover:underline"
                href="/salaries/business-development-salary"
              >
                Business Development <span className="sr-only">Salary</span>
              </Link>
            </h3>
            <p className="flex flex-col">
              <span>
                📍 South Africa{" "}
                <span className="relative inline Popup_popup__ptPAE">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1 self-baseline opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span
                    className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm flex flex-col w-64 -ml-32 text-white bg-black"
                    style={convertStyleStringToObject(
                      "min-width: 28rem; margin-left: -14rem; bottom: 110%;"
                    )}
                  >
                    <span>
                      <b>Cape Town, South Africa</b>
                      <span className="text-sm">
                        ↑ Based on GeoIP. Might not be accurate if submitted via
                        VPN.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>⏳ 8 years of experience</span>
              <span>🎂 35 years old </span>
            </p>
          </div>
          <div className="p-4 px-5 border border-solid shadow border-foreground/15 sm:max-w-md rounded-xl hover:bg-slate-50 dark:hover:bg-dark-200">
            <div className="mb-1 text-sm opacity-50" title="11am Mar 27, 2025">
              a day ago
            </div>
            <div>
              <span className="text-xl text-green-500">
                $
                <span
                  className="select-none blur-sm"
                  title="Submit your current salary, to view this data."
                >
                  XXX,000
                </span>
                /yr
              </span>
              <span
                className="ml-2"
                title="Submit your current salary, to view this data."
              >
                + <b className="text-green-500 select-none blur-sm">XX,000</b>{" "}
                bonus
              </span>{" "}
            </div>
            <h3 className="m-0 mb-2 text-xl">
              <Link
                className="capitalize hover:underline"
                href="/salaries/people-ops-lead-salary"
              >
                People Ops Lead <span className="sr-only">Salary</span>
              </Link>
            </h3>
            <p className="flex flex-col">
              <span className="block mt-3">✍️ -</span>
              <span>
                📍 United Kingdom{" "}
                <span className="relative inline Popup_popup__ptPAE">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1 self-baseline opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span
                    className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm flex flex-col w-64 -ml-32 text-white bg-black"
                    style={convertStyleStringToObject(
                      "min-width: 28rem; margin-left: -14rem; bottom: 110%;"
                    )}
                  >
                    <span>
                      <b>Singapore, Singapore</b>
                      <span className="text-sm">
                        ↑ Based on GeoIP. Might not be accurate if submitted via
                        VPN.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>🕑 1 years at the company</span>
              <span>⏳ 13 years of experience</span>
              <span>🎂 35 years old </span>
            </p>
          </div>
          <div className="p-4 px-5 border border-solid shadow border-foreground/15 sm:max-w-md rounded-xl hover:bg-slate-50 dark:hover:bg-dark-200">
            <div className="mb-1 text-sm opacity-50" title="9am Mar 27, 2025">
              a day ago
            </div>
            <div>
              <span className="text-xl text-green-500">
                $
                <span
                  className="select-none blur-sm"
                  title="Submit your current salary, to view this data."
                >
                  XXX,000
                </span>
                /yr
              </span>
              <span
                className="ml-2"
                title="Submit your current salary, to view this data."
              >
                + <b className="text-green-500 select-none blur-sm">XX,000</b>{" "}
                bonus
              </span>{" "}
            </div>
            <h3 className="m-0 mb-2 text-xl">
              <Link
                className="capitalize hover:underline"
                href="/salaries/director-of-business-development-salary"
              >
                Director Of Business Development{" "}
                <span className="sr-only">Salary</span>
              </Link>
            </h3>
            <p className="flex flex-col">
              <span>
                📍 florida / Remote{" "}
                <span className="relative inline Popup_popup__ptPAE">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="ml-1 self-baseline opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                  </svg>
                  <span
                    className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm flex flex-col w-64 -ml-32 text-white bg-black"
                    style={convertStyleStringToObject(
                      "min-width: 28rem; margin-left: -14rem; bottom: 110%;"
                    )}
                  >
                    <span>
                      <b>São Paulo, Brazil</b>
                      <span className="text-sm">
                        ↑ Based on GeoIP. Might not be accurate if submitted via
                        VPN.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>🕑 1 years at the company</span>
              <span>⏳ 20 years of experience</span>
              <span>🎂 40 years old </span>
            </p>
          </div>
          <Link
            className="flex flex-col items-center justify-center p-4 px-5 text-black border-2 border-dashed shadow hover:text-black dark:text-white sm:w-[18em] border-brand-blue rounded-xl hover:shadow-lg"
            href="/salaries#submit-salary"
          >
            <h3 className="mb-2 text-center">
              Access 6368 Detailed Web3 Salaries
            </h3>
            <span className="block py-3 btn btn-blue">+ Add Your Salary</span>
            <ol className="mt-4 list-decimal list-inside">
              <li>Submit your compensation</li>
              <li>Get Approved</li>
              <li>Benchmark against others</li>
            </ol>
          </Link>
        </div>
        <div className="max-w-lg mx-auto my-10"></div>
      </div>
      <div className="container mb-10">
        <h2 className="text-center">Annual Web3 Salaries for Key Roles</h2>
        <table className="w-full text-center table-auto border-spacing-2">
          <thead className="p-5">
            <tr>
              <th className="p-2">Role</th>
              <th className="p-2">Mean Annual Salary</th>
              <th className="p-2">Min Annual Salary. P10</th>
              <th className="p-2">Max Annual Salary. P90</th>
            </tr>
          </thead>
          <tbody>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/legal">
                  Legal
                </Link>
              </td>
              <td>$105,996</td>
              <td>$30,000</td>
              <td>$250,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/product">
                  Product
                </Link>
              </td>
              <td>$101,317</td>
              <td>$30,000</td>
              <td>$180,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/solidity">
                  Solidity
                </Link>
              </td>
              <td>$100,973</td>
              <td>$22,000</td>
              <td>$180,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/sales">
                  Sales
                </Link>
              </td>
              <td>$99,941</td>
              <td>$25,000</td>
              <td>$180,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/finance">
                  Finance
                </Link>
              </td>
              <td>$92,337</td>
              <td>$30,000</td>
              <td>$160,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/developer">
                  Developer
                </Link>
              </td>
              <td>$84,017</td>
              <td>$20,000</td>
              <td>$150,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/marketing">
                  Marketing
                </Link>
              </td>
              <td>$76,553</td>
              <td>$18,000</td>
              <td>$150,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/design">
                  Design
                </Link>
              </td>
              <td>$74,943</td>
              <td>$15,000</td>
              <td>$140,000</td>
            </tr>
            <tr className="dark:hover:bg-dark-200">
              <td className="text-left">
                <Link className="hover:underline" href="/salaries/community">
                  Community
                </Link>
              </td>
              <td>$45,472</td>
              <td>$10,000</td>
              <td>$100,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <article
        className="p-4 mx-auto mb-10 text-lg max-w-prose "
        style={convertStyleStringToObject("max-width: 60ch;")}
      >
        <p>
          Web3 jobs have seen massive growth recently, and the salaries have
          followed along with it. A common misconception is the understanding of
          Web3 itself. In simple terms, Web3 is the new wave of internet
          services that are more decentralized and often run using
          cryptocurrencies. Check out our article on{" "}
          <Link href="https://cryptojobslist.com/blog/what-is-web3">
            what Web3 is and why you should care
          </Link>
          .{" "}
        </p>
        <p>
          The next common misconception is the type of jobs. Even within the
          crypto industry, people often assume that all the jobs are technical.
          Yes, you need to understand the crypto industry if you want to work
          for a crypto company. But you do not need deep technical knowledge.
          Most of the jobs are non-technical. Our guide on{" "}
          <Link href="https://cryptojobslist.com/blog/find-first-crypto-job">
            finding your first crypto job
          </Link>{" "}
          can help you transition into the crypto industry.{" "}
        </p>
        <p>
          Cryptocurrency job salaries could be very attractive for highly
          skilled people. Especially the developers, as there are very few
          people in the world who are very skilled and they are sought after.
          Also, Cryptocurrency salaries are very flexible, and most companies
          even pay their employees in Crypto.{" "}
        </p>
        <p>
          Since most companies are fully remote, you can stay anywhere and get
          paid in crypto without friction. Crypto levels the playing field by
          providing equal opportunity to everyone, and only the skills matter.{" "}
        </p>
      </article>
    </main>
  );
}
