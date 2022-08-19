import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import {
  // getAllPackageByCategory,
  getPackageByCategory,
} from "../../../services/PackageService";

export default function PackageCreator({ id = 1 }) {
  //UseEffect Call api
  const [loading, setLoading] = useState(false);
  const [listdata, setListdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const { data: contactsData } = await getAllcategory();
        const { data: groupsData } = await getPackageByCategory({ id });
        // setContacts(contactsData);
        // setFilteredContacts(contactsData);
        setListdata(groupsData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // end useefect
  return (
    <div>
      {listdata.map((packageData) => {
        return (
          <div className="packageContainer">
            <div className="packageName bold">
              <div className="packagePicture"></div>
              {packageData.name}
            </div>
            <div className="packageData">
              <div className="packagePrice"> {packageData.price} تومان</div>
              <div className="packageDiscount bold">
                <Button
                  sx={{
                    marginLeft: "10px",
                    color: "#ffffff",
                    backgroundColor: "#49DEE9",
                    borderRadius: "10px",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  توضیحات
                </Button>
              </div>
              <LocalGroceryStoreOutlinedIcon className="packageBuyIcon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
