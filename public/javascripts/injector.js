window.addEventListener("load", function() {
  const promo = `<div class="product-block product-block-js lanes promo">
    <div><strong>50%<strong></div>
    <div>off</div>
    <div>everything</div>
  </div>`;

  const addPromo = () => {
    const container = document.getElementById("FSMLazyLoadContainer");
    if (!container) {
      return;
    }

    const el = container.children[0];
    if (!el) {
      return;
    }

    const alreadyAddedPromo =
      container.children[1] &&
      container.children[1].classList.contains("promo");

    if (!alreadyAddedPromo) {
      observer.disconnect();
      el.insertAdjacentHTML("afterend", promo);
      observer.observe(targetNode, config);
    }
  };

  const targetNode = document.getElementById("catalog-results");
  const config = { childList: true, subtree: true };
  const observer = new MutationObserver(addPromo);
  observer.observe(targetNode, config);
  addPromo();
});
