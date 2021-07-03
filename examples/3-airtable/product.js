const result = document.querySelector(".result");

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading...</h2>`;

  try {
    // const id = "?id=1";
    const id = window.location.search;
    const {
      data: { fields },
    } = await axios.get(`/api/3-product${id}`);
    const {
      name,
      desc,
      price,
      image: {
        0: { url },
      },
    } = fields;
    result.innerHTML = ` <h1 class="title">${name}</h1>
    <article class="product">
      <img class="product-img"
      src=${url}
      alt=${name}
      />
      <div class="product-info">
        <h5 class="title">${name}</h5>
        <h5 class="price">$${price}</h5>
        <p class="desc">${desc}</p>
      </div>
    </article>`;
  } catch (error) {
    console.log(error);
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();
