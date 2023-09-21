import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "LinkedIn": "https://www.linkedin.com/in/edison--zhang/",
      "GitHub": "https://github.com/edis0n-zhang",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.OldPageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [
    Component.DesktopOnly(Component.Explorer({
      title: "Explorer",
      folderDefaultState: "collapsed",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["home"])
        return !omit.has(node.name.toLowerCase())
      },
    })),
    Component.DesktopOnly(Component.Graph()), 
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.OldPageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
