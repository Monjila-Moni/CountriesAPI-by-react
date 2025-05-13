import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShimmerCountryList() {
  return (
    <div className="country-card">
      <div className="country-img">
        <Skeleton 
          height={160} 
          width="100%" 
          baseColor="#e0e0e0" 
          highlightColor="#f5f5f5" 
        />
      </div>
      <div className="country-content">
        <h2>
          <Skeleton 
            width="60%" 
            baseColor="#e0e0e0" 
            highlightColor="#f5f5f5" 
          />
        </h2>
        <p>
          <Skeleton 
            width="80%" 
            baseColor="#e0e0e0" 
            highlightColor="#f5f5f5" 
          />
        </p>
        <p>
          <Skeleton 
            width="70%" 
            baseColor="#e0e0e0" 
            highlightColor="#f5f5f5" 
          />
        </p>
        <p>
          <Skeleton 
            width="50%" 
            baseColor="#e0e0e0" 
            highlightColor="#f5f5f5" 
          />
        </p>
      </div>
    </div>
  );
}

export default ShimmerCountryList;
