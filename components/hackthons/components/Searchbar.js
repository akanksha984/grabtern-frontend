import React, { useState } from "react";
import hackathonStyle from "../../../styles/hackathon.module.css";
// import styles from '../styles/Searchbar.module.css'; // Import the CSS file
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import { IconButton, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
function SearchBar({
  setSearchQuery,
  handleTagFilter,
  InternshipLabels,
  HackathonLabels,
}) {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagChange = (value) => {
    console.log("tagefilter", value);
    console.log(value);
    setSelectedTag(value);
    handleTagFilter(value);
  };

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        variant="outlined"
        placeholder={
          HackathonLabels ? "Search Hackathons" : "Search Internships"
        }
        size="Normal"
        sx={{
          color: "#845ec2",
        }}
        style={{
          borderColor: "#845ec2",
          borderRadius: 50,
        }}
        InputProps={{
          sx: { height: 55 },
          style: {
            fontSize: 20,
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 5,
            marginTop: 0,
            borderRadius: 50,
            color: "#845ec2",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="search">
                <SearchIcon style={{ fill: "black" }} sx={{ fontSize: 35 }} />
              </IconButton>
            </InputAdornment>
          ),
          "& .MuiFormLabel-root": {
            fontSize: "0.8rem",
          },
        }}
        InputLabelProps={{ style: { fontSize: 90 } }}
      />

      <div
        className={`${hackathonStyle.chipfil} `}
        style={{ marginTop: "20px" }}
      >
        <Chip
          variant={selectedTag === "All" ? "default" : "outlined"}
          // color={selectedTag === "All" ? "primary" : "info"}
          label="ALL"
          value="All"
          onClick={() => handleTagChange("All")}
          style={{
            width: "90px",
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag === "All" ? "#845ec2" : "#fff",
            borderColor: selectedTag === "All" ? "#845ec2" : "#845ec2",
            color: selectedTag === "All" ? "#fff" : "#845ec2",
          }}
        />

        {InternshipLabels &&
          InternshipLabels.map((mylabel) => (
            <Chip
              key={mylabel}
              variant={selectedTag === { mylabel } ? "default" : "outlined"}
              // color={selectedTag === label ? "primary" : "info"}
              label={mylabel}
              onClick={() => handleTagChange(mylabel)}
              style={{
                height: "45px",
                fontSize: "20px",
                backgroundColor: selectedTag === mylabel ? "#845ec2" : "#fff",
                borderColor: selectedTag === mylabel ? "#845ec2" : "#845ec2",
                color: selectedTag === mylabel ? "#fff" : "#845ec2",
              }}
            />
          ))}
        {HackathonLabels &&
          HackathonLabels.map((mylabel) => (
            <Chip
              key={mylabel}
              variant={selectedTag === { mylabel } ? "default" : "outlined"}
              // color={selectedTag === label ? "primary" : "info"}
              label={mylabel}
              onClick={() => handleTagChange(mylabel)}
              style={{
                height: "45px",
                fontSize: "20px",
                backgroundColor: selectedTag === mylabel ? "#845ec2" : "#fff",
                borderColor: selectedTag === mylabel ? "#845ec2" : "#845ec2",
                color: selectedTag === mylabel ? "#fff" : "#845ec2",
              }}
            />
          ))}
      </div>
    </form>
  );
}

export default SearchBar;
