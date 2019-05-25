import { Container, Typography } from "@material-ui/core";
import * as React from "react";
import { CHOOSE_JDK_MODULES, IIntention, MANUAL_MODULES } from "../intentions";
import JdkBinPathPaper from "./JDKBinDirectoryPaper";
import MiscOptionsPaper from "./MiscOptionsPaper";
import ManuallySpecifiedModulesPaper from "./ManuallySpecifiedModulesPaper";
import ModulePathPaper from "./ModulePathPaper";
import TransferModulesPaper from "./TransferModulesPaper";

export interface ICustomizeJREContainerProps {
  maxWidth: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  intention: IIntention;
  jdkVersion: string | null | undefined;
  setJdkVersion: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  includedJDKModules: string[];
  setIncludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
  excludedJDKModules: string[];
  setExcludedJDKModules: React.Dispatch<React.SetStateAction<string[]>>;
  modulePath: string;
  setModulePath: React.Dispatch<React.SetStateAction<string>>;
  manuallySpecifiedModules: string;
  setManuallySpecifiedModules: React.Dispatch<React.SetStateAction<string>>;
  jdkBinPath: string;
  setJdkBinPath: React.Dispatch<React.SetStateAction<string>>;
  compressionLevel: number;
  setCompressionLevel: React.Dispatch<React.SetStateAction<number>>;
  headerFilesExcluded: boolean;
  setHeaderFilesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
  manPagesExcluded: boolean;
  setManPagesExcluded: React.Dispatch<React.SetStateAction<boolean>>;
  bindServicesEnabled: boolean;
  setBindServicesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CustomizeJREContainer(
  props: ICustomizeJREContainerProps
) {
  return (
    <Container
      maxWidth={props.maxWidth}
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
        style={{ marginTop: "2rem" }}
      >
        Customize Your JRE
      </Typography>
      {props.intention !== MANUAL_MODULES && (
        <TransferModulesPaper
          intention={props.intention}
          right={props.includedJDKModules}
          setRight={props.setIncludedJDKModules}
          left={props.excludedJDKModules}
          setLeft={props.setExcludedJDKModules}
        />
      )}
      {props.intention !== CHOOSE_JDK_MODULES && (
        <>
          <ModulePathPaper
            modulePath={props.modulePath}
            setModulePath={props.setModulePath}
          />
          <ManuallySpecifiedModulesPaper
            manuallySpecifiedModules={props.manuallySpecifiedModules}
            setManuallySpecifiedModules={props.setManuallySpecifiedModules}
          />
        </>
      )}
      {props.intention !== CHOOSE_JDK_MODULES &&
        props.intention !== MANUAL_MODULES && (
          <>
            <JdkBinPathPaper
              jdkBinPath={props.jdkBinPath}
              setJdkBinPath={props.setJdkBinPath}
            />
            <MiscOptionsPaper
              compressionLevel={props.compressionLevel}
              setCompressionLevel={props.setCompressionLevel}
              headerFilesExcluded={props.headerFilesExcluded}
              setHeaderFilesExcluded={props.setHeaderFilesExcluded}
              manPagesExcluded={props.manPagesExcluded}
              setManPagesExcluded={props.setManPagesExcluded}
              bindServicesEnabled={props.bindServicesEnabled}
              setBindServicesEnabled={props.setBindServicesEnabled}
            />
          </>
        )}
    </Container>
  );
}
