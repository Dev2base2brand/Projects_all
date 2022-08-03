// import {useShopQuery, flattenConnection} from '@shopify/hydrogen';
// import gql from 'graphql-tag';
// import {Suspense} from 'react';

// function BoxFallback() {
//   return (
//     <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 h-60"></div>
//   );
// }

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome({children}) {
  // const {data} = useShopQuery({query: QUERY});
  // const products = data && flattenConnection(data.products);
  // const collections = data && flattenConnection(data.collections);
  // const shopName = data ? data.shop.name : '';
  // const totalProducts = products && products.length;
  // const totalCollections = collections && collections.length;

  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Featured Collections
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Suspense fallback={<BoxFallback />}></Suspense>
        <Suspense fallback={<BoxFallback />}></Suspense>
      </div> */}
      {children}
    </div>
  );
}

// const QUERY = gql`
//   query welcomeContent {
//     shop {
//       name
//     }
//     products(first: 250) {
//       edges {
//         node {
//           handle
//         }
//       }
//     }
//     collections(first: 250) {
//       edges {
//         node {
//           handle
//         }
//       }
//     }
//   }
// `;
