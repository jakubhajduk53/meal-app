import { Outlet } from "react-router";

function AreaPage() {
  return (
    <div className="grid justify-items-center">
      <p className="text-3xl sm:text-5xl">Areas</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AreaPage;
