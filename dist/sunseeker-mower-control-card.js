const TRANSLATIONS = {
    en: {
        header: "Mower Control",
        start: "Start",
        pause: "Pause",
        stop: "Stop",
        home: "Home",
        border: "Border",
        end_task: "End task",
        enable_drawing: "Enable drawing",
        disable_drawing: "Disable drawing",
        clear_area: "Clear area",
        mow_area: "Mow area",
        area_points: "Area points",
        area_draw_hint: "Tap map to draw mowing area",
        area_missing_map: "No map data available for drawing",
        state: "State",
        mower_entity: "Mower entity",
        zone_entity: "Zone select entity",
        camera_entity: "Camera/Image entity",
        map_position: "Map position",
        map_position_top: "Top",
        map_position_left: "Left",
        map_position_right: "Right",
        model_label: "Model",
        model_x: "Model X",
        model_v: "Model V",
        header_label: "Header",
        show_header: "Show header",
        show_icons: "Show icons",
        show_text: "Show button text",
        show_border: "Show border button",
        border_entity: "Border entity",
    },
    da: {
        header: "Plæneklipper kontrol",
        start: "Start",
        pause: "Pause",
        stop: "Stop",
        home: "Hjem",
        border: "Border",
        end_task: "Afslut opgave",
        enable_drawing: "Aktivér tegning",
        disable_drawing: "Deaktivér tegning",
        clear_area: "Ryd område",
        mow_area: "Klip område",
        area_points: "Områdepunkter",
        area_draw_hint: "Tryk på kortet for at tegne klippeområde",
        area_missing_map: "Ingen kortdata tilgængelig for tegning",
        state: "Status",
        mower_entity: "Plæneklipper enhed",
        zone_entity: "Zonevælger enhed",
        camera_entity: "Kamera/Billede enhed",
        map_position: "Kort placering",
        map_position_top: "Top",
        map_position_left: "Venstre",
        map_position_right: "Højre",
        model_label: "Model",
        model_x: "Model X",
        model_v: "Model V",
        header_label: "Overskrift",
        show_header: "Vis overskrift",
        show_icons: "Vis ikoner",
        show_text: "Vis tekst på knapper",
        show_border: "Vis border-knap",
        border_entity: "Border entitet",
    },
    de: {
        header: "Mähersteuerung",
        start: "Start",
        pause: "Pause",
        stop: "Stopp",
        home: "Heim",
        border: "Border",
        end_task: "Aufgabe beenden",
        enable_drawing: "Zeichnen aktivieren",
        disable_drawing: "Zeichnen deaktivieren",
        clear_area: "Bereich löschen",
        mow_area: "Bereich mähen",
        area_points: "Bereichspunkte",
        area_draw_hint: "Auf die Karte tippen, um den Mähbereich zu zeichnen",
        area_missing_map: "Keine Kartendaten zum Zeichnen verfügbar",
        state: "Status",
        mower_entity: "Mäher Entität",
        zone_entity: "Zonenauswahl Entität",
        camera_entity: "Kamera/Bild Entität",
        map_position: "Kartenposition",
        map_position_top: "Oben",
        map_position_left: "Links",
        map_position_right: "Rechts",
        model_label: "Modell",
        model_x: "Modell X",
        model_v: "Modell V",
        header_label: "Überschrift",
        show_header: "Überschrift anzeigen",
        show_icons: "Icons anzeigen",
        show_text: "Show button text",
        show_border: "Border-Schaltfläche anzeigen",
        border_entity: "Border-Entität",
    },
    fr: {
        header: "Contrôle de la tondeuse",
        start: "Démarrer",
        pause: "Pause",
        stop: "Arrêter",
        home: "Accueil",
        border: "Border",
        end_task: "Terminer la tâche",
        enable_drawing: "Activer le dessin",
        disable_drawing: "Désactiver le dessin",
        clear_area: "Effacer la zone",
        mow_area: "Tondre la zone",
        area_points: "Points de zone",
        area_draw_hint: "Touchez la carte pour dessiner la zone de tonte",
        area_missing_map: "Aucune donnée de carte disponible pour le dessin",
        state: "État",
        mower_entity: "Entité de la tondeuse",
        zone_entity: "Entité de sélection de zone",
        camera_entity: "Entité Caméra/Image",
        map_position: "Position de la carte",
        map_position_top: "Haut",
        map_position_left: "Gauche",
        map_position_right: "Droite",
        model_label: "Modèle",
        model_x: "Modèle X",
        model_v: "Modèle V",
        header_label: "En-tête",
        show_header: "Afficher l'en-tête",
        show_icons: "Show icons",
        show_text: "Show button text",
        show_border: "Afficher le bouton Border",
        border_entity: "Entité Border",
    },
    fi: {
        header: "Ruohonleikkurin ohjaus",
        start: "Käynnistä",
        pause: "Tauko",
        stop: "Pysäytä",
        home: "Koti",
        border: "Border",
        end_task: "Lopeta tehtävä",
        enable_drawing: "Ota piirto käyttöön",
        disable_drawing: "Poista piirto käytöstä",
        clear_area: "Tyhjennä alue",
        mow_area: "Leikkaa alue",
        area_points: "Alueen pisteet",
        area_draw_hint: "Napauta karttaa piirtääksesi leikkuualueen",
        area_missing_map: "Ei karttatietoja piirtämistä varten",
        state: "Tila",
        mower_entity: "Ruohonleikkuri-entiteetti",
        zone_entity: "Vyöhykevalinta-entiteetti",
        camera_entity: "Kamera/Kuva-entiteetti",
        map_position: "Kartan sijainti",
        map_position_top: "Ylhäällä",
        map_position_left: "Vasemmalla",
        map_position_right: "Oikealla",
        model_label: "Malli",
        model_x: "Malli X",
        model_v: "Malli V",
        header_label: "Otsikko",
        show_header: "Näytä otsikko",
        show_icons: "Näytä kuvakkeet",
        show_text: "Näytä painikkeiden teksti",
        show_border: "Näytä Border-painike",
        border_entity: "Border-entiteetti",
    },
    pl: {
        header: "Sterowanie kosiarką",
        start: "Start",
        pause: "Pauza",
        stop: "Stop",
        home: "Dom",
        border: "Border",
        end_task: "Zakończ zadanie",
        enable_drawing: "Włącz rysowanie",
        disable_drawing: "Wyłącz rysowanie",
        clear_area: "Wyczyść obszar",
        mow_area: "Kosz obszar",
        area_points: "Punkty obszaru",
        area_draw_hint: "Dotknij mapy, aby narysować obszar koszenia",
        area_missing_map: "Brak danych mapy do rysowania",
        state: "Stan",
        mower_entity: "Encja kosiarki",
        zone_entity: "Encja wyboru strefy",
        camera_entity: "Encja kamery/obrazu",
        map_position: "Pozycja mapy",
        map_position_top: "Góra",
        map_position_left: "Lewa",
        map_position_right: "Prawa",
        model_label: "Model",
        model_x: "Model X",
        model_v: "Model V",
        header_label: "Nagłówek",
        show_header: "Pokaż nagłówek",
        show_icons: "Pokaż ikony",
        show_text: "Pokaż tekst przycisków",
        show_border: "Pokaż przycisk Border",
        border_entity: "Encja Border",
    },
    state_values: {
        standby: {
            en: "Standby",
            da: "Standby",
            de: "Bereitschaft",
            fr: "Veille",
            fi: "Valmiustila",
            pl: "Czuwanie"
        },
        mowing: {
            en: "Mowing",
            da: "Slår græs",
            de: "Mähen",
            fr: "Tonte",
            fi: "Leikkaa",
            pl: "Koszenie"
        },
        on_the_way_home: {
            en: "Going back to dock",
            da: "På vej hjem",
            de: "Auf dem Heimweg",
            fr: "Retour à la base",
            fi: "Palaa telakkaan",
            pl: "Powrót do stacji"
        },
        mowing_border: {
            en: "Mowing border",
            da: "Kanter græs",
            de: "Rand mähen",
            fr: "Tonte des bordures",
            fi: "Leikkaa reunoja",
            pl: "Koszenie krawędzi"
        },
        idle: {
            en: "Idle",
            da: "Inaktiv",
            de: "Leerlauf",
            fr: "Inactif",
            fi: "Jouten",
            pl: "Bezczynny"
        },
        working: {
            en: "Working",
            da: "Arbejder",
            de: "Arbeitet",
            fr: "Travail",
            fi: "Työskentelee",
            pl: "Pracuje"
        },
        pause: {
            en: "Paused",
            da: "Pause",
            de: "Pause",
            fr: "Pause",
            fi: "Tauolla",
            pl: "Wstrzymany"
        },
        error: {
            en: "error",
            da: "Fejl",
            de: "Fehler",
            fr: "Erreur",
            fi: "Virhe",
            pl: "Błąd"
        },
        return: {
            en: "Returning",
            da: "Returnerer",
            de: "Zurückkehren",
            fr: "Retour",
            fi: "Palaamassa",
            pl: "Powrót"
        },
        return_pause: {
            en: "Return paused",
            da: "Return pause",
            de: "Rückkehr Pause",
            fr: "Pause retour",
            fi: "Paluu tauolla",
            pl: "Powrót wstrzymany"
        },
        charging: {
            en: "Charging",
            da: "Lader op",
            de: "Lädt",
            fr: "En charge",
            fi: "Latautuu",
            pl: "Ładowanie"
        },
        charging_full: {
            en: "Charged",
            da: "Fuld opladning",
            de: "Voll geladen",
            fr: "Charge complète",
            fi: "Ladattu",
            pl: "Naładowany"
        },
        offline: {
            en: "Offline",
            da: "Offline",
            de: "Offline",
            fr: "Hors ligne",
            fi: "Offline",
            pl: "Offline"
        },
        locating: {
            en: "Locating",
            da: "Finder position",
            de: "Position wird gesucht",
            fr: "Localisation",
            fi: "Paikantaa",
            pl: "Lokalizowanie"
        },
        stop: {
            en: "Stopped",
            da: "Stoppet",
            de: "Gestoppt",
            fr: "Arrêté",
            fi: "Pysäytetty",
            pl: "Zatrzymany"
        },
        continue_mowing: {
            en: "Continue mowing",
            da: "Fortsæt slåning",
            de: "Weiter mähen",
            fr: "Continuer la tonte",
            fi: "Jatka leikkaamista",
            pl: "Kontynuuj koszenie"
        },
        stuck: {
            en: "Stuck",
            da: "Sidder fast",
            de: "Festgefahren",
            fr: "Bloqué",
            fi: "Jumissa",
            pl: "Utknął"
        },
        updating_firmware: {
            en: "Opdating firmware",
            da: "Opdatere firmware",
            de: "Opdating firmware",
            fr: "Opdating firmware",
            fi: "Päivittää laiteohjelmistoa",
            pl: "Aktualizacja oprogramowania"
        }
    }
};

