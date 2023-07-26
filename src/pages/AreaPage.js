import { useEffect, useState } from "react";
import axios from "axios";
import AreaList from "../components/AreaList";

function AreaPage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

  const [areaList, setAreaList] = useState([]);
  const [areaItems, setAreaItems] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const fetchAreas = async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/list.php?a=list`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      setAreaList(data.meals);
    } else {
      setAreaList([]);
    }
  };

  const fetchAreaItems = async (areaName) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/filter.php?a=${areaName}`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      setAreaItems(data.meals);
    } else {
      setAreaItems([]);
    }
  };

  const handleClick = (areaName) => {
    setIsSelected(true);
    fetchAreaItems(areaName);
  };

  useEffect(() => {
    fetchAreas();
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
              setAreaItems([]);
            }}
          />
        ) : (
          <AreaList items={areaList} type="area" handleClick={handleClick} />
        )}
      </div>
    </div>
  );
}

export default AreaPage;
