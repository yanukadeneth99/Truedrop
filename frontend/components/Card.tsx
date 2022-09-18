import Image from "next/image";
import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

const Card = ({
  name,
  position,
  image,
  links,
}: {
  name: string;
  position: string;
  image: any;
  links: string[];
}) => {
  return (
    <div>
      <div className="max-w-xs bg-skin-secondary rounded-xl text-[#ffffff] my-8">
        <div className="flex flex-col justify-center items-center py-8 px-8">
          <div className="w-[256px] h-[237px] relative">
            <Image
              src={image}
              className="rounded-full"
              layout="fill"
              priority
              alt="Profile Picture"
            />
          </div>
          <h2 className="text-3xl my-3">{name}</h2>
          <p className="mb-3">{position}</p>
          <div className="flex space-x-9">
            <a href={links[0]} target="_blank" rel="noreferrer">
              <BsGithub className="text-3xl cursor-pointer" />
            </a>
            <a href={links[1]} target="_blank" rel="noreferrer">
              <BsTwitter className="text-3xl cursor-pointer" />
            </a>
            <a href={links[2]} target="_blank" rel="noreferrer">
              <BsDiscord className="text-3xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
