var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}
