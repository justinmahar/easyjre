try{
(()=>{var g=__STORYBOOK_API__,{ActiveTabs:S,Consumer:_,ManagerContext:f,Provider:T,addons:r,combineParameters:O,controlOrMetaKey:v,controlOrMetaSymbol:j,eventMatchesShortcut:x,eventToShortcut:M,isMacLike:A,isShortcutTaken:P,keyToSymbol:C,merge:w,mockChannel:E,optionOrAltSymbol:R,shortcutMatchesShortcut:B,shortcutToHumanString:G,types:I,useAddonState:K,useArgTypes:J,useArgs:D,useChannel:H,useGlobalTypes:Y,useGlobals:N,useParameter:V,useSharedState:q,useStoryPrepared:L,useStorybookApi:U,useStorybookState:W}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:s,createCache:ae,createGlobal:ne,createReset:ce,css:le,darken:pe,ensure:ue,ignoreSsrWarning:me,isPropValid:de,jsx:be,keyframes:he,lighten:ke,styled:ye,themes:ge,typography:Se,useTheme:_e,withTheme:fe}=__STORYBOOK_THEMING__;var i={name:"easyjre",version:"1.0.5",coreVersion:"3.0.3",author:"Justin Mahar <contact@justinmahar.com>",description:"Easily create an OpenJDK JRE using jlink!",homepage:"https://justinmahar.github.io/easyjre/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/easyjre.git"},bugs:{url:"https://github.com/justinmahar/easyjre/issues"},keywords:[],peerDependencies:{react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},dependencies:{"@emotion/react":"^11.11.3","@emotion/styled":"^11.11.0","@mui/icons-material":"^5.15.9","@mui/material":"^5.15.9",notistack:"^3.0.1","typeface-roboto":"^1.1.13"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.4",prettier:"^3.2.5",react:"^18.2.0","react-dom":"^18.2.0","react-html-props":"^2.0.3","react-markdown":"^8.0.3","remark-gfm":"^3.0.1","replace-in-file":"^7.1.0",storybook:"^7.6.12",typescript:"^5.3.3",webpack:"^5.90.1"}};var c="\u2615 EasyJRE",l=i.homepage,p="light",u=void 0,a=s({base:p,brandTitle:c,brandUrl:l,brandImage:u});r.setConfig({theme:a});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
