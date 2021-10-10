import type { App } from "vue";
// import "element-plus/dist/index.css";
import "dayjs/locale/zh-cn";

import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default (app: App<Element>): void => {
  app.config.globalProperties.$ELEMENT = {
    locale: zhCn,
    // options
  };
};
