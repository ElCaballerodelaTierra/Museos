/**
 * Aplicación de Museos de la Ciudad de México
 * Mapa interactivo con Leaflet y sincronización bidireccional lista <-> mapa
 */

// Estado global de la aplicación
const AppState = {
  museos: [],
  filteredMuseos: [],
  selectedId: null,
  activeCategory: 'all',
  showCategoryOptions: false,
  showFreeEntryOptions: false,
  onlyFree: false,
  freeAdmissionDay: 'all',
  searchQuery: '',
  sortOrder: 'name-asc',
  showOnlyFavorites: false,
  showOnlyVisited: false,
  showOnlyPlanned: false,
  showOnlyNocheMuseos: false,
  userCoords: null,
  favorites: new Set(),
  visitedMuseums: new Set(),
  plannedMuseums: new Set(),
  nocheMuseosOnly: [],
  markersMap: new Map(), // id -> L.Marker
  map: null,
  markersLayer: null,
  userMarker: null,
  baseTileLayers: {},
  currentBaseLayer: null,
  currentBaseLayerKey: 'osm',
  lightBaseLayerKey: 'osm',
  theme: 'light'
};

const AccountSync = {
  client: null,
  user: null,
  configured: false,
  ready: false,
  syncing: false,
  pendingMarkers: new Set()
};

const ACCOUNT_MARKERS_TABLE = 'user_museum_markers';
const ACCOUNT_CACHE_USER_KEY = 'museos_cdmx_sync_user';

// Mapeo de categorías con colores e iconos
const CATEGORY_META = {
  'Arte': { color: '#8b5cf6', icon: '🎨', cssClass: 'dot-arte' },
  'Historia': { color: '#d97706', icon: '📜', cssClass: 'dot-historia' },
  'Arqueología': { color: '#b45309', icon: '⛏️', cssClass: 'dot-arqueologia' },
  'Antropología': { color: '#dc2626', icon: '🏺', cssClass: 'dot-antropologia' },
  'Ciencia': { color: '#0284c7', icon: '🔬', cssClass: 'dot-ciencia' },
  'Casas Museo': { color: '#059669', icon: '🏡', cssClass: 'dot-casas' },
  'Cultura Popular': { color: '#ea580c', icon: '🎭', cssClass: 'dot-cultura' },
  'Infantil': { color: '#db2777', icon: '🎈', cssClass: 'dot-infantil' },
  'Especializado': { color: '#0f766e', icon: '🏛️', cssClass: 'dot-especializado' },
  'Sin clasificar': { color: '#64748b', icon: '📚', cssClass: 'dot-sin-clasificar' }
};

// IDs verificados de las fichas del catálogo SIC Cultura
const SIC_IMAGE_IDS = {
  antropologia: 807,
  'bellas-artes': 1080,
  'soumaya-carso': 1478,
  'frida-kahlo': 287,
  'castillo-chapultepec': 673,
  'templo-mayor': 476,
  munal: 439,
  tamayo: 335,
  mam: 658,
  papalote: 375,
  universum: 449,
  muac: 1224,
  'memoria-tolerancia': 1313,
  'franz-mayer': 462,
  anahuacalli: 442,
  jumex: 1484,
  'ciudad-mexico': 797,
  'estudio-diego-frida': 805,
  modo: 1469,
  'dolores-olmedo': 916,
  mide: 1096,
  'culturas-populares': 976,
  'san-carlos': 804,
  'ex-teresa': 771,
  geologia: 692,
  'san-ildefonso': 768,
  estanquillo: 1105,
  'polyforum-siqueiros': 532,
  'casa-de-la-bola': 548,
  'chocolate-mucho': 1532,
  'casa-trotsky': 966,
  'palacio-correos': 689,
  'laboratorio-arte-alameda': 427,
  revolucion: 705,
  'el-carmen': 963,
  intervenciones: 978,
  kaluz: 2066,
  map: 1092,
  'tovar-teresa': 2069,
  'historia-natural': 238,
  'planetario-erro': 537,
  yancuik: 2385,
  'culturas-mundo': 802,
  'archivo-fotografia': 1109,
  'panteon-san-fernando': 1176,
  'cera-ripley': 43,
  'museo-perfume': 2190,
  'museo-universitario-chopo': 382,
  'museo-mujer': 1435,
  munae: 812,
  'museo-acuarela': 789,
  'museo-arte-carrillo-gil': 794,
  'casa-carranza': 965,
  'palacio-escuela-medicina': 691,
  'memorial-68-m68': 1600,
  'museo-sitio-cuicuilco': 721,
  'museo-sitio-mixcoac': 2156,
  mujam: 1106,
  'museo-ferrocarrileros': 1285,
  'museo-basilica-guadalupe': 728,
  'casa-memoria-indomita': 1538,
  'museo-numismatico': 1337,
  'museo-metro': 1905,
  'museo-historia-tlalpan': 546,
  'museo-caracol': 970,
  'centro-comunitario-culhuacan': 971,
  'caja-agua-tlatelolco': 1491,
  'museo-arte-shcp': 968,
  'casa-estudio-luis-barragan': 478,
  'museo-tezozomoc': 1233,
  'pabellon-biodiversidad': 2205,
  'casa-del-risco': 855,
  'soumaya-loreto': 730,
  axolotitlan: 2237,
  'museo-pulque': 2110,
  'museo-constituciones': 1516,
  'museo-mural-diego-rivera': 661,
  'museo-cancilleria': 1519,
  'museo-telegrafo': 907,
  'museo-banco-mexico': 2202,
  'centro-imagen': 2075,
  'museo-experimental-el-eco': 344,
  'sala-arte-publico-siqueiros': 786,
  'museo-geofisica': 1614,
  anfibium: 2311,
  cencalli: 2194,
  'museo-radio-metro': 2475,
  'museo-fuego-nuevo': 910,
  'museo-arqueologico-xochimilco': 917,
  'museo-regional-cuitlahuac': 738,
  'museo-azcapotzalco': 727,
  'museo-casa-kahlo': 2541,
  munavi: 2322,
  'museo-barco-utopia': 2256,
  'planetario-katya-echazarreta': 2386,
  'museo-culturas-pasion-iztapalapa': 1535,
  'museo-transportes-electricos': 1877,
  'museo-regional-altepepialcalli': 535,
  'museo-cuartel-zapatista': 915,
  'museo-geologia-paleontologia-ipn': 908,
  'casa-fuerte-indio-fernandez': 2384
};

const FALLBACK_IMAGE_URL = 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80';

// Coordenadas centrales por defecto de la Ciudad de México
const CDMX_CENTER = [19.4326, -99.1332];
const DEFAULT_ZOOM = 12;

// Elementos DOM frecuentemente usados
const DOM = {};

document.addEventListener('DOMContentLoaded', () => {
  initDOMReferences();
  initTheme();
  loadFavoritesFromStorage();
  loadVisitedMuseumsFromStorage();
  loadPlannedMuseumsFromStorage();
  initMap();
  initData();
  initEventHandlers();
  applyFiltersAndRender();
  void initAccountSync();
});

/**
 * Guarda las referencias a los elementos del DOM
 */
function initDOMReferences() {
  DOM.sidebar = document.getElementById('sidebar');
  DOM.museumsList = document.getElementById('museumsList');
  DOM.searchInput = document.getElementById('searchInput');
  DOM.clearSearchBtn = document.getElementById('clearSearchBtn');
  DOM.categoryChips = document.getElementById('categoryChips');
  DOM.btnCategoryToggle = document.getElementById('btnCategoryToggle');
  DOM.btnOnlyFree = document.getElementById('btnOnlyFree');
  DOM.filterOptions = document.getElementById('filterOptions');
  DOM.freeEntryDayOptions = document.getElementById('freeEntryDayOptions');
  DOM.visibleCount = document.getElementById('visibleCount');
  DOM.resultsFeedback = document.getElementById('resultsFeedback');
  DOM.btnNearMe = document.getElementById('btnNearMe');
  DOM.collectionMenu = document.getElementById('collectionMenu');
  DOM.btnCollectionMenu = document.getElementById('btnCollectionMenu');
  DOM.collectionMenuPanel = document.getElementById('collectionMenuPanel');
  DOM.moreMenu = document.getElementById('moreMenu');
  DOM.btnMoreMenu = document.getElementById('btnMoreMenu');
  DOM.moreMenuPanel = document.getElementById('moreMenuPanel');
  DOM.btnFavorites = document.getElementById('btnFavorites');
  DOM.btnVisited = document.getElementById('btnVisited');
  DOM.btnPlanned = document.getElementById('btnPlanned');
  DOM.btnNocheMuseos = document.getElementById('btnNocheMuseos');
  DOM.themeToggle = document.getElementById('themeToggle');
  DOM.themeToggleIcon = document.getElementById('themeToggleIcon');
  DOM.favCount = document.getElementById('favCount');
  DOM.favCountWrapper = document.getElementById('favCountWrapper');
  DOM.favLabel = document.getElementById('favLabel');
  DOM.visitedCount = document.getElementById('visitedCount');
  DOM.visitedCountWrapper = document.getElementById('visitedCountWrapper');
  DOM.plannedCount = document.getElementById('plannedCount');
  DOM.plannedCountWrapper = document.getElementById('plannedCountWrapper');
  DOM.btnAccount = document.getElementById('btnAccount');
  DOM.accountButtonLabel = document.getElementById('accountButtonLabel');
  DOM.accountDialog = document.getElementById('accountDialog');
  DOM.btnCloseAccount = document.getElementById('btnCloseAccount');
  DOM.accountStatus = document.getElementById('accountStatus');
  DOM.accountSignInForm = document.getElementById('accountSignInForm');
  DOM.accountEmail = document.getElementById('accountEmail');
  DOM.btnAccountSignIn = document.getElementById('btnAccountSignIn');
  DOM.btnAccountSignOut = document.getElementById('btnAccountSignOut');
  DOM.btnRetryAccountSync = document.getElementById('btnRetryAccountSync');
  DOM.btnResetMap = document.getElementById('btnResetMap');
  DOM.btnLayerToggle = document.getElementById('btnLayerToggle');
  DOM.layerDropdown = document.getElementById('layerDropdown');
  DOM.mobileViewToggle = document.getElementById('mobileViewToggle');
  DOM.toast = document.getElementById('toastNotification');

  // Modal DOM
  DOM.modal = document.getElementById('museumModal');
  DOM.closeModalBtn = document.getElementById('closeModalBtn');
  DOM.modalImage = document.getElementById('modalImage');
  DOM.modalImageCredit = document.getElementById('modalImageCredit');
  DOM.modalSicDetails = document.getElementById('modalSicDetails');
  DOM.modalSicFields = document.getElementById('modalSicFields');
  DOM.modalCategory = document.getElementById('modalCategory');
  DOM.modalFreeBadge = document.getElementById('modalFreeBadge');
  DOM.modalTitle = document.getElementById('modalTitle');
  DOM.modalAlcaldia = document.getElementById('modalAlcaldia');
  DOM.modalDescription = document.getElementById('modalDescription');
  DOM.modalHighlight = document.getElementById('modalHighlight');
  DOM.modalSchedule = document.getElementById('modalSchedule');
  DOM.modalCost = document.getElementById('modalCost');
  DOM.modalTransport = document.getElementById('modalTransport');
  DOM.modalAddress = document.getElementById('modalAddress');
  DOM.btnToggleVisited = document.getElementById('btnToggleVisited');
  DOM.modalVisitIcon = document.getElementById('modalVisitIcon');
  DOM.modalVisitLabel = document.getElementById('modalVisitLabel');
  DOM.modalNocheDetails = document.getElementById('modalNocheDetails');
  DOM.modalNocheImage = document.getElementById('modalNocheImage');
  DOM.modalNocheTitle = document.getElementById('modalNocheTitle');
  DOM.modalNocheFreeBadge = document.getElementById('modalNocheFreeBadge');
  DOM.modalNocheFields = document.getElementById('modalNocheFields');
  DOM.btnFocusMapFromModal = document.getElementById('btnFocusMapFromModal');
  DOM.btnGoogleMapsNav = document.getElementById('btnGoogleMapsNav');
  DOM.btnOfficialWeb = document.getElementById('btnOfficialWeb');
}

