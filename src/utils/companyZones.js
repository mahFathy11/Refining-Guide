export const COMPANY_ZONES = [
  { id: "all", label: "جميع المناطق الجغرافية", icon: "🌐" },
  { id: "alex", label: "الإسكندرية والعامرية", icon: "⚓" },
  { id: "suez", label: "السويس والعين السخنة", icon: "🚢" },
  { id: "cairo", label: "القاهرة الكبرى ومسطرد", icon: "🏛️" },
  { id: "canal_delta", label: "بورسعيد ودمياط والدلتا", icon: "🌊" },
  { id: "upper", label: "أسيوط ومحافظات الصعيد", icon: "🌾" },
  { id: "west_redsea", label: "الصحراء الغربية والبحر الأحمر", icon: "🏜️" },
];

// جدول تعيين دقيق للشركات المعروفة بحسب مواقع منشآتها وعملياتها الرئيسية
export const EXPLICIT_COMPANY_ZONES = {
  // أسيوط ومحافظات الصعيد
  asorc: "upper",
  anopc: "upper",
  kima: "upper",

  // الإسكندرية والعامرية
  midor: "alex",
  anrpc: "alex",
  aprc: "alex",
  alex_oil: "alex",
  amoc: "alex",
  aspc: "alex",
  acpa: "alex",
  sidpec: "alex",
  ethydco: "alex",
  epc: "alex",
  elab: "alex",
  abuqir: "alex",
  estyrenics: "alex",
  alexfert: "alex",
  petromaint: "alex",
  sumed: "alex",
  wepco: "alex",

  // السويس والعين السخنة
  sopc: "suez",
  nasr_oil: "suez",
  ehc: "suez",
  opc: "suez",
  galaxy_surfactants: "suez",

  // بورسعيد ودمياط والدلتا
  mopco: "canal_delta",
  eppc: "canal_delta",
  emethanex: "canal_delta",
  tci_sanmar: "canal_delta",
  egyptian_lng: "canal_delta",
  ugdc: "canal_delta",
  segas_lng: "canal_delta",
  wasco: "canal_delta",

  // الصحراء الغربية والبحر الأحمر
  gupco: "west_redsea",
  petrobel: "west_redsea",
  khalda: "west_redsea",
  bapetco: "west_redsea",
  rashpetco: "west_redsea",
  suco: "west_redsea",
  qarun: "west_redsea",
  agiba: "west_redsea",
  petrogulf: "west_redsea",
  gemsa_oil: "west_redsea",
  petroziet: "west_redsea",
  tharwa: "west_redsea",

  // القاهرة الكبرى ومسطرد
  erc: "cairo",
  corc: "cairo",
  eprom: "cairo",
  caltex_egypt: "cairo",
  echem: "cairo",
  helwan_fert: "cairo",
  gasco: "cairo",
  egas: "cairo",
  cargas: "cairo",
  gastec: "cairo",
  egypt_gas: "cairo",
  towngas: "cairo",
  enppi: "cairo",
  petrojet: "cairo",
  emc: "cairo",
  petrosafe: "cairo",
  midtap: "cairo",
  onspec: "cairo",
  ppp_egypt: "cairo",
  thyssenkrupp_egypt: "cairo",
  shell_egypt: "cairo",
  bp_egypt: "cairo",
  apache_egypt: "cairo",
  slb: "cairo",
  baker_hughes: "cairo",
  halliburton: "cairo",
  pico_energy: "cairo",
  weatherford: "cairo",
};

export function getCompanyZone(c) {
  if (!c) return "cairo";
  if (c.zone) return c.zone;
  if (c.id && EXPLICIT_COMPANY_ZONES[c.id]) {
    return EXPLICIT_COMPANY_ZONES[c.id];
  }

  // فحص العنوان أولاً لأنه يحدد الموقع الجغرافي الفعلي للمنشأة
  const addr = (c.address || "").toLowerCase();
  const nameAndActivity = `${c.name || ""} ${c.activity || ""}`.toLowerCase();

  const testText = (regex) => regex.test(addr) || regex.test(nameAndActivity);

  // أسيوط ومحافظات الصعيد
  if (testText(/أسيوط|اسيوط|جحدم|منفلوط|أسوان|اسوان|قنا|الأقصر|الاقصر|المنيا|منيا|بني سويف|صعيد|سوهاج|الوادي الجديد/)) {
    return "upper";
  }
  // الإسكندرية والعامرية
  if (testText(/إسكندرية|اسكندرية|عامرية|برج العرب|المكس|وادي القمر|دخيلة|مرغم|(سيدي\s+كرير)|سيدبك|أبو قير|ابو قير/)) {
    return "alex";
  }
  // السويس والعين السخنة
  if (testText(/سويس|عين السخنة|السخنة|سخنة|الزيتية|زيتية|عتاقة|فيران/)) {
    return "suez";
  }
  // بورسعيد ودمياط والدلتا
  if (testText(/بورسعيد|دمياط|إسماعيلية|اسماعيلية|كفر الشيخ|طلخا|منصورة|الجميل|إدكو|ادكو|بحيرة/)) {
    return "canal_delta";
  }
  // الصحراء الغربية والبحر الأحمر
  if (testText(/صحراء غربية|مطروح|علمين|واحات|قارون|خالدة|عجيبة|بدر الدين|رأس شقير|شقير|رأس غارب|غارب|غردقة|بحر أحمر|جمسة|جبل الزيت/)) {
    return "west_redsea";
  }
  // القاهرة الكبرى ومسطرد
  if (testText(/مسطرد|قليوبية|قاهرة|تجمع|معادي|جيزة|دقي|نصر|مهندسين|شروق|عبور|قطامية|أكتوبر|هرم|حلوان|تبين|هايكستب|نزهة/)) {
    return "cairo";
  }

  return "cairo";
}

export function getZoneLabel(zoneId) {
  const z = COMPANY_ZONES.find((item) => item.id === zoneId);
  return z ? z.label : "القاهرة الكبرى";
}
