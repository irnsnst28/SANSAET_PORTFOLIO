export function Footer() {
  return (
    <footer>
      <a className="logo" href="#home" aria-label="Back to home"><span>AS</span><b>.</b></a>
      <p>Developer by logic.<br />Editor by instinct.</p>
      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </div>
      <small>© {new Date().getFullYear()} Aaron Sansaet. All rights reserved.</small>
      <a className="back-top" href="#home">Back to top ↑</a>
    </footer>
  )
}
