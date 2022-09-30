// theme.config.js
export default {    
    projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
    // projectLinkIcon: <Gitlab />, TODO
    docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
    titleSuffix: '– Community',
    nextLinks: true,
    prevLinks: true,
    search: false,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: false,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © SyntropicA`,
    // footerEditLink: `Edit this page on GitHub`,
    logo: (
      <>  
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-800">SyntropicA</span>
        {/* <svg>...</svg> */}
        {/* <span>SyntropicA Documentation</span> */}
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nextra: the next docs builder" />
        <meta name="og:title" content="Nextra: the next docs builder" />
      </>
    ),
  }