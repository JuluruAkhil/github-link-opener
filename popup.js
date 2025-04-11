document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on GitHub and update UI accordingly
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0]
    const statusMessage = document.getElementById("statusMessage")

    if (activeTab && activeTab.url && activeTab.url.includes("github.com")) {
      statusMessage.textContent = "Extension is active on GitHub"
      statusMessage.style.backgroundColor = "#2ea44f"
    } else {
      statusMessage.textContent = "Extension only works on GitHub.com"
      statusMessage.style.backgroundColor = "#d73a49"
    }
  })
})
