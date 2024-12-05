import Image, { StaticImageData } from "next/image";

interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/30 px-2 py-1 rounded-md">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
