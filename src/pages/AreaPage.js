import { Outlet } from "react-router";

function AreaPage() {
  return (
    <div className="grid justify-items-center">
      <p className="text-3xl sm:text-5xl">Areas</p>
      <>
        <Outlet />
      </>
    </div>
  );
}

export default AreaPage;
