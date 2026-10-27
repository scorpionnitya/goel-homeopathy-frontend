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
  dilutionPrices,
  biochemicPrices,
  bcPrices,
  rdropPrices,
  sblLiquidSpecialities,
  sblLiquidSpecialityPrices,
  sblHealthWellness,
  sblHealthWellnessPrices,
  sblBiochemicPrices,
  sblBcPrices,
  adelPrices,
} from "../data/medicinesData";
import {
  BAKSON_PRODUCTS,
  LORDS_PRODUCTS,
  WHEEZAL_PRODUCTS,
  ADEL_PRODUCTS,
  BAKSON_MRP,
  LORDS_MRP,
  WHEEZAL_MRP,
} from "./BrandPage";
import MobileBackButton from "../components//common/MobileBackButton";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";



function Medicines({ addToCart, cart, setCart }) {
    const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

const categoryFromUrl = searchParams.get("category");

const findCategory = (query) => {
  const q = query.toLowerCase();

  if (bc.some((m) => m.toLowerCase() === q)) return "BC";
  if (rdrops.some((m) => m.toLowerCase() === q)) return "R Drops";
  if (biochemic.some((m) => m.toLowerCase() === q)) return "Biochemic";
  if (
  sblLiquidSpecialities.some(
    (m) => m.toLowerCase() === q
  )
) {
  return "SBL Liquid Specialities";
}
  if (Object.keys(motherPrices).some((m) => m.toLowerCase() === q))
    return "Mother Tincture";

  return "Dilution";
};

const category =
  categoryFromUrl || (searchQuery ? findCategory(searchQuery) : "Dilution");
  const [tab, setTab] = useState(category);
  const [search, setSearch] = useState(searchQuery);
  const [power, setPower] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  setTab(category);
}, [category]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
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
  if (tab === "SBL Liquid Specialities") return sblLiquidSpecialities;
  if (tab === "Health") return sblHealthWellness;

  return [];
};

const getPowers = (med, medicineCategory = tab) => {
  if (medicineCategory === "Dilution") {
    return ["30", "200", "1M", "10M", "CM"];
  }

  if (medicineCategory === "Biochemic") {
    if (med.startsWith("SBL ")) {
      return ["3X", "6X", "12X", "30X"];
    }

    return ["3X", "6X", "12X", "30X", "200X"];
  }

  if (medicineCategory === "Mother Tincture") {
    return ["Q", "20ml"];
  }

  if (medicineCategory === "SBL Liquid Specialities") {
    const priceData = sblLiquidSpecialityPrices[med];

    if (priceData && typeof priceData === "object") {
      return Object.keys(priceData);
    }

    return ["Standard"];
  }
return ["Standard"];
};

