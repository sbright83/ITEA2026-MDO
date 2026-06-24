// Workaround for Slidev v52+ double-base routing bug:
// Bn() embeds BASE_URL in navigation paths, but createWebHistory() also
// uses BASE_URL as its base — Vue Router's History API call then prepends
// the base a second time, producing /ITEA2026-MDO/ITEA2026-MDO/2.
// This guard strips the duplicate prefix before the route is resolved.
export default ({ router }: any) => {
  const base: string = import.meta.env.BASE_URL
  if (!base || base === '/') return

  const basePrefix = base.endsWith('/') ? base.slice(0, -1) : base

  router.beforeEach((to: any) => {
    if (to.path.startsWith(basePrefix + '/')) {
      return { path: to.path.slice(basePrefix.length), query: to.query, hash: to.hash }
    }
  })
}
