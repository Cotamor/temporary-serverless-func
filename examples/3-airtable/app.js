const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/3-airtable");
    console.log(data);
    const products = data
      .map((product) => {
        const { id, name, url, price } = product;
        return `
      <a class='product' href='./product.html?id=${id}'>
        <img src=${url} alt=${name} />
        <div class='info'>
          <h5>${name}</h5>
          <h5 class='price'>$${price}</h5>
        </div>
      </a>
      `;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h4>There was an error</h4>`;
  }
};

fetchData();
