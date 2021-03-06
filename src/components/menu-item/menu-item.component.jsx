import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemImage,
  MenuItemContent,
  MenuItemContentTitle,
  MenuItemContentSubtitle
} from "./menu-item.styled";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemImage
      imageUrl={imageUrl}
      className='background-image'
    ></MenuItemImage>
    <MenuItemContent className='content'>
      <MenuItemContentTitle>{title.toUpperCase()}</MenuItemContentTitle>
      <MenuItemContentSubtitle>SHOP NOW</MenuItemContentSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
