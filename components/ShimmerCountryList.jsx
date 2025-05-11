
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShimmerCountryList() {
  return (
   
  <div className="country-card">
    <Skeleton height={160} width={250} baseColor="#e0e0e0" highlightColor="#f5f5f5" style={{ borderRadius: "0px" }} />
    <h2><Skeleton width={120} baseColor="#e0e0e0" highlightColor="#f5f5f5" style={{ margin: "0px 24px", borderRadius: "0px" }} /></h2>
    <p><Skeleton width={160} baseColor="#e0e0e0" highlightColor="#f5f5f5" style={{ margin: "0px 24px", borderRadius: "0px" }} /></p>
    <p><Skeleton width={120} baseColor="#e0e0e0" highlightColor="#f5f5f5" style={{ margin: "0px 24px", borderRadius: "0px" }} /></p>
    <p><Skeleton width={140} baseColor="#e0e0e0" highlightColor="#f5f5f5" style={{ margin: "0px 24px", borderRadius: "0px" }} /></p>
  </div>


  )
}

export default ShimmerCountryList
