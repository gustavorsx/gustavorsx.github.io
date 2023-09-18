interface ImageWithTextProps {
  text: string;
  image: string;
}

function ImageWithText({ text, image }: ImageWithTextProps) {
  return (
    <li>
      <h2 className="text-left mb-4 text-white font-bold text-2xl">{text}</h2>
      <img src={image} className="mb-4 w-full" />
    </li>
  );
}

export default ImageWithText;
