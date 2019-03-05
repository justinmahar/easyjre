import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.initState();
  }

  initState() {
    // Load vendors from JSON file
    let jsonUrl = "vendors.json";
    let request = new XMLHttpRequest();
    request.open("GET", jsonUrl, false);
    request.send(null);
    let jsonResponseText = request.responseText;
    let vendors = JSON.parse(jsonResponseText);

    let selectedVendorIndex = 0;

    let jreIncludedModules = [];
    let jreExcludedModules = [];

    this.state = {
      vendors: vendors.vendors,
      selectedVendorIndex: selectedVendorIndex,
      jreIncludedModules: jreIncludedModules,
      jreExcludedModules: jreExcludedModules,
      optionCompressionType: 2,
      optionExcludeHeaderFiles: true,
      optionExcludeManPages: true,
      optionBindServices: false,
      jdkVersion: "",
      optionJdkBinPath: ".",
      optionModulePath: "../jmods",
      optionAdditionalModules: ""
    };
  }

  handleProductChange(event) {
    let selectedVendorIndex = event.target.value;

    this.setState({
      selectedVendorIndex: selectedVendorIndex
    });
  }

  handleCopyButtonClick(event) {
    let commandTextarea = document.getElementById("jlink-command-textarea");
    commandTextarea.select();
    document.execCommand("copy");
    event.preventDefault();
  }

  handleJlinkCommandTextareaClick(event) {
    event.target.select();
  }

  handleExcludeClick(event) {
    let value = document.getElementById("jre-included-modules").value;

    if (value.trim() !== "") {
      // Remove the selected value
      let newJreIncludedModules = this.state.jreIncludedModules.filter(
        element => {
          return element !== value;
        }
      );
      newJreIncludedModules.sort();

      let newJreExcludedModules = this.state.jreExcludedModules;
      newJreExcludedModules.push(value);
      newJreExcludedModules.sort();
      this.setState({
        jreIncludedModules: newJreIncludedModules,
        jreExcludedModules: newJreExcludedModules
      });
    }

    event.preventDefault();
  }

  handleIncludeClick(event) {
    let value = document.getElementById("jre-excluded-modules").value;

    if (value.trim() !== "") {
      // Remove the selected value
      let newJreExcludedModules = this.state.jreExcludedModules.filter(
        element => {
          return element !== value;
        }
      );
      newJreExcludedModules.sort();

      let newJreIncludedModules = this.state.jreIncludedModules;
      newJreIncludedModules.push(value);
      newJreIncludedModules.sort();
      this.setState({
        jreIncludedModules: newJreIncludedModules,
        jreExcludedModules: newJreExcludedModules
      });
    }

    event.preventDefault();
  }

  handleCompressionChange(event) {
    let newValue = event.target.value;
    this.setState({
      optionCompressionType: newValue
    });
  }

  handleExcludeHeaderFilesChange(event) {
    let newValue = event.target.checked;
    this.setState({
      optionExcludeHeaderFiles: newValue
    });
  }

  handleExcludeManPagesChange(event) {
    let newValue = event.target.checked;
    this.setState({
      optionExcludeManPages: newValue
    });
  }

  handleBindServicesChange(event) {
    let newValue = event.target.checked;
    this.setState({
      optionBindServices: newValue
    });
  }

  handleJdkBinPathChange(event) {
    let newValue = event.target.value;
    this.setState({
      optionJdkBinPath: newValue
    });
  }

  handleModulePathChange(event) {
    let newValue = event.target.value;
    this.setState({
      optionModulePath: newValue
    });
  }

  handleAdditionalModulesChange(event) {
    let newValue = event.target.value.replace(/[ ]/g, "");
    this.setState({
      optionAdditionalModules: newValue
    });
  }

  handlePasteClick(event) {
    navigator.clipboard
      .readText()
      .then(text => {
        let modules = text.split(/\r?\n/);
        let strippedModules = [];
        let jdkVersion = "";
        modules.forEach((value, index) => {
          value = value.trim();
          if (value !== "" && value.indexOf("@") >= 0) {
            jdkVersion = value.slice(value.indexOf("@") + 1);
            value = value.slice(0, value.indexOf("@"));
            strippedModules.push(value);
          }
        });

        let startsWithExclusion = "jdk.";
        let newJreExcludedModules = strippedModules.filter(element => {
          return element.startsWith(startsWithExclusion);
        });
        newJreExcludedModules.sort();

        let newJreIncludedModules = strippedModules.filter(element => {
          return !element.startsWith(startsWithExclusion);
        });
        newJreIncludedModules.sort();

        this.setState({
          jreIncludedModules: newJreIncludedModules,
          jreExcludedModules: newJreExcludedModules,
          jdkVersion: jdkVersion.trim()
        });
      })
      .catch(err => {
        console.error("Failed to read clipboard contents: ", err);
      });
  }

  handleClickCopyWindowsListModulesCommand(event) {
    let commandTextarea = document.getElementById("windows-list-command");
    commandTextarea.select();
    document.execCommand("copy");
    event.preventDefault();
  }

  handleClickCopyLinuxListModulesCommand(event) {
    let commandTextarea = document.getElementById("linux-list-command");
    commandTextarea.select();
    document.execCommand("copy");
    event.preventDefault();
  }

  render() {
    let productOptionArray = [];

    this.state.vendors.forEach((element, index) => {
      let name = element.organization + " " + element.product;
      let currOption = (
        <option value={index} key={index}>
          {name}
        </option>
      );
      productOptionArray.push(currOption);
    });

    let selectedVendor = this.state.vendors[this.state.selectedVendorIndex];

    let downloadJDKHref = selectedVendor["jdk_download_link"];

    let jreIncludedModules = this.state.jreIncludedModules;
    let jreExcludedModules = this.state.jreExcludedModules;

    let includedModulesString = "";
    let includedModulesOptionArray = [];
    jreIncludedModules.forEach((element, index) => {
      includedModulesString += element;
      if (index < jreIncludedModules.length - 1) {
        includedModulesString += ",";
      }
      let currModuleOption = (
        <option
          key={index}
          value={element}
          className="font-mono"
          title={element}
        >
          {element}
        </option>
      );
      includedModulesOptionArray.push(currModuleOption);
    });

    let optionAdditionalModules = this.state.optionAdditionalModules.trim();

    let moduleString = "";

    if (includedModulesString !== "" || optionAdditionalModules !== "") {
      moduleString = " --add-modules ";
      if (includedModulesString !== "") {
        moduleString += includedModulesString;
      }
      if (includedModulesString !== "" && optionAdditionalModules !== "") {
        moduleString += ",";
      }
      if (optionAdditionalModules !== "") {
        moduleString += optionAdditionalModules;
      }
    }

    let excludedModulesOptionArray = [];
    jreExcludedModules.forEach((element, index) => {
      let currModuleOption = (
        <option
          key={index}
          value={element}
          className="font-mono"
          title={element}
        >
          {element}
        </option>
      );
      excludedModulesOptionArray.push(currModuleOption);
    });

    let jreName = "jre";

    let jdkVersion = this.state.jdkVersion;
    if (jdkVersion != "") {
      jreName += "-" + jdkVersion;
    }

    let jreFolderName = jreName.toLowerCase().replace(/[^a-z0-9.]/g, "-");

    let outputCommandString = "--output " + jreFolderName;

    // Options
    let optionCompressionType = this.state.optionCompressionType;
    let optionExcludeHeaderFiles = this.state.optionExcludeHeaderFiles;
    let optionExcludeManPages = this.state.optionExcludeManPages;
    let optionBindServices = this.state.optionBindServices;
    let optionJdkBinPath = this.state.optionJdkBinPath.trim();
    let optionModulePath = this.state.optionModulePath.trim();

    let compressionOptionString = " --compress=" + optionCompressionType;

    let excludeHeaderFilesOptionString = "";
    if (optionExcludeHeaderFiles) {
      excludeHeaderFilesOptionString = " --no-header-files";
    }

    let excludeManPagesOptionString = "";
    if (optionExcludeManPages) {
      excludeManPagesOptionString = " --no-man-pages";
    }

    let bindServicesOptionString = "";
    if (optionBindServices) {
      bindServicesOptionString = " --bind-services";
    }

    let modulePathOptionString = "";
    if (optionModulePath !== "") {
      modulePathOptionString = " --module-path " + optionModulePath;
    }

    let jlinkCommand =
      optionJdkBinPath +
      "/jlink " +
      outputCommandString +
      compressionOptionString +
      excludeHeaderFilesOptionString +
      excludeManPagesOptionString +
      bindServicesOptionString +
      modulePathOptionString +
      moduleString;

    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue p-4">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <svg
              className="h-8 w-8 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <a href="/" className="no-underline inline-block text-white">
              <span className="font-semibold text-xl tracking-tight">
                EasyJRE
              </span>
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-teal-light hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 no-underline hover:underline"
              >
                Home
              </a>
              <a
                href="https://github.com/justinmahar/easyjre"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 no-underline hover:underline"
              >
                GitHub
              </a>
            </div>
            <div>
              <span className="font-bold inline-block text-sm px-4 py-2 leading-none text-white mt-4 lg:mt-0">
                Use EasyJRE to create an OpenJDK JRE easily with jlink!
              </span>
            </div>
          </div>
        </nav>
        <div className="text-center container mx-auto px-4">
          <br />
          <h1>EasyJRE: The Easiest Way To Create An OpenJDK JRE for Java!</h1>
          <br />

          <h3>Five easy steps:</h3>
          <br />
          <ul className="list-reset">
            <li>
              <h4>1. Select, download, and unpack your desired JDK:</h4>
              <br />
              <select
                onChange={this.handleProductChange.bind(this)}
                className="rounded shadow border"
              >
                {productOptionArray}
              </select>{" "}
              <a
                href={downloadJDKHref}
                target="_new"
                className="inline-block no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"
              >
                Download JDK &raquo;
              </a>
            </li>
            <br />
            <li>
              <h4>
                2. Copy a list of the available JDK modules by running the
                following command{" "}
                <span className="underline">in the JDK bin folder</span>:
              </h4>
          <br />
          <p className="text-sm italic">
            If you just need a general Java SE JRE for the JDK selected above, complete Steps 2 and 3.
          </p>
          <br />
          <p className="text-sm italic">
            If you plan to manually specify your JDK modules, you can skip this section and go to Step 4.
          </p>
              <br />
              <ul className="list-reset">
                <li>
                  Windows:{" "}
                  <input
                    type="text"
                    className="font-mono roman border inline-block w-1/4"
                    id="windows-list-command"
                    value=".\java --list-modules | clip"
                    readOnly
                  />{" "}
                  <button
                    className="inline-block border bg-grey-lighter p-1"
                    onClick={this.handleClickCopyWindowsListModulesCommand.bind(
                      this
                    )}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="#000000"
                        fillRule="evenodd"
                      >
                        <g id="icon-shape">
                          <path d="M12.9728369,2.59456737 C12.7749064,1.12946324 11.5193533,0 10,0 C8.48064666,0 7.2250936,1.12946324 7.02716314,2.59456737 L5,3 L5,4 L3.99406028,4 C2.89451376,4 2,4.8927712 2,5.99406028 L2,18.0059397 C2,19.1054862 2.8927712,20 3.99406028,20 L16.0059397,20 C17.1054862,20 18,19.1072288 18,18.0059397 L18,5.99406028 C18,4.89451376 17.1072288,4 16.0059397,4 L15,4 L15,3 L12.9728369,2.59456737 Z M5,6 L4,6 L4,18 L16,18 L16,6 L15,6 L15,7 L5,7 L5,6 Z M10,4 C10.5522847,4 11,3.55228475 11,3 C11,2.44771525 10.5522847,2 10,2 C9.44771525,2 9,2.44771525 9,3 C9,3.55228475 9.44771525,4 10,4 Z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  Linux/OSX:{" "}
                  <input
                    type="text"
                    className="font-mono roman border inline-block w-1/4"
                    id="linux-list-command"
                    value="./java --list-modules | pbcopy"
                    readOnly
                  />{" "}
                  <button
                    className="inline-block border bg-grey-lighter p-1"
                    onClick={this.handleClickCopyLinuxListModulesCommand.bind(
                      this
                    )}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="#000000"
                        fillRule="evenodd"
                      >
                        <g id="icon-shape">
                          <path d="M12.9728369,2.59456737 C12.7749064,1.12946324 11.5193533,0 10,0 C8.48064666,0 7.2250936,1.12946324 7.02716314,2.59456737 L5,3 L5,4 L3.99406028,4 C2.89451376,4 2,4.8927712 2,5.99406028 L2,18.0059397 C2,19.1054862 2.8927712,20 3.99406028,20 L16.0059397,20 C17.1054862,20 18,19.1072288 18,18.0059397 L18,5.99406028 C18,4.89451376 17.1072288,4 16.0059397,4 L15,4 L15,3 L12.9728369,2.59456737 Z M5,6 L4,6 L4,18 L16,18 L16,6 L15,6 L15,7 L5,7 L5,6 Z M10,4 C10.5522847,4 11,3.55228475 11,3 C11,2.44771525 10.5522847,2 10,2 C9.44771525,2 9,2.44771525 9,3 C9,3.55228475 9.44771525,4 10,4 Z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button />
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h4>3. Paste the modules here: </h4>
              <br />
              <div>
                <p>
                  <button
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                    onClick={this.handlePasteClick.bind(this)}
                  >
                    Paste
                  </button>
                </p>
              </div>
              <p>
                {jdkVersion && (
                  <span className="text-xs text-green font-bold">
                    {" "}
                    JDK {jdkVersion} ✓
                  </span>
                )}
              </p>
            </li>
          </ul>
          <br />
          <h4>
            4. Customize Your{" "}
            {selectedVendor.organization + " " + selectedVendor.product} JRE
          </h4>
          <br />
          <p className="text-sm italic">
            If you just need a general Java SE JRE for the JDK selected above, you can skip this and go to Step 5.
          </p>
          <br />
          <h5>JDK Root Modules</h5>
          <br />
          {jdkVersion !== "" && (
            <>
              <p className="text-sm italic">
                The JDK comes with many root modules which contain the JDK core
                classes. The modules prefixed with{" "}
                <code className="font-mono roman border inline-block">
                  jdk.
                </code>{" "}
                are typically not needed for a production JRE. Below, all
                non-JDK modules have been included in the JRE. This will get you
                up and running quickly without needing to use an entire JDK.
              </p>
              <br />
              <p className="text-sm italic">
                Free to exclude or include any modules you might need. For
                instance, you can use the{" "}
                <code className="font-mono roman border inline-block">
                  jdeps
                </code>{" "}
                command on your Java classes to narrow down which modules you
                actually need to include.
              </p>
              <br />
              <p className="text-sm italic">
                There is another section below for adding additional modules
                (such as custom ones, or manually specifying JDK ones) to the
                JRE.
              </p>
              <br />
              <h4>Included JDK Root Modules:</h4>
              <br />
              <div>
                <select
                  id="jre-included-modules"
                  size="8"
                  className="rounded shadow border"
                >
                  {includedModulesOptionArray}
                </select>
                <br />
                <br />
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  onClick={this.handleExcludeClick.bind(this)}
                >
                  Exclude &darr;
                </button>
              </div>
              <br />
              <h4>Excluded JDK Root Modules:</h4>
              <br />
              <div>
                <select
                  id="jre-excluded-modules"
                  size="8"
                  className="rounded shadow border"
                >
                  {excludedModulesOptionArray}
                </select>
                <br />
                <br />
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  onClick={this.handleIncludeClick.bind(this)}
                >
                  Include &uarr;
                </button>
              </div>
            </>
          )}
          {!jdkVersion && (
            <>
              <div className="font-bold border p-1 inline-block text-red">
                Please paste your JDK modules above to customize which root
                modules are included in the JRE. Ignore this if you'd like to
                add them manually below.
              </div>
            </>
          )}
          <br />
          <br />
          <h5>Additional Modules</h5>
          <br />
          <div>
            <p className="text-sm italic">
              Specify any modules you'd like added in addition to the set of
              root modules included above, such as your custom ones.
              Comma-separate the values and don't use spaces.
            </p>
            <br />
            <p className="text-sm italic">
              You can specify root JDK modules (such as{" "}
              <code className="font-mono roman border inline-block">
                java.base
              </code>
              ) here manually if you'd like.
            </p>
            <br />
            <label htmlFor="additional-modules">Additional Modules: </label>
            <input
              id="additional-modules"
              type="text"
              value=""
              placeholder="my.mod,other.mod,etc"
              value={optionAdditionalModules}
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={this.handleAdditionalModulesChange.bind(this)}
            />
          </div>
          <br />
          <h5>Module Path</h5>
          <br />
          <div>
            <p className="text-sm italic">
              The module path is a semicolon-separated list of paths where{" "}
              <code className="font-mono roman border inline-block">jlink</code>{" "}
              will search for modules. They can be relative or absolute, and can
              use environment variables. JDK modules are typically in the JDK
              directory{" "}
              <code className="font-mono roman border inline-block">jmods</code>
              . If you run{" "}
              <code className="font-mono roman border inline-block">jlink</code>{" "}
              from{" "}
              <code className="font-mono roman border inline-block">bin</code>,
              then{" "}
              <code className="font-mono roman border inline-block">
                ../jmods
              </code>{" "}
              will work just fine. You can optionally add your own module paths
              after that, separated by a semicolon.
            </p>
            <br />
            <label htmlFor="module-path">Module Path: </label>
            <input
              id="module-path"
              type="text"
              value={optionModulePath}
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={this.handleModulePathChange.bind(this)}
            />
          </div>
          <br />
          <h5>Other Options</h5>
          <br />
          <div>
            <p className="text-sm italic">
              Choose the level of compression. ZIP compression offers a
              significant reduction in size with a small hit to class loading
              performance.
            </p>
            <br />
            <label
              htmlFor="compression"
              title="Enable compression of resources"
            >
              Compression:{" "}
            </label>
            <select
              id="compression"
              value={optionCompressionType}
              title="Enable compression of resources"
              className="rounded shadow border"
              onChange={this.handleCompressionChange.bind(this)}
            >
              <option value="0">No compression</option>
              <option value="1">Constant string sharing</option>
              <option value="2">ZIP</option>
            </select>
          </div>
          <br />
          <div>
            <p className="text-sm italic">
              Whether or not to exclude header files from the JRE.
            </p>
            <br />
            <label htmlFor="headers-excluded">Exclude Header Files </label>
            <input
              id="headers-excluded"
              type="checkbox"
              checked={optionExcludeHeaderFiles}
              onChange={this.handleExcludeHeaderFilesChange.bind(this)}
            />
          </div>
          <br />
          <div>
            <p className="text-sm italic">
              Whether or not to exclude man pages from the JRE.
            </p>
            <br />
            <label htmlFor="man-pages-excluded">Exclude Man Pages </label>
            <input
              id="man-pages-excluded"
              type="checkbox"
              checked={optionExcludeManPages}
              onChange={this.handleExcludeManPagesChange.bind(this)}
            />
          </div>
          <br />
          <div>
            <p className="text-sm italic">
              Whether or not to link service provider modules and their
              dependencies.
            </p>
            <br />
            <label
              htmlFor="bind-services"
              title="Link service provider modules and their dependencies."
            >
              Bind Services{" "}
            </label>
            <input
              id="bind-services"
              type="checkbox"
              title="Link service provider modules and their dependencies."
              checked={optionBindServices}
              onChange={this.handleBindServicesChange.bind(this)}
            />
          </div>
          <br />
          <h5>JDK Bin Path</h5>
          <br />
          <div>
            <p className="text-sm italic">
              Specify the path to the{" "}
              <code className="font-mono roman border inline-block">bin</code>{" "}
              folder of your JDK. You can use an environment variable here, but
              it's safer to execute{" "}
              <code className="font-mono roman border inline-block">jlink</code>{" "}
              directly from the {selectedVendor.product} JDK{" "}
              <code className="font-mono roman border inline-block">bin</code>{" "}
              to prevent using an incorrect JDK that might be on your{" "}
              <code className="font-mono roman border inline-block">PATH</code>.
              The safest way is to leave this as{" "}
              <code className="font-mono roman border inline-block">.</code>,
              navigate to the{" "}
              <code className="font-mono roman border inline-block">bin</code>{" "}
              directory, and run the{" "}
              <code className="font-mono roman border inline-block">jlink</code>{" "}
              command copied from below. If you change this, be sure to also
              change the Module Path above.
            </p>
            <br />
            <label htmlFor="jdk-bin-path">JDK Bin Path: </label>
            <input
              id="jdk-bin-path"
              type="text"
              value={optionJdkBinPath}
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              onChange={this.handleJdkBinPathChange.bind(this)}
            />
          </div>
          <br />
          <h4>
            5. Copy the{" "}
            <code className="font-mono roman border inline-block">jlink</code>{" "}
            command below and run it in the{" "}
            <code className="font-mono roman border inline-block">bin</code>{" "}
            directory of the JDK:
          </h4>
          <br />
          <div>
            <textarea
              id="jlink-command-textarea"
              value={jlinkCommand}
              readOnly
              cols="80"
              rows="8"
              className="rounded shadow border font-mono text-xs"
              onClick={this.handleJlinkCommandTextareaClick}
            />
          </div>
          <div>
            <button
              onClick={this.handleCopyButtonClick.bind(this)}
              className="no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"
            >
              Copy
            </button>
          </div>
          <br />
          <br />
          <h3>
            Your JRE will be created in the{" "}
            <code className="font-mono roman border inline-block">
              {jreFolderName}
            </code>{" "}
            folder of your current working directory!
          </h3>
          <br />
          <br />
        </div>
        <footer className="text-center py-4 mt-2 bg-grey-lighter text-sm">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/justinmahar">Justin Mahar</a> &bull;{" "}
          <a href="https://opensource.org/licenses/MIT">MIT License</a> &bull;{" "}
          <a href="https://github.com/justinmahar/easyjre">EasyJRE on GitHub</a>{" "}
          &bull; Coffee Icon By{" "}
          <a href="https://feathericons.com/">FeatherIcons</a>
        </footer>
      </div>
    );
  }
}

export default App;
