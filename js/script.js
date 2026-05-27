const carCatalog = {
  Acura: ["ILX", "MDX", "RDX", "TL", "TSX"],
  "Alfa Romeo": ["147", "156", "159", "Giulia", "Giulietta", "Stelvio"],
  "Aston Martin": ["DB9", "DB11", "Rapide", "Vantage"],
  Audi: ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "TT"],
  Bentley: ["Bentayga", "Continental", "Flying Spur"],
  BMW: ["1 Series", "3 Series", "5 Series", "7 Series", "E46", "E60", "X1", "X3", "X5", "X6"],
  Buick: ["Enclave", "Encore", "LaCrosse", "Regal"],
  BYD: ["Atto 3", "Dolphin", "Seal", "Song Plus"],
  Cadillac: ["ATS", "CTS", "Escalade", "SRX", "XT5"],
  Chery: ["Arrizo", "Tiggo 4", "Tiggo 7", "Tiggo 8"],
  Chevrolet: ["Aveo", "Camaro", "Captiva", "Cruze", "Malibu", "Spark", "Tahoe", "Volt"],
  Chrysler: ["300", "Pacifica", "PT Cruiser", "Sebring", "Voyager"],
  Citroen: ["Berlingo", "C3", "C4", "C5", "DS3", "DS4", "Picasso"],
  Dacia: ["Dokker", "Duster", "Logan", "Lodgy", "Sandero"],
  Daewoo: ["Lacetti", "Lanos", "Matiz", "Nexia", "Nubira"],
  Dodge: ["Caravan", "Challenger", "Charger", "Durango", "Journey"],
  Fiat: ["500", "Doblo", "Ducato", "Panda", "Punto", "Tipo"],
  Ford: ["Escape", "Explorer", "F-150", "Fiesta", "Focus", "Fusion", "Mustang", "Transit"],
  Geely: ["Atlas", "Coolray", "Emgrand", "Tugella"],
  Genesis: ["G70", "G80", "G90", "GV70", "GV80"],
  GMC: ["Acadia", "Savana", "Sierra", "Terrain", "Yukon"],
  "Great Wall": ["Haval H6", "Hover", "Wingle"],
  Haval: ["H2", "H6", "H9", "Jolion"],
  Honda: ["Accord", "Civic", "CR-V", "Fit", "Freed", "HR-V", "Insight", "Odyssey", "Pilot", "Stepwgn"],
  Hyundai: ["Accent", "Elantra", "H-1", "i30", "Ioniq", "Kona", "Santa Fe", "Sonata", "Tucson"],
  Infiniti: ["EX", "FX", "G35", "M", "Q50", "QX60", "QX70"],
  Isuzu: ["D-Max", "Trooper"],
  Jaguar: ["E-Pace", "F-Pace", "S-Type", "XE", "XF", "XJ"],
  Jeep: ["Cherokee", "Compass", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"],
  Kia: ["Ceed", "K5", "Optima", "Picanto", "Rio", "Sorento", "Soul", "Sportage", "Stinger"],
  "Land Rover": ["Defender", "Discovery", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport"],
  Lada: ["Granta", "Kalina", "Niva", "Priora", "Vesta"],
  Lamborghini: ["Aventador", "Gallardo", "Huracan", "Urus"],
  Lexus: ["CT", "ES", "GS", "IS", "LS", "LX", "NX", "RX"],
  Lincoln: ["Aviator", "MKX", "MKZ", "Navigator"],
  Mazda: ["Atenza", "Axela", "CX-5", "CX-7", "CX-9", "Demio", "Mazda3", "Mazda6", "MX-5"],
  "Mercedes-Benz": ["A-Class", "C-Class", "CLA", "E-Class", "GLC", "GLE", "ML-Class", "S-Class", "Sprinter", "Vito"],
  Maserati: ["Ghibli", "GranTurismo", "Levante", "Quattroporte"],
  Mini: ["Clubman", "Cooper", "Countryman", "Paceman"],
  Mitsubishi: ["ASX", "Colt", "Delica", "Eclipse Cross", "Lancer", "Montero", "Outlander", "Pajero"],
  Nissan: ["Altima", "Juke", "Leaf", "Note", "Patrol", "Qashqai", "Rogue", "Skyline", "Tiida", "X-Trail"],
  Opel: ["Astra", "Corsa", "Insignia", "Meriva", "Mokka", "Vectra", "Zafira"],
  Peugeot: ["206", "207", "208", "307", "308", "3008", "508", "Partner"],
  Porsche: ["911", "Boxster", "Cayenne", "Macan", "Panamera"],
  Ram: ["1500", "2500", "3500"],
  Renault: ["Captur", "Clio", "Kangoo", "Koleos", "Laguna", "Megane", "Scenic", "Trafic"],
  Saab: ["9-3", "9-5"],
  Seat: ["Altea", "Ateca", "Ibiza", "Leon", "Toledo"],
  Skoda: ["Fabia", "Kodiaq", "Octavia", "Rapid", "Superb", "Yeti"],
  Smart: ["Forfour", "Fortwo"],
  SsangYong: ["Actyon", "Korando", "Kyron", "Musso", "Rexton"],
  Subaru: ["Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "Tribeca", "WRX", "XV"],
  Suzuki: ["Alto", "Grand Vitara", "Jimny", "Swift", "SX4", "Vitara"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y"],
  Toyota: ["Aqua", "C-HR", "Camry", "Corolla", "Highlander", "Hilux", "Land Cruiser", "Prius", "RAV4", "Vitz", "Yaris"],
  UAZ: ["Hunter", "Patriot"],
  VAZ: ["2106", "2107", "2110", "2114"],
  Volkswagen: ["Beetle", "Caddy", "Golf", "Jetta", "Passat", "Polo", "Tiguan", "Touareg", "Transporter"],
  Volvo: ["S40", "S60", "S80", "V40", "XC60", "XC70", "XC90"]
};

const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const urlParams = new URLSearchParams(window.location.search);
const brandSelects = document.querySelectorAll("[data-brand-select]");
const yearSelects = document.querySelectorAll("[data-year-select]");
const searchInput = document.querySelector("#partSearch");
const filterButtons = document.querySelectorAll("[data-filter]");
const partsGrid = document.querySelector("#partsGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const sortSelect = document.querySelector("#sortParts");
const filterBrand = document.querySelector("#filterBrand");
const filterModel = document.querySelector("#filterModel");
const filterYear = document.querySelector("#filterYear");

const partDetails = {
  "toyota-camry-front-bumper": {
    category: "ძარა",
    name: "Toyota Camry წინა ბამპერი",
    description: "2018-2023 წელი, თეთრი ფერი, მცირე ნაკაწრით.",
    brand: "Toyota",
    model: "Camry",
    yearMin: "2018",
    yearMax: "2023",
    city: "თბილისი",
    condition: "მეორადი",
    price: "420 ₾",
    image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "honda-fit-left-headlight": {
    category: "განათება",
    name: "Honda Fit მარცხენა ფარი",
    description: "2014-2020 წელი, სუფთა მინა, სამაგრები ადგილზეა.",
    brand: "Honda",
    model: "Fit",
    yearMin: "2014",
    yearMax: "2020",
    city: "რუსთავი",
    condition: "მეორადი",
    price: "260 ₾",
    image: "https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "mercedes-eclass-front-shock": {
    category: "სავალი",
    name: "Mercedes-Benz E-Class წინა ამორტიზატორი",
    description: "მდგრადი მდგომარეობა, მოხსნილია მუშა ავტომობილიდან.",
    brand: "Mercedes-Benz",
    model: "E-Class",
    yearMin: "2009",
    yearMax: "2016",
    city: "ქუთაისი",
    condition: "აღდგენილი",
    price: "180 ₾",
    image: "https://images.pexels.com/photos/6870299/pexels-photo-6870299.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "hyundai-sonata-oil-filter": {
    category: "ძრავი",
    name: "Hyundai Sonata ზეთის ფილტრი",
    description: "შეფუთული დეტალი, თავსებადია 2015-2019 წლებთან.",
    brand: "Hyundai",
    model: "Sonata",
    yearMin: "2015",
    yearMax: "2019",
    city: "ბათუმი",
    condition: "ახალი",
    price: "35 ₾",
    image: "https://images.pexels.com/photos/20867316/pexels-photo-20867316.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "kia-sportage-brake-pads": {
    category: "სავალი",
    name: "Kia Sportage სამუხრუჭე ხუნდები",
    description: "წინა მხარე, სრული კომპლექტი, გარანტიით.",
    brand: "Kia",
    model: "Sportage",
    yearMin: "2016",
    yearMax: "2022",
    city: "თბილისი",
    condition: "ახალი",
    price: "95 ₾",
    image: "https://images.pexels.com/photos/4022543/pexels-photo-4022543.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "bmw-3series-alternator": {
    category: "ელექტრობა",
    name: "BMW 3 Series გენერატორი",
    description: "შემოწმებული სტენდზე, ხელმისაწვდომია ადგილზე მიტანა.",
    brand: "BMW",
    model: "3 Series",
    yearMin: "2012",
    yearMax: "2018",
    city: "გორი",
    condition: "აღდგენილი",
    price: "390 ₾",
    image: "https://images.pexels.com/photos/16143352/pexels-photo-16143352.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "ford-transit-egr-valve": {
    category: "ძრავი",
    name: "Ford Transit EGR სარქველი",
    description: "ორიგინალი მოხსნილი დეტალი, გაწმენდილი და ტესტირებული დიაგნოსტიკურ სტენდზე.",
    brand: "Ford",
    model: "Transit",
    yearMin: "2013",
    yearMax: "2020",
    city: "ზუგდიდი",
    condition: "მეორადი",
    price: "210 ₾",
    image: "https://images.pexels.com/photos/12330254/pexels-photo-12330254.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "volkswagen-passat-right-mirror": {
    category: "ძარა",
    name: "Volkswagen Passat B8 მარჯვენა სარკე",
    description: "კორპუსი დაუზიანებელია, მექანიზმი სრულად მუშაა, აქვს გათბობის ფუნქცია.",
    brand: "Volkswagen",
    model: "Passat",
    yearMin: "2015",
    yearMax: "2021",
    city: "თბილისი",
    condition: "მეორადი",
    price: "320 ₾",
    image: "https://images.pexels.com/photos/9101149/pexels-photo-9101149.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
};

let activeCategory = "ყველა";

function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function uniqueModels() {
  return Object.values(carCatalog)
    .flat()
    .filter((model, index, models) => models.indexOf(model) === index)
    .sort((first, second) => first.localeCompare(second, "en"));
}

function fillSelect(select, values, firstText) {
  select.textContent = "";
  select.appendChild(createOption("", firstText));
  values.forEach((value) => select.appendChild(createOption(value, value)));
}

function modelSelectFor(brandSelect) {
  const scope = brandSelect.closest("form") || brandSelect.closest(".filter-panel") || document;
  return scope.querySelector("[data-model-select]");
}

function updateModelSelect(brandSelect, selectedModel = "") {
  const modelSelect = modelSelectFor(brandSelect);

  if (!modelSelect) {
    return;
  }

  const firstText = modelSelect.required ? "აირჩიეთ მოდელი" : "ყველა მოდელი";
  const models = brandSelect.value ? carCatalog[brandSelect.value] || [] : uniqueModels();

  fillSelect(modelSelect, models, firstText);

  if (selectedModel && models.includes(selectedModel)) {
    modelSelect.value = selectedModel;
  }
}

function initializeCarSelects() {
  const brands = Object.keys(carCatalog).sort((first, second) => first.localeCompare(second, "en"));

  brandSelects.forEach((brandSelect) => {
    const firstText = brandSelect.required ? "აირჩიეთ მარკა" : "ყველა მარკა";
    fillSelect(brandSelect, brands, firstText);

    const requestedBrand = urlParams.get(brandSelect.name);
    const requestedModel = urlParams.get("modeli");

    if (requestedBrand && brands.includes(requestedBrand)) {
      brandSelect.value = requestedBrand;
    }

    updateModelSelect(brandSelect, requestedModel || "");

    brandSelect.addEventListener("change", () => {
      updateModelSelect(brandSelect);
      filterParts();
    });
  });

  yearSelects.forEach((yearSelect) => {
    const firstText = yearSelect.required ? "აირჩიეთ წელი" : "ყველა წელი";
    const years = [];

    for (let year = 2027; year >= 1960; year -= 1) {
      years.push(String(year));
    }

    fillSelect(yearSelect, years, firstText);

    const requestedYear = urlParams.get(yearSelect.name);

    if (requestedYear && years.includes(requestedYear)) {
      yearSelect.value = requestedYear;
    }

    yearSelect.addEventListener("change", filterParts);
  });

  document.querySelectorAll("[data-model-select]").forEach((modelSelect) => {
    modelSelect.addEventListener("change", filterParts);
  });
}

function filterParts() {
  if (!partsGrid) {
    return;
  }

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedBrand = filterBrand ? filterBrand.value : "";
  const selectedModel = filterModel ? filterModel.value : "";
  const selectedYear = filterYear ? Number(filterYear.value) : 0;
  const cards = Array.from(partsGrid.querySelectorAll(".part-card"));
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category;
    const brand = card.dataset.brand || "";
    const model = card.dataset.model || "";
    const yearMin = Number(card.dataset.yearMin || 0);
    const yearMax = Number(card.dataset.yearMax || 9999);
    const text = [card.dataset.name, brand, model, category].join(" ").toLowerCase();
    const matchesCategory = activeCategory === "ყველა" || category === activeCategory;
    const matchesQuery = !query || text.includes(query);
    const matchesBrand = !selectedBrand || brand === selectedBrand;
    const matchesModel = !selectedModel || model === selectedModel;
    const matchesYear = !selectedYear || (selectedYear >= yearMin && selectedYear <= yearMax);
    const isVisible = matchesCategory && matchesQuery && matchesBrand && matchesModel && matchesYear;

    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (resultCount) {
    resultCount.textContent = `ნაპოვნია ${visibleCount} ნაწილი`;
  }

  if (emptyState) {
    emptyState.classList.toggle("show", visibleCount === 0);
  }
}

function sortParts() {
  if (!partsGrid || !sortSelect) {
    return;
  }

  const cards = Array.from(partsGrid.querySelectorAll(".part-card"));
  const direction = sortSelect.value;

  if (direction === "default") {
    cards.sort((first, second) => first.dataset.name.localeCompare(second.dataset.name, "ka"));
  }

  if (direction === "cheap") {
    cards.sort((first, second) => Number(first.dataset.price) - Number(second.dataset.price));
  }

  if (direction === "expensive") {
    cards.sort((first, second) => Number(second.dataset.price) - Number(first.dataset.price));
  }

  cards.forEach((card) => partsGrid.appendChild(card));
  filterParts();
}

initializeCarSelects();

if (searchInput && urlParams.get("dzebna")) {
  searchInput.value = urlParams.get("dzebna");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    activeCategory = button.dataset.filter;
    filterParts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", filterParts);
}

if (sortSelect) {
  sortSelect.addEventListener("change", sortParts);
}

const partTitle = document.querySelector("#partTitle");
const partCategory = document.querySelector("#partCategory");
const partDescription = document.querySelector("#partDescription");
const partCity = document.querySelector("#partCity");
const partModel = document.querySelector("#partModel");
const partYears = document.querySelector("#partYears");
const partCondition = document.querySelector("#partCondition");
const partPrice = document.querySelector("#partPrice");
const partImage = document.querySelector("#partImage");
const orderBtn = document.querySelector("#orderBtn");

function initPartPage() {
  if (!partTitle) {
    return;
  }

  const detailParams = new URLSearchParams(window.location.search);
  const itemKey = detailParams.get("item");
  const fallbackKey = Object.keys(partDetails)[0];
  const part = partDetails[itemKey] || partDetails[fallbackKey];

  if (!part) {
    return;
  }

  document.title = `${part.name} | ნაწილები`;
  partTitle.textContent = part.name;
  partCategory.textContent = `კატეგორია: ${part.category}`;
  partDescription.textContent = part.description;
  partCity.textContent = part.city;
  partModel.textContent = part.model;
  partYears.textContent = `${part.yearMin}-${part.yearMax}`;
  partCondition.textContent = part.condition;
  partPrice.textContent = part.price;

  if (partImage) {
    partImage.src = part.image;
    partImage.alt = part.name;
  }

  if (orderBtn) {
    const orderParams = new URLSearchParams({
      marka: part.brand,
      modeli: part.model,
      weli: part.yearMax,
      dzebna: part.name
    });
    orderBtn.href = `request.html?${orderParams.toString()}`;
  }
}

const noteArea = document.querySelector("#partNote");
const noteCounter = document.querySelector("#noteCounter");
const requestPartInput = document.querySelector("#partName");
const sellPhotoInput = document.querySelector("#sellPhotos");
const sellPhotoPicker = document.querySelector("[data-pick-photos]");
const sellPhotoList = document.querySelector("#sellPhotoList");
const sellPhotoCount = document.querySelector("#sellPhotoCount");
let sellPhotoPreviewUrls = [];
let selectedSellPhotos = [];

function updateSellPhotoCount() {
  if (!sellPhotoCount) {
    return;
  }

  const total = selectedSellPhotos.length;
  sellPhotoCount.textContent = total > 0
    ? `არჩეულია ${total} ფოტო`
    : "ფოტო არჩეული არ არის";
}

function clearSellPhotoPreviews() {
  sellPhotoPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
  sellPhotoPreviewUrls = [];
}

function renderSellPhotoPreviews() {
  if (!sellPhotoList) {
    return;
  }

  clearSellPhotoPreviews();
  sellPhotoList.textContent = "";

  selectedSellPhotos.forEach((file, index) => {
    const url = URL.createObjectURL(file);
    sellPhotoPreviewUrls.push(url);

    const item = document.createElement("div");
    const image = document.createElement("img");
    const caption = document.createElement("span");

    item.className = "photo-thumb";
    image.src = url;
    image.alt = `ფოტო ${index + 1}`;
    caption.textContent = file.name;

    item.append(image, caption);
    sellPhotoList.appendChild(item);
  });

  updateSellPhotoCount();
}

function syncSellPhotoInputFiles() {
  if (!sellPhotoInput) {
    return;
  }

  const transfer = new DataTransfer();
  selectedSellPhotos.forEach((file) => transfer.items.add(file));
  sellPhotoInput.files = transfer.files;
}

function clearSellPhotos() {
  if (!sellPhotoInput) {
    return;
  }

  selectedSellPhotos = [];
  sellPhotoInput.value = "";
  renderSellPhotoPreviews();
}

function initSellPhotoPicker() {
  if (!sellPhotoInput || !sellPhotoPicker) {
    return;
  }

  sellPhotoPicker.addEventListener("click", () => {
    sellPhotoInput.click();
  });

  sellPhotoInput.addEventListener("change", () => {
    const incomingFiles = Array.from(sellPhotoInput.files || []);

    incomingFiles.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        return;
      }

      const exists = selectedSellPhotos.some((saved) =>
        saved.name === file.name
        && saved.size === file.size
        && saved.lastModified === file.lastModified
      );

      if (!exists) {
        selectedSellPhotos.push(file);
      }
    });

    syncSellPhotoInputFiles();
    renderSellPhotoPreviews();
  });

  updateSellPhotoCount();
}

if (noteArea && noteCounter) {
  noteArea.addEventListener("input", () => {
    noteCounter.textContent = `${noteArea.value.length}/500`;
  });
}

if (requestPartInput && urlParams.get("dzebna")) {
  requestPartInput.value = urlParams.get("dzebna");
}

function refreshFormModels(form) {
  form.querySelectorAll("[data-brand-select]").forEach((brandSelect) => updateModelSelect(brandSelect));
}

document.querySelectorAll(".js-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");

    if (status) {
      status.textContent = form.id === "sellForm"
        ? "განცხადება მიღებულია. შემოწმების შემდეგ გამოჩნდება კატალოგში."
        : "შეტყობინება მიღებულია. მალე დაგიკავშირდებით.";
    }

    form.reset();
    refreshFormModels(form);

    if (noteCounter) {
      noteCounter.textContent = "0/500";
    }

    if (form.id === "sellForm") {
      clearSellPhotos();
    }
  });
});

