import { AreaList } from "../components/";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAreaItems,
  fetchAreas,
  resetAreaItems,
  selectArea,
} from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

const getAreas = (state) => state.areas.areasList;

const selectAreas = createSelector([getAreas], (areasList) => areasList);

function AreasListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const areasList = useSelector(selectAreas);

  const handleClick = async (areaName) => {
    dispatch(fetchAreaItems({ areaName }));
    dispatch(selectArea(areaName));
    navigate("../items");
  };

  useEffect(() => {
    dispatch(fetchAreas());
    dispatch(resetAreaItems());
  }, []);

  return (
    <div className="grid justify-items-center">
      <>
        <AreaList items={areasList} type="area" handleClick={handleClick} />
      </>
    </div>
  );
}

export default AreasListPage;
