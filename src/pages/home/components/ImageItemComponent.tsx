import React from "react";
import "./ImageItemComponent.css";
import { deleteItemById } from "../../../controllers/gallery-controller";
import { useState } from "react";

const ImageItemComponent = (props: any) => {
  const [confirm, setConfirm] = useState(false);
  const onDelete = async () => {
    // confirm('Are you sure you want to delete?');
    // if(!canClose)return;
    setConfirm(false);
    await deleteItemById(image._id);

    getAllImages();
    alert("Deleted successfully");
  };
  const askConfirmation = () => {
    console.log("Called");

    setConfirm(true);
  };

  const image = props.image;
  const getAllImages = props.onDelete;
  return (
    <div className="image-item d-flex" key={image._id}>
      {confirm && (
        <div className="dialog-alert">
          <p>Are you sure?</p>
          <div className="d-flex">
            <button className="btn btn-success" onClick={onDelete}>
              yes
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      )}

      <div className="image-container">
        <a href={`http://localhost:3000/${image.imageUrl}`} download>
          <img
            src={`http://localhost:3000/${image.imageUrl}`}
            alt={image.title}
            className="img img-fluid"
          />
        </a>
      </div>
      <div className="info-container d-flex flex-column justify-content-between px-2 py-1">
        <p className="img-item-title">{image.title}</p>
        <div className="footer d-flex align-items-center justify-content-between">
          <div>{image.createdOn}</div>
          <button className="btn" onClick={askConfirmation}>
            X
          </button>
          <button className="btn text-bold">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ImageItemComponent;
