const getMedicineImage = (
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