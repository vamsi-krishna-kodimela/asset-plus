import axios from "axios";
const http = axios.create({ baseURL: "http://localhost:3000/" });
export const getAllImage = async () => {
  const response = await http.get("/");
  return await response.data;
};

export const saveImage = async (
  title: string,
  description: string,
  image: any
) => {
  let data = new FormData();
  data.append("image", image, image.name);
  data.append("title", title);
  data.append("description", description);

  let response = await http.post("/", data, {
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data;`,
    },
  });

  return response.data;
};

export const deleteItemById = async (id: string) => {
  await http.delete(`/${id}`);
};
