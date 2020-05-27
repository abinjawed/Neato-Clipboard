# Neato-Clipboard
Neato! is a clipboard that stores frequently used lines of text, which can be copied on click and pasted as desired to any text field.

Also, for record-keeping purposes, each on-click activity is logged into the console. 
**NOTE Please see further information under** ###Data


### Install
Step One: Download the files from this repository into a folder: https://github.com/abinjawed/Neato-Clipboard

Step Two: In a Google Chrome browser, navigate to: 
                                        The Ellipsis (aka, the 3-dot button) 
                                          > Select "More Tools" 
                                            > Extensions 
                                               > Switch the dial to enable "Developer Mode" 
                                                  > Select "Load Unpacked"
                                                     > Select the downloaded files from Step One.

### Code
This clipboard is essentially an dropdown button in `index.html` that expands on-hover to include lines of text in individual text fields.

The `script.js` file allows for on-click copy. Another feature (optional) is the static nature of the text field allows for text 
edit and modification.
**NOTE: Please see further information under** ###Data

The `manifest.json` file is absolutely essential for this extension to be uploaded.

### Run
This can be downloaded as a Google Chrome extension.

### Data
The **logged activites** are only stored during each session while clipboard is opened.
Any editing in the **text fields** will only be stored during each session while clipboard is opened.
