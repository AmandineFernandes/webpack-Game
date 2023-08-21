const PageList = (argument = '') => {
  const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'Welcome,';

  const pageText = document.createElement('p');
    pageText.textContent = 'The Hyper Progame is the world’s premier event for computer and video games and related products.At The Hyper Progame,the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure';

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

  const displayResults = (articles) => {
    const resultsContent = articles.map((article) => (
      ` <div class="card">
            <div class="card-body">
              <article class="cardGame">
                  <img src="${article.background_image}" class="img-fluid" alt="game pictures"></img>
                  <h1>${article.name}</h1>
                  <h5>${article.released}</h5>
                  <a href="#pagedetail/${article.id}" class="show-more-link">Show more</a>
                </article>
            </div>
          </div>`
    ));
    const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=beebc0f245054327815139ce4f4076f1`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

  const pageListSection = document.querySelector('.page-list');
    pageListSection.insertBefore(pageTitle, pageListSection.firstChild);
    pageListSection.insertBefore(pageText, pageListSection.firstChild.nextSibling);

    preparePage();
  };

  render();
};

  