/**
 * Carga favoritos desde LocalStorage
 */
function loadFavoritesFromStorage() {
  try {
    const saved = localStorage.getItem('museos_cdmx_favs');
    if (saved) {
      const arr = JSON.parse(saved);
      AppState.favorites = new Set(arr);
    }
  } catch (e) {
    console.warn('No se pudo acceder a localStorage:', e);
  }
  updateFavoritesBadge();
}

/**
 * Guarda favoritos en LocalStorage
 */
function saveFavoritesToStorage() {
  try {
    localStorage.setItem('museos_cdmx_favs', JSON.stringify([...AppState.favorites]));
  } catch (e) {
    console.warn('Error al guardar favoritos:', e);
  }
  updateFavoritesBadge();
}

function loadVisitedMuseumsFromStorage() {
  try {
    const saved = localStorage.getItem('museos_cdmx_visited');
    if (saved) {
      const ids = JSON.parse(saved);
      if (Array.isArray(ids)) {
        AppState.visitedMuseums = new Set(ids);
      }
    }
  } catch (error) {
    console.warn('No se pudieron cargar los museos visitados:', error);
  }
  updateVisitedBadge();
}

function saveVisitedMuseumsToStorage() {
  try {
    localStorage.setItem('museos_cdmx_visited', JSON.stringify([...AppState.visitedMuseums]));
  } catch (error) {
    console.warn('No se pudieron guardar los museos visitados:', error);
  }
  updateVisitedBadge();
}

function loadPlannedMuseumsFromStorage() {
  try {
    const saved = localStorage.getItem('museos_cdmx_planned');
    if (saved) {
      const ids = JSON.parse(saved);
      if (Array.isArray(ids)) {
        AppState.plannedMuseums = new Set(ids);
      }
    }
  } catch (error) {
    console.warn('No se pudieron cargar los museos por visitar:', error);
  }
  updatePlannedBadge();
}

function savePlannedMuseumsToStorage() {
  try {
    localStorage.setItem('museos_cdmx_planned', JSON.stringify([...AppState.plannedMuseums]));
  } catch (error) {
    console.warn('No se pudieron guardar los museos por visitar:', error);
  }
  updatePlannedBadge();
}

function updateFavoritesFilterButton() {
  DOM.btnFavorites.classList.toggle('active', AppState.showOnlyFavorites);
  DOM.btnFavorites.setAttribute('aria-pressed', String(AppState.showOnlyFavorites));
}

function updateVisitedFilterButton() {
  DOM.btnVisited.classList.toggle('active', AppState.showOnlyVisited);
  DOM.btnVisited.setAttribute('aria-pressed', String(AppState.showOnlyVisited));
}

function updatePlannedFilterButton() {
  DOM.btnPlanned.classList.toggle('active', AppState.showOnlyPlanned);
  DOM.btnPlanned.setAttribute('aria-pressed', String(AppState.showOnlyPlanned));
}

function updateCollectionMenuButton() {
  const isAnyActive = AppState.showOnlyFavorites || AppState.showOnlyVisited || AppState.showOnlyPlanned;
  DOM.btnCollectionMenu.classList.toggle('active', isAnyActive);
  DOM.btnCollectionMenu.setAttribute('aria-pressed', String(isAnyActive));
}

function updateAllCollectionFilterButtons() {
  updateFavoritesFilterButton();
  updateVisitedFilterButton();
  updatePlannedFilterButton();
  updateCollectionMenuButton();
}

function updateVisitedBadge() {
  const count = AppState.visitedMuseums.size;
  DOM.visitedCount.textContent = count;
  DOM.visitedCountWrapper.hidden = count === 0;
  DOM.btnVisited.setAttribute(
    'aria-label',
    count > 0 ? `Filtrar museos visitados (${count})` : 'Filtrar museos visitados'
  );
}

function updatePlannedBadge() {
  const count = AppState.plannedMuseums.size;
  DOM.plannedCount.textContent = count;
  DOM.plannedCountWrapper.hidden = count === 0;
  DOM.btnPlanned.setAttribute(
    'aria-label',
    count > 0 ? `Filtrar museos por visitar (${count})` : 'Filtrar museos por visitar'
  );
}

function updateNocheMuseosButton() {
  DOM.btnNocheMuseos.classList.toggle('active', AppState.showOnlyNocheMuseos);
  DOM.btnNocheMuseos.setAttribute('aria-pressed', String(AppState.showOnlyNocheMuseos));
}

function updateCategoryFilterButton() {
  const isExpanded = AppState.showCategoryOptions;
  DOM.btnCategoryToggle.classList.toggle(
    'active',
    isExpanded || AppState.activeCategory !== 'all'
  );
  DOM.btnCategoryToggle.setAttribute('aria-expanded', String(isExpanded));
  DOM.categoryChips.hidden = !isExpanded;
  updateFilterOptionsVisibility();
  DOM.categoryChips.querySelectorAll('[data-category]').forEach(button => {
    const isActive = button.dataset.category === AppState.activeCategory;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateFreeEntryButton() {
  DOM.btnOnlyFree.classList.toggle('active', AppState.onlyFree);
  DOM.btnOnlyFree.setAttribute('aria-pressed', String(AppState.onlyFree));
  DOM.btnOnlyFree.setAttribute('aria-expanded', String(AppState.showFreeEntryOptions));
  DOM.freeEntryDayOptions.hidden = !AppState.showFreeEntryOptions;
  updateFilterOptionsVisibility();
  DOM.freeEntryDayOptions.querySelectorAll('[data-free-day]').forEach(button => {
    const isActive = button.dataset.freeDay === AppState.freeAdmissionDay;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateFilterOptionsVisibility() {
  DOM.filterOptions.hidden = !AppState.showCategoryOptions && !AppState.showFreeEntryOptions;
}

function findMuseumById(id) {
  return AppState.museos.find(museo => museo.id === id) ||
    AppState.nocheMuseosOnly.find(museo => museo.id === id);
}

function hasValidCoordinates(museo) {
  return Array.isArray(museo.coordenadas) &&
    museo.coordenadas.length === 2 &&
    museo.coordenadas.every(coordinate => typeof coordinate === 'number' && Number.isFinite(coordinate));
}

function updateFavoritesBadge() {
  const count = AppState.favorites.size;
  DOM.favCount.textContent = count;
  DOM.favCountWrapper.hidden = count === 0;
}

function initAccountSync() {
  DOM.btnAccount.addEventListener('click', () => DOM.accountDialog.showModal());
  DOM.btnCloseAccount.addEventListener('click', () => DOM.accountDialog.close());
  DOM.accountDialog.addEventListener('click', event => {
    if (event.target === DOM.accountDialog) DOM.accountDialog.close();
  });
  DOM.accountSignInForm.addEventListener('submit', handleAccountSignIn);
  DOM.btnAccountSignOut.addEventListener('click', handleAccountSignOut);
  DOM.btnRetryAccountSync.addEventListener('click', () => {
    if (AccountSync.user) {
      void syncAccountMarkers(getCachedAccountUserId() !== AccountSync.user.id);
    }
  });

  const config = window.MUSEOS_SUPABASE_CONFIG;
  if (!config || !config.url || !config.anonKey) {
    updateAccountControls();
    setAccountStatus('La sincronización requiere configurar Supabase. Consulta SUPABASE_SETUP.md.', 'error');
    return;
  }

  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    updateAccountControls();
    setAccountStatus('No se pudo cargar el cliente de sincronización. Revisa tu conexión.', 'error');
    return;
  }

  try {
    AccountSync.client = window.supabase.createClient(config.url, config.anonKey);
  } catch (error) {
    console.error('No se pudo inicializar Supabase:', error);
    updateAccountControls();
    setAccountStatus('La configuración de Supabase no es válida.', 'error');
    return;
  }

  AccountSync.configured = true;
  updateAccountControls();
  setAccountStatus('Inicia sesión con tu correo para sincronizar tus marcas.', 'info');

  AccountSync.client.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => {
      void handleAccountSession(session);
    }, 0);
  });

  void AccountSync.client.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error('No se pudo recuperar la sesión de Supabase:', error);
      setAccountStatus('No se pudo revisar tu sesión. Vuelve a abrir la cuenta para intentarlo de nuevo.', 'error');
      return;
    }

    void handleAccountSession(data.session);
  }).catch(error => {
    console.error('No se pudo recuperar la sesión de Supabase:', error);
    setAccountStatus('No se pudo revisar tu sesión. Vuelve a abrir la cuenta para intentarlo de nuevo.', 'error');
  });

  window.addEventListener('focus', refreshAccountMarkersOnFocus);
}

function updateAccountControls() {
  const signedIn = Boolean(AccountSync.user);
  DOM.accountButtonLabel.textContent = 'Cuenta';
  DOM.btnAccount.classList.toggle('active', signedIn);
  DOM.btnAccount.setAttribute('aria-label', signedIn ? 'Cuenta conectada' : 'Cuenta y sincronización');
  DOM.btnAccount.title = signedIn
    ? `Cuenta conectada: ${AccountSync.user.email || 'correo verificado'}`
    : 'Cuenta y sincronización';
  DOM.accountSignInForm.hidden = signedIn || !AccountSync.configured;
  DOM.btnAccountSignOut.hidden = !signedIn;
  DOM.btnRetryAccountSync.hidden = !signedIn || AccountSync.ready || AccountSync.syncing;
}

function setAccountStatus(message, state) {
  DOM.accountStatus.textContent = message;
  DOM.accountStatus.dataset.state = state;
}

