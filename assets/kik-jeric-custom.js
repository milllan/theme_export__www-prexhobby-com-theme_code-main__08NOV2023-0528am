class InfiniteScroll extends HTMLElement {
    constructor() {
        super(),
            (this.fecthingData = !1),
            (this.selectors = { container: '[id^="CollectionListContainer-"]' }),
            (this.collectionListContainer = document.querySelector(this.selectors.container)),
            (this.loader = this.querySelector(".loader")),
            this.collectionListContainer &&
                ((this.nextPage = this.collectionListContainer.dataset.nextpage),
                (this.nextBatch = this.collectionListContainer.dataset.nextbatch),
                (this.observer = new IntersectionObserver((t) => {
                    t.forEach((t) => {
                        t.isIntersecting &&
                            !this.fecthingData &&
                            "" != this.nextPage &&
                            setTimeout(() => {
                                this.observer.unobserve(this), (this.fecthingData = !0), this.loader.classList.add("loading"), this.fetchItems(this.nextPage);
                            }, 1e3);
                    });
                })),
                this.observer.observe(this));
    }
    fetchItems(t) {
        fetch(t)
            .then((t) => t.text())
            .then((t) => {
                let e = new DOMParser().parseFromString(t, "text/html").querySelector(this.selectors.container),
                    s = e.querySelectorAll(".collection-list__item"),
                    i = e.dataset.nextpage,
                    a = e.dataset.nextbatch;
                (this.nextPage = i),
                    (this.nextBatch = a),
                    "" == this.nextPage && "" != this.nextBatch && (this.nextPage = this.nextBatch),
                    this.loader.classList.remove("loading"),
                    s &&
                        s.forEach((t) => {
                            this.collectionListContainer.appendChild(t);
                        }),
                    (this.fecthingData = !1),
                    this.observer.observe(this);
            })
            .catch((t) => {
                (this.fecthingData = !1), this.loader.classList.remove("loading"), this.observer.observe(this), console.error("[Collection Infinite Scroll] Failed to fetch data", t);
            });
    }
}
customElements.define("infinite-scroll", InfiniteScroll);
class LazyImage extends HTMLElement {
    constructor() {
        if ((super(), (this.image = this.querySelector("img")), this.image)) {
            this.handleLazy();
            new MutationObserver((t) => {
                t.forEach((t) => {
                    (t.attributeName.includes("src") || t.attributeName.includes("srcset")) && this.handleLazy();
                });
            }).observe(this.image, { attributes: !0 });
        }
    }
    handleLazy() {
        this.image.complete ||
            (this.classList.add("loading"),
            this.image.addEventListener(
                "load",
                () => {
                    this.classList.remove("loading");
                },
                !1
            ));
    }
}
customElements.define("lazy-image", LazyImage);
