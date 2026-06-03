import bottle from "../assets/bottle.png";
import biochemicImg from "../assets/Biochemic.png";
import bcImg from "../assets/BC.png";
import motherImg from "../assets/mother.png";
import rdropsImg from "../assets/Rdrops.png";

const getLabelStyle = (tab) => {

  if (tab === "Dilution")
    return {
      top: "65%",
      left: "50%",
      width: "44%",
      fontSize: "11px",
      height: "10%"
    };

  if (tab === "Biochemic")
    return {
      top: "62%",
      left: "50%",
      width: "80%",
      fontSize: "11px",
      height: "18%"
    };

  if (tab === "BC")
    return {
      top: "63%",
      left: "40%",
      width: "13%",
      fontSize: "15px",
      height: "15%"
    };

  if (tab === "R Drops")
    return {
      top: "45%",
      left: "50%",
      width: "15%",
      fontSize: "15px",
      height: "8%"
    };

  if (tab === "Mother Tincture")
    return {
      top: "65%",
      left: "50%",
      width: "44%",
      fontSize: "11px",
      height: "10%"
    };

  return {
    top: "65%",
    left: "50%",
    width: "44%",
    fontSize: "15px",
    height: "10%"
  };
};

const getMedicineImage = (
  med,
  tab,
  small = false
) => {

  let image = bottle;

  if (tab === "Biochemic")
    image = biochemicImg;

  if (tab === "BC")
    image = bcImg;

  if (tab === "Mother Tincture")
    image = motherImg;

  if (tab === "R Drops")
    image = rdropsImg;

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

      {(() => {

        const label =
          getLabelStyle(tab);

        return (

          <>

            <div
              style={{
                position: "absolute",

                top: label.top,

                left: label.left,

                transform:
                  "translate(-50%, -50%)",

                width: label.width,

                height: label.height,

                background: "white",

                zIndex: 3,

                borderRadius: "3px"
              }}
            />

            <div
              style={{
                position: "absolute",

                top: label.top,

                left: label.left,

                transform:
                  "translate(-50%, -50%)",

                width: label.width,

                textAlign: "center",

                fontSize:
                  label.fontSize,

                fontWeight: "bold",

                color: "#111",

                zIndex: 4,

                lineHeight: "1.1"
              }}
            >
              {med}
            </div>

          </>
        );
      })()}

    </div>
  );
};

export default getMedicineImage;