import { useEffect, useState } from "react";
import AreaList from "../components/AreaList";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchAreaItems, fetchAreas, resetAreaItems } from "../store";

const getAreas = (state) => state.areas.areasList;

const selectAreas = createSelector([getAreas], (areasList) => areasList);

const getAreaItems = (state) => state.areas.areaItems;

const selectAreaItems = createSelector(
  [getAreaItems],
  (areaItems) => areaItems
);

function AreaPage() {
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);

  const areasList = useSelector(selectAreas);

  const areaItems = useSelector(selectAreaItems);

  const handleClick = async (areaName) => {
    setIsSelected(true);
    dispatch(fetchAreaItems({ areaName }));
  };

  useEffect(() => {
    dispatch(fetchAreas());
    dispatch(resetAreaItems());
  }, []);

  return (
    <div className="grid justify-items-center">
      <p className="text-3xl mb-3">Areas</p>
      <div>
        {isSelected ? (
          <AreaList
            items={areaItems}
            type="items"
            handleClick={() => {
              setIsSelected(false);
              dispatch(resetAreaItems());
            }}
          />
        ) : (
          <AreaList items={areasList} type="area" handleClick={handleClick} />
        )}
      </div>
    </div>
  );
}

export default AreaPage;
