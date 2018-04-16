# React/Redux Training #

This repo is a step-by-step guide that accompanies the slides at [http://react-learning-hour.netlify.com](http://react-learning-hour.netlify.com) and [http://redux-learning-hour.netlify.com](http://redux-learning-hour.netlify.com).

There are videos of the live lessons as well, ask whoever shared this with you for a copy of the videos.

## How do I use this repo? ##

* If you want to code along for the Hello World example, pull the Basic-Configuration branch
* If you want to start on the Tic-Tac-Toe challenges, pull the Game-Setup branch
* If you want to start on the Redux challenge, pull the Redux-Starter branch


## How do I get set up? ##

### System Prerequisites: ###
* Node v8.9.4
* Yarn v1.x

**Note:** Newer versions have likely been released since this demo was written. It is known to work with the versions specified below, so if you're able to get those, that's your best bet. If you get a newer version of node or yarn that should be ok, but in case you run into issues, try to fall back to the specified version.

1. **Install version 8.9.4 of Node (latest stable)** (includes NPM as well).
  1. Check if you currently have node installed by running: `node -v`
    1. If you DON’T already have a version installed, install v8.9.4 from [https://nodejs.org/en/](https://nodejs.org/en/) and you’re set
    2. If you DO have an older version installed, see if you have Node Version Manager installed by running on a Mac: `nvm --version`, or on a PC: `nvm version`.  If not:
      * To install NVM on Mac, run: `curl -o- [https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh|https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh] | bash`
      * To install NVM on a PC, download it [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip) and install
    3. Once you’ve verified you have NVM installed, run: `nvm install v8.9.4` to download the latest Node
    4. You may need to run `nvm use 8.9.4` to switch over to the new version
  2. If you just installed things, reopen your command line since your PATH may have been updated, and confirm that running `node -v` gives you 8.9.4
  3. To confirm that NPM was installed properly as well, running `npm -v` should show 5.6.0
2. **Install Yarn** for managing packages
  1. Mac: use Homebrew to install Yarn: `brew install yarn --without-node`
    * If you haven’t used Homebrew before, install it with `usr/bin/ruby -e "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/master/install|https://raw.githubusercontent.com/Homebrew/install/master/install])"`
  2. PC: download Yarn installer:[https://yarnpkg.com/lang/en/docs/install/](https://yarnpkg.com/lang/en/docs/install/)
  3. Confirm that your installation worked by running `yarn -v`
3. **Install Visual Studio Code** (Recommended text editor)
  1. Download from[https://code.visualstudio.com/](https://code.visualstudio.com/)
  2. Install the extensions **ESLint** and **EditorConfig for VS Code** (shortcut Ctrl-Shift-X to bring up the Extensions search panel)
4. **Install React Developer Tools** browser extension
  * Chrome: [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  * Firefox: [https://addons.mozilla.org/en-US/firefox/addon/react-devtools/](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Debugging ###
After downloading a branch, install the dependencies by opening a terminal/command line to the project root and running:
`yarn`

Depending on what stage of the demo you pull, you may be able to run:
`yarn start`
to start the webpack dev server, then open a browser at [http://localhost:8080](http://localhost:8080) to view it.