async function handleAccountSignIn(event) {
  event.preventDefault();
  if (!AccountSync.client) return;

  if (window.location.protocol !== 'https:' &&
    !(window.location.protocol === 'http:' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))) {
    setAccountStatus('Abre la aplicación desde localhost o un sitio HTTPS para iniciar sesión.', 'error');
    return;
  }

  const email = DOM.accountEmail.value.trim();
  const redirectUrl = new URL(window.location.href);
  redirectUrl.search = '';
  redirectUrl.hash = '';
  DOM.btnAccountSignIn.disabled = true;

  try {
    const { error } = await AccountSync.client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectUrl.toString() }
    });
    if (error) throw error;

    setAccountStatus('Te enviamos un enlace de acceso. Revisa tu correo para continuar, si el correo demora en llegar te sugerimos revisar la carpeta de SPAM.', 'success');
  } catch (error) {
    console.error('No se pudo enviar el enlace de acceso:', error);
    setAccountStatus('No se pudo enviar el enlace. Revisa el correo e inténtalo de nuevo.', 'error');
    showToast('No se pudo enviar el enlace de acceso.');
  } finally {
    DOM.btnAccountSignIn.disabled = false;
  }
}

async function handleAccountSignOut() {
  if (!AccountSync.client) return;

  DOM.btnAccountSignOut.disabled = true;
  try {
    const { error } = await AccountSync.client.auth.signOut();
    if (error) throw error;
    await handleAccountSession(null);
    DOM.accountDialog.close();
  } catch (error) {
    console.error('No se pudo cerrar la sesión de Supabase:', error);
    setAccountStatus('No se pudo cerrar la sesión. Inténtalo de nuevo.', 'error');
    showToast('No se pudo cerrar la sesión.');
  } finally {
    DOM.btnAccountSignOut.disabled = false;
  }
}

async function handleAccountSession(session) {
  const nextUser = session && session.user;
  const currentUserId = AccountSync.user && AccountSync.user.id;

  if (!nextUser) {
    if (currentUserId) clearAccountCache();
    AccountSync.user = null;
    AccountSync.ready = false;
    updateAccountControls();
    if (AccountSync.configured) {
      setAccountStatus('Inicia sesión con tu correo para sincronizar tus marcas.', 'info');
    }
    return;
  }

  if (currentUserId && currentUserId !== nextUser.id) clearAccountCache();
  if (currentUserId === nextUser.id && (AccountSync.ready || AccountSync.syncing)) return;

  AccountSync.user = nextUser;
  AccountSync.ready = false;
  updateAccountControls();
  setAccountStatus('Sincronizando tus museos guardados...', 'info');
  await syncAccountMarkers(getCachedAccountUserId() !== nextUser.id);
}

function clearAccountCache() {
  AppState.favorites.clear();
  AppState.visitedMuseums.clear();
  AppState.plannedMuseums.clear();
  AppState.showOnlyFavorites = false;
  AppState.showOnlyVisited = false;
  AppState.showOnlyPlanned = false;
  updateAllCollectionFilterButtons();
  try {
    localStorage.removeItem(ACCOUNT_CACHE_USER_KEY);
  } catch (error) {
    console.warn('No se pudo limpiar el identificador de cuenta local:', error);
  }
  saveFavoritesToStorage();
  saveVisitedMuseumsToStorage();
  savePlannedMuseumsToStorage();
  if (AppState.selectedId) updateVisitedButton(AppState.selectedId);
  applyFiltersAndRender();
}

function getCachedAccountUserId() {
  try {
    return localStorage.getItem(ACCOUNT_CACHE_USER_KEY);
  } catch (error) {
    console.warn('No se pudo leer el identificador de cuenta local:', error);
    return null;
  }
}

function localAccountMarkerRows(userId) {
  return [
    ...Array.from(AppState.favorites, museumId => ({
      user_id: userId,
      museum_id: String(museumId),
      marker_type: 'favorite'
    })),
    ...Array.from(AppState.visitedMuseums, museumId => ({
      user_id: userId,
      museum_id: String(museumId),
      marker_type: 'visited'
    })),
    ...Array.from(AppState.plannedMuseums, museumId => ({
      user_id: userId,
      museum_id: String(museumId),
      marker_type: 'planned'
    }))
  ];
}

async function syncAccountMarkers(mergeLocal) {
  if (!AccountSync.client || !AccountSync.user || AccountSync.syncing) return false;

  const user = AccountSync.user;
  const userId = user.id;
  AccountSync.syncing = true;
  updateAccountControls();
  setAccountStatus('Sincronizando tus museos guardados...', 'info');

  try {
    const { data, error } = await AccountSync.client
      .from(ACCOUNT_MARKERS_TABLE)
      .select('museum_id, marker_type')
      .eq('user_id', userId);
    if (error) throw error;

    let rows = Array.isArray(data) ? data : [];
    if (mergeLocal) {
      const localRows = localAccountMarkerRows(userId);
      const remoteKeys = new Set(rows.map(row => `${row.marker_type}:${row.museum_id}`));
      const localOnlyRows = localRows.filter(row => !remoteKeys.has(`${row.marker_type}:${row.museum_id}`));

      if (localOnlyRows.length) {
        const { error: saveError } = await AccountSync.client
          .from(ACCOUNT_MARKERS_TABLE)
          .upsert(localOnlyRows, { onConflict: 'user_id,museum_id,marker_type' });
        if (saveError) throw saveError;

        const { data: mergedData, error: mergeError } = await AccountSync.client
          .from(ACCOUNT_MARKERS_TABLE)
          .select('museum_id, marker_type')
          .eq('user_id', userId);
        if (mergeError) throw mergeError;
        rows = Array.isArray(mergedData) ? mergedData : [];
      }
    }

    if (!AccountSync.user || AccountSync.user.id !== userId) return false;

    AppState.favorites = new Set(
      rows.filter(row => row.marker_type === 'favorite').map(row => row.museum_id)
    );
    AppState.visitedMuseums = new Set(
      rows.filter(row => row.marker_type === 'visited').map(row => row.museum_id)
    );
    AppState.plannedMuseums = new Set(
      rows.filter(row => row.marker_type === 'planned').map(row => row.museum_id)
    );
    AccountSync.ready = true;
    try {
      localStorage.setItem(ACCOUNT_CACHE_USER_KEY, userId);
    } catch (error) {
      console.warn('No se pudo guardar el identificador de cuenta local:', error);
      setAccountStatus('La cuenta sincronizó tus marcas, pero este navegador no pudo guardar la preferencia local.', 'error');
    }
    saveFavoritesToStorage();
    saveVisitedMuseumsToStorage();
    savePlannedMuseumsToStorage();
    applyFiltersAndRender();
    if (DOM.accountStatus.dataset.state !== 'error') {
      setAccountStatus(`Sincronizado con la cuenta ${user.email || ''}.`, 'success');
    }
    return true;
  } catch (error) {
    console.error('No se pudieron sincronizar las marcas:', error);
    AccountSync.ready = false;
    setAccountStatus('No se pudieron sincronizar las marcas. Revisa tu conexión e inténtalo de nuevo.', 'error');
    showToast('No se pudieron sincronizar tus museos guardados.');
    return false;
  } finally {
    AccountSync.syncing = false;
    updateAccountControls();
    if (AccountSync.user && AccountSync.user.id !== userId && !AccountSync.ready) {
      void syncAccountMarkers(getCachedAccountUserId() !== AccountSync.user.id);
    }
  }
}

async function persistAccountMarker(museumId, markerType, isActive) {
  if (!AccountSync.user) return true;
  if (!AccountSync.ready) {
    showToast('La cuenta aún no está sincronizada. Inténtalo de nuevo en un momento.');
    return false;
  }

  const userId = AccountSync.user.id;
  const pendingKey = `${userId}:${markerType}:${museumId}`;
  if (AccountSync.pendingMarkers.has(pendingKey)) return false;
  AccountSync.pendingMarkers.add(pendingKey);

  try {
    let result;
    if (isActive) {
      result = await AccountSync.client
        .from(ACCOUNT_MARKERS_TABLE)
        .upsert({
          user_id: userId,
          museum_id: String(museumId),
          marker_type: markerType
        }, { onConflict: 'user_id,museum_id,marker_type' });
    } else {
      result = await AccountSync.client
        .from(ACCOUNT_MARKERS_TABLE)
        .delete()
        .eq('user_id', userId)
        .eq('museum_id', String(museumId))
        .eq('marker_type', markerType);
    }

    if (result.error) throw result.error;
    if (!AccountSync.user || AccountSync.user.id !== userId) return false;
    setAccountStatus('Cambios sincronizados con tu cuenta.', 'success');
    return true;
  } catch (error) {
    console.error('No se pudo guardar una marca en Supabase:', error);
    const schemaNeedsUpdate = markerType === 'planned' && error && error.code === '23514';
    const message = schemaNeedsUpdate
      ? 'Supabase aún no permite «Por visitar». Ejecuta de nuevo supabase/schema.sql en el SQL Editor y vuelve a intentarlo.'
      : 'No se pudo sincronizar el cambio. Inténtalo de nuevo.';
    setAccountStatus(message, 'error');
    showToast(schemaNeedsUpdate
      ? 'Actualiza Supabase ejecutando supabase/schema.sql.'
      : 'No se pudo sincronizar el cambio; no se guardó.');
    return false;
  } finally {
    AccountSync.pendingMarkers.delete(pendingKey);
  }
}

function refreshAccountMarkersOnFocus() {
  if (AccountSync.user && AccountSync.ready && !AccountSync.syncing) {
    void syncAccountMarkers(false);
  }
}

function initTheme() {
  let theme = 'light';
  try {
    const savedTheme = localStorage.getItem('museos_cdmx_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') theme = savedTheme;
  } catch (error) {
    console.warn('No se pudo cargar la preferencia de tema:', error);
  }
  setTheme(theme, false);
}

function setTheme(theme, persist = true) {
  AppState.theme = theme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const isDark = theme === 'dark';
  const label = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
  DOM.themeToggleIcon.textContent = isDark ? '☀️' : '🌙';
  DOM.themeToggle.setAttribute('aria-label', label);
  DOM.themeToggle.title = label;
  DOM.themeToggle.setAttribute('aria-pressed', String(isDark));

  if (AppState.map) {
    setBaseLayer(isDark ? 'dark' : AppState.lightBaseLayerKey, false);
  }

  if (persist) {
    try {
      localStorage.setItem('museos_cdmx_theme', theme);
    } catch (error) {
      console.warn('No se pudo guardar la preferencia de tema:', error);
    }
  }
}

/**
 * Inicializa el mapa Leaflet con capas personalizadas
 */
function initMap() {
  AppState.map = L.map('map', {
    center: CDMX_CENTER,
    zoom: DEFAULT_ZOOM,
    zoomControl: false,
    preferCanvas: true
  });

  // Reubicar zoom control a la esquina superior izquierda
  L.control.zoom({ position: 'topleft' }).addTo(AppState.map);

  const tileLayerOptions = {
    keepBuffer: 8,
    updateWhenZooming: false,
    updateWhenIdle: true,
    updateInterval: 150,
    crossOrigin: true
  };

  // Definir diferentes estilos de mapas
  AppState.baseTileLayers = {
    osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      ...tileLayerOptions,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }),
    topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      ...tileLayerOptions,
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
      maxZoom: 17
    }),
    dark: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      ...tileLayerOptions,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    })
  };

  // Capa inicial
  AppState.currentBaseLayerKey = AppState.theme === 'dark' ? 'dark' : 'osm';
  AppState.currentBaseLayer = AppState.baseTileLayers[AppState.currentBaseLayerKey];
  AppState.currentBaseLayer.addTo(AppState.map);
  document.body.classList.toggle('dark-map', AppState.currentBaseLayerKey === 'dark');
  updateLayerOptions();

  // Capa para marcadores
  AppState.markersLayer = L.layerGroup().addTo(AppState.map);
}

