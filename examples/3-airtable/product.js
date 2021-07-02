const result = document.querySelector(".result");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const fetchData = async () => {
  const { data } = await axios.get(`/api/3-product?id=${id}`);
  const product = await data
    .map((item) => {
      if (item.id === id) {
        const { name, url, price, desc } = item;
        return `
      <h1>${name}</h1>
      <article class='product'>
        <img class='product-img' src=${url} alt=${name} />
        <div class="product-info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
          <p class="desc">${desc}</p>
        </div>
      </article>
      `;
      }
    })
    .join("");

  result.innerHTML = product;
};

fetchData();
