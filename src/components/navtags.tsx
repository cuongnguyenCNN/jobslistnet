export default function NavTags() {
  return (
    // <div>
    //   <nav
    //     role="navigation"
    //     className="no-scrollbar capitalize px-2 sm:p-0 my-4 flex justify-start gap-2 sm:gap-2 text-center whitespace-nowrap flex-wrap leading-6 sm:px-2 container lg:max-w-[min(1500px,98dvw)] mx-auto my-2"
    //   >
    //     <button className="category relative !overflow-visible !normal-case">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         stroke-width="0"
    //         viewBox="0 0 16 16"
    //         className="mr-1"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path>
    //       </svg>
    //       For you
    //       <div className="absolute w-2 h-2 bg-[red] rounded-full animate-ping -top-1 -right-1"></div>
    //       <div className="absolute w-2 h-2 bg-[red] rounded-full -top-1 -right-1"></div>
    //     </button>
    //     <a itemProp="url" className="category" href="/remote">
    //       Remote
    //     </a>
    //     <a itemProp="url" className="category" href="/non-tech">
    //       Non Technical
    //     </a>
    //     <a itemProp="url" className="category" href="/web3">
    //       Web3
    //     </a>
    //     <a itemProp="url" className="category" href="/nft">
    //       NFT
    //     </a>
    //     <a itemProp="url" className="category" href="/solidity">
    //       Solidity
    //     </a>
    //     <a itemProp="url" className="category" href="/developer">
    //       Developer
    //     </a>
    //     <a itemProp="url" className="category" href="/marketing">
    //       Marketing
    //     </a>
    //     <a itemProp="url" className="category" href="/defi">
    //       DeFi
    //     </a>
    //     <a itemProp="url" className="category" href="/internship">
    //       Internships
    //     </a>
    //     <a itemProp="url" className="category" href="/entry-level">
    //       Entry Level
    //     </a>
    //     <a itemProp="url" className="category" href="/compliance">
    //       Compliance
    //     </a>
    //     <a itemProp="url" className="category" href="/community">
    //       Community
    //     </a>
    //     <a itemProp="url" className="category" href="/designer">
    //       Designer
    //     </a>
    //     <a itemProp="url" className="category" href="/trading">
    //       Trading
    //     </a>
    //     <a itemProp="url" className="category" href="/zk">
    //       Zero Knowledge
    //     </a>
    //     <a itemProp="url" className="category" href="/ethereum">
    //       Ethereum
    //     </a>
    //     <a itemProp="url" className="category" href="/rust">
    //       Rust
    //     </a>
    //     <a itemProp="url" className="category" href="/solana">
    //       Solana
    //     </a>
    //     <a itemProp="url" className="category" href="/legal">
    //       Legal
    //     </a>
    //     <a itemProp="url" className="category" href="/aml">
    //       Anti Money Laundering
    //     </a>
    //     <a itemProp="url" className="category" href="/react">
    //       React
    //     </a>
    //     <a itemProp="url" className="category" href="/c-plus-plus">
    //       C++
    //     </a>
    //     <a itemProp="url" className="category" href="/content-writer">
    //       Content Writer
    //     </a>
    //     <a itemProp="url" className="category" href="/human-resources">
    //       Human Resources
    //     </a>
    //     <a itemProp="url" className="category" href="/content">
    //       Content
    //     </a>
    //     <a itemProp="url" className="category" href="/meme">
    //       Memes
    //     </a>
    //     <a itemProp="url" className="category" href="/security">
    //       Security
    //     </a>
    //     <a itemProp="url" className="category" href="/visa-sponsor">
    //       Visa Sponsor
    //     </a>
    //     <a itemProp="url" className="category" href="/mining">
    //       Mining
    //     </a>
    //     <a itemProp="url" className="category" href="/operations">
    //       Operations
    //     </a>
    //     <a itemProp="url" className="category" href="/director">
    //       DireCTOr
    //     </a>
    //     <a itemProp="url" className="category" href="/javascript">
    //       JavaScript
    //     </a>
    //     <a itemProp="url" className="category" href="/evm">
    //       Ethereum Virtual Machine
    //     </a>
    //     <a itemProp="url" className="category" href="/react-native">
    //       React Native
    //     </a>
    //     <a itemProp="url" className="category" href="/pay-in-bitcoin">
    //       Pay In Bitcoin
    //     </a>
    //     <a itemProp="url" className="category" href="/avalanche">
    //       Avalanche
    //     </a>
    //     <a itemProp="url" className="category" href="/discord">
    //       Discord
    //     </a>
    //     <a itemProp="url" className="category" href="/devops">
    //       DevOps
    //     </a>
    //     <a itemProp="url" className="category" href="/community-moderator">
    //       Community Moderator
    //     </a>
    //     <a itemProp="url" className="category" href="/product-manager">
    //       Product Manager
    //     </a>
    //     <a itemProp="url" className="category" href="/project-manager">
    //       Project Manager
    //     </a>
    //     <a itemProp="url" className="category" href="/bnb">
    //       BNB Chain
    //     </a>
    //     <a itemProp="url" className="category" href="/swift">
    //       Swift
    //     </a>
    //     <a itemProp="url" className="category" href="/move">
    //       Move Language
    //     </a>
    //     <a itemProp="url" className="category" href="/accounting">
    //       Accounting
    //     </a>
    //     <a itemProp="url" className="category" href="/psyops">
    //       PsyOps
    //     </a>
    //     <a itemProp="url" className="category" href="/startup">
    //       Startup
    //     </a>
    //     <a itemProp="url" className="category" href="/lead-level">
    //       Lead Level
    //     </a>
    //     <a itemProp="url" className="category" href="/cryptography">
    //       Cryptography
    //     </a>
    //     <a itemProp="url" className="category" href="/recruiter">
    //       Recruiter
    //     </a>
    //     <a itemProp="url" className="category" href="/objective-c">
    //       Objective C
    //     </a>
    //     <a itemProp="url" className="category" href="/quality-assurance">
    //       Quality Assurance
    //     </a>
    //     <a itemProp="url" className="category" href="/hedge-fund">
    //       Hedge Fund
    //     </a>
    //     <a itemProp="url" className="category" href="/dex">
    //       DEX
    //     </a>
    //     <a itemProp="url" className="category" href="/cosmos">
    //       Cosmos
    //     </a>
    //     <a itemProp="url" className="category" href="/engineering-manager">
    //       Engineering Manager
    //     </a>
    //     <a itemProp="url" className="category" href="/ruby">
    //       Ruby
    //     </a>
    //     <a itemProp="url" className="category" href="/public-relations">
    //       Public Relations
    //     </a>
    //     <a itemProp="url" className="category" href="/android">
    //       Android Developer
    //     </a>
    //     <a itemProp="url" className="category" href="/scala">
    //       Scala
    //     </a>
    //     <a itemProp="url" className="category" href="/refi">
    //       ReFi
    //     </a>
    //     <a itemProp="url" className="category" href="/polkadot">
    //       Polkadot
    //     </a>
    //     <a itemProp="url" className="category" href="/frontend">
    //       Frontend
    //     </a>
    //     <a itemProp="url" className="category" href="/sre">
    //       Site Reliability Engineering
    //     </a>
    //     <a itemProp="url" className="category" href="/contract">
    //       Contract
    //     </a>
    //     <a itemProp="url" className="category" href="/copywriter">
    //       Copywriter
    //     </a>
    //     <a itemProp="url" className="category" href="/ruby-on-rails">
    //       Ruby On Rails
    //     </a>
    //     <a itemProp="url" className="category" href="/manager">
    //       Manager
    //     </a>
    //     <a itemProp="url" className="category" href="/translator">
    //       Translator
    //     </a>
    //     <a itemProp="url" className="category" href="/django">
    //       Django
    //     </a>
    //     <a itemProp="url" className="category" href="/full-stack">
    //       Full-stack Developer
    //     </a>
    //     <a itemProp="url" className="category" href="/technical-writer">
    //       Technical Writer
    //     </a>
    //     <a itemProp="url" className="category" href="/open-source">
    //       Open Source
    //     </a>
    //     <a itemProp="url" className="category" href="/machine-learning">
    //       Machine Learning
    //     </a>
    //     <a itemProp="url" className="category" href="/kubernetes">
    //       Kubernetes
    //     </a>
    //     <a itemProp="url" className="category" href="/devrel">
    //       Developer Relations
    //     </a>
    //     <a itemProp="url" className="category" href="/ios">
    //       iOS
    //     </a>
    //     <a itemProp="url" className="category" href="/java">
    //       Java
    //     </a>
    //     <a itemProp="url" className="category" href="/data-analyst">
    //       Data Analyst
    //     </a>
    //     <a itemProp="url" className="category" href="/venture-capital">
    //       Venture Capital
    //     </a>
    //     <a itemProp="url" className="category" href="/quant">
    //       Quant
    //     </a>
    //     <a itemProp="url" className="category" href="/event-marketing">
    //       Event Marketing
    //     </a>
    //     <a itemProp="url" className="category" href="/gamefi">
    //       GameFi
    //     </a>
    //     <a itemProp="url" className="category" href="/data">
    //       Data
    //     </a>
    //     <a itemProp="url" className="category" href="/fantom">
    //       Fantom
    //     </a>
    //     <a itemProp="url" className="category" href="/smart-contract">
    //       Smart Contract
    //     </a>
    //     <button className="text-foreground opacity-80 hover:opacity-100 text-[1rem] hover:underline inline-block sm:w-auto sm:mx-0 sm:ml-1">
    //       Show less
    //     </button>
    //   </nav>
    // </div>
    <nav className="no-scrollbar px-2 my-4 flex gap-2 flex-wrap container mx-auto">
      <button className="category bg-primary text-white font-semibold shadow">
        🔥 Recommended for you
      </button>

      {/* Work type */}
      <a className="category" href="/remote">
        Remote
      </a>
      <a className="category" href="/contract">
        Contract
      </a>

      {/* Level */}
      <a className="category" href="/internship">
        Internships
      </a>
      <a className="category" href="/entry-level">
        Entry Level
      </a>
      <a className="category" href="/lead-level">
        Lead Level
      </a>

      {/* Core .NET */}
      <a className="category" href="/dotnet">
        .NET
      </a>
      <a className="category" href="/csharp">
        C#
      </a>
      <a className="category" href="/backend">
        Backend
      </a>
      <a className="category" href="/full-stack">
        Full-stack
      </a>

      {/* Tech stack */}
      <a className="category" href="/javascript">
        JavaScript
      </a>
      <a className="category" href="/react">
        React
      </a>
      <a className="category" href="/sql">
        SQL
      </a>
      <a className="category" href="/api">
        API
      </a>

      {/* Infra */}
      <a className="category" href="/devops">
        DevOps
      </a>
      <a className="category" href="/kubernetes">
        Kubernetes
      </a>
      <a className="category" href="/sre">
        SRE
      </a>
    </nav>
  );
}
