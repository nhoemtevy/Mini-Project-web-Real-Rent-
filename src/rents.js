function displayProducts(products, containerSelector, imageLink) {
    let container = document.querySelector(containerSelector);
    products.forEach((productspopular) => {
      container.innerHTML += `
            <div class="w-full p-6 flex flex-col border border-blue-200 rounded-md hover:scale-105">
              <div class="bg-blue-700"> 
                <a href="">
                  <img class="bg-blue-700 h-64 w-96 md:h-56 sm:h-56" src="${imageLink}${productspopular.thumbnail} ">
                </a>
              </div>
              <div class="pt-3 flex items-center justify-between py-4">
                <div class="flex">
                  <svg class="w-5 h-5 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                  </svg>
                  <svg class="w-5 h-5 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                  </svg>
                  <svg class="w-5 h-5 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                  </svg>
                  <svg class="w-5 h-5 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                  </svg>
                  <svg class="w-5 h-5 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                  </svg>
                  <p class="pl-4">5.0/5.0</p>
                </div>    
                <svg class="h-6 w-6 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
                <p class="">${productspopular.title}</p>
                <p class="pt-4 text-blue-700 font-semibold text-right">$${productspopular.price}</p>
            </div>
      `;
    });
  }
  let image = "../picture/";
  let products = [
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 130,
      thumbnail: "886df939bccf2abe0f0ff1966bdebf6b.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 190,
      thumbnail: "pic2.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 115,
      thumbnail: "ecdf218c6963ee24952e9a66f87a2dff.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 130,
      thumbnail: "886df939bccf2abe0f0ff1966bdebf6b.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 190,
      thumbnail: "pic2.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 115,
      thumbnail: "ecdf218c6963ee24952e9a66f87a2dff.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 130,
      thumbnail: "886df939bccf2abe0f0ff1966bdebf6b.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 190,
      thumbnail: "pic2.jpg",
    },
    {
      title: "Looking for a real estate for rent in Phnom Penh?",
      price: 115,
      thumbnail: "ecdf218c6963ee24952e9a66f87a2dff.jpg",
    },
  ];
  displayProducts(products, "#popular", image);