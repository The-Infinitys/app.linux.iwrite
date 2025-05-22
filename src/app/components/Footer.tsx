export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p className="text-sm">© 2023 My App. All rights reserved.</p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
