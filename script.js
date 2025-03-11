document.addEventListener("DOMContentLoaded", () => {
    const cartBtns = document.querySelectorAll(".add-to-cart");

    cartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});
