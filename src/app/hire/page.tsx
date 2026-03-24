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
export default function Hire() {
  return (
    <div className="JobCreate_jobCreate__dBRiC" data-clarity-unmask="true">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-[min(100%,768px)] p-4 mx-auto form-side">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link
                href=""
                className="LogoButton_logoButton__4UWfl flex content-center z-10 !absolute md:!relative left-[50%] translate-x-[-50%]"
                aria-label="Crypto Jobs List"
                title="Crypto Jobs List"
              >
                <svg
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
                </svg>
              </Link>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <div
                  className="block mr-0 text-center sm:mr-2 btn btn-link lg:rounded hover:text-brand-blue hidden md:flex !m-0 aspect-square justify-center items-center pt-2"
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
                <button
                  title="Toggle Dark/Light mode"
                  className="inline-block text-center btn btn-link md:rounded hover:text-brand-blue !w-auto"
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
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold">
            Hire Web3, Crypto and Blockchain Talent
          </h1>
          <p>
            Welcome to Crypto Jobs List — largest Web3 Hiring and Job Search
            community.
            <br /> Use the form below to post a job with us. Pricing and all
            necessary details are below.
            <br />- Looking for recruitment services? Fill out{" "}
            <Link href="" target="_blank">
              this form
            </Link>{" "}
            and our team will get back to you if you qualify.
            <br /> - Buying job credits for your team or a portfolio company?{" "}
            <Link href="" target="_blank">
              Buy a package here
            </Link>
          </p>
          <form className="flex flex-col" id="TalentForm">
            <div className="form-field required bg error">
              <label>Job Title</label>
              <input
                data-testid="jobTitle"
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="Solidity Engineer"
                data-component-name="jobTitle"
                value=""
              />

              <div className="bg-medium-red text-white text-center inline-block shadow text-sm rounded-md px-2 py-1 relative top-0 z-10 mt-2">
                Job Title, please
                <svg
                  className="absolute text-medium-red h-4 mb-0 left-0 ml-3 bottom-full"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                >
                  <polygon
                    className="fill-current"
                    points="0,255 127.5,127.5 255,255"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div className="form-field required bg">
              <label>Company Name</label>
              <input
                data-testid="companyName"
                id="companyName"
                name="companyName"
                type="text"
                placeholder="CryptoCoin — Keep it short. Dont write Inc. Ltd."
                data-component-name="companyName"
                value=""
              />
            </div>
            <div className="form-field notranslate required bg">
              <label>Job Description</label>
              <div className="min-h-[200px]">
                <div className="quill ">
                  <div className="ql-toolbar ql-snow">
                    <span className="ql-formats">
                      <span className="ql-header ql-picker">
                        <span
                          className="ql-picker-label"
                          tabIndex={0}
                          role="button"
                          aria-expanded="false"
                          aria-controls="ql-picker-options-0"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <polygon
                              className="ql-stroke"
                              points="7 11 9 13 11 11 7 11"
                            ></polygon>{" "}
                            <polygon
                              className="ql-stroke"
                              points="7 7 9 5 11 7 7 7"
                            ></polygon>{" "}
                          </svg>
                        </span>
                        <span
                          className="ql-picker-options"
                          aria-hidden="true"
                          tabIndex={-1}
                          id="ql-picker-options-0"
                        >
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item"
                            data-value="2"
                          ></span>
                          <span
                            tabIndex={0}
                            role="button"
                            className="ql-picker-item ql-selected"
                          ></span>
                        </span>
                      </span>
                      <select
                        className="ql-header"
                        style={convertStyleStringToObject("display: none;")}
                      >
                        <option value="2"></option>
                        <option></option>
                      </select>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-bold">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <path
                            className="ql-stroke"
                            d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                          ></path>{" "}
                          <path
                            className="ql-stroke"
                            d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                          ></path>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-italic">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="13"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="5"
                            x2="11"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="8"
                            x2="10"
                            y1="14"
                            y2="4"
                          ></line>{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-list" value="ordered">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke ql-thin"
                            x1="2.5"
                            x2="4.5"
                            y1="5.5"
                            y2="5.5"
                          ></line>{" "}
                          <path
                            className="ql-fill"
                            d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                          ></path>{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                          ></path>{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                          ></path>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-list" value="bullet">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-link">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="11"
                            y1="7"
                            y2="11"
                          ></line>{" "}
                          <path
                            className="ql-even ql-stroke"
                            d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                          ></path>
                          <path
                            className="ql-even ql-stroke"
                            d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                          ></path>{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-clean">
                        <svg className="" viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="5"
                            x2="13"
                            y1="3"
                            y2="3"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="9.35"
                            y1="12"
                            y2="3"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="11"
                            x2="15"
                            y1="11"
                            y2="15"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="11"
                            y1="11"
                            y2="15"
                          ></line>{" "}
                          <rect
                            className="ql-fill"
                            height="1"
                            rx="0.5"
                            ry="0.5"
                            width="7"
                            x="2"
                            y="14"
                          ></rect>{" "}
                        </svg>
                      </button>
                    </span>
                  </div>
                  <div className="ql-container ql-snow">
                    <div
                      className="ql-editor ql-blank"
                      data-gramm="false"
                      contentEditable="true"
                    >
                      <p>
                        <br />
                      </p>
                    </div>
                    <div
                      className="ql-clipboard"
                      contentEditable="true"
                      tabIndex={-1}
                    ></div>
                    <div className="ql-tooltip ql-hidden">
                      <Link
                        href=""
                        className="ql-preview"
                        rel="noopener noreferrer"
                        target="_blank"
                      ></Link>
                      <input
                        type="text"
                        data-formula="e=mc^2"
                        data-link="https://quilljs.com"
                        data-video="Embed URL"
                      />
                      <Link href="" className="ql-action"></Link>
                      <Link href="" className="ql-remove"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden mt-1 mb-5 form-field bg">
              <label>
                Record a Video Description{" "}
                <span className="font-light opacity-80">(Optional)</span>
              </label>
              <p className="opacity-80">
                Capture the essence of your job opportunity in a 60-second
                video. Showcase key responsibilities, essential qualifications,
                and what makes this role truly exciting. Record as many takes as
                you need to get it just right.
                <br /> The video will be displayed alongside your job listing.
                Helps build trust with your candidates.
              </p>
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
                  Start Recording
                </button>
              </div>
            </div>
            <div className="form-field bg">
              <label>Job Location</label>
              <input
                data-testid="jobLocation"
                id="jobLocation"
                name="jobLocation"
                type="text"
                placeholder="Leave blank if 100% Remote"
                value=""
              />
            </div>
            <div id="salary-range" className="mb-4">
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-12 md:col-span-6 form-field bg">
                  <label>Salary Range</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      name="minValue"
                      placeholder="90 000"
                      step="1"
                      value=""
                    />
                    <div className="JobForm_stripSeparator__P0UzY"></div>
                    <input
                      type="number"
                      name="maxValue"
                      placeholder="140 000"
                      step="1"
                      value=""
                    />
                  </div>
                </div>
                <div className="flex items-end col-span-6 md:col-span-3 form-field bg">
                  <div className="relative text-left group w-full dropdown-select bg-white dark:bg-dark-200 dark:border-dark-100">
                    <div className="dark:bg-dark-200">
                      <div className="flex items-center justify-between border border-gray-700 select-none dark:placeholder-gray-400 trigger btn btn-link md:rounded dark:bg-dark-200 dark:text-white whitespace-nowrap">
                        USD{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          className="text-gray-700"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={convertStyleStringToObject("right: 1px;")}
                      className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible w-full"
                    >
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                        className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                      >
                        <ul
                          className="w-full p-0 m-0 overflow-auto"
                          style={convertStyleStringToObject("max-height:150px")}
                        >
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AED
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AFN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ALL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AMD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ANG
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AOA
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ARS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AUD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AWG
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            AZN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BAM
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BBD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BDT
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BGN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BHD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BIF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BMD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BND
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BOB
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BRL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BSD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BTN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BWP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BYR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            BZD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CAD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CDF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CHF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CLP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CNY
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            COP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CRC
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CUP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CVE
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            CZK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            DJF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            DKK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            DOP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            DZD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            EEK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            EGP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ERN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ETB
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            EUR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            FJD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            FKP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GBP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GEL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GHS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GIP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GMD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GNF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GTQ
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            GYD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            HKD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            HNL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            HRK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            HTG
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            HUF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            IDR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ILS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            INR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            IQD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            IRR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ISK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            JEP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            JMD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            JOD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            JPY
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KES
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KGS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KHR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KMF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KPW
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KRW
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KWD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KYD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            KZT
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LAK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LBP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LKR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LRD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LSL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LTL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LVL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            LYD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MAD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MDL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MGA
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MKD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MMK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MNT
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MOP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MRO
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MUR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MVR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MWK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MXN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MYR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            MZN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NAD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NGN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NIO
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NOK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NPR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            NZD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            OMR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PAB
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PEN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PGK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PHP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PKR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PLN
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            PYG
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            QAR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            RON
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            RSD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            RUB
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            RWF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SAR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SBD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SCR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SDG
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SEK
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SGD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SHP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SLL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SOS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SRD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            STD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SVC
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SYP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            SZL
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            THB
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TJS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TMT
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TND
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TOP
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TRY
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TTD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TWD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            TZS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            UAH
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            UGX
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            USD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            UYU
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            UZS
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            VEF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            VND
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            VUV
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            WST
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            XAF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            XCD
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            XOF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            XPF
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            YER
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ZAR
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ZMW
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            ZWL
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end col-span-6 md:col-span-3 form-field bg">
                  <div className="relative text-left group w-full dropdown-select bg-white dark:bg-dark-200 dark:border-dark-100">
                    <div className="dark:bg-dark-200">
                      <div className="flex items-center justify-between border border-gray-700 select-none dark:placeholder-gray-400 trigger btn btn-link md:rounded dark:bg-dark-200 dark:text-white whitespace-nowrap">
                        Year{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          className="text-gray-700"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={convertStyleStringToObject("right: 1px;")}
                      className="absolute z-50 min-w-40 pt-2 origin-top-right rounded-md shadow-xl invisible w-full"
                    >
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                        className="bg-white rounded-md shadow-xs dark:bg-dark-200"
                      >
                        <ul
                          className="w-full p-0 m-0 overflow-auto"
                          style={convertStyleStringToObject("max-height:150px")}
                        >
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            Year
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            Month
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            Week
                          </li>
                          <li className="block w-full text-left select-none btn btn-link md:rounded">
                            Hour
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-lg font-bold">Country Filter</label>
              <div>
                <div className="flex flex-row items-center justify-between mb-2 text-lg">
                  <div className="flex flex-row items-center space-x-8">
                    <label className="cursor-pointer flex items-center gap-2 cursor-pointer">
                      <input
                        id="radio-:r0:"
                        name="countryFilterMode"
                        tabIndex={0}
                        type="radio"
                        value=""
                      />{" "}
                      Include countries
                    </label>
                    <label className="cursor-pointer flex items-center gap-2 cursor-pointer">
                      <input
                        id="radio-:r1:"
                        name="countryFilterMode"
                        tabIndex={0}
                        type="radio"
                        value=""
                      />{" "}
                      Exclude countries
                    </label>
                  </div>
                </div>
                <p className="m-0 -mt-1 text-sm opacity-60">
                  The following list of countries will be <b>included</b> in the
                  set of applicants.{" "}
                  <Link
                    href=""
                    className="underline external-link"
                    target="_blank"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex gap-2 mt-0 mb-2 text-sm text-foreground/60">
                  <span>Presets: </span>
                  <button className="underline hover:text-foreground">
                    APAC
                  </button>
                  <button className="underline hover:text-foreground">
                    SEA
                  </button>
                  <button className="underline hover:text-foreground">
                    EMEA
                  </button>
                  <button className="underline hover:text-foreground">
                    LATAM
                  </button>
                  <button className="underline hover:text-foreground">
                    Europe
                  </button>
                  <button className="underline hover:text-foreground">
                    North America
                  </button>
                  <button className="underline hover:text-foreground">
                    South America
                  </button>
                  <button className="underline hover:text-foreground">
                    Africa
                  </button>
                  <button className="underline hover:text-foreground">
                    Oceania
                  </button>
                </div>
                <div
                  tabIndex={-1}
                  className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground overflow-visible bg-transparent"
                  cmdk-root=""
                >
                  <label
                    cmdk-label=""
                    id=":r3:"
                    style={convertStyleStringToObject(
                      "position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                    )}
                  ></label>
                  <div className="px-3 py-2 border rounded-md group border-input dark:bg-dark-200 focus-within:outline outline-2 outline-blue-700 dark:outline-blue-400">
                    <div className="flex flex-wrap gap-1">
                      <input
                        placeholder="Select countries..."
                        className="flex-1 h-8 ml-2 bg-transparent outline-none placeholder:text-muted-foreground"
                        cmdk-input=""
                        autoComplete="off"
                        spellCheck="false"
                        aria-autocomplete="list"
                        role="combobox"
                        aria-expanded="true"
                        aria-controls=":r2:"
                        aria-labelledby=":r3:"
                        id=":r4:"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="relative mt-2">
                    <div
                      className="max-h-[300px] overflow-y-auto overflow-x-hidden"
                      cmdk-list=""
                      role="listbox"
                      aria-label="Suggestions"
                      id=":r2:"
                      style={convertStyleStringToObject(
                        "--cmdk-list-height: 0.0px;"
                      )}
                    >
                      <div cmdk-list-sizer=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-field bg">
              <label>Tags</label>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Full Time
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Non Technical
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Web3
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                NFT
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Marketing
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                DeFi
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Internships
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Entry Level
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Trading
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Zero Knowledge
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Anti Money Laundering
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                C++
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Human Resources
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Memes
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                PhD
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                UI/UX
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Remote (USA-only)
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Know Your Customer
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                TypeScript
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Golang
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Vue.js
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                DAO
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Senior Level
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Community Manager
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Mining
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                JavaScript
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Ethereum Virtual Machine
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                DevOps
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                BNB Chain
              </span>
              <span className="inline-block px-4 leading-7 m-1 border border-foreground/10 border-solid rounded-md dark:text-white cursor-pointer hover:opacity-70">
                Move Language
              </span>
            </div>
            <div className="my-14">
              <h2 className="text-4xl">Application Method</h2>
              <div className="flex flex-row my-2 space-x-8 text-lg text-left">
                <label className="cursor-pointer flex items-center gap-2 cursor-pointer">
                  <input
                    id="radio-:Rabllt6:"
                    name="sort"
                    tabIndex={0}
                    type="radio"
                    value="email"
                  />{" "}
                  Email (Recommended)
                </label>
                <label className="cursor-pointer flex items-center gap-2 cursor-pointer">
                  <input
                    id="radio-:Ribllt6:"
                    name="sort"
                    tabIndex={0}
                    type="radio"
                    value="link"
                  />{" "}
                  Redirect to a form
                </label>
              </div>
              <div>
                <p className="my-2 opacity-60">
                  Applications will be emailed to you. Youll also be able to
                  access them in the{" "}
                  <Link
                    href=""
                    target="_blank"
                    className="underline external-link"
                  >
                    hiring dashboard
                  </Link>
                </p>
                <div className="form-field required bg">
                  <label>Email for resumes. Stays private</label>
                  <input
                    data-testid="companyEmail"
                    id="companyEmail"
                    name="companyEmail"
                    type="email"
                    placeholder="your@company.com"
                    value=""
                  />
                </div>
                <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3">
                  <div
                    className="inline-flex"
                    title="Candidates will not be able to submit their application without attaching a resume. We support PDFs, Word files, images. Might result in fewer applications, but higher quality."
                  >
                    <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                      <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                        <input
                          name="resumeRequired"
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
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 384 512"
                          className="m-0 mr-2 text-xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                        </svg>
                        Require
                        <span className="mr-1 text-xl text-red-500">*</span>CV
                        attachment
                      </div>
                    </label>
                  </div>
                  <div
                    className="inline-flex"
                    title="Candidates will be able to record up to 1 minute long video introduction. Best for roles that require soft-skills."
                  >
                    <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                      <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                        <input
                          name="videoApplicationsEnabled"
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
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className="mb-0 mr-1 text-2xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                          ></path>
                        </svg>{" "}
                        Allow Video Applications
                      </div>
                    </label>
                  </div>
                  <div
                    className="inline-flex"
                    title="Candidates wont be able to submit an application without recording a video. Might result in fewer applications, but higher quality."
                  >
                    <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                      <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                        <input
                          name="videoApplicationsRequired"
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
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className="mb-0 mr-1 text-2xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                          ></path>
                        </svg>
                        Require
                        <span className="mr-1 text-xl text-red-500">*</span>
                        Video Applications
                      </div>
                    </label>
                  </div>
                </div>
                <h4 className="inline-block mt-6 mb-0 text-2xl">
                  Screening Questions
                </h4>
                <p className="text-lg">
                  By default we ask all candidates for their cover letter, CV,
                  GitHub, LinkedIn, Telegram, current salary, location and phone
                  number. Ask up to 3 more questions to help you screen
                  applications:
                </p>
                <div className="form-field bg">
                  <label>Question 1</label>
                  <input
                    id="question1"
                    name="question1"
                    type="text"
                    placeholder="Tell us about the last time youve done X"
                    data-component-name="question1"
                    value=""
                  />
                </div>
                <div className="form-field bg">
                  <label>Question 2</label>
                  <input
                    id="question2"
                    name="question2"
                    type="text"
                    placeholder="Whats the difference between PoW and PoS?"
                    data-component-name="question2"
                    value=""
                  />
                </div>
                <div className="form-field bg">
                  <label>Question 3</label>
                  <input
                    id="question3"
                    name="question3"
                    type="text"
                    placeholder="Use simple questions, candidates can answer in 1 sentence"
                    data-component-name="question3"
                    value=""
                  />
                </div>
              </div>
            </div>
            <h2 className="text-4xl">Company Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-14">
              <div className="col-span-2 md:col-span-1">
                <div className="form-field required bg">
                  <label>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="mr-2 text-blue-400"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                    </svg>
                    Website
                  </label>
                  <input
                    data-testid="companyUrl"
                    id="companyUrl"
                    name="companyUrl"
                    type="text"
                    placeholder="https://coinbase.com"
                    value=""
                  />
                </div>
                <div className="mb-4">
                  <div className="form-field bg">
                    <label>
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="mr-2 text-blue-400"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                        Twitter/X
                      </span>
                    </label>
                    <input
                      data-testid="companyTwitter"
                      id="companyTwitter"
                      name="companyTwitter"
                      type="text"
                      placeholder="handle"
                      value=""
                    />
                  </div>
                </div>
                <p className="px-1 -mt-3 text-sm opacity-60">
                  ↑ Well tag your company in Twitter/X posts.{" "}
                  <Link
                    href=""
                    target="_blank"
                    className="underline external-link"
                  >
                    Example
                  </Link>
                  <br /> Skip if you prefer not to be tagged.
                </p>
              </div>
              <div className="col-span-2 text-center md:col-span-1">
                <label className="relative block mb-1 font-bold leading-5 text-center">
                  <span className="text-lg">Logo</span>
                </label>
                <div className="text-center">
                  <div className="FileDrop">
                    <div className="file-drop-target">
                      <div className="DroppableAreaImageHolder">
                        <div className="relative DroppableArea">
                          <img
                            className="inline w-40 max-w-full transition-all items-center cursor-pointer border border-foreground/10 border-solid hover:shadow-xl dark:shadow-dark-100 w-56 rounded-md"
                            title="[object Object]"
                            src="https://res.cloudinary.com/cryptojobslist/image/fetch/v1520573959/https://semantic-ui.com/images/wireframe/white-image.png"
                          />
                        </div>
                      </div>
                      <input
                        type="file"
                        className="hide"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        name="companyLogo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl">Hiring Manager</h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="col-span-2 md:col-span-1">
                <div className="form-field required bg">
                  <label>Your Work Email. For resumes &amp; invoices</label>
                  <input
                    id="companyEmail"
                    name="companyEmail"
                    type="email"
                    placeholder="your.name@company.com"
                    data-component-name="companyEmail"
                    value=""
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="form-field required bg">
                    <label>First Name</label>
                    <input
                      id="bossFirstName"
                      name="bossFirstName"
                      type="text"
                      placeholder="Vitalik"
                      value=""
                    />
                  </div>
                  <div className="form-field bg">
                    <label>Last Name</label>
                    <input
                      id="bossLastName"
                      name="bossLastName"
                      type="text"
                      placeholder="Buterin"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-center md:col-span-1">
                <label className="relative block mb-1 font-bold leading-5 text-center">
                  <span className="text-lg">Your photo</span>
                </label>
                <div className="text-center">
                  <div className="FileDrop">
                    <div className="file-drop-target">
                      <div className="DroppableAreaImageHolder DroppableAreaImageHolderCircular">
                        <div className="relative DroppableArea">
                          <img
                            className="inline w-40 max-w-full transition-all items-center cursor-pointer border border-foreground/10 border-solid hover:shadow-xl dark:shadow-dark-100 rounded-full rounded-full"
                            title="[object Object]"
                            src="https://res.cloudinary.com/cryptojobslist/image/upload/v1538625638/profile_avatar_placeholder_tfqspf.png"
                          />
                        </div>
                      </div>
                      <input
                        type="file"
                        className="hide"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        name="bossPicture"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm opacity-70 hover:opacity-100">
                    A nice photo of you, direct supervisor or a team member
                    <br /> will help build trust with the talent community.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-10"></div>
            <div></div>
            <h2 className="text-4xl">Set your Budget</h2>
            <div
              id="pricing"
              className="BiddingView_biddingView__2DvqQ border-input shadow border rounded-md relative"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 288 512"
                className="absolute z-10 inline-block text-3xl text-green-500 top-7 left-7"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
              </svg>
              <div className="form-field inline-block mb-0 ml-2 text-3xl text-left">
                <input
                  className="!shadow-none"
                  id="budget"
                  name="budget"
                  type="number"
                  placeholder="250"
                  min="100"
                  max="2569"
                  style={convertStyleStringToObject(
                    "width:160px;padding-left:35px"
                  )}
                  value="200"
                />
              </div>
              <div className="mx-3 my-4 Range_rangeSlider__l2Adi">
                <span className="Range_rangeBar__iNxri"></span>
                <span
                  className="Range_rangeLine__V_wew red"
                  style={convertStyleStringToObject("width:4.050222762251924%")}
                ></span>
                <input
                  type="range"
                  min="100"
                  max="2569"
                  title="200"
                  value="200"
                />
              </div>
              <ul className="pl-2 mb-4 text-lg">
                <li className="my-5">
                  <b className="text green">52nd</b> position on the list,{" "}
                  <span className="opacity-60">
                    unless another employer outbids you.
                  </span>
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="mr-1.5 text-green-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
                  </svg>
                  Live and Promoted for 30 days
                  <span className="relative inline Popup_popup__ptPAE">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="ml-2"
                      style={convertStyleStringToObject("color:#bbb")}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                    </svg>
                    <span
                      className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm text-sm text-center text-white bg-black"
                      style={convertStyleStringToObject(
                        "min-width:16rem;margin-left:-8rem;bottom:110%"
                      )}
                    >
                      After 30 days, the job ad remains on the site for another
                      30 days, but not actively promoted across channels.
                    </span>
                  </span>
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-blue-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>{" "}
                  4x{" "}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    <b>Twitter/X</b>
                  </Link>{" "}
                  shout outs • 71.6k followers
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-gray-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>{" "}
                  4x <b>Newsletter</b> mentions • 122.4k subscribers
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-blue-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>{" "}
                  4x{" "}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    <b>LinkedIn</b>
                  </Link>{" "}
                  posts • 96.9k followers
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="text-blue-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>{" "}
                  4x
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    <b> Discord Bot</b>
                  </Link>{" "}
                  shout outs • 154.5k+ members across 598 servers
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    className="text-blue-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>{" "}
                  4x{" "}
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold hover:underline"
                  >
                    Telegram
                  </Link>{" "}
                  channel posts • 41.4k subscribers
                </li>
                <li>👻 Self service</li>
              </ul>
            </div>
            <div>
              <div className="PaymentView_buyAPackage__0B73K flex flex-col gap-y-2 my-10">
                <h2 className="text-4xl">Buy a Package</h2>
                <div className="">
                  <span
                    className="text-xl"
                    title="Change the amount by moving the slider below"
                  >
                    <div className="inline-flex">
                      <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                        <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                          <input
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
                          Buy 9 job posts for 15% off ($270 off)
                        </div>
                      </label>
                    </div>
                  </span>
                  <div className="my-3 Range_rangeSlider__l2Adi">
                    <span className="Range_rangeBar__iNxri"></span>
                    <span
                      className="Range_rangeLine__V_wew green h-3"
                      style={convertStyleStringToObject(
                        "width:10.447761194029852%"
                      )}
                    ></span>
                    <input type="range" min="2" max="69" title="9" value="9" />
                  </div>
                  <span className="text-sm opacity-60">
                    Every job post in your package will have the features &amp;
                    budget you selected above.
                    <br />
                    Youll be able post jobs from this package any time within
                    12 months from the purchase date.
                    <br />
                    Well send you a separate email with a link to access your
                    credits.
                  </span>
                  <p className="mt-2 text-md">
                    Buying a package for your team or a portfolio company
                    (without posting jobs yourself)?
                    <Link href="" target="_blank">
                      Buy a package here
                    </Link>
                  </p>
                </div>
                <div className="w-full mb-4 !cursor-not-allowed inline-flex">
                  <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer text-gray-400">
                    <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                      <input
                        name="postOnEtherscan"
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
                      <span className="inline-block leading-5 !cursor-not-allowed">
                        Post in{" "}
                        <img
                          src="https://etherscan.io/images/brandassets/etherscan-logo-circle.png"
                          alt="etherscan"
                          style={convertStyleStringToObject(
                            "height:1em;vertical-align:bottom;margin-left:4px;margin-bottom:2px"
                          )}
                          className="dark:invert"
                        />{" "}
                        <Link
                          href=""
                          target="_blank"
                          className="underline"
                          rel="noopener noreferrer"
                        >
                          Etherscan Newsletter
                        </Link>
                        . May edition. 0 slots left. Try again next month!
                        &nbsp;
                        <span className="relative inline Popup_popup__ptPAE">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            style={convertStyleStringToObject("color:#bbb")}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                          </svg>
                          <span
                            className="Popup_popuptext__IIfYE rounded-lg p-2 px-3 bg-black text-white text-sm text-sm text-center text-white bg-black"
                            style={convertStyleStringToObject(
                              "min-width:16rem;margin-left:-8rem;bottom:110%"
                            )}
                          >
                            500k+ audience. ~25% developers, ~25% traders and
                            ~50% normal users. Subject to review. If we dont
                            publish your job ad on Etherscan, well top up the
                            difference to your current job ad budget.
                          </span>
                        </span>
                      </span>
                    </div>
                  </label>
                </div>
                <div className="mt-10">
                  <h2 className="text-4xl">Payment Method</h2>
                  <div className="flex flex-col flex-wrap w-full gap-4 my-2 sm:flex-row">
                    <button className="group w-[240px] h-14 leading-4 flex items-center border-solid border-foreground/15 !border-solid !border-green-500">
                      <div className="mr-3 group-hover:shadow dark:group-hover:shadow-foreground/50 inline-flex">
                        <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                          <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                            <input
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
                        </label>
                      </div>
                      <img
                        alt="credit card logos"
                        loading="lazy"
                        width="133"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="h-8 mr-2"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/https://cryptojobslist.com/images/credit-cards.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:384/rs:fill/ex:1/plain/https://cryptojobslist.com/images/credit-cards.png 2x"
                        src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:384/rs:fill/ex:1/plain/https://cryptojobslist.com/images/credit-cards.png"
                      />
                      <svg
                        className="max-w-[9ch]"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 468 222.5"
                      >
                        <style type="text/css">
                          fill-rule:evenodd;clip-rule:evenodd;fill:#635BFF;
                        </style>
                        <g>
                          <path
                            className="st0"
                            d="M414,113.4c0-25.6-12.4-45.8-36.1-45.8c-23.8,0-38.2,20.2-38.2,45.6c0,30.1,17,45.3,41.4,45.3   c11.9,0,20.9-2.7,27.7-6.5v-20c-6.8,3.4-14.6,5.5-24.5,5.5c-9.7,0-18.3-3.4-19.4-15.2h48.9C413.8,121,414,115.8,414,113.4z   M364.6,103.9c0-11.3,6.9-16,13.2-16c6.1,0,12.6,4.7,12.6,16H364.6z"
                          ></path>
                          <path
                            className="st0"
                            d="M301.1,67.6c-9.8,0-16.1,4.6-19.6,7.8l-1.3-6.2h-22v116.6l25-5.3l0.1-28.3c3.6,2.6,8.9,6.3,17.7,6.3   c17.9,0,34.2-14.4,34.2-46.1C335.1,83.4,318.6,67.6,301.1,67.6z M295.1,136.5c-5.9,0-9.4-2.1-11.8-4.7l-0.1-37.1   c2.6-2.9,6.2-4.9,11.9-4.9c9.1,0,15.4,10.2,15.4,23.3C310.5,126.5,304.3,136.5,295.1,136.5z"
                          ></path>
                          <polygon
                            className="st0"
                            points="223.8,61.7 248.9,56.3 248.9,36 223.8,41.3  "
                          ></polygon>
                          <rect
                            x="223.8"
                            y="69.3"
                            className="st0"
                            width="25.1"
                            height="87.5"
                          ></rect>
                          <path
                            className="st0"
                            d="M196.9,76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7,15.9-6.3,19-5.2v-23C214.5,68.1,202.8,65.9,196.9,76.7z"
                          ></path>
                          <path
                            className="st0"
                            d="M146.9,47.6l-24.4,5.2l-0.1,80.1c0,14.8,11.1,25.7,25.9,25.7c8.2,0,14.2-1.5,17.5-3.3V135   c-3.2,1.3-19,5.9-19-8.9V90.6h19V69.3h-19L146.9,47.6z"
                          ></path>
                          <path
                            className="st0"
                            d="M79.3,94.7c0-3.9,3.2-5.4,8.5-5.4c7.6,0,17.2,2.3,24.8,6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6   C67.5,67.6,54,78.2,54,95.9c0,27.6,38,23.2,38,35.1c0,4.6-4,6.1-9.6,6.1c-8.3,0-18.9-3.4-27.3-8v23.8c9.3,4,18.7,5.7,27.3,5.7   c20.8,0,35.1-10.3,35.1-28.2C117.4,100.6,79.3,105.9,79.3,94.7z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button className="group w-[240px] h-14 leading-4 flex items-center border-solid border-foreground/15">
                      <div className="mr-3 group-hover:shadow dark:group-hover:shadow-foreground/50 inline-flex">
                        <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                          <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                            <input
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
                        </label>
                      </div>
                      <b className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="m-0 mr-2 size-7"
                          color="orange"
                          style={convertStyleStringToObject("color:orange")}
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
                        </svg>
                        BTC ETH USDC DOGE
                      </b>
                    </button>
                    <p className="p-0 m-0 -mt-2 text-sm opacity-60">
                      We never make recurring charges. But you are welcome to
                      boost your job again after its expiry.
                    </p>
                  </div>
                  <p className="form-field w-full mt-2">
                    <button className="text-sm underline opacity-60 hover:opacity-100">
                      Add Invoice details
                    </button>
                  </p>
                  <div className="mt-5 mt-4"></div>
                </div>
                <div className="mb-2 text-sm leading-5 opacity-60 inline-flex">
                  <label className="form-checkbox flex flex-row space-x-2 justify-start items-center cursor-pointer">
                    <div className="flex items-center justify-center bg-white rounded size-6 shrink-0 checkbox">
                      <input
                        name="freeTier"
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer"
                        data-component-name="draftCheckbox"
                      />
                      <svg
                        className="hidden mb-0 text-green-500 pointer-events-none fill-current size-4"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center select-none">
                      Save as draft. Need to talk to finance department to get
                      approval for this payment? No problem!
                      <br />
                      Well save this post as draft and email you a payment
                      link. Once its settled, the job ad will go live.
                    </div>
                  </label>
                </div>
                <div className="my-10 text-center">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand-blue text-white hover:text-white shadow hover:bg-brand-blue/90 h-10 rounded-md px-8 leading-6">
                    Post your job — $1,530.00{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="m-0 ml-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="-mt-4 text-center">
              If the Post button is disabled, please carefully review and fill
              all fields.
            </span>
            <p className="my-4 text-center opacity-60">
              We review all job posts before they get published.
              <br /> We may request additional information about your business
              entity before approving your job post.
              <br />
              By proceeding you agree to the{" "}
              <Link href="" target="_blank">
                Terms of Service
              </Link>
            </p>
          </form>
        </div>
        <div className="relative">
          <button
            title="Toggle sales pitch"
            aria-label="Toggle sales pitch"
            className="hidden h-10 md:flex items-center fixed justify-center py-3 px-1 border-solid border border-foreground/15 hover:border-foreground text-foreground/30 rounded-full bg-background z-10 duration-100 top-12 hover:bg-background hover:text-foreground left-1/2 translate-x-[-50%]"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="!m-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
            </svg>
          </button>
          <div className="h-full max-w-full px-4 pb-4 sales-side text-slate-700 dark:text-white dark:bg-[linear-gradient(to_bottom,_#081a36_90vh,_#0a2347_100%)] bg-gray-50 border-l border-foreground/5 md:pt-[4em] pt-8 m-auto relative group">
            <h3 className="p-0 m-0 font-normal text-[1em] text-center opacity-80">
              Teams hiring with us
            </h3>
            <div className="CompanyLogos_logosAndMediaMentions__ZvGsl CompanyLogos_salesPitch__nGdjp ">
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="Ethereum Foundation"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/512px-Ethereum_logo_2014.svg.png"
                  alt="Ethereum Foundation"
                  title="Ethereum Foundation"
                  width="37"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="ConsenSys Diligence"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 dark:invert"
                  src="https://cdn-images-1.medium.com/max/1200/1*R2_D8iJhuTuUcWjLD-_WZQ.png"
                  alt="ConsenSys Diligence"
                  title="ConsenSys Diligence"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="MetaMask">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:60/height:60/rs:fit/ex:1/plain/gs:/job-listing-logos/87af1c87-1433-4ab0-bb24-38033ff71fa5.png"
                  alt="MetaMask"
                  title="MetaMask"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="Doodles NFT"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 !rounded-full"
                  src="https://storage.googleapis.com/cjl-strapi-media/doodles_nft_logo_e39ddab9f4/doodles_nft_logo_e39ddab9f4.jpg"
                  alt="Doodles NFT"
                  title="Doodles NFT"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Safe">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 dark:invert"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/gs:/job-listing-logos/168fea1e-3638-4323-908c-d58245a6ff90-1699253448634.png"
                  alt="Safe"
                  title="Safe"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="CryptoKitties"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://res.cloudinary.com/cryptojobslist/image/upload/v1525131434/hhsxyxfx5ohezjelqpbw.png"
                  alt="CryptoKitties"
                  title="CryptoKitties"
                  width="58"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Immutable">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:60/height:60/rs:fit/ex:1/plain/gs:/job-listing-logos/8f303230-d5e6-4e36-bc5d-3f91b8c6afd9.png"
                  alt="Immutable"
                  title="Immutable"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Arbitrum">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 scale-125"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:80/height:80/rs:fit/ex:1/plain/gs:/job-listing-logos/7c7db8ad-d1e6-420f-b062-caf522daf500.png"
                  alt="Arbitrum"
                  title="Arbitrum"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="CoinMarketCap"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 dark:invert"
                  src="https://storage.googleapis.com/cjl-strapi-media/Coin_Market_Cap_Logo_de09174bf6/Coin_Market_Cap_Logo_de09174bf6.svg"
                  alt="CoinMarketCap"
                  title="CoinMarketCap"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Dapp Radar">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://storage.googleapis.com/cjl-strapi-media/dapp_radar_logo_ff9ce2e934/dapp_radar_logo_ff9ce2e934.svg"
                  alt="Dapp Radar"
                  title="Dapp Radar"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="DV Labs">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/gs:/job-listing-logos/a9c3ecaa-7bd9-4cdf-bb71-3be81b0c17f4.png"
                  alt="DV Labs"
                  title="DV Labs"
                  width="70"
                  height="80"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Cere">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/gs:/job-listing-logos/aa47b0ef-0185-4803-bf8d-c939b7548f3d.png"
                  alt="Cere"
                  title="Cere"
                  width="70"
                  height="80"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Bitrefill">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:256/rs:fill/ex:1/plain/gs:/job-listing-logos/4da72445-8413-40c2-bc68-ca29d1a25435.png"
                  alt="Bitrefill"
                  title="Bitrefill"
                  height="80"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Circle">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://res.cloudinary.com/cryptojobslist/image/upload/v1518712898/pu0he4yinavmpfklfqjp.png"
                  alt="Circle"
                  title="Circle"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="OKX">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 dark:invert opacity-90"
                  src="https://storage.googleapis.com/cjl-strapi-media/okx_logo_813282a483/okx_logo_813282a483.svg"
                  alt="OKX"
                  title="OKX"
                  width="156"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="Parity Technologies"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 dark:invert"
                  src="https://res.cloudinary.com/cryptojobslist/image/upload/v1537169393/logos/parity-tech-logo.png"
                  alt="Parity Technologies"
                  title="Parity Technologies"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Status.im">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:60/height:60/rs:fit/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png"
                  alt="Status.im"
                  title="Status.im"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="Epicenter Podcast"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 !rounded-full"
                  src="https://res.cloudinary.com/cryptojobslist/image/fetch/w_300,h_300,c_pad,q_auto,fl_lossy,f_auto/dpr_2.0/https://res.cloudinary.com/cryptojobslist/image/upload/v1531840767/zybzafbubxkgztzflgcd.png"
                  alt="Epicenter Podcast"
                  title="Epicenter Podcast"
                  loading="lazy"
                />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
                title="Bank for International Settlements"
              >
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:114/height:60/rs:fit/ex:1/plain/gs:/job-listing-logos/d055e132-0dab-4220-a52f-732b70a19708.JPG"
                  alt="Bank for International Settlements"
                  title="Bank for International Settlements"
                  width="114"
                  height="60"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="Chainlink">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://storage.googleapis.com/cjl-strapi-media/Chainlink_Logo_Blue_e2edf90431/Chainlink_Logo_Blue_e2edf90431.svg"
                  alt="Chainlink"
                  title="Chainlink"
                  width="160"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="BitPay">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 !text-foreground dark:invert"
                  src="/images/logos/bitpay.svg"
                  alt="BitPay"
                  title="BitPay"
                  width="120"
                  height="42"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="f2pool">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://static.f2pool.com/static/images/icon-footer-logo.png?v=3a3703963e10846a43fee5cba7ff06c5"
                  alt="f2pool"
                  title="f2pool"
                  width="162"
                  height="48"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="MakerDAO">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://cdn-images-1.medium.com/max/1600/1*nqtMwugX7TtpcS-5c3lRjw.png"
                  alt="MakerDAO"
                  title="MakerDAO"
                  width="168"
                  height="48"
                  loading="lazy"
                />
              </Link>
              <Link href="" target="_blank" rel="noreferrer" title="NuCypher">
                <img
                  className="CompanyLogos_mediamentionsLogo__epEo4 undefined"
                  src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/resize:fill/dpr:1.2/width:60/height:60/rs:fit/ex:1/plain/gs:/job-listing-logos/50acc358-65dc-499b-bc6b-6859ac2c6709.png"
                  alt="NuCypher"
                  title="NuCypher"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </Link>
            </div>
            <h3 className="p-0 mt-8 font-normal text-center text-[1em] opacity-80">
              Covered by the Crypto &amp; Web3 Media
            </h3>
            <div className="horizontal-fade mt-3 sm:space-x-[5em] space-x-[3em] relative w-full overflow-hidden whitespace-nowrap">
              <div className="items-center justify-around inline-block sm:space-x-[5em] space-x-[3em] whitespace-nowrap carousel-logo">
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinDesk"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinDesk"
                    className="dark:invert h-10"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://surveymonkey-assets.s3.amazonaws.com/survey/119070839/4b34c3c6-a1e4-4fa1-b045-fffed5a1c6f9.png"
                    alt="CoinDesk"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinMarketCap"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinMarketCap"
                    className="dark:invert h-12"
                    src="/images/coinmarketcap-logo.svg"
                    alt="CoinMarketCap"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Bitcoin.com"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="Bitcoin.com"
                    className="dark:invert h-8"
                    src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:800/rs:fill/ex:1/plain/gs:/job-listing-logos/b31c5d1a-423c-4e54-938d-bbca275b0d8c.png"
                    alt="Bitcoin.com"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="New York Times"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="New York Times"
                    className="dark:invert h-8"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
                    alt="New York Times"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CNBC"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CNBC"
                    className="dark:invert h-7 mb-3"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://logos-download.com/wp-content/uploads/2016/08/CNBC_logo_horizontal-700x110.png"
                    alt="CNBC"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="The Wall Street Journal"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="The Wall Street Journal"
                    className="dark:invert mt-2"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://cdn.freebiesupply.com/images/large/2x/wsj-logo-transparent.png"
                    alt="The Wall Street Journal"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinDesk"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinDesk"
                    className="dark:invert h-10"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://surveymonkey-assets.s3.amazonaws.com/survey/119070839/4b34c3c6-a1e4-4fa1-b045-fffed5a1c6f9.png"
                    alt="CoinDesk"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinMarketCap"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinMarketCap"
                    className="dark:invert h-12"
                    src="/images/coinmarketcap-logo.svg"
                    alt="CoinMarketCap"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Bitcoin.com"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="Bitcoin.com"
                    className="dark:invert h-8"
                    src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:800/rs:fill/ex:1/plain/gs:/job-listing-logos/b31c5d1a-423c-4e54-938d-bbca275b0d8c.png"
                    alt="Bitcoin.com"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="New York Times"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="New York Times"
                    className="dark:invert h-8"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
                    alt="New York Times"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CNBC"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CNBC"
                    className="dark:invert h-7 mb-3"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://logos-download.com/wp-content/uploads/2016/08/CNBC_logo_horizontal-700x110.png"
                    alt="CNBC"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="The Wall Street Journal"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="The Wall Street Journal"
                    className="dark:invert mt-2"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://cdn.freebiesupply.com/images/large/2x/wsj-logo-transparent.png"
                    alt="The Wall Street Journal"
                  />
                </Link>
              </div>
              <div className="items-center justify-around inline-block sm:space-x-[5em] space-x-[3em] whitespace-nowrap carousel-logo">
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinDesk"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinDesk"
                    className="dark:invert h-10"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://surveymonkey-assets.s3.amazonaws.com/survey/119070839/4b34c3c6-a1e4-4fa1-b045-fffed5a1c6f9.png"
                    alt="CoinDesk"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinMarketCap"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinMarketCap"
                    className="dark:invert h-12"
                    src="/images/coinmarketcap-logo.svg"
                    alt="CoinMarketCap"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Bitcoin.com"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="Bitcoin.com"
                    className="dark:invert h-8"
                    src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:800/rs:fill/ex:1/plain/gs:/job-listing-logos/b31c5d1a-423c-4e54-938d-bbca275b0d8c.png"
                    alt="Bitcoin.com"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="New York Times"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="New York Times"
                    className="dark:invert h-8"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
                    alt="New York Times"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CNBC"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CNBC"
                    className="dark:invert h-7 mb-3"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://logos-download.com/wp-content/uploads/2016/08/CNBC_logo_horizontal-700x110.png"
                    alt="CNBC"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="The Wall Street Journal"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="The Wall Street Journal"
                    className="dark:invert mt-2"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://cdn.freebiesupply.com/images/large/2x/wsj-logo-transparent.png"
                    alt="The Wall Street Journal"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinDesk"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinDesk"
                    className="dark:invert h-10"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://surveymonkey-assets.s3.amazonaws.com/survey/119070839/4b34c3c6-a1e4-4fa1-b045-fffed5a1c6f9.png"
                    alt="CoinDesk"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CoinMarketCap"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CoinMarketCap"
                    className="dark:invert h-12"
                    src="/images/coinmarketcap-logo.svg"
                    alt="CoinMarketCap"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Bitcoin.com"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="Bitcoin.com"
                    className="dark:invert h-8"
                    src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:800/rs:fill/ex:1/plain/gs:/job-listing-logos/b31c5d1a-423c-4e54-938d-bbca275b0d8c.png"
                    alt="Bitcoin.com"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="New York Times"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="New York Times"
                    className="dark:invert h-8"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
                    alt="New York Times"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="CNBC"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="CNBC"
                    className="dark:invert h-7 mb-3"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://logos-download.com/wp-content/uploads/2016/08/CNBC_logo_horizontal-700x110.png"
                    alt="CNBC"
                  />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="The Wall Street Journal"
                  className="transition-all hover:scale-105"
                >
                  <img
                    loading="lazy"
                    title="The Wall Street Journal"
                    className="dark:invert mt-2"
                    src="https://res.cloudinary.com/cryptojobslist/image/fetch/h_100,q_auto,fl_lossy,f_auto/https://cdn.freebiesupply.com/images/large/2x/wsj-logo-transparent.png"
                    alt="The Wall Street Journal"
                  />
                </Link>
              </div>
            </div>
            <h3 className="p-0 pt-8 m-0 font-normal text-[1em] text-center opacity-80">
              What our customers are saying
            </h3>
            <div
              className="lazyload-wrapper "
              style={convertStyleStringToObject("min-height: 621px;")}
            >
              <div itemType="https://schema.org/Product">
                <meta itemProp="name" content="CryptoJobsList" />
                <div
                  className="Marquee_marquee-container__FDbjq my-6 horizontal-fade"
                  style={convertStyleStringToObject(
                    "--pause-on-hover: paused; --pause-on-click: paused; --width: 100%; --transform: none;"
                  )}
                >
                  <div
                    className="Marquee_marquee__alYF4"
                    style={convertStyleStringToObject(
                      "--play: running; --direction: normal; --duration: 210.32s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;"
                    )}
                  >
                    <div className="Marquee_initial-child-container__kr2if">
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="TheStreet / Roundtable logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full bg-white bg-[#e6e6e3] object-cover"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Will Heckman"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Will Heckman</span>
                              </Link>
                              <p className="m-0">
                                {" "}
                                Chief of Staff &amp; SVP Sales
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  TheStreet / Roundtable
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              <b>CryptoJobsList</b> has been <b>great!</b> About
                              to hire 1 new rep and considering countless others
                              as well.
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2024-10-01" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Multiverse logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Alexis Tonon"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Alexis Tonon</span>
                              </Link>
                              <p className="m-0">
                                Co-Founder and COO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Multiverse
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              The application quantity is{" "}
                              <b>much more than anticipated</b>! We also found
                              several attractive candidates. The salary,
                              location, and skill set range is very broad,
                              making finding the right person for the job pretty
                              easy. It’s not the first time we post an open
                              position here, and that won’t be the last.
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2024-01-23" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Stickies logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Sterling Barnett"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Sterling Barnett</span>
                              </Link>
                              <p className="m-0">
                                Co-Founder and COO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Stickies
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              We hired our <b>Head of Social</b> through{" "}
                              <b>CryptoJobsList</b> and received an impressive
                              talent pool of over 80 passionate individuals
                              interested in working in the crypto space. After
                              interviewing 10 candidates, we found the perfect
                              fit for our team. The platform was easy to use,
                              and the team was incredibly responsive and helpful
                              throughout the hiring process. As a consumer web3
                              startup, <b>we highly recommend</b>{" "}
                              <b>CryptoJobsList</b> for any company looking to
                              hire top talent in the crypto industry.
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2023-03-28" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="ID8R logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Joseph Skewes"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Joseph Skewes</span>
                              </Link>
                              <p className="m-0">
                                Co-Founder, Head of Product &amp; Ops
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  ID8R
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Weve had a first round of interviews with 5+
                              applicants from <b>CryptoJobsList</b> and, like
                              last time,{" "}
                              <b>it has been our best source of leads</b>. We
                              are still in the process of doing a second
                              ritemScopeound of interviews and anticipate
                              closing the role in the next week or two.
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2023-08-18" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="P2P.org logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Elena Vishnyakova"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2 bg-white object-cover"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Elena Vishnyakova</span>
                              </Link>
                              <p className="m-0">
                                HR Director
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  P2P.org
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              At P2P.org, we recognize the importance of
                              connecting talented individuals with exciting
                              opportunities in the dynamic and ever-evolving
                              world of cryptocurrency and blockchain. As a
                              company at the forefront of the blockchain and
                              crypto revolution, we know the importance of
                              connecting with top talent in the industry. Thats
                              why{" "}
                              <b>
                                we consider <b>CryptoJobsList</b> to be an
                                invaluable resource for finding and attracting
                                the best and brightest minds in this field.
                              </b>{" "}
                              It has proven to be a valuable and effective tool
                              in our hiring efforts and we are grateful for the
                              opportunities it has presented us.
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="WalletChat logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Michal Kubis"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Michal Kubis</span>
                              </Link>
                              <p className="m-0">
                                Co-Founder &amp; CEO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  WalletChat
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              <b>
                                We have already made several hires via
                                CryptoJobsList
                              </b>
                              . So far, we are happy with each one of them. CJL
                              offers an easy to use platform and the candidates
                              we receive are generally well versed with and a
                              good fit for the web3 space — which is a challenge
                              when hiring via traditional platforms. On top of
                              this, the team has been super responsive whenever
                              weve tried reaching out and we feel like we are
                              talking to a friend. Excited to keep seeing CJL
                              grow together with us, as we deliver the future of
                              wallet-to-wallet messaging!
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2023-02-11" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Aavegotchi | Pixelcraft Studios logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Jesse Johnson"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Jesse Johnson</span>
                              </Link>
                              <p className="m-0">
                                Founder &amp; COO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Aavegotchi | Pixelcraft Studios
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Weve got a really strong looking shortlist and
                              will be having calls all through this week with
                              those. Im quite pleased with the results!
                            </p>
                          </div>
                          <meta itemProp="datePublished" content="2022-10-27" />
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="UMA Project logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full bg-white"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Melissa Quinn"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Melissa Quinn</span>
                              </Link>
                              <p className="m-0">
                                Chief of Staff
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  UMA Project
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              We recently switched to using{" "}
                              <b>CryptoJobsList</b> as our primary crypto job
                              board provider, and I have been pretty impressed
                              thus far with the talent coming through. The
                              latest feature of having a dashboard is a game
                              changer, so thank you!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Floating Point Group logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Kevin March"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Kevin March</span>
                              </Link>
                              <p className="m-0">
                                Co-founder
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Floating Point Group
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Kevin here, founder of Floating Point Group. I
                              just wanted to say that you guys are killing it.
                              Some of our best applicants are coming from your
                              site. Very happy with what we’re seeing so far!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Epicenter Podcast logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Sébastien Couture"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Sébastien Couture</span>
                              </Link>
                              <p className="m-0">
                                Co-founder &amp; Host
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Epicenter Podcast
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Id recommend using <b>CryptoJobsList</b> if
                              youre looking to hire someone in crypto, they
                              cater to a number of different skill sets
                              including marketing and community sales and
                              business development traders and of course,
                              developers and engineers. We{" "}
                              <Link
                                href=""
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                              >
                                {" "}
                                hired our CMO
                              </Link>{" "}
                              here!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Status logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Jonathan Barker"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Jonathan Barker</span>
                              </Link>
                              <p className="m-0">
                                Head of People Operations
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Status
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              What made CJL stand out from other options? The
                              availability oftalent that was really passionate
                              about working in the crypto space. We{" "}
                              <b>received 150+ applications, interviewed 10</b>{" "}
                              and <b>hired the one from CryptoJobsList.</b>
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="Marquee_marquee__alYF4"
                    style={convertStyleStringToObject(
                      "--play: running; --direction: normal; --duration: 210.32s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;"
                    )}
                  >
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="TheStreet / Roundtable logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full bg-white bg-[#e6e6e3] object-cover"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f6e01eb4-62ea-4866-9476-dab2153c6938.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Will Heckman"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Will_Heckman_ce8cff066b/Will_Heckman_ce8cff066b.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Will Heckman</span>
                            </Link>
                            <p className="m-0">
                              {" "}
                              Chief of Staff &amp; SVP Sales
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                TheStreet / Roundtable
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            <b>CryptoJobsList</b> has been <b>great!</b> About
                            to hire 1 new rep and considering countless others
                            as well.
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2024-10-01" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Multiverse logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/1eb4562a-2f01-4efe-a9e9-141bf4657c35.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Alexis Tonon"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Alexis_Tonon_c3d709aa0b/Alexis_Tonon_c3d709aa0b.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Alexis Tonon</span>
                            </Link>
                            <p className="m-0">
                              Co-Founder and COO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Multiverse
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            The application quantity is{" "}
                            <b>much more than anticipated</b>! We also found
                            several attractive candidates. The salary, location,
                            and skill set range is very broad, making finding
                            the right person for the job pretty easy. It’s not
                            the first time we post an open position here, and
                            that won’t be the last.
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2024-01-23" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Stickies logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/be332df0-afac-4c0c-821d-4170292baa9c.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Sterling Barnett"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/4f754a26-c81b-4941-a738-89e0767d3925.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Sterling Barnett</span>
                            </Link>
                            <p className="m-0">
                              Co-Founder and COO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Stickies
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            We hired our <b>Head of Social</b> through{" "}
                            <b>CryptoJobsList</b> and received an impressive
                            talent pool of over 80 passionate individuals
                            interested in working in the crypto space. After
                            interviewing 10 candidates, we found the perfect fit
                            for our team. The platform was easy to use, and the
                            team was incredibly responsive and helpful
                            throughout the hiring process. As a consumer web3
                            startup, <b>we highly recommend</b>{" "}
                            <b>CryptoJobsList</b> for any company looking to
                            hire top talent in the crypto industry.
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2023-03-28" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="ID8R logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/75fdf843-9c16-42c1-a72b-876fd305fcf7.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Joseph Skewes"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Joseph_Skewes_1469bf5704/Joseph_Skewes_1469bf5704.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Joseph Skewes</span>
                            </Link>
                            <p className="m-0">
                              Co-Founder, Head of Product &amp; Ops
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                ID8R
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Weve had a first round of interviews with 5+
                            applicants from <b>CryptoJobsList</b> and, like last
                            time, <b>it has been our best source of leads</b>.
                            We are still in the process of doing a second round
                            of interviews and anticipate closing the role in the
                            next week or two.
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2023-08-18" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="P2P.org logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/p2p-logo-1676423925397.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Elena Vishnyakova"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2 bg-white object-cover"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/3253bb12-a795-4cb4-9a68-29cf71e1a5ff.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Elena Vishnyakova</span>
                            </Link>
                            <p className="m-0">
                              HR Director
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                P2P.org
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            At P2P.org, we recognize the importance of
                            connecting talented individuals with exciting
                            opportunities in the dynamic and ever-evolving world
                            of cryptocurrency and blockchain. As a company at
                            the forefront of the blockchain and crypto
                            revolution, we know the importance of connecting
                            with top talent in the industry. Thats why{" "}
                            <b>
                              we consider <b>CryptoJobsList</b> to be an
                              invaluable resource for finding and attracting the
                              best and brightest minds in this field.
                            </b>{" "}
                            It has proven to be a valuable and effective tool in
                            our hiring efforts and we are grateful for the
                            opportunities it has presented us.
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="WalletChat logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/walletchat-logo-1679467570021.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Michal Kubis"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75/Michal_Kubis_Co_Founder_and_CEO_at_Wallet_Chat_f01010fc75.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Michal Kubis</span>
                            </Link>
                            <p className="m-0">
                              Co-Founder &amp; CEO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                WalletChat
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            <b>
                              We have already made several hires via
                              CryptoJobsList
                            </b>
                            . So far, we are happy with each one of them. CJL
                            offers an easy to use platform and the candidates we
                            receive are generally well versed with and a good
                            fit for the web3 space — which is a challenge when
                            hiring via traditional platforms. On top of this,
                            the team has been super responsive whenever weve
                            tried reaching out and we feel like we are talking
                            to a friend. Excited to keep seeing CJL grow
                            together with us, as we deliver the future of
                            wallet-to-wallet messaging!
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2023-02-11" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Aavegotchi | Pixelcraft Studios logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/11a984f0-02ee-44a3-946e-ba7985317579.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Jesse Johnson"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/ce1701b9-97ba-4fd0-99cb-79e9c6f49d85.jpeg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Jesse Johnson</span>
                            </Link>
                            <p className="m-0">
                              Founder &amp; COO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Aavegotchi | Pixelcraft Studios
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Weve got a really strong looking shortlist and will
                            be having calls all through this week with those.
                            Im quite pleased with the results!
                          </p>
                        </div>
                        <meta itemProp="datePublished" content="2022-10-27" />
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="UMA Project logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full bg-white"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/44bc5212-55c5-4493-ab65-407f2f9f23c0.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Melissa Quinn"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Melissa_Quinn_416cc03797/Melissa_Quinn_416cc03797.jpeg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Melissa Quinn</span>
                            </Link>
                            <p className="m-0">
                              Chief of Staff
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                UMA Project
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            We recently switched to using <b>CryptoJobsList</b>{" "}
                            as our primary crypto job board provider, and I have
                            been pretty impressed thus far with the talent
                            coming through. The latest feature of having a
                            dashboard is a game changer, so thank you!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Floating Point Group logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/26407858-0c68-48e0-b2b5-6ce5a9ebb231.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Kevin March"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/15d03559-7a3d-4567-93c4-52bc8641cf71.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Kevin March</span>
                            </Link>
                            <p className="m-0">
                              Co-founder
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Floating Point Group
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Kevin here, founder of Floating Point Group. I just
                            wanted to say that you guys are killing it. Some of
                            our best applicants are coming from your site. Very
                            happy with what we’re seeing so far!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Epicenter Podcast logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://pbs.twimg.com/profile_images/1166735841584193536/PhZRIOIl_400x400.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Sébastien Couture"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1531840761/bjmqjgfbuefvb9nuehwp.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Sébastien Couture</span>
                            </Link>
                            <p className="m-0">
                              Co-founder &amp; Host
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Epicenter Podcast
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Id recommend using <b>CryptoJobsList</b> if youre
                            looking to hire someone in crypto, they cater to a
                            number of different skill sets including marketing
                            and community sales and business development traders
                            and of course, developers and engineers. We{" "}
                            <Link
                              href=""
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              {" "}
                              hired our CMO
                            </Link>{" "}
                            here!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Status logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/87c64ab6-b183-4c07-b7de-f327b0cb2202.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Jonathan Barker"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/g_face,c_thumb,w_90,h_90,q_auto,fl_lossy,f_auto/v1593504145/Jonathan_Barker_qnexqn.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Jonathan Barker</span>
                            </Link>
                            <p className="m-0">
                              Head of People Operations
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Status
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            What made CJL stand out from other options? The
                            availability oftalent that was really passionate
                            about working in the crypto space. We{" "}
                            <b>received 150+ applications, interviewed 10</b>{" "}
                            and <b>hired the one from CryptoJobsList.</b>
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="Marquee_marquee-container__FDbjq my-6 horizontal-fade"
                  style={convertStyleStringToObject(
                    "--pause-on-hover: paused; --pause-on-click: paused; --width: 100%; --transform: none;"
                  )}
                >
                  <div
                    className="Marquee_marquee__alYF4"
                    style={convertStyleStringToObject(
                      "--play: running; --direction: reverse; --duration: 155.84s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;"
                    )}
                  >
                    <div className="Marquee_initial-child-container__kr2if">
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="THORChain logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Kai Ansaari"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Kai Ansaari</span>
                              </Link>
                              <p className="m-0">
                                Project Lead
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  THORChain
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              We received over a{" "}
                              <b>dozen high-quality job applications</b> in less
                              than a week to{" "}
                              <Link href="" target="_blank" rel="noreferrer">
                                this post
                              </Link>
                              . It has been very effective and would{" "}
                              <b>highly recommend</b>. Service is excellent, UX
                              simple. Thanks CryptoJobsList!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Meld Gold logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full bg-white"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Astley Milne"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Astley Milne</span>
                              </Link>
                              <p className="m-0">
                                General Manager
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Meld Gold
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Great experience. We have had excellent candidates
                              via Raman and the <b>CryptoJobsList</b> platform.
                              Will definitely use again as we build out other
                              components of the team!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div className="react-tweet-theme tweet-container_root__0rJLq">
                          <article className="tweet-container_article__0ERPK">
                            <div className="tweet-header_header__CXzdi">
                              <Link
                                href=""
                                className="tweet-header_avatar__0Wi9G"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="tweet-header_avatarOverflow__E2gxj">
                                  <img
                                    src="https://pbs.twimg.com/profile_images/1882828603018088448/_s0MEEpK_normal.jpg"
                                    alt="THORChain"
                                    width="48"
                                    height="48"
                                  />
                                </div>
                                <div className="tweet-header_avatarOverflow__E2gxj">
                                  <div className="tweet-header_avatarShadow__CB9Zo"></div>
                                </div>
                              </Link>
                              <div className="tweet-header_author___jWoR">
                                <Link
                                  href=""
                                  className="tweet-header_authorLink__qj5Sm"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="tweet-header_authorLinkText__y6HdU">
                                    <span title="THORChain">THORChain</span>
                                  </div>
                                  <div className="tweet-header_authorVerified__OFYo2 verified-badge_verifiedBlue__s3_Vu">
                                    <svg
                                      viewBox="0 0 24 24"
                                      aria-label="Verified account"
                                      role="img"
                                      className="icons_verified__1eJnA"
                                    >
                                      <g>
                                        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
                                      </g>
                                    </svg>
                                  </div>
                                </Link>
                                <div className="tweet-header_authorMeta__gIC3U">
                                  <Link
                                    href=""
                                    className="tweet-header_username__UebZb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span title="@THORChain">@THORChain</span>
                                  </Link>
                                  <div className="tweet-header_authorFollow__w_j4h">
                                    <span className="tweet-header_separator__d4pqe">
                                      ·
                                    </span>
                                    <Link
                                      href=""
                                      className="tweet-header_follow__Fi7bf"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Follow
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <Link
                                href=""
                                className="tweet-header_brand__0FLQl"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on Twitter"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="tweet-header_twitterIcon__m0Rzu"
                                >
                                  <g>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                  </g>
                                </svg>
                              </Link>
                            </div>
                            <p
                              className="tweet-body_root__ChzUj"
                              lang="en"
                              dir="auto"
                            >
                              <span>
                                The team have received over a dozen high-quality
                                job applications in less than a week to this
                                post. It has been very effective and would
                                highly recommend. Service is excellent, UX
                                simple. Thanks{" "}
                              </span>
                              <Link
                                href=""
                                className="tweet-link_root__4EzRS"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                              >
                                @CryptoJobsList
                              </Link>
                              <span>h/t </span>
                              <Link
                                href=""
                                className="tweet-link_root__4EzRS"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                              >
                                @mehowbrains
                              </Link>
                              <span></span>
                              <Link
                                href=""
                                className="tweet-link_root__4EzRS"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                              >
                                cryptojobslist.com/jobs/senior-so…
                              </Link>
                            </p>
                            <div className="tweet-info_info__ll_kH">
                              <Link
                                href=""
                                className="tweet-info-created-at_root__KaxZi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="6:29 AM · Jan 7, 2020"
                              >
                                <time dateTime="2020-01-06T23:29:09.000Z">
                                  6:29 AM · Jan 7, 2020
                                </time>
                              </Link>
                              <Link
                                href=""
                                className="tweet-info_infoLink__xdgYO"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter for Websites, Ads Information and Privacy"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="tweet-info_infoIcon__S8lzA"
                                >
                                  <g>
                                    <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
                                  </g>
                                </svg>
                              </Link>
                            </div>
                            <div className="tweet-actions_actions__UDw7H">
                              <Link
                                href=""
                                className="tweet-actions_like__H1xYv"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Like. This Tweet has 53 likes"
                              >
                                <div className="tweet-actions_likeIconWrapper__JQkhp">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="tweet-actions_likeIcon__fhDng"
                                    aria-hidden="true"
                                  >
                                    <g>
                                      <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                    </g>
                                  </svg>
                                </div>
                                <span className="tweet-actions_likeCount__MyxBd">
                                  53
                                </span>
                              </Link>
                              <Link
                                href=""
                                className="tweet-actions_reply__S4rFc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Reply to this Tweet on Twitter"
                              >
                                <div className="tweet-actions_replyIconWrapper__NVdGa">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="tweet-actions_replyIcon__MI2tG"
                                    aria-hidden="true"
                                  >
                                    <g>
                                      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path>
                                    </g>
                                  </svg>
                                </div>
                                <span className="tweet-actions_replyText__doQct">
                                  Reply
                                </span>
                              </Link>
                              <button
                                type="button"
                                className="tweet-actions_copy__Tbdg_"
                                aria-label="Copy link"
                              >
                                <div className="tweet-actions_copyIconWrapper__toM2y">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="tweet-actions_copyIcon__SEaWw"
                                    aria-hidden="true"
                                  >
                                    <g>
                                      <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                                    </g>
                                  </svg>
                                </div>
                                <span className="tweet-actions_copyText__fEqBx">
                                  Copy link
                                </span>
                              </button>
                            </div>
                            <div className="tweet-replies_replies__PUxl8">
                              <Link
                                href=""
                                className="tweet-replies_link__roxYQ"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="tweet-replies_text__o0Naf">
                                  Read 4 replies
                                </span>
                              </Link>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Kleros logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png 1x, https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Maria T. Vidal"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Maria T. Vidal</span>
                              </Link>
                              <p className="m-0">
                                Communications Lead
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Kleros
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              <span className="text-normal">
                                <b>CryptoJobsList</b> drives{" "}
                                <b>more qualified leads</b> than AngelList!
                              </span>
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Fleek logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Brett Shear"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Brett Shear</span>
                              </Link>
                              <p className="m-0">
                                Cofounder &amp; COO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  Fleek
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Weve gotten great leads for <b>developers</b>{" "}
                              from CryptoJobsList. Im definitely a continuous
                              user going forward!
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="DataStreamX logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif 1x, https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Mike Davie"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg 2x"
                                src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Mike Davie</span>
                              </Link>
                              <p className="m-0">
                                Founder &amp; CEO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  DataStreamX
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              The quality of the candidates are by far more
                              relevant and experienced than on other boards.
                              They are in the crypto space and have the past
                              experience to hit the ground running.
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="AID Technology logo"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                              <img
                                alt="Niall Dennehy"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full -ml-2"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Niall Dennehy</span>
                              </Link>
                              <p className="m-0">
                                Co-founder &amp; COO
                                <Link
                                  href=""
                                  target="_blank"
                                  className="block underline-none hover:underline"
                                  rel="noreferrer"
                                >
                                  AID Technology
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              Each time their services have been nothing short
                              of exceptional. The platform has{" "}
                              <b>
                                consistently provided us with a large pool of
                                qualified candidates
                              </b>{" "}
                              for various roles within our company. The
                              user-friendly interface and the efficient
                              recruitment process has made it easy for us to
                              fill positions quickly and effectively. We are
                              grateful for the help and support provided by CJL
                              and highly recommend their services to anyone
                              looking to fill roles in the crypto industry.
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="Marquee_child__klsjD"
                        style={convertStyleStringToObject("--transform: none;")}
                      >
                        <div
                          className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                          itemProp="review"
                          itemType="https://schema.org/Review"
                        >
                          <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                            <div className="flex items-center gap-0 mr-4">
                              <img
                                alt="Jessica Zartler"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="object-contain w-16 h-16 rounded-full"
                                srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg 2x"
                                src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg"
                                style={convertStyleStringToObject(
                                  "color: transparent;"
                                )}
                              />
                            </div>
                            <div className="text-foreground">
                              <Link
                                href=""
                                itemProp="author"
                                itemType="https://schema.org/Person"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="m-0 text-xl font-bold cursor-pointer hover:underline"
                              >
                                <span itemProp="name">Jessica Zartler</span>
                              </Link>
                              <p className="m-0">
                                Marketing &amp; Communications Director
                                <span className="block">Adel</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                            style={convertStyleStringToObject(
                              "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                            )}
                          >
                            <p className="relative pb-8" itemProp="reviewBody">
                              We posted on <b>CryptoJobsList</b> looking for{" "}
                              <b>marketing</b> help with community engagement,
                              digital marketing and social media and found{" "}
                              <b>two highly qualified candidates within days</b>
                              ! We interviewed and hired them within three
                              weeks.
                            </p>
                          </div>
                          <div
                            itemProp="reviewRating"
                            itemType="http://schema.org/Rating"
                          >
                            <meta itemProp="ratingValue" content="5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="Marquee_marquee__alYF4"
                    style={convertStyleStringToObject(
                      "--play: running; --direction: reverse; --duration: 155.84s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;"
                    )}
                  >
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="THORChain logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/f05adcd3-e713-4057-8e38-8406cd865289.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Kai Ansaari"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/2f2d0122-83e0-4296-811f-689b5986e05f.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Kai Ansaari</span>
                            </Link>
                            <p className="m-0">
                              Project Lead
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                THORChain
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            We received over a{" "}
                            <b>dozen high-quality job applications</b> in less
                            than a week to{" "}
                            <Link href="" target="_blank" rel="noreferrer">
                              this post
                            </Link>
                            . It has been very effective and would{" "}
                            <b>highly recommend</b>. Service is excellent, UX
                            simple. Thanks CryptoJobsList!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Meld Gold logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full bg-white"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/dfff8933-cdf3-4076-a0cb-4b011d28f003.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Astley Milne"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Astley_Milne_565628b0de/Astley_Milne_565628b0de.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Astley Milne</span>
                            </Link>
                            <p className="m-0">
                              General Manager
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Meld Gold
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Great experience. We have had excellent candidates
                            via Raman and the <b>CryptoJobsList</b> platform.
                            Will definitely use again as we build out other
                            components of the team!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div className="react-tweet-theme tweet-container_root__0rJLq">
                        <article className="tweet-container_article__0ERPK">
                          <div className="tweet-header_header__CXzdi">
                            <Link
                              href=""
                              className="tweet-header_avatar__0Wi9G"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="tweet-header_avatarOverflow__E2gxj">
                                <img
                                  src="https://pbs.twimg.com/profile_images/1882828603018088448/_s0MEEpK_normal.jpg"
                                  alt="THORChain"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="tweet-header_avatarOverflow__E2gxj">
                                <div className="tweet-header_avatarShadow__CB9Zo"></div>
                              </div>
                            </Link>
                            <div className="tweet-header_author___jWoR">
                              <Link
                                href=""
                                className="tweet-header_authorLink__qj5Sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="tweet-header_authorLinkText__y6HdU">
                                  <span title="THORChain">THORChain</span>
                                </div>
                                <div className="tweet-header_authorVerified__OFYo2 verified-badge_verifiedBlue__s3_Vu">
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-label="Verified account"
                                    role="img"
                                    className="icons_verified__1eJnA"
                                  >
                                    <g>
                                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
                                    </g>
                                  </svg>
                                </div>
                              </Link>
                              <div className="tweet-header_authorMeta__gIC3U">
                                <Link
                                  href=""
                                  className="tweet-header_username__UebZb"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span title="@THORChain">@THORChain</span>
                                </Link>
                                <div className="tweet-header_authorFollow__w_j4h">
                                  <span className="tweet-header_separator__d4pqe">
                                    ·
                                  </span>
                                  <Link
                                    href=""
                                    className="tweet-header_follow__Fi7bf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Follow
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link
                              href=""
                              className="tweet-header_brand__0FLQl"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View on Twitter"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="tweet-header_twitterIcon__m0Rzu"
                              >
                                <g>
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </g>
                              </svg>
                            </Link>
                          </div>
                          <p
                            className="tweet-body_root__ChzUj"
                            lang="en"
                            dir="auto"
                          >
                            <span>
                              The team have received over a dozen high-quality
                              job applications in less than a week to this post.
                              It has been very effective and would highly
                              recommend. Service is excellent, UX simple. Thanks{" "}
                            </span>
                            <Link
                              href=""
                              className="tweet-link_root__4EzRS"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              @CryptoJobsList
                            </Link>
                            <span>h/t </span>
                            <Link
                              href=""
                              className="tweet-link_root__4EzRS"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              @mehowbrains
                            </Link>
                            <span></span>
                            <Link
                              href=""
                              className="tweet-link_root__4EzRS"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              cryptojobslist.com/jobs/senior-so…
                            </Link>
                          </p>
                          <div className="tweet-info_info__ll_kH">
                            <Link
                              href=""
                              className="tweet-info-created-at_root__KaxZi"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="6:29 AM · Jan 7, 2020"
                            >
                              <time dateTime="2020-01-06T23:29:09.000Z">
                                6:29 AM · Jan 7, 2020
                              </time>
                            </Link>
                            <Link
                              href=""
                              className="tweet-info_infoLink__xdgYO"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Twitter for Websites, Ads Information and Privacy"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="tweet-info_infoIcon__S8lzA"
                              >
                                <g>
                                  <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
                                </g>
                              </svg>
                            </Link>
                          </div>
                          <div className="tweet-actions_actions__UDw7H">
                            <Link
                              href=""
                              className="tweet-actions_like__H1xYv"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Like. This Tweet has 53 likes"
                            >
                              <div className="tweet-actions_likeIconWrapper__JQkhp">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="tweet-actions_likeIcon__fhDng"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                  </g>
                                </svg>
                              </div>
                              <span className="tweet-actions_likeCount__MyxBd">
                                53
                              </span>
                            </Link>
                            <Link
                              href=""
                              className="tweet-actions_reply__S4rFc"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Reply to this Tweet on Twitter"
                            >
                              <div className="tweet-actions_replyIconWrapper__NVdGa">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="tweet-actions_replyIcon__MI2tG"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path>
                                  </g>
                                </svg>
                              </div>
                              <span className="tweet-actions_replyText__doQct">
                                Reply
                              </span>
                            </Link>
                            <button
                              type="button"
                              className="tweet-actions_copy__Tbdg_"
                              aria-label="Copy link"
                            >
                              <div className="tweet-actions_copyIconWrapper__toM2y">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="tweet-actions_copyIcon__SEaWw"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                                  </g>
                                </svg>
                              </div>
                              <span className="tweet-actions_copyText__fEqBx">
                                Copy link
                              </span>
                            </button>
                          </div>
                          <div className="tweet-replies_replies__PUxl8">
                            <Link
                              href=""
                              className="tweet-replies_link__roxYQ"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="tweet-replies_text__o0Naf">
                                Read 4 replies
                              </span>
                            </Link>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Kleros logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png 1x, https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/v1515861348/zx1ttfemm0jwqmma0vvf.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Maria T. Vidal"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1515861481/r3agu0zrctzu5mnqrhvp.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Maria T. Vidal</span>
                            </Link>
                            <p className="m-0">
                              Communications Lead
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Kleros
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            <span className="text-normal">
                              <b>CryptoJobsList</b> drives{" "}
                              <b>more qualified leads</b> than AngelList!
                            </span>
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Fleek logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/9c6f5b94-e435-4d54-bb0b-0b097d623d67.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Brett Shear"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/cjl-strapi-media/Brett_Shear_aa13f9ce75/Brett_Shear_aa13f9ce75.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Brett Shear</span>
                            </Link>
                            <p className="m-0">
                              Cofounder &amp; COO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                Fleek
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Weve gotten great leads for <b>developers</b> from
                            CryptoJobsList. Im definitely a continuous user
                            going forward!
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="DataStreamX logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif 1x, https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/v1519053930/n5tbksdzqevxlved2jjw.gif"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Mike Davie"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg 1x, https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg 2x"
                              src="https://res.cloudinary.com/cryptojobslist/image/upload/c_thumb,g_face,h_90,w_90/v1519053954/w23nhpncdqfcpaxda7il.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Mike Davie</span>
                            </Link>
                            <p className="m-0">
                              Founder &amp; CEO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                DataStreamX
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            The quality of the candidates are by far more
                            relevant and experienced than on other boards. They
                            are in the crypto space and have the past experience
                            to hit the ground running.
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="AID Technology logo"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/85bf540a-7650-43c0-8180-d8c85cd718fd.png"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                            <img
                              alt="Niall Dennehy"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full -ml-2"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/https://uploads-ssl.webflow.com/62c4078234af43b965523c99/62e938e41b5e41834d2f3055_Niall.webp"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Niall Dennehy</span>
                            </Link>
                            <p className="m-0">
                              Co-founder &amp; COO
                              <Link
                                href=""
                                target="_blank"
                                className="block underline-none hover:underline"
                                rel="noreferrer"
                              >
                                AID Technology
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            Each time their services have been nothing short of
                            exceptional. The platform has{" "}
                            <b>
                              consistently provided us with a large pool of
                              qualified candidates
                            </b>{" "}
                            for various roles within our company. The
                            user-friendly interface and the efficient
                            recruitment process has made it easy for us to fill
                            positions quickly and effectively. We are grateful
                            for the help and support provided by CJL and highly
                            recommend their services to anyone looking to fill
                            roles in the crypto industry.
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="Marquee_child__klsjD"
                      style={convertStyleStringToObject("--transform: none;")}
                    >
                      <div
                        className="mx-4 w-[min(100dvw,450px)] flex flex-col gap-4 p-8 overflow-hidden list-none border border-solid rounded-xl border-black/20 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 dark:border-dark-100 group @container h-[300px]"
                        itemProp="review"
                        itemType="https://schema.org/Review"
                      >
                        <div className="flex flex-col items-start @[250px]:items-center gap-2 @[250px]:flex-row">
                          <div className="flex items-center gap-0 mr-4">
                            <img
                              alt="Jessica Zartler"
                              loading="lazy"
                              width="64"
                              height="64"
                              decoding="async"
                              data-nimg="1"
                              className="object-contain w-16 h-16 rounded-full"
                              srcSet="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:64/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg 1x, https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg 2x"
                              src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/66b8ca02-c5e3-4b9f-888f-d8153d20ba76.jpg"
                              style={convertStyleStringToObject(
                                "color: transparent;"
                              )}
                            />
                          </div>
                          <div className="text-foreground">
                            <Link
                              href=""
                              itemProp="author"
                              itemType="https://schema.org/Person"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="m-0 text-xl font-bold cursor-pointer hover:underline"
                            >
                              <span itemProp="name">Jessica Zartler</span>
                            </Link>
                            <p className="m-0">
                              Marketing &amp; Communications Director
                              <span className="block">Adel</span>
                            </p>
                          </div>
                        </div>
                        <div
                          className="overflow-scroll line-clamp-8 opacity-90 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden relative"
                          style={convertStyleStringToObject(
                            "mask-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);"
                          )}
                        >
                          <p className="relative pb-8" itemProp="reviewBody">
                            We posted on <b>CryptoJobsList</b> looking for{" "}
                            <b>marketing</b> help with community engagement,
                            digital marketing and social media and found{" "}
                            <b>two highly qualified candidates within days</b>!
                            We interviewed and hired them within three weeks.
                          </p>
                        </div>
                        <div
                          itemProp="reviewRating"
                          itemType="http://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content="5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  itemProp="aggregateRating"
                  itemType="https://schema.org/AggregateRating"
                >
                  <meta itemProp="reviewCount" content="105" />
                  <meta itemProp="ratingValue" content="4.9" />
                </div>
              </div>
            </div>
            <h3 className="p-0 pt-8 m-0 font-normal text-center text-[1em] opacity-80">
              Everything you need to hire well
            </h3>
            <div className="grid grid-cols-2 gap-3 my-4 text-lg md:grid-cols-3">
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="mr-2 text-green-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                  </svg>
                  Screening Questions
                </h3>
                <p>
                  Ask candidates up to 3 screening questions to help you quickly
                  identify the best fit for your job.
                </p>
              </div>
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1"
                    viewBox="0 0 48 48"
                    enable-background="new 0 0 48 48"
                    className="mr-1.5"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#4CAF50"
                      d="M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"
                    ></path>
                    <polygon
                      fill="#388E3C"
                      points="44,35 34,29 34,19 44,13"
                    ></polygon>
                  </svg>
                  Video Applications
                </h3>
                <p>
                  Its a great way to screen for communication skills and
                  personality fit.
                </p>
              </div>
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    className="mr-2 text-green-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                  </svg>
                  Mini ATS
                </h3>
                <p>
                  Manage your jobs, view applications, and track your post
                  performance all in one place.
                </p>
              </div>
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="mr-2 text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                  </svg>
                  Spam + 🇰🇵 DPRK Filters
                </h3>
                <p>
                  We filter out spam, bad actors and North Korean hackers. So
                  you can focus on the best candidates.
                </p>
              </div>
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                  </svg>{" "}
                  Chat + Email
                </h3>
                <p>
                  You can chat with candidates directly on the platform or
                  continue over email.
                </p>
              </div>
              <div className="p-3 px-4 border border-solid border-foreground/15 rounded-xl">
                <h3 className="mb-2">👋 Human Support</h3>
                <p>
                  Have any questions? Just reach out! We respond within 12 hours
                  or less.
                </p>
              </div>
            </div>
            <h3 className="p-0 m-0 mt-4 font-normal text-center text-[1em] opacity-80">
              Numbers go brrr!
            </h3>
            <div className="grid grid-cols-2 gap-3 my-4 md:grid-cols-3">
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Newsletter Subscribers</div>
                <b className="text-3xl">122.4k</b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Twitter/X Audience</div>
                <b className="text-3xl">71.6k</b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Telegram Audience</div>
                <b className="text-3xl">
                  <b className="text-3xl">41.4k</b>
                </b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">LinkedIn audience</div>
                <b className="text-3xl">96.9k</b>
              </div>
              <div
                className="p-3 border border-solid border-foreground/15 rounded-xl"
                title="Direct applications. Excluding redirects to ATS platforms."
              >
                <div className="stat-label">Average Applications per Job</div>
                <b className="text-3xl">~163</b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Jobs filled last 90 days</div>
                <b className="text-3xl">19+</b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Jobs Live</div>
                <b className="text-3xl">16.7k</b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Web3 Startups</div>
                <b className="text-3xl">
                  <b className="text-3xl">3k</b>
                </b>
              </div>
              <div className="p-3 border border-solid border-foreground/15 rounded-xl">
                <div className="stat-label">Dynamic Pricing per job ad</div>
                <b className="text-3xl">$100-$1k+</b>
              </div>
            </div>
            <h3 className="p-0 m-0 mt-10 font-normal text-center text-[1em] opacity-80">
              Latest Success Stories
            </h3>
            <div
              className="lazyload-wrapper "
              style={convertStyleStringToObject("min-height: 208.43px;")}
            >
              <div className="lazyload-placeholder"></div>
            </div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/72kInyiyiCs"
              title="How to Post a job on Crypto Jobs List"
              className="w-full max-w-2xl mx-auto mt-10 rounded-xl aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h3 className="p-0 pt-8 m-0 -mb-4 font-normal text-center text-[1em]">
              Frequently Asked Questions
            </h3>
            <article
              itemType="https://schema.org/FAQPage"
              className="jsx-887c11ada4159cda mx-auto my-10 leading-9 FAQ"
            >
              <h2 className="jsx-887c11ada4159cda hide">
                Frequently Asked Questions
              </h2>
              <div className="jsx-887c11ada4159cda overflow-hidden border divide-y border-foreground/10 rounded-xl divide-foreground/10">
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      How long jobs are live on the site?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>
                        Job ads are live &amp; promoted across all our channels
                        for 30 days.
                      </p>
                    </div>
                  </div>
                </details>
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      Who is behind this website?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>
                        👋 Hi! I‘m Raman, the founder of Crypto Jobs List. I‘ve
                        started this site to help blockchain and crypto
                        community grow faster. Since 2017 the site been helping
                        50k+ people find a job in Crypto &amp; Web3 space.
                      </p>
                      <p>
                        Need help posting your job? Here‘s{" "}
                        <Link href="" target="_blank" rel="noopener nofollow">
                          my Twitter
                        </Link>
                        . I‘ll help you personally and can also help you if
                        you‘d like to buy multiple job posts packages.
                      </p>
                      <p>— Raman, Founder of Crypto Jobs List</p>
                    </div>
                  </div>
                </details>
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      Pricing. How much does it cost?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>
                        On Crypto Jobs List you can set your own advertising
                        budget. The higher your budget, the higher your job post
                        will be on the list and the more actively it will be
                        promoted across all our distribution channels.{" "}
                      </p>
                      <p>
                        We recommend setting the budget above $200 to be more
                        competitive with the other employers.
                      </p>
                      <p>
                        We also offer discounts for bulk orders of 2 jobs and
                        above.
                      </p>
                      <p>Just use the budget calculator on the left.</p>
                    </div>
                  </div>
                </details>
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      What payment methods do you support?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>We support:</p>
                      <ul>
                        <li>Credit Card payments. Secured by Stripe.</li>
                        <li>
                          Crypto payments: BTC, ETH, USDC, Doge. Secured by
                          NowPayments.
                        </li>
                        <li>
                          Bank transfers for orders above USD $10k. Please
                          contact{" "}
                          <Link href="" target="_blank" rel="noopener nofollow">
                            sales
                          </Link>{" "}
                          for details.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      Do you support Equal Employment Opportunity (EEO)?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>
                        Crypto Jobs List is EEO compliant by default. We do not
                        track gender, age, nationality, race, religion nor other
                        sensitive applicant information.
                      </p>
                    </div>
                  </div>
                </details>
                <details
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="jsx-887c11ada4159cda"
                >
                  <summary className="jsx-887c11ada4159cda p-1 px-3 cursor-pointer hover:opacity-80 hover:bg-slate-100 dark:hover:bg-dark-200">
                    <h2
                      itemProp="name"
                      className="jsx-887c11ada4159cda inline text-lg"
                    >
                      Can I post job ads on behalf of a company?
                    </h2>
                  </summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
                  >
                    <div itemProp="text" className="jsx-887c11ada4159cda">
                      <p>
                        If youd like to post on behalf of a company or a
                        project that you are not a full time member of, please
                        ensure the project is able to verify your affiliation
                        with them via official channels. If you are unable to
                        verify your affiliation with the project, we recommend
                        you to not proceed.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
