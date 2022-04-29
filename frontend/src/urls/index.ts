type TUrls = 'home' | 'organisation' | 'projects' | 'components'

export const adminUrls: { [key in TUrls]: `/${TUrls}` } = {
  home: '/home',
  organisation: '/organisation',
  projects: '/projects',
  components: '/components',
}
