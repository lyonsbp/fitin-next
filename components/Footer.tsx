export function Footer(props) {
  return (
    <footer className="flex flex-wrap justify-around pb-12 text-gray-600">
      <ul>
        <li>Logo</li>
        <li>F TW LI IG</li>
      </ul>
      <ul>
        <li className="font-bold text-gray-900">Products</li>
        <li>Blog</li>
      </ul>
      <ul>
        <li className="font-bold text-gray-900">Resources</li>
        <li>Testimonials</li>
      </ul>
      <ul>
        <li className="font-bold text-gray-900">Contact Us</li>
        <li><a href="mailto:support@fitin.com">support@fitin.com</a></li>
      </ul>
    </footer>

  )
}