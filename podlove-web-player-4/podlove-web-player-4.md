# Podlove Web Player 4

## Agenda

- Über mich
- Zeitsprung
- Podcasts im Browser
- Die Zustandsmaschine
- Visual Design
- Features
    - Einfache Integration
    - Dynamisches Theming & Konfiguration
    - Dynamische Konfiguration
    - Audio Navigation
    - Embedding & Sharing
    - Multilingual
    - Entwickler API
- Upcoming
    - Podlove Konfigurator
    - Transkriptionen
    - HLS Live Streaming
    - Tracking
    - Subscribe Button Integration

## Über mich

## Podcasts im Browser

- Podcasts werden in Apps konsumiert, warum ein Web Player?
- Reinhören, Sharing, Live Streaming, Tech Demo
- Anforderungen
    - Embedding
    - Schnelle Navigation / Orientierung

## Visual Design
<!-- Gezeichneter Player -->
- Konzept Kernfunktionen
- Konzept Zeitleiste
- Konzept Kapitel

## Die Zustandsmaschine
<!-- Visualisierung: Redux store -->

- Kern Herausforderung: Abbildung des Zustands des Players in Beziehung zur Podcast Episode
- Metadaten in relation zur aktuellen Abspielzeit:
    - Chapters
    - Transkripte
- Visuelle Elemente in Relation zu Abspielzustand:
    - Play/Pause
    - Stepper Controls, Chapter Controls
- Visuelle Repräsentierung von Modifikatoren:
    - Volume
    - Rate

- Plattform die für zukünftige Features mit skaliert
    - Entkoppelung von Logik

- Verwendete Technologien:
    - Basis zentraler immutable UI store (Redux)
    - Data rendering (VueJS)

## Features

### Einfache Integration
<!-- Bsp. Integration Code -->
<!-- Player der resized in break points -->

- Dynamische Vergrößerung Breite
- Dynamische Vergrößerung Höhe

### Dynamische Theming
<!-- Player mit Themes von Metaebenen Podcasts (dynamisch) -->

### Dynamische Komponenten
<!-- Player mit Chapters  -->

### Audio Navigation
<!-- Demo Timeline -->
- Chapters in Timeline
- Gehörte Bereiche
- Gebufferte Bereiche
- Ghost Mode
- Ghost Mode Chapters

### Embedding & Sharing
<!-- Demo Sharing -->
- Share Show, Episode, Chapter, Timestamp

<!-- Demo Embedding -->
- Konfiguration
- Embedding in unterschiedlichen Auflösungen
- Zukünftig noch mehr Varianten zum embedden

### Multilingual
<!-- Player Demo Ändern von Sprachen -->
- Erklärung wie fallbacks funktionieren

### Entwickler API
<!-- Dokumentation -->
- Erläuterung wie Store verwendet werden kann

## Upcoming

### Podlove Konfigurator
<!-- Demo Konfigurator Podlove -->

### Konzept Transkriptionen
<!-- Preview/Screenshot -->

### Weiteres
- HLS Live Streaming
- Tracking Hörverhalten
- Subscribe Button Integration
