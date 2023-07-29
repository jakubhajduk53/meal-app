import AreaList from "../components/AreaList";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const getAreaItems = (state) => state.areas.areaItems;

const selectAreaItems = createSelector(
  [getAreaItems],
  (areaItems) => areaItems
);

const getAreaName = (state) => state.areas.selectedArea;

const selectAreaName = createSelector(
  [getAreaName],
  (selectedArea) => selectedArea
);

function AreaItemsPage() {
  const navigate = useNavigate();

  const areaItems = useSelector(selectAreaItems);

  const areaName = useSelector(selectAreaName);

  return (
    <div className="grid justify-items-center">
      <p className="text-xl italic">{areaName ? areaName : null}</p>
      <div>
        <AreaList items={areaItems} type="items" />
      </div>
      <Button
        value="Go back"
        onClick={() => {
          navigate("../list");
        }}
        className="mt-3 mb-3"
      />
    </div>
  );
}

export default AreaItemsPage;
