const SiteMetadata = {
  title: `Alex V. Nilsson`,
  description: `Här samlar jag lite information om mina projekt som jag skapar under/för min utbildning.`,
  author: `Alexander V. Nilsson`,
}

SiteMetadata.copyright = {
  year: new Date().getFullYear(),
  holder: SiteMetadata.author,
}

module.exports = SiteMetadata
