import { Metadata } from "next";

const constructMetadata = ({
  title = "Resonate Q2",
  description = `Real world example for "contact" application.`,
  image = "https://res.cloudinary.com/dei1wjr8a/image/upload/v1713304861/yy5trvuo4btooycl9tog.jpg",   // Update later
  icons = "/favicon.ico",
  noIndex = true
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{
          url: image
      }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@"
    },
    icons,
    metadataBase: new URL("https://resonateq2.vercel.app"),
    ...(noIndex && {
      robots: {
        index: true,
        follow: true
      }
    })
  };
};

export default constructMetadata