function getSavedParts() {
  try {
    return JSON.parse(localStorage.getItem("savedParts")) || [];
  } catch (error) {
    return [];
  }
}

function setSavedParts(parts) {
  localStorage.setItem("savedParts", JSON.stringify(parts));
}

function isPartSaved(title) {
  return getSavedParts().some((part) => part.title === title);
}

function getCatalogCardPartData(card) {
  const title = card.querySelector(".part-body h3")?.textContent.trim() || "შენახული ნაწილი";
  const price = card.querySelector(".part-meta strong")?.textContent.trim() || "";
  const location = card.querySelector(".part-meta span")?.textContent.trim() || "";
  const url = card.querySelector(".btn-card")?.getAttribute("href") || "catalog.html";

  return {
    title,
    price,
    location,
    url
  };
}

function updateCatalogSaveButtons() {
  document.querySelectorAll("[data-save-part]").forEach((button) => {
    const card = button.closest(".part-card");

    if (!card) {
      return;
    }

    const { title } = getCatalogCardPartData(card);
    const saved = isPartSaved(title);
    button.classList.toggle("saved", saved);
    button.textContent = saved ? "შენახულია" : "შენახვა";
  });
}

if (partsGrid) {
  partsGrid.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-part]");

    if (!saveButton) {
      return;
    }

    const card = saveButton.closest(".part-card");

    if (!card) {
      return;
    }

    const part = getCatalogCardPartData(card);
    const savedParts = getSavedParts();
    const alreadySaved = savedParts.some((savedPart) => savedPart.title === part.title);
    const nextParts = alreadySaved
      ? savedParts.filter((savedPart) => savedPart.title !== part.title)
      : [...savedParts, part];

    setSavedParts(nextParts);
    updateCatalogSaveButtons();
  });
}

const favoriteButton = document.querySelector("[data-favorite]");

if (favoriteButton) {
  const title = favoriteButton.dataset.title || "შენახული ნაწილი";

  if (isPartSaved(title)) {
    favoriteButton.classList.add("saved");
    favoriteButton.textContent = "შენახულია";
  }

  favoriteButton.addEventListener("click", () => {
    const savedParts = getSavedParts();
    const alreadySaved = savedParts.some((part) => part.title === title);
    const nextParts = alreadySaved
      ? savedParts.filter((part) => part.title !== title)
      : [...savedParts, {
        title,
        price: favoriteButton.dataset.price || "",
        location: favoriteButton.dataset.location || "",
        url: "catalog.html"
      }];

    setSavedParts(nextParts);

    const saved = !alreadySaved;
    favoriteButton.classList.toggle("saved", saved);
    favoriteButton.textContent = saved ? "შენახულია" : "შენახვა";
  });
}

function updateSavedEmptyState() {
  const savedList = document.querySelector("[data-saved-list]");
  const savedEmpty = document.querySelector("[data-saved-empty]");

  if (!savedList || !savedEmpty) {
    return;
  }

  const hasCards = savedList.querySelectorAll("[data-saved-card]").length > 0;
  savedEmpty.classList.toggle("show", !hasCards);
}

