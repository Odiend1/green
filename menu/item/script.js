
import { menuItems } from "../menu-items.js";

var itemID = window.location.href.split("?item=")[1];
var item = menuItems.itemLookup[itemID];

var itemTitle = document.getElementById("item-name");
var itemDesc = document.getElementById("item-desc");
var itemPrice = document.getElementById("item-price");
var itemImg = document.getElementById("item-img");

itemTitle.innerHTML = item.name;
itemDesc.innerHTML = item.description;
itemPrice.innerHTML = "$" + item.price;
itemImg.src = `../../assets/images/menu-items/${item.name.toLowerCase().replaceAll(" ", "-")}.png`;