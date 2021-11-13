import HeaderComponet from "../../components/HeaderComponet";
import "./HomePage.css";
import ImageItemComponent from "./components/ImageItemComponent";
import * as GalleryController from "../../controllers/gallery-controller";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [images, setImages] = useState<any[]>();
  const [results, setResults] = useState<any[]>();

  useEffect(() => {
    GalleryController.getAllImage().then((resp: any) => {
      return setImages([...resp]);
    });
    return () => {};
  }, []);

  const getAllImages = async () => {
    GalleryController.getAllImage().then((resp: any) => {
      setResults(undefined);
      return setImages([...resp]);
    });
  };

  const searchImages = (query: string) => {
    let key = query.toLowerCase().trim();
    if (key === "") {
      setResults(undefined);
      return;
    }
    let data = images!.filter((image) => {
      if (image) {
        let tempTitle = image.title.toLowerCase();
        return tempTitle.includes(key);
      }
      return false;
    });
    setResults([...data]);
  };

  return (
    <div className="home-page px-2 d-flex flex-column">
      <HeaderComponet title="Create Content" onSearch={searchImages} />
      <div className="home-content">
        {!images && <p>Loading...</p>}
        {images && images.length === 0 && <p>No Images found</p>}

        {!results &&
          images &&
          images.length > 0 &&
          images.map((image: any) => {
            return (
              <ImageItemComponent
                image={image}
                key={image._id}
                onDelete={getAllImages}
              />
            );
          })}
        {results && results.length === 0 && <p>No results found...</p>}
        {results &&
          results.length > 0 &&
          results.map((image: any) => {
            return (
              <ImageItemComponent
                image={image}
                key={image._id}
                onDelete={getAllImages}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
