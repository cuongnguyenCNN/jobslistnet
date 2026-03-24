

export default function CryptoHiring() {
  return (
    <section className="container-wide">
      <h2>Crypto Jobs by Location</h2>
      <nav className="mb-4 no-scrollbar capitalize sm:p-0 my-4 flex justify-start gap-2 sm:gap-2 text-center whitespace-nowrap flex-wrap leading-6 container lg:max-w-[min(1500px,98dvw)] mx-auto mt-2">
        <a className="category max-w-max" href="/remote">
          Remote Crypto Jobs
        </a>
        <a className="category max-w-max" href="/jobs-singapore">
          Crypto Jobs in Singapore
        </a>
        <a className="category max-w-max" href="/jobs-europe">
          Crypto Jobs in Europe
        </a>
        <a className="category max-w-max" href="/jobs-dubai">
          Crypto Jobs in Dubai
        </a>
      </nav>
      <h2>Crypto Companies Hiring Now</h2>
      <ul className="grid grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
        <li className="flex flex-col w-full p-4 overflow-hidden text-left list-none duration-300 border border-gray-200 border-solid rounded-lg cursor-pointer dark:border-dark-100 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 group hover:shadow-md">
          <img
            alt="Plutus logo"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="fadeIn ring-[1.3px] ring-white rounded bg-white relative h-[60px] w-[60px] object-contain"
            src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/a937dace-c6c9-429d-a95f-bd3bccf45d11.png"
          />
          <div className="my-2 mt-3">
            <a
              className="inline text-xl font-bold text-black text-decoration:none dark:text-white hover:underline"
              href="/companies/plutus"
            >
              Plutus
            </a>
          </div>
          <p className="m-0 mb-2 line-clamp-3">Bank on Crypto.</p>
          <span className="mt-auto text-brand-blue group-hover:underline">
            View Open Vacancies
          </span>
        </li>
        <li className="flex flex-col w-full p-4 overflow-hidden text-left list-none duration-300 border border-gray-200 border-solid rounded-lg cursor-pointer dark:border-dark-100 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 group hover:shadow-md">
          <img
            alt="Gnosis logo"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="fadeIn ring-[1.3px] ring-white rounded bg-white relative h-[60px] w-[60px] object-contain"
            src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/020b8a27-2721-4e72-96a0-635289b8d67a.png"
          />
          <div className="my-2 mt-3">
            <a
              className="inline text-xl font-bold text-black text-decoration:none dark:text-white hover:underline"
              href="/companies/gnosis"
            >
              Gnosis
            </a>
          </div>
          <p className="m-0 mb-2 line-clamp-3">
            GnosisDAO builds infrastructure and applications for an open
            internet
          </p>
          <span className="mt-auto text-brand-blue group-hover:underline">
            View Open Vacancies
          </span>
        </li>
        <li className="flex flex-col w-full p-4 overflow-hidden text-left list-none duration-300 border border-gray-200 border-solid rounded-lg cursor-pointer dark:border-dark-100 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 group hover:shadow-md">
          <img
            alt="Sapien logo"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="fadeIn ring-[1.3px] ring-white rounded bg-white relative h-[60px] w-[60px] object-contain"
            src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/3d08168a-fa5c-47f0-a31c-4762d807c02d.jpg"
          />
          <div className="my-2 mt-3">
            <a
              className="inline text-xl font-bold text-black text-decoration:none dark:text-white hover:underline"
              href="/companies/sapien"
            >
              Sapien
            </a>
          </div>
          <p className="m-0 mb-2 line-clamp-3">
            Giving AI companies access to the worlds most diverse network of
            human data labelers
          </p>
          <span className="mt-auto text-brand-blue group-hover:underline">
            View Open Vacancies
          </span>
        </li>
        <li className="flex flex-col w-full p-4 overflow-hidden text-left list-none duration-300 border border-gray-200 border-solid rounded-lg cursor-pointer dark:border-dark-100 shadow-dark-100 dark:shadow-dark-100 dark:bg-dark-300 group hover:shadow-md">
          <img
            alt="3Commas logo"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="fadeIn ring-[1.3px] ring-white rounded bg-white relative h-[60px] w-[60px] object-contain"
            src="https://imgproxy.cryptojobslist.com/sig0x23/q:75/dpr:1.2/width:128/rs:fill/ex:1/plain/gs:/job-listing-logos/24046865-e519-4da2-881f-37a3787e255a.png"
          />
          <div className="my-2 mt-3">
            <a
              className="inline text-xl font-bold text-black text-decoration:none dark:text-white hover:underline"
              href="/companies/3commas-io"
            >
              3Commas
            </a>
          </div>
          <span className="mt-auto text-brand-blue group-hover:underline">
            View Open Vacancies
          </span>
        </li>
      </ul>
      <article
        id="faq"
        itemType="https://schema.org/FAQPage"
        className="jsx-887c11ada4159cda mx-auto my-10 leading-9 FAQ"
      >
        <h2 className="jsx-887c11ada4159cda ">Frequently Asked Questions</h2>
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
                What are the benefits of working in the Cryptocurrency Industry?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  Working in the <strong>Cryptocurrency / Web3</strong> industry
                  is <strong>full of perks!</strong> And we are not talking only
                  about the extreme cardio sessions you get when{" "}
                  <strong>BTC drops.</strong>
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_bf889ecebf/giphy_bf889ecebf.gif"
                    width="640"
                    height="360"
                    alt="https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>Here are some of the benefits of working in crypto:</p>
                <ul>
                  <li>
                    <strong>
                      High growth potential (yes, a lot of money):
                    </strong>{" "}
                    Cryptocurrency / Web3 is new (kinda) and has a lot of room
                    for growth. You can get a new job faster than any other
                    niche, plus there are a lot of entry-level opportunities! If
                    you have experience in another field (development,
                    marketing, finance, etc.) you can study a few concepts and
                    get a new job in crypto.
                  </li>
                  <li>
                    <strong>Modern technology:</strong> The cryptocurrency
                    sector is at the front line of technology innovations! It
                    provides you with a chance to work with the latest
                    technology.
                  </li>
                  <li>
                    <strong>Decentralization:</strong> The Web3 sector runs on
                    decentralized platforms, a new way of doing business. Not
                    only making traditional finance look dumb, but crypto also
                    makes everything faster and fairer. If you hate taxes, you
                    should look into crypto! We are kidding, please pay your
                    taxes.
                  </li>
                  <li>
                    <strong>Opportunities for innovation:</strong> from
                    million-dollar monkey JPEGs to the biggest financial
                    decentralized systems. Crypto has it all! As the blockchain
                    sphere unravels, people have the chance to innovate and
                    develop new products and services.
                  </li>
                  <li>
                    <strong>Strong demand for expertise:</strong> As the virtual
                    currency industry expands, there is an increasing need for
                    people. Its an attractive career path for those with the
                    appropriate skills.
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
                What Job Opportunities are available in the Crypto Industry?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  Pretty much any profession you can think of can exist in Web3
                  if you add <strong>crypto</strong> at the beginning. We
                  havent found any <strong>crypto psychologists</strong> or{" "}
                  <strong>crypto carpenters,</strong> but we know they are out
                  there!
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_0a34b5f7d2/giphy_0a34b5f7d2.gif"
                    width="266"
                    height="300"
                    alt="https://media.giphy.com/media/D6XNi20V4Z37a/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>
                  These are the roles we know for sure web3 and crypto needs:
                </p>
                <p>
                  <strong>1. Blockchain Developer:</strong> develops (duh) and
                  maintains blockchain-based systems and applications. You can
                  look for{" "}
                  <a
                    href="https://cryptojobslist.com/blockchain-developer"
                    target="_blank"
                  >
                    Blockchain Developer jobs here.
                  </a>
                </p>
                <p>
                  <strong>2. Crypto Trader:</strong> A cryptocurrency trader
                  buys and sells digital currency to increase profits. Companies
                  in the Web3 space often need Traders to increase their
                  earnings and manage clients portfolios. Take a look at some{" "}
                  <a href="https://cryptojobslist.com/trader" target="_blank">
                    Crypto Trader jobs here!
                  </a>
                </p>
                <p>
                  <strong>3. Cryptocurrency Analyst:</strong> They are in charge
                  of examining market movements and advising clients on
                  investments. If you are looking at this position think about
                  it as a TikToker trying to be famous by abusing trends (Oh no,
                  no, no) but with money! You can look for{" "}
                  <a href="https://cryptojobslist.com/analyst" target="_blank">
                    Cryptocurrency Analyst jobs here.
                  </a>
                </p>
                <p>
                  <strong>4. Compliance Officer:</strong> Ensures sure that the
                  business and workers abide by cryptocurrency-related
                  regulations. FTX really needed one of those! If you get the
                  joke, we are sorry. Take a look at some{" "}
                  <a
                    href="https://cryptojobslist.com/compliance-office"
                    target="_blank"
                  >
                    Compliance Officer jobs here!
                  </a>
                </p>
                <p>
                  <strong>5. Marketing and PR:</strong> They’re in charge of
                  drawing attention to the business, its goods, and services.
                  And no, Logan Paul would not be a good example of this role.
                  Take a{" "}
                  <a
                    href="https://cryptojobslist.com/marketing"
                    target="_blank"
                  >
                    look at some Marketing and PR jobs here!
                  </a>
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_b568b211a5/giphy_b568b211a5.gif"
                    width="480"
                    height="270"
                    alt="https://media.giphy.com/media/D2TCvEifE5654VCkkx/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>
                  <strong>6. Customer Support:</strong> helps clients with
                  concerns and questions related to products and services. In
                  this case, we are talking about Crypto products and services.
                  If you are good at dealing with people (unlike the writer of
                  this FAQ) this is a good way to enter web3! Take a{" "}
                  <a
                    href="https://cryptojobslist.com/customer-support"
                    target="_blank"
                  >
                    look at some Customer Support jobs here!
                  </a>
                </p>
                <p>
                  <strong>7. Cybersecurity Specialist:</strong> A cybersecurity
                  specialist is in charge of protecting the company and clients
                  from exploits. You are the one in charge that no hot singles
                  appear in the area! No hacker shall pass! You can{" "}
                  <a href="https://cryptojobslist.com/security" target="_blank">
                    look for Cybersecurity Specialist jobs here.
                  </a>
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_4bd467f090/giphy_4bd467f090.gif"
                    width="400"
                    height="194"
                    alt="https://media.giphy.com/media/8abAbOrQ9rvLG/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>
                  <strong>8. Operations and Administration:</strong> accountable
                  for the day-to-day management of the business. It can be the
                  administration of people, financial matters, and other
                  administrative duties. Of course, you get to use the remaining
                  of the monthly budget for a killer breakfast! You can{" "}
                  <a
                    href="https://cryptojobslist.com/operations"
                    target="_blank"
                  >
                    look for Operations and Administration jobs here.
                  </a>
                </p>
                <p>
                  This is not an exhaustive list, and new job roles are emerging
                  as the industry continues to evolve and grow.
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
                What skills are required for Crypto Jobs?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  While some people make <strong>Crypto/Web3</strong> look easy,
                  there is a lot you should know before getting a job in the
                  fastest-evolving industry. This is a small list we made for
                  you to see if you have what you need to be the next CZ!
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Technical skills:</strong> everything related to
                      Cryptocurrency/Web3 started with coding! Bitcoin was the
                      miracle that gave birth to crypto, it gained fame thanks
                      to its usefulness and technicality. It needed no
                      influencers shilling behind it. For roles such as
                      blockchain developer, a strong background in computer
                      science is essential.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mathematical and analytical skills:</strong> For
                      some roles, high school math wont be enough! You need to
                      have some sort of math agility. At least for roles such as
                      Trader, Analyst, etc. If you understand financial markets,
                      you can go far. Dont forget, some roles dont need too
                      much math (too little is still too much math if you ask
                      me)
                    </p>
                  </li>
                </ul>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_0d96b359d3/giphy_0d96b359d3.gif"
                    width="504"
                    height="322"
                    alt="https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Problem-solving:</strong> In Crypto,
                      problem-solving skills are king for all roles. While some
                      need you to solve complex technical problems (devs,
                      traders, etc.) some others need less technical solutions.
                      Marketing, community management, and business development
                      need problem solvers as well! Whichever the role, data is
                      always something you can rely on!
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Communication skills:</strong> Whether you are
                      technical or non-technical, communication is a must. If
                      you are a good communicator, you should be able to explain
                      complex concepts to most people you know. Most problems in
                      the industry can be classNameified as miscommunications.
                      We can all agree you should stop pressing enter whenever
                      you write a sentence in Telegram and write a whole
                      paragraph!{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Attention to detail:</strong> Your significant
                      other is not the only one who wants you to observe every
                      detail of their new hairstyle! Crypto and Web3 need you to
                      pay attention. In roles like compliance and cybersecurity,
                      where an oopsie can have serious repercussions.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Adaptability and flexibility:</strong> Like Clint
                      Eastwood said once, Improvise, adapt, overcome. Crypto
                      and Web3 are like a growing babies: they change clothes
                      often. You need to learn and understand new tech and
                      protocols when they start coming out. You also need to
                      watch more news than your average 70-year-old, every day
                      in crypto is a month in normal peoples life!
                    </p>
                  </li>
                </ul>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_65446910d1/giphy_65446910d1.gif"
                    width="500"
                    height="396"
                    alt="https://media.giphy.com/media/c2pOELjarKcU/giphy.gif"
                    loading="lazy"
                  />
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
                What is the average salary for Crypto Jobs?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  Alright, lets scratch that itch quickly: Crypto and Web3 have
                  well-paid salaries! Not only can you make money from trading
                  (this is not financial advice) but working in Crypto. Look at
                  these Crypto Salaries:
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/blockchain-developer"
                          target="_blank"
                        >
                          Blockchain developer:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$75,000 to $150,000</strong> per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/trader"
                          target="_blank"
                        >
                          Crypto trader:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$70,000 to $150,000</strong> per year, with top
                      traders earning much more.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/analyst"
                          target="_blank"
                        >
                          Cryptocurrency analyst
                        </a>
                        :
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$75,000 to $150,000</strong> per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/compliance-office"
                          target="_blank"
                        >
                          Compliance officer:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$75,000 to $150,000</strong> per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/marketing"
                          target="_blank"
                        >
                          Marketing and PR:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$50,000 to $100,000</strong> per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/security"
                          target="_blank"
                        >
                          Cybersecurity specialist:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$90,000 to $200,000</strong> per year.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        <a
                          href="https://cryptojobslist.com/operations"
                          target="_blank"
                        >
                          Operations and administration:
                        </a>
                      </strong>{" "}
                      average salary ranges from{" "}
                      <strong>$50,000 to $100,000</strong> per year.
                    </p>
                  </li>
                </ul>
                <p>
                  Aint bad right? Wait, <strong>theres more!</strong>
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_8f24fe6ddf/giphy_8f24fe6ddf.gif"
                    width="480"
                    height="270"
                    alt="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJiOTM1NTE1NGU5YjAzMGM3MjkzZWE5NmE3YmY5OTRjNjIxNzkxZiZjdD1n/izywsUxDbxvdJbOSfy/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>
                  There are a lot of positions that we havent covered, go to
                  this section where you can{" "}
                  <a href="https://cryptojobslist.com/salaries" target="_blank">
                    search for any salary you want!
                  </a>{" "}
                  Youre welcome.
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
                Where to find Crypto Jobs?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  <strong>Here</strong> at{" "}
                  <strong>
                    <a href="https://cryptojobslist.com/" target="_blank">
                      cryptojobslist.com
                    </a>
                    !
                  </strong>{" "}
                  Duh?! We are the best job board website dedicated only to
                  Crypto/Web3 jobs. However, in the super weird case you
                  couldnt find your dream job at cryptojobslist.com, take some
                  tips to find it:
                </p>
                <p>
                  <strong>Networking:</strong> Attend conferences, meetups, and
                  events to meet people in the industry and find job
                  opportunities. Joining industry-specific groups on LinkedIn
                  and other social media platforms can also help you. You can
                  find our socials, where we post job opportunities and other
                  people are in search of talent.
                </p>
                <p>
                  <strong>Company websites:</strong> Visit the websites of
                  companies in the cryptocurrency industry and look for career
                  or job sections. Not all companies are smart enough to use
                  cryptojobslist.com
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/giphy_072553cb1d/giphy_072553cb1d.gif"
                    width="245"
                    height="187"
                    alt="https://media.giphy.com/media/qmfpjpAT2fJRK/giphy.gif"
                    loading="lazy"
                  />
                </p>
                <p>Some of them let you apply through their website.</p>
                <p>
                  <strong>Referrals:</strong> Request recommendations from
                  friends, relatives, or coworkers to see if they are aware of
                  any job openings. Personal recommendations can be a helpful
                  tool for finding work opportunities.
                </p>
                <p>
                  <strong>Recruiters:</strong> We know they are scary people.
                  Nonetheless, they are always looking for talented people.
                  Think about talking with recruiters who are knowledgeable
                  about the cryptocurrency sector. They can aid you in locating
                  work opportunities that fit your qualifications and
                  experience.
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
                Whats the difference between Blockchain Jobs, Cryptocurrency
                Jobs and Web3 Jobs?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  Some use words Blockchain, Cryptocurrency and Crypto
                  interchangeably, however there is some minor differences
                  between them. Blockchain is a broader technology, or a set of
                  technologies, while cryptocurrencies is one (quite a major
                  one) application that leverages blockchain technology. So
                  whats the difference between Blockchain Jobs and
                  Cryptocurrency Jobs, you may ask.{" "}
                  <strong>Blockchain jobs</strong> are career opportunities in a
                  broader spectrum of companies - they might be enterprise
                  blockchain jobs, they might be working with a consensus level
                  blockchain technologies. E.g. blockchain technology in supply
                  chain industry is rather different from blockchain
                  applications in cryptocurrency industry. There might be quite
                  a bit of overlap tho. <strong>Cryptocurrency jobs</strong>, on
                  the other hand, are crypto opportunities in cryptocurrency
                  focused startups. They might be jobs in DeFi or jobs in NFT
                  startups. A few years ago wed see more jobs in L1, protocol
                  level foundations and cryptocurrency projects. Nowadays most
                  cryptocurrency jobs are in companies that build on top of
                  programmable blockchains, such as{" "}
                  <a href="https://cryptojobslist.com/ethereum" target="_blank">
                    Ethereum
                  </a>
                  ,{" "}
                  <a href="https://cryptojobslist.com/solana" target="_blank">
                    Solana
                  </a>
                  ,{" "}
                  <a href="https://cryptojobslist.com/bnb" target="_blank">
                    BNB
                  </a>{" "}
                  or others.
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
                Why was Crypto Jobs List founded?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>Heya! 👋</p>
                <p>
                  Thanks for scrolling all the way to the end of the page. Once
                  again, I’m excited to welcome you to Crypto Jobs List — the
                  best place on the Internet to find and post blockchain jobs,
                  crypto jobs and web3 jobs!
                </p>
                <p>
                  Ive started this job board back in end of September 2017, when
                  I was looking for engineering jobs in cryptocurrency companies
                  myself. I had to jump from site to site, looking for positions
                  in various exchanges, wallets, and research projects.
                  Opportunities were scattered all over the place and pretty
                  hard to come by. So I thought it would be cool to have a
                  centralized (the irony 😅 ) site with all the positions. I
                  thought no one will care about the job board and it’ll die off
                  in a week, but, apparently more and more people cared enough
                  about it to start applying to jobs, sharing Crypto Jobs List
                  with friends and, of course, companies started listing their
                  job posts.
                  <br />
                </p>
                <p>
                  Today I hope you are enjoying the site, applying to jobs and
                  getting response from hundreds of crypto startups that have
                  listings on CJL to day.
                  <br />
                </p>
                <p>
                  I strongly believe that blockchain technology and
                  cryptocurrencies are still in their infancy stages, almost
                  like the internet in 1990s. The “Facebooks” and “Googles” of
                  crypto-era are yet to be founded and I believe that the only
                  way to grow this industry is to stop checking coin prices
                  every morning, and start buidling the technology, products and
                  companies that will fuel the coin market growth.
                  <br />
                </p>
                <p>
                  I suggest you apply to the blockchain jobs listed on Crypto
                  Jobs List, signup to our newsletter and follow up on social
                  media — to stay on top of the latest career opportunities.
                  <br />
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
                How does the Web3 recruitment process look like?
              </h2>
            </summary>
            <div
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="jsx-887c11ada4159cda px-5 pb-5 mt-2 dark:opacity-90"
            >
              <div itemProp="text" className="jsx-887c11ada4159cda">
                <p>
                  The fundamental recruitment process in Web3 may involve
                  multiple stages, such as initial screening, technical
                  assessments, coding challenges, and interviews with technical
                  and non-technical teams.{" "}
                </p>
                <p>
                  These can vary greatly depending upon the role itself,
                  seniority of the position, the project, location and other
                  such factors.
                </p>
                <p>
                  Before you get to hear the magic words Youre hired, here is
                  a typical recruitment process that you can expect to go
                  through:
                </p>
                <p>
                  <img
                    src="https://storage.googleapis.com/cjl-strapi-media/recruited_695a2f778c/recruited_695a2f778c.gif"
                    width="480"
                    height="284"
                    alt="recruited.gif"
                    loading="lazy"
                  />
                </p>
                <p>
                  <strong>Job Posting and Application:</strong> Companies start
                  by creating a detailed job posting that outlines the roles
                  responsibilities, required skills, and qualifications. This
                  job posting is then published on platforms like this.
                </p>
                <p>
                  <strong>Resume Screening:</strong> Recruiters then review the
                  applications to shortlist candidates who meet the criteria
                  outlined in the job posting. They assess the academic
                  backgrounds, work experience, technical skills, and any prior
                  experience in the Web3 or blockchain space.
                </p>
                <p>
                  <strong>Initial Screening:</strong> Shortlisted candidates
                  undergo an initial screening process, which may include a
                  phone or video call. During this stage, recruiters assess your
                  motivation, communication skills, and cultural fit with the
                  project/company.
                </p>
                <p>
                  <strong>Technical Assessment:</strong> For technical roles,
                  candidates are often asked to complete a technical assessment
                  or coding challenge related to the role they are applying for.
                  This step helps evaluate their hands-on skills and
                  problem-solving abilities.
                </p>
                <p>
                  <strong>Interviews:</strong> Qualified candidates proceed
                  through a series of interviews. These interviews typically
                  involve technical rounds conducted by experienced Web3
                  professionals to evaluate the expertise and knowledge.{" "}
                </p>
                <p>
                  If you are applying for a non-technical role then you might
                  have an interview with a team lead to assess your domain
                  knowledge and abilities.
                </p>
                <p>
                  Non-technical interviews with HR or hiring managers may focus
                  on cultural alignment and soft skills.
                </p>
                <p>
                  <strong>Reference Checks:</strong> Some companies may reach
                  out to the candidates references to validate their work
                  history, skills etc.
                </p>
                <p>
                  <strong>Offer and Negotiation:</strong> After a successful
                  interview process, the project extends an offer to the chosen
                  candidate. This offer includes details about compensation,
                  benefits, and other relevant terms of employment. There may be
                  a negotiation phase to reach a mutually agreeable arrangement.
                </p>
                <p>
                  <strong>Onboarding:</strong> Once the candidate accepts the
                  offer, the onboarding process begins, during which the new
                  hire is introduced to the company culture, tools, and
                  projects. They may receive training to ramp up their knowledge
                  of the companys specific stack.
                </p>
                <p>
                  As you can see the overall recruitment process in Web3 is
                  similar to Web2 but companies and projects like to modify this
                  greatly based on their needs and internal processes.
                </p>
                <p>
                  In Web3 you can expect great flexibility and variation from
                  one company to other when it comes to hiring processes.
                </p>
              </div>
            </div>
          </details>
        </div>
      </article>
    </section>
  );
}
