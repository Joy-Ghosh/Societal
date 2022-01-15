// sidebar
const menuItems = document.querySelectorAll(".menu-items");

// remove all active items
const ChangeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// activating menu items
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    ChangeActiveItem();
    item.classList.add("active");
    if (item.id != "notification") {
      document.querySelector(".notification-popup").style.display = "none";
    }
    else{
        document.querySelector(".notification-popup").style.display = "block";
    }
  });
});