function _t(key, hass) {
    const lang = (hass && hass.language && TRANSLATIONS[hass.language])
        ? hass.language
        : "en";
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS["en"][key] || key;
}

// Helper to get translated mower state value
function _stateValue(state, hass) {
    const lang = (hass && hass.language && TRANSLATIONS[hass.language]) ? hass.language : "en";
    const stateTranslations = TRANSLATIONS.state_values?.[state];
    if (stateTranslations && stateTranslations[lang]) {
        return stateTranslations[lang];
    }
    return state; // fallback to raw state
}

class SunseekerMowerControlCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._entity = "";
        this._zoneEntity = "";
        this._cameraEntity = "";
        this._hass = null;
        this._zones = [];
        this._selectedZones = [];
        this._mowerState = "unknown";
        this._drawPoints = [];
        this._drawCursorPoint = null;
        this._drawEnabled = false;
        this._showBorder = false;
        this._borderButtonEntity = "";
        this._mapPosition = "top";
        this._overlayResizeObserver = null;
        this._initialized = false;
    }

    static getConfigElement() {
        return document.createElement("sunseeker-mower-control-card-editor");
    }

    static getStubConfig(hass, entities) {
        const mower = entities.find(e => e.startsWith("mower.") || e.startsWith("vacuum.")) || "";
        const zone = entities.find(e => e.startsWith("select.")) || "";
        const camera = entities.find(e => e.startsWith("camera.") || e.startsWith("image.")) || "";
        return {
            type: "custom:sunseeker-mower-control-card",
            entity: mower,
            zone_entity: zone,
            camera_entity: camera,
            map_position: "top",
            model: "x",
            header: TRANSLATIONS[hass?.language || "en"].header,
            show_header: true,
            show_border: false,
        };
    }

    setConfig(config) {
        this.config = config;
        this._entity = config.entity;
        this._zoneEntity = config.zone_entity;
        this._cameraEntity = config.camera_entity;
        this._mapPosition = this._normalizeMapPosition(config.map_position);
        this._header = config.header || TRANSLATIONS["en"].header;
        this._model = (config.model || "x").toLowerCase() === "v" ? "v" : "x";
        this._showHeader = config.show_header !== false;
        this._showIcons = config.show_icons !== false;
        this._showText = config.show_text !== false;
        this._showBorder = config.show_border === true;
        this._updateBorderButtonEntity();
        if (!this._isModelX()) {
            this._drawEnabled = false;
            this._drawCursorPoint = null;
        }
        this._render();
        this._initialized = true;
    }

    _isModelX() {
        return this._model === "x";
    }

    _normalizeMapPosition(value) {
        return value === "left" || value === "right" ? value : "top";
    }

    set hass(hass) {
        this._hass = hass;
        this._updateZones();
        this._updateMowerState();
        this._updateBorderButtonEntity();
        // Update embedded picture-entity card's hass property
        if (this.shadowRoot) {
            const pictureCard = this.shadowRoot.querySelector("hui-picture-entity-card");
            if (pictureCard) {
                pictureCard.hass = hass;
            }
        }
        if (this._initialized) {
            this._updateDom();
        }
    }

    _updateZones() {
        if (!this._hass || !this._zoneEntity) return;
        const stateObj = this._hass.states[this._zoneEntity];
        if (stateObj && stateObj.attributes.options) {
            this._zones = stateObj.attributes.options;
            if (!this._selectedZones.length && stateObj.state) {
                this._selectedZones = [stateObj.state];
            }
        }
    }

    _updateMowerState() {
        if (!this._hass || !this._entity) return;
        const stateObj = this._hass.states[this._entity];
        this._mowerState = stateObj ? stateObj.state : "unknown";
    }

    _toggleZone(zone) {
        const idx = this._selectedZones.indexOf(zone);
        if (idx === -1) {
            this._selectedZones.push(zone);
        } else {
            this._selectedZones.splice(idx, 1);
        }
        this._updateZoneButtons();
    }

    _parseMapPoints(rawPoints) {
        if (!rawPoints) {
            return [];
        }
        if (typeof rawPoints === "string") {
            try {
                return JSON.parse(rawPoints);
            } catch (_err) {
                return [];
            }
        }
        if (Array.isArray(rawPoints)) {
            return rawPoints;
        }
        return [];
    }

    _extractHintTokens(value) {
        if (!value || typeof value !== "string") {
            return [];
        }
        return value
            .toLowerCase()
            .split(/[^a-z0-9]+/)
            .filter((token) => token.length >= 4);
    }

    _findBorderButtonEntity() {
        if (!this._hass) {
            return "";
        }

        const allStates = this._hass.states || {};
        const candidates = Object.entries(allStates)
            .filter(([entityId]) => entityId.startsWith("button."))
            .map(([entityId, stateObj]) => ({ entityId, stateObj }));

        if (!candidates.length) {
            return "";
        }

        const borderTokens = [
            "cut_border",
            "klip_kant",
            "kanten",
            "reunaleikkaus",
            "couper_les_bordures",
            "kraw",
            "border",
        ];

        const mowerObjectId = String(this._entity || "").split(".")[1] || "";
        const mowerObjectTokens = this._extractHintTokens(mowerObjectId);

        const hintTokens = [
            ...this._extractHintTokens(this._entity),
            ...this._extractHintTokens(this._zoneEntity),
            ...this._extractHintTokens(this._cameraEntity),
            ...mowerObjectTokens,
        ];

        let bestCandidate = null;
        let bestScore = -1;

        candidates.forEach((candidate) => {
            const entityIdLower = candidate.entityId.toLowerCase();
            const friendlyName = String(candidate.stateObj?.attributes?.friendly_name || "").toLowerCase();
            const translationKey = String(candidate.stateObj?.attributes?.translation_key || "").toLowerCase();
            const uniqueId = String(candidate.stateObj?.attributes?.unique_id || "").toLowerCase();
            let score = 0;
            let matchedBorderTokenCount = 0;

            if (entityIdLower.includes("sunseeker")) {
                score += 2;
            }

            if (translationKey === "sunseeker_border") {
                score += 12;
            }

            borderTokens.forEach((token) => {
                if (
                    entityIdLower.includes(token)
                    || friendlyName.includes(token)
                    || translationKey.includes(token)
                    || uniqueId.includes(token)
                ) {
                    matchedBorderTokenCount += 1;
                    score += 4;
                }
            });

            const hasBorderSignal = translationKey === "sunseeker_border" || matchedBorderTokenCount > 0;
            if (!hasBorderSignal) {
                return;
            }

            const mowerObjectIdLower = mowerObjectId.toLowerCase();
            const hasMowerIdMatch = !!mowerObjectIdLower && (
                entityIdLower.includes(mowerObjectIdLower)
                || friendlyName.includes(mowerObjectIdLower)
                || translationKey.includes(mowerObjectIdLower)
                || uniqueId.includes(mowerObjectIdLower)
            );
            if (!hasMowerIdMatch) {
                return;
            }

            if (mowerObjectId && entityIdLower.includes(mowerObjectId.toLowerCase())) {
                score += 6;
            }

            hintTokens.forEach((token) => {
                if (
                    entityIdLower.includes(token)
                    || friendlyName.includes(token)
                    || translationKey.includes(token)
                ) {
                    score += 2;
                }
            });

            if (score > bestScore) {
                bestScore = score;
                bestCandidate = candidate;
            }
        });

        return bestScore > 0 ? (bestCandidate?.entityId || "") : "";
    }

    _updateBorderButtonEntity() {
        this._borderButtonEntity = this._findBorderButtonEntity();
    }

    _findMapDataState() {
        if (!this._hass) {
            return null;
        }

        const directState = this._cameraEntity ? this._hass.states[this._cameraEntity] : null;
        if (directState?.attributes?.map_data) {
            return directState;
        }

        const allStates = this._hass.states || {};
        const candidates = Object.entries(allStates)
            .filter(([entityId, stateObj]) => entityId.startsWith("image.") && !!stateObj?.attributes?.map_data)
            .map(([entityId, stateObj]) => ({ entityId, stateObj }));

        if (!candidates.length) {
            return null;
        }

        const hintTokens = [
            ...this._extractHintTokens(this._cameraEntity),
            ...this._extractHintTokens(this._entity),
            ...this._extractHintTokens(this._zoneEntity),
        ];

        let bestCandidate = null;
        let bestScore = -1;

        candidates.forEach((candidate) => {
            const entityIdLower = candidate.entityId.toLowerCase();
            let score = 0;

            // Prefer the primary map image when multiple map_data images exist.
            if (entityIdLower.includes("mower_map") || entityIdLower.includes("_map")) {
                score += 2;
            }

            hintTokens.forEach((token) => {
                if (entityIdLower.includes(token)) {
                    score += 3;
                }
            });

            if (score > bestScore) {
                bestScore = score;
                bestCandidate = candidate;
            }
        });

        return bestCandidate?.stateObj || candidates[0].stateObj;
    }

    _getMapBounds() {
        if (!this._hass) {
            return null;
        }
        const stateObj = this._findMapDataState();
        const mapData = stateObj?.attributes?.map_data;
        if (!mapData) {
            return null;
        }

        const mapKeys = [
            "divide_area_work",
            "region_work",
            "region_channel",
            "region_obstacle",
            "region_forbidden",
            "region_placed_blank",
            "region_charger_channel",
        ];

        let minX = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        let minY = Number.POSITIVE_INFINITY;
        let maxY = Number.NEGATIVE_INFINITY;

        mapKeys.forEach((key) => {
            (mapData[key] || []).forEach((entry) => {
                const points = this._parseMapPoints(entry?.points);
                points.forEach((point) => {
                    const x = Number(point?.[0]);
                    const y = Number(point?.[1]);
                    if (!Number.isFinite(x) || !Number.isFinite(y)) {
                        return;
                    }
                    minX = Math.min(minX, x);
                    maxX = Math.max(maxX, x);
                    minY = Math.min(minY, y);
                    maxY = Math.max(maxY, y);
                });
            });
        });

        if (!Number.isFinite(minX) || !Number.isFinite(maxX) || !Number.isFinite(minY) || !Number.isFinite(maxY)) {
            return null;
        }
        if (maxX - minX === 0 || maxY - minY === 0) {
            return null;
        }

        return { minX, maxX, minY, maxY };
    }

    _toMapCoordinates(pixelX, pixelY, width, height, bounds) {
        const xNorm = Math.min(1, Math.max(0, pixelX / width));
        const yNorm = Math.min(1, Math.max(0, pixelY / height));
        const mapX = bounds.minX + xNorm * (bounds.maxX - bounds.minX);
        const mapY = bounds.minY + (1 - yNorm) * (bounds.maxY - bounds.minY);
        return [
            Number(mapX.toFixed(3)),
            Number(mapY.toFixed(3)),
        ];
    }

    _toPixelCoordinates(mapPoint, width, height, bounds) {
        const xNorm = (mapPoint[0] - bounds.minX) / (bounds.maxX - bounds.minX);
        const yNorm = (mapPoint[1] - bounds.minY) / (bounds.maxY - bounds.minY);
        const px = Math.min(width, Math.max(0, xNorm * width));
        const py = Math.min(height, Math.max(0, (1 - yNorm) * height));
        return [px, py];
    }

    _onDrawOverlayClick(event) {
        const overlay = this.shadowRoot?.getElementById("draw-overlay");
        const bounds = this._getMapBounds();
        if (!this._isModelX() || !this._drawEnabled || !overlay || !bounds) {
            return;
        }
        const rect = overlay.getBoundingClientRect();
        const pixelX = event.clientX - rect.left;
        const pixelY = event.clientY - rect.top;
        const mapPoint = this._toMapCoordinates(pixelX, pixelY, rect.width, rect.height, bounds);
        this._drawPoints.push(mapPoint);
        this._drawCursorPoint = mapPoint;
        this._renderDrawOverlay();
        this._updateDrawControls();
    }

    _onDrawOverlayPointerMove(event) {
        const overlay = this.shadowRoot?.getElementById("draw-overlay");
        const bounds = this._getMapBounds();
        if (!this._isModelX() || !this._drawEnabled || !overlay || !bounds || this._drawPoints.length === 0) {
            return;
        }

        const rect = overlay.getBoundingClientRect();
        const pixelX = event.clientX - rect.left;
        const pixelY = event.clientY - rect.top;
        this._drawCursorPoint = this._toMapCoordinates(
            pixelX,
            pixelY,
            rect.width,
            rect.height,
            bounds,
        );
        this._renderDrawOverlay();
    }

    _onDrawOverlayPointerLeave() {
        if (this._drawCursorPoint === null) {
            return;
        }

        this._drawCursorPoint = null;
        this._renderDrawOverlay();
    }

    _renderDrawOverlay() {
        const overlay = this.shadowRoot?.getElementById("draw-overlay");
        if (!overlay) {
            return;
        }

        if (!this._drawEnabled && this._drawPoints.length === 0) {
            overlay.classList.remove("is-enabled");
            overlay.innerHTML = "";
            return;
        }

        const bounds = this._getMapBounds();

        overlay.classList.toggle("is-enabled", this._isModelX() && this._drawEnabled && !!bounds);

        const width = overlay.clientWidth;
        const height = overlay.clientHeight;
        if (!width || !height) {
            return;
        }

        if (!this._isModelX() || !bounds || !this._drawEnabled) {
            overlay.innerHTML = "";
            return;
        }

        const pixelPoints = this._drawPoints.map((point) => this._toPixelCoordinates(point, width, height, bounds));
        const polylinePoints = pixelPoints.map((p) => `${p[0]},${p[1]}`).join(" ");
        const polygonPoints = this._drawPoints.length >= 3 ? polylinePoints : "";
        const previewLine = this._drawCursorPoint && this._drawPoints.length
            ? (() => {
                const [x1, y1] = pixelPoints[pixelPoints.length - 1];
                const [x2, y2] = this._toPixelCoordinates(this._drawCursorPoint, width, height, bounds);
                return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255, 87, 34, 0.7)" stroke-width="2" stroke-dasharray="6 4"></line>`;
            })()
            : "";

        overlay.innerHTML = `
            ${polygonPoints ? `<polygon points="${polygonPoints}" fill="rgba(255, 87, 34, 0.25)" stroke="rgba(255, 87, 34, 0.95)" stroke-width="2"></polygon>` : ""}
            ${polylinePoints ? `<polyline points="${polylinePoints}" fill="none" stroke="rgba(255, 87, 34, 0.95)" stroke-width="2"></polyline>` : ""}
            ${previewLine}
            ${pixelPoints.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="rgba(255, 87, 34, 1)"></circle>`).join("")}
        `;
    }

    _updateDrawControls() {
        const sendBtn = this.shadowRoot?.getElementById("send-area-btn");
        const clearBtn = this.shadowRoot?.getElementById("clear-area-btn");
        const pointsCounter = this.shadowRoot?.getElementById("area-points-counter");
        const mapHint = this.shadowRoot?.getElementById("map-draw-hint");
        const toggleBtn = this.shadowRoot?.getElementById("toggle-draw-btn");
        const drawControls = this.shadowRoot?.getElementById("draw-controls");
        const zoneButtonsContainer = this.shadowRoot?.getElementById("zone-buttons");
        const mowerBlock = this.shadowRoot?.querySelector(".mower-block");
        const supportsDrawing = this._isModelX();
        const hasMap = supportsDrawing && (this._drawEnabled || this._drawPoints.length > 0)
            ? !!this._getMapBounds()
            : !!this._cameraEntity;
        const showDrawControls = supportsDrawing && hasMap && this._drawEnabled;

        if (sendBtn) {
            sendBtn.disabled = !supportsDrawing || !hasMap || this._drawPoints.length < 3;
        }
        if (clearBtn) {
            clearBtn.disabled = !supportsDrawing || this._drawPoints.length === 0;
        }
        if (drawControls) {
            drawControls.hidden = !showDrawControls;
            drawControls.classList.toggle("is-hidden", !showDrawControls);
        }
        if (mowerBlock) {
            const hasVisibleZones = !!zoneButtonsContainer && !zoneButtonsContainer.hidden;
            mowerBlock.classList.toggle("compact-state", !hasVisibleZones && !showDrawControls);
        }
        if (pointsCounter) {
            pointsCounter.textContent = `${_t("area_points", this._hass)}: ${this._drawPoints.length}`;
        }
        if (mapHint) {
            mapHint.textContent = hasMap
                ? (this._drawEnabled ? _t("area_draw_hint", this._hass) : _t("enable_drawing", this._hass))
                : _t("area_missing_map", this._hass);
        }
        if (toggleBtn) {
            toggleBtn.hidden = !supportsDrawing;
            toggleBtn.disabled = !supportsDrawing || !hasMap;
            toggleBtn.classList.toggle("is-active", supportsDrawing && this._drawEnabled && hasMap);
            toggleBtn.innerHTML = `
                ${this._showIcons ? `<ha-icon icon="${this._drawEnabled ? "mdi:pencil-off" : "mdi:pencil"}"></ha-icon>` : ""}
                ${this._showText ? _t("mow_area", this._hass) : ""}
            `;
        }
    }

    _toggleDrawing() {
        if (!this._isModelX() || !this._getMapBounds()) {
            return;
        }
        this._drawEnabled = !this._drawEnabled;
        if (!this._drawEnabled) {
            this._drawCursorPoint = null;
        }
        this._ensureDrawOverlay();
        this._renderDrawOverlay();
        this._updateDrawControls();
    }

    _ensureDrawOverlay() {
        const mapWrapper = this.shadowRoot?.querySelector(".map-wrapper");
        if (!mapWrapper || this.shadowRoot?.getElementById("draw-overlay")) {
            return;
        }

        if (!this._isModelX() || (!this._drawEnabled && this._drawPoints.length === 0)) {
            return;
        }

        const mapOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        mapOverlay.setAttribute("id", "draw-overlay");
        mapOverlay.setAttribute("class", "map-overlay");
        mapOverlay.addEventListener("click", (event) => this._onDrawOverlayClick(event));
        mapOverlay.addEventListener("pointermove", (event) => this._onDrawOverlayPointerMove(event));
        mapOverlay.addEventListener("pointerleave", () => this._onDrawOverlayPointerLeave());
        mapWrapper.appendChild(mapOverlay);

        if (this._overlayResizeObserver) {
            this._overlayResizeObserver.disconnect();
        }
        this._overlayResizeObserver = new ResizeObserver(() => this._renderDrawOverlay());
        this._overlayResizeObserver.observe(mapWrapper);
    }

    _clearDrawPoints() {
        this._drawPoints = [];
        this._drawCursorPoint = null;
        this._renderDrawOverlay();
        this._updateDrawControls();
    }

    _callMowerService(action) {
        if (!this._hass || !this._entity) return;
        let service = "";
        let data = { entity_id: this._entity };
        switch (action) {
            case "start":
                this._hass.callService("sunseeker", "start_mowing", {
                    entity_id: this._entity,
                    zones: this._selectedZones
                });
                return;
            case "stop":
                this._hass.callService("sunseeker", "stop_mowing", {
                    entity_id: this._entity,
                });
                return;
            case "end_task":
                if (!this._isModelX()) {
                    return;
                }
                this._hass.callService("sunseeker", "stop_task", {
                    entity_id: this._entity,
                });
                return;
            case "send_area":
                if (!this._isModelX()) {
                    return;
                }
                if (this._drawPoints.length < 3) {
                    return;
                }
                this._hass.callService("sunseeker", "start_mowing_selected_area", {
                    entity_id: this._entity,
                    points: this._drawPoints,
                });
                return;
            case "pause":
                service = "pause";
                break;
            case "home":
                service = "dock";
                break;
            case "border":
                if (!this._showBorder || !this._borderButtonEntity) {
                    return;
                }
                this._hass.callService("button", "press", {
                    entity_id: this._borderButtonEntity,
                });
                return;
            default:
                return;
        }
        this._hass.callService("lawn_mower", service, data);
    }

    async _render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --ha-card-bg: var(--card-background-color);
                    --ha-card-border: var(--divider-color);
                    --ha-card-header: var(--primary-color);
                    --ha-card-text: var(--primary-text-color);
                    --ha-card-subtle: var(--secondary-background-color, #222);
                    --ha-card-accent: var(--primary-color);
                }
                .card-container {
                    border: 2px solid var(--ha-card-border);
                    border-radius: 12px;
                    background: var(--ha-card-bg);
                    box-shadow: 0 2px 6px rgba(25, 118, 210, 0.08);
                    margin: 0 auto;
                    padding: 12px;
                }
                .card-container.no-header {
                    padding-top: 0;
                }
                .card-container.no-header.has-map {
                    padding-top: 12px;
                }
                .header {
                    font-size: 1.3em;
                    font-weight: bold;
                    margin-bottom: 2px;
                    text-align: center;
                    color: var(--ha-card-text);
                }
                .mower-block {
                    text-align: center;
                    margin-bottom: 0;
                    border: none;
                    border-radius: 12px;
                    padding: 8px;
                    background: var(--ha-card-bg);
                    box-shadow: none;
                    margin-left: auto;
                    margin-right: auto;
                }
                .zone-buttons {
                    margin-bottom: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 6px;
                }
                .zone-buttons.is-hidden,
                .zone-buttons[hidden] {
                    display: none !important;
                    margin: 0;
                }
                .card-container.no-map .zone-buttons {
                    margin-top: 0;
                }
                .zone-btn {
                    padding: 4px 16px;
                    border-radius: 12px;
                    border: 1px solid var(--ha-card-border);
                    background: var(--ha-card-subtle);
                    color: var(--ha-card-text);
                    cursor: pointer;
                    transition: background 0.2s, color 0.2s;
                }
                .zone-btn.selected {
                    background: var(--ha-card-accent);
                    color: var(--ha-card-bg);
                    border-color: var(--ha-card-accent);
                }
                .zone-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .action-buttons {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
                    gap: 8px;
                    margin-top: 0;
                    width: 100%;
                }
                .action-buttons.is-five-actions {
                    grid-template-columns: repeat(5, minmax(0, 1fr));
                }
                .action-buttons.is-five-actions .action-btn {
                    padding: 7px 6px;
                    font-size: 0.85em;
                    gap: 4px;
                }
                .card-container.has-map .action-buttons {
                    margin-top: 12px;
                }
                .card-container.map-left .action-buttons,
                .card-container.map-right .action-buttons {
                    margin-top: 0;
                }
                .action-btn {
                    width: 100%;
                    padding: 8px 10px;
                    border-radius: 12px;
                    border: 1px solid var(--ha-card-border);
                    background: var(--ha-card-subtle);
                    color: var(--ha-card-text);
                    cursor: pointer;
                    transition: background 0.2s, color 0.2s;
                    font-size: 0.95em;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }
                .action-btn:active {
                    background: var(--ha-card-accent);
                    color: var(--ha-card-bg);
                    border-color: var(--ha-card-accent);
                }
                .map-wrapper {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                }
                .content-body {
                    display: block;
                }
                .card-container.map-left .content-body,
                .card-container.map-right .content-body {
                    display: grid;
                    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
                    gap: 12px;
                    align-items: start;
                }
                .card-container.map-left .mower-block,
                .card-container.map-right .mower-block {
                    padding-top: 0;
                }
                .content-body > .map-wrapper,
                .content-body > .mower-block {
                    min-width: 0;
                }
                @media (max-width: 900px) {
                    .card-container.map-left .content-body,
                    .card-container.map-right .content-body {
                        display: block;
                    }
                }
                .map-overlay {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    cursor: default;
                    touch-action: none;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                }
                .map-overlay.is-enabled {
                    cursor: crosshair;
                    opacity: 1;
                    pointer-events: auto;
                }
                .draw-controls {
                    margin-top: 10px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 8px;
                    align-items: center;
                }
                .draw-controls.is-hidden,
                .draw-controls[hidden] {
                    display: none !important;
                }
                .draw-info {
                    text-align: left;
                    font-size: 0.85em;
                    color: var(--ha-card-text);
                    opacity: 0.9;
                }
                .action-btn.is-active {
                    background: var(--ha-card-accent);
                    color: var(--ha-card-bg);
                    border-color: var(--ha-card-accent);
                }
                .state-row {
                    margin-top: 10px;
                    margin-bottom: 8px;
                    font-weight: bold;
                    color: var(--ha-card-text);
                }
                .mower-block.compact-state {
                    padding-bottom: 0;
                }
                .mower-block.compact-state .state-row {
                    margin-bottom: 0;
                }
            </style>
            <div class="card-container" id="card-content"></div>
        `;
        const cardContent = this.shadowRoot.getElementById("card-content");
        const hasConfiguredMap = !!(this._cameraEntity && typeof this._cameraEntity === "string" && this._cameraEntity.trim() !== "");
        cardContent.classList.toggle("no-header", !this._showHeader);
        cardContent.classList.toggle("has-map", hasConfiguredMap);
        cardContent.classList.toggle("no-map", !hasConfiguredMap);
        cardContent.classList.toggle("map-left", hasConfiguredMap && this._mapPosition === "left");
        cardContent.classList.toggle("map-right", hasConfiguredMap && this._mapPosition === "right");
        cardContent.innerHTML = "";

        // Add header if enabled
        if (this._showHeader) {
            const headerDiv = document.createElement("div");
            headerDiv.className = "header";
            headerDiv.textContent = this._header;
            cardContent.appendChild(headerDiv);
        }

        const contentBody = document.createElement("div");
        contentBody.className = "content-body";
        cardContent.appendChild(contentBody);

        // Only add picture-entity card if camera entity is set and not empty
        let pictureCard = null;
        let mapWrapper = null;
        if (this._cameraEntity && typeof this._cameraEntity === "string" && this._cameraEntity.trim() !== "") {
            const cardConfig = {
                type: "picture-entity",
                entity: this._cameraEntity,
                show_name: false,
                show_state: false,
                camera_view: "live",
            };

            if (!window.cardHelpers) {
                window.cardHelpers = await window.loadCardHelpers();
            }

            if (window.cardHelpers && window.cardHelpers.createCardElement) {
                pictureCard = await window.cardHelpers.createCardElement(cardConfig);
            } else if (window.createCardElement) {
                pictureCard = window.createCardElement(cardConfig);
            } else {
                pictureCard = document.createElement("hui-picture-entity-card");
                if (pictureCard.setConfig) {
                    pictureCard.setConfig(cardConfig);
                }
            }
            pictureCard.hass = this._hass;

            mapWrapper = document.createElement("div");
            mapWrapper.className = "map-wrapper";
            mapWrapper.appendChild(pictureCard);

            this._ensureDrawOverlay();
        }

        // Add mower controls below the picture card
        const stateLabel = _t("state", this._hass);
        const stateValue = _stateValue(this._mowerState, this._hass);
        const actionButtonsClass = this._showBorder && !this._isModelX()
            ? "action-buttons is-five-actions"
            : "action-buttons";

        const mowerBlock = document.createElement("div");
        mowerBlock.className = "mower-block";
        mowerBlock.innerHTML = `
            <div class="${actionButtonsClass}">
                <button class="action-btn" id="start-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:play"></ha-icon>' : ''}
                    ${this._showText ? _t("start", this._hass) : ''}
                </button>
                <button class="action-btn" id="pause-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:pause"></ha-icon>' : ''}
                    ${this._showText ? _t("pause", this._hass) : ''}
                </button>
                <button class="action-btn" id="stop-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:stop"></ha-icon>' : ''}
                    ${this._showText ? _t("stop", this._hass) : ''}
                </button>
                <button class="action-btn" id="home-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:home-import-outline"></ha-icon>' : ''}
                    ${this._showText ? _t("home", this._hass) : ''}
                </button>
                ${this._showBorder ? `
                <button class="action-btn" id="border-btn" ${this._borderButtonEntity ? "" : "disabled"}>
                    ${this._showIcons ? '<ha-icon icon="mdi:border-outside"></ha-icon>' : ''}
                    ${this._showText ? _t("border", this._hass) : ''}
                </button>
                ` : ""}
                ${this._isModelX() ? `
                <button class="action-btn" id="end-task-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:flag-checkered"></ha-icon>' : ''}
                    ${this._showText ? _t("end_task", this._hass) : ''}
                </button>
                <button class="action-btn" id="toggle-draw-btn"></button>
                ` : ""}
            </div>


            <div class="state-row" id="state-row">
                ${stateLabel}: ${stateValue}
            </div>
            <div class="draw-controls" id="draw-controls">
                <button class="action-btn" id="clear-area-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:eraser"></ha-icon>' : ''}
                    ${this._showText ? _t("clear_area", this._hass) : ''}
                </button>
                <button class="action-btn" id="send-area-btn">
                    ${this._showIcons ? '<ha-icon icon="mdi:send"></ha-icon>' : ''}
                    ${this._showText ? _t("mow_area", this._hass) : ''}
                </button>
                <div class="draw-info">
                    <div id="area-points-counter"></div>
                    <div id="map-draw-hint"></div>
                </div>
            </div>
            <div class="zone-buttons" id="zone-buttons">
                ${this._zones
                    .filter(zone => zone.toLowerCase() !== "global")
                    .map(
                        zone => `
                        <button
                            type="button"
                            class="zone-btn${this._selectedZones.includes(zone) ? " selected" : ""}"
                            id="zone-btn-${zone.replace(/[^a-zA-Z0-9_-]/g, "_")}"
                        >${zone}</button>
                    `
                    ).join("")}
            </div>
        `;
        if (mapWrapper && this._mapPosition === "right") {
            contentBody.appendChild(mowerBlock);
            contentBody.appendChild(mapWrapper);
        } else {
            if (mapWrapper) {
                contentBody.appendChild(mapWrapper);
            }
            contentBody.appendChild(mowerBlock);
        }

        // Attach event handlers for action buttons
        mowerBlock.querySelector("#start-btn").onclick = () => this._callMowerService("start");
        mowerBlock.querySelector("#pause-btn").onclick = () => this._callMowerService("pause");
        mowerBlock.querySelector("#stop-btn").onclick = () => this._callMowerService("stop");
        mowerBlock.querySelector("#home-btn").onclick = () => this._callMowerService("home");
        const borderBtn = mowerBlock.querySelector("#border-btn");
        if (borderBtn) {
            borderBtn.onclick = () => this._callMowerService("border");
        }
        const endTaskBtn = mowerBlock.querySelector("#end-task-btn");
        if (endTaskBtn) {
            endTaskBtn.onclick = () => this._callMowerService("end_task");
        }
        const toggleDrawBtn = mowerBlock.querySelector("#toggle-draw-btn");
        if (toggleDrawBtn) {
            toggleDrawBtn.onclick = () => this._toggleDrawing();
        }
        const sendAreaBtn = mowerBlock.querySelector("#send-area-btn");
        if (sendAreaBtn) {
            sendAreaBtn.onclick = () => this._callMowerService("send_area");
        }
        const clearAreaBtn = mowerBlock.querySelector("#clear-area-btn");
        if (clearAreaBtn) {
            clearAreaBtn.onclick = () => this._clearDrawPoints();
        }

        this._updateDrawControls();
        this._ensureDrawOverlay();
        requestAnimationFrame(() => this._renderDrawOverlay());

        // Attach event handlers for zone buttons
        this._updateZoneButtons();
    }
    _updateZoneButtons() {
        // Update zone button selection and handlers
        if (!this.shadowRoot) return;
        const zoneButtonsContainer = this.shadowRoot.getElementById("zone-buttons");
        const mowerBlock = this.shadowRoot.querySelector(".mower-block");
        const filteredZones = this._zones.filter(
            zone => zone.toLowerCase() !== "global"
        );
        const hasVisibleZones = filteredZones.length > 0;

        if (zoneButtonsContainer) {
            zoneButtonsContainer.hidden = !hasVisibleZones;
            zoneButtonsContainer.classList.toggle("is-hidden", !hasVisibleZones);
            zoneButtonsContainer.innerHTML = filteredZones.map((zone) => {
                const selectedClass = this._selectedZones.includes(zone) ? " selected" : "";
                const safeId = zone.replace(/[^a-zA-Z0-9_-]/g, "_");
                return `
                    <button
                        type="button"
                        class="zone-btn${selectedClass}"
                        id="zone-btn-${safeId}"
                    >${zone}</button>
                `;
            }).join("");
        }

        const hasMap = !!this._getMapBounds();
        const showDrawControls = this._isModelX() && hasMap && this._drawEnabled;
        if (mowerBlock) {
            mowerBlock.classList.toggle("compact-state", !hasVisibleZones && !showDrawControls);
        }

        filteredZones.forEach(zone => {
            const btn = this.shadowRoot.getElementById(`zone-btn-${zone.replace(/[^a-zA-Z0-9_-]/g, "_")}`);
            if (btn) {
                btn.classList.toggle("selected", this._selectedZones.includes(zone));
                btn.onclick = () => this._toggleZone(zone);
            }
        });
    }

    _updateDom() {
        // Only update state row and zone buttons
        const stateRow = this.shadowRoot.getElementById("state-row");
        const borderBtn = this.shadowRoot.getElementById("border-btn");
        if (stateRow) {
            stateRow.textContent = `${_t("state", this._hass)}: ${_stateValue(this._mowerState, this._hass)}`;
        }
        if (borderBtn) {
            borderBtn.disabled = !this._borderButtonEntity;
        }
        this._updateDrawControls();
        this._ensureDrawOverlay();
        this._renderDrawOverlay();
        this._updateZoneButtons();
    }
}

