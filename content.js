// This script only runs on GitHub.com pages due to the manifest.json configuration
console.log("GitHub Link Opener extension is active on this page")

// Function to check if a URL is from GitHub
function isGitHubUrl(url) {
  return url.includes("github.com") || url.includes("github.dev")
}

// Function to convert relative URL to absolute URL
function getAbsoluteUrl(href) {
  // If it's already an absolute URL, return it
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href
  }

  // If it's a relative URL starting with '/', it's relative to the domain root
  if (href.startsWith("/")) {
    return "https://github.com" + href
  }

  // If it's a relative URL without '/', it's relative to the current path
  const currentPath = window.location.pathname
  const currentDir = currentPath.substring(0, currentPath.lastIndexOf("/") + 1)
  return "https://github.com" + currentDir + href
}

// Add event listener to all links on the page
document.addEventListener("click", function (event) {
  // Find the closest anchor tag that was clicked
  const link = event.target.closest("a")

  // If a link was clicked
  if (link) {
    const href = link.getAttribute("href")

    // Skip if no href or if it's a fragment/anchor link
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) {
      return
    }

    // Get the absolute URL
    const absoluteUrl = getAbsoluteUrl(href)

    // Check if it's not a GitHub URL
    if (!isGitHubUrl(absoluteUrl)) {
      // Prevent the default action
      event.preventDefault()

      // Open the link in a new tab
      window.open(absoluteUrl, "_blank")
    }
  }
})
