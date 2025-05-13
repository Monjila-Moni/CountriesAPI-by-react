import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "../hooks/useTheme";

function ShimmerCountryDetail() {
  const [isDark] = useTheme();

  const baseColor = isDark ? "#2c2c2c" : "#e0e0e0";
  const highlightColor = isDark ? "#444" : "#f5f5f5";

  return (
    <div className="country-details-container" aria-busy="true">
      <div className="shimmer-country-details">
        {/* Flag/Image Skeleton */}
        <div className="shimmer-flag">
          <Skeleton
            height="100%"
            width="100%"
            baseColor={baseColor}
            highlightColor={highlightColor}
            style={{ borderRadius: "8px", aspectRatio: "16 / 9" }}
          />
        </div>

        {/* Text Section */}
        <div className="shimmer-text">
          <h2>
            <Skeleton
              width="60%"
              height={32}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </h2>

          <div className="details-text">
            {[250, 280, 220, 300, 270, 200, 260, 280].map((width, i) => (
              <p key={i}>
                <Skeleton
                  width="100%"
                  height={16}
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                />
              </p>
            ))}
          </div>

          {/* Border Countries */}
          <h4 style={{ marginTop: "24px" }}>
            <Skeleton
              width="50%"
              height={16}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </h4>

          <div className="shimmer-borders">
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={i}
                height={32}
                width={80}
                baseColor={baseColor}
                highlightColor={highlightColor}
                style={{ borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerCountryDetail;