// GUI editor for Lovelace configuration with dropdowns and translations
class SunseekerMowerControlCardEditor extends HTMLElement {
    setConfig(config) {
        this._config = config;
        this.render();
        this._initialized = true;
    }

    set hass(hass) {
        this._hass = hass;
        if (this._initialized) {
            this._updateDom(); // Only update DOM, not full render
        }
        //this.render();
    }

    get _entity() {
        return this._config?.entity || "";
    }
    get _zoneEntity() {
        return this._config?.zone_entity || "";
    }
    get _cameraEntity() {
        return this._config?.camera_entity || "";
    }
    get _mapPosition() {
        return this._config?.map_position === "left" || this._config?.map_position === "right"
            ? this._config.map_position
            : "top";
    }
    get _header() {
        return this._config?.header || "";
    }
    get _model() {
        return (this._config?.model || "x").toLowerCase() === "v" ? "v" : "x";
    }
    get _showHeader() {
        return this._config?.show_header !== false;
    }
    get _showIcons() {
        return this._config?.show_icons !== false;
    }
    get _showText() {
        return this._config?.show_text !== false;
    }
    get _showBorder() {
        return this._config?.show_border === true;
    }

    _extractHintTokens(value) {
        if (!value || typeof value !== "string") {
            return [];
        }
        return value
            .toLowerCase()
            .split(/[^a-z0-9]+/)
            .filter((token) => token.length >= 4);
    }

