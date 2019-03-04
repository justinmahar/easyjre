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

    this.state = {
      vendors: vendors.vendors,
      selectedVendorIndex: selectedVendorIndex,
      selectedJdkIndex: selectedJdkIndex
    };
  }

  handleProductChange(event) {
    let selectedVendorIndex = event.target.value;
    this.setState({
      selectedVendorIndex: selectedVendorIndex,
      selectedJdkIndex: 0
    });
  }

  handleJdkChange(event) {
    let selectedJdkIndex = event.target.value;
    this.setState({
      selectedJdkIndex: selectedJdkIndex
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

    let jreIncludedModules = selectedJdk["jre_included_modules"];

    let moduleString = "";

    jreIncludedModules.forEach((element, index) => {
      moduleString += element;
      if (index < jreIncludedModules.length - 1) {
        moduleString += ",";
      }
    });

    let productName =
      selectedVendor.organization + " " + selectedVendor.product;

    let jreFolderName =
      "jre-" +
      selectedJdk.version +
      "-" +
      productName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    let jlinkCommand =
      ".\\jlink --output " +
      jreFolderName +
      " --compress=2 --no-header-files --no-man-pages --module-path ..\\jmods --add-modules " +
      moduleString;

    return (
      <div>
        <h3>Select your JDK:</h3>
        <select onChange={this.handleProductChange.bind(this)}>
          {productOptionArray}
        </select>
        <select onChange={this.handleJdkChange.bind(this)}>
          {jdksOptionArray}
        </select>{" "}
        <a href={downloadJDKHref} target="_new">
          Download JDK &raquo;
        </a>
        <h3>
          Create your{" "}
          {selectedVendor.organization + " " + selectedVendor.product} OpenJDK JRE{" "}
          {selectedJdk.version} using the <code>jlink</code> command below:
        </h3>
        <textarea
          id="jlink-command-textarea"
          value={jlinkCommand}
          readOnly
          cols="80"
          rows="8"
          onClick={this.handleJlinkCommandTextareaClick}
        />
        <button onClick={this.handleCopyButtonClick.bind(this)}>Copy</button>
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
            the above <code>jlink</code> command and run it in the{" "}
            <code>bin</code> directory of JDK {selectedJdk.version}
          </li>
          <li>
            Grab your JRE, which is in <code>bin\{jreFolderName}</code>
          </li>
        </ol>
        <br/><br/>
        <footer>Copyright &copy; {new Date().getFullYear()} <a href="https://github.com/justinmahar">Justin Mahar</a> &bull; <a href="https://opensource.org/licenses/MIT">MIT License</a> &bull; <a href="https://github.com/justinmahar/easyjre">EasyJRE on GitHub</a></footer>
      </div>
    );
  }
}

export default App;
