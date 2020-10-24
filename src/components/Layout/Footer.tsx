export type FooterProps = {}

export const Footer: React.FCX<FooterProps> = ({className}) => {
  return (
    <footer className={className}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
