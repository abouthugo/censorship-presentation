import createTheme from 'spectacle/lib/themes/default'

const colors = {
  main: '#ffffff',
  contrast: '#051923',
  primary: '#ED254E',
  secondary: '#022438',
  tertiary: '#F9DC5C',
  quaternary: '#CECECE'
}

const fonts = {
  primary: 'Montserrat',
  secondary: 'Helvetica'
}

const theme = createTheme({ ...colors }, { ...fonts })
export default theme
