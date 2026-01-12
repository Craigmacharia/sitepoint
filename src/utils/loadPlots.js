const plotFiles = import.meta.glob("/public/content/plots/*.json", {
  eager: true,
});

export function loadPlots() {
  return Object.entries(plotFiles).map(([path, module]) => {
    const data = module.default;

    const slug = path
      .split("/")
      .pop()
      .replace(".json", "");

    return {
      slug,
      title: data.title,
      location: data.location,
      price: data.price.toLocaleString(),
      image: data.image,
      description: data.description,
    };
  });
}
