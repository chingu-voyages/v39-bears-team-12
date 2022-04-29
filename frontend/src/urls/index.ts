type TUrls = 'home' | 'organisation' | 'projects'

export const adminUrls: { [key in TUrls]: `/${TUrls}` } = {
  home: '/home',
  organisation: '/organisation',
  projects: '/projects',
}
