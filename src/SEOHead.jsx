import { useEffect } from "react";

export function SEOHead() {
  useEffect(() => {
    document.title =
      "Jordan Mitchell Coaching — Marketing to Tech PM in 6 Months";

    const setMeta = (name, content, attr = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Transition from marketing manager to tech Product Manager in 6 months. 1-on-1 coaching, proven roadmap, 200+ successful clients. Book your free strategy call."
    );

    setMeta(
      "keywords",
      "marketing to product manager, tech PM transition, product management coaching, career change tech, PM career coach"
    );

    setMeta(
      "og:title",
      "Marketing to Tech PM in 6 Months — Jordan Mitchell Coaching",
      "property"
    );

    setMeta(
      "og:description",
      "Proven system to help marketing professionals land high-paying tech PM roles without a CS degree.",
      "property"
    );

    setMeta("og:type", "website", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta(
      "twitter:title",
      "Marketing → Tech PM in 6 Months | Jordan Mitchell"
    );
  }, []);

  return null;
}