function setBaseLayer(layerKey, notify = true) {
  const layer = AppState.baseTileLayers[layerKey];
  if (!layer) return;

  if (AppState.currentBaseLayer !== layer) {
    if (AppState.currentBaseLayer) AppState.map.removeLayer(AppState.currentBaseLayer);
    AppState.currentBaseLayer = layer;
    AppState.currentBaseLayer.addTo(AppState.map);
  }
  AppState.currentBaseLayerKey = layerKey;
  document.body.classList.toggle('dark-map', layerKey === 'dark');
  if (layerKey !== 'dark') AppState.lightBaseLayerKey = layerKey;
  updateLayerOptions();

  if (notify) showToast(`Capa de mapa cambiada: ${layerKey === 'dark' ? 'Oscuro' : layerKey === 'topo' ? 'Topográfico' : 'OpenStreetMap'}`);
}

function updateLayerOptions() {
  document.querySelectorAll('.layer-option').forEach(button => {
    button.classList.toggle('active', button.dataset.layer === AppState.currentBaseLayerKey);
  });
}

/**
 * Carga los datos de museos y rellena el selector de alcaldías
 */
function initData() {
  if (typeof SIC_MUSEOS_DATA !== 'undefined' && Array.isArray(SIC_MUSEOS_DATA) &&
    typeof MUSEOS_DATA !== 'undefined' && Array.isArray(MUSEOS_DATA)) {
    const curatedBySicId = new Map();
    Object.entries(SIC_IMAGE_IDS).forEach(([museumId, sicId]) => {
      const curated = MUSEOS_DATA.find(m => m.id === museumId);
      if (curated) curatedBySicId.set(String(sicId), curated);
    });

    const sicMuseos = SIC_MUSEOS_DATA.map(source => {
      const sicId = Number(source.museo_id);
      const curated = curatedBySicId.get(String(sicId));
      const editorial = typeof SIC_MUSEUM_EDITORIAL !== 'undefined'
        ? SIC_MUSEUM_EDITORIAL[sicId]
        : null;
      const theme = String(source.museo_tematica_n1 || '').trim();
      const mappedCategory = theme ? getSicCategory(theme) : '';
      const category = (curated && curated.categoria)
        || SIC_CATEGORY_OVERRIDES[sicId]
        || (mappedCategory && mappedCategory !== 'Sin clasificar' ? mappedCategory : 'Sin clasificar');
      const address = [
        source.museo_calle_numero,
        source.museo_colonia,
        source.museo_cp
      ].map(value => String(value || '').trim()).filter(Boolean).join(', ');
      const sicWebsites = [
        source.pagina_web,
        source.pagina_web2,
        source.pagina_web3
      ].filter(isHttpUrl);
      const sicInfo = {
        theme,
        foundationDate: source.museo_fecha_fundacion,
        affiliation: source.museo_adscripcion,
        propertyType: source.museo_tipo_de_propiedad,
        phone: source.museo_telefono1,
        email: source.email,
        websites: sicWebsites,
        facebook: source.facebook,
        twitter: source.twitter,
        instagram: source.instagram,
        permanentRooms: source.museo_salas_exhibicion_c,
        temporaryRooms: source.museo_salas_exhibicion_tmp_c,
        updatedAt: source.fecha_mod
      };

      return {
        ...(curated || {}),
        id: curated ? curated.id : `sic-${sicId}`,
        sicId,
        nombre: String(source.museo_nombre || (curated && curated.nombre) || '').trim(),
        categoria: category,
        alcaldia: String(source.nom_mun || (curated && curated.alcaldia) || '').trim(),
        direccion: address || (curated && curated.direccion) || 'Dirección no disponible.',
        coordenadas: [Number(source.gmaps_latitud), Number(source.gmaps_longitud)],
        horario: (curated && curated.horario) || 'No publicado por SIC; consulta el recinto antes de tu visita.',
        costo: (curated && curated.costo) || 'No publicado por SIC; consulta el recinto antes de tu visita.',
        esGratis: curated ? curated.esGratis : false,
        transporte: (curated && curated.transporte) || 'Consulta las rutas de transporte público disponibles.',
        destacado: (editorial && editorial.destacado) || (curated && curated.destacado) || '',
        descripcion: (editorial && editorial.descripcion) || (curated && curated.descripcion) || '',
        fuenteEditorial: (editorial && editorial.fuente) || '',
        imagen: `https://sic.cultura.gob.mx/imgthumb/museo_${sicId}.png`,
        imagenFallback: curated ? curated.imagen : '',
        sitioWeb: sicWebsites[0] || (curated && curated.sitioWeb) || '',
        fuente: `https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=${sicId}`,
        sicInfo,
        distance: null
      };
    });

    const sicLegacyIds = new Set(Object.keys(SIC_IMAGE_IDS));
    const extraMuseos = MUSEOS_DATA
      .filter(m => !sicLegacyIds.has(m.id))
      .map(m => ({ ...m, sicId: null, sicInfo: null, imagenFallback: '', distance: null }));
    AppState.museos = [...sicMuseos, ...extraMuseos];
  } else if (typeof MUSEOS_DATA !== 'undefined' && Array.isArray(MUSEOS_DATA)) {
    AppState.museos = MUSEOS_DATA.map(m => ({ ...m, imagenFallback: '', distance: null }));
  } else {
    console.error('No se encontraron los datos de museos');
    AppState.museos = [];
  }

  const nocheEvents = typeof NOCHE_MUSEOS_DATA !== 'undefined' && Array.isArray(NOCHE_MUSEOS_DATA)
    ? NOCHE_MUSEOS_DATA
    : [];
  const eventsByMuseumId = new Map();
  const eventsBySicId = new Map();
  nocheEvents.forEach(record => {
    if (record.museumId) eventsByMuseumId.set(record.museumId, record);
    if (record.sicId) eventsBySicId.set(Number(record.sicId), record);
  });

  AppState.museos = AppState.museos.map(museo => {
    const record = eventsByMuseumId.get(museo.id) || eventsBySicId.get(museo.sicId);
    return record ? { ...museo, nocheMuseos: record.event } : museo;
  });
  AppState.nocheMuseosOnly = nocheEvents
    .filter(record => !record.museumId && !record.sicId)
    .map(record => ({
      id: record.id,
      nombre: record.name,
      categoria: record.category,
      alcaldia: record.alcaldia,
      direccion: record.address,
      coordenadas: record.coordinates,
      horario: 'Consulta el programa de Noche de Museos.',
      costo: 'Consulta el programa de Noche de Museos.',
      esGratis: false,
      transporte: 'Consulta las opciones de transporte para esta sede.',
      destacado: record.event.title,
      descripcion: 'Sede participante de la Noche de Museos; no forma parte del catálogo general de museos.',
      imagen: record.venueImage || (record.event && record.event.image) || FALLBACK_IMAGE_URL,
      imagenFallback: (record.event && record.event.image && record.venueImage) ? record.event.image : '',
      sitioWeb: '',
      fuente: '',
      sicId: null,
      sicInfo: null,
      distance: null,
      isNocheMuseosOnly: true,
      nocheMuseos: record.event
    }));

}

function getSicCategory(theme) {
  const categories = {
    'Arte': 'Arte',
    'Historia': 'Historia',
    'Arqueología': 'Arqueología',
    'Antropología': 'Antropología',
    'Ciencia y tecnología': 'Ciencia',
    'Especializado': 'Especializado'
  };
  return categories[theme] || 'Sin clasificar';
}

// SIC records without a useful theme are assigned by their main subject.
const SIC_CATEGORY_OVERRIDES = {
  1105: 'Cultura Popular',
  2234: 'Historia',
  2567: 'Cultura Popular',
  2565: 'Cultura Popular',
  2581: 'Cultura Popular',
  2566: 'Cultura Popular',
  2571: 'Cultura Popular',
  2284: 'Ciencia',
  535: 'Historia',
  2613: 'Cultura Popular',
  2423: 'Historia',
  2452: 'Historia',
  2582: 'Cultura Popular',
  2402: 'Arte',
  2192: 'Cultura Popular',
  2161: 'Especializado',
  2552: 'Arte',
  2512: 'Historia',
  2625: 'Arte',
  2239: 'Historia',
  2596: 'Antropología',
  2029: 'Ciencia',
  2572: 'Especializado',
  2000: 'Arte',
  2510: 'Arte',
  2168: 'Historia',
  2236: 'Arte',
  2490: 'Historia',
  2173: 'Arte',
  2417: 'Especializado',
  2526: 'Cultura Popular',
  2067: 'Historia',
  2360: 'Historia',
  1992: 'Historia',
  2502: 'Especializado',
  2617: 'Especializado',
  2428: 'Arte',
  2216: 'Casas Museo',
  2238: 'Ciencia',
  2507: 'Ciencia',
  2180: 'Ciencia',
  2181: 'Casas Museo',
  2064: 'Historia',
  2518: 'Historia',
  2551: 'Historia'
};

function isHttpUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
}

function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function handleMuseumImageError(image) {
  const fallback = image.dataset.fallback;
  if (fallback) {
    image.dataset.fallback = '';
    image.src = fallback;
    return;
  }

  image.onerror = null;
  image.src = FALLBACK_IMAGE_URL;
}

function closeHeaderMenus() {
  DOM.collectionMenuPanel.classList.remove('is-open');
  DOM.moreMenuPanel.classList.remove('is-open');
  DOM.btnCollectionMenu.setAttribute('aria-expanded', 'false');
  DOM.btnMoreMenu.setAttribute('aria-expanded', 'false');
}

function toggleHeaderMenu(menu, button) {
  const shouldOpen = !menu.classList.contains('is-open');
  closeHeaderMenus();
  if (!shouldOpen) return;

  menu.classList.add('is-open');
  button.setAttribute('aria-expanded', 'true');
}

/**
 * Configura los escuchadores de eventos
 */
