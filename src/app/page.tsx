// import Header from "../components/header";
// import Footer from "../components/footer";
import NavTags from "../components/navtags";
import Contents from "../components/contents";
import VentureCapitals from "../components/venturecapitals";
import CryptoHiring from "../components/cryptohiring";
import "./197415462413322b.css";
import "./4f7d0dc1e1a790aa.css";
import "./f4a7dc4ad1d59d5b.css";
import SliderCofounder from "../components/slidercofounders";

export default function Home() {
  return (
    <div id="__next">
      {/* <div className="fixed animate-none md:fadeIn !z-[1000] w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div
          id="modelViewContainer"
          className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg sm:max-w-md md:max-w-xl dark:bg-dark-300 animate-none md:slideUp"
        >
          <div className="relative px-2 py-2 text-left md:px-6 md:py-4">
            <div className="sticky z-50 ml-auto mr-0 cursor-pointer w-fit md:absolute top-4 right-4 opacity-70 hover:opacity-100">
              <svg
                className="text-black fill-current dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
            <div>
              <form>
                <div
                  className="flex items-center justify-between mt-2 mb-4"
                  style={{ borderBottom: "2px solid rgba(34, 36, 38, 0.15);" }}
                >
                  <div className="-mb-0.5 items-center px-4 py-2 text-lg font-bold border-t-0 border-l-0 border-r-0 border-b-2 border-solid">
                    Sign in
                  </div>
                  <div className="flex items-center">
                    <a
                      className="flex items-center text-black btn btn-link md:rounded"
                      href="/talent-signup"
                    >
                      Talent{" "}
                      <span className="hidden ml-1 md:block"> Signup</span>
                    </a>
                    <a
                      className="flex items-center text-black btn btn-link md:rounded"
                      href="/hire"
                    >
                      Company{" "}
                      <span className="hidden ml-1 md:block"> Signup</span>
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="relative w-full px-2 py-2 mb-3 text-center border border-solid rounded btn "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enable-background="new 0 0 48 48"
                    className="mr-2"
                    height="26"
                    width="26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>{" "}
                  Continue with Google
                </button>
                <div className="block my-1 text-center opacity-60">OR</div>
                <div className="form-field required">
                  <label>Your Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="your@email.com"
                    name="email"
                    value=""
                  />
                </div>
                <div className="form-field required">
                  <label>Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="p@$$w0rd"
                    name="password"
                  />
                </div>
                <div className="inline-flex items-center">
                  <button className="btn btn-blue" type="submit">
                    Sign in{" "}
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
                <button
                  className="float-right btn btn-basic dark:text-gray-500 dark:border-gray-600"
                  type="button"
                >
                  Forgot password?
                </button>
                <div className="block w-full mt-3 text-sm text-center">
                  If you used .Net Jobs List before, you probably already have
                  an account.
                  <br />
                  Click "Forgot password" with the email you used before.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <main>
        <VentureCapitals></VentureCapitals>
        <NavTags></NavTags>
        <Contents></Contents>
        <CryptoHiring></CryptoHiring>
        <SliderCofounder></SliderCofounder>
      </main>
    </div>
  );
}
