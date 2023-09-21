import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function MobilePageTitle({ fileData, cfg }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class="mobile-page-title">
        <a class= "internal" href={baseDir}>{title}</a>
    </h1>
  )
}

MobilePageTitle.css = `
.mobile-page-title {
  font-size: 1.75rem;
  margin: 0;
}
`

export default (() => MobilePageTitle) satisfies QuartzComponentConstructor