function initEventHandlers() {
  DOM.btnCollectionMenu.addEventListener('click', () => {
    toggleHeaderMenu(DOM.collectionMenuPanel, DOM.btnCollectionMenu);
  });
  DOM.btnMoreMenu.addEventListener('click', () => {
    toggleHeaderMenu(DOM.moreMenuPanel, DOM.btnMoreMenu);
  });

  DOM.collectionMenuPanel.addEventListener('click', event => {
    if (event.target.closest('button')) closeHeaderMenus();
  });
  DOM.moreMenuPanel.addEventListener('click', event => {
    if (event.target.closest('button')) closeHeaderMenus();
  });

  // Al pasar a apaisado los accesos de colección se muestran inline,
  // así que cerramos cualquier panel que hubiera quedado abierto.
  const collectionMenuBreakpoint = window.matchMedia('(max-width: 900px) and (orientation: portrait)');
  const handleCollectionMenuBreakpointChange = () => {
    if (!collectionMenuBreakpoint.matches) closeHeaderMenus();
  };
  if (collectionMenuBreakpoint.addEventListener) {
    collectionMenuBreakpoint.addEventListener('change', handleCollectionMenuBreakpointChange);
  } else if (collectionMenuBreakpoint.addListener) {
    collectionMenuBreakpoint.addListener(handleCollectionMenuBreakpointChange);
  }

  // ── Corrección de orientación en iOS / Firefox móvil ────────────────────
  // Al rotar de landscape a portrait, iOS Safari no actualiza 100vh ni el
  // layout del body. Forzamos un re-render completo del mapa y, si el sidebar
  // estaba oculto por la vista de mapa en portrait, lo restauramos al estado
  // correcto para que el header sea siempre visible.
  let _lastOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

  const handleOrientationChange = () => {
    // Dar tiempo al browser para que actualice innerWidth/innerHeight
    setTimeout(() => {
      const currentOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      const isMobileWidth = window.innerWidth <= 900;

      if (AppState.map) {
        AppState.map.invalidateSize({ animate: false });
      }

      // Si rotamos DE landscape A portrait en ancho móvil:
      // el sidebar debe ser visible para que el header sea accesible.
      if (_lastOrientation === 'landscape' && currentOrientation === 'portrait' && isMobileWidth) {
        // Restaurar vista lista (sidebar visible) para que el header aparezca.
        document.body.classList.remove('view-map');
        document.body.classList.add('view-sidebar');
        document.querySelectorAll('.toggle-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.view === 'list');
        });
        // El mapa necesita otro invalidateSize después del re-layout del sidebar.
        setTimeout(() => {
          if (AppState.map) AppState.map.invalidateSize({ animate: false });
        }, 400);
      }

      _lastOrientation = currentOrientation;
    }, 150);
  };

  // screen.orientation es más confiable que el evento 'resize' solo
  if (screen.orientation) {
    screen.orientation.addEventListener('change', handleOrientationChange);
  }
  // Fallback: 'resize' cubre Firefox, iOS Safari y Android WebView
  window.addEventListener('resize', handleOrientationChange, { passive: true });

  // Búsqueda de texto instantánea
  DOM.searchInput.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.trim().toLowerCase();
    DOM.clearSearchBtn.style.display = AppState.searchQuery ? 'block' : 'none';
    applyFiltersAndRender();
  });

  DOM.clearSearchBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    AppState.searchQuery = '';
    DOM.clearSearchBtn.style.display = 'none';
    DOM.searchInput.focus();
    applyFiltersAndRender();
  });

  // Filtro por categoría (chips)
  DOM.categoryChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    AppState.activeCategory = chip.dataset.category;
    updateCategoryFilterButton();
    applyFiltersAndRender();
  });

  DOM.btnCategoryToggle.addEventListener('click', () => {
    AppState.showCategoryOptions = !AppState.showCategoryOptions;
    if (AppState.showCategoryOptions) {
      AppState.showFreeEntryOptions = false;
    }
    updateCategoryFilterButton();
    updateFreeEntryButton();
  });

  // Filtro de entrada libre
  DOM.btnOnlyFree.addEventListener('click', () => {
    AppState.showFreeEntryOptions = !AppState.showFreeEntryOptions;
    if (AppState.showFreeEntryOptions) {
      AppState.showCategoryOptions = false;
      AppState.onlyFree = true;
    } else {
      AppState.onlyFree = false;
      AppState.freeAdmissionDay = 'all';
    }
    updateCategoryFilterButton();
    updateFreeEntryButton();
    applyFiltersAndRender();
  });

  DOM.freeEntryDayOptions.addEventListener('click', event => {
    const button = event.target.closest('[data-free-day]');
    if (!button) return;

    AppState.freeAdmissionDay = button.dataset.freeDay;
    updateFreeEntryButton();
    applyFiltersAndRender();
  });

  // Botón "Cerca de mí" (Geolocalización)
  DOM.btnNearMe.addEventListener('click', handleUserGeolocation);

  // Botón de Favoritos
  DOM.btnFavorites.addEventListener('click', () => {
    AppState.showOnlyFavorites = !AppState.showOnlyFavorites;
    if (AppState.showOnlyFavorites) {
      AppState.showOnlyVisited = false;
      AppState.showOnlyPlanned = false;
      showToast('Mostrando solo tus museos favoritos ❤️');
    } else {
      showToast('Mostrando todos los museos');
    }
    updateAllCollectionFilterButtons();
    applyFiltersAndRender();
  });

  DOM.btnVisited.addEventListener('click', () => {
    AppState.showOnlyVisited = !AppState.showOnlyVisited;
    if (AppState.showOnlyVisited) {
      AppState.showOnlyFavorites = false;
      AppState.showOnlyPlanned = false;
      showToast('Mostrando solo los museos visitados');
    } else {
      showToast('Mostrando todos los museos');
    }
    updateAllCollectionFilterButtons();
    applyFiltersAndRender();
  });

  DOM.btnPlanned.addEventListener('click', () => {
    AppState.showOnlyPlanned = !AppState.showOnlyPlanned;
    if (AppState.showOnlyPlanned) {
      AppState.showOnlyFavorites = false;
      AppState.showOnlyVisited = false;
      showToast('Mostrando solo los museos por visitar');
    } else {
      showToast('Mostrando todos los museos');
    }
    updateAllCollectionFilterButtons();
    applyFiltersAndRender();
  });

  DOM.btnNocheMuseos.addEventListener('click', () => {
    AppState.showOnlyNocheMuseos = !AppState.showOnlyNocheMuseos;
    updateNocheMuseosButton();
    showToast(AppState.showOnlyNocheMuseos
      ? 'Mostrando las sedes participantes de Noche de Museos'
      : 'Mostrando el catálogo general de museos');
    applyFiltersAndRender();
  });

  DOM.themeToggle.addEventListener('click', () => {
    const theme = AppState.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    showToast(theme === 'dark' ? 'Tema oscuro activado' : 'Tema claro activado');
  });

  // Centrar mapa
  DOM.btnResetMap.addEventListener('click', () => {
    fitMapToMarkers();
  });

  // Toggle de capas del mapa
  DOM.btnLayerToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.layerDropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!DOM.collectionMenu.contains(e.target) && !DOM.moreMenu.contains(e.target)) {
      closeHeaderMenus();
    }

    if (!DOM.layerDropdown.contains(e.target) && e.target !== DOM.btnLayerToggle) {
      DOM.layerDropdown.classList.remove('show');
    }
  });

  DOM.layerDropdown.addEventListener('click', (e) => {
    const opt = e.target.closest('.layer-option');
    if (!opt) return;

    const layerKey = opt.dataset.layer;
    if (AppState.baseTileLayers[layerKey]) {
      setBaseLayer(layerKey);
      DOM.layerDropdown.classList.remove('show');
    }
  });

  // Alternancia en vista móvil
  DOM.mobileViewToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;

    const view = btn.dataset.view;
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (view === 'map') {
      document.body.classList.add('view-map');
      document.body.classList.remove('view-sidebar');
      setTimeout(() => {
        AppState.map.invalidateSize();
      }, 300);
    } else {
      document.body.classList.add('view-sidebar');
      document.body.classList.remove('view-map');
    }
  });

  // Cerrar modal
  DOM.closeModalBtn.addEventListener('click', closeModal);
  DOM.btnToggleVisited.addEventListener('click', () => {
    if (AppState.selectedId) {
      void toggleVisitedMuseum(AppState.selectedId);
    }
  });
  DOM.modal.addEventListener('click', (e) => {
    if (e.target === DOM.modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeHeaderMenus();
    if (e.key === 'Escape' && DOM.modal.style.display !== 'none') {
      closeModal();
    }
  });

  // Botón del modal "Ver en el Mapa"
  DOM.btnFocusMapFromModal.addEventListener('click', () => {
    if (AppState.selectedId) {
      const museo = findMuseumById(AppState.selectedId);
      closeModal();
      if (museo && hasValidCoordinates(museo)) {
        focusMuseumOnMap(museo);
      }
      switchToMapViewIfMobile();
    }
  });
}

/**
 * Normaliza cadenas para búsqueda insensible a acentos
 */
