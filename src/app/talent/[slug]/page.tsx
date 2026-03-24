"use client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="Talent_Talent__yXfRZ container-wide py-3 page mt-0">
      <div className="grid grid-cols-6 gap-4 py-4">
        <div className="hidden md:flex col-span-6 md:col-span-2 rounded-lg dark:bg-[#0e0f11] border bg-white p-4 md:p-10 border-slate-100 dark:border-transparent flex-col items-center h-fit dark:shadow-dark-300">
          <span className="flex justify-around w-full">
            <img
              width="150"
              height="150"
              className="w-[150px] h-[150px] rounded-full border border-foreground/10"
              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:150/height:150/plain/gs:/job-listing-logos/e3911086-9c71-45f7-88a0-ca834670d0b8.jpg"
              alt="Software Engineer"
            />
          </span>
          <h2
            className="hidden w-full mb-0 overflow-hidden text-2xl leading-none text-center break-words md:block blur-sm"
            title="Register to see the full name"
          >
            Web3 Talent
          </h2>
          <p className="my-3 opacity-60">@micahel_chung {slug}</p>
          <button className="btn bg-brand-blue flex gap-4 items-center justify-center !text-white w-full mt-1 py-2 py-3 mt-7">
            Contact me
          </button>
          <div className="w-full mt-2 space-y-2"></div>
        </div>
        <div className="col-span-6 md:col-span-4 rounded-lg dark:bg-[#051123] border bg-white p-4 md:p-10 border-slate-100 dark:border-transparent dark:shadow-dark-300">
          <nav className="flex items-center text-sm mb-3 -mt-3 dark:opacity-60">
            <ol className="flex items-center p-0 m-0 list-none">
              <li>
                <Link className="text-foreground/80 hover:underline" href="/">
                  Home
                </Link>
              </li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 512"
                className="mx-2 my-0 text-sm text-foreground/80"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
              </svg>
              <li>
                <Link
                  className="text-foreground/80 hover:underline"
                  href="/talent"
                >
                  Talent
                </Link>
              </li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 512"
                className="mx-2 my-0 text-sm text-foreground/80"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
              </svg>
              <li>
                <span className="no-underline text-foreground/80 line-clamp-1">
                  Software Engineer
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="w-full mt-0 mb-4 text-2xl break-words md:text-4xl md:block">
            Software Engineer
          </h1>
          <div className="block pb-4 md:hidden">
            <div className="flex items-start gap-4">
              <span className="flex justify-around w-14 h-15 aspect-square">
                <img
                  alt="Software Engineer"
                  width="50"
                  height="50"
                  className="border rounded-full w-14 h-15 border-slate-300 dark:border-slate-700"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:50/height:50/plain/gs:/job-listing-logos/e3911086-9c71-45f7-88a0-ca834670d0b8.jpg"
                />
              </span>
              <div>
                <span className="w-full mb-1 overflow-hidden text-xl leading-none break-words block blur-sm">
                  Web3 Talent
                </span>
                <p className="m-0 mb-1 opacity-60">@micahel_chung</p>
              </div>
            </div>
          </div>
          <div className="break-words text-md md:text-[1.3em] mb-3">
            <p>
              I am a <strong>Software Engineer</strong> with over{" "}
              <strong>10 years</strong> of experience specializing in{" "}
              <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>golang</strong> and <strong>Nest.js</strong>. I’ve worked
              for both <strong>big corporations</strong> and{" "}
              <strong>fast startups</strong>, and I’m passionate about building
              innovative products with <strong>clean, well-documented</strong>,
              and <strong>performant</strong> code. For the{" "}
              <strong>past 4 years</strong>, I’ve focused on the{" "}
              <strong>Blockchain</strong> industry.
            </p>
            <p>
              In my most recent role, I lead my team to success by{" "}
              <strong>removing obstacles</strong>, fostering a{" "}
              <strong>collaborative culture</strong>, and{" "}
              <strong>bridging any gaps</strong>. My greatest joy comes from{" "}
              <strong>empowering others</strong> and{" "}
              <strong>mentoring juniors</strong> to support their growth.
            </p>
            <p>Now Im excited to t...</p>
          </div>
          <div className="mb-4">
            <h3 className="opacity-50">Salary &amp; Rates</h3>
            <div className="my-4">
              <div className="space-x-4 text-lg md:text-xl">
                <span>
                  <span className="text-3xl font-bold text-green-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 288 512"
                      className="mr-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                    </svg>
                    40
                  </span>
                  <span className="font-bold opacity-80"> / hour</span>
                </span>
                <span>
                  <span className="text-3xl font-bold text-green-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 288 512"
                      className="mr-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                    </svg>
                    6000
                  </span>
                  <span className="font-bold opacity-80"> / mo</span>
                </span>
              </div>
            </div>
          </div>
          <h3 className="opacity-50">Location, Languages, Tags, etc</h3>
          <div className="flex gap-3 mb-3 text-md">
            <div className="flex text-left items-center justify-start md:justify-center justify-start items-left dark:text-gray-300">
              <div className="w-3.5 h-3.5 rounded-full bg-green-500 mr-2"></div>{" "}
              Active 3 minutes ago
            </div>
            <div title="Current Location" className="text-left md:text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="m-0 -mt-1 opacity-60"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"></path>
              </svg>
              <Link
                className="ml-1 text-gray-800 cursor-pointer hover:underline dark:text-gray-200"
                href="/talent/in/london"
              >
                London
              </Link>
            </div>
          </div>
          <div className="mb-3">
            🗣️
            <Link
              className="ml-1 text-gray-800 cursor-pointer hover:underline dark:text-gray-200"
              href="/talent/english-speaking"
            >
              English
            </Link>
          </div>
          <div className="mb-3">🚀 In crypto since 2020</div>
          <div className="mb-2">🌱 Member since November 2024</div>
          <div className="my-2 space-y-2">
            <Link className="talent__badge" href="/talent/react">
              React
            </Link>
            <Link className="talent__badge" href="/talent/angular">
              Angular
            </Link>
            <Link className="talent__badge" href="/talent/typescript">
              TypeScript
            </Link>
            <Link className="talent__badge" href="/talent/javascript">
              JavaScript
            </Link>
            <Link className="talent__badge" href="/talent/tailwindcss">
              TailwindCSS
            </Link>
            <Link className="talent__badge" href="/talent/solidity">
              Solidity
            </Link>
          </div>
          <div className="mt-4">
            <div
              className="space-x-2 text-blue-700"
              title="Verified accounts"
            ></div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>{" "}
              Accepts Crypto
            </div>
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>{" "}
              Accepts Fiat
            </div>
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>{" "}
              Open to Full-time
            </div>
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>{" "}
              Open to Part-time
            </div>
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>{" "}
              Remote
            </div>
            <div className="items-center text-sm md:text-md inline-block gap-2 px-3 py-1 md:py-1 text-white rounded-full bg-gray-500 opacity-80">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="-ml-1 align-middle mt-.5 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
              </svg>{" "}
              Open to Relocation
            </div>
          </div>
          <div className="mt-5 space-x-2"></div>
          <div className="w-full my-10">
            <h3>Work Experience</h3>
            <table className="w-full table-fixed" cellPadding={0} border={0}>
              <tbody className="text-left">
                <tr className="font-bold dark:hover:bg-dark-200">
                  <td width="5">Period</td>
                  <td width="5">Title</td>
                  <td width="5">Company</td>
                </tr>
                <tr className="relative group dark:hover:bg-dark-200 blur-sm">
                  <td width="5" className="break-all">
                    -- to --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                </tr>
                <tr className="relative group dark:hover:bg-dark-200 blur-sm">
                  <td width="5" className="break-all">
                    -- to --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                </tr>
                <tr className="relative group dark:hover:bg-dark-200 blur-sm">
                  <td width="5" className="break-all">
                    -- to --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                </tr>
                <tr className="relative group dark:hover:bg-dark-200 blur-sm">
                  <td width="5" className="break-all">
                    -- to --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                </tr>
                <tr className="relative group dark:hover:bg-dark-200 blur-sm">
                  <td width="5" className="break-all">
                    -- to --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                  <td width="5" className="break-all">
                    --
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="py-4">
            <h3 className="opacity-50">Social Media</h3>
            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="py-4 my-2 text-xl">
            <h3 className="opacity-50">Tell us a joke?</h3>
            <p>
              Why did the programmer quit his job? Because he didn’t get arrays!
              😜
            </p>
          </div>
          <div className="w-full my-10">
            <div className="flex items-baseline flex-row justify-between min-h-[1em] mb-4">
              <h3 className="opacity-50">Recommendations</h3>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
                Recommend
              </button>
            </div>
            <div className="flex justify-end w-full mt-2"></div>
            <span className="opacity-50">No recommendations yet</span>
          </div>
          <div className="block mb-10 md:hidden">
            <div className="w-full mt-2 space-y-2"></div>
          </div>
          <div className="flex flex-col items-center my-5 md:flex-row"></div>
          <div className="text-sm text-right">
            <p className="my-0 opacity-60">Member since November 2024</p>
            <button className="text-sm text-red-500 underline cursor-pointer hover:no-underline">
              Report this profile
            </button>
          </div>
        </div>
        <div className="z-[1000] fixed w-full left-0 bottom-0 sm:static bg-black md:hidden flex sm:bg-transparent">
          <button className="rounded-none sm:rounded-md w-full btn btn-lg btn-blue flex gap-4 items-center justify-center">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