function createSavedCard(part, index) {
  const card = document.createElement("article");
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const meta = document.createElement("p");
  const price = document.createElement("strong");
  const link = document.createElement("a");
  const remove = document.createElement("button");

  card.className = "saved-card";
  card.dataset.savedCard = "";
  title.textContent = part.title;
  meta.textContent = part.location || "მდებარეობა მითითებული არ არის";
  price.textContent = part.price || "ფასი შეთანხმებით";
  link.className = "btn btn-card";
  const partSlug = Object.entries(partDetails).find(([, detail]) => detail.name === part.title)?.[0];
  link.href = part.url || (partSlug ? `part.html?item=${partSlug}` : "catalog.html");
  link.textContent = "ნახვა";
  remove.className = "btn btn-secondary";
  remove.type = "button";
  remove.dataset.removeSaved = String(index);
  remove.textContent = "წაშლა";

  content.append(title, meta);
  card.append(content, price, link, remove);

  return card;
}

function renderSavedParts() {
  const savedList = document.querySelector("[data-saved-list]");

  if (!savedList) {
    return;
  }

  const savedParts = getSavedParts();

  if (savedParts.length > 0) {
    savedList.textContent = "";
    savedParts.forEach((part, index) => savedList.appendChild(createSavedCard(part, index)));
  }

  savedList.querySelectorAll("[data-remove-saved]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeSaved);

      if (Number.isInteger(index)) {
        const nextParts = getSavedParts().filter((part, partIndex) => partIndex !== index);
        setSavedParts(nextParts);
        button.closest("[data-saved-card]").remove();
      } else {
        button.closest("[data-saved-card]").remove();
      }

      updateSavedEmptyState();
      updateCatalogSaveButtons();
    });
  });

  updateSavedEmptyState();
}

renderSavedParts();
updateCatalogSaveButtons();
filterParts();
initPartPage();
initSellPhotoPicker();