function normalizeText(text) {
  return (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Aplica todos los filtros actuales y renderiza la lista y los marcadores
 */
function applyFiltersAndRender() {
  const normQuery = normalizeText(AppState.searchQuery);
  const sourceMuseos = AppState.showOnlyNocheMuseos
    ? [...AppState.museos.filter(museo => museo.nocheMuseos), ...AppState.nocheMuseosOnly]
    : AppState.museos;

  let result = sourceMuseos.filter(museo => {
    // Filtro por categoría
    if (AppState.activeCategory !== 'all' && museo.categoria !== AppState.activeCategory) {
      return false;
    }

    if (AppState.onlyFree) {
      if (AppState.showOnlyNocheMuseos) {
        const eventIsFree = museo.nocheMuseos && isFreeNocheMuseosEvent(museo.nocheMuseos);
        const eventMatchesDay = AppState.freeAdmissionDay === 'all' ||
          AppState.freeAdmissionDay === 'miercoles';
        if (!eventIsFree || !eventMatchesDay) return false;
      } else {
        const freeDays = getMuseumFreeAdmissionDays(museo);
        const hasFreeAdmission = AppState.freeAdmissionDay === 'all'
          ? Boolean(museo.esGratis)
          : freeDays.has(AppState.freeAdmissionDay);
        const isOpen = isMuseumOpenOnDay(museo, AppState.freeAdmissionDay);
        if (!hasFreeAdmission || !isOpen) return false;
      }
    }

    // Filtro de solo favoritos
    if (AppState.showOnlyFavorites && !AppState.favorites.has(museo.id)) {
      return false;
    }

    if (AppState.showOnlyVisited && !AppState.visitedMuseums.has(museo.id)) {
      return false;
    }

    if (AppState.showOnlyPlanned && !AppState.plannedMuseums.has(museo.id)) {
      return false;
    }

    // Búsqueda de texto
    if (normQuery) {
      const sicSearchText = museo.sicInfo
        ? Object.values(museo.sicInfo)
          .map(value => Array.isArray(value) ? value.join(' ') : String(value || ''))
          .join(' ')
        : '';
      const eventSearchText = museo.nocheMuseos && AppState.showOnlyNocheMuseos
        ? Object.values(museo.nocheMuseos).join(' ')
        : '';
      const combined = normalizeText(
        `${museo.nombre} ${museo.alcaldia} ${museo.direccion} ${museo.descripcion} ${museo.destacado} ${museo.categoria} ${sicSearchText} ${eventSearchText}`
      );
      if (!combined.includes(normQuery)) {
        return false;
      }
    }

    return true;
  });

  // Ordenamiento
  result = sortMuseums(result, AppState.sortOrder);

  AppState.filteredMuseos = result;

  // Actualizar contador y feedback
  DOM.visibleCount.textContent = result.length;
  const resultLabel = AppState.showOnlyNocheMuseos
    ? (result.length === 1 ? 'sede participante' : 'sedes participantes')
    : (result.length === 1 ? 'museo encontrado' : 'museos encontrados');
  DOM.resultsFeedback.textContent = `${result.length} ${resultLabel}`;

  // Renderizar componentes
  renderMuseumsList(result);
  renderMapMarkers(result);
}

/**
 * Ordena la lista de museos según el criterio seleccionado
 */
function sortMuseums(list, order) {
  const copy = [...list];
  switch (order) {
    case 'name-asc':
      return copy.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    case 'name-desc':
      return copy.sort((a, b) => b.nombre.localeCompare(a.nombre, 'es'));
    case 'distance':
      return copy.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
    default:
      return copy.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  }
}

/**
 * Crea el icono personalizado para el marcador en el mapa
 */
function createMarkerIcon(category, isSelected = false) {
  const meta = CATEGORY_META[category] || { color: '#64748b', icon: '🏛️' };
  const activeClass = isSelected ? 'pin-active' : '';

  return L.divIcon({
    className: 'custom-leaflet-div-icon',
    html: `
      <div class="custom-map-pin ${activeClass}" style="background-color: ${meta.color}">
        <span class="custom-map-pin-inner">${meta.icon}</span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32]
  });
}

/**
 * Renderiza los marcadores en el mapa para los museos filtrados
 */
function renderMapMarkers(museos) {
  AppState.markersLayer.clearLayers();
  AppState.markersMap.clear();

  museos.forEach(museo => {
    if (!hasValidCoordinates(museo)) return;

    const isSelected = museo.id === AppState.selectedId;
    const icon = createMarkerIcon(museo.categoria, isSelected);

    const marker = L.marker(museo.coordenadas, { icon, title: museo.nombre });

    // Contenido del popup
    const popupHtml = buildPopupContent(museo);
    marker.bindPopup(popupHtml, { maxWidth: 280, minWidth: 260, autoPanPadding: [20, 20] });

    marker.on('popupopen', (event) => {
      bindPopupMarkerActions(event.popup.getElement(), museo.id);
    });

    marker.on('click', () => {
      selectMuseum(museo.id, false); // Selecciona y resalta en lista
    });

    AppState.markersLayer.addLayer(marker);
    AppState.markersMap.set(museo.id, marker);
  });
}

/**
 * Construye el HTML del popup de Leaflet
 */
function buildPopupContent(museo) {
  const meta = CATEGORY_META[museo.categoria] || { color: '#64748b' };
  const freeBadgeHtml = museo.esGratis
    ? `<span class="badge badge-free">Entrada Libre</span>`
    : '';
  const eventPoster = AppState.showOnlyNocheMuseos && museo.nocheMuseos && museo.nocheMuseos.image;
  const image = escapeHtml(eventPoster || museo.imagen);
  const imageFallback = escapeHtml(eventPoster ? museo.imagen : museo.imagenFallback);
  const name = escapeHtml(museo.nombre);
  const category = escapeHtml(museo.categoria);
  const alcaldia = escapeHtml(museo.alcaldia);
  const horario = escapeHtml(museo.horario);
  const isFavorited = AppState.favorites.has(museo.id);
  const isVisited = AppState.visitedMuseums.has(museo.id);
  const isPlanned = AppState.plannedMuseums.has(museo.id);

  return `
    <div class="popup-container">
      <img src="${image}" data-fallback="${imageFallback}" alt="${name}" class="popup-header-img" loading="lazy" decoding="async" onerror="handleMuseumImageError(this)">
      <div class="popup-body">
        <div class="popup-badge-row">
          <span class="badge badge-category" style="background-color: ${meta.color}">${category}</span>
          ${freeBadgeHtml}
        </div>
        <h4 class="popup-title">${name}</h4>
        <p class="popup-address">📍 ${alcaldia}</p>
        <p class="popup-schedule">🕒 ${horario}</p>
        <div class="popup-marker-actions" role="group" aria-label="Estado del museo">
          <button class="popup-marker-btn ${isFavorited ? 'is-active' : ''}" type="button" data-popup-marker-action="favorite" aria-pressed="${isFavorited}" title="${isFavorited ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span>Favorito</span>
          </button>
          <button class="popup-marker-btn ${isVisited ? 'is-active' : ''}" type="button" data-popup-marker-action="visited" aria-pressed="${isVisited}" title="${isVisited ? 'Quitar marca de visitado' : 'Marcar como visitado'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isVisited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Visitado</span>
          </button>
          <button class="popup-marker-btn ${isPlanned ? 'is-active' : ''}" type="button" data-popup-marker-action="planned" aria-pressed="${isPlanned}" title="${isPlanned ? 'Quitar de Por visitar' : 'Añadir a Por visitar'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isPlanned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z"></path></svg>
            <span>Más tarde</span>
          </button>
        </div>
        <div class="popup-actions">
          <button class="btn btn-primary popup-btn" onclick="openDetailsModal('${museo.id}')">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindPopupMarkerActions(popupElement, museumId) {
  if (!popupElement) return;

  popupElement.querySelectorAll('[data-popup-marker-action]').forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const action = button.dataset.popupMarkerAction;
      if (action === 'favorite') await toggleFavorite(museumId);
      if (action === 'visited') await toggleVisitedMuseum(museumId);
      if (action === 'planned') await togglePlannedMuseum(museumId);

      updatePopupMarkerActions(popupElement, museumId);
    });
  });
}

function updatePopupMarkerActions(popupElement, museumId) {
  const states = {
    favorite: AppState.favorites.has(museumId),
    visited: AppState.visitedMuseums.has(museumId),
    planned: AppState.plannedMuseums.has(museumId)
  };
  const labels = {
    favorite: ['Guardar en favoritos', 'Quitar de favoritos'],
    visited: ['Marcar como visitado', 'Quitar marca de visitado'],
    planned: ['Añadir a Por visitar', 'Quitar de Por visitar']
  };

  popupElement.querySelectorAll('[data-popup-marker-action]').forEach(button => {
    const action = button.dataset.popupMarkerAction;
    const isActive = states[action];
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
    button.title = labels[action][isActive ? 1 : 0];
    button.querySelector('svg').setAttribute('fill', isActive ? 'currentColor' : 'none');
  });
}

/**
 * Renderiza la lista izquierda de tarjetas de museos
 */
function renderMuseumsList(museos) {
  DOM.museumsList.innerHTML = '';

  if (museos.length === 0) {
    DOM.museumsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏛️</div>
        <h3>${AppState.showOnlyNocheMuseos ? 'No se encontraron sedes participantes' : 'No se encontraron museos'}</h3>
        <p>Prueba con otros términos de búsqueda o cambia los filtros de categoría o alcaldía.</p>
        <button class="btn btn-outline" onclick="resetAllFilters()">Restablecer filtros</button>
      </div>
    `;
    return;
  }

  museos.forEach(museo => {
    const isSelected = museo.id === AppState.selectedId;
    const isFavorited = AppState.favorites.has(museo.id);
    const isVisited = AppState.visitedMuseums.has(museo.id);
    const isPlanned = AppState.plannedMuseums.has(museo.id);
    const meta = CATEGORY_META[museo.categoria] || { color: '#64748b', icon: '🏛️' };
    const eventPoster = AppState.showOnlyNocheMuseos && museo.nocheMuseos && museo.nocheMuseos.image;
    const image = escapeHtml(eventPoster || museo.imagen);
    const imageFallback = escapeHtml(eventPoster ? museo.imagen : museo.imagenFallback);
    const imageAlt = escapeHtml(eventPoster
      ? `${museo.nombre} — cartel del evento de Noche de Museos`
      : museo.nombre);
    const name = escapeHtml(museo.nombre);
    const category = escapeHtml(museo.categoria);
    const alcaldia = escapeHtml(museo.alcaldia);
    const address = escapeHtml(museo.direccion.split(',')[0]);
    const highlight = escapeHtml(museo.destacado);

    const card = document.createElement('article');
    card.className = `museum-card ${isSelected ? 'selected' : ''}`;
    card.id = `card-${museo.id}`;
    card.dataset.id = museo.id;

    // Distancia formateada si existe geolocalización
    const distanceBadge = museo.distance !== null
      ? `<span class="badge-distance">📍 ${museo.distance < 1 ? Math.round(museo.distance * 1000) + ' m' : museo.distance.toFixed(1) + ' km'}</span>`
      : '';
    const visitedButton = `
      <button
        type="button"
        class="visited-card-btn ${isVisited ? 'visited' : ''}"
        data-action="visited"
        aria-pressed="${isVisited}"
        aria-label="${isVisited ? 'Quitar marca de visitado' : 'Marcar como visitado'}"
        title="${isVisited ? 'Quitar marca de visitado' : 'Marcar como visitado'}"
      >
        <span data-visited-icon aria-hidden="true">${isVisited
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round"><path fill-rule="evenodd" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
      }</span>
        <span data-visited-label>${isVisited ? 'Visitado' : 'Marcar visita'}</span>
      </button>`;
    const plannedButton = `
      <button
        type="button"
        class="planned-card-btn ${isPlanned ? 'planned' : ''}"
        data-action="planned"
        aria-pressed="${isPlanned}"
        aria-label="${isPlanned ? 'Quitar de Por visitar' : 'Añadir a Por visitar'}"
        title="${isPlanned ? 'Quitar de Por visitar' : 'Añadir a Por visitar'}"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isPlanned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z"></path>
        </svg>
      </button>`;
    const favoriteButton = `
      <button
        type="button"
        class="fav-btn ${isFavorited ? 'favorited' : ''}"
        title="${isFavorited ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
        aria-label="${isFavorited ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
        aria-pressed="${isFavorited}"
        data-fav-id="${museo.id}"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>`;
    const locateButton = hasValidCoordinates(museo) ? `
      <button class="btn btn-outline action-btn-sm" type="button" data-action="locate">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
        Ver en mapa
      </button>` : '';

    card.innerHTML = `
      <div class="card-thumb-wrapper">
        <img 
          src="${image}" 
          data-fallback="${imageFallback}"
          alt="${imageAlt}" 
          class="card-thumb" 
          loading="lazy"
          onerror="handleMuseumImageError(this)"
        />
      </div>

      <div class="card-content">
        <div>
          <div class="card-heading-row">
            <div class="card-header-tags">
              <span class="badge badge-category" style="background-color: ${meta.color}" aria-label="${category}" title="${category}">
                <span class="badge-category-label">${escapeHtml(meta.icon)} ${category}</span>
                <span class="badge-category-icon" aria-hidden="true">${escapeHtml(meta.icon)}</span>
              </span>

              ${distanceBadge}
            </div>
            <div class="card-marker-actions">
              ${favoriteButton}
              ${visitedButton}
              ${plannedButton}
            </div>
          </div>
          <h3 class="card-title" title="${name}">${name}</h3>
          <p class="card-alcaldia">📍 ${alcaldia} · ${address}</p>
          ${highlight ? `
            <div class="card-highlight" title="${highlight}">
              ⭐ <strong>Destacado:</strong> ${highlight}
            </div>` : ''}
        </div>

        <div class="card-actions">
          ${locateButton}
          <button class="btn btn-outline action-btn-sm" data-action="details">
            Detalles
          </button>
        </div>
      </div>
    `;

    // Click en la tarjeta
    card.addEventListener('click', (e) => {
      // Si fue click en el botón de favorito
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn) {
        e.stopPropagation();
        void toggleFavorite(museo.id);
        return;
      }

      if (e.target.closest('[data-action="visited"]')) {
        e.stopPropagation();
        void toggleVisitedMuseum(museo.id);
        return;
      }

      if (e.target.closest('[data-action="planned"]')) {
        e.stopPropagation();
        void togglePlannedMuseum(museo.id);
        return;
      }

      // Si fue en "Detalles"
      if (e.target.closest('[data-action="details"]')) {
        e.stopPropagation();
        openDetailsModal(museo.id);
        return;
      }

      const isMobileMapSelection = window.innerWidth <= 900 && hasValidCoordinates(museo);
      if (isMobileMapSelection) {
        selectMuseum(museo.id, false);
        switchToMapViewIfMobile();
        requestAnimationFrame(() => focusMuseumOnMap(museo, { openPopup: false }));
        return;
      }

      // Selección normal / "Ver en mapa" en escritorio.
      selectMuseum(museo.id, true);

      if (e.target.closest('[data-action="locate"]')) {
        switchToMapViewIfMobile();
      }
    });

    DOM.museumsList.appendChild(card);
  });
}

/**
 * Selecciona un museo, actualiza estado, resalta tarjeta y enfoca en el mapa
 */
function selectMuseum(id, shouldFly = true) {
  AppState.selectedId = id;

  // Actualizar clases de tarjetas seleccionadas
  document.querySelectorAll('.museum-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === id);
  });

  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Resaltar marcador en el mapa
  const museo = findMuseumById(id);
  if (museo && shouldFly && hasValidCoordinates(museo)) {
    focusMuseumOnMap(museo);
  }
}

/**
 * Enfoca el mapa hacia las coordenadas del museo y abre su popup con animación fluida
 */
function focusMuseumOnMap(museo, { openPopup = true } = {}) {
  if (!hasValidCoordinates(museo)) return;

  const marker = AppState.markersMap.get(museo.id);
  if (!openPopup) AppState.map.closePopup();

  const currentCenter = AppState.map.getCenter();
  const currentZoom = AppState.map.getZoom();
  const targetLatLng = L.latLng(museo.coordenadas);
  const distance = currentCenter.distanceTo(targetLatLng);

  const targetZoom = 16;

  // Si ya estamos en zoom cercano (>= 14) y la distancia es moderada (< 4 km),
  // panTo mantiene el mismo nivel de zoom, reutilizando los mosaicos en memoria sin parpadeos
  if (currentZoom >= 14 && distance < 4000) {
    AppState.map.panTo(targetLatLng, {
      animate: true,
      duration: 0.7,
      easeLinearity: 0.25
    });
  } else {
    // Para distancias mayores o desde vista alejada, flyTo suave
    AppState.map.flyTo(targetLatLng, targetZoom, {
      duration: 0.9,
      easeLinearity: 0.35
    });
  }

  if (marker && openPopup) {
    let opened = false;
    const showPopup = () => {
      if (opened) return;
      opened = true;
      marker.openPopup();
    };

    AppState.map.once('moveend', showPopup);
    setTimeout(showPopup, 950);
  }
}

/**
 * Abre el modal con información detallada de un museo
 */
function openDetailsModal(id) {
  const museo = findMuseumById(id);
  if (!museo) return;

  AppState.selectedId = id;

  const eventPoster = AppState.showOnlyNocheMuseos && museo.nocheMuseos && museo.nocheMuseos.image;
  DOM.modalImage.src = eventPoster || museo.imagen;
  DOM.modalImage.alt = museo.nombre;
  DOM.modalImage.dataset.fallback = eventPoster ? museo.imagen : museo.imagenFallback;
  DOM.modalImage.onerror = () => handleMuseumImageError(DOM.modalImage);

  const meta = CATEGORY_META[museo.categoria] || { color: '#64748b', icon: '🏛️' };
  DOM.modalCategory.textContent = `${meta.icon} ${museo.categoria}`;
  DOM.modalCategory.style.backgroundColor = meta.color;

  DOM.modalFreeBadge.style.display = museo.esGratis ? 'inline-block' : 'none';

  DOM.modalTitle.textContent = museo.nombre;
  DOM.modalAlcaldia.textContent = museo.isNocheMuseosOnly
    ? `📍 ${museo.alcaldia}`
    : `📍 Alcaldía ${museo.alcaldia}, Ciudad de México`;
  DOM.modalDescription.textContent = museo.descripcion;
  DOM.modalHighlight.textContent = museo.destacado;
  DOM.modalSchedule.textContent = museo.horario;
  DOM.modalCost.textContent = museo.costo;
  DOM.modalTransport.textContent = museo.transporte;
  DOM.modalAddress.textContent = museo.direccion;
  DOM.btnToggleVisited.style.display = '';
  updateVisitedButton(id);
  renderNocheMuseosDetails(museo);
  renderSicDetails(museo);

  // Enlace a Google Maps para navegación
  if (hasValidCoordinates(museo)) {
    const [lat, lng] = museo.coordenadas;
    DOM.btnGoogleMapsNav.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    DOM.btnFocusMapFromModal.style.display = '';
  } else {
    DOM.btnGoogleMapsNav.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(museo.nombre)}`;
    DOM.btnFocusMapFromModal.style.display = 'none';
  }

  // Sitio web o ficha de referencia
  const sicId = museo.sicId || SIC_IMAGE_IDS[museo.id];
  const sicFichaUrl = sicId
    ? `https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=${sicId}`
    : '';
  if (sicId) {
    DOM.modalImageCredit.href = sicFichaUrl;
    DOM.modalImageCredit.style.display = 'inline-flex';
  } else {
    DOM.modalImageCredit.style.display = 'none';
  }

  const infoUrl = museo.sitioWeb || museo.fuenteEditorial || museo.fuente || sicFichaUrl;
  if (infoUrl) {
    DOM.btnOfficialWeb.href = infoUrl;
    DOM.btnOfficialWeb.style.display = 'inline-flex';
  } else {
    DOM.btnOfficialWeb.style.display = 'none';
  }

  DOM.modal.style.display = 'flex';
}

function renderNocheMuseosDetails(museo) {
  DOM.modalNocheFields.innerHTML = '';
  DOM.modalNocheFreeBadge.style.display = 'none';
  DOM.modalNocheImage.removeAttribute('src');
  DOM.modalNocheImage.alt = '';
  DOM.modalNocheImage.style.display = 'none';
  DOM.modalNocheImage.onerror = null;
  const event = museo.nocheMuseos;
  const isVisible = AppState.showOnlyNocheMuseos && event;
  DOM.modalNocheDetails.style.display = isVisible ? 'block' : 'none';
  if (!isVisible) return;

  DOM.modalNocheTitle.textContent = event.title || '';
  DOM.modalNocheFreeBadge.style.display = isFreeNocheMuseosEvent(event) ? 'inline-block' : 'none';
  if (event.image) {
    DOM.modalNocheImage.alt = `Cartel del evento: ${event.title}`;
    DOM.modalNocheImage.onerror = () => {
      console.error(`No se pudo cargar el cartel del evento "${event.title}": ${event.image}`);
      DOM.modalNocheImage.style.display = 'none';
    };
    DOM.modalNocheImage.src = event.image;
    DOM.modalNocheImage.style.display = 'block';
  } else {
    console.error(`El evento "${event.title}" no tiene un cartel asociado.`);
  }

  const fields = [
    ['Actividades', event.activities],
    ['Horario', event.schedule],
    ['Admisión', event.admission],
    ['Cupo', event.capacity],
    ['Registro', event.registration],
    ['Contacto', event.contact],
    ['Modalidad', event.format]
  ];

  fields.forEach(([label, value]) => {
    if (!value) return;
    const item = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    item.append(term, description);
    DOM.modalNocheFields.appendChild(item);
  });
}

function isFreeNocheMuseosEvent(event) {
  return /entrada libre|sin costo/i.test(event.admission || '');
}

function getMuseumFreeAdmissionDays(museo) {
  const allWeekdays = new Set(['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']);
  if (museo.esGratis) return allWeekdays;

  const cost = normalizeText(museo.costo || '');
  if (!/\b(?:entrada\s+)?(?:libre|gratis)\b|\bsin\s+costo\b/.test(cost)) {
    return new Set();
  }

  const freeDays = new Set([...allWeekdays].filter(day => new RegExp(`\\b${day}s?\\b`).test(cost)));
  return freeDays;
}

function isMuseumOpenOnDay(museo, day) {
  const openDays = getMuseumOpenDays(museo);
  if (day === 'all') return openDays === null || openDays.size > 0;
  return openDays === null || openDays.has(day);
}

function getMuseumOpenDays(museo) {
  const schedule = normalizeText(museo.horario || '');
  if (/\btemporalmente cerrado\b|\bpermanentemente cerrado\b/.test(schedule)) {
    return new Set();
  }

  const weekdays = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const weekdayPattern = weekdays.join('|');
  const openDays = new Set();
  const dayRanges = new RegExp(
    `\\b(${weekdayPattern})s?\\s+(?:a|al|hasta)\\s+(${weekdayPattern})s?\\b`,
    'g'
  );
  let range;

  while ((range = dayRanges.exec(schedule)) !== null) {
    let index = weekdays.indexOf(range[1]);
    const endIndex = weekdays.indexOf(range[2]);
    while (true) {
      openDays.add(weekdays[index]);
      if (index === endIndex) break;
      index = (index + 1) % weekdays.length;
    }
  }

  const closedDays = new Set(weekdays.filter(day => {
    const dayBeforeClosure = new RegExp(
      `\\b${day}s?\\s*[:,–-]?\\s+(?:(?:permanece|se encuentra)\\s+)?cerrad[oa]s?\\b`
    );
    const closureBeforeDay = new RegExp(
      `\\b(?:cerrad[oa]s?|no abre|descanso)\\s+(?:los\\s+)?${day}s?\\b|\\bcierra\\s+(?:los\\s+)?${day}s?\\b`
    );
    return dayBeforeClosure.test(schedule) || closureBeforeDay.test(schedule);
  }));

  weekdays.forEach(day => {
    if (new RegExp(`\\b${day}s?\\b`).test(schedule) && !closedDays.has(day)) {
      openDays.add(day);
    }
  });

  if (!openDays.size && closedDays.size) {
    weekdays.forEach(day => {
      if (!closedDays.has(day)) openDays.add(day);
    });
  }

  if (!openDays.size && !closedDays.size) return null;
  closedDays.forEach(day => openDays.delete(day));
  return openDays;
}

function renderSicDetails(museo) {
  DOM.modalSicFields.innerHTML = '';
  const info = museo.sicInfo;
  if (!info) {
    DOM.modalSicDetails.style.display = 'none';
    return;
  }

  const addItem = (label, value, links = []) => {
    const text = String(value == null ? '' : value).trim();
    if (!text && links.length === 0) return;

    const item = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;

    if (links.length > 0) {
      links.forEach((link, index) => {
        if (index > 0) description.appendChild(document.createTextNode(' · '));
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.textContent = link.label;
        description.appendChild(anchor);
      });
    } else {
      description.textContent = text;
    }

    item.appendChild(term);
    item.appendChild(description);
    DOM.modalSicFields.appendChild(item);
  };

  const formatSicDate = value => {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value || ''));
    if (!match || Number(match[1]) <= 1000) return '';
    return `${match[3]}/${match[2]}/${match[1]}`;
  };

  const cleanValue = value => {
    const text = String(value == null ? '' : value).trim();
    return /^(tnd|tpnd|null|0)$/i.test(text) ? '' : text;
  };

  addItem('Temática', cleanValue(info.theme));
  addItem('Fundación', formatSicDate(info.foundationDate));
  addItem('Adscripción', cleanValue(info.affiliation));
  addItem('Tipo de propiedad', cleanValue(info.propertyType));

  const roomCounts = [];
  const permanentRooms = Number(info.permanentRooms);
  const temporaryRooms = Number(info.temporaryRooms);
  if (Number.isFinite(permanentRooms) && permanentRooms >= 0) {
    roomCounts.push(`${permanentRooms} permanentes`);
  }
  if (Number.isFinite(temporaryRooms) && temporaryRooms >= 0) {
    roomCounts.push(`${temporaryRooms} temporales`);
  }
  addItem('Salas de exhibición', roomCounts.join(' · '));
  addItem('Teléfono', cleanValue(info.phone));
  addItem('Correo', cleanValue(info.email));

  const otherWebsites = (info.websites || [])
    .filter(url => isHttpUrl(url) && url !== museo.sitioWeb)
    .map((url, index) => ({ label: `Sitio ${index + 2}`, href: url }));
  addItem('Otros sitios', '', otherWebsites);

  const socialLinks = [
    { label: 'Facebook', href: info.facebook },
    { label: 'X / Twitter', href: info.twitter },
    { label: 'Instagram', href: info.instagram }
  ].filter(link => isHttpUrl(link.href));
  addItem('Redes sociales', '', socialLinks);
  addItem('Actualización SIC', formatSicDate(info.updatedAt));

  DOM.modalSicDetails.style.display = DOM.modalSicFields.children.length ? 'block' : 'none';
}

