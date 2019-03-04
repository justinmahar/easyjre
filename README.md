# Easy JRE

This tool allows you to easily create a custom OpenJDK JRE using jlink!

To get started, visit the following site:

https://justinmahar.github.io/easyjre/

The project was created using React and is hosted on GitHub pages.

# Contributions

If you'd like the contribute to the project, feel free to send a pull request. 

You can also easily add new JDKs to the project. See below.

## Adding New JDKs

For this project, JDK information is stored in the following file: `./src/json/vendors.json` ([view file](https://raw.githubusercontent.com/justinmahar/easyjre/master/src/json/vendors.json))

Each vendor has an array of JDKs, each having a version, a JDK download link, a list of JDK modules to included by default, and a list of JDK modules excluded by default. You can get a list of all modules available for a particular JDK by running the command `java --list-modules`. This is how I determined which modules to include for each JDK available.

If you'd like to add a new JDK, fork the project and send me a pull request.

Happy JRE building!

# License 

Copyright &copy; Justin Mahar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.