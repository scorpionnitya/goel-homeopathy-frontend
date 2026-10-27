import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiShoppingCart,
} from "react-icons/fi";

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

import biochemicImg from "../assets/Biochemic.png";

const RECKEWEG_CATEGORIES = ["All", "Dilution", "Biochemic", "BC", "R Drops", "Mother Tincture"];
const ADEL_CATEGORIES = ["All", "Drops", "Biochemic", "Mother Tincture", "Eye Drops", "Tablets", "Ointments", "Tonics", "Syrups"];
const SBL_CATEGORIES = ["All", "Liquid Specialities", "Biochemic", "BC", "Health & Wellness"];
const SCHWABE_CATEGORIES = ["All", "Soaps", "Ointments", "Eye Drops", "Liquid Specialities", "Skin Care", "Tablet Specialities", "Hair Care"];
const BAKSON_CATEGORIES = ["All", "Health & Wellness"];
const LORDS_CATEGORIES = ["All", "Health & Wellness"];
const WHEEZAL_CATEGORIES = ["All", "Health & Wellness"];
const DILUTION_POWERS = ["30", "200", "1M", "10M", "CM"];
const BIOCHEMIC_POWERS = ["3X", "6X", "12X", "30X", "200X"];

export const ADEL_PRODUCTS = Object.keys(adelPrices);
export const BAKSON_PRODUCTS = [
  "Bakson Drops",
  "Nail & Hair Aid",
  "Heena Powder",
  "Prostate Aid",
  "Kof Aid",
  "Diab Aid",
  "Antiaging Lotion",
  "BP Aid",
  "Kof Aid Plus",
  "Face Scrub",
  "Vitamin D Capsule",
  "Flexicare",
  "Hair Color",
  "Glamour Men",
  "Antiaging Lotion 80ml",
  "B Drops",
  "Withania Coagulans",
  "Lipoma Aid",
  "Acne Aid",
  "Vitamin D",
  "CalciCare",
  "GastroAid",
  "Vitamin B12",
  "Aloe Vera Calendula",
  "Antiwrinkle Cream",
  "Glamour Women",
  "Alfalfa",
  "Undereye Cream",
  "Ferrum Plus Capsules",
  "Nasal Aid Spray",
  "Hair Reviver",
  "DigeAid",
  "Spondy Aid",
  "Baksodent",
  "Bakunil"
];
export const BAKSON_MRP = {
  "Nail & Hair Aid": 185,
  "Prostate Aid": 190,
  "Kof Aid": 103,
  "Diab Aid": 190,
  "BP Aid": 190,
  "Kof Aid Plus": 108,
  "Vitamin D Capsule": 285,
  "Flexicare": 385,
  "Withania Coagulans": 210,
  "Acne Aid": 127,
  "CalciCare": 165,
  "GastroAid": 127,
  "Nasal Aid Spray": 98,
  "Hair Reviver": 499,
  "S-Cure Cream": 100,
  "Spondy Aid": 190,
};

export const LORDS_PRODUCTS = ["Ointment", "Glowcare Face Wash", "Eltrim", "Sleepin", "L147 Neuralgia", "Hiteup", "L133 Influenza", "Gastrolin", "Soap", "Elixir Forte", "L109", "Hernil", "Cholestril Drops", "Black K2 Oil", "Vitamin D Alfa", "BP Drops", "L130 Hypochondriacal", "Ylo", "L131 Herpes", "Tumorex", "Alfalfa Tonic", "Livotone", "Lordent Powder", "Koughkure", "L134 Intestinal", "Rheumakoll", "Fungirite", "Cleno Face Wash", "Uricid", "Leuco R", "Glowcare Drops", "Camy Canthaline Shampoo", "Brenex", "L129 Hyperhydrosis", "Camy Powder", "Tone Up Regular", "Special Tablets", "Glowcare Cream", "Ferrum Forte", "Lordent Paste", "Hairmont", "Cardiolin", "L128 Haematinic", "Arnica Oil", "Dengma", "Toxkure", "Mensorite", "Cratin", "Lordent", "L120 Eczema", "Asthamin", "L144 Nerve Sleep", "L132 Inflammation", "Digetone", "L113", "Arnica Shampoo", "Stonego", "Glandin", "Tone Up 5000", "L114"];
export const WHEEZAL_PRODUCTS = ["Arnica Hair Treatment Oil", "Jaborandi Hair Treatment Oil", "Arnica Shampoo", "Baby Bliss", "Leucorin", "R C-Care", "Dysento Drops", "Alo-X HD", "Gautteria", "Kalmegh", "Tooth Powder", "Eye Drop", "Calendula Powder", "Mel-X Tablets", "Gandolex", "Calci-H", "Febral Elixir", "Mel-X Cream", "Gastrolex Drops", "Sarsa Liquid", "Hymusa", "Mel-X Face Wash", "Mixture Cough Syrup", "Renalforte", "Livcol Veterinary Liver Tonic", "Hekla Lava Tooth Powder"];

// Verified MRP values where available. Selling price is 30% off MRP.
export const LORDS_MRP = {
  // Confirmed official MRP and pack sizes supplied by the user.
  // For products with multiple confirmed sizes, the displayed default pack is recorded in LORDS_PACK_SIZE.
  "Eltrim": 188,
  "Sleepin": 169,
  "L147 Neuralgia": 169,
  "L133 Influenza": 169,
  "Elixir Forte": 155,
  "Hernil": 169,
  "Cholestril Drops": 169,
  "Vitamin D Alfa": 147,
  "BP Drops": 169,
  "L130 Hypochondriacal": 169,
  "Ylo": 98,
  "Tumorex": 169,
  "Alfalfa Tonic": 108,
  "Livotone": 141,
  "Koughkure": 122,
  "L134 Intestinal": 169,
  "Fungirite": 169,
  "Uricid": 169,
  "Leuco R": 150,
  "Brenex": 169,
  "L129 Hyperhydrosis": 169,
  "Glowcare Drops": 113,
  "Glowcare Cream": 113,
  "Ferrum Forte": 150,
  "Hairmont": 244,
  "L128 Haematinic": 169,
  "Dengma": 141,
  "Toxkure": 211,
  "Mensorite": 150,
  "Cratin": 169,
  "L120 Eczema": 169,
  "Asthamin": 169,
  "L144 Nerve Sleep": 169,
  "L132 Inflammation": 169,
  "Digetone": 141,
  "L113": 169,
  "Stonego": 169,
  "Glandin": 164,
  "Tone Up 5000": 374,
  "L114": 169,
};

const LORDS_PACK_SIZE = {
  "Eltrim": "30 ml",
  "Sleepin": "30 ml",
  "L147 Neuralgia": "30 ml",
  "L133 Influenza": "30 ml",
  "Elixir Forte": "180 ml",
  "Hernil": "30 ml",
  "Cholestril Drops": "30 ml",
  "Vitamin D Alfa": "30 tablets",
  "BP Drops": "30 ml",
  "L130 Hypochondriacal": "30 ml",
  "Ylo": "30 tablets",
  "Tumorex": "30 ml",
  "Alfalfa Tonic": "115 ml",
  "Livotone": "180 ml",
  "Koughkure": "180 ml",
  "L134 Intestinal": "30 ml",
  "Fungirite": "30 ml",
  "Uricid": "30 ml",
  "Leuco R": "180 ml",
  "Brenex": "180 ml",
  "L129 Hyperhydrosis": "30 ml",
  "Glowcare Drops": "30 ml",
  "Glowcare Cream": "25 g",
  "Ferrum Forte": "180 ml",
  "Hairmont": "30 ml each (twin pack)",
  "L128 Haematinic": "30 ml",
  "Dengma": "180 ml",
  "Toxkure": "30 ml",
  "Mensorite": "180 ml",
  "Cratin": "30 ml",
  "L120 Eczema": "30 ml",
  "Asthamin": "180 ml",
  "L144 Nerve Sleep": "30 ml",
  "L132 Inflammation": "30 ml",
  "Digetone": "180 ml",
  "L113": "30 ml",
  "Stonego": "30 ml",
  "Glandin": "25 tablets",
  "Tone Up 5000": "30 ml",
  "L114": "30 ml",
};
export const WHEEZAL_MRP = {
  "Jaborandi Hair Treatment Oil": 195,
  "Arnica Hair Treatment Oil": 190,
  "Kalmegh": 180,
  "Kalmegh Elixir": 150,
  "Mel-X Tablets": 160,
  "Mel-X Cream": 160,
  "Mel-X Face Wash": 300,
  "Hekla Lava Tooth Powder": 90,
  "Mixture Cough Syrup": 80,
  "Livcol Veterinary Liver Tonic": 250,
  "Sarsa Liquid": 356,
};

export const SBL_LIQUID_NAMES = sblLiquidSpecialities.filter((name) =>
  !name.toLowerCase().startsWith("adel") &&
  !name.toLowerCase().startsWith("gastrobin") &&
  !name.toLowerCase().startsWith("essentia aurea") &&
  !name.toLowerCase().startsWith("diacard") &&
  !name.toLowerCase().startsWith("biofungin") &&
  !name.toLowerCase().startsWith("bryorheum")
);

export const SBL_HEALTH_NAMES = sblHealthWellness.slice(0, 19);
export const SBL_BIOCHEMIC_NAMES = biochemic.filter((name) => name.startsWith("SBL "));
export const SBL_BC_NAMES = bc.filter((name) => name.startsWith("SBL BC "));

export const SCHWABE_NAMES = sblHealthWellness.slice(19);
export const SCHWABE_EXTRA_NAMES = ["Gastrobin", "Essentia Aurea", "Diacard", "Biofungin", "Bryorheum"];

const getAdelCategory = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("biochemic") || lower.includes("bio ")) return "Biochemic";
  if (lower.includes("eye")) return "Eye Drops";
  if (lower.includes("ointment")) return "Ointments";
  if (lower.includes("tonic")) return "Tonics";
  if (lower.includes("syrup")) return "Syrups";
  if (lower.includes("tablet") || lower.includes("tabs")) return "Tablets";
  if (lower.includes("mother tincture")) return "Mother Tincture";
  return "Drops";
};

const getSchwabeCategory = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("soap")) return "Soaps";
  if (lower.includes("eye drops")) return "Eye Drops";
  if (lower.includes("cream") || lower.includes("gel")) return "Ointments";
  if (lower.includes("tablet") || lower.includes("tabs") || lower.includes("1x")) return "Tablet Specialities";
  if (lower.includes("hair") || lower.includes("shampoo") || lower.includes("oil") || lower.includes("zauber")) return "Hair Care";
  if (lower.includes("lotion") || lower.includes("body") || lower.includes("foot") || lower.includes("sunscreen") || lower.includes("face wash") || lower.includes("aloe")) return "Skin Care";
  return "Liquid Specialities";
};


