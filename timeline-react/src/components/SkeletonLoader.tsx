import React from "react";

const SkeletonLoader: React.FC = () => (
  <div className="space-y-3 p-2">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
  </div>
);

export default SkeletonLoader;
