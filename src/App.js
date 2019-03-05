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
    let selectedJdkIndex = 0;

    let selectedJdk =
      vendors.vendors[selectedVendorIndex].jdks[selectedJdkIndex];
    let jreIncludedModules = selectedJdk["jre_included_modules"];
    let jreExcludedModules = selectedJdk["jre_excluded_modules"];

    this.state = {
      vendors: vendors.vendors,
      selectedVendorIndex: selectedVendorIndex,
      selectedJdkIndex: selectedJdkIndex,
      jreIncludedModules: jreIncludedModules,
      jreExcludedModules: jreExcludedModules,
      optionCompressionType: 2,
      optionExcludeHeaderFiles: true,
      optionExcludeManPages: true,
      optionBindServices: false,
      optionModulePath: "..\\jmods",
      optionAdditionalModules: ""
    };
  }

  handleProductChange(event) {
    let selectedVendorIndex = event.target.value;
    let selectedJdkIndex = 0;

    let selectedJdk = this.state.vendors[selectedVendorIndex].jdks[
      selectedJdkIndex
    ];
    let jreIncludedModules = selectedJdk["jre_included_modules"];
    let jreExcludedModules = selectedJdk["jre_excluded_modules"];

    this.setState({
      selectedVendorIndex: selectedVendorIndex,
      selectedJdkIndex: selectedJdkIndex,
      jreIncludedModules: jreIncludedModules,
      jreExcludedModules: jreExcludedModules
    });
  }

  handleJdkChange(event) {
    let selectedJdkIndex = event.target.value;

    let selectedJdk = this.state.vendors[this.state.selectedVendorIndex].jdks[
      selectedJdkIndex
    ];
    let jreIncludedModules = selectedJdk["jre_included_modules"];
    let jreExcludedModules = selectedJdk["jre_excluded_modules"];

    this.setState({
      selectedJdkIndex: selectedJdkIndex,
      jreIncludedModules: jreIncludedModules,
      jreExcludedModules: jreExcludedModules
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
    console.log("compressionChange");
  }
  
  handleExcludeHeaderFilesChange(event) {
    console.log("handleExcludeHeaderFilesChange");
  }
  
  handleExcludeManPagesChange(event) {
    console.log("handleExcludeManPagesChange");
  }
  
  handleBindServicesChange(event) {
    console.log("handleBindServicesChange");
  }
  
  handleModulePathChange(event) {
    console.log("handleModulePathChange");
  }
  
  handleAdditionalModulesChange(event) {
    console.log("handleAdditionalModulesChange");
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

    let jdksOptionArray = [];

    selectedVendor.jdks.forEach((element, index) => {
      let name = "JDK " + element.version;
      let currOption = (
        <option value={index} key={index}>
          {name}
        </option>
      );
      jdksOptionArray.push(currOption);
    });

    let selectedJdk = selectedVendor.jdks[this.state.selectedJdkIndex];

    let downloadJDKHref = selectedJdk["jdk_download_link"];

    let jreIncludedModules = this.state.jreIncludedModules;
    let jreExcludedModules = this.state.jreExcludedModules;

    let moduleString = "";
    let includedModulesOptionArray = [];
    jreIncludedModules.forEach((element, index) => {
      if (index == 0) {
        moduleString += " --add-modules ";
      }
      moduleString += element;
      if (index < jreIncludedModules.length - 1) {
        moduleString += ",";
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

    let productName =
      selectedVendor.organization + " " + selectedVendor.product;

    let jreFolderName =
      "jre-" +
      selectedJdk.version +
      "-" +
      productName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    let outputCommandString = "--output " + jreFolderName;

    // Options
    let optionCompressionType = this.state.optionCompressionType;
    let optionExcludeHeaderFiles = this.state.optionExcludeHeaderFiles;
    let optionExcludeManPages = this.state.optionExcludeManPages;
    let optionBindServices = this.state.optionBindServices;
    let optionModulePath = this.state.optionModulePath.trim();
    let optionAdditionalModules = this.state.optionAdditionalModules.trim();

    let compressionOptionString = "";
    if (optionCompressionType != 0) {
      compressionOptionString = " --compress=" + optionCompressionType;
    }

    let excludeHeaderFilesOptionString = "";
    if (optionExcludeHeaderFiles) {
      excludeHeaderFilesOptionString = " --no-header-files";
    }

    let excludeManPagesOptionString = "";
    if (optionExcludeManPages) {
      excludeManPagesOptionString = " --no-header-files";
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
      ".\\jlink " +
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
                Create an OpenJDK JRE easily using jlink!
              </span>
            </div>
          </div>
        </nav>
        <h1>The Easiest Way To Create An OpenJDK JRE</h1>
        <h3>Select your JDK:</h3>
        <select
          onChange={this.handleProductChange.bind(this)}
          className="rounded shadow border"
        >
          {productOptionArray}
        </select>
        <select
          onChange={this.handleJdkChange.bind(this)}
          className="rounded shadow border"
        >
          {jdksOptionArray}
        </select>{" "}
        <a
          href={downloadJDKHref}
          target="_new"
          className="inline-block no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"
        >
          Download JDK &raquo;
        </a>
        <h3>
          Create your{" "}
          {selectedVendor.organization + " " + selectedVendor.product} OpenJDK
          JRE {selectedJdk.version} using the{" "}
          <code className="font-mono border p-1 inline-block">jlink</code>{" "}
          command below:
        </h3>
        <textarea
          id="jlink-command-textarea"
          value={jlinkCommand}
          readOnly
          cols="80"
          rows="8"
          className="rounded shadow border font-mono text-xs"
          onClick={this.handleJlinkCommandTextareaClick}
        />
        <button
          onClick={this.handleCopyButtonClick.bind(this)}
          className="no-underline bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"
        >
          Copy
        </button>
        <p>Three easy steps:</p>
        <ol>
          <li>
            Download and unpack{" "}
            <a href={downloadJDKHref} target="_new">
              {selectedVendor.organization} {selectedVendor.product} JDK{" "}
              {selectedJdk.version}
            </a>
          </li>
          <li>
            <a href="#0" onClick={this.handleCopyButtonClick.bind(this)}>
              Copy
            </a>{" "}
            the above{" "}
            <code className="font-mono border p-1 inline-block">jlink</code>{" "}
            command and run it in the{" "}
            <code className="font-mono border p-1 inline-block">bin</code>{" "}
            directory of JDK {selectedJdk.version}
          </li>
          <li>
            Grab your JRE, which is in{" "}
            <code className="font-mono border p-1 inline-block">
              bin\{jreFolderName}
            </code>
          </li>
        </ol>
        <h3>Customize Your JRE</h3>
        <h4>Included Modules</h4>
        <div>
          <select id="jre-included-modules" size="8">
            {includedModulesOptionArray}
          </select>
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={this.handleExcludeClick.bind(this)}
          >
            Exclude &darr;
          </button>
        </div>
        <h4>Excluded Modules</h4>
        <div>
          <select id="jre-excluded-modules" size="8">
            {excludedModulesOptionArray}
          </select>
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={this.handleIncludeClick.bind(this)}
          >
            Include &uarr;
          </button>
        </div>
        <p>
          <label htmlFor="compression" title="Enable compression of resources">
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
        </p>
        <p>
          <label htmlFor="headers-excluded">Exclude header files </label>
          <input
            id="headers-excluded"
            type="checkbox"
            checked={true}
            selected={optionExcludeHeaderFiles}
          />
        </p>
        <p>
          <label htmlFor="man-pages-excluded">Exclude man pages </label>
          <input
            id="man-pages-excluded"
            type="checkbox"
            checked={true}
            selected={optionExcludeManPages}
          />
        </p>
        <p>
          <label
            htmlFor="bind-services"
            title="Link service provider modules and their dependencies."
          >
            Bind services{" "}
          </label>
          <input
            id="bind-services"
            type="checkbox"
            checked={false}
            title="Link service provider modules and their dependencies."
            selected={optionBindServices}
          />
        </p>
        <p>
          <label htmlFor="module-path">Module Path: </label>
          <input
            id="module-path"
            type="text"
            value={optionModulePath}
            className="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <p>
          <label htmlFor="additional-modules">Additional modules: </label>
          <input
            id="additional-modules"
            type="text"
            value=""
            placeholder="module1,mod2,etc"
            value={optionAdditionalModules}
            className="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <footer className="text-center py-4 mt-2 bg-grey-lighter text-sm">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/justinmahar">Justin Mahar</a> &bull;{" "}
          <a href="https://opensource.org/licenses/MIT">MIT License</a> &bull;{" "}
          <a href="https://github.com/justinmahar/easyjre">EasyJRE on GitHub</a>
        </footer>
      </div>
    );
  }
}

export default App;
