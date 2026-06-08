import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    className="category-container"
    sx={{
      overflowX: "auto",
      width: "100%",
      py: 1,
      px: 2,
      borderBottom: "1px solid #3d3d3d",
      position: "sticky",
      top: 0,
      backgroundColor: "#0f0f0f",
      zIndex: 10,
    }}
  >
    {categories.map((category) => (
      <button
        className={`category-btn ${category.name === selectedCategory ? 'selected' : ''}`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
