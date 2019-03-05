# Easy JRE

This tool allows you to easily create a custom OpenJDK JRE using `jlink`!

To get started, visit the following site:

- https://justinmahar.github.io/easyjre/

The project was created using React and is hosted on GitHub pages. Coffee icon by [Feather](https://feathericons.com/).

# Contributions

If you'd like the contribute to the project, feel free to send a pull request. 

You can also easily add new JDK vendors to the project. See below.

## Adding New JDK Vendors

For this project, JDK information is stored in the following file: `public/vendors.json` ([view file](https://github.com/justinmahar/easyjre/blob/master/public/vendors.json))

If you'd like to add a new vendor, fork the project and send me a pull request.

Happy JRE building!

# Development

This project requires Node.js; I used v9.11.2.

Clone the project and run `npm install` to install the dependencies. Run `npm start` to start the development server.

## npm scripts

### `npm start`

Starts the development server.

### `npm run build`

Builds the React app to the `build` directory.

### `npm run deploy`

Deploys the built project in the `build` directory to the GitHub pages site `homepage` specified in `package.json`. The script uses the `gh-pages` dependency to do all the heavy lifting. Make sure you `npm run build` before deploying.

# License 

Copyright &copy; Justin Mahar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.