import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg = ({ containerStyles, imgSrc }: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="Daniel Molina" fill priority />
    </div>
  );
};

export default DevImg;
