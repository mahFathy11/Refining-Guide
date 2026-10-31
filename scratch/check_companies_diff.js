import { companies } from '../src/data/companies.js';

// Extracted from the user's PDF
const pdfCompanies = [
  {
    name: "Schlumberger (SLB)",
    keywords: ["schlumberger", "slb"],
    website: "https://careers.slb.com",
    linkedin: "https://www.linkedin.com/company/slb/"
  },
  {
    name: "Halliburton",
    keywords: ["halliburton"],
    website: "https://jobs.halliburton.com",
    linkedin: "https://www.linkedin.com/company/halliburton/"
  },
  {
    name: "Baker Hughes",
    keywords: ["baker", "hughes"],
    website: "https://careers.bakerhughes.com",
    linkedin: "https://www.linkedin.com/company/bakerhughes/"
  },
  {
    name: "BP Egypt",
    keywords: ["bp"],
    website: "https://www.bp.com/en/global/corporate/careers.html",
    linkedin: "https://www.linkedin.com/company/bp/"
  },
  {
    name: "Shell Egypt",
    keywords: ["shell"],
    website: "https://www.shell.com/careers.html",
    linkedin: "https://www.linkedin.com/company/shell/"
  },
  {
    name: "Total Energies",
    keywords: ["total", "totalenergies"],
    website: "https://careers.totalenergies.com",
    linkedin: "https://www.linkedin.com/company/totalenergies/"
  },
  {
    name: "Apache Egypt",
    keywords: ["apache"],
    website: "https://www.apachecorp.com/careers",
    linkedin: "https://www.linkedin.com/company/apache-corporation/"
  },
  {
    name: "Petrojet",
    keywords: ["petrojet"],
    website: "http://www.petrojet.com.eg",
    linkedin: "https://www.linkedin.com/company/petrojet/"
  },
  {
    name: "Enppi",
    keywords: ["enppi"],
    website: "https://www.enppi.com",
    linkedin: "https://www.linkedin.com/company/enppi/"
  },
  {
    name: "Gasco",
    keywords: ["gasco"],
    website: "http://www.gasco.com.eg",
    linkedin: "https://www.linkedin.com/company/gasco/"
  },
  {
    name: "MIDOR",
    keywords: ["midor"],
    website: "http://www.midor.com.eg",
    linkedin: "https://www.linkedin.com/company/midor/"
  },
  {
    name: "ERC (Egyptian Refining Company)",
    keywords: ["erc", "egyptian refining"],
    website: "https://erc.com.eg",
    linkedin: "https://www.linkedin.com/company/egyptian-refining-company/"
  },
  {
    name: "ETHYDCO",
    keywords: ["ethydco"],
    website: "https://www.ethydco-eg.com",
    linkedin: "https://www.linkedin.com/company/ethydco/"
  },
  {
    name: "Khalda Petroleum",
    keywords: ["khalda"],
    website: "http://www.khalda-eg.com",
    linkedin: "https://www.linkedin.com/company/khalda-petroleum-company/"
  },
  {
    name: "Pharaonic Petroleum",
    keywords: ["pharaonic", "phpc"],
    website: "http://www.phpc.com.eg",
    linkedin: "https://www.linkedin.com/company/pharaonic-petroleum-company/"
  },
  {
    name: "Siemens",
    keywords: ["siemens"],
    website: "https://www.siemens.com/global/en/company/jobs.html",
    linkedin: "https://www.linkedin.com/company/siemens/"
  },
  {
    name: "Schneider Electric",
    keywords: ["schneider"],
    website: "https://www.se.com/ww/en/about-us/careers/",
    linkedin: "https://www.linkedin.com/company/schneider-electric/"
  },
  {
    name: "ABB",
    keywords: ["abb"],
    website: "https://global.abb/group/en/careers",
    linkedin: "https://www.linkedin.com/company/abb/"
  },
  {
    name: "Bosch",
    keywords: ["bosch"],
    website: "https://www.bosch-career.com",
    linkedin: "https://www.linkedin.com/company/bosch/"
  },
  {
    name: "Valeo",
    keywords: ["valeo"],
    website: "https://www.valeo.com/en/careers/",
    linkedin: "https://www.linkedin.com/company/valeo/"
  },
  {
    name: "General Motors",
    keywords: ["general motors", "gm"],
    website: "https://careers.gm.com",
    linkedin: "https://www.linkedin.com/company/general-motors/"
  },
  {
    name: "Honeywell",
    keywords: ["honeywell"],
    website: "https://careers.honeywell.com",
    linkedin: "https://www.linkedin.com/company/honeywell/"
  },
  {
    name: "Emerson",
    keywords: ["emerson"],
    website: "https://www.emerson.com/en-us/careers",
    linkedin: "https://www.linkedin.com/company/emerson/"
  },
  {
    name: "Rockwell Automation",
    keywords: ["rockwell"],
    website: "https://www.rockwellautomation.com/en-us/company/careers.html",
    linkedin: "https://www.linkedin.com/company/rockwell-automation/"
  },
  {
    name: "GE",
    keywords: ["ge", "general electric"],
    website: "https://jobs.gecareers.com/global/en",
    linkedin: "https://www.linkedin.com/company/ge/"
  },
  {
    name: "Ghabbour Auto",
    keywords: ["ghabbour", "gb corp"],
    website: "https://www.gbcorp.com/careers",
    linkedin: "https://www.linkedin.com/company/gbcorp/"
  },
  {
    name: "Mansour Automotive",
    keywords: ["mansour"],
    website: "https://www.mansourgroup.com/careers",
    linkedin: "https://www.linkedin.com/company/mansourgroup/"
  },
  {
    name: "Mercedes-Benz Egypt",
    keywords: ["mercedes"],
    website: "https://www.mercedes-benz.com.eg",
    linkedin: "https://www.linkedin.com/company/mercedes-benz-egypt/"
  },
  {
    name: "BMW Egypt",
    keywords: ["bmw"],
    website: "https://www.bmw-egypt.com",
    linkedin: "https://www.linkedin.com/company/bmw-group/"
  },
  {
    name: "ElSewedy Electric",
    keywords: ["elsewedy", "sewedy"],
    website: "https://www.elsewedyelectric.com/careers",
    linkedin: "https://www.linkedin.com/company/elsewedy-electric/"
  },
  {
    name: "Giza Systems",
    keywords: ["giza systems"],
    website: "https://www.gizasystems.com/careers",
    linkedin: "https://www.linkedin.com/company/giza-systems/"
  },
  {
    name: "Procter & Gamble",
    keywords: ["procter", "p&g", "pg"],
    website: "https://www.pgcareers.com",
    linkedin: "https://www.linkedin.com/company/procter-and-gamble/"
  },
  {
    name: "PepsiCo",
    keywords: ["pepsico", "pepsi"],
    website: "https://www.pepsicojobs.com",
    linkedin: "https://www.linkedin.com/company/pepsico/"
  },
  {
    name: "Nestlé",
    keywords: ["nestle", "نستله"],
    website: "https://www.nestle.com/jobs",
    linkedin: "https://www.linkedin.com/company/nestle-s-a-/"
  },
  {
    name: "Coca-Cola",
    keywords: ["coca-cola", "coca cola", "كوكاكولا"],
    website: "https://www.coca-colacompany.com/careers",
    linkedin: "https://www.linkedin.com/company/the-coca-cola-company/"
  },
  {
    name: "Juhayna",
    keywords: ["juhayna", "جهينة"],
    website: "https://www.juhayna.com/careers",
    linkedin: "https://www.linkedin.com/company/juhayna-food-industries/"
  },
  {
    name: "Edita",
    keywords: ["edita", "اديتا"],
    website: "https://www.edita.com.eg/careers",
    linkedin: "https://www.linkedin.com/company/edita-food-industries/"
  },
  {
    name: "Unilever",
    keywords: ["unilever", "يونيليفر"],
    website: "https://careers.unilever.com",
    linkedin: "https://www.linkedin.com/company/unilever/"
  },
  {
    name: "Mondelez International",
    keywords: ["mondelez", "مونديليز"],
    website: "https://careers.mondelezinternational.com",
    linkedin: "https://www.linkedin.com/company/mondelezinternational/"
  },
  {
    name: "Nile Sugar",
    keywords: ["nile sugar", "سكر النيل"],
    website: "",
    linkedin: "https://www.linkedin.com/company/nile-sugar/"
  },
  {
    name: "Toyota Egypt",
    keywords: ["toyota", "تويوتا"],
    website: "https://www.toyota.com.eg",
    linkedin: "https://www.linkedin.com/company/toyota-egypt/"
  }
];

console.log('=== MATCHING PDF COMPANIES WITH OUR COMPANIES.JS ===\n');

for (const pdfC of pdfCompanies) {
  // Find match in companies
  const match = companies.find(c => {
    const id = (c.id || '').toLowerCase();
    const name = (c.name || '').toLowerCase();
    const nameEn = (c.nameEn || '').toLowerCase();
    return pdfC.keywords.some(kw => id.includes(kw) || name.includes(kw) || nameEn.includes(kw));
  });

  if (match) {
    console.log(`[MATCH FOUND] ${match.id} | ${match.name}`);
    console.log(`  Current Website : ${match.website}`);
    console.log(`  PDF Website     : ${pdfC.website}`);
    console.log(`  Current LinkedIn: ${match.linkedin}`);
    console.log(`  PDF LinkedIn    : ${pdfC.linkedin}`);
    console.log('----------------------------------------------------');
  } else {
    console.log(`[NO MATCH IN CURRENT COMPANIES] ${pdfC.name}`);
  }
}
