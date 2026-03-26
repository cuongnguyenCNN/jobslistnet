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
export default function TalentProfile() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col py-10 space-y-8 container-wide lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex flex-row lg:flex-col gap-x-1 lg:gap-x-0 space-y-0 lg:space-y-1 flex-wrap sticky top-[56px]">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 leading-6 !justify-start hover:bg-muted/50 !px-4"
              href="/settings"
            >
              Personal Settings
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 leading-6 !justify-start hover:bg-muted/50 !px-4 bg-muted dark:text-white"
              href="/settings/talent"
            >
              Talent Profile
            </a>
          </nav>
        </aside>

        <div className="flex-1 p-2">
          <div className="flex flex-col gap-6 pb-12">
            <h1>Talent Profile </h1>
            <form id="TalentForm" className="grid grid-cols-12 gap-6">
              <div className="grid grid-cols-1 col-span-12 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Username
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="satoshi_nakamoto"
                    name="username"
                    id=":r4j:-form-item"
                    aria-describedby=":r4j:-form-item-description"
                    aria-invalid="false"
                    value=""
                  />
                  <p
                    id=":r4j:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    Username can only be changed once every 6 months.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Title
                  </label>
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Chief Meme Officer"
                    name="headline"
                    id=":r4k:-form-item"
                    aria-describedby=":r4k:-form-item-description"
                    aria-invalid="false"
                    value=""
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Status
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r4m:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 notranslate"
                  >
                    <span
                      style={convertStyleStringToObject(
                        "pointer-events: none;",
                      )}
                    >
                      Available Now
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
                    style={convertStyleStringToObject(
                      "position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;",
                    )}
                  >
                    <option value="actively_looking">Available Now</option>
                    <option value="closed_to_offers">Unavailable</option>
                    <option value="hidden">Hide me</option>
                  </select>
                  <p
                    id=":r4l:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    "Not Available" applicants will also not be listed on our
                    talent page.
                  </p>
                </div>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-12 bg">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  What's your story? What makes you great?
                </label>
                <textarea
                  name="jobExpectations"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder="I've been doing X for Y years, achieved Z and now …"
                  id=":r4n:-form-item"
                  aria-describedby=":r4n:-form-item-description"
                  aria-invalid="false"
                ></textarea>
                <p
                  id=":r4n:-form-item-description"
                  className="text-[0.8rem] text-muted-foreground"
                >
                  <em>_Markdown_</em> is supported.
                </p>
              </div>
              <div className="grid grid-cols-2 col-span-12 gap-6 md:col-span-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Hourly Rate
                  </label>
                  <input
                    type="number"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="$50"
                    name="hourlyRate"
                    id=":r4o:-form-item"
                    aria-describedby=":r4o:-form-item-description"
                    aria-invalid="false"
                    value=""
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Montly Rate{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="h-4 m-0 ml-2 opacity-50"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>
                        If different from hourly rate. Typically longer duration
                        engagement are discounted by 15-50%
                      </title>
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                    </svg>
                  </label>
                  <input
                    type="number"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="$4900"
                    name="monthlyRate"
                    id=":r4p:-form-item"
                    aria-describedby=":r4p:-form-item-description"
                    aria-invalid="false"
                    value=""
                  />
                </div>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Current Location
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="London, UK"
                  name="location"
                  id=":r4q:-form-item"
                  aria-describedby=":r4q:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select your timezone
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r4s:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 notranslate w-full shadow-md col-span-12 md:col-span-6"
                >
                  <span
                    style={convertStyleStringToObject("pointer-events: none;")}
                  >
                    Select a timezone
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
                  style={convertStyleStringToObject(
                    "position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;",
                  )}
                >
                  <option value="Pacific/Midway">
                    (GMT-11:00) Midway Island, Samoa
                  </option>
                  <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
                  <option value="America/Juneau">(GMT-8:00) Alaska</option>
                  <option value="America/Dawson">
                    (GMT-7:00) Dawson, Yukon
                  </option>
                  <option value="America/Phoenix">(GMT-7:00) Arizona</option>
                  <option value="America/Tijuana">(GMT-7:00) Tijuana</option>
                  <option value="America/Los_Angeles">
                    (GMT-7:00) Pacific Time
                  </option>
                  <option value="America/Boise">
                    (GMT-6:00) Mountain Time
                  </option>
                  <option value="America/Chihuahua">
                    (GMT-6:00) Chihuahua, La Paz, Mazatlan
                  </option>
                  <option value="America/Regina">
                    (GMT-6:00) Saskatchewan
                  </option>
                  <option value="America/Mexico_City">
                    (GMT-6:00) Guadalajara, Mexico City, Monterrey
                  </option>
                  <option value="America/Belize">
                    (GMT-6:00) Central America
                  </option>
                  <option value="America/Chicago">
                    (GMT-5:00) Central Time
                  </option>
                  <option value="America/Bogota">
                    (GMT-5:00) Bogota, Lima, Quito
                  </option>
                  <option value="America/Detroit">
                    (GMT-4:00) Eastern Time
                  </option>
                  <option value="America/Caracas">
                    (GMT-4:00) Caracas, La Paz
                  </option>
                  <option value="America/Santiago">(GMT-3:00) Santiago</option>
                  <option value="America/Sao_Paulo">(GMT-3:00) Brasilia</option>
                  <option value="America/Montevideo">
                    (GMT-3:00) Montevideo
                  </option>
                  <option value="America/Argentina/Buenos_Aires">
                    (GMT-3:00) Buenos Aires, Georgetown
                  </option>
                  <option value="America/St_Johns">
                    (GMT-2:30) Newfoundland and Labrador
                  </option>
                  <option value="America/Godthab">(GMT-2:00) Greenland</option>
                  <option value="Atlantic/Azores">(GMT-1:00) Azores</option>
                  <option value="Atlantic/Cape_Verde">
                    (GMT-1:00) Cape Verde Islands
                  </option>
                  <option value="Etc/GMT">(GMT+0:00) UTC</option>
                  <option value="Europe/London">
                    (GMT+0:00) Edinburgh, London
                  </option>
                  <option value="Europe/Dublin">(GMT+0:00) Dublin</option>
                  <option value="Europe/Lisbon">(GMT+0:00) Lisbon</option>
                  <option value="Atlantic/Canary">
                    (GMT+0:00) Canary Islands
                  </option>
                  <option value="Africa/Casablanca">
                    (GMT+1:00) Casablanca, Monrovia
                  </option>
                  <option value="Europe/Belgrade">
                    (GMT+1:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
                  </option>
                  <option value="Europe/Sarajevo">
                    (GMT+1:00) Sarajevo, Skopje, Warsaw, Zagreb
                  </option>
                  <option value="Europe/Brussels">
                    (GMT+1:00) Brussels, Copenhagen, Madrid, Paris
                  </option>
                  <option value="Europe/Amsterdam">
                    (GMT+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
                  </option>
                  <option value="Africa/Algiers">
                    (GMT+1:00) West Central Africa
                  </option>
                  <option value="Europe/Bucharest">(GMT+2:00) Bucharest</option>
                  <option value="Africa/Cairo">(GMT+2:00) Cairo</option>
                  <option value="Europe/Helsinki">
                    (GMT+2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
                  </option>
                  <option value="Europe/Athens">(GMT+2:00) Athens</option>
                  <option value="Asia/Jerusalem">(GMT+2:00) Jerusalem</option>
                  <option value="Africa/Harare">
                    (GMT+2:00) Harare, Pretoria
                  </option>
                  <option value="Europe/Moscow">
                    (GMT+3:00) Istanbul, Minsk, Moscow, St. Petersburg,
                    Volgograd
                  </option>
                  <option value="Asia/Kuwait">(GMT+3:00) Kuwait, Riyadh</option>
                  <option value="Africa/Nairobi">(GMT+3:00) Nairobi</option>
                  <option value="Asia/Baghdad">(GMT+3:00) Baghdad</option>
                  <option value="Asia/Tehran">(GMT+3:30) Tehran</option>
                  <option value="Asia/Dubai">
                    (GMT+4:00) Abu Dhabi, Muscat
                  </option>
                  <option value="Asia/Baku">
                    (GMT+4:00) Baku, Tbilisi, Yerevan
                  </option>
                  <option value="Asia/Kabul">(GMT+4:30) Kabul</option>
                  <option value="Asia/Yekaterinburg">
                    (GMT+5:00) Ekaterinburg
                  </option>
                  <option value="Asia/Karachi">
                    (GMT+5:00) Islamabad, Karachi, Tashkent
                  </option>
                  <option value="Asia/Almaty">
                    (GMT+5:00) Almaty, Novosibirsk
                  </option>
                  <option value="Asia/Kolkata">
                    (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
                  </option>
                  <option value="Asia/Colombo">
                    (GMT+5:30) Sri Jayawardenepura
                  </option>
                  <option value="Asia/Kathmandu">(GMT+5:45) Kathmandu</option>
                  <option value="Asia/Dhaka">(GMT+6:00) Astana, Dhaka</option>
                  <option value="Asia/Rangoon">
                    (GMT+6:30) Yangon Rangoon
                  </option>
                  <option value="Asia/Bangkok">
                    (GMT+7:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="Asia/Krasnoyarsk">
                    (GMT+7:00) Krasnoyarsk
                  </option>
                  <option value="Asia/Shanghai">
                    (GMT+8:00) Beijing, Chongqing, Hong Kong SAR, Urumqi
                  </option>
                  <option value="Asia/Kuala_Lumpur">
                    (GMT+8:00) Kuala Lumpur, Singapore
                  </option>
                  <option value="Asia/Taipei">(GMT+8:00) Taipei</option>
                  <option value="Australia/Perth">(GMT+8:00) Perth</option>
                  <option value="Asia/Irkutsk">
                    (GMT+8:00) Irkutsk, Ulaanbaatar
                  </option>
                  <option value="Asia/Seoul">(GMT+9:00) Seoul</option>
                  <option value="Asia/Tokyo">
                    (GMT+9:00) Osaka, Sapporo, Tokyo
                  </option>
                  <option value="Asia/Yakutsk">(GMT+9:00) Yakutsk</option>
                  <option value="Australia/Darwin">(GMT+9:30) Darwin</option>
                  <option value="Australia/Brisbane">
                    (GMT+10:00) Brisbane
                  </option>
                  <option value="Asia/Vladivostok">
                    (GMT+10:00) Vladivostok
                  </option>
                  <option value="Pacific/Guam">
                    (GMT+10:00) Guam, Port Moresby
                  </option>
                  <option value="Australia/Adelaide">
                    (GMT+10:30) Adelaide
                  </option>
                  <option value="Australia/Sydney">
                    (GMT+11:00) Canberra, Melbourne, Sydney
                  </option>
                  <option value="Australia/Hobart">(GMT+11:00) Hobart</option>
                  <option value="Asia/Magadan">
                    (GMT+11:00) Magadan, Solomon Islands, New Caledonia
                  </option>
                  <option value="Asia/Kamchatka">
                    (GMT+12:00) Kamchatka, Marshall Islands
                  </option>
                  <option value="Pacific/Fiji">(GMT+12:00) Fiji Islands</option>
                  <option value="Pacific/Auckland">
                    (GMT+13:00) Auckland, Wellington
                  </option>
                  <option value="Pacific/Tongatapu">
                    (GMT+13:00) Nuku'alofa
                  </option>
                </select>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Skills. List your main skills first. Comma separated
                </label>
                <div className="space-y-2">
                  <div className="flex min-h-9 w-full flex-wrap gap-1.5 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors cursor-text">
                    <input
                      type="text"
                      placeholder="e.g., Solidity, TypeScript, Python"
                      className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
                      value=""
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>0/10 skills (max 20 chars each)</span>
                    <span className="opacity-70">
                      Press Enter or comma to add
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Languages
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Mandarin, English, Russian, Spanish"
                  name="languages"
                  id=":r4u:-form-item"
                  aria-describedby=":r4u:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
                <p className="text-xs text-muted-foreground">
                  Max 10 languages, 20 characters each. Comma separated
                </p>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  In Crypto since
                </label>
                <input
                  type="number"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  max="2030"
                  placeholder="2014"
                  name="inCryptoSince"
                  id=":r4v:-form-item"
                  aria-describedby=":r4v:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 cursor-pointer md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Telegram
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="https://t.me/username"
                  name="telegram"
                  id=":r50:-form-item"
                  aria-describedby=":r50:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Twitter/X
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="@twitter"
                  name="twitter"
                  id=":r51:-form-item"
                  aria-describedby=":r51:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  GitHub
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="https://github.com/user"
                  name="github"
                  id=":r52:-form-item"
                  aria-describedby=":r52:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  LinkedIn
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="https://www.linkedin.com/in/username"
                  name="linkedin"
                  id=":r53:-form-item"
                  aria-describedby=":r53:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  University, Graduation year
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="University of California"
                  name="university"
                  id=":r54:-form-item"
                  aria-describedby=":r54:-form-item-description"
                  aria-invalid="false"
                  value=""
                />
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Resume/CV
                </label>
                <div className="flex w-full px-3 py-1 text-sm transition-colors bg-transparent border rounded-md shadow-sm h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                  <div
                    className="relative flex items-center gap-3 justify-between input w-full cursor-pointer group !min-h-0"
                    title=""
                  >
                    Choose file
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="opacity-50 cursor-pointer hover:opacity-100 group-hover:opacity-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Choose file</title>
                      <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                    </svg>
                  </div>
                  <input type="file" className="hide" accept="image/*,.pdf" />
                </div>
              </div>
              <div className="space-y-2 col-span-12 md:col-span-6">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Link to portfolio, projects, etc. One per line
                </label>
                <textarea
                  name="links"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder="https://mysite.comhttps://anotherone.com"
                  id=":r56:-form-item"
                  aria-describedby=":r56:-form-item-description"
                  aria-invalid="false"
                ></textarea>
              </div>
              <div className="space-y-2 col-span-12"></div>
              <h3 id="video-introduction">Video Introduction</h3>
              <p
                id=":r57:-form-item-description"
                className="text-[0.8rem] text-muted-foreground md:max-w-2xl"
              >
                Create an authentic profile with a video introduction. Video
                sells like no text can. It gives companies and recruiters extra
                reasurance that your profile is real. It's also easier to tell
                whether there will be chemistry between you and the company's
                team.
                <br></br>
                You have 60 seconds. Take as many takes as you'd like! Smile, be
                yourself, say your name, a summary of your experience and what
                positions you are looking for!
              </p>
              <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-slate-200 dark:bg-dark-100 p-4 min-h-[33ch] aspect-square">
                  <div className="relative w-full aspect-square overflow-hidden rounded-3xl bg-slate-200 dark:bg-dark-100">
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                      <button
                        type="button"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-150"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 576 512"
                          className="w-5 h-5 shrink-0 text-red-500"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                        </svg>
                        <span className="text-lg font-semibold leading-none">
                          Record Video Application
                        </span>
                      </button>
                    </div>
                    <div
                      className="absolute left-0 right-0 flex justify-center"
                      style={convertStyleStringToObject(
                        "top: calc(50% + 36px);",
                      )}
                    >
                      <div className="h-7 overflow-hidden">
                        <div
                          className="flex items-center gap-2.5"
                          style={convertStyleStringToObject(
                            "animation: 3s ease-in-out 0s 1 normal none running hint-fade;",
                          )}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 496 512"
                            className="w-4 h-4 text-slate-500 dark:text-slate-400"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
                          </svg>
                          <span className="text-base font-medium text-slate-500 dark:text-slate-400">
                            Just be yourself
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-10">
                      <button
                        type="button"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 text-slate-400 dark:text-slate-500"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                        </svg>
                      </button>
                      <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-black/10 dark:bg-white/10">
                        <button
                          type="button"
                          className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-150"
                        >
                          <span className="font-bold text-white text-lg">
                            90
                          </span>
                        </button>
                      </div>
                      <button
                        type="button"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 text-slate-400 dark:text-slate-500"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className="w-6 h-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 flex flex-col col-span-12 gap-6 mt-10">
                <h3>Work Experience</h3>
                <table className="w-full text-left border-0 table-fixed text-sm">
                  <thead>
                    <tr className="opacity-70">
                      <th className="p-2">Period</th>
                      <th className="p-2">Title</th>
                      <th className="p-2">Company</th>
                      <th className="w-24 p-2"></th>
                    </tr>
                  </thead>
                  <tbody className="text-left"></tbody>
                </table>
                <div className="flex w-full my-4">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="m-0 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>{" "}
                    Add work experience
                  </button>
                </div>
              </div>
              <div className="space-y-2 col-span-12 mt-10">
                <h3>I'm open to</h3>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="true"
                    data-state="checked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5a:-form-item"
                    aria-describedby=":r5a:-form-item-description"
                    aria-invalid="false"
                  >
                    <span
                      data-state="checked"
                      className="flex items-center justify-center text-current"
                      style={convertStyleStringToObject(
                        "pointer-events: none;",
                      )}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Remote work
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="true"
                    data-state="checked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5b:-form-item"
                    aria-describedby=":r5b:-form-item-description"
                    aria-invalid="false"
                  >
                    <span
                      data-state="checked"
                      className="flex items-center justify-center text-current"
                      style={convertStyleStringToObject(
                        "pointer-events: none;",
                      )}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Full-time
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="true"
                    data-state="checked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5c:-form-item"
                    aria-describedby=":r5c:-form-item-description"
                    aria-invalid="false"
                  >
                    <span
                      data-state="checked"
                      className="flex items-center justify-center text-current"
                      style={convertStyleStringToObject(
                        "pointer-events: none;",
                      )}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Part-time (freelance, consulting, bountis)
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5d:-form-item"
                    aria-describedby=":r5d:-form-item-description"
                    aria-invalid="false"
                  ></button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Relocation to a different country
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5e:-form-item"
                    aria-describedby=":r5e:-form-item-description"
                    aria-invalid="false"
                  ></button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Relocation to a different city
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5f:-form-item"
                    aria-describedby=":r5f:-form-item-description"
                    aria-invalid="false"
                  ></button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Salary in Crypto
                  </label>
                </div>
                <div className="space-y-2 flex flex-row !mt-4 space-x-3 space-y-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id=":r5g:-form-item"
                    aria-describedby=":r5g:-form-item-description"
                    aria-invalid="false"
                  ></button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    value="on"
                    style={convertStyleStringToObject(
                      "position: absolute; pointer-events: none; opacity: 0; margin: 0px; transform: translateX(-100%); width: 14px; height: 14px;",
                    )}
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal !my-0">
                    Salary in Fiat
                  </label>
                </div>
              </div>
              <div className="space-y-2 col-span-12">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Tell us a joke! Something geeky, perhaps?
                </label>
                <textarea
                  name="joke"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y md:w-1/2"
                  placeholder="Two programmers walk into a bar..."
                  id=":r5h:-form-item"
                  aria-describedby=":r5h:-form-item-description"
                  aria-invalid="false"
                ></textarea>
              </div>
              <div className="flex items-center col-span-12 space-x-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex items-center justify-center btn btn-lg btn-blue"
                  type="submit"
                >
                  Save
                </button>
                <a
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
                  href="/talent/profile/undefined"
                >
                  View profile{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="m-0 ml-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                  </svg>
                </a>
                <a
                  rel="nofollow noindex"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
                  href="/talent/profile/undefined/embed"
                >
                  Embed profile
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="m-0 ml-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
