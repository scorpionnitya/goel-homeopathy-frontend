const schwabeImageMap = {
  // Soaps
  "B&T Glow & Fairness Soap": ["Soaps", "B&T Glow & Fairness Soap.jpg"],
  "B&T Akne-Sor Soap": ["Soaps", "B&T Akne - Sor Soap.jpg"],

  // Ointments
  "Heal Plus Cream": ["Ointments", "Heal Plus Cream.jpg"],
  "Topi Azadirachta Cream": ["Ointments", "Topi Azadirachta Cream.jpg"],
  "Ruck Pain Gel": ["Ointments", "Ruck Pain Gel.jpg"],

  // Eye & Ear Drops
  "Cineraria Maritima Schwabe Eye Drops": [
    "Eye_Ear_Drops",
    "Cineraria_Maritima_Schwabe_Eye_Drops.jpg",
  ],

  // Liquid Specialities
  "ALPHA-LIV SUGAR FREE": [
    "Liquid_Specialities",
    "ALPHA-LIV SUGAR FREE.jpg",
  ],
  "Lilium tigr. Pentarkan": [
    "Liquid_Specialities",
    "Lilium tigr. Pentarkan.jpg",
  ],
  "Dizester": ["Liquid_Specialities", "Dizester.jpg"],
  "Hertone": ["Liquid_Specialities", "Hertone.jpg"],
  "Gnaphalium Pentarkan": [
    "Liquid_Specialities",
    "Gnaphalium Pentarkan®.jpg",
  ],
  "Alpha-Liv-Drops": ["Liquid_Specialities", "Alpha-Liv-Drops.png"],
  "Zauber Hair Drops": ["Liquid_Specialities", "Zauber Hair Drops.jpg"],
  "Good Morning": ["Liquid_Specialities", "Good Morning.jpg"],

  // Skin Care
  "Facewash Topi Berberis Combo": [
    "Skin_Care",
    "Facewash Topi Berberis Combo.webp",
  ],
  "B&T Nourish collection Body Lotion": [
    "Skin_Care",
    "B&T Nourish collection Body Lotion.jpg",
  ],
  "B&T Nourish Collection Body Wash": [
    "Skin_Care",
    "B&T Nourish Collection Body Wash.jpg",
  ],
  "B&T Foot Cream": ["Skin_Care", "B&T Foot Cream.jpg"],
  "B&T NOURISH COLLECTION SPF 50 SUNSCREEN": [
    "Skin_Care",
    "B&T NOURISH COLLECTION SPF 50 SUNSCREEN.jpg",
  ],
  "B&T Nourish Collection Face Wash": [
    "Skin_Care",
    "B&T Nourish Collection Face Wash.jpg",
  ],
  "B&T Aloe Vera Gel 100GM": [
    "Skin_Care",
    "B&T Aloe Vera Gel 100GM.jpg",
  ],
  "B&T NOURISH COLLECTION SKIN RADIANCE CREAM": [
    "Skin_Care",
    "B&T NOURISH COLLECTION SKIN RADIANCE CREAM.jpg",
  ],
  "B&T Aloe Vera Cream": ["Skin_Care", "B&T Aloe Vera Cream.jpg"],

  // Tablet Specialities
  "Guatteria gaumeri 1x": [
    "Tablet_Specialities",
    "Guatteria gaumeri 1x.jpg",
  ],
  "Baptisia tinctoria 1X MT tabs": [
    "Tablet_Specialities",
    "Baptisia tinctoria 1X MT tabs.jpg",
  ],
  "Fucus vesiculosus 1x MT Tabs": [
    "Tablet_Specialities",
    "Fucus vesiculosus 1x MT Tabs.jpg",
  ],
  "Crataegus oxyacantha 1x MT tabs": [
    "Tablet_Specialities",
    "Crataegus oxyacantha 1x MT tabs.jpg",
  ],
  "Sabal serrulata 1x MT Tabs": [
    "Tablet_Specialities",
    "Sabal serrulata 1x MT Tabs.jpg",
  ],
  "Ginkgo biloba 1X": [
    "Tablet_Specialities",
    "Ginkgo biloba 1X.jpg",
  ],

  // Hair Care
  "B&T 7oL": ["Hair_Care", "Bu0026T 7oL.jpg"],
  "B&T Anti-Dandruff Oil": [
    "Hair_Care",
    "Bu0026T Anti-Dandruff Oil.jpg",
  ],
  "B&T Arnica Shampoo 2 in 1": [
    "Hair_Care",
    "B u0026 T Arnica Shampoo 2 in 1.webp",
  ],
  "B&T Hair Serum": ["Hair_Care", "Bu0026T Hair Serum.jpg"],
  "B&T Anti-Dandruff Shampoo": [
    "Hair_Care",
    "Bu0026T Anti- Dandruff Shampoo.jpg",
  ],
  "B&T Arnica Shampoo": [
    "Hair_Care",
    "Bu0026T Arnica Shampoo.jpg",
  ],
  "Arnica Zauberol Combo": [
    "Hair_Care",
    "Arnica Zauberol Combo.jpg",
  ],
  "Anti Dandruff Combo": [
    "Hair_Care",
    "Anti Dandruff Combo.jpg",
  ],
  "B&T Hair Growth Oil": [
    "Hair_Care",
    "Bu0026T Hair Growth Oil.jpg",
  ],
  "Zauberöl - Premium Hair Growth Oil": [
    "Hair_Care",
    "Zauberöl - Premium Hair Growth Oil.jpg",
  ],
  "Shampoo Oil Combo": [
    "Hair_Care",
    "Shampoo Oil Combo.jpg",
  ],
  "B&T Nourish Collection Repair & Shine Shampoo": [
    "Hair_Care",
    "Bu0026T Nourish Collection Repair u0026 Shine Shampoo.jpg",
  ],
};const getMedicineImage = (
  med,
  tab,
  small = false
) => {
  let image = `/images/Dilutions/${med}.jpeg`;


if (tab === "Biochemic") {
  if (med.startsWith("SBL ")) {
    const sblMed = med.replace("SBL ", "");
    image = `/images/SBL/Biochemic/${sblMed}.jpg`;
  } else {
    image = `/images/Biochemic/${med}.jpeg`;
  }
}

if (tab === "BC") {
  let bcImage;

  if (med.startsWith("SBL BC ")) {
    const bcNumber = med.replace("SBL BC ", "");

    if (bcNumber === "26" || bcNumber === "27") {
      bcImage = `/images/SBL/BC/Bio-Combination ${bcNumber}.png`;
    } else {
      bcImage = `/images/SBL/BC/Bio-Combination ${bcNumber}.jpg`;
    }
  } else {
    bcImage = `/images/BC/${med}.jpeg`;
  }

  return (
    <div
      style={{
        height: small ? "120px" : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={bcImage}
        alt={med}
        style={{
          height: small ? "100px" : "220px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

if (tab === "Mother Tincture") {
  return (
    <div
      style={{
        height: small ? "120px" : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={`/images/MotherTincture/${med}.jpeg`}
        alt={med}
        style={{
          height: small ? "100px" : "220px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

if (tab === "R Drops") {
  return (
    <div
      style={{
        height: small ? "120px" : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
src={`/images/rdrops/${med.replace(/\s/g, "")}.jpeg`}
        alt={med}
        style={{
          height: small ? "100px" : "220px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
if (tab === "SBL Liquid Specialities") {
  const filename = encodeURIComponent(med);

  return (
    <div
      style={{
        height: small ? "120px" : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={`/images/SBL%20Specialities/Liquid%20Specialities/${filename}.jpg`}
        alt={med}
        style={{
          height: small ? "100px" : "220px",
          objectFit: "contain",
        }}
        onError={(e) => {
          // Calendula Spray is PNG
          if (med === "Calendula Spray") {
            e.currentTarget.src =
              `/images/SBL%20Specialities/Liquid%20Specialities/Calendula%20Spray.png`;
          }
        }}
      />
    </div>
  );
}

if (tab === "Health") {
  const schwabeImage = schwabeImageMap[med];

  if (schwabeImage) {
    const [folder, filename] = schwabeImage;

    return (
      <div
        style={{
          height: small ? "120px" : "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`/images/Schwabe_India_Images/${encodeURIComponent(
            folder
          )}/${encodeURIComponent(filename)}`}
          alt={med}
          style={{
            height: small ? "100px" : "220px",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }
 let folder = "";
  let extension = "jpg";

  const eyeEar = [
    "Euphrasia 10% Eye Drops",
    "Cineraria Maritima 10% Eye Drops",
    "Mullein Ear Drops",
    "Cineraria Maritima Euphrasia Eye Drops",
  ];

  const hairCare = [
    "SBL Jaborandi Plus Hair Oil (Mineral Oil Free)",
    "SBL Drops No.1",
    "Arnica Montana Herbal Shampoo with Conditioner Com....",
    "Arnica Montana Fortified Hair Oil (Mineral Oil Fre....",
    "Arnica Montana Hair Oil Combo (200ML Each)",
    "Arnica Montana Herbal Shampoo Combo (200 ML Each)",
    "Scalptone Tablets",
    "Jaborandi Hair Oil Combo (200ML Each)",
    "Jaborandi Anti-Dandruff Shampoo",
  ];

  const skinCare = [
    "Sulphur Ointment",
    "Babchi Oil",
    "Sulphur Gel",
    "Urtica Urens Ointment",
    "Thuja Ointment",
    "Cardiospermum Helicacabum Ointment",
    "Thuja Gel",
    "Echinacea Ointment",
    "Petroleum Ointment",
  ];

  const ointments = [
    "Orthomuv Ointment",
    "Funginil Cream",
    "Hypericum Ointment",
    "Hamamelis Ointment",
    "Rhustox Ointment",
    "Rhustox Gel",
    "Graphites Ointment",
    "Graphites Gel",
    "Ruta Ointment",
    "Orthomuv Gel",
  ];

  if (eyeEar.includes(med)) {
    folder = "SBL EyeEarDrops";
  } else if (hairCare.includes(med)) {
    folder = "SBL Haircare";
  } else if (skinCare.includes(med)) {
    folder = "SBL Skincare";
  } else if (ointments.includes(med)) {
    folder = "SBL_Ointments";
  }

  return (
    <div
      style={{
        height: small ? "120px" : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={`/images/SBL%20Specialities/${encodeURIComponent(folder)}/${encodeURIComponent(med)}.${extension}`}
        alt={med}
        style={{
          height: small ? "100px" : "220px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
  return (

    <div
      style={{
        position: "relative",
        height:
        small
        ? "120px"
        : "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <img
        src={image}
        alt={med}
        style={{
          height:
          small
          ? "100px"
          : "220px",
          objectFit: "contain"
        }}
      />
    </div>
  );
};

export default getMedicineImage;
