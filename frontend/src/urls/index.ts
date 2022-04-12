type TUrls = 'home' | 'organisation' | 'projects'

export const urls: { [key in TUrls]: `/${TUrls}` } = {
  home: '/home',
  organisation: '/organisation',
  projects: '/projects',
}