/**
 * Cierra el modal de detalles
 */
function closeModal() {
  DOM.modal.style.display = 'none';
}

function updateVisitedButton(id) {
  const isVisited = AppState.visitedMuseums.has(id);
  DOM.btnToggleVisited.classList.toggle('active', isVisited);
  DOM.btnToggleVisited.setAttribute('aria-pressed', String(isVisited));
  DOM.modalVisitIcon.innerHTML = isVisited
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round"><path fill-rule="evenodd" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  DOM.modalVisitLabel.textContent = isVisited
    ? 'Ya visitaste este museo'
    : 'Marcar como visitado';

  const card = document.getElementById(`card-${id}`);
  const cardButton = card && card.querySelector('[data-action="visited"]');
  if (cardButton) {
    cardButton.classList.toggle('visited', isVisited);
    cardButton.setAttribute('aria-pressed', String(isVisited));
    const label = isVisited ? 'Quitar marca de visitado' : 'Marcar como visitado';
    cardButton.setAttribute('aria-label', label);
    cardButton.title = label;
    cardButton.querySelector('[data-visited-icon]').innerHTML = isVisited
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round"><path fill-rule="evenodd" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    cardButton.querySelector('[data-visited-label]').textContent = isVisited
      ? 'Visitado'
      : 'Marcar visita';
  }
}

