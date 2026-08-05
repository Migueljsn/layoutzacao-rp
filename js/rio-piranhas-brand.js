document.addEventListener("DOMContentLoaded", () => {
  const checkoutUrl = "https://pay.kiwify.com.br/fhO1jUD";
  const ebooks = [
    {
      title: "Aprenda mais de 300 tipos de Cross Merchandising",
      image: "images/ebooks/aprenda-mais-de-300-cross.png",
      alt: "Ebook Aprenda mais de 300 tipos de Cross Merchandising",
    },
    {
      title: "Layout de Bazar",
      image: "images/ebooks/layout-bazar.png",
      alt: "Ebook Layout de Bazar",
    },
    {
      title: "Layout de Cereais e Farináceos",
      image: "images/ebooks/layout-cereais-farinaceos.png",
      alt: "Ebook Layout de Cereais e Farináceos",
    },
    {
      title: "Cross Merchandising — Setor de Perecíveis",
      image: "images/ebooks/cross-merchandising-pereciveis.png",
      alt: "Ebook Cross Merchandising para o Setor de Perecíveis",
    },
    {
      title: "Layout de Limpeza",
      image: "images/ebooks/layout-limpeza.png",
      alt: "Ebook Layout de Limpeza",
    },
    {
      title: "Layout de Perfumaria",
      image: "images/ebooks/layout-perfumaria.png",
      alt: "Ebook Layout de Perfumaria",
    },
    {
      title: "Processos de Layouts",
      image: "images/ebooks/processos-de-layouts.png",
      alt: "Ebook Processos de Layouts",
    },
    {
      title: "Reposição de Supermercado",
      image: "images/ebooks/reposicao-supermercado.png",
      alt: "Ebook Reposição de Supermercado",
    },
  ];

  document
    .querySelectorAll('a[href^="https://pay.kiwify.com.br/"]')
    .forEach((link) => {
      link.href = checkoutUrl;
    });

  const storeVideos = [
    {
      src: "videos/rio-piranhas-vcl.mp4",
      poster: "images/rio-piranhas-vcl.jpg",
      label: "Apresentação de layoutização real da Rio Piranhas",
    },
    {
      src: "videos/rio-piranhas-layout-01.mp4",
      poster: "images/rio-piranhas-video-01.jpg",
      label: "Layout real da Rio Piranhas: exposição de produtos para cabelos",
    },
    {
      src: "videos/rio-piranhas-layout-02.mp4",
      poster: "images/rio-piranhas-video-02.jpg",
      label: "Layout real da Rio Piranhas: organização por marcas e categorias",
    },
    {
      src: "videos/rio-piranhas-layout-03.mp4",
      poster: "images/rio-piranhas-video-03.jpg",
      label: "Layout real da Rio Piranhas: exposição vertical e pontos extras",
    },
    {
      src: "videos/rio-piranhas-layout-04.mp4",
      poster: "images/rio-piranhas-video-04.jpg",
      label: "Layout real da Rio Piranhas: abastecimento e organização das prateleiras",
    },
  ];

  const legacyPlayers = document.querySelectorAll("video-js, vturb-smartplayer");

  legacyPlayers.forEach((player, index) => {
    const media = storeVideos[index];
    const frame = player.parentElement;

    if (!media || !frame) {
      return;
    }

    frame.classList.add("rp-video-frame");
    frame.removeAttribute("style");
    frame.innerHTML = `
      <video
        class="rp-store-video"
        controls
        playsinline
        preload="metadata"
        poster="${media.poster}"
        aria-label="${media.label}"
      >
        <source src="${media.src}" type="video/mp4">
        Seu navegador não oferece suporte à reprodução deste vídeo.
      </video>
    `;
  });

  document
    .querySelectorAll(
      'script[src*="converteai.net"], script[src*="cdn.atomicatmedia.net/cdn/s2.js"], script[src^="js/player"], script[src="js/s2.js"]',
    )
    .forEach((script) => script.remove());

  const layoutsCollage = document.querySelector(
    'img[src*="nGLYIX4324046"], img[srcset*="nGLYIX4324046"]',
  );

  if (layoutsCollage) {
    layoutsCollage.src = "images/rio-piranhas-layouts-collage-v2.png";
    layoutsCollage.removeAttribute("srcset");
    layoutsCollage.removeAttribute("sizes");
    layoutsCollage.width = 1536;
    layoutsCollage.height = 1152;
    layoutsCollage.alt =
      "Exemplos reais de layoutização e organização de categorias na Rio Piranhas";
  }

  const heroHeading = document.querySelector(
    ".atomicat-heading-title-6a5a6e2 p",
  );

  if (heroHeading) {
    heroHeading.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) {
        return;
      }

      node.textContent = node.textContent
        .replace("OS SEGREDOS DOS MEUS ", "OS SEGREDOS DOS ")
        .replace(
          "DE MAIS DE 100 SUPERMERCADOS",
          "DE MAIS DE 350 SUPERMERCADOS E FARMÁCIAS",
        );
    });
  }

  const segmentCopyUpdates = [
    [
      "Conteúdo especializado para donos e donas de supermercados.",
      "Conteúdo especializado para supermercados e farmácias.",
    ],
    [
      "ESCALE O LUCRO DO SEU SUPERMERCADO ATRAVÉS",
      "ESCALE O LUCRO DO SEU SUPERMERCADO OU FARMÁCIA ATRAVÉS",
    ],
    [
      "EXCLUSIVO PARA DONOS E DONAS DE SUPERMERCADOS QUE",
      "EXCLUSIVO PARA PROFISSIONAIS DE SUPERMERCADOS E FARMÁCIAS QUE",
    ],
    [
      "DONOS E DONAS DE SUPERMERCADOS, QUE ALCANÇARAM",
      "PROFISSIONAIS DE SUPERMERCADOS E FARMÁCIAS QUE ALCANÇARAM",
    ],
    [
      "17 ANOS NA LAYOUTIZAÇÃO DE PEQUENOS, MÉDIOS E GRANDES SUPERMERCADOS",
      "17 ANOS NA LAYOUTIZAÇÃO DE PEQUENOS, MÉDIOS E GRANDES PONTOS DE VENDA",
    ],
    [
      "LAYOUTIZAÇÃO DO SEU SUPERMERCADO",
      "LAYOUTIZAÇÃO DO SEU SUPERMERCADO OU FARMÁCIA",
    ],
    [
      "O dono de um supermercado que não investe",
      "O gestor de um supermercado ou de uma farmácia que não investe",
    ],
    [
      "a falta de layoutização no supermercado",
      "a falta de layoutização no ponto de venda",
    ],
    [
      "O que são os ebooks de layoutização para supermercados?",
      "O que são os ebooks de layoutização para supermercados e farmácias?",
    ],
    [
      "organizar e otimizar o espaço do seu supermercado",
      "organizar e otimizar o espaço do seu supermercado ou farmácia",
    ],
    [
      "Os ebooks são ideais para donos de supermercados, gerentes de loja, consultores de varejo e qualquer pessoa interessada em melhorar a eficiência e a rentabilidade de um supermercado",
      "Os ebooks são ideais para donos e gestores de supermercados e farmácias, gerentes de loja, consultores de varejo e profissionais interessados em melhorar a eficiência e a rentabilidade do ponto de venda",
    ],
    [
      "adaptáveis a supermercados de todos os tamanhos, desde pequenos mercados locais até grandes redes de varejo",
      "adaptáveis a supermercados e farmácias de todos os tamanhos, desde pequenos estabelecimentos locais até grandes redes de varejo",
    ],
    [
      "ajudar donos de supermercados a obterem resultados financeiros utilizando a layoutização em seus supermercados",
      "ajudar gestores de supermercados e farmácias a obterem melhores resultados financeiros utilizando a layoutização de seus pontos de venda",
    ],
  ];

  const textWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
  );

  let textNode = textWalker.nextNode();

  while (textNode) {
    segmentCopyUpdates.forEach(([currentCopy, newCopy]) => {
      textNode.textContent = textNode.textContent.replace(currentCopy, newCopy);
    });
    textNode = textWalker.nextNode();
  }

  const pageDescription =
    "Descubra como um layout estratégico pode aumentar as vendas de supermercados e farmácias, fortalecendo faturamento, margem e ticket médio.";

  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    pageDescription,
  );
  document.querySelector('meta[property="og:description"]')?.setAttribute(
    "content",
    pageDescription,
  );

  const copyUpdates = new Map([
    [
      "O QUE ALGUNS DONOS E DONAS DE SUPERMERCADOS DISSERAM.",
      "VEJA LAYOUTS REAIS DA RIO PIRANHAS ORGANIZADOS NA PRÁTICA.",
    ],
    [
      "OUÇA O DEPOIMENTO DO SAMUEL TORQUATO DONO DO SUPERMERCADO TORQUATO DE ITABUNA-BA.",
      "VEJA DE PERTO COMO UMA BOA LAYOUTIZAÇÃO ORGANIZA AS CATEGORIAS E FACILITA A COMPRA.",
    ],
    [
      "(aperte o play para começar o vídeo)",
      "(aperte o play para ver os detalhes do layout)",
    ],
  ]);

  document.querySelectorAll("h1, h2, h3, p").forEach((element) => {
    const replacement = copyUpdates.get(element.textContent.trim());

    if (replacement) {
      element.textContent = replacement;
    }
  });

  const purchaseSection = document.getElementById("compra");

  if (purchaseSection) {
    purchaseSection.classList.add("rp-catalog-section");
    purchaseSection.innerHTML = `
      <div class="rp-catalog">
        <header class="rp-catalog__header">
          <span class="rp-catalog__eyebrow">Biblioteca Rio Piranhas</span>
          <h2 class="rp-catalog__title">Escolha o ebook ideal para o seu negócio</h2>
          <p class="rp-catalog__subtitle">
            Escolha um conteúdo individual ou leve a biblioteca completa.
          </p>
        </header>
        <div class="rp-bundle-offer">
          <div class="rp-bundle-offer__copy">
            <span class="rp-bundle-offer__eyebrow">Pacote completo</span>
            <strong class="rp-bundle-offer__title">Todos os 8 ebooks</strong>
            <span class="rp-bundle-offer__text">A biblioteca completa por apenas</span>
          </div>
          <div class="rp-bundle-offer__price">R$ 10,00</div>
          <a class="rp-bundle-offer__button" href="${checkoutUrl}">
            QUERO O PACOTE COMPLETO
          </a>
        </div>
        <div class="rp-catalog__grid">
          ${ebooks
            .map(
              (ebook) => `
                <article class="rp-ebook-card">
                  <div class="rp-ebook-card__media">
                    <img
                      src="${ebook.image}"
                      alt="${ebook.alt}"
                      loading="lazy"
                      decoding="async"
                    >
                  </div>
                  <div class="rp-ebook-card__body">
                    <h3 class="rp-ebook-card__title">${ebook.title}</h3>
                    <div class="rp-ebook-card__price" aria-label="90 centavos por ebook">
                      <span>por apenas</span>
                      <strong>R$ 0,90</strong>
                      <small>pagamento único</small>
                    </div>
                    <a class="rp-ebook-card__button" href="${checkoutUrl}">
                      QUERO ESTE EBOOK
                    </a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  document
    .querySelectorAll('a[href^="https://pay.kiwify.com.br/"]')
    .forEach((link) => {
      if (link.closest(".rp-ebook-card, .rp-bundle-offer")) {
        return;
      }

      let legacyOffer = link.closest(".a-b-o-cont");

      while (legacyOffer?.parentElement?.closest(".a-b-o-cont")) {
        legacyOffer = legacyOffer.parentElement.closest(".a-b-o-cont");
      }

      legacyOffer?.remove();
    });

  if (purchaseSection && !document.querySelector(".rp-offer-trust")) {
    purchaseSection.insertAdjacentHTML(
      "beforebegin",
      `
        <section class="rp-offer-trust" aria-label="Rio Piranhas">
          <div class="rp-offer-trust__inner">
            <img
              class="rp-offer-trust__logo"
              src="images/logo-rio-piranhas.png"
              width="78"
              height="78"
              alt="Rio Piranhas"
            >
            <div>
              <strong class="rp-offer-trust__title">Conteúdo prático para supermercados e farmácias</strong>
              <span class="rp-offer-trust__text">
                Uma iniciativa Rio Piranhas para ajudar gestores a organizar melhor seus pontos de venda e vender mais.
              </span>
            </div>
          </div>
        </section>
      `,
    );
  }

  const copyrightSection = document.querySelector(".atomicat-container-745140b");

  if (copyrightSection && !document.querySelector(".rp-footer-brand")) {
    copyrightSection.insertAdjacentHTML(
      "beforebegin",
      `
        <section class="rp-footer-brand" aria-label="Sobre a Rio Piranhas">
          <img
            class="rp-footer-brand__logo"
            src="images/logo-rio-piranhas.png"
            width="104"
            height="104"
            loading="lazy"
            alt="Rio Piranhas"
          >
          <div class="rp-footer-brand__title">Rio Piranhas</div>
          <p class="rp-footer-brand__text">
            Conteúdo e soluções pensados para fortalecer os resultados de supermercados, farmácias e varejistas.
          </p>
        </section>
      `,
    );
  }
});
