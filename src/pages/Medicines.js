import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import getMedicineImage from "../utils/getMedicineImage";
import {
  dilution,
  biochemic,
  bc,
  rdrops,
  motherPrices,
} from "../data/medicinesData";

function Medicines({ addToCart }) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

const category =
  searchParams.get("category") || "Dilution";
  const [tab, setTab] = useState(category);
  const [search, setSearch] = useState(searchQuery);
  const [power, setPower] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  setTab(category);
}, [category]);

  const isMobile = window.innerWidth <= 768;
  useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false);

  }, 1200);

  

  return () =>
    clearTimeout(timer);

}, []);

 const getData = () => {
  if (tab === "Dilution") return dilution;
  if (tab === "Biochemic") return biochemic;
  if (tab === "BC") return bc;
  if (tab === "R Drops") return rdrops;
  if (tab === "Mother Tincture") return Object.keys(motherPrices);

  return []; // Default if no category matches
};

  const getPowers = () => {
    if (tab === "Dilution") return ["30", "200", "1M", "10M", "CM"];
    if (tab === "Biochemic") return ["3X", "6X", "12X", "30X", "200X"];
    if (tab === "Mother Tincture") return ["Q", "20ml"];
    return ["Standard"];
  };

const getPrice = (med, p) => {

  if (tab === "Mother Tincture") {
    return `₹${motherPrices[med] || 295}`;
  }

  if (tab === "Dilution") {
    if (p === "30") return "₹160";
    if (p === "200") return "₹185";
    if (p === "1M") return "₹230";
    if (p === "10M") return "₹250";
    return "₹320";
  }

  if (tab === "Biochemic") {
    if (p === "200X") return "₹315";
    return "₹220";
  }

  if (tab === "BC") return "₹220";

  if (tab === "R Drops") return "₹295";

  return "₹100";
};

const finalSearch = searchQuery || search;

const filteredData = getData().filter((item) =>
  item.toLowerCase().includes(finalSearch.toLowerCase())
);

const data = isMobile
  ? filteredData.slice(0, 80)
  : filteredData;



  return (
    <div
  className="fadeUp"
  style={{
    padding:
    isMobile
        ? "20px"
        : "40px"
  }}
>
      <div style={{ textAlign: "center" }}>

<h1
  className="gradientText"

  style={{
    fontSize:
      isMobile
        ? "42px"
        : "62px",

    fontWeight: "800",

    marginBottom: "10px"
  }}
>
  Explore HOMEOPATHY Medicines
</h1>

  <p
    style={{
      color: "#6b7280",

      fontSize: "18px"
    }}
  >
    Genuine homeopathic medicines trusted
    by families for generations.
  </p>

</div>


{/* Search */}

<div
  className="glass premiumShadow"
  style={{
    position: "sticky",

    top: "95px",

    zIndex: 100,

    padding:
      isMobile
        ? "18px"
        : "22px",

    borderRadius: "24px",

    marginTop: "25px",

    marginBottom: "30px",

    textAlign: "center"
  }}
>

  <input
    type="text"
    placeholder="Search medicines..."

    value={search}

    onChange={(e) =>
      setSearch(e.target.value)
    }

    style={{
      padding: "16px 20px",

      width:
      isMobile
          ? "100%"
          : "420px",

      borderRadius: "18px",

      border:
        "1px solid rgba(255,255,255,0.4)",

      outline: "none",

      fontSize: "16px",

      background:
        "rgba(255,255,255,0.8)",


      boxShadow:
        "0 8px 20px rgba(0,0,0,0.06)"
    }}
  />

</div>

      <p style={{textAlign:"center",color:"#666"}}>
Showing {data.length} medicines
</p>

{loading ? (

  <div
    style={{
      display: "grid",

      gridTemplateColumns:
        "repeat(auto-fit,minmax(260px,1fr))",

      gap: "20px",

      marginTop: "30px"
    }}
  >

    {[1,2,3,4,5,6].map((item) => (

      <div
        key={item}

        style={{
          background:
            "rgba(255,255,255,0.7)",

          borderRadius:
            "30px",

          padding:
            "24px",

          height:
            "420px",

          animation:
            "pulse 1.5s infinite"
        }}
      >

        <div
          style={{
            height: "180px",

            borderRadius:
              "20px",

            background:
              "#e5e7eb"
          }}
        />

        <div
          style={{
            height: "24px",

            width: "70%",

            marginTop: "20px",

            borderRadius:
              "10px",

            background:
              "#e5e7eb"
          }}
        />

        <div
          style={{
            height: "18px",

            width: "40%",

            marginTop: "14px",

            borderRadius:
              "10px",

            background:
              "#e5e7eb"
          }}
        />

      </div>

    ))}

  </div>

 ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {data.map((med, index) => {
          const selectedPower = power[med] || getPowers()[0];
          const price = getPrice(med, selectedPower);

          return (
            <div
            key={index}
            className="floatCard"
              style={{
  background: "rgba(255,255,255,0.75)",

  borderRadius: "30px",

  padding: "22px",

  border:
    "1px solid rgba(255,255,255,0.4)",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.08)",

  transition: "0.3s",

  cursor: "pointer"
}}
            >
              
              

            {getMedicineImage(med, tab)}

<div
  style={{
    display: "flex",

    gap: "8px",

    marginTop: "10px",

    flexWrap: "wrap"
  }}
>

  <span
    style={{
      background: "#dbeafe",

      color: "#1d4ed8",

      padding: "5px 10px",

      borderRadius: "999px",

      fontSize: "11px",

      fontWeight: "700"
    }}
  >
    Genuine
  </span>

  <span
    style={{
      background: "#fef3c7",

      color: "#b45309",

      padding: "5px 10px",

      borderRadius: "999px",

      fontSize: "11px",

      fontWeight: "700"
    }}
  >
    Trusted
  </span>

</div>
            

              <select
                value={selectedPower}
                onChange={(e) =>
                  setPower({ ...power, [med]: e.target.value })
                }
                style={{
  padding: "12px",

  width: "100%",

  marginTop: "16px",

  borderRadius: "14px",

  border: "1px solid #ddd",

  background: "#f9fff9",

  fontWeight: "600",

  outline: "none"
}}
              >
                {getPowers().map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <p
  style={{
    marginTop: "16px",

    fontSize: "24px",

    fontWeight: "800",

    color: "#2e7d32"
  }}
>
                <b>Price:</b> {price}
              </p>

              <button
                onClick={() => {

addToCart({
  name: med,

  power: selectedPower,

  price: price,

  category: tab
});

  toast.success(
    "Added to cart"
  );

}}
style={{
  width: "100%",

  background:
    "linear-gradient(135deg,#2e7d32,#4caf50)",

  color: "white",

  border: "none",

  padding: "14px",

  borderRadius: "16px",

  fontWeight: "700",

  fontSize: "15px",

  cursor: "pointer",

  marginTop: "18px",

  boxShadow:
    "0 10px 20px rgba(46,125,50,0.2)"
}}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    )}
    </div>
  );
}

export default Medicines;