const getImage = (brand, name, category) => {
  // =====================================================
  // BAKSON
  // =====================================================
  if (brand === "Bakson") {
    const baksonImages = {
      "Bakson Drops": "/images/Bakson_Products/BAKSON_BAKSON_DROPS.jpg",
      "Nail & Hair Aid": "/images/Bakson_Products/BAKSON_NAIL_HAIR_AID.jpg",
      "Heena Powder": "/images/Bakson_Products/BAKSON_HEENA_POWDER.jpg",
      "Prostate Aid": "/images/Bakson_Products/BAKSON_PROSTATE_AID.jpg",
      "Kof Aid": "/images/Bakson_Products/BAKSON_KOFAID.jpg",
      "Diab Aid": "/images/Bakson_Products/BAKSON_DIBAID.jpg",
      "Antiaging Lotion": "/images/Bakson_Products/BAKSON_ANTIAGING_LOTION.jpg",
      "BP Aid": "/images/Bakson_Products/BAKSON_BP_AID.jpg",
      "Kof Aid Plus": "/images/Bakson_Products/BAKSON_KOFAID_PLUS.jpg",
      "Face Scrub": "/images/Bakson_Products/BAKSON_FACE_SCRUB.jpg",
      "Vitamin D Capsule": "/images/Bakson_Products/BAKSON_VITAMIN_D_CAPSULE.jpg",
      "Flexicare": "/images/Bakson_Products/BAKSON_FLEXICARE.png",
      "Hair Color": "/images/Bakson_Products/BAKSON_HAIR_COLOR.jpg",
      "Glamour Men": "/images/Bakson_Products/BAKSON_GLAMOUR_MEN.jpg",
      "Antiaging Lotion 80ml": "/images/Bakson_Products/Bakson_Antiaging_Lotion_80ML.jpg",
      "B Drops": "/images/Bakson_Products/BAKSON_B_DROPS.jpg",
      "Withania Coagulans": "/images/Bakson_Products/BAKSON_WITHANIA_COAGULANS.jpg",
      "Lipoma Aid": "/images/Bakson_Products/BAKSON_LIPOMA_AID.jpg",
      "Acne Aid": "/images/Bakson_Products/Bakson_AcneAid.jpg",
      "Vitamin D": "/images/Bakson_Products/BAKSON_VITAMIN_D.jpg",
      "CalciCare": "/images/Bakson_Products/BAKSON_CALCICARE.jpg",
      "GastroAid": "/images/Bakson_Products/BAKSON_GASTROAID.jpg",
      "Vitamin B12": "/images/Bakson_Products/BAKSON_VITAMIN_B12.png",
      "Aloe Vera Calendula": "/images/Bakson_Products/Bakson_Aloevera_Calendula.jpg",
      "Antiwrinkle Cream": "/images/Bakson_Products/BAKSON_ANTIWRINKLE_CREAM.jpg",
      "Glamour Women": "/images/Bakson_Products/BAKSON_GLAMOUR_WOMEN.jpg",
      "Alfalfa": "/images/Bakson_Products/Bakson_Alfalfa.jpg",
      "Undereye Cream": "/images/Bakson_Products/BAKSON_UNDEREYE_CREAM.jpg",
      "Ferrum Plus Capsules": "/images/Bakson_Products/BAKSON_FERRUMPLUS_CAPSULES.jpg",
      "Nasal Aid Spray": "/images/Bakson_Products/BAKSON_NASAL_AID_SPRAY.jpg",
      "Hair Reviver": "/images/Bakson_Products/BAKSON_HAIR_REVIVER.jpg",
      "DigeAid": "/images/Bakson_Products/BAKSON_DIGEAID.jpg",
      "Spondy Aid": "/images/Bakson_Products/BAKSON_SPONDIAID.jpg",
      "Baksodent": "/images/Bakson_Products/BAKSON_BAKSODENT.jpg",
      "Bakunil": "/images/Bakson_Products/BAKSON_BAKUNIL.jpg",
    };
    return baksonImages[name] || "";
  }

  // =====================================================
  // LORD'S — filenames matched to the supplied Lords_Products folder
  // =====================================================
  if (brand === "LORD'S") {
    const lordsImages = {
      "Ointment": "LORDS_OINTMENT.jpg",
      "Glowcare Face Wash": "LORDS_GLOWCARE_FACE_WASH.jpg",
      "Eltrim": "LORDS_ELTRIM.jpg",
      "Sleepin": "LORDS_SLEEPIN.jpg",
      "L147 Neuralgia": "LORDS_L147_NEURALGIA.jpg",
      "Hiteup": "LORDS_HITEUP.jpg",
      "L133 Influenza": "LORDS_L133_INFLUENZA.jpg",
      "Gastrolin": "LORDS_GASTROLIN.jpg",
      "Soap": "LORDS_SOAP.jpg",
      "Elixir Forte": "LORDS_ELIXIRFORTE_FIXED.jpg",
      "L109": "LORDS_L109.jpg",
      "Hernil": "LORDS_HERNIL.jpg",
      "Cholestril Drops": "LORDS_CHOLESTRIL_DROP.jpg",
      "Black K2 Oil": "LORDS_BLACK_K2_OIL.jpg",
      "Vitamin D Alfa": "LORDS_VITAMIN_D_ALFA.jpg",
      "BP Drops": "LORDS_BP_DROPS.jpg",
      "L130 Hypochondriacal": "LORDS_L130_HYPOCHONDRIACAL.jpg",
      "Ylo": "LORDS_YLO.jpg",
      "L131 Herpes": "LORDS_L131_HERPES.jpg",
      "Tumorex": "LORDS_TUMOREX.jpg",
      "Alfalfa Tonic": "LORDS_ALFALFA_TONIC.jpg",
      "Livotone": "LORDS_LIVOTONE.jpg",
      "Lordent Powder": "LORDS_LORDENT_POWDER.png",
      "Koughkure": "LORDS_KOUGHKURE.jpg",
      "L134 Intestinal": "LORDS_L134_INTESTINAL.jpg",
      "Rheumakoll": "LORDS RHEUMAKOLL.jpg",
      "Fungirite": "LORDS_FUNGIRITE.jpg",
      "Cleno Face Wash": "LORDS_CLENO_FACE_WASH.jpg",
      "Uricid": "LORDS_URICID.jpg",
      "Leuco R": "LORDS_LEUCO_R.jpg",
      "Glowcare Drops": "LORDS_GLOWCARE_DROPS.jpg",
      "Camy Canthaline Shampoo": "LORDS_CAMY_CANTHALINE_SHAMPOO.jpg",
      "Brenex": "LORDS_BRENEX.jpg",
      "L129 Hyperhydrosis": "LORDS_L129_HYPERHYDROSIS.jpg",
      "Camy Powder": "LORDS_CAMY_POWDER.jpg",
      "Tone Up Regular": "LORDS_TONE_UP_REGULAR.jpg",
      "Special Tablets": "LORDS_SPECIAL_TABLETS.jpg",
      "Glowcare Cream": "LORDS_GLOWCARE_CREAM.jpg",
      "Ferrum Forte": "LORDS_FERRUM_FORTE.jpg",
      "Lordent Paste": "LORDS_LORDENT_PASTE.jpg",
      "Hairmont": "LORDS_HAIRMONT.jpg",
      "Cardiolin": "LORDS_CARDIOLIN.jpg",
      "L128 Haematinic": "LORDS_L128_HAEMATINIC.jpg",
      "Arnica Oil": "LORDS_ARNICA_OIL.jpg",
      "Dengma": "LORDS_DENGMA.jpg",
      "Toxkure": "LORDS_TOXKURE.jpg",
      "Mensorite": "LORDS_MENSORITE.jpg",
      "Cratin": "LORDS_CRATIN.jpg",
      "Lordent": "LORDS LORDENT.jpg",
      "L120 Eczema": "LORDS_L120_ECZEMA.jpg",
      "Asthamin": "LORDS_ASTHAMIN.jpg",
      "L144 Nerve Sleep": "LORDS_L144_NERVE_SLEEP.jpg",
      "L132 Inflammation": "LORDS_L132_INFLAMMATION.jpg",
      "Digetone": "LORDS_DIGETONE.jpg",
      "L113": "LORDS_L113.jpg",
      "Arnica Shampoo": "LORDS_ARNICA_SHAMPOO.jpg",
      "Stonego": "LORDS_STONEGO.jpg",
      "Glandin": "LORDS_GLANDIN.jpg",
      "Tone Up 5000": "LORDS_TONE_UP_5000.jpg",
      "L114": "LORDS_L114.jpg",
    };
    const file = lordsImages[name];
    return file ? `/images/Lords_Products/${encodeURIComponent(file).replace(/%20/g, "%20")}` : "";
  }

  // =====================================================
  // WHEEZAL — filenames matched to the supplied Wheezal_Products folder
  // =====================================================
  if (brand === "Wheezal") {
    const wheezalImages = {
      "Arnica Hair Treatment Oil": "WHEEZAL ARNICA HAIR TREATEMENT.jpg",
      "Jaborandi Hair Treatment Oil": "WHEEZAL JABORANDI HAIR TREATEMENT.jpg",
      "Arnica Shampoo": "WHEEZAL ARNICA SHAMPOO.webp",
      "Baby Bliss": "WHEEZAL BABY BLISS.webp",
      "Leucorin": "WHEEZAL LEUCORIN .avif",
      "R C-Care": "WHEEZAL R C- CARE.webp",
      "Dysento Drops": "WHEEZAL DYSENTO DROPS.jpeg",
      "Alo-X HD": "WHEEZAL_ALO_X_HD.jpg",
      "Gautteria": "WHEEZAL GAUTTERIA.webp",
      "Kalmegh": "WHEEZAL KALMEGH.jpeg",
      "Tooth Powder": "WHEEZAL TOOTH POWDER.jpg",
      "Eye Drop": "WHEEZAL EYE DROP.jpeg",
      "Calendula Powder": "WHEEZAL CALENDULA POWDER.jpeg",
      "Mel-X Tablets": "WHEEZAL MEL-X 75TABLETS.avif",
      "Gandolex": "WHEEZAL GANDOLEX.jpg",
      "Calci-H": "WHEEZAL CALCI-H.jpeg",
      "Febral Elixir": "WHEEZAL FEBRAL ELIXIR.jpeg",
      "Mel-X Cream": "WHEEZAL MEL-X CREAM.jpeg",
      "Gastrolex Drops": "WHEEZAL GASTROLEX DROPS.webp",
      "Sarsa Liquid": "WHEEZAL SARSA.jpg",
      "Hymusa": "WHEEZAL HYMUSA.webp",
      "Mel-X Face Wash": "WHEEZAL MEL-X FACE WASH.avif",
      "Mixture Cough Syrup": "WHEEZAL MIXTURE.webp",
      "Renalforte": "WHEEZAL RENALFORTE.jpg",
      "Livcol Veterinary Liver Tonic": "WHEEZAL LIVCOL SYRUP .avif",
      "Hekla Lava Tooth Powder": "WHEEZAL HEKLA PASTE.jpg",
    };
    const file = wheezalImages[name];
    return file ? `/images/Wheezal_Products/${encodeURIComponent(file).replace(/%20/g, "%20")}` : "";
  }

  // =====================================================
  // ADEL
  // =====================================================
  if (brand === "ADEL") {
    // Fix ADEL 2 to ADEL 7 images
const adelNumberMatch = name.match(/^Adel\s*-?\s*(2|3|4|5|6|7)\b/i);

if (adelNumberMatch) {
  const adelNumber = adelNumberMatch[1];

  const adelNumberImages = {
    "2": "/images/Adel_Products/ADEL 2 - Piles & Hemorrhoids Drops.jpg",
    "3": "/images/Adel_Products/ADEL 3 - Jaundice & Liver Drops.jpg",
    "4": "/images/Adel_Products/ADEL 4 - Joint Pain Drops.jpg",
    "5": "/images/Adel_Products/Adel 5 - Acidity, Gas & Stomach Drops.jpg",
    "6": "/images/Adel_Products/ADEL 6 - Thyroid Management Drops.jpg",
    "7": "/images/Adel_Products/ADEL 7 - Cough Drops.jpg",
  };

  return adelNumberImages[adelNumber] || "";
}
  const adelImages = {
    "ADEL - 10 Respiratory Drops":
      "/images/Adel_Products/ADEL - 10 Respiratory Drops.jpg",

    "ADEL - 19 MentalPhysical tiredness (General Weakness) Drops":
      "/images/Adel_Products/ADEL - 19 MentalPhysical tiredness (General Weakness) Drops.jpg",

    "Adel 1- Headache & Migraine Drops":
      "/images/Adel_Products/Adel 1- Headache & Migraine Drops.jpg",

    "Adel 11 - Constipation Drops":
      "/images/Adel_Products/Adel 11 - Constipation Drops.jpg",

    "ADEL 12 - Skin Drops":
      "/images/Adel_Products/ADEL 12 - Skin Drops.jpg",

    "ADEL 13 - Weight Management Drops":
      "/images/Adel_Products/ADEL 13 - Weight Management Drops.jpg",

    "ADEL 14 - Iron Deficiency Drops":
      "/images/Adel_Products/ADEL 14 - Iron Deficiency Drops.png",

    "ADEL 15 - Women’s White Discharge Drops":
      "/images/Adel_Products/ADEL 15 - Women’s White Discharge Drops.jpg",

    "ADEL 16 - Gastrointestinal Drops":
      "/images/Adel_Products/ADEL 16 - Gastrointestinal Drops.jpg",

    "ADEL 17 - Eye Care Drops":
      "/images/Adel_Products/ADEL 17 - Eye Care Drops.jpg",

    "ADEL 18 - Diabetes Management Drops":
      "/images/Adel_Products/ADEL 18 - Diabetes Management Drops.jpg",

    "ADEL 20 - Allergy Drops":
      "/images/Adel_Products/ADEL 20 - Allergy Drops.jpg",

    "ADEL 21 - Prostate Drops":
      "/images/Adel_Products/ADEL 21 - Prostate Drops.jpg",

    "ADEL 22 - Kidney Drops":
      "/images/Adel_Products/ADEL 22 - Kidney Drops.jpg",

    "ADEL 23 - Sinusitis Drops":
      "/images/Adel_Products/ADEL 23 - Sinusitis Drops.jpg",

    "ADEL 24 - Tonsils Drops":
      "/images/Adel_Products/ADEL 24 - Tonsils Drops.jpg",

    "ADEL 25 - Sleep Disorder Drops":
      "/images/Adel_Products/ADEL 25 - Sleep Disorder Drops.jpg",

    "ADEL 26 - Osteoarthritis Drops":
      "/images/Adel_Products/ADEL 26 - Osteoarthritis Drops.jpg",

    "ADEL 27 - Injury Drops":
      "/images/Adel_Products/ADEL 27 - Injury Drops.jpg",

    "ADEL 28 - Cholesterol Management Drops":
      "/images/Adel_Products/ADEL 28 - Cholesterol Management Drops.jpg",

    "ADEL 29 - UTI Drops":
      "/images/Adel_Products/ADEL 29 - UTI Drops.jpg",

    "ADEL 31 - Periods Regulating (PCOS, PCOD)":
      "/images/Adel_Products/ADEL 31 - Periods Regulating (PCOS, PCOD).png",

    "ADEL 32 - Inflammation Drops":
      "/images/Adel_Products/ADEL 32 - Inflammation Drops.jpg",

    "ADEL 33 - Oedema Drops":
      "/images/Adel_Products/ADEL 33 - Oedema Drops.jpg",

    "ADEL 34 - Spleen Drops":
      "/images/Adel_Products/ADEL 34 - Spleen Drops.jpg",

    "Adel 36 - Vitality Drops":
      "/images/Adel_Products/Adel 36 - Vitality Drops.jpg",

    "ADEL 38 - Cramp Pain Drops":
      "/images/Adel_Products/ADEL 38 - Cramp Pain Drops.jpg",

    "ADEL 39 - Sciatica Drops":
      "/images/Adel_Products/ADEL 39 - Sciatica Drops.jpg",

    "ADEL 40 - Warts Drops":
      "/images/Adel_Products/ADEL 40 - Warts Drops.png",

    "ADEL 40+86 Warts Combination":
      "/images/Adel_Products/ADEL 40+86 - Warts Combination.png",

    "ADEL 43 - Heart & Cardiovascular Drops":
      "/images/Adel_Products/ADEL 43 - Heart & Cardiovascular Drops.jpg",

    "ADEL 44 - Varicose Veins Drops":
      "/images/Adel_Products/ADEL 44 - Varicose Veins Drops.jpg",

    "ADEL 48 - Lymph & Tumour Drops (adjuvant)":
      "/images/Adel_Products/ADEL 48 - Lymph & Tumour Drops (adjuvant).jpg",

    "ADEL 49 - Diarrhoea Drops":
      "/images/Adel_Products/ADEL 49 - Diarrhoea Drops.png",

    "ADEL 50 - Worms Drops":
      "/images/Adel_Products/ADEL 50 - Worms Drops.png",

    "Adel 51 - Anxiety & Stress Drops":
      "/images/Adel_Products/Adel 51 - Anxiety & Stress Drops.jpg",

    "ADEL 54 - Heart Care Drops":
      "/images/Adel_Products/ADEL 54 - Heart Care Drops.jpg",

    "ADEL 55 - Spondylitis Drops":
      "/images/Adel_Products/ADEL 55 - Spondylitis Drops.png",

    "ADEL 56 - Immune System Drops":
      "/images/Adel_Products/ADEL 56 - Immune System Drops.jpg",

    "ADEL 57 - Digestion Drops":
      "/images/Adel_Products/ADEL 57 - Digestion Drops.png",

    "ADEL 61 - Adrenal Gland Drops":
      "/images/Adel_Products/ADEL 61 - Adrenal Gland Drops.jpg",

    "ADEL 64 - Uric Acid Drops":
      "/images/Adel_Products/ADEL 64 - Uric Acid Drops.png",

    "ADEL 65 - Body Temperature Management Drops":
      "/images/Adel_Products/ADEL 65 - Body Temperature Management Drops.png",

    "ADEL 66 - Detoxification Drops":
      "/images/Adel_Products/ADEL 66 - Detoxification Drops.jpg",

    "ADEL 69 - Circulatory Drops":
      "/images/Adel_Products/ADEL 69 - Circulatory Drops.jpg",

    "ADEL 73 - Anti-fungal Drops":
      "/images/Adel_Products/ADEL 73 - Anti-fungal Drops.jpg",

    "ADEL 75 - Pain Relief Ointment":
      "/images/Adel_Products/ADEL 75 - Pain Relief Ointment.png",

    "ADEL 78 - Skin Ointment":
      "/images/Adel_Products/ADEL 78 - Skin Ointment.png",

    "ADEL 79 - Iron Tonic":
      "/images/Adel_Products/ADEL 79 - Iron Tonic.jpg",

    "ADEL 82 - Liver Tonic":
      "/images/Adel_Products/ADEL 82 - Liver Tonic.png",

    "ADEL 83 - Cough Syrup":
      "/images/Adel_Products/ADEL 83 - Cough Syrup.jpg",

    "ADEL 85 - Energy Drops":
      "/images/Adel_Products/ADEL 85 - Energy Drops.png",

    "ADEL 85 - Vitality Tonic":
      "/images/Adel_Products/ADEL 85 - Vitality Tonic.jpg",

    "ADEL 86 - Warts (External)":
      "/images/Adel_Products/ADEL 86 - Warts (External).jpg",

    "ADEL 87 - Infection Drops":
      "/images/Adel_Products/ADEL 87 - Infection Drops.png",
  };

  return adelImages[name] || "";
}
// =====================================================
// SBL
// =====================================================
if (brand === "SBL") {

  // SBL Biochemic
  if (category === "Biochemic") {
    const sblName = name.replace(/^SBL\s+/i, "");
    return `/images/SBL/Biochemic/${encodeURIComponent(sblName)}.jpg`;
  }

  // SBL Bio-Combinations
  if (category === "BC") {
    const bcNumber = name.replace(/^SBL\s*BC\s*/i, "");

    const bcMap = {
      "26": "/images/SBL/BC/Bio-Combination 26.png",
      "27": "/images/SBL/BC/Bio-Combination 27.png",
    };

    return (
      bcMap[bcNumber] ||
      `/images/SBL/BC/Bio-Combination ${bcNumber}.jpg`
    );
  }

  // SBL Liquid Specialities
  if (
    category === "Liquid Specialities" ||
    category === "SBL Liquid Specialities"
  ) {
    const sblLiquidImages = {
      "SBL Drops No.1":
        "SBL Drops No.1.jpg",
      "SBL Drops No.2":
        "SBL Drops No.2.jpg",
      "SBL Drops No.3":
        "SBL Drops No.3.jpg",
      "SBL Drops No.4":
        "SBL Drops No.4.jpg",
      "SBL Drops No.5":
        "SBL Drops No.5.jpg",
      "SBL Drops No.6":
        "SBL Drops No.6.jpg",
      "SBL Drops No.7":
        "SBL Drops No.7.jpg",
      "SBL Drops No.8":
        "SBL Drops No.8.jpg",
      "SBL Drops No.9":
        "SBL Drops No.9.jpg",
      "SBL Drops No.10":
        "SBL Drops No.10.jpg",

      "SBL Drops No.-11-(Sleep Support)":
        "SBL Drops No.-11-(Sleep Support).jpg",

      "SBL Drops No.-12-(Tonsils Care)":
        "SBL Drops No.-12-(Tonsils Care).jpg",

      "SBL Drops No.-13-(Acidity&Indig)":
        "SBL Drops No.-13-(Acidity&Indig).jpg",

      "SBL Drops No.-14-(Leuco Care)":
        "SBL Drops No.-14-(Leuco Care).jpg",

      "SBL Drops No.-15-(Acne&Pim.Care)":
        "SBL Drops No.-15-(Acne&Pim.Care).jpg",

      "SBL Drops No.-16-(Bone Health)":
        "SBL Drops No.-16-(Bone Health).jpg",

      "SBL Drops No.-17-(Piles & F Care)":
        "SBL Drops No.-17-(Piles & F Care).jpg",

      "SBL Drops No.-18-(Anaemia Suppt)":
        "SBL Drops No.-18-(Anaemia Suppt).jpg",

      "SBL Drops No.-19-(Anti-Flu)":
        "SBL Drops No.-19-(Anti-Flu).jpg",

      "SBL Drops No.-20-(Injury Aid)":
        "SBL Drops No.-20-(Injury Aid).jpg",

      "SBL Drops No.-21-(Stress Relief)":
        "SBL Drops No.-21-(Stress Relief).jpg",

      "SBL Ache-Nil Drops":
        "SBL Ache-Nil Drops.jpg",

      "SBL Constinil Drops":
        "SBL Constinil Drops.jpg",

      "RelaXhed Drops":
        "RelaXhed Drops.jpg",

      "Utrofyne Syrup":
        "Utrofyne Syrup.jpg",

      "Vertefine Drops":
        "Vertefine Drops.jpg",

      "Wormorid Drops":
        "Wormorid Drops.jpg",

      "Orthomuv Syrup":
        "Orthomuv Syrup.jpg",

      "Orthomuv Massage Oil Roll-On":
        "Orthomuv Massage Oil Roll-On.jpg",

      "Funginil Drops":
        "Funginil Drops.jpg",

      "LIV T [Sugar Free]":
        "LIV T [Sugar Free].jpg",

      "Rinsout Drops - Mouthwash":
        "Rinsout Drops - Mouthwash.jpg",

      "Wipe Clear Acne Lotion":
        "Wipe Clear Acne Lotion.jpg",

      "Nixocid Syrup":
        "Nixocid Syrup.jpg",

      "Nixocid Syrup [Sugar Free]":
        "Nixocid Syrup [Sugar Free].jpg",

      "Stobal Cough Syrup":
        "Stobal Cough Syrup.jpg",

      "Tonicard Gold Drop":
        "Tonicard Gold Drop.jpg",

      "SBL Phytogargle":
        "SBL Phytogargle.jpg",

      "Arnica Act Spray":
        "Arnica Act Spray.jpg",

      "Calendula Spray":
        "Calendula Spray.png",

      "Clearstone Syrup [Sugar Free]":
        "Clearstone Syrup [Sugar Free].jpg",

      "Orthomuv Sugar Free Syrup":
        "Orthomuv Sugar Free Syrup.jpg",

      "SBL Thyro Fx Drops":
        "SBL Thyro Fx Drops.jpg",

      "LIV T":
        "LIV T [Sugar Free].jpg",
    };

    const filename = sblLiquidImages[name];

    return filename
      ? `/images/SBL Specialities/Liquid Specialities/${encodeURIComponent(filename)}`
      : "";
  }

  // SBL Health & Wellness
  if (category === "Health & Wellness" || category === "Health") {

    const sblHealthImages = {
      "Euphrasia 10% Eye Drops":
        "SBL Specialities/SBL EyeEarDrops/Euphrasia 10% Eye Drops.jpg",

      "Cineraria Maritima 10% Eye Drops":
        "SBL Specialities/SBL EyeEarDrops/Cineraria Maritima 10% Eye Drops.jpg",

      "Mullein Ear Drops":
        "SBL Specialities/SBL EyeEarDrops/Mullein Ear Drops.jpg",

      "Cineraria Maritima Euphrasia Eye Drops":
        "SBL Specialities/SBL EyeEarDrops/Cineraria Maritima Euphrasia Eye Drops.jpg",

      "Sulphur Ointment":
        "SBL Specialities/SBL_Ointments/Sulphur Ointment.jpg",

      "Orthomuv Ointment":
        "SBL Specialities/SBL_Ointments/Orthomuv Ointment.jpg",

      "Funginil Cream":
        "SBL Specialities/SBL_Ointments/Funginil Cream.jpg",

      "Hypericum Ointment":
        "SBL Specialities/SBL_Ointments/Hypericum Ointment.jpg",

      "Hamamelis Ointment":
        "SBL Specialities/SBL_Ointments/Hamamelis Ointment.jpg",

      "Urtica Urens Ointment":
        "SBL Specialities/SBL_Ointments/Urtica Urens Ointment.jpg",

      "Thuja Ointment":
        "SBL Specialities/SBL_Ointments/Thuja Ointment.jpg",

      "Cardiospermum Helicacabum Ointment":
        "SBL Specialities/SBL_Ointments/Cardiospermum Helicacabum Ointment.jpg",

      "Rhustox Ointment":
        "SBL Specialities/SBL_Ointments/Rhustox Ointment.jpg",

      "Echinacea Ointment":
        "SBL Specialities/SBL_Ointments/Echinacea Ointment.jpg",

      "Graphites Ointment":
        "SBL Specialities/SBL_Ointments/Graphites Ointment.jpg",

      "Petroleum Ointment":
        "SBL Specialities/SBL_Ointments/Petroleum Ointment.jpg",

      "Ruta Ointment":
        "SBL Specialities/SBL_Ointments/Ruta Ointment.jpg",

      "SBL Jaborandi Plus Hair Oil (Mineral Oil Free)":
        "SBL Specialities/SBL Haircare/SBL Jaborandi Plus Hair Oil (Mineral Oil Free).jpg",

      "SBL Drops No.1":
        "SBL Specialities/SBL Haircare/SBL Drops No.1.jpg",

      "Scalptone Tablets":
        "SBL Specialities/SBL Haircare/Scalptone Tablets.jpg",

      "Jaborandi Hair Oil Combo":
        "SBL Specialities/SBL Haircare/Jaborandi Hair Oil Combo (200ML Each).jpg",

      "Jaborandi Anti-Dandruff Shampoo":
        "SBL Specialities/SBL Haircare/Jaborandi Anti-Dandruff Shampoo.jpg",

      "Sulphur Gel":
        "SBL Specialities/SBL Skincare/Sulphur Gel.jpg",

      "Babchi Oil":
        "SBL Specialities/SBL Skincare/Babchi Oil.jpg",

      "Thuja Gel":
        "SBL Specialities/SBL Skincare/Thuja Gel.jpg",
    };

    const relativePath = sblHealthImages[name];

    return relativePath
      ? `/images/${encodeURI(relativePath)}`
      : "";
  }

  return "";
}


// =====================================================
// SCHWABE INDIA
// =====================================================
if (brand === "Schwabe") {

  const schwabeImages = {
    "B&T Glow & Fairness Soap":
      "Soaps/B&T Glow & Fairness Soap.jpg",

    "B&T Akne-Sor Soap":
      "Soaps/B&T Akne - Sor Soap.jpg",

    "Heal Plus Cream":
      "Ointments/Heal Plus Cream.jpg",

    "Topi Azadirachta Cream":
      "Ointments/Topi Azadirachta Cream.jpg",

    "Ruck Pain Gel":
      "Ointments/Ruck Pain Gel.jpg",

    "Cineraria Maritima Schwabe Eye Drops":
      "Eye_Ear_Drops/Cineraria_Maritima_Schwabe_Eye_Drops.jpg",

    "ALPHA-LIV SUGAR FREE":
      "Liquid_Specialities/ALPHA-LIV SUGAR FREE.jpg",

    "Lilium tigr. Pentarkan":
      "Liquid_Specialities/Lilium tigr. Pentarkan.jpg",

    "Dizester":
      "Liquid_Specialities/Dizester.jpg",

    "Hertone":
      "Liquid_Specialities/Hertone.jpg",

    "Gnaphalium Pentarkan":
      "Liquid_Specialities/Gnaphalium Pentarkan®.jpg",

    "Alpha-Liv-Drops":
      "Liquid_Specialities/Alpha-Liv-Drops.png",

    "Zauber Hair Drops":
      "Liquid_Specialities/Zauber Hair Drops.jpg",

    "Good Morning":
      "Liquid_Specialities/Good Morning.jpg",

    "Facewash Topi Berberis Combo":
      "Skin_Care/Facewash Topi Berberis Combo.webp",

    "B&T Nourish collection Body Lotion":
      "Skin_Care/B&T Nourish collection Body Lotion.jpg",

    "B&T Nourish Collection Body Wash":
      "Skin_Care/B&T Nourish Collection Body Wash.jpg",

    "B&T Foot Cream":
      "Skin_Care/B&T Foot Cream.jpg",

    "B&T NOURISH COLLECTION SPF 50 SUNSCREEN":
      "Skin_Care/B&T NOURISH COLLECTION SPF 50 SUNSCREEN.jpg",

    "B&T Nourish Collection Face Wash":
      "Skin_Care/B&T Nourish Collection Face Wash.jpg",

    "B&T Aloe Vera Gel 100GM":
      "Skin_Care/B&T Aloe Vera Gel 100GM.jpg",

    "B&T NOURISH COLLECTION SKIN RADIANCE CREAM":
      "Skin_Care/B&T NOURISH COLLECTION SKIN RADIANCE CREAM.jpg",

    "B&T Aloe Vera Cream":
      "Skin_Care/B&T Aloe Vera Cream.jpg",

    "Guatteria gaumeri 1x":
      "Tablet_Specialities/Guatteria gaumeri 1x.jpg",

    "Baptisia tinctoria 1X MT tabs":
      "Tablet_Specialities/Baptisia tinctoria 1X MT tabs.jpg",

    "Fucus vesiculosus 1x MT Tabs":
      "Tablet_Specialities/Fucus vesiculosus 1x MT Tabs.jpg",

    "Crataegus oxyacantha 1x MT tabs":
      "Tablet_Specialities/Crataegus oxyacantha 1x MT tabs.jpg",

    "Sabal serrulata 1x MT Tabs":
      "Tablet_Specialities/Sabal serrulata 1x MT Tabs.jpg",

    "Ginkgo biloba 1X":
      "Tablet_Specialities/Ginkgo biloba 1X.jpg",

    "B&T 7oL":
      "Hair_Care/Bu0026T 7oL.jpg",

    "B&T Anti-Dandruff Oil":
      "Hair_Care/Bu0026T Anti-Dandruff Oil.jpg",

    "B&T Arnica Shampoo 2 in 1":
      "Hair_Care/B u0026 T Arnica Shampoo 2 in 1.webp",

    "B&T Hair Serum":
      "Hair_Care/Bu0026T Hair Serum.jpg",

    "B&T Anti- Dandruff Shampoo":
      "Hair_Care/Bu0026T Anti- Dandruff Shampoo.jpg",

    "B&T Arnica Shampoo":
      "Hair_Care/Bu0026T Arnica Shampoo.jpg",

    "Arnica Zauberol Combo":
      "Hair_Care/Arnica Zauberol Combo.jpg",

    "Anti Dandruff Combo":
      "Hair_Care/Anti Dandruff Combo.jpg",

    "B&T Hair Growth Oil":
      "Hair_Care/Bu0026T Hair Growth Oil.jpg",

    "Zauberöl - Premium Hair Growth Oil":
      "Hair_Care/Zauberöl - Premium Hair Growth Oil.jpg",

    "Shampoo Oil Combo":
      "Hair_Care/Shampoo Oil Combo.jpg",

    "B&T Nourish Collection Repair & Shine Shampoo":
      "Hair_Care/Bu0026T Nourish Collection Repair u0026 Shine Shampoo.jpg",

    "Gastrobin":
      "../Schwabe_5/Gastrobin.webp",

    "Essentia Aurea":
      "../Schwabe_5/Essentia_Aurea.jpg",

    "Diacard":
      "../Schwabe_5/Diacard.webp",

    "Biofungin":
      "../Schwabe_5/Biofungin.png",

    "Bryorheum":
      "../Schwabe_5/Bryorheum.jpg",
  };

  const relativePath = schwabeImages[name];

  return relativePath
    ? `/images/Schwabe_India_Images/${encodeURI(relativePath)}`
    : "";
}

  // =====================================================
  // DR. RECKEWEG
  // =====================================================

  if (category === "Dilution") {
    return `/images/Dilutions/${encodeURIComponent(name)}.jpeg`;
  }

  if (category === "Biochemic") {
    return biochemicImg;
  }

  if (category === "BC") {
    return `/images/BC/${encodeURIComponent(name)}.jpeg`;
  }

  if (category === "R Drops") {
    // Data says "R 1", "R 2", etc.
    // Files are R1.jpeg, R2.jpeg, etc.
    const rNumber = name.replace(/^R\s*/i, "");
    return `/images/RDrops/R${rNumber}.jpeg`;
  }

  if (category === "Mother Tincture") {
    return `/images/MotherTincture/${encodeURIComponent(name)}.jpeg`;
  }

  return "";
};

