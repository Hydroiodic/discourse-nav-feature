import { apiInitializer } from "discourse/lib/api";
import { i18n } from "discourse-i18n";

export default apiInitializer("0.11.1", (api) => {
  for (const tag of settings.nav_tag.split("|")) {
    if (tag != "") {
      api.addNavigationBarItem({
        name: tag,
        displayName: tag,
        title: i18n(themePrefix("filters.custom.help"), { tag }),
        href: `/tag/${tag}`,
        customFilter: (category, args, router) => {
          return args.tag?.name != tag;
        },
        forceActive: (category, args, router) => {
          return args.tag?.name == tag;
        },
        before: "unread",
      });
    }
  }
});
