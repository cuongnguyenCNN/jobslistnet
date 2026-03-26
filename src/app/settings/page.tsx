//import Link from "next/link";

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
export default function SettingProfile() {
  return (
    <div className="flex-1 p-2">
      <div className="flex flex-col gap-4">
        <h1>Personal Settings</h1>
        <div>
          <form className="grid grid-cols-12 gap-6">
            <div className="flex flex-col col-span-12 gap-6 md:col-span-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First Name
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Satoshi"
                    name="firstName"
                    id=":r0:-form-item"
                    aria-describedby=":r0:-form-item-description"
                    aria-invalid="false"
                    value="Dell"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last Name
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nakamoto"
                    name="lastName"
                    id=":r1:-form-item"
                    aria-describedby=":r1:-form-item-description"
                    aria-invalid="false"
                    value="Lion"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <input
                  type="email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="satoshin@gmx.com"
                  name="email"
                  id=":r2:-form-item"
                  aria-describedby=":r2:-form-item-description"
                  aria-invalid="false"
                  value="cuongnguyen71195@gmail.com"
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Discord Username
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="satoshi_nakamoto"
                  name="discordUsername"
                  id=":r3:-form-item"
                  aria-describedby=":r3:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
            </div>
            <div className="flex flex-col col-span-12 gap-6 items-center md:col-span-6">
              <div className="space-y-2">
                <label className="relative block mb-1 font-bold leading-5 text-center">
                  Photo
                </label>
                <div className="text-center">
                  <div className="FileDrop">
                    <div className="file-drop-target">
                      <div className="DroppableAreaImageHolder DroppableAreaImageHolderCircular">
                        <div className="relative DroppableArea">
                          <img
                            className="inline w-40 max-w-full transition-all items-center cursor-pointer border border-foreground/10 border-solid hover:shadow-xl dark:shadow-dark-100 rounded-full"
                            alt="Uploaded image preview"
                            title="Photo"
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
                <p
                  id=":r4:-form-item-description"
                  className="text-[0.8rem] text-muted-foreground text-center"
                >
                  Upload a professional photo of yourself
                  <br /> All other images will be removed and you risk getting
                  banned.{" "}
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                Save
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div id="telegram">
          <h3 className="block">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              className="mt-1 mr-1 text-blue-500 size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
            </svg>
            Telegram Integration
          </h3>
          <p className="text-muted-foreground">
            Connect your Telegram account for personalized notifications,
            exclusive job offers and more.
          </p>
          <div className="md:w-2/3">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex items-center justify-center gap-2 text-white !bg-blue-500 hover:!bg-blue-600"
              type="button"
            >
              Connect{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="mt-0.5 size-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
              </svg>
              Telegram
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="block">Web3 Wallet</h3>
          <p className="text-muted-foreground">
            Connect your wallet for wallet login and upcoming Web3 features.
          </p>
          <div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
              Connect Wallet
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3>Notification Settings</h3>
          <div className="space-y-3 md:w-2/3">
            <div className="flex flex-row items-center space-x-3 space-y-0">
              <button
                type="button"
                role="checkbox"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                id="notificationEnabled"
              ></button>
              <label className="text-sm font-normal !my-0">
                Enable Web Push Notifications
              </label>
            </div>
            <p className="text-muted-foreground">
              We send real-time notifications for new job alerts and messages.
              To disable this feature, kindly block the notification permission
              access inside your browser.
            </p>
          </div>
        </div>
        <hr />
        <div>
          <h3>Jobs Newsletter Settings</h3>
          <p className="text-muted-foreground">
            Manage your jobs newsletter preferences.
          </p>
          <div className="flex gap-2 md:w-2/3">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder='E.g. react, solidity, designer. Type "all" for general newsletter'
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="block">Feedback &amp; Support</h3>
          <p className="text-muted-foreground">
            We are always happy to hear suggestions and questions from you!
          </p>
          <a
            href="mailto:support@cryptojobslist.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            Contact us
          </a>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between p-3 rounded-md ring-red-500 ring-1">
        <div>
          <h4 className="!m-0 text-red-500">Delete this account</h4>
          <p className="!m-0">
            Once your request is approved, all your data will be permanently
            deleted.
            <br /> You won't receive messages from recruiters and replies to
            your existing applications.
          </p>
        </div>
        <div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r5:"
            data-state="closed"
          >
            Delete Account
          </button>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
}
