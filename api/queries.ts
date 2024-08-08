import client from "./sanity"

export const getMics = async () => {
  try {
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
  } catch (error) {
    return []
  }

}

export const getFeaturedProjects = async () => {
  try {
    const response = await client.fetch(`*[_type == "projects" && featured == true]|order(completedAt desc){
      _id,
      title,
      description,
      "image": image.asset->url,
      "tags": tags,
      url,
      source
    }`);

    return response;
  } catch (error) {
    return []
  }
}