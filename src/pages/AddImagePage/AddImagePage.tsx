import React, { useState, useEffect } from "react";
import HeaderComponet from "../../components/HeaderComponet";
import "./AddImagePage.css";
import * as GalleryController from "../../controllers/gallery-controller";
// import {useHistory} from 'react-router-dom';


const AddImagePage = () => {
  const [poster, setPoster] = useState();
  const [preview, setPreview] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const history = useHistory();

  const saveImage = async () => {
    await GalleryController.saveImage(title, description, poster);
    alert("Image Saved successfully.");
    window.location.href='/';
    
  };

  useEffect(() => {
    if (poster) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(poster);
    }
  }, [poster]);
  return (
    <div className="add-image-page home-page px-2 d-flex flex-column">
      <HeaderComponet title="Add New Image" onSave={saveImage} />
      <div className="add-form d-flex">
        <div className="form d-flex flex-column p-4">
          <div className="form-group mb-4 title">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Enter Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="form-upload p-4 d-flex flex-column">
          <div className="form-group d-flex flex-column  align-self-stretch justify-self-stretch">
            <label>Upload poster</label>
            <input
              type="file"
              className="form-control-file"
              onChange={(event: any) => {
                const file = event.target.files[0];
                if (file) setPoster(file);
              }}
            />
          </div>
          {preview !== "" && (
            <div className="poster">
              <p>Poster</p>
              <img src={preview} alt="" className="preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddImagePage;
