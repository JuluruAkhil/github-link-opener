# GitHub Link Opener Chrome Extension

A simple Chrome extension that automatically opens non-GitHub links in new tabs when browsing GitHub.com. This keeps you on GitHub while still allowing you to easily access external resources.

## Features

- Only activates on GitHub.com pages
- Automatically opens non-GitHub links in new tabs
- Works with all types of links (absolute, relative, and root-relative)
- No configuration needed - just install and browse GitHub as usual
- Minimal permissions - only requires access to GitHub.com

## Installation

### From Chrome Web Store (Recommended)

1. Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/kmedjapbknhaihmnpdanijibjaigedlm)
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)

1. Clone or download this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The extension should now be installed and visible in your extensions list

## Usage

1. Navigate to any GitHub.com page
2. The extension will automatically open any non-GitHub links in new tabs when clicked
3. No additional action is needed - just browse GitHub as usual!

## How It Works

The extension detects when you click on a link on GitHub.com. If the link points to a non-GitHub website, it:

1. Prevents the default navigation behavior
2. Opens the link in a new tab
3. Keeps you on the current GitHub page

This is particularly useful when:

- Reading documentation that references external resources
- Following links to related projects or tools
- Accessing external documentation without losing your place on GitHub

## Privacy

This extension:

- Only runs on GitHub.com pages
- Does not collect or transmit any user data
- Requires minimal permissions - only needs access to GitHub.com
- Does not track browsing history or store any data

## Files in this Extension

- `manifest.json`: Extension configuration
- `popup.html`: The extension popup UI
- `popup.js`: JavaScript for the popup functionality
- `content.js`: Code that runs on GitHub pages
- `images/`: Directory containing extension icons

## Customization

To modify the extension's functionality, edit the `content.js` file to change how it interacts with GitHub pages.

## License

MIT License - See LICENSE file for details

## Support

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/JuluruAkhil/github-link-opener/issues) on GitHub.
