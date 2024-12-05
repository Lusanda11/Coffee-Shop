// ****************** Coffee Shop Functionality *********************



// This block selects the navbar element using the class "navbar" and assigns it to the variable "navbar".
// ----------------------------------------------------------------------------------------------------------------------------
    let navbar = document.querySelector(".navbar");
// ----------------------------------------------------------------------------------------------------------------------------

// This block sets up an onclick event listener for the element with id "menu-btn". When clicked, it toggles the "active" class on the navbar element and removes the "active" class from the searchForm and cartItem elements.
// ----------------------------------------------------------------------------------------------------------------------------
    document.querySelector("#menu-btn").onclick = () =>
    {
        navbar.classList.toggle("active");
        searchForm.classList.remove("active");
        cartItem.classList.remove("active");
    }
// ----------------------------------------------------------------------------------------------------------------------------

// This block selects the searchForm element using the class "search-form" and assigns it to the variable "searchForm".
// ----------------------------------------------------------------------------------------------------------------------------
    let searchForm = document.querySelector(".search-form");
// ----------------------------------------------------------------------------------------------------------------------------

// This block sets up an onclick event listener for the element with id "search-btn". When clicked, it toggles the "active" class on the searchForm element and removes the "active" class from the navbar and cartItem elements.
// ----------------------------------------------------------------------------------------------------------------------------
    document.querySelector("#search-btn").onclick = () =>
    {
        searchForm.classList.toggle("active");
        navbar.classList.remove("active");
        cartItem.classList.remove("active");
    }
// ----------------------------------------------------------------------------------------------------------------------------

// This block selects the cartItem element using the class "cart-items-container" and assigns it to the variable "cartItem".
// ----------------------------------------------------------------------------------------------------------------------------
    let cartItem = document.querySelector(".cart-items-container");
// ----------------------------------------------------------------------------------------------------------------------------

// This block sets up an onclick event listener for the element with id "cart-btn". When clicked, it toggles the "active" class on the cartItem element and removes the "active" class from the navbar and searchForm elements.
// ----------------------------------------------------------------------------------------------------------------------------
    document.querySelector("#cart-btn").onclick = () =>
    {
        cartItem.classList.toggle("active");
        navbar.classList.remove("active");
        searchForm.classList.remove("active");
    }
// ----------------------------------------------------------------------------------------------------------------------------

// This block sets up an onscroll event listener for the window. When the window is scrolled, it removes the "active" class from the navbar, searchForm, and cartItem elements.
// ----------------------------------------------------------------------------------------------------------------------------
    window.onscroll = () =>
    {
        navbar.classList.remove("active");
        searchForm.classList.remove("active");
        cartItem.classList.remove("active");
    }
// ----------------------------------------------------------------------------------------------------------------------------