async function toggleVisitedMuseum(id) {
  const museo = findMuseumById(id);
  if (!museo) return;

  const isVisited = AppState.visitedMuseums.has(id);
  if (!await persistAccountMarker(id, 'visited', !isVisited)) return;

  if (isVisited) {
    AppState.visitedMuseums.delete(id);
    showToast(`Visita eliminada: ${museo.nombre}`);
  } else {
    AppState.visitedMuseums.add(id);
    showToast(`¡Museo marcado como visitado! ${museo.nombre}`);
  }

  saveVisitedMuseumsToStorage();
  updateVisitedButton(id);
  if (AppState.showOnlyVisited) {
    applyFiltersAndRender();
  }
}

function updatePlannedButton(id) {
  const isPlanned = AppState.plannedMuseums.has(id);
  const card = document.getElementById(`card-${id}`);
  const cardButton = card && card.querySelector('[data-action="planned"]');
  if (!cardButton) return;

  cardButton.classList.toggle('planned', isPlanned);
  cardButton.setAttribute('aria-pressed', String(isPlanned));
  const label = isPlanned ? 'Quitar de Por visitar' : 'Añadir a Por visitar';
  cardButton.setAttribute('aria-label', label);
  cardButton.title = label;
  cardButton.querySelector('svg').setAttribute('fill', isPlanned ? 'currentColor' : 'none');
}

async function togglePlannedMuseum(id) {
  const museo = findMuseumById(id);
  if (!museo) return;

  const isPlanned = AppState.plannedMuseums.has(id);
  if (!await persistAccountMarker(id, 'planned', !isPlanned)) return;

  if (isPlanned) {
    AppState.plannedMuseums.delete(id);
    showToast(`Eliminado de tu lista de museos por visitar: ${museo.nombre}`);
  } else {
    AppState.plannedMuseums.add(id);
    showToast(`Añadido a tu lista de museos por visitar: ${museo.nombre}`);
  }

  savePlannedMuseumsToStorage();
  updatePlannedButton(id);
  if (AppState.showOnlyPlanned) {
    applyFiltersAndRender();
  }
}

function updateFavoriteButton(id) {
  const isFavorited = AppState.favorites.has(id);
  const card = document.getElementById(`card-${id}`);
  const cardButton = card && card.querySelector('.fav-btn');
  if (!cardButton) return;

  cardButton.classList.toggle('favorited', isFavorited);
  cardButton.setAttribute('aria-pressed', String(isFavorited));
  const label = isFavorited ? 'Quitar de favoritos' : 'Guardar en favoritos';
  cardButton.setAttribute('aria-label', label);
  cardButton.title = label;
  cardButton.querySelector('svg').setAttribute('fill', isFavorited ? 'currentColor' : 'none');
}

/**
 * Alterna el estado de favorito de un museo
 */
async function toggleFavorite(id) {
  const museo = findMuseumById(id);
  const name = museo ? museo.nombre : 'Museo';

  const isFavorited = AppState.favorites.has(id);
  if (!await persistAccountMarker(id, 'favorite', !isFavorited)) return;

  if (isFavorited) {
    AppState.favorites.delete(id);
    showToast(`Eliminado de favoritos: ${name}`);
  } else {
    AppState.favorites.add(id);
    showToast(`¡Guardado en favoritos! ❤️ ${name}`);
  }

  saveFavoritesToStorage();
  updateFavoriteButton(id);
  if (AppState.showOnlyFavorites) {
    applyFiltersAndRender();
  }
}

/**
 * Ajusta el encuadre del mapa para mostrar todos los museos visibles
 */
function fitMapToMarkers() {
  const markers = Array.from(AppState.markersMap.values());
  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    AppState.map.fitBounds(group.getBounds().pad(0.1), {
      padding: [40, 40],
      maxZoom: 15,
      animate: true,
      duration: 1.0
    });
  } else {
    AppState.map.setView(CDMX_CENTER, DEFAULT_ZOOM);
  }
}

/**
 * Restablece todos los filtros a sus valores predeterminados
 */
function resetAllFilters() {
  AppState.activeCategory = 'all';
  AppState.showCategoryOptions = false;
  AppState.showFreeEntryOptions = false;
  AppState.onlyFree = false;
  AppState.freeAdmissionDay = 'all';
  AppState.freeAdmissionDay = 'all';
  AppState.searchQuery = '';
  AppState.showOnlyFavorites = false;
  AppState.showOnlyVisited = false;
  AppState.showOnlyPlanned = false;
  AppState.showOnlyNocheMuseos = false;
  AppState.sortOrder = 'name-asc';

  DOM.searchInput.value = '';
  DOM.clearSearchBtn.style.display = 'none';
  updateCategoryFilterButton();
  updateFreeEntryButton();
  updateAllCollectionFilterButtons();
  updateNocheMuseosButton();

  applyFiltersAndRender();
  fitMapToMarkers();
  showToast('Filtros restablecidos');
}

/**
 * Geolocalización del usuario y cálculo de proximidad
 */
function handleUserGeolocation() {
  if (!navigator.geolocation) {
    showToast('Tu navegador no soporta geolocalización');
    return;
  }

  showToast('Obteniendo tu ubicación actual... 🛰️');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      AppState.userCoords = [latitude, longitude];

      // Calcular distancia para cada museo con la fórmula de Haversine
      AppState.museos.forEach(museo => {
        museo.distance = calculateHaversineDistance(
          latitude, longitude,
          museo.coordenadas[0], museo.coordenadas[1]
        );
      });

      // Crear o mover marcador del usuario
      if (AppState.userMarker) {
        AppState.map.removeLayer(AppState.userMarker);
      }

      const userIcon = L.divIcon({
        className: 'user-location-pin',
        html: `
          <div style="
            width: 20px;
            height: 20px;
            background: #2563eb;
            border: 3px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.6);
          "></div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      AppState.userMarker = L.marker([latitude, longitude], { icon: userIcon })
        .addTo(AppState.map)
        .bindPopup('<strong>Tu ubicación actual</strong>');

      // Priorizar los museos más cercanos cuando se obtiene la ubicación.
      AppState.sortOrder = 'distance';

      DOM.btnNearMe.classList.add('active');

      applyFiltersAndRender();
      showToast('¡Ubicación detectada! Museos ordenados por cercanía');

      // Centrar mapa mostrando al usuario y los museos más cercanos
      AppState.map.flyTo([latitude, longitude], 13.5, { duration: 1.2 });
    },
    (error) => {
      console.warn('Error de geolocalización:', error);
      let msg = 'No se pudo obtener tu ubicación';
      if (error.code === error.PERMISSION_DENIED) {
        msg = 'Permiso de ubicación denegado';
      }
      showToast(msg);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

/**
 * Calcula la distancia en kilómetros entre dos coordenadas (Haversine)
 */
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Muestra notificación toast temporal
 */
let toastTimeout = null;
function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  DOM.toast.textContent = message;
  DOM.toast.style.display = 'flex';

  toastTimeout = setTimeout(() => {
    DOM.toast.style.display = 'none';
  }, 3200);
}

/**
 * Cambia automáticamente a la vista de mapa si estamos en pantalla móvil
 */
function switchToMapViewIfMobile() {
  if (window.innerWidth <= 900) {
    document.body.classList.add('view-map');
    document.body.classList.remove('view-sidebar');
    document.querySelectorAll('.toggle-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === 'map');
    });
    setTimeout(() => {
      AppState.map.invalidateSize();
    }, 300);
  }
}

// Exponer funciones globales accesibles desde strings HTML de popups
window.openDetailsModal = openDetailsModal;
window.resetAllFilters = resetAllFilters;
