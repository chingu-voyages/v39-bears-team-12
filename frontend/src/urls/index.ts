type TUrls = 'home' | 'projects' | 'organisation'

export const adminUrls: { [key in TUrls]: string } = {
  home: '/home',
  projects: '/projects',
  organisation: '/organisation',
}