    _findBorderButtonEntity() {
        if (!this._hass) {
            return "";
        }

        const allStates = this._hass.states || {};
        const candidates = Object.entries(allStates)
            .filter(([entityId]) => entityId.startsWith("button."))
            .map(([entityId, stateObj]) => ({ entityId, stateObj }));

        if (!candidates.length) {
            return "";
        }

        const borderTokens = [
            "cut_border",
            "klip_kant",
            "kanten",
            "reunaleikkaus",
            "couper_les_bordures",
            "kraw",
            "border",
        ];

        const mowerObjectId = String(this._entity || "").split(".")[1] || "";
        const mowerObjectTokens = this._extractHintTokens(mowerObjectId);

        const hintTokens = [
            ...this._extractHintTokens(this._entity),
            ...this._extractHintTokens(this._zoneEntity),
            ...this._extractHintTokens(this._cameraEntity),
            ...mowerObjectTokens,
        ];

        let bestCandidate = null;
        let bestScore = -1;

        candidates.forEach((candidate) => {
            const entityIdLower = candidate.entityId.toLowerCase();
            const friendlyName = String(candidate.stateObj?.attributes?.friendly_name || "").toLowerCase();
            const translationKey = String(candidate.stateObj?.attributes?.translation_key || "").toLowerCase();
            const uniqueId = String(candidate.stateObj?.attributes?.unique_id || "").toLowerCase();
            let score = 0;
            let matchedBorderTokenCount = 0;

            if (entityIdLower.includes("sunseeker")) {
                score += 2;
            }

            if (translationKey === "sunseeker_border") {
                score += 12;
            }

            borderTokens.forEach((token) => {
                if (
                    entityIdLower.includes(token)
                    || friendlyName.includes(token)
                    || translationKey.includes(token)
                    || uniqueId.includes(token)
                ) {
                    matchedBorderTokenCount += 1;
                    score += 4;
                }
            });

            const hasBorderSignal = translationKey === "sunseeker_border" || matchedBorderTokenCount > 0;
            if (!hasBorderSignal) {
                return;
            }

            const mowerObjectIdLower = mowerObjectId.toLowerCase();
            const hasMowerIdMatch = !!mowerObjectIdLower && (
                entityIdLower.includes(mowerObjectIdLower)
                || friendlyName.includes(mowerObjectIdLower)
                || translationKey.includes(mowerObjectIdLower)
                || uniqueId.includes(mowerObjectIdLower)
            );
            if (!hasMowerIdMatch) {
                return;
            }

            if (mowerObjectId && entityIdLower.includes(mowerObjectId.toLowerCase())) {
                score += 6;
            }

            hintTokens.forEach((token) => {
                if (
                    entityIdLower.includes(token)
                    || friendlyName.includes(token)
                    || translationKey.includes(token)
                ) {
                    score += 2;
                }
            });

            if (score > bestScore) {
                bestScore = score;
                bestCandidate = candidate;
            }
        });

        return bestScore > 0 ? (bestCandidate?.entityId || "") : "";
    }

