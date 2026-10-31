import { useEffect } from "react";

const BASE_TITLE = "مسارات مهندس التكرير والبتروكيماويات";

export default function useSEO({ title, description, keywords, ogImage }) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = `${title} | ${BASE_TITLE}`;
    } else {
      document.title = BASE_TITLE;
    }

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }

    // 3. Update OG Title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", `${title} | ${BASE_TITLE}`);
      }
    }

    // 4. Update Meta Keywords if provided
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) {
        metaKw.setAttribute("content", keywords);
      }
    }

    // 5. Update OG Image if provided
    if (ogImage) {
      let metaImg = document.querySelector('meta[property="og:image"]');
      if (metaImg) {
        metaImg.setAttribute("content", ogImage);
      }
    }
  }, [title, description, keywords, ogImage]);
}
