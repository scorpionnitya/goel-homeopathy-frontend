import { useState } from "react";
import bottle from "../assets/bottle.png";
import biochemic from "../assets/Biochemic.png";
import bc from "../assets/BC.png";
import mother from "../assets/mother.png";
import rdrops from "../assets/Rdrops.png";

function Medicines({ addToCart }) {
  const [tab, setTab] = useState("Dilution");
  const [search, setSearch] = useState("");
  const [power, setPower] = useState({});

const getMedicineImage = (med, tab) => {
  let image = bottle;

  if (tab === "Biochemic") image = biochemic;
  if (tab === "BC") image = bc;
  if (tab === "Mother Tincture") image = mother;
  if (tab === "R Drops") image = rdrops;

  return (
    <div
      style={{
        position: "relative",
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        src={image}
        alt={med}
        style={{
          height: "220px",
          objectFit: "contain"
        }}
      />

      {/* Naam label pe */}
      <div
        style={{
          position: "absolute",
          top:
            tab === "Biochemic"
              ? "105px"
              : tab === "BC"
              ? "115px"
              : "118px",
          width: "95px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: tab === "Biochemic" ? "15px" : "13px",
          color: "#111",
          lineHeight: "1.1",
          textTransform: "uppercase"
        }}
      >
        {med}
      </div>
    </div>
  );
};

  // BIOCHEMIC BOX
  if (tab === "Biochemic") {
    return (
      <div style={commonStyle}>
        <div
          style={{
            width: "120px",
            height: "190px",
            borderRadius: "6px",
            background:
              "linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, #ff7b7b 70%, #e60000 100%)",
            position: "relative",
            boxShadow: "0 6px 14px rgba(0,0,0,0.18)"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "28px",
              background: "#fff",
              borderRight: "1px solid #ddd",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "14px",
              fontWeight: "500",
              color: "#333",
              textAlign: "center",
              paddingTop: "8px"
            }}
          >
            Dr.Reckeweg
          </div>

          <div
            style={{
              position: "absolute",
              top: "8px",
              width: "100%",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "600"
            }}
          >
            Biochemic Tablets
          </div>

          <div
            style={{
              ...nameStyle,
              top: "55px",
              width: "100%",
              fontSize: "22px",
              padding: "0 10px"
            }}
          >
            {med}
          </div>
        </div>
      </div>
    );
  }

  // DILUTION + MOTHER TINCTURE BOTTLE
  return (
    <div style={commonStyle}>
      <div
        style={{
          width: "95px",
          height: "190px",
          position: "relative"
        }}
      >
        {/* Cap */}
        <div
          style={{
            width: "55px",
            height: "52px",
            background: "#f7f7f7",
            margin: "0 auto",
            borderRadius: "18px 18px 8px 8px"
          }}
        />

        {/* Red Ring */}
        <div
          style={{
            width: "78px",
            height: "16px",
            background: "#e60000",
            margin: "-4px auto 0",
            borderRadius: "6px"
          }}
        />

        {/* Bottle */}
        <div
          style={{
            width: "88px",
            height: "125px",
            margin: "0 auto",
            borderRadius: "0 0 16px 16px",
            background:
              "linear-gradient(to bottom, #7b4a1e 0%, #5e3210 50%, #2d1707 100%)",
            position: "relative",
            boxShadow: "0 8px 15px rgba(0,0,0,0.22)"
          }}
        >
          {/* Label */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "4px",
              right: "4px",
              height: "72px",
              background: "#fff",
              borderRadius: "3px",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                height: "18px",
                background: "#ff8d8d",
                fontSize: "9px",
                textAlign: "center",
                paddingTop: "2px"
              }}
            >
              Homoeopathic Medicine
            </div>

            <div
              style={{
                ...nameStyle,
                top: "26px",
                width: "100%",
                fontSize: "14px",
                padding: "0 4px"
              }}
            >
              {med}
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "4px",
                width: "100%",
                textAlign: "center",
                fontSize: "10px",
                color: "#333"
              }}
            >
              {tab === "Mother Tincture" ? "Ø 20 ml" : "30 ml"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  const dilution = [
"AALSERUM",
"ABIES CAN",
"ABIES NIG",
"ABROTANUM",
"ABSINTHIUM",
"ACALYPHA INDICA",
"ACID ACETICUM",
"ACID BENZ",
"ACID CARBOLIC",
"ACID CHRYSOPHAR",
"ACID FLUOR",
"ACID FORMICICUM",
"ACID HYDROCYANIC",
"ACID LACTICUM",
"ACID MURIATICUM",
"ACID NITRICUM",
"ACID OXALICUM",
"ACID PHOSPHORIC",
"ACID PIC",
"ACID SALICYLICUM",
"ACID SULPH",
"ACID URICUM",
"ACONITE NAP",
"ACTAEA SPICATA",
"ADRENALINUM",
"AESCULUS HIP",
"AETHUSA CYNAP",
"AGARICUS MUS",
"AGNUS CAST",
"AGRAPHIS NUT",
"ALLIUM CEPA",
"ALLIUM SAT",
"ALOE SOC",
"ALSTONIA CONS",
"ALUMEN",
"ALUMINA",
"AMBRA G",
"AMMONIUM CARB",
"AMMONIUM MUR",
"AMMONIUM PHOS",
"AMYLIUM NIT",
"ANACARDIUM OCC",
"ANACARDIUM ORI",
"ANAGALLIS ARV",
"ANGUSTURA V",
"ANTHRACINUM",
"ANTIMONIUM ARS",
"ANTIMONIUM CRUD",
"ANTIMONIUM TART",
"APIS MELL",
"APOCYNUM CAN",
"ARALIA RAC",
"ARANEA D",
"ARGENTUM MET",
"ARGENTUM NIT",
"ARNICA MONT",
"ARS SULPH FLAV",
"ARS SULPH RUB",
"ARSENICUM ALB",
"ARSENICUM BROM",
"ARSENICUM IOD",
"ARTEMISIA VULG",
"ARUM TRIP",
"ASAFOETIDA",
"ASARUM EUROP",
"ASTERIAS RUB",
"AURUM ARS",
"AURUM MET",
"AURUM MUR NAT",
"AVENA SATIVA",
"AVIARE",
"BACILLIUM",
"BADIAGA",
"BAPTISIA TINC",
"BARYTA CARB",
"BARYTA IOD",
"BARYTA MUR",
"BARYTA PHOS",
"BELLADONA",
"BELLIS PER",
"BERBERIS AQUIFO",
"BERBERIS VULG",
"BISMUTHUM MET",
"BLATTA ORI",
"BORAX",
"BOTHROPS LANC",
"BOVISTA",
"BROMIUM",
"BRYONIA ALB",
"BUFO RANA",
"CACTUS G",
"CADMIUM SULF",
"CAJUPUTUM",
"CALADIUM SEG",
"CALC CARB HAH",
"CALC FLUOR",
"CALC IOD",
"CALC PHOS",
"CALC PIC",
"CALC RENAL",
"CALC SILLICATA",
"CALC SULPH",
"CALC ARS",
"CALENDULA OFF",
"CAMPHORA",
"CANTHARIS",
"CAPSICUM",
"CARBO ANIMAL",
"CARBO SULPH",
"CARBO VEG",
"CARCINOSIN",
"CARDUUS MAR",
"CAULOPHYLLUM",
"CAUSTICUM HAH",
"CEANOTHUS AN",
"CHIMPHILA UMB",
"CHINA OFF",
"CHINIUM ARS",
"CHINIUM SULPH",
"CHIONANTHUS V",
"CHOLESTERINUM",
"CICUTA V",
"CIMEX",
"CIMICIFUGA",
"CINA",
"CINNABARIS",
"CISTUS CAN",
"CLEMATIS",
"COCCUIND IND",
"COCCUS CACTI",
"COFEA CRUD",
"COLCHICUM",
"COLLINSONIA CAN",
"COLOCYNTHIS",
"CONDURANGO",
"CONIUM MAC",
"COPAIVA",
"CROCUS SAT",
"CROTALUS HOR",
"CROTON TIG",
"CUPRUM ACET",
"CUPRUM ARS",
"CUPRUM MET",
"CURARE",
"CYCLAMEN",
"DAMIANA",
"DAPHNE INDICA",
"DIGITALIS PUR",
"DIOSCOREA VILL",
"DIPHTHERINUM",
"DOLICHOS PRU",
"DROSERA",
"DULCAMARA",
"ECHINACEA ANG",
"ELAPS COR",
"EPIGEA R",
"EQUISETUM H",
"ERIGERON CAN",
"EUPATORIUM PERF",
"EUPATORIUM PURP",
"EUPHORBIUM",
"EUPHRASIA",
"FAGOPYRUM ESC",
"FERRUM ARS",
"FERRUM IOD",
"FERRUM MET",
"FERRUM PHOS",
"FERRUM PIC",
"FILIX MAS",
"FORMICA RUFA",
"FUCUS VES",
"GAMBOGIA",
"GELSEMIUM",
"GLONOINUM",
"GLYCERINUM",
"GNAPHALIUM POL",
"GRAPHITES",
"GRINDELIA ROB",
"GUAIACUM",
"GUN POWDER",
"HAMAMELIS VIRG",
"HEKLA LAVA",
"HELLEBORUS",
"HELONIAS D",
"HEPAR SULPH",
"HYDRASTIS CAN",
"HYDROCOTYLE AS",
"HYDROPHOBINUM",
"HYOSCYAMUS NIG",
"HYPERICUM PERF",
"IBERIS AMA",
"IGNATIA AMAR",
"INFLUENZINUM",
"INSULIN",
"IPECACUANHA",
"IRIS TENAX",
"IRIS VER",
"JABORANDI",
"JALAPA",
"JATROPHA C",
"JUSTICIA AD",
"KALI ARS",
"KALI BICH",
"KALI BROM",
"KALI CARB",
"KALI IOD",
"KALI MUR",
"KALI NIT",
"KALI PHOS",
"KALI SULPH",
"KALMIA LAT",
"KREOSOTUM",
"LAC CAN",
"LAC DEF",
"LAC VAC DEF",
"LACHNANTHES T",
"LAPIS ALB",
"LATHYRUS SAT",
"LATRODECTUS M",
"LAUROCERASUS",
"LEDUM PAL",
"LEMNA MINOR",
"LEPTANDRA",
"LILLIUM TIG",
"LITHIUM CARB",
"LOBELIA INF",
"LODIUM",
"LYCOPODIUM",
"LYCOPUS V",
"MACROTINUM",
"MAGN CARB",
"MAGN PHOS",
"MAGN MUR",
"MALANDRINUM",
"MANGANUM ACET",
"MANGANUM MET",
"MEDORRHINUM",
"MELILOTUS OFF",
"MENTHA PIP",
"MEPHITIS PUT",
"MERC COR",
"MERC CYAN",
"MERC DUL",
"MERC IOD FLAV",
"MERC IOD RUB",
"MERC SOL",
"MERC VIV",
"MEZEREUM",
"MILLEFOLIUM",
"MORBILLINUM",
"MOSCHUS",
"MUREX PURP",
"MYRISTICA SEB",
"NAJA T",
"NAPHTHALINUM",
"NATRUM ARS",
"NATRUM CARB",
"NATRUM MUR",
"NATRUM PHOS",
"NATRUM SALICYLUM",
"NATRUM SULPH",
"NUX MOSCH",
"NUX VOMICA",
"OCIMUM CAN",
"OENANTHE CROC",
"OLEANDER",
"OLEUM JEC",
"ONOSMODIUM V",
"OPIUM",
"ORNITHOGALUM U",
"OSMIUM",
"OVA TESTA",
"PAROTIDINUM",
"PEAONIA OFF",
"PERTUSSIN",
"PETROLEUM",
"PETROSELINUM",
"PHOSPHORUS",
"PHYSOSTIGMA VEN",
"PHYTOLACCA BERRY",
"PHYTOLACCA DEC",
"PICHI",
"PIX LIQ",
"PLANTAGO M",
"PLATINUM MET",
"PLUMBUM MET",
"PODOPHYLLUM PEL",
"POTHOS FOET",
"PSORINUM",
"PULSATILLA",
"PYROGENIUM",
"RADIUM BROM",
"RANUNCULUS B",
"RAPHANUS SAT",
"RATANHIA",
"RHEUM",
"RHODODEMDRON",
"RHUS TOX",
"RHUS VEN",
"RICINUS COM",
"ROBINIA PSEUD",
"ROSMARINUS OFF",
"RUMEX CRIS",
"RUTA G",
"SABADILLA",
"SABAL SERR",
"SABINA",
"SAMBUCUS CAN",
"SAMBUCUS NIG",
"SANGUINARIA CAN",
"SANGUINARIA NIT",
"SANICULA A",
"SANTONINUM",
"SARSAPARILLA",
"SCIRRHINUM",
"SECALE COR",
"SELENIUM",
"SENECIA A",
"SENEGA",
"SEPIA",
"SILLOCEA",
"SOLIDAGO V",
"SPIGELIA",
"SPONGIA T",
"SQUILA",
"STANNUM MET",
"STAPHYSAGRIA",
"STICTA P",
"STRAMONIUM",
"STRONTIA CARB",
"STROPHANTHUS",
"STRYCHNINUM",
"SULFUR",
"SULFUR IOD",
"SYMPHYTUM",
"SYPHILINUM",
"TABACUM",
"TARENTULA C",
"TELLURIUM",
"TERABINTHINA",
"TERAXACUM",
"TERENTULA H",
"TEUCRIUM M.V",
"THALLIUM MET",
"THERIDION C",
"THIOSINAMINUM",
"THUJA OCCID",
"THYMOLUM",
"THYROIDINUM",
"TITANIUM MET",
"TRILLIUM PEND",
"TROMBIDIUM",
"TUBERCULINUM BOV",
"TUBERCULINUM K",
"TYPHODINUM",
"URANIUM NIT",
"UREA",
"URTICA UR",
"USTILAGO",
"VACCININUM",
"VALERIANA OFF",
"VANADIUM",
"VARIOLINUM",
"VERATRUM ALB",
"VERATRUM VIR",
"VERBASCUM THA",
"VIBURNUM OP",
"VINCA MINOR",
"VIOLA ODOR",
"VIOLA TRI",
"VISCUM ALB",
"VIPERA",
"WISABADON",
"WYETHIA",
"X-RAY",
"ZINCUM MET",
"ZINCUM PHOS",
"ZINCUM PIC",
"ZINGIBER"
  ];

  const biochemic = [
    "Calc Fluor",
    "Calc Phos",
    "Calc Sulph",
    "Ferr Phos",
    "Kali Mur",
    "Kali Phos",
    "Kali Sulph",
    "Magn Phos",
    "Natr Sulph",
    "Silicea",
    "Five Phos"
  ];

  const bc = Array.from({ length: 28 }, (_, i) => `BC ${i + 1}`);
  const rdrops = Array.from({ length: 89 }, (_, i) => `R ${i + 1}`);
  const mother = [
    "Aalserum",
"Abrotanum",
"Absinthium",
"Acid Phos",
"Acid Sulfuric",
"Aconite Nap",
"Actea Spicata",
"Adonis Ver",
"Aesculus Hip",
"Agaricus M",
"Agnus Castus",
"Aletris Far",
"Alfalfa",
"Allium Sativum",
"Aloe Soc",
"Ammi Visnaga",
"Amylum Nitr",
"Angelica Archang",
"Apis Mell",
"Apocynum Can",
"Aralia Rac",
"Arnica",
"Artemisia Vulg",
"Aspidosperma",
"Ashwagandha",
"Avena Sat",
"Azadirachta Indica",
"Bacopa",
"Baptisia",
"Belladonna",
"Bellis Per",
"Berb Aquif",
"Berb Vulg",
"Blatta Ori",
"Borax",
"Bryonia Alb",
"Cactus Grand",
"Caladium Seg",
"Calendula",
"Calotropis",
"Camphora",
"Cantharis",
"Carduus Mar",
"Carica Papaya",
"Cascara Sag",
"Caulophyllum",
"Causticum",
"Ceanothus Amer",
"Chelidonium",
"Chimaphilla Umb",
"China",
"Cimicifuga",
"Cina",
"Colchicum",
"Colocynthis",
"Condurango",
"Conium",
"Crataegus Oxy",
"Curcuma Longa",
"Damiana",
"Digitalis Purp",
"Echinacea",
"Eupatorium Perf",
"Euphrasia",
"Gelsemium",
"Ginkgo Biloba",
"Ginseng",
"Hamamelis Virg",
"Hydrastis Can",
"Hypericum",
"Ignatia",
"Ipecacuanha",
"Kalmegh",
"Lycopodium",
"Nux Vomica",
"Phytolacca",
"Pulsatilla",
"Rhus Tox",
"Sepia",
"Spigelia",
"Thuja",
"Urtica Urens",
"Valeriana Off"
  ];

  const getData = () => {
    if (tab === "Dilution") return dilution;
    if (tab === "Biochemic") return biochemic;
    if (tab === "BC") return bc;
    if (tab === "R Drops") return rdrops;
    if (tab === "Mother Tincture") return mother;
  };

  const getPowers = () => {
    if (tab === "Dilution") return ["30", "200", "1M", "10M", "CM"];
    if (tab === "Biochemic") return ["3X", "6X", "12X", "30X", "200X"];
    if (tab === "Mother Tincture") return ["Q", "#", "30ml"];
    return ["Standard"];
  };

  const getPrice = (p) => {
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

    if (tab === "Mother Tincture") {
      if (p === "Q") return "₹295";
      if (p === "#") return "₹345";
      return "₹395";
    }

    return "₹100";
  };

  const data = getData().filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const tabs = [
    "Dilution",
    "Biochemic",
    "BC",
    "R Drops",
    "Mother Tincture"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        💊 Homeopathy Medicines
      </h1>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => {
              setTab(item);
              setSearch("");
            }}
            style={{
              padding: "10px 14px",
              border: "none",
              borderRadius: "8px",
              background: tab === item ? "#2e7d32" : "#ddd",
              color: tab === item ? "white" : "black",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      <p style={{textAlign:"center",color:"#666"}}>
Showing {data.length} medicines
</p>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {data.map((med, index) => {
          const selectedPower = power[med] || getPowers()[0];
          const price = getPrice(selectedPower);

          return (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                background: "#f9fff9",
                boxShadow: "0 4px 8px rgba(0,0,0,0.08)"
              }}
            >
              

            {getMedicineImage(med, tab)}
            

              <select
                value={selectedPower}
                onChange={(e) =>
                  setPower({ ...power, [med]: e.target.value })
                }
                style={{
                  padding: "8px",
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "6px"
                }}
              >
                {getPowers().map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <p style={{ marginTop: "10px" }}>
                <b>Price:</b> {price}
              </p>

              <button
                onClick={() => {
                  addToCart({
                    name: med,
                    price,
                    power: selectedPower
                  });
                  alert("Added to cart");
                }}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );


export default Medicines;