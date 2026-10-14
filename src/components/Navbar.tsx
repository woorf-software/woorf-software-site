import Button from "./UI/Button";
import NavItem from "./UI/NavItem";

export default function Navbar() {
  return (
    <nav class="h-16 dark:border-gray-700 w-full flex items-center">
      <a href="/" class="ml-6 rounded-lg transition duration-200 hover:bg-gray-300 lg:ml-10">
        <img src="woorf-logo.svg" alt="woorf software logo" class="h-10" />
      </a>

      {/* Right aligned items */}
      <div class="ml-auto mr-38 flex items-center space-x-8">
        <NavItem linkName="Home" linkURL="/" />
        <NavItem linkName="About" linkURL="/about" />
        <NavItem linkName="Our software" linkURL="#our-software" />
      </div>
    </nav>
  );
}
