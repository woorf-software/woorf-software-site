export default function NavItem(props: { linkName: string; linkURL: string }) {
  // We need to make this highlighted when the page is already open, which is easy since we already have linkURL
  const activePageClass = "text-red-500";
  const isActivePage = window.location.pathname === props.linkURL;

  return (
    <a
      class={`relative py-1 text-gray-500 font-semibold transition-colors duration-200 h-8 hover:text-gray-900
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
    after:origin-left after:scale-x-0 after:bg-blue-600
    after:transition-transform after:duration-300
    after:will-change-transform after:transform-gpu
    hover:after:scale-x-100
    ${isActivePage ? "text-gray-900 after:scale-x-100" : ""}`}
      href={props.linkURL}
    >
      {props.linkName}
    </a>
  );
}