const getPrice = (med, p, medicineCategory = tab) => {
  const mrpValue = (value) =>
    value != null && Number.isFinite(Number(value)) && Number(value) > 0
      ? Number(value)
      : null;

  let mrp = null;

if (medicineCategory === "Adel" ||String(med).toLowerCase().includes("adel")
) {
  const normalize = (value) =>
    String(value ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

 const key = Object.keys(adelPrices).find(
  (name) => normalize(name) === normalize(med)
) || Object.keys(adelPrices).find(
  (name) => normalize(med).includes(normalize(name)) ||
            normalize(name).includes(normalize(med))
);

  const value = key ? adelPrices[key] : null;

  if (value != null && Number.isFinite(Number(value)) && Number(value) > 0) {
    return `₹${Math.round(Number(value) * 0.7)}`;
  }

  return "Price unavailable";
}
 else if (medicineCategory === "Mother Tincture") {
    mrp = mrpValue(motherPrices[med]);
  } else if (medicineCategory === "Dilution") {
    mrp = mrpValue(dilutionPrices[p]);
  } else if (medicineCategory === "Biochemic") {
    mrp = mrpValue(
      med.startsWith("SBL ")
        ? sblBiochemicPrices[p]
        : biochemicPrices[p]
    );
  } else if (medicineCategory === "BC") {
    mrp = mrpValue(
      med.startsWith("SBL BC ")
        ? sblBcPrices[med]
        : bcPrices[med]
    );
  } else if (medicineCategory === "R Drops") {
    mrp = mrpValue(rdropPrices[med]);
  } else if (medicineCategory === "SBL Liquid Specialities") {
    const value = sblLiquidSpecialityPrices[med];
    mrp = mrpValue(
      value && typeof value === "object"
        ? value[p] ?? Object.values(value)[0]
        : value
    );
  } else if (medicineCategory === "Health") {
    const value = sblHealthWellnessPrices[med];
    mrp = mrpValue(
      value && typeof value === "object"
        ? value[p] ?? Object.values(value)[0]
        : value
    );
  } else if (medicineCategory === "Bakson") {
    mrp = mrpValue(BAKSON_MRP[med]);
  } else if (medicineCategory === "Lords") {
    mrp = mrpValue(LORDS_MRP[med]);
  } else if (medicineCategory === "Wheezal") {
    mrp = mrpValue(WHEEZAL_MRP[med]);
  }

  if (mrp === null) return "Price unavailable";

  return `₹${Math.round(mrp * 0.7)}`;
};

const normalizeSearch = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const normalizedSearch = normalizeSearch(search);

const allMedicineData = [
  ...dilution.map((name) => ({ name, category: "Dilution" })),
  ...biochemic.map((name) => ({ name, category: "Biochemic" })),
  ...bc.map((name) => ({ name, category: "BC" })),
  ...rdrops.map((name) => ({ name, category: "R Drops" })),
  ...Object.keys(motherPrices).map((name) => ({
    name,
    category: "Mother Tincture",
  })),
  ...sblLiquidSpecialities.map((name) => ({
    name,
    category: "SBL Liquid Specialities",
  })),
  ...sblHealthWellness.map((name) => ({
    name,
    category: "Health",
  })),
  ...BAKSON_PRODUCTS.map((name) => ({
  name,
  category: "Bakson",
})),
...LORDS_PRODUCTS.map((name) => ({
  name,
  category: "Lords",
})),
...WHEEZAL_PRODUCTS.map((name) => ({
  name,
  category: "Wheezal",
})),
...ADEL_PRODUCTS.map((name) => ({ name, category: "Adel" })),
];

const searchMedicineData = [
  ...allMedicineData,
  ...getData().map((name) => ({
    name,
    category: tab,
  })),
].filter(
  (item, index, array) =>
    array.findIndex(
      (other) =>
        normalizeSearch(other.name) === normalizeSearch(item.name) &&
        other.category === item.category
    ) === index
);


const filteredData = search.trim()
  ? searchMedicineData
      .filter((item) => {
        const matchesSearch = normalizeSearch(item.name).includes(
          normalizedSearch
        );

        const searchedBrand = {
          adel: "Adel",
          bakson: "Bakson",
          lords: "Lords",
          lord: "Lords",
          wheezal: "Wheezal",
        }[normalizedSearch];

        return (
          matchesSearch &&
          (!searchedBrand || item.category === searchedBrand)
        );
      })
      .filter(
        (item, index, array) =>
          array.findIndex(
            (other) =>
              normalizeSearch(other.name) === normalizeSearch(item.name)
          ) === index
      )
  : getData().map((name) => ({
      name,
      category: tab,
    }));

const data = filteredData;




  return (
    <div
  className="fadeUp"
  style={{
    padding:
isMobile
    ? "8px"
    : "40px"
  }}
>
  <MobileBackButton />
  <Link
  to="/cart"
  style={{
    position: "fixed",
    top: "22px",
    right: "22px",
    zIndex: 999,
    background: "#fff",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,.15)",
    textDecoration: "none",
    color: "#111"
  }}
>
  <FiShoppingCart size={28} />

  <span
    style={{
      position: "absolute",
      top: "-5px",
      right: "-3px",
      background: "#16a34a",
      color: "#fff",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      fontSize: "12px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {cart.reduce((t, item) => t + item.quantity, 0)}
  </span>
</Link>
      <div style={{ textAlign: "center" }}>

<h1
  className="gradientText"

  style={{
    fontSize:
      isMobile
        ? "42px"
        : "62px",

    fontWeight: "600",

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
  style={{
    position: "sticky",
    top: "80px",
    zIndex: 100,
    background: "#f7fff6",
    padding: "15px 0",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <input
      type="text"
      placeholder="Search medicines..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "16px 20px",
        width: isMobile ? "100%" : "420px",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.4)",
        outline: "none",
        fontSize: "16px",
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
      }}
    />
  </div>
</div>

      <p style={{textAlign:"center",color:"#666"}}>
Showing {data.length} medicines
</p>

{loading ? (

  <div
    style={{
      display: "grid",
gridTemplateColumns: isMobile
? "1fr"
  : "repeat(auto-fit, minmax(260px, 1fr))",

      gap: isMobile ? "10px" : "20px",

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
 gridTemplateColumns: isMobile
  ? "repeat(2, minmax(0, 1fr))"
  : "repeat(auto-fit, minmax(260px, 1fr))",
         gap: isMobile ? "10px" : "20px",
          marginTop: "30px"
        }}
      >
{data.map((item, index) => {
  const med = item.name;
  const medicineCategory = item.category;

const availablePowers = getPowers(med, medicineCategory);
const safePowers = Array.isArray(availablePowers) ? availablePowers : [];
const selectedPower = power[med] || safePowers[0] || "Standard";

  const price = getPrice(med, selectedPower, medicineCategory);

          return (
            <div
            key={index}
            className="floatCard"
              style={{
  background: "rgba(255,255,255,0.75)",

borderRadius: isMobile ? "18px" : "30px",
padding: isMobile ? "10px" : "22px",

  border:
    "1px solid rgba(255,255,255,0.4)",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.08)",

  transition: "0.3s",

  cursor: "pointer"
}}
            >
              
              

{getMedicineImage(med, medicineCategory, isMobile)}
<h3
  style={{
    marginTop: isMobile ? "8px" : "15px",
    fontSize: isMobile ? "14px" : "20px",
    fontWeight: "700",
  }}
>
  {med}
</h3>

<div
  style={{
    display: "flex",
    gap: isMobile ? "4px" : "8px",
    marginTop: "8px",
    flexWrap: "wrap",
  }}
>
  <span
    style={{
      background: "#dbeafe",
      color: "#1d4ed8",
      padding: isMobile ? "4px 7px" : "5px 10px",
fontSize: isMobile ? "9px" : "11px",
      borderRadius: "999px",
      fontWeight: "700",
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
      fontWeight: "700",
    }}
  >
    Trusted
  </span>
</div>

<div
  style={{
    display: "flex",
    gap: isMobile ? "5px" : "8px",
    flexWrap: "wrap",
    marginTop: isMobile ? "10px" : "16px",
  }}
>
{safePowers.map((p) => (
    <button
      key={p}
      onClick={() =>
        setPower({
          ...power,
          [med]: p,
        })
      }
      style={{
        padding: isMobile ? "5px 8px" : "6px 14px",
fontSize: isMobile ? "11px" : "14px",
        borderRadius: "999px",
        border: selectedPower === p ? "2px solid #16a34a" : "1px solid #ddd",
        background:
          selectedPower === p ? "#16a34a" : "#fff",
        color:
          selectedPower === p ? "#fff" : "#333",
        fontWeight: "700",
        cursor: "pointer",
        transition: "0.25s",
      }}
    >
      {p}
    </button>
  ))}
</div>

{(() => {
  const sellingPrice =
    typeof price === "string" && price.startsWith("₹")
      ? Number(price.replace(/[₹,]/g, ""))
      : null;

  if (sellingPrice === null || !Number.isFinite(sellingPrice)) {
    return (
      <p style={{ marginTop: "16px", color: "#dc2626" }}>
        Price unavailable
      </p>
    );
  }

  const mrp = Math.round(sellingPrice / 0.7);

  return (
    <div style={{ marginTop: isMobile ? "10px" : "16px" }}>
      <div
        style={{
          color: "#6b7280",
          textDecoration: "line-through",
          fontSize: isMobile ? "12px" : "14px",
        }}
      >
        MRP ₹{mrp}
      </div>

      <span
        style={{
          display: "inline-block",
          background: "#dcfce7",
          color: "#15803d",
          padding: "4px 10px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: "700",
          marginTop: "3px",
        }}
      >
        30% OFF
      </span>

      <div
        style={{
          fontSize: isMobile ? "22px" : "26px",
          fontWeight: "800",
          color: "#111827",
          marginTop: "4px",
        }}
      >
        ₹{sellingPrice}
      </div>
    </div>
  );
})()}

{(() => {
  const currentQuantity = cart.find(
    (item) => item.name === med && item.power === selectedPower
  )?.quantity || 0;

  const updateQuantity = (change) => {
    if (change > 0) {
      addToCart({
        name: med,
        power: selectedPower,
        price: price,
        category: medicineCategory,
      });
    } else {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item.name === med && item.power === selectedPower
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  };

  const buttonStyle = {
    width: "100%",
    background: "linear-gradient(135deg,#2e7d32,#4caf50)",
    color: "white",
    border: "none",
    padding: isMobile ? "10px 4px" : "14px",
    borderRadius: isMobile ? "12px" : "16px",
    fontSize: isMobile ? "12px" : "15px",
    marginTop: isMobile ? "10px" : "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(46,125,50,0.2)",
  };

  return currentQuantity > 0 ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: isMobile ? "10px" : "18px",
        borderRadius: isMobile ? "12px" : "16px",
        overflow: "hidden",
        background: "#2e7d32",
        color: "white",
      }}
    >
      <button
        onClick={() => updateQuantity(-1)}
        style={{
          border: "none",
          background: "transparent",
          color: "white",
          padding: "10px 16px",
          fontSize: "20px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        −
      </button>

      <span style={{ fontWeight: "700", fontSize: "15px" }}>
        {currentQuantity}
      </span>

      <button
        onClick={() => updateQuantity(1)}
        style={{
          border: "none",
          background: "transparent",
          color: "white",
          padding: "10px 16px",
          fontSize: "20px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  ) : (
    <button
      onClick={() => {
        addToCart({
          name: med,
          power: selectedPower,
          price: price,
          category: medicineCategory,
        });
        toast.success("Added to cart");
      }}
      style={buttonStyle}
    >
      Add to Cart
    </button>
  );
})()}
            </div>
          );
        })}
      </div>
    )}
    </div>
  );
}

export default Medicines;