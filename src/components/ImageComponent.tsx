interface ImageComponentProps {
  imageUrl: string;
  width: string;
}

export const ImageComponent = ({ imageUrl, width }: ImageComponentProps) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Description of the image"
        style={{ width: width, height: "auto" }}
      />
    </div>
  );
};

export default ImageComponent;
