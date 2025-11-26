import { Link } from "react-router";
import { useLocation } from "react-router";

function TopNav() {
  // Hooks
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { url: "/", label: "Home" },
    { url: "/login", label: "Login" },
    { url: "/user", label: "User" },
  ];

  const displayLinks = () => {
    return links?.map(({ url, label }, key: number) => {
      return (
        <Link
          to={url}
          key={key}
          className={`
            text-md
            uppercase
            tracking-wide
            px-3 py-1 mr-2
            hover:border-b-2 border-red-500
            ${pathname == url && "font-bold text-red-500"}
            `}
        >
          {label}
        </Link>
      );
    });
  };

  return (
    <>
      {/* <div>this is TopNav</div> */}
      <nav className="p-6 flex place-items-center border border-red-500">
        <div className="hidden md:block">{displayLinks()}</div>
      </nav>
    </>
  );
}

export default TopNav;
