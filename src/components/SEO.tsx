import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: any;
}

export default function SEO({ title, description, keywords, schema }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Lommavy Luxury`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // JSON-LD Schema
    if (schema) {
      let scriptSchema = document.querySelector('script[type="application/ld+json"]');
      if (scriptSchema) {
        scriptSchema.innerHTML = JSON.stringify(schema);
      } else {
        scriptSchema = document.createElement('script');
        scriptSchema.setAttribute('type', 'application/ld+json');
        scriptSchema.innerHTML = JSON.stringify(schema);
        document.head.appendChild(scriptSchema);
      }
    }

    return () => {
      // Optional Cleanup if needed when unmounting
    };
  }, [title, description, keywords, schema]);

  return null;
}
