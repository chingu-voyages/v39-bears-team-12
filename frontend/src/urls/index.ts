type TUrls = 'home' | 'projects'

export const adminUrls: { [key in TUrls]: `/${TUrls}` } = {
  home: '/home',
  projects: '/projects',
}
