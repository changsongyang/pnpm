import { type Catalogs } from '@pnpm/catalogs.types'
import { type WorkspaceManifest } from '@pnpm/workspace.read-manifest'

export function readCatalogsFromWorkspaceManifest (workspaceManifest: WorkspaceManifest | undefined): Catalogs {
  if (workspaceManifest == null) {
    return {}
  }

  return {
    // The readWorkspaceManifest function validates that the default catalog is
    // specified using only the "catalog" field or as a named catalog under the
    // catalogs block, but not both.
    //
    // If workspaceManifest.catalog is undefined, intentionally allow the spread
    // below to overwrite it.
    default: workspaceManifest.catalog,

    ...workspaceManifest.catalogs,
  }
}
