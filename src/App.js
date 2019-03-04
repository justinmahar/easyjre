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
    let jsonUrl =
      "https://raw.githubusercontent.com/justinmahar/create-openjdk-jre-with-jlink/master/src/json/vendors.json";
    let request = new XMLHttpRequest();
    request.open("GET", jsonUrl, false);
    request.send(null);
    let jsonResponseText = request.responseText;
    let vendors = JSON.parse(jsonResponseText);
    console.log(vendors);

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
    console.log(event.target.value);
    let selectedJdkIndex = event.target.value;
    this.setState({
      selectedJdkIndex: selectedJdkIndex
    });
  }

  handleCopyButtonClick(event) {
    let commandTextarea = document.getElementById("jlink-command-textarea");
    commandTextarea.select();
    document.execCommand('copy');
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
      if(index < jreIncludedModules.length - 1) {
        moduleString += ","
      }
    });

    let jlinkCommand =
      "jlink –output jre --compress=2 –add-modules " + moduleString;

    return (
      <div className="App">
        <header className="App-header">
          <label>JDK: </label>
          <select onChange={this.handleProductChange.bind(this)}>
            {productOptionArray}
          </select>
          <select onChange={this.handleJdkChange.bind(this)}>
            {jdksOptionArray}
          </select>{" "}
          <a href={downloadJDKHref} target="_new">
            Download JDK &raquo;
          </a>
          <p>
            Create your {selectedVendor.organization + " " + selectedVendor.product} JRE {selectedJdk.version} using the <code>jlink</code> command below:
          </p>
          <textarea id="jlink-command-textarea" value={jlinkCommand} readOnly cols="80" rows="8"/>
          <button onClick={this.handleCopyButtonClick.bind(this)}>Copy</button>
        </header>
      </div>
    );
  }
}

export default App;
