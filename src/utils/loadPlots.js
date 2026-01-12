import matter from "gray-matter";

const plotFiles = import.meta.glob("/content/plots/*.md", {
  eager: true,
  as: "raw",
});

export function loadPlots() {
  return Object.entries(plotFiles).map(([path, content]) => {
    const { data, content: body } = matter(content);

    const slug = path
      .split("/")
      .pop()
      .replace(".md", "");

    return {
      slug,
      title: data.title,
      location: data.location,
      price: data.price.toLocaleString(),
      image: data.image,
      description: body,
    };
  });
}
