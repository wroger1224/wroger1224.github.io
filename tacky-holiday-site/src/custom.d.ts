// TypeScript declaration so imports of '*.module.css' resolve without errors
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
