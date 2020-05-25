import React from "react";
import LanguageProvider from "./LanguageProvider";
import { createPack } from "./createPack";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children,
  );
};

// const ProviderPack = createPack(LanguageProvider);

export default function Provider(props) {
  return (
    <ContextProviderComposer
      contextProviders={[<LanguageProvider key="language" />]}
      children={props.children}
    />
  );
}
