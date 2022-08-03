import {Image, Link} from '@shopify/hydrogen';

/**
 * A shared component that defines a single featured collection to display on a storefront
 */
export default function FeaturedCollection({collections}) {
  // return collection ? (
  // ) : null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {collections.map((collection) => (
        <div
          key={collection.handle}
          className="shadow-xl pt-4 rounded-xl grid grid-cols-1 items-center bg-white overflow-hidden"
        >
          {collection.image ? (
            <Image
              image={collection.image}
              className="inline-block mx-auto w-60 h-60"
            />
          ) : null}
          <div className="py-10 text-center">
            {/* <h2 className="text-gray-700 text-3xl font-bold mb-5">
              {collection.title}
            </h2> */}
            {/* <p className="text-lg text-gray-500 mb-6">
              {collection.description}
            </p> */}
            <Link
              to={`/collections/${collection.handle}`}
              className="inline-block bg-gray-900 text-white text-lg font-medium rounded-md py-4 px-16 uppercase"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
