# Download Contacts Chrome Extension

## Overview

The Download Contacts Chrome Extension is a handy tool that allows you to easily download the contacts from an open WhatsApp group as a CSV file. This extension simplifies the process of saving contact information, making it useful for various purposes such as contact management and data analysis.

## Author

- **Author**: Marcos Rocha

## Getting Started

To use this extension, follow the instructions below:

1. Clone or download this repository to your local machine.

2. Open Google Chrome.

3. Navigate to `chrome://extensions/` in your browser.

4. Enable the "Developer mode" option located at the top right of the page.

5. Click the "Load unpacked" button and select the directory where you cloned or downloaded the extension.

6. The extension will now be installed and ready for use.

## How to Use

Once the extension is installed, you can easily download the contacts from a WhatsApp group using the following steps:

1. Open Google Chrome and navigate to the WhatsApp group whose contacts you want to download.

2. Click on the "Download Contacts" extension icon located in the browser toolbar.

3. The extension will collect the contact information and save it as a CSV file.

4. The CSV file will be named after the group and include a timestamp, making it easy to identify.

## Code Structure

- `contentScript.js`: This script is injected into the WhatsApp web page and is responsible for scraping contact information, transforming it into a CSV format, and creating a download link.

- `manifest.json`: The manifest file defines the extension's properties, such as name, version, description, and permissions.

- `popup.html`: This HTML file defines the popup interface for the extension, providing a "Download Contacts" button.

- `popup.js`: This script handles the user's click on the "Download Contacts" button, executing the content script.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Feedback and Contributions

If you have any feedback, suggestions, or would like to contribute to this project, please [create an issue](https://github.co/dev-marcos/WhatsApp-Contacts-Downloader/issues) or [submit a pull request](https://github.com/dev-marcos/WhatsApp-Contacts-Downloader/pulls).

Thank you for using the Download Contacts Chrome Extension! We hope you find it useful for managing and analyzing your WhatsApp group contacts.
