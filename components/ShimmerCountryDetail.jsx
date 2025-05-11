import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShimmerCountryDetail() {
  return (
    <div className="country-details-container" aria-busy="true">

      {/* Country Details Skeleton */}
      <div className="country-details shimmer-country-details">
        {/* Flag/Image Placeholder */}
        <div className="country-img-area">
          <Skeleton height={300} width="100%" borderRadius={8} />
        </div>

        {/* Text Section */}
        <div className="details-text shimmer-text-area" style={{ flex: 1 }}>
          {/* Country Name */}
          <h2><Skeleton width={300} height={32} borderRadius={4} /></h2>

          {/* Details Paragraphs */}
          <p><Skeleton width={250} height={16} /></p>
          <p><Skeleton width={280} height={16} /></p>
          <p><Skeleton width={220} height={16} /></p>
          <p><Skeleton width={300} height={16} /></p>
          <p><Skeleton width={270} height={16} /></p>
          <p><Skeleton width={260} height={16} /></p>

          {/* Border Countries Label */}
          <h4 style={{ marginTop: "24px" }}>
            <Skeleton width={180} height={24} />
          </h4>

          {/* Border Country Skeleton Buttons */}
          <div className="border-countries" style={{ gap: "8px" }}>
            <Skeleton height={32} width={80} borderRadius={8} />
            <Skeleton height={32} width={80} borderRadius={8} />
            <Skeleton height={32} width={80} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerCountryDetail;
