import { Outlet } from "react-router";

function CategoryPage() {
  return (
    <div className="grid justify-items-center">
      <p className="text-3xl sm:text-5xl mb-3">Categories</p>
      <>
        <Outlet />
      </>
    </div>
  );
}

export default CategoryPage;
