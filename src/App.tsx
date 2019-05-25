import { Link, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import "./App.css";
import ChoosePlatformContainer from "./components/ChoosePlatformContainer";
import CopyPasteModulesContainer from "./components/CopyPasteModulesContainer";
import CreateJREContainer from "./components/CreateJREContainer";
import CustomizeJREContainer from "./components/CustomizeJREContainer";
import DownloadJDKContainer from "./components/DownloadJDKContainer";
import Footer from "./components/Footer";
import HeroContainer from "./components/HeroContainer";
import IntentionContainer from "./components/IntentionContainer";
import TopBar from "./components/TopBar";
import "./css/material-icons.css";
import "./css/roboto.css";
import { MAC_OS } from "./platforms";
import { IIntention, STANDARD_JAVA_SE, MANUAL_MODULES } from "./intentions";

const maxWidth = "md";

const App: React.FC = () => {
  const [intention, setIntention] = React.useState<IIntention>(
    STANDARD_JAVA_SE
  );
  const [platform, setPlatform] = React.useState(MAC_OS);
  const [jdkVersion, setJdkVersion] = React.useState<string | null | undefined>(
    null
  );
  const [includedJDKModules, setIncludedJDKModules] = React.useState<string[]>(
    []
  );
  const [excludedJDKModules, setExcludedJDKModules] = React.useState<string[]>(
    []
  );
  const [modulePath, setModulePath] = React.useState("../jmods");
  const [
    manuallySpecifiedModules,
    setManuallySpecifiedModules
  ] = React.useState("");
  const [jdkBinPath, setJdkBinPath] = React.useState(".");
  const [compressionLevel, setCompressionLevel] = React.useState(2);
  const [headerFilesExcluded, setHeaderFilesExcluded] = React.useState(true);
  const [manPagesExcluded, setManPagesExcluded] = React.useState(true);
  const [bindServicesEnabled, setBindServicesEnabled] = React.useState(false);

  return (
    <div style={{ flexGrow: 1 }}>
      <CssBaseline />
      <TopBar />
      <main>
        <HeroContainer maxWidth={maxWidth} />
        <IntentionContainer
          maxWidth={maxWidth}
          intention={intention}
          setIntention={setIntention}
        />
        <DownloadJDKContainer maxWidth={maxWidth} />
        <ChoosePlatformContainer
          maxWidth={maxWidth}
          platform={platform}
          setPlatform={setPlatform}
        />

        {intention !== MANUAL_MODULES && (
          <CopyPasteModulesContainer
            maxWidth={maxWidth}
            platform={platform}
            jdkVersion={jdkVersion}
            setJdkVersion={setJdkVersion}
            includedJDKModules={includedJDKModules}
            setIncludedJDKModules={setIncludedJDKModules}
            excludedJDKModules={excludedJDKModules}
            setExcludedJDKModules={setExcludedJDKModules}
          />
        )}
        {intention !== STANDARD_JAVA_SE && (
          <CustomizeJREContainer
            maxWidth={maxWidth}
            intention={intention}
            jdkVersion={jdkVersion}
            setJdkVersion={setJdkVersion}
            includedJDKModules={includedJDKModules}
            setIncludedJDKModules={setIncludedJDKModules}
            excludedJDKModules={excludedJDKModules}
            setExcludedJDKModules={setExcludedJDKModules}
            modulePath={modulePath}
            setModulePath={setModulePath}
            manuallySpecifiedModules={manuallySpecifiedModules}
            setManuallySpecifiedModules={setManuallySpecifiedModules}
            jdkBinPath={jdkBinPath}
            setJdkBinPath={setJdkBinPath}
            compressionLevel={compressionLevel}
            setCompressionLevel={setCompressionLevel}
            headerFilesExcluded={headerFilesExcluded}
            setHeaderFilesExcluded={setHeaderFilesExcluded}
            manPagesExcluded={manPagesExcluded}
            setManPagesExcluded={setManPagesExcluded}
            bindServicesEnabled={bindServicesEnabled}
            setBindServicesEnabled={setBindServicesEnabled}
          />
        )}
        <CreateJREContainer
          maxWidth={maxWidth}
          platform={platform}
          jdkVersion={jdkVersion}
          includedJDKModules={includedJDKModules}
          modulePath={modulePath}
          manuallySpecifiedModules={manuallySpecifiedModules}
          jdkBinPath={jdkBinPath}
          compressionLevel={compressionLevel}
          headerFilesExcluded={headerFilesExcluded}
          manPagesExcluded={manPagesExcluded}
          bindServicesEnabled={bindServicesEnabled}
        />
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          style={{ marginTop: "2.5rem" }}
        >
          If this project helped you, please{" "}
          <Link href="https://github.com/justinmahar/easyjre">
            Star it on GitHub
          </Link>{" "}
          so others can find it. :)
        </Typography>
      </main>
      <Footer />
    </div>
  );
};

export default App;
