import Image from "next/image";

const ImagePrefix = '/products/'
const NoImage = 'no_image.jpg'

export default function CardImage({image}: any) {
  const imagePath = image ? ImagePrefix + image : ImagePrefix + NoImage
  return (
    <div className="col-span-3 row-span-4 p-1 m-1">
      <a href="#">
        <Image
          width={200}
          height={200}
          src={imagePath}
          className="rounded-t-xl object-cover h-48 w-full"
        />
      </a>
    </div>
  )
}