    async render() {
        if (!this._hass) return;
                const borderActionEntity = this._findBorderButtonEntity();
                const hasBorderActionButton = !!borderActionEntity;
        if (!customElements.get("ha-entity-picker")) {
          await customElements.get("hui-entities-card").getConfigElement();
        }


        // Dynamically import ha-entity-picker if not loaded
        if (!customElements.get("ha-entity-picker")) {
            await import(
                "/frontend_latest/ha-entity-picker.js"
            ).catch(() => {});
        }
        this.innerHTML = `
            <div>
                <label for="entity">${_t("mower_entity", this._hass)}</label>
                <span id="picker-mower"></span>
                <br />
                <label for="zone_entity">${_t("zone_entity", this._hass)}</label>
                <span id="picker-zone"></span>
                <br />
                <label for="camera_entity">${_t("camera_entity", this._hass)}</label>
                <span id="picker-camera"></span>
                <br />
                <label for="map_position">${_t("map_position", this._hass)}</label>
                <select id="map_position">
                    <option value="top" ${this._mapPosition === "top" ? "selected" : ""}>${_t("map_position_top", this._hass)}</option>
                    <option value="left" ${this._mapPosition === "left" ? "selected" : ""}>${_t("map_position_left", this._hass)}</option>
                    <option value="right" ${this._mapPosition === "right" ? "selected" : ""}>${_t("map_position_right", this._hass)}</option>
                </select>
                <br />
                <label for="model">${_t("model_label", this._hass)}</label>
                <select id="model">
                    <option value="x" ${this._model === "x" ? "selected" : ""}>${_t("model_x", this._hass)}</option>
                    <option value="v" ${this._model === "v" ? "selected" : ""}>${_t("model_v", this._hass)}</option>
                </select>
                <br />
                <label for="header">${_t("header_label", this._hass)}</label>
                <input
                    type="text"
                    id="header"
                    value="${this._header}"
                    placeholder="${_t("header_label", this._hass)}"
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        id="show_header"
                        ${this._showHeader ? "checked" : ""}
                    />
                    ${_t("show_header", this._hass)}
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        id="show_icons"
                        ${this._showIcons ? "checked" : ""}
                    />
                    ${_t("show_icons", this._hass)}
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        id="show_text"
                        ${this._showText ? "checked" : ""}
                    />
                    ${_t("show_text", this._hass)}
                </label>
                <br />
                ${hasBorderActionButton ? `
                <label>
                    <input
                        type="checkbox"
                        id="show_border"
                        ${this._showBorder ? "checked" : ""}
                    />
                    ${_t("show_border", this._hass)}
                </label>
                <div>${_t("border_entity", this._hass)}: ${borderActionEntity}</div>
                <br />
                ` : ""}

                <br />
                Version 1.0.14
            </div>
        `;

        // Mower picker
        const pickerMower = document.createElement("ha-entity-picker");
        pickerMower.hass = this._hass;
        pickerMower.value = this._entity;
        pickerMower.setAttribute("data-config-value", "entity");
        pickerMower.setAttribute("domain-filter", "lawn_mower");
        pickerMower.setAttribute("include-domains", "lawn_mower");
        pickerMower.includeDomains = ["lawn_mower"];
        pickerMower.addEventListener("value-changed", (ev) => {
            this._config = { ...this._config, entity: ev.detail.value };
            this._fireConfigChanged();
        });
        this.querySelector("#picker-mower").appendChild(pickerMower);

        // Zone picker
        const pickerZone = document.createElement("ha-entity-picker");
        pickerZone.hass = this._hass;
        pickerZone.value = this._zoneEntity;
        pickerZone.setAttribute("data-config-value", "zone_entity");
        pickerZone.setAttribute("domain-filter", "select");
        pickerZone.setAttribute("include-domains", "select");
        pickerZone.includeDomains = ["select"];
        pickerZone.addEventListener("value-changed", (ev) => {
            this._config = { ...this._config, zone_entity: ev.detail.value };
            this._fireConfigChanged();
        });
        this.querySelector("#picker-zone").appendChild(pickerZone);

        // Camera picker
        const pickerCamera = document.createElement("ha-entity-picker");
        pickerCamera.hass = this._hass;
        pickerCamera.value = this._cameraEntity;
        pickerCamera.setAttribute("data-config-value", "camera_entity");
        pickerCamera.setAttribute("domain-filter", "camera");
        pickerCamera.setAttribute("include-domains", "camera");
        pickerCamera.includeDomains = ["camera"];
        pickerCamera.addEventListener("value-changed", (ev) => {
            this._config = { ...this._config, camera_entity: ev.detail.value };
            this._fireConfigChanged();
        });
        this.querySelector("#picker-camera").appendChild(pickerCamera);

        // Other input handlers
        this.querySelector("#header").onchange = (ev) => {
            this._config = { ...this._config, header: ev.target.value };
            this._fireConfigChanged();
        };
        this.querySelector("#show_header").onchange = (ev) => {
            this._config = { ...this._config, show_header: ev.target.checked };
            this._fireConfigChanged();
        };
        this.querySelector("#show_icons").onchange = (ev) => {
            this._config = { ...this._config, show_icons: ev.target.checked };
            this._fireConfigChanged();
        };
        this.querySelector("#show_text").onchange = (ev) => {
            this._config = { ...this._config, show_text: ev.target.checked };
            this._fireConfigChanged();
        };
        this.querySelector("#map_position").onchange = (ev) => {
            const nextMapPosition = ev.target.value === "left" || ev.target.value === "right" ? ev.target.value : "top";
            this._config = { ...this._config, map_position: nextMapPosition };
            this._fireConfigChanged();
        };
        const showBorderInput = this.querySelector("#show_border");
        if (showBorderInput) {
            showBorderInput.onchange = (ev) => {
                this._config = { ...this._config, show_border: ev.target.checked };
                this._fireConfigChanged();
            };
        }
        this.querySelector("#model").onchange = (ev) => {
            this._config = { ...this._config, model: ev.target.value };
            this._fireConfigChanged();
        };
    }

    _fireConfigChanged() {
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: { config: this._config },
                bubbles: true,
                composed: true,
            })
        );
    }
}

customElements.define("sunseeker-mower-control-card", SunseekerMowerControlCard);
customElements.define("sunseeker-mower-control-card-editor", SunseekerMowerControlCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "sunseeker-mower-control-card",
    name: "Sunseeker Mower Control Card",
    preview: false,
    description: "Custom card to allow cutting special zones",
});