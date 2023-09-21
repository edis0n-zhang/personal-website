import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function OldPageTitle({ fileData, cfg }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class="old-page-title">
        <a class= "internal" href={baseDir}>{title}</a>
    </h1>
  )
}

OldPageTitle.css = `
.old-page-title {
  font-size: 1.75rem;
  margin: 0;
}
`

export default (() => OldPageTitle) satisfies QuartzComponentConstructor
