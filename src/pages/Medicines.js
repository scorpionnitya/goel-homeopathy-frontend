import { useState } from "react";
import bottle from "../assets/bottle.png";
import biochemicImg from "../assets/Biochemic.png";
import bcImg from "../assets/BC.png";
import motherImg from "../assets/mother.png";
import rdropsImg from "../assets/Rdrops.png";

function Medicines({ addToCart }) {
  const [tab, setTab] = useState("Dilution");
  const [search, setSearch] = useState("");
  const [power, setPower] = useState({});


const getLabelStyle = (tab) => {
  if (tab === "Dilution")
    return { top: "65%", left: "50%", width: "44%", fontSize: "11px", height: "10%" };

  if (tab === "Biochemic")
    return { top: "62%", left: "50%", width: "80%", fontSize: "11px", height: "18%"};

  if (tab === "BC")
    return { top: "63%", left: "40%", width: "13%", fontSize: "15px", height:"15%" };

  if (tab === "R Drops")
    return { top: "45%", left: "50%", width: "15%", fontSize: "15px", height:"8%" };

  if (tab === "Mother Tincture")
   return { top: "65%", left: "50%", width: "44%", fontSize: "11px", height: "10%" };

  return { top: "65%", left: "50%", width: "44%", fontSize: "15px", height:"10%"  };
};


const getMedicineImage = (med, tab) => {
  let image = bottle;

if (tab === "Biochemic") image = biochemicImg;
if (tab === "BC") image = bcImg;
if (tab === "Mother Tincture") image = motherImg;
if (tab === "R Drops") image = rdropsImg;

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


{(() => {
  const label = getLabelStyle(tab);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: label.top,
          left: label.left,
          transform: "translate(-50%, -50%)",
          width: label.width,
          height: label.height,
          background: "white",
          zIndex: 3,
          borderRadius: "3px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: label.top,
          left: label.left,
          transform: "translate(-50%, -50%)",
          width: label.width,
          textAlign: "center",
          fontSize: label.fontSize,
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
  );};


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
    "Natr Mur",
    "Natr Phos",
    "Natr Sulph",
    "Silicea",
    "Five Phos"

  ];

  const bc = Array.from({ length: 28 }, (_, i) => `BC ${i + 1}`);
  const rdrops = Array.from({ length: 89 }, (_, i) => `R ${i + 1}`);
  const motherPrices = {
  "AALSERUM Q": 295,
  "ABROTANUM Q": 345,
  "ABSINTHIUM Q": 345,
  "ACID PHOS Q": 295,
  "ACID SULFURIC Q": 295,
  "ACONITE NAP Q": 295,
  "ACTEA SPICATA Q": 395,
  "ADONIS VER Q": 295,
  "AESCULUS HIP Q": 295,
  "AGARICUS M Q": 345,
  "AGNUS CASTUS Q": 295,
  "ALETRIS FAR Q": 345,
  "ALFALFA Q": 295,
  "ALLIUM SATIVUM Q": 345,
  "ALOE SOC Q": 345,
  "AMMI VISNAGA Q": 295,
  "AMYLIUM NITR Q": 295,
  "ANGELICA ARCHANG Q": 395,
  "APIS MELL Q": 345,
  "APOCYNUM CAN Q": 295,
  "ARALIA RAC Q": 395,
  "ARNICA Q": 345,
  "ARTEMISIA VULG Q": 295,
  "ASPIDOSPERMA Q": 395,
  "ASWAGANDHA Q": 395,
  "AVENA SAT Q": 295,
  "AZADIRACHTA INDICA Q": 295,
  "BACOPA Q": 295,
  "BAPTISIA Q": 345,
  "BELLADONNA Q": 295,
  "BELLIS PER Q": 295,
  "BERB AQUIF Q": 345,
  "BERB VULG Q": 295,
  "BLATTA ORI Q": 395,
  "BORAX Q": 295,
  "BRYONIA ALB Q": 295,
  "CACTUS GRAND Q": 345,
  "CALADIUM SEG Q": 430,
  "CALENDULA Q": 295,
  "CALOTROPIS Q": 345,
  "CAMPHORA Q": 295,
  "CANTHARIS Q": 395,
  "CARDUUS MAR Q": 295,
  "CARICA PAPAYA Q": 395,
  "CASCARA SAG Q": 345,
  "CAULOPHYLLUM Q": 345,
  "CAUSTICUM Q": 295,
  "CEANOTHUS AMER Q": 345,
  "CHELIDONIUM Q": 295,
  "CHENOPODIUM Q": 345,
  "CHIMAPHILLA UMB Q": 345,
  "CHINA Q": 295,
  "CHIONANTHUS V Q": 345,
  "CIMICIFUGA Q": 345,
  "CINA Q": 395,
  "COLCHICUM Q": 395,
  "COLLINSONIA Q": 345,
  "COLOCYNTHIS Q": 295,
  "CONDURANGO Q": 295,
  "CONIUM Q": 345,
  "CONVALLARIA MAJ Q": 345,
  "CRATAEGUS OXY Q": 295,
  "CURCUMA LONGA Q": 295,
  "DAMIANA Q": 295,
  "DIGITALIS PURP Q": 295,
  "DIOSCOREA VILL Q": 345,
  "ECHINACEA Q": 345,
  "EPIGAEA Q": 295,
  "EQUISETUM H Q": 395,
  "ERIGERON CAN Q": 395,
  "EUPATORIUM PERF Q": 345,
  "EUPHRASIA Q": 295,
  "FILIX MAS Q": 345,
  "FORMICA RUFA Q": 295,
  "FRAXINUS AMER Q": 345,
  "FUCUS VESIC Q": 295,
  "GALIUM APARINE Q": 395,
  "GAULTHERIA PRO Q": 345,
  "GELSEMIUM Q": 345,
  "GENTIANA LUT Q": 395,
  "GINKO BILOBA Q": 430,
  "GINSENG Q": 345,
  "GLONOIUM Q": 295,
  "GOSSYPIUM HERB Q": 395,
  "GRINDELIA RUB Q": 395,
  "GUAIACUM Q": 395,
  "GYMNEMA SYLVESTRE Q": 295,
  "HAMAMELIS VIRG Q": 345,
  "HEDERA HELIX Q": 395,
  "HELLEBORUS NIG Q": 345,
  "HELONIAS DIODICA Q": 345,
  "HYDRANGEA Q": 395,
  "HYDRASTIS CAN Q": 395,
  "HYDROCOTYLE ASIAT Q": 295,
  "HYOSCYAMUS Q": 345,
  "HYPERICUM Q": 345,
  "IBERIS Q": 345,
  "IGNATIA Q": 345,
  "IPECACUANHA Q": 345,
  "IRIS VERS Q": 345,
  "JABORANDI Q": 295,
  "JONOSIA ASHOKA Q": 345,
  "JUSTICEA ADH Q": 295,
  "KALMEGH Q": 395,
  "KREOSOTUM Q": 295,
  "LATHYRUS SAT Q": 345,
  "LEDUM PAL Q": 295,
  "LEMNA MINOR Q": 345,
  "LIATRIS SPICATA Q": 395,
  "LILLIUM TIG Q": 345,
  "LOBELIA INFLATA Q": 395,
  "LODIUM Q": 345,
  "LYCOPODIUM Q": 295,
  "LYCOPUS V Q": 345,
  "MELILOTUS OFF Q": 345,
  "MILLEFOLIUM Q": 345,
  "MULLEIN OIL Q": 395,
  "MYRICA CERIFERA Q": 395,
  "MYRISTICA SEB Q": 550,
  "NUPHAR LUT Q": 395,
  "NUX VOMICA Q": 295,
  "OCIMUM CAN Q": 295,
  "OENANTHE CROCATA Q": 345,
  "ORITHOGALUM UMB Q": 395,
  "PAREIRA BRAVA Q": 295,
  "PASSIFLORA INC Q": 345,
  "PHYTOLACCA BERRY Q": 345,
  "PHYTOLACCA D Q": 295,
  "PINUS LAMB Q": 550,
  "PLANTAGO M Q": 295,
  "PODOPHYLLUM Q": 395,
  "PULSATILLA Q": 345,
  "QUERCUS GLAND S Q": 345,
  "RATANHIA Q": 345,
  "RAUWOLFIA SERP Q": 395,
  "RHUS AROM Q": 550,
  "RHUS TOX Q": 345,
  "RICINUS COM Q": 345,
  "ROBINIA PSEUD Q": 345,
  "RUBIA TINCT Q": 395,
  "RUMEX CRISP Q": 345,
  "RUTA GRAV Q": 295,
  "SABAL SERR Q": 295,
  "SABINA Q": 345,
  "SALIX NIG Q": 430,
  "SANGUINARIA CAN Q": 395,
  "SARSAPARILLA Q": 295,
  "SCROPHULARIA NOD Q": 395,
  "SECALE COR Q": 295,
  "SEMPERVIVUM TECT Q": 395,
  "SENECIO AUR Q": 295,
  "SENEGA Q": 295,
  "SEPIA Q": 395,
  "SOLIDAGO VIRG Q": 295,
  "SPARTIUM SCOP Q": 395,
  "SPIGELIA Q": 345,
  "SPONGIA T Q": 295,
  "STAPHYSAGRIA Q": 395,
  "STELLARIA MEDIA Q": 395,
  "STERCULIA ACUM Q": 345,
  "STROPHANTHUS Q": 345,
  "SYMPHYTUM Q": 345,
  "SYZYGIUM JAMB Q": 295,
  "TEUCRIUM MAR Q": 395,
  "THLASPI BP Q": 345,
  "THUJA Q": 295,
  "TRIBULUS TERR Q": 345,
  "TRILLIUM PEND Q": 345,
  "URANIUM NIT Q": 295,
  "URTICA URENS Q": 295,
  "USNEA BARBATA Q": 345,
  "USTILAGO M Q": 295,
  "UVA URSI Q": 345,
  "VALERIANA Q": 295,
  "VERBASCUM Q": 295,
  "VIBURNUM OP Q": 295,
  "VIBURNUM PR Q": 345,
  "VINCA MINOR Q": 345,
  "VISCUM ALB Q": 295,
  "XANTHOXYLLUM Q": 345,
  "YERBA SANTA Q": 395,
  "YOHIMBINUM Q": 430
};

  const getData = () => {
    if (tab === "Dilution") return dilution;
    if (tab === "Biochemic") return biochemic;
    if (tab === "BC") return bc;
    if (tab === "R Drops") return rdrops;
    if (tab === "Mother Tincture") return Object.keys(motherPrices);
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
          const price = getPrice(med, selectedPower);

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
                     power: selectedPower,
                     price: price
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
}

export default Medicines;