const getPowerOptionsFor = (brand, product) => {
  const { name, category } = product;

  if (brand === "Dr. Reckeweg") {
    if (category === "Dilution") return DILUTION_POWERS;
    if (category === "Biochemic") return BIOCHEMIC_POWERS;
    if (category === "Mother Tincture") return ["Q"];
    return ["Standard"];
  }

  if (brand === "SBL") {
    if (category === "Biochemic") return ["3X", "6X", "12X", "30X"];
    const priceData = sblLiquidSpecialityPrices[name] || sblHealthWellnessPrices[name];
    if (priceData && typeof priceData === "object") return Object.keys(priceData);
    return ["Standard"];
  }

  if (brand === "Schwabe") {
    return ["Standard"];
  }

  return ["Standard"];
};

function getProductPrice(brand, name, category, power) {
    if (brand === "Bakson") {
    const mrp = BAKSON_MRP[name];
    return mrp ? Math.round(mrp * 0.70) : 0;
  }
  if (brand === "LORD'S") {
    const mrp = LORDS_MRP[name];
    return mrp ? Math.round(mrp * 0.70) : 0;
  }
  if (brand === "Wheezal") {
    const mrp = WHEEZAL_MRP[name];
    return mrp ? Math.round(mrp * 0.70) : 0;
  }
  if (brand === "ADEL") return adelPrices[name] ?? 310;
  if (brand === "Dr. Reckeweg") {
    if (category === "Dilution") return dilutionPrices[power] ?? 180;
    if (category === "Biochemic") return biochemicPrices[power] ?? 245;
    if (category === "BC") return bcPrices[name] ?? 245;
    if (category === "R Drops") return rdropPrices[name] ?? 325;
    if (category === "Mother Tincture") return motherPrices[name] ?? 325;
  }
  if (brand === "SBL") {
    if (category === "Biochemic") return sblBiochemicPrices[power] ?? 120;
    if (category === "BC") return sblBcPrices[name] ?? 120;
    const priceData = sblLiquidSpecialityPrices[name] || sblHealthWellnessPrices[name];
    if (priceData && typeof priceData === "object") return priceData[power] ?? Object.values(priceData)[0] ?? 0;
    return priceData ?? 0;
  }
  if (brand === "Schwabe") {
    const priceData = sblHealthWellnessPrices[name];
    if (priceData && typeof priceData === "object") return priceData[power] ?? Object.values(priceData)[0] ?? 0;
    return priceData ?? 0;
  }
  return 0;
}
// =========================================================
// MAIN BRAND PAGE
// =========================================================

