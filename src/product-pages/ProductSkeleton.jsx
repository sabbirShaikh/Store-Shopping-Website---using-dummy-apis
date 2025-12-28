import ContentLoader from "react-content-loader";

function ProductSkeleton() {
  return (
    <div className="bg-white border border-zinc-100 rounded-3xl overflow-hidden flex flex-col h-full">
      <ContentLoader
        speed={2}
        width="100%"
        height={500}
        viewBox="0 0 320 500"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
        style={{ width: "100%" }}
      >
        {/* Image Area */}
        <rect x="0" y="0" rx="0" ry="0" width="320" height="280" />

        {/* Category Badge */}
        <rect x="15" y="15" rx="10" ry="10" width="80" height="20" />

        {/* Title */}
        <rect x="20" y="300" rx="4" ry="4" width="220" height="24" />

        {/* Description Lines */}
        <rect x="20" y="335" rx="3" ry="3" width="280" height="12" />
        <rect x="20" y="355" rx="3" ry="3" width="180" height="12" />

        {/* Price Label */}
        <rect x="20" y="390" rx="3" ry="3" width="40" height="10" />
        {/* Price Value */}
        <rect x="20" y="405" rx="4" ry="4" width="100" height="28" />

        {/* Main Action Button */}
        <rect x="20" y="450" rx="12" ry="12" width="280" height="40" />
      </ContentLoader>
    </div>
  );
}

export default ProductSkeleton;
