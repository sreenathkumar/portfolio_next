import client from "./sanity"

export const getMics = async () => {
  const response = await client.fetch(`*[_type == "others"]{
  "photo": {
    "alt": photo.alt,
    "url": photo.asset->url
  },
  "logo": {
    "alt": logo.alt,
    "url": logo.asset->url
  },
  menu_items
}`);

  return response;
}