function BrandPage({
  cart = [],
  setCart,
  addToCart,
}) {
  const navigate = useNavigate();
  const { brand } = useParams();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Stores selected power for every product
  const [selectedPowers, setSelectedPowers] =
    useState({});

  const brandName = decodeURIComponent(
    brand || "Dr. Reckeweg"
  );

  // =======================================================
  // BRAND-SPECIFIC PRODUCTS
  // =======================================================

const brandConfig = useMemo(() => {
  const normalized = brandName.toLowerCase().trim();

  if (normalized.includes("bakson")) {
    return { brand: "Bakson", categories: BAKSON_CATEGORIES };
  }

  if (normalized.includes("lord")) {
    return { brand: "LORD'S", categories: LORDS_CATEGORIES };
  }

  if (normalized.includes("wheezal")) {
    return { brand: "Wheezal", categories: WHEEZAL_CATEGORIES };
  }

  if (normalized.includes("adel")) {
    return { brand: "ADEL", categories: ADEL_CATEGORIES };
  }

  if (normalized.includes("sbl")) {
    return { brand: "SBL", categories: SBL_CATEGORIES };
  }

  if (normalized.includes("schwabe")) {
    return { brand: "Schwabe", categories: SCHWABE_CATEGORIES };
  }

  return {
    brand: "Dr. Reckeweg",
    categories: RECKEWEG_CATEGORIES
  };
}, [brandName]);

  const currentBrand = brandConfig.brand;

  const products = useMemo(() => {
    if (currentBrand === "Bakson") {
  return BAKSON_PRODUCTS.map((name) => ({
    name,
    category: "Health & Wellness",
    power: "Standard",
    price: getProductPrice("Bakson", name, "Health & Wellness", "Standard"),
    image: getImage("Bakson", name, "Health & Wellness"),
  }));
}

if (currentBrand === "LORD'S") {
  return LORDS_PRODUCTS.map((name) => ({
    name,
    category: "Health & Wellness",
    power: "Standard",
    price: getProductPrice("LORD'S", name, "Health & Wellness", "Standard"),
    image: getImage("LORD'S", name, "Health & Wellness"),
  }));
}

if (currentBrand === "Wheezal") {
  return WHEEZAL_PRODUCTS.map((name) => ({
    name,
    category: "Health & Wellness",
    power: "Standard",
    price: getProductPrice("Wheezal", name, "Health & Wellness", "Standard"),
    image: getImage("Wheezal", name, "Health & Wellness"),
  }));
}
    if (currentBrand === "ADEL") {
      return ADEL_PRODUCTS.map((name) => {
        const category = getAdelCategory(name);
        return { name, category, power: "Standard", price: adelPrices[name] ?? 310, image: getImage("ADEL", name, category) };
      });
    }

    if (currentBrand === "SBL") {
      const result = [];
      SBL_LIQUID_NAMES.forEach((name) => result.push({ name, category: "Liquid Specialities", power: "Standard", price: getProductPrice("SBL", name, "Liquid Specialities", "Standard"), image: getImage("SBL", name, "Liquid Specialities") }));
      SBL_BIOCHEMIC_NAMES.forEach((name) => result.push({ name, category: "Biochemic", power: "3X", price: getProductPrice("SBL", name, "Biochemic", "3X"), image: getImage("SBL", name, "Biochemic") }));
      SBL_BC_NAMES.forEach((name) => result.push({ name, category: "BC", power: "Standard", price: getProductPrice("SBL", name, "BC", "Standard"), image: getImage("SBL", name, "BC") }));
      SBL_HEALTH_NAMES.forEach((name) => result.push({ name, category: "Health & Wellness", power: "Standard", price: getProductPrice("SBL", name, "Health & Wellness", "Standard"), image: getImage("SBL", name, "Health & Wellness") }));
      return result;
    }

    if (currentBrand === "Schwabe") {
      const names = [...SCHWABE_NAMES, ...SCHWABE_EXTRA_NAMES];
      return names.map((name) => {
        const category = getSchwabeCategory(name);
        return { name, category, power: "Standard", price: getProductPrice("Schwabe", name, category, "Standard"), image: getImage("Schwabe", name, category) };
      });
    }

    const result = [];
    dilution.forEach((name) => result.push({ name, category: "Dilution", power: "30", price: getProductPrice("Dr. Reckeweg", name, "Dilution", "30"), image: getImage("Dr. Reckeweg", name, "Dilution") }));
    biochemic.filter((name) => !name.startsWith("SBL ")).forEach((name) => result.push({ name, category: "Biochemic", power: "3X", price: getProductPrice("Dr. Reckeweg", name, "Biochemic", "3X"), image: getImage("Dr. Reckeweg", name, "Biochemic") }));
    bc.filter((name) => !name.startsWith("SBL ")).forEach((name) => result.push({ name, category: "BC", power: "Standard", price: getProductPrice("Dr. Reckeweg", name, "BC", "Standard"), image: getImage("Dr. Reckeweg", name, "BC") }));
    rdrops.forEach((name) => result.push({ name, category: "R Drops", power: "Standard", price: getProductPrice("Dr. Reckeweg", name, "R Drops", "Standard"), image: getImage("Dr. Reckeweg", name, "R Drops") }));
    Object.entries(motherPrices).forEach(([name, price]) => result.push({ name, category: "Mother Tincture", power: "Q", price, image: getImage("Dr. Reckeweg", name, "Mother Tincture") }));
    return result;
  }, [currentBrand]);


// =======================================================
  // FILTER
  // =======================================================

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category ===
            selectedCategory
        );

  // =======================================================
  // GET CURRENT POWER
  // =======================================================

  const getSelectedPower = (product) => {
    const key = `${currentBrand}-${product.category}-${product.name}`;

    return (
      selectedPowers[key] ||
      product.power
    );
  };

  // =======================================================
  // CHANGE POWER
  // =======================================================

  const handlePowerChange = (
    product,
    power
  ) => {
    const key = `${currentBrand}-${product.category}-${product.name}`;

    setSelectedPowers((current) => ({
      ...current,
      [key]: power,
    }));
  };

  // =======================================================
  // GET QUANTITY
  // =======================================================

  const getQuantity = (product) => {
    const selectedPower =
      getSelectedPower(product);

    const item = cart.find(
      (item) =>
        (item.brand || "") === currentBrand &&
        item.name === product.name &&
        item.power === selectedPower
    );

    return item
      ? Number(item.quantity || 0)
      : 0;
  };

  // =======================================================
  // GET SELECTED PRODUCT
  // =======================================================

  const getSelectedProduct = (product) => {
    const selectedPower =
      getSelectedPower(product);

    const basePrice = getProductPrice(
      currentBrand,
      product.name,
      product.category,
      selectedPower
    );

    // These brands display MRP with a 30% offer on the product card.
    // Store the discounted selling price in cart so no second discount is needed there.
    const applyProductDiscount = ["ADEL", "Reckeweg", "Dr. Reckeweg", "SBL", "Schwabe"].includes(currentBrand);

    return {
      ...product,
      power: selectedPower,
      price: applyProductDiscount ? Math.round(basePrice * 0.70) : basePrice,
    };
  };

  // =======================================================
  // ADD TO CART
  // =======================================================

  const handleAdd = (product) => {
    if (typeof addToCart !== "function") {
      console.error(
        "addToCart function is missing."
      );
      return;
    }

    const selectedProduct =
      getSelectedProduct(product);

    if (!Number.isFinite(selectedProduct.price) || selectedProduct.price <= 0) {
      return;
    }

    addToCart({
      name: selectedProduct.name,
      price: selectedProduct.price,
      category: selectedProduct.category,
      power: selectedProduct.power,
      image: selectedProduct.image,
      brand: currentBrand,
      quantity: 1,
    });
  };

  // =======================================================
  // MINUS
  // =======================================================

  const handleMinus = (product) => {
    if (typeof setCart !== "function") {
      console.error(
        "setCart function is missing."
      );
      return;
    }

    const selectedPower =
      getSelectedPower(product);

    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (
            (item.brand || "") === currentBrand &&
            item.name === product.name &&
            item.power === selectedPower
          ) {
            return {
              ...item,
              quantity:
                Number(item.quantity || 1) - 1,
            };
          }

          return item;
        })
        .filter(
          (item) =>
            Number(item.quantity || 0) > 0
        );
    });
  };

  // =======================================================
  // CART COUNT
  // =======================================================

  const cartCount = cart.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <div className="min-h-screen bg-white">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            md:px-8
            py-4
          "
        >

          {/* BACK */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              flex
              items-center
              gap-2
              text-gray-700
              font-semibold
              mb-4
              hover:text-green-600
              transition
            "
          >
            <FiArrowLeft size={20} />
            Back
          </button>

          {/* TITLE + CART */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >

            <div className="min-w-0">

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-green-600
                "
              >
                {brandName}
              </h1>

              <p
                className="
                  text-gray-500
                  mt-1
                  text-sm
                  sm:text-base
                "
              >
                Homeopathic medicines by{" "}
                {brandName}
              </p>

            </div>

            {/* CART */}

            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="
                relative
                flex-shrink-0
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-green-50
                flex
                items-center
                justify-center
                text-green-600
                hover:bg-green-100
                transition
              "
            >

              <FiShoppingCart size={22} />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-[22px]
                    h-[22px]
                    px-1
                    rounded-full
                    bg-green-600
                    text-white
                    text-xs
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </span>
              )}

            </button>

          </div>

        </div>

      </div>

      {/* =================================================
          CATEGORY SECTION
      ================================================= */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
          pt-6
          sm:pt-8
        "
      >

        <h2
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-900
            mb-4
            sm:mb-5
          "
        >
          Shop {brandName} by Category
        </h2>

        <div
          className="
            flex
            gap-2
            sm:gap-3
            overflow-x-auto
            pb-3
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {brandConfig.categories.map(
            (category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`
                  flex-shrink-0
                  px-4
                  sm:px-5
                  py-2.5
                  sm:py-3
                  rounded-full
                  border
                  text-sm
                  sm:text-base
                  font-semibold
                  whitespace-nowrap
                  transition
                  ${
                    selectedCategory === category
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-green-50 text-gray-800 border-green-100 hover:bg-green-100"
                  }
                `}
              >
                {category}
              </button>
            )
          )}

        </div>

      </section>

      {/* =================================================
          PRODUCTS
      ================================================= */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
          py-6
          sm:py-8
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            mb-5
            sm:mb-6
          "
        >

          <h2
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-gray-900
            "
          >
            {brandName}{" "}
            {selectedCategory !== "All" &&
              selectedCategory}
          </h2>

          <span
            className="
              text-xs
              sm:text-sm
              text-gray-500
            "
          >
            {filteredProducts.length} products
          </span>

        </div>

        {filteredProducts.length === 0 ? (

          <div className="text-center py-16">

            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>

          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-3
              sm:gap-5
              md:gap-6
            "
          >

            {filteredProducts.map(
              (product) => {

                const selectedPower =
                  getSelectedPower(product);

                const selectedPrice =
                  getProductPrice(
                    currentBrand,
                    product.name,
                    product.category,
                    selectedPower
                  );

                const quantity =
                  getQuantity(product);

                const powerOptions =
                  getPowerOptionsFor(
                    currentBrand,
                    product
                  );

                return (

                  <div
                    key={`${currentBrand}-${product.category}-${product.name}`}
                    className="
                      bg-white
                      border
                      border-gray-100
                      rounded-2xl
                      shadow-sm
                      hover:shadow-lg
                      transition
                      overflow-hidden
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        h-36
                        sm:h-48
                        md:h-52
                        bg-green-50
                        flex
                        items-center
                        justify-center
                        p-3
                        sm:p-5
                      "
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          max-h-full
                          max-w-full
                          object-contain
                        "
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />

                    </div>

                    {/* INFO */}

                    <div
                      className="
                        p-3
                        sm:p-4
                      "
                    >

                      {/* CATEGORY */}

                      <p
                        className="
                          text-[11px]
                          sm:text-xs
                          text-green-600
                          font-semibold
                          mb-2
                        "
                      >
                        {product.category}
                      </p>

                      {/* NAME */}

                      <h3
                        className="
                          font-semibold
                          text-gray-900
                          text-[13px]
                          sm:text-sm
                          md:text-base
                          leading-snug
                          min-h-[58px]
                        "
                      >
                        {product.name}
                      </h3>

                      {/* =================================
                          POWER SELECTOR
                      ================================= */}

                      {powerOptions.length > 0 && (
                        <div className="mt-3">

                          <p
                            className="
                              text-xs
                              font-semibold
                              text-gray-600
                              mb-1.5
                            "
                          >
                            Power
                          </p>

                          <select
                            value={selectedPower}
                            onChange={(e) =>
                              handlePowerChange(
                                product,
                                e.target.value
                              )
                            }
                            className="
                              w-full
                              border
                              border-gray-200
                              rounded-xl
                              px-3
                              py-2
                              text-sm
                              font-semibold
                              text-gray-800
                              bg-white
                              focus:outline-none
                              focus:ring-2
                              focus:ring-green-500
                            "
                          >

{Array.isArray(powerOptions) &&
  powerOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}

                          </select>

                        </div>
                      )}

                      {/* PRICE + CART */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-2
                          mt-4
                        "
                      >

                        {["Bakson", "LORD'S", "Wheezal"].includes(currentBrand) ? (
                          (() => {
                            const mrpMap = currentBrand === "Bakson" ? BAKSON_MRP : currentBrand === "LORD'S" ? LORDS_MRP : WHEEZAL_MRP;
                            const mrp = mrpMap[product.name];
                            const packSize = currentBrand === "LORD'S" ? LORDS_PACK_SIZE[product.name] : "";
                            return mrp ? (
                              <div className="flex flex-col items-start">
                                {packSize && <span className="text-[10px] text-gray-500 mb-1">{packSize}</span>}
                                <span className="text-xs text-gray-500 line-through">MRP ₹{mrp}</span>
                                <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-1">30% OFF</span>
                                <span className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">₹{Math.round(mrp * 0.70)}</span>
                              </div>
                            ) : <span className="text-xs sm:text-sm text-gray-500">Price unavailable</span>;
                          })()
                        ) : ["ADEL", "Reckeweg", "Dr. Reckeweg", "SBL", "Schwabe"].includes(currentBrand) ? (
                          <div className="flex flex-col items-start">
                            <span className="text-xs text-gray-500 line-through">MRP ₹{selectedPrice}</span>
                            <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-1">30% OFF</span>
                            <span className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">₹{Math.round(selectedPrice * 0.70)}</span>
                          </div>
                        ) : (
                          <span className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">₹{selectedPrice}</span>
                        )}

                        {/* ADD */}

                        {quantity === 0 ? (

                          <button
                            type="button"
                            onClick={() =>
                              handleAdd(product)
                            }
                            disabled={(["Bakson", "LORD'S", "Wheezal"].includes(currentBrand) && !(currentBrand === "Bakson" ? BAKSON_MRP[product.name] : currentBrand === "LORD'S" ? LORDS_MRP[product.name] : WHEEZAL_MRP[product.name]))}
                            className="
                              bg-green-600
                              text-white
                              px-3
                              sm:px-4
                              py-2
                              rounded-xl
                              text-xs
                              sm:text-sm
                              font-semibold
                              hover:bg-green-700
                              disabled:opacity-40
                              disabled:cursor-not-allowed
                              transition
                              flex-shrink-0
                              cursor-pointer
                            "
                          >
                            Add
                          </button>

                        ) : (

                          /* =================================
                             QUANTITY CONTROLS
                          ================================= */

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              sm:gap-3
                            "
                          >

                            {/* MINUS */}

                            <button
                              type="button"
                              onClick={() =>
                                handleMinus(product)
                              }
                              className="
                                w-9
                                h-9
                                sm:w-10
                                sm:h-10
                                rounded-xl
                                bg-gray-100
                                text-gray-900
                                flex
                                items-center
                                justify-center
                                text-xl
                                sm:text-2xl
                                font-medium
                                hover:bg-gray-200
                                active:scale-95
                                transition
                                cursor-pointer
                              "
                            >
                              −
                            </button>

                            {/* QUANTITY */}

                            <span
                              className="
                                min-w-[18px]
                                sm:min-w-[22px]
                                text-center
                                text-base
                                sm:text-lg
                                font-bold
                                text-gray-900
                              "
                            >
                              {quantity}
                            </span>

                            {/* PLUS */}

                            <button
                              type="button"
                              onClick={() =>
                                handleAdd(product)
                              }
                              className="
                                w-9
                                h-9
                                sm:w-10
                                sm:h-10
                                rounded-xl
                                bg-green-600
                                text-white
                                flex
                                items-center
                                justify-center
                                text-xl
                                sm:text-2xl
                                font-medium
                                hover:bg-green-700
                                active:scale-95
                                transition
                                cursor-pointer
                              "
                            >
                              +
                            </button>

                          </div>

                        )}

                      </div>

                    </div>

                  </div>

                );
              }
            )}

          </div>

        )}

      </section>

    </div>
  );
}

export default BrandPage;