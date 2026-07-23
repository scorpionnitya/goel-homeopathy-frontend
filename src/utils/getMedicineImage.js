

const getMedicineImage = (
  med,
  tab,
  small = false
) => {
  let image = `/images/Dilutions/${med}.jpeg`;


if (tab === "Biochemic")
  image = `/images/Biochemic/${med}.jpeg`;

if (tab === "BC") {
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
src={`/images/BC/${med}.jpeg`}
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
src={`/images/RDrops/${med.replace(/\s/g, "")}.jpeg`}
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