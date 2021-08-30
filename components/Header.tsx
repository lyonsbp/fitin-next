

export function Header(props) {
  return (
    <header className="w-full">
      <div className="flex bg-brandGreen justify-around text-white py-2">
        <div className="">
          <div>support@fitin.com</div>
        </div>
        <div>
          <span>F</span>
          <span>LI</span>
          <span>IG</span>
        </div>
      </div>
      <div className="flex justify-around bg-white py-4">
        <span className="mt-2">Logo</span>
        <nav className="text-gray-600 font-semibold">
          <a href="/" className="active mx-2">Fitness</a>
          <a href="/" className="mx-2">About Us</a>
          <a href="/" className="mx-2">FAQ</a>
          <button className="btn primary ml-5">JOIN</button>
        </nav>
      </div>
    </header>
  )
}