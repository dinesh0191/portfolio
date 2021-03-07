import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "f8sxiaud",
  dataset: "production",
  useCdn: false,
});
