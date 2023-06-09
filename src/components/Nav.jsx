import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#f1f1f1] flex flex-col gap-4 border p-2 rounded-md shadow-md z-10">
      <section className="flex justify-between items-center ">
        <Link to="/">
          <article className="flex gap-2 items-center cursor-pointer">
            <img src="/favicon.ico" className="w-8 h-8" alt="" />
            <p className="font-semibold text-lg">The Pie Spot</p>
          </article>
        </Link>
        <article className="flex gap-2 items-center">
          <Link to="/cart">
            <span className="flex gap-1 font-bold p-1 border rounded-md drop-shadow-xl">
              Cart
              <BsFillCartCheckFill className="text-2xl" />
            </span>
          </Link>
        </article>
      </section>
    </nav>
  );
};

export { Nav };
