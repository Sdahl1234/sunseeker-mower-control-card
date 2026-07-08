# sunseeker-mower-control-card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)

A custom Lovelace card for the [Sunseeker](https://www.home-assistant.io/integrations/sunseeker/) integration that puts full mower control, a live map view, zone selection, and a freehand area-drawing tool all in one card.

<img width="1006" height="805" alt="image" src="https://github.com/user-attachments/assets/ce5fb40d-d44e-4d3f-9b10-9008bf59b478" />

---

## Features

- **Mower action buttons** — Start, Pause, Stop, and Home (dock) controls that call the appropriate `lawn_mower` or `sunseeker` services. An optional **Border** button can also be shown and triggers the integration's Border button entity via `button.press`. Each button displays a Material Design icon, a text label, or both, configurable per card.
- **Live map** — embeds a `picture-entity` card showing a live camera or map image from the mower. Automatically discovers the best matching `image.*` entity with `map_data` if no camera entity is explicitly configured. Map placement can be configured as top, left, or right.
- **Zone selection** — zone buttons are auto-populated from the zone select entity. Toggle individual zones to target specific areas; the selected zones are passed to `sunseeker.start_mowing`.
- **Freehand area drawing** (Model X only) — an SVG overlay on the map lets you tap or click to place polygon vertices. A dashed preview line tracks the cursor as you draw. Once three or more points are placed, *Mow area* sends the polygon to the mower via `sunseeker.start_mowing_selected_area`. *Clear area* resets the polygon at any time.
- **End task button** (Model X only) — calls `sunseeker.stop_task` to terminate the current mowing task.
- **Live state display** — shows the current mower state (e.g. Mowing, Charging, Standby, Stuck) translated into the dashboard language.
- **Model selection** — choose between *Model X* (enables drawing and End task) and *Model V* (standard controls only).
- **Configurable button appearance** — icons and text labels can each be toggled on/off independently.
- **Localised UI** — all button labels and state values are translated for English, Danish, Finnish, French, German, and Polish, following the user's Home Assistant language setting.
- **Visual editor** — full support for the Lovelace UI editor; no YAML required.

---

## Requirements

- Home Assistant with the **Sunseeker** integration configured.
- A `lawn_mower` entity for the mower (e.g. `lawn_mower.sunseeker`).
- A `select` entity exposing the zone list (e.g. `select.sunseeker_zone`).
- Optionally, a `camera` or `image` entity for the live map view (e.g. `image.sunseeker_mower_map`).

---

## Installation

### HACS (recommended)

1. Open **HACS** in your Home Assistant instance.
2. Go to **Frontend** and click **+ Explore & Download Repositories**.
3. Search for **Sunseeker Mower Control Card** and click **Download**.
4. Reload your browser or the Lovelace resources.

### Manual

1. Copy `sunseeker-mower-control-card.js` into your `/config/www/sunseeker-mower-control-card/` directory (or any subfolder of `www/`).
2. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/sunseeker-mower-control-card/sunseeker-mower-control-card.js`
   - Resource type: **JavaScript module**
3. Reload your browser or the Lovelace resources.

---

## Configuration

| Key | Type | Default | Description |
|---|---|---|---|
| `entity` | `string` | **required** | Entity ID of the Sunseeker lawn mower (e.g. `lawn_mower.sunseeker`). |
| `zone_entity` | `string` | — | Entity ID of the zone select entity (e.g. `select.sunseeker_zone`). Used to populate zone buttons. |
| `camera_entity` | `string` | — | Entity ID of the camera or image entity for the map view (e.g. `image.sunseeker_mower_map`). Auto-discovered if omitted. |
| `map_position` | `string` | `"top"` | Position of the map relative to controls: `"top"`, `"left"`, or `"right"`. |
| `model` | `string` | `"x"` | Mower model. `"x"` enables the area-drawing tool and End task button; `"v"` shows standard controls only. |
| `header` | `string` | `"Mower Control"` | Card header title (localised default used when omitted). |
| `show_header` | `boolean` | `true` | Show or hide the card header. |
| `show_icons` | `boolean` | `true` | Show Material Design icons on action buttons. |
| `show_text` | `boolean` | `true` | Show text labels on action buttons. |
| `show_border` | `boolean` | `false` | Show or hide the optional Border action button (when a matching `button.*` Border entity exists). |

### Minimal YAML example

```yaml
type: custom:sunseeker-mower-control-card
entity: lawn_mower.sunseeker
```

### Full YAML example

```yaml
type: custom:sunseeker-mower-control-card
entity: lawn_mower.sunseeker
zone_entity: select.sunseeker_zone
camera_entity: image.sunseeker_mower_map
map_position: top
model: x
header: Mower Control
show_header: true
show_icons: true
show_text: true
show_border: false
```

---

## Version history

| Version | Notes |
|---|---|
| 1.0.13 | Added map position setting (`map_position`: top/left/right). |
| 1.0.12 | Added optional Border button with editor toggle (`show_border`, default off) and layout spacing fixes for header/map combinations and zone/state spacing behavior. |
| 1.0.11 | Added Finnish and Polish language |
| 1.0.10 | release |

