const ProductCardSkeleton = () => {
    return (
      <div className="bg-background2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="relative flex flex-col h-full">
          {/* Skeleton for Image */}
          <div className="w-full h-60 bg-gray-300"></div>
  
          {/* Skeleton for Content */}
          <div className="p-4 flex-grow">
            {/* Skeleton for Title */}
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>
            {/* Skeleton for Price */}
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
            {/* Skeleton for Description */}
            <ul>
              <li className="h-3 bg-gray-300 rounded w-full mb-2"></li>
              <li className="h-3 bg-gray-300 rounded w-3/4 mb-2"></li>
              <li className="h-3 bg-gray-300 rounded w-5/6 mb-2"></li>
            </ul>
          </div>
  
          {/* Skeleton for Button */}
          <div className="my-2 inline-block px-6 py-2 bg-gray-300 rounded-md w-2/3 mx-auto"></div>
        </div>
      </div>
    );
  };
  
  export default ProductCardSkeleton;
  