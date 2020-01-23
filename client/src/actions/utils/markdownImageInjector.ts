import { serverPath } from "../serverPaths";

const markdownImageInjector = (data: string): string => {
  let injected = data.replace(
    /!\[\]\(\/media\/markdownx\//g,
    `![](${serverPath}media/markdownx/`
  );
  return injected;
};

export default markdownImageInjector;
