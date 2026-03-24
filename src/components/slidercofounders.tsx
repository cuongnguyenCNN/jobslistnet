import Link from "next/link";
import "../app/197415462413322b.css";

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
export default function SliderCofounder() {
  return (
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/william-heckman-ba52aa133"
                    >
                      <span itemProp="name">Will Heckman</span>
                    </Link>
                    <p className="m-0">
                      {" "}
                      Chief of Staff &amp; SVP Sales
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/thestreet-roundtable"
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
                    <b>CryptoJobsList</b> has been <b>great!</b> About to hire 1
                    new rep and considering countless others as well.
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/alexistonon/"
                    >
                      <span itemProp="name">Alexis Tonon</span>
                    </Link>
                    <p className="m-0">
                      Co-Founder and COO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/multiverse"
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
                    <b>much more than anticipated</b>! We also found several
                    attractive candidates. The salary, location, and skill set
                    range is very broad, making finding the right person for the
                    job pretty easy. It’s not the first time we post an open
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/sterling-barnett-6812bb8/"
                    >
                      <span itemProp="name">Sterling Barnett</span>
                    </Link>
                    <p className="m-0">
                      Co-Founder and COO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/stickies"
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
                    <b>CryptoJobsList</b> and received an impressive talent pool
                    of over 80 passionate individuals interested in working in
                    the crypto space. After interviewing 10 candidates, we found
                    the perfect fit for our team. The platform was easy to use,
                    and the team was incredibly responsive and helpful
                    throughout the hiring process. As a consumer web3 startup,{" "}
                    <b>we highly recommend</b> <b>CryptoJobsList</b> for any
                    company looking to hire top talent in the crypto industry.
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/josephskewes"
                    >
                      <span itemProp="name">Joseph Skewes</span>
                    </Link>
                    <p className="m-0">
                      Co-Founder, Head of Product &amp; Ops
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/id8r"
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
                    Weve had a first round of interviews with 5+ applicants
                    from <b>CryptoJobsList</b> and, like last time,{" "}
                    <b>it has been our best source of leads</b>. We are still in
                    the process of doing a second round of interviews and
                    anticipate closing the role in the next week or two.
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/elena-vishnyakova-75614a196/"
                    >
                      <span itemProp="name">Elena Vishnyakova</span>
                    </Link>
                    <p className="m-0">
                      HR Director
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/p2p"
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
                    At P2P.org, we recognize the importance of connecting
                    talented individuals with exciting opportunities in the
                    dynamic and ever-evolving world of cryptocurrency and
                    blockchain. As a company at the forefront of the blockchain
                    and crypto revolution, we know the importance of connecting
                    with top talent in the industry. Thats why{" "}
                    <b>
                      we consider <b>CryptoJobsList</b> to be an invaluable
                      resource for finding and attracting the best and brightest
                      minds in this field.
                    </b>{" "}
                    It has proven to be a valuable and effective tool in our
                    hiring efforts and we are grateful for the opportunities it
                    has presented us.
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/mdoteth/"
                    >
                      <span itemProp="name">Michal Kubis</span>
                    </Link>
                    <p className="m-0">
                      Co-Founder &amp; CEO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/walletchat"
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
                    <b>We have already made several hires via CryptoJobsList</b>
                    . So far, we are happy with each one of them. CJL offers an
                    easy to use platform and the candidates we receive are
                    generally well versed with and a good fit for the web3 space
                    — which is a challenge when hiring via traditional
                    platforms. On top of this, the team has been super
                    responsive whenever weve tried reaching out and we feel
                    like we are talking to a friend. Excited to keep seeing CJL
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/jesse-johnson-54b45039/"
                    >
                      <span itemProp="name">Jesse Johnson</span>
                    </Link>
                    <p className="m-0">
                      Founder &amp; COO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/pixelcraft-studios"
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
                    Weve got a really strong looking shortlist and will be
                    having calls all through this week with those. Im quite
                    pleased with the results!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/melissaannquinn/"
                    >
                      <span itemProp="name">Melissa Quinn</span>
                    </Link>
                    <p className="m-0">
                      Chief of Staff
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/uma"
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
                    We recently switched to using <b>CryptoJobsList</b> as our
                    primary crypto job board provider, and I have been pretty
                    impressed thus far with the talent coming through. The
                    latest feature of having a dashboard is a game changer, so
                    thank you!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/kevinmarchfpg/"
                    >
                      <span itemProp="name">Kevin March</span>
                    </Link>
                    <p className="m-0">
                      Co-founder
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/floating-point-group"
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
                    Kevin here, founder of Floating Point Group. I just wanted
                    to say that you guys are killing it. Some of our best
                    applicants are coming from your site. Very happy with what
                    we’re seeing so far!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://twitter.com/seb2point0"
                    >
                      <span itemProp="name">Sébastien Couture</span>
                    </Link>
                    <p className="m-0">
                      Co-founder &amp; Host
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/epicenter-podcast"
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
                    Id recommend using <b>CryptoJobsList</b> if youre looking
                    to hire someone in crypto, they cater to a number of
                    different skill sets including marketing and community sales
                    and business development traders and of course, developers
                    and engineers. We{" "}
                    <Link
                      href="https://medium.com/epicenterpodcast/epicenter-has-a-new-cmo-welcome-graham-tonkin-788d24cd7758"
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/jonathanbarker/"
                    >
                      <span itemProp="name">Jonathan Barker</span>
                    </Link>
                    <p className="m-0">
                      Head of People Operations
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/status"
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
                    What made CJL stand out from other options? The availability
                    oftalent that was really passionate about working in the
                    crypto space. We{" "}
                    <b>received 150+ applications, interviewed 10</b> and{" "}
                    <b>hired the one from CryptoJobsList.</b>
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/william-heckman-ba52aa133"
                  >
                    <span itemProp="name">Will Heckman</span>
                  </Link>
                  <p className="m-0">
                    {" "}
                    Chief of Staff &amp; SVP Sales
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/thestreet-roundtable"
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
                  <b>CryptoJobsList</b> has been <b>great!</b> About to hire 1
                  new rep and considering countless others as well.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/alexistonon/"
                  >
                    <span itemProp="name">Alexis Tonon</span>
                  </Link>
                  <p className="m-0">
                    Co-Founder and COO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/multiverse"
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
                  The application quantity is <b>much more than anticipated</b>!
                  We also found several attractive candidates. The salary,
                  location, and skill set range is very broad, making finding
                  the right person for the job pretty easy. It’s not the first
                  time we post an open position here, and that won’t be the
                  last.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/sterling-barnett-6812bb8/"
                  >
                    <span itemProp="name">Sterling Barnett</span>
                  </Link>
                  <p className="m-0">
                    Co-Founder and COO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/stickies"
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
                  <b>CryptoJobsList</b> and received an impressive talent pool
                  of over 80 passionate individuals interested in working in the
                  crypto space. After interviewing 10 candidates, we found the
                  perfect fit for our team. The platform was easy to use, and
                  the team was incredibly responsive and helpful throughout the
                  hiring process. As a consumer web3 startup,{" "}
                  <b>we highly recommend</b> <b>CryptoJobsList</b> for any
                  company looking to hire top talent in the crypto industry.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/josephskewes"
                  >
                    <span itemProp="name">Joseph Skewes</span>
                  </Link>
                  <p className="m-0">
                    Co-Founder, Head of Product &amp; Ops
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/id8r"
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
                  Weve had a first round of interviews with 5+ applicants from{" "}
                  <b>CryptoJobsList</b> and, like last time,{" "}
                  <b>it has been our best source of leads</b>. We are still in
                  the process of doing a second round of interviews and
                  anticipate closing the role in the next week or two.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/elena-vishnyakova-75614a196/"
                  >
                    <span itemProp="name">Elena Vishnyakova</span>
                  </Link>
                  <p className="m-0">
                    HR Director
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/p2p"
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
                  At P2P.org, we recognize the importance of connecting talented
                  individuals with exciting opportunities in the dynamic and
                  ever-evolving world of cryptocurrency and blockchain. As a
                  company at the forefront of the blockchain and crypto
                  revolution, we know the importance of connecting with top
                  talent in the industry. Thats why{" "}
                  <b>
                    we consider <b>CryptoJobsList</b> to be an invaluable
                    resource for finding and attracting the best and brightest
                    minds in this field.
                  </b>{" "}
                  It has proven to be a valuable and effective tool in our
                  hiring efforts and we are grateful for the opportunities it
                  has presented us.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/mdoteth/"
                  >
                    <span itemProp="name">Michal Kubis</span>
                  </Link>
                  <p className="m-0">
                    Co-Founder &amp; CEO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/walletchat"
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
                  <b>We have already made several hires via CryptoJobsList</b>.
                  So far, we are happy with each one of them. CJL offers an easy
                  to use platform and the candidates we receive are generally
                  well versed with and a good fit for the web3 space — which is
                  a challenge when hiring via traditional platforms. On top of
                  this, the team has been super responsive whenever weve tried
                  reaching out and we feel like we are talking to a friend.
                  Excited to keep seeing CJL grow together with us, as we
                  deliver the future of wallet-to-wallet messaging!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/jesse-johnson-54b45039/"
                  >
                    <span itemProp="name">Jesse Johnson</span>
                  </Link>
                  <p className="m-0">
                    Founder &amp; COO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/pixelcraft-studios"
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
                  Weve got a really strong looking shortlist and will be having
                  calls all through this week with those. Im quite pleased with
                  the results!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/melissaannquinn/"
                  >
                    <span itemProp="name">Melissa Quinn</span>
                  </Link>
                  <p className="m-0">
                    Chief of Staff
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/uma"
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
                  We recently switched to using <b>CryptoJobsList</b> as our
                  primary crypto job board provider, and I have been pretty
                  impressed thus far with the talent coming through. The latest
                  feature of having a dashboard is a game changer, so thank you!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/kevinmarchfpg/"
                  >
                    <span itemProp="name">Kevin March</span>
                  </Link>
                  <p className="m-0">
                    Co-founder
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/floating-point-group"
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
                  Kevin here, founder of Floating Point Group. I just wanted to
                  say that you guys are killing it. Some of our best applicants
                  are coming from your site. Very happy with what we’re seeing
                  so far!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://twitter.com/seb2point0"
                  >
                    <span itemProp="name">Sébastien Couture</span>
                  </Link>
                  <p className="m-0">
                    Co-founder &amp; Host
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/epicenter-podcast"
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
                  Id recommend using <b>CryptoJobsList</b> if youre looking to
                  hire someone in crypto, they cater to a number of different
                  skill sets including marketing and community sales and
                  business development traders and of course, developers and
                  engineers. We{" "}
                  <Link
                    href="https://medium.com/epicenterpodcast/epicenter-has-a-new-cmo-welcome-graham-tonkin-788d24cd7758"
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/jonathanbarker/"
                  >
                    <span itemProp="name">Jonathan Barker</span>
                  </Link>
                  <p className="m-0">
                    Head of People Operations
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/status"
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
                  What made CJL stand out from other options? The availability
                  oftalent that was really passionate about working in the
                  crypto space. We{" "}
                  <b>received 150+ applications, interviewed 10</b> and{" "}
                  <b>hired the one from CryptoJobsList.</b>
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://twitter.com/thorchain_org/status/1214328079406915584"
                    >
                      <span itemProp="name">Kai Ansaari</span>
                    </Link>
                    <p className="m-0">
                      Project Lead
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/thorchain"
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
                    <b>dozen high-quality job applications</b> in less than a
                    week to{" "}
                    <Link
                      href="https://cryptojobslist.com/archive/senior-software-engineer-blockchain-protocol-at-thorchain-remote"
                      target="_blank"
                      rel="noreferrer"
                    >
                      this post
                    </Link>
                    . It has been very effective and would{" "}
                    <b>highly recommend</b>. Service is excellent, UX simple.
                    Thanks CryptoJobsList!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/astleymilne/"
                    >
                      <span itemProp="name">Astley Milne</span>
                    </Link>
                    <p className="m-0">
                      General Manager
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/meld-gold"
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
                    Great experience. We have had excellent candidates via Raman
                    and the <b>CryptoJobsList</b> platform. Will definitely use
                    again as we build out other components of the team!
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
                      href="https://x.com/THORChain/status/1214328079406915584"
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
                        href="https://x.com/THORChain/status/1214328079406915584"
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
                          href="https://x.com/THORChain/status/1214328079406915584"
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
                            href="https://x.com/intent/follow?screen_name=THORChain"
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
                      href="https://x.com/THORChain/status/1214328079406915584"
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
                  <p className="tweet-body_root__ChzUj" lang="en" dir="auto">
                    <span>
                      The team have received over a dozen high-quality job
                      applications in less than a week to this post. It has been
                      very effective and would highly recommend. Service is
                      excellent, UX simple. Thanks{" "}
                    </span>
                    <Link
                      href="https://x.com/CryptoJobsList"
                      className="tweet-link_root__4EzRS"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      @CryptoJobsList
                    </Link>
                    <span>h/t </span>
                    <Link
                      href="https://x.com/mehowbrains"
                      className="tweet-link_root__4EzRS"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      @mehowbrains
                    </Link>
                    <span></span>
                    <Link
                      href="https://cryptojobslist.com/jobs/senior-software-engineer-blockchain-protocol-at-thorchain-remote"
                      className="tweet-link_root__4EzRS"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      cryptojobslist.com/jobs/senior-so…
                    </Link>
                  </p>
                  <div className="tweet-info_info__ll_kH">
                    <Link
                      className="tweet-info-created-at_root__KaxZi"
                      href="https://x.com/THORChain/status/1214328079406915584"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="6:29 AM · Jan 7, 2020"
                    >
                      <time dateTime="2020-01-06T23:29:09.000Z">
                        6:29 AM · Jan 7, 2020
                      </time>
                    </Link>
                    <Link
                      className="tweet-info_infoLink__xdgYO"
                      href="https://help.x.com/en/x-for-websites-ads-info-and-privacy"
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
                      className="tweet-actions_like__H1xYv"
                      href="https://x.com/intent/like?tweet_id=1214328079406915584"
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
                      <span className="tweet-actions_likeCount__MyxBd">53</span>
                    </Link>
                    <Link
                      className="tweet-actions_reply__S4rFc"
                      href="https://x.com/intent/tweet?in_reply_to=1214328079406915584"
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
                      className="tweet-replies_link__roxYQ"
                      href="https://x.com/THORChain/status/1214328079406915584"
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://twitter.com/kleros_io"
                    >
                      <span itemProp="name">Maria T. Vidal</span>
                    </Link>
                    <p className="m-0">
                      Communications Lead
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/kleros"
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
                      <b>CryptoJobsList</b> drives <b>more qualified leads</b>{" "}
                      than AngelList!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/brett-shear-8b553199"
                    >
                      <span itemProp="name">Brett Shear</span>
                    </Link>
                    <p className="m-0">
                      Cofounder &amp; COO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/fleek"
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
                    CryptoJobsList. Im definitely a continuous user going
                    forward!
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://twitter.com/Davie_Michael"
                    >
                      <span itemProp="name">Mike Davie</span>
                    </Link>
                    <p className="m-0">
                      Founder &amp; CEO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/datastreamx"
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
                    The quality of the candidates are by far more relevant and
                    experienced than on other boards. They are in the crypto
                    space and have the past experience to hit the ground
                    running.
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
                      style={convertStyleStringToObject("color: transparent;")}
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://www.linkedin.com/in/niall-dennehy-bb311016/"
                    >
                      <span itemProp="name">Niall Dennehy</span>
                    </Link>
                    <p className="m-0">
                      Co-founder &amp; COO
                      <Link
                        target="_blank"
                        className="block underline-none hover:underline"
                        rel="noreferrer"
                        href="https://cryptojobslist.com/companies/aid-tech"
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
                      consistently provided us with a large pool of qualified
                      candidates
                    </b>{" "}
                    for various roles within our company. The user-friendly
                    interface and the efficient recruitment process has made it
                    easy for us to fill positions quickly and effectively. We
                    are grateful for the help and support provided by CJL and
                    highly recommend their services to anyone looking to fill
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
                      style={convertStyleStringToObject("color: transparent;")}
                    />
                  </div>
                  <div className="text-foreground">
                    <Link
                      itemProp="author"
                      
                      itemType="https://schema.org/Person"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="m-0 text-xl font-bold cursor-pointer hover:underline"
                      href="https://twitter.com/adelphoi_io"
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
                    <b>marketing</b> help with community engagement, digital
                    marketing and social media and found{" "}
                    <b>two highly qualified candidates within days</b>! We
                    interviewed and hired them within three weeks.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://twitter.com/thorchain_org/status/1214328079406915584"
                  >
                    <span itemProp="name">Kai Ansaari</span>
                  </Link>
                  <p className="m-0">
                    Project Lead
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/thorchain"
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
                  We received over a <b>dozen high-quality job applications</b>{" "}
                  in less than a week to{" "}
                  <Link
                    href="https://cryptojobslist.com/archive/senior-software-engineer-blockchain-protocol-at-thorchain-remote"
                    target="_blank"
                    rel="noreferrer"
                  >
                    this post
                  </Link>
                  . It has been very effective and would <b>highly recommend</b>
                  . Service is excellent, UX simple. Thanks CryptoJobsList!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/astleymilne/"
                  >
                    <span itemProp="name">Astley Milne</span>
                  </Link>
                  <p className="m-0">
                    General Manager
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/meld-gold"
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
                  Great experience. We have had excellent candidates via Raman
                  and the <b>CryptoJobsList</b> platform. Will definitely use
                  again as we build out other components of the team!
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
                    href="https://x.com/THORChain/status/1214328079406915584"
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
                      href="https://x.com/THORChain/status/1214328079406915584"
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
                        href="https://x.com/THORChain/status/1214328079406915584"
                        className="tweet-header_username__UebZb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span title="@THORChain">@THORChain</span>
                      </Link>
                      <div className="tweet-header_authorFollow__w_j4h">
                        <span className="tweet-header_separator__d4pqe">·</span>
                        <Link
                          href="https://x.com/intent/follow?screen_name=THORChain"
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
                    href="https://x.com/THORChain/status/1214328079406915584"
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
                <p className="tweet-body_root__ChzUj" lang="en" dir="auto">
                  <span>
                    The team have received over a dozen high-quality job
                    applications in less than a week to this post. It has been
                    very effective and would highly recommend. Service is
                    excellent, UX simple. Thanks{" "}
                  </span>
                  <Link
                    href="https://x.com/CryptoJobsList"
                    className="tweet-link_root__4EzRS"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    @CryptoJobsList
                  </Link>
                  <span>h/t </span>
                  <Link
                    href="https://x.com/mehowbrains"
                    className="tweet-link_root__4EzRS"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    @mehowbrains
                  </Link>
                  <span></span>
                  <Link
                    href="https://cryptojobslist.com/jobs/senior-software-engineer-blockchain-protocol-at-thorchain-remote"
                    className="tweet-link_root__4EzRS"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    cryptojobslist.com/jobs/senior-so…
                  </Link>
                </p>
                <div className="tweet-info_info__ll_kH">
                  <Link
                    className="tweet-info-created-at_root__KaxZi"
                    href="https://x.com/THORChain/status/1214328079406915584"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="6:29 AM · Jan 7, 2020"
                  >
                    <time dateTime="2020-01-06T23:29:09.000Z">
                      6:29 AM · Jan 7, 2020
                    </time>
                  </Link>
                  <Link
                    className="tweet-info_infoLink__xdgYO"
                    href="https://help.x.com/en/x-for-websites-ads-info-and-privacy"
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
                    className="tweet-actions_like__H1xYv"
                    href="https://x.com/intent/like?tweet_id=1214328079406915584"
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
                    <span className="tweet-actions_likeCount__MyxBd">53</span>
                  </Link>
                  <Link
                    className="tweet-actions_reply__S4rFc"
                    href="https://x.com/intent/tweet?in_reply_to=1214328079406915584"
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
                    className="tweet-replies_link__roxYQ"
                    href="https://x.com/THORChain/status/1214328079406915584"
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://twitter.com/kleros_io"
                  >
                    <span itemProp="name">Maria T. Vidal</span>
                  </Link>
                  <p className="m-0">
                    Communications Lead
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/kleros"
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
                    <b>CryptoJobsList</b> drives <b>more qualified leads</b>{" "}
                    than AngelList!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/brett-shear-8b553199"
                  >
                    <span itemProp="name">Brett Shear</span>
                  </Link>
                  <p className="m-0">
                    Cofounder &amp; COO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/fleek"
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
                  CryptoJobsList. Im definitely a continuous user going
                  forward!
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://twitter.com/Davie_Michael"
                  >
                    <span itemProp="name">Mike Davie</span>
                  </Link>
                  <p className="m-0">
                    Founder &amp; CEO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/datastreamx"
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
                  The quality of the candidates are by far more relevant and
                  experienced than on other boards. They are in the crypto space
                  and have the past experience to hit the ground running.
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
                    style={convertStyleStringToObject("color: transparent;")}
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://www.linkedin.com/in/niall-dennehy-bb311016/"
                  >
                    <span itemProp="name">Niall Dennehy</span>
                  </Link>
                  <p className="m-0">
                    Co-founder &amp; COO
                    <Link
                      target="_blank"
                      className="block underline-none hover:underline"
                      rel="noreferrer"
                      href="https://cryptojobslist.com/companies/aid-tech"
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
                    consistently provided us with a large pool of qualified
                    candidates
                  </b>{" "}
                  for various roles within our company. The user-friendly
                  interface and the efficient recruitment process has made it
                  easy for us to fill positions quickly and effectively. We are
                  grateful for the help and support provided by CJL and highly
                  recommend their services to anyone looking to fill roles in
                  the crypto industry.
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
                    style={convertStyleStringToObject("color: transparent;")}
                  />
                </div>
                <div className="text-foreground">
                  <Link
                    itemProp="author"
                    
                    itemType="https://schema.org/Person"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="m-0 text-xl font-bold cursor-pointer hover:underline"
                    href="https://twitter.com/adelphoi_io"
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
                  <b>marketing</b> help with community engagement, digital
                  marketing and social media and found{" "}
                  <b>two highly qualified candidates within days</b>! We
                  interviewed and hired them within three weeks.
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
  );
}
