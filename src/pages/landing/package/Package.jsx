import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { getAllcategory } from "../../../services/MessageService";

import { useState, useEffect } from "react";
import MenuTop from "./../../../component/menuTop/MenuTop";
import PackageCreator from "./PackageCreator";
import Footer from "../../../component/footer/Footer";
import "./package.css";

export default function Package() {
  const [expanded, setExpanded] = useState(false);

  //UseEffect Call api
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
  // UseEffect ---------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: groupsData } = await getAllcategory();
        // setContacts(contactsData);
        // setFilteredContacts(contactsData);
        setGroups(groupsData);
        // setPackagelist(packageData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // end useefect

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    boxShadow: "0 2px 5px #dddddd",
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
  };

  const summaryStyle = {
    flexDirection: "column",
    "@media screen and (max-width: 800px)": {
      flexDirection: "row",
    },
  };

  return (
    <div>
      <MenuTop />
      <div className="packageLand">
        <div className="categoryContainer">
          {/* /// ------------ map ///// */}
          {groups.map((data) => (
            <Accordion
              className="accordion"
              sx={accordionStyle}
              expanded={expanded === `panel${data.id}`}
              onChange={handleChange(`panel${data.id}`)}
            >
              <AccordionSummary
                sx={summaryStyle}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="categoryPicture"></div>

                <Typography
                  sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
                >
                  <span className="categoryTitle bold">{data.name}</span>
                  <span className="categoryDescription">
                    {data.description}
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PackageCreator id={data.id} />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
