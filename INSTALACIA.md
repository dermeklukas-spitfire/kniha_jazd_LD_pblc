# 📱 Kniha Jázd - Návod na inštaláciu PWA

## Čo je to PWA (Progressive Web App)?
PWA je webová aplikácia, ktorá sa správa ako natívna mobilná aplikácia. Netreba ju inštalovať cez App Store alebo Google Play, funguje offline a dáta sa ukladajú len lokálne v tvojom zariadení.

---

## 🍎 INŠTALÁCIA NA iPHONE (iOS)

### Krok 1: Nahraj súbory na web
Najjednoduchší spôsob:
1. Otvor [https://netlify.com](https://netlify.com) (alebo GitHub Pages, Vercel...)
2. Vytvor účet zadarmo
3. Nahraj všetky 3 súbory:
   - `kniha_jazd_pwa.html`
   - `manifest.json`
   - `service-worker.js`
4. Získaš URL adresu (napr. `https://tvoja-kniha-jazd.netlify.app`)

### Krok 2: Otvor v Safari
- Na iPhone MUSÍŠ použiť Safari (Chrome/Firefox nepodporujú PWA na iOS)
- Otvor URL adresu z kroku 1

### Krok 3: Pridaj na plochu
1. Klikni na ikonu **Zdieľať** (štvorec so šípkou hore) dole uprostred
2. Scrolluj dole a vyber **"Pridať na plochu"** (Add to Home Screen)
3. Uprav názov ak chceš (napr. "Kniha Jázd")
4. Klikni **Pridať**

### Hotovo! 🎉
- Ikona sa objaví na ploche ako normálna aplikácia
- Otvorí sa na celú obrazovku bez Safari panela
- Funguje offline
- Dáta sú len v tvojom telefóne

---

## 🤖 INŠTALÁCIA NA ANDROIDE

### Krok 1: Nahraj súbory na web
Rovnako ako pri iPhone - použiješ:
- Netlify / Vercel / GitHub Pages
- Alebo ak máš vlastný webhosting, nahraj tam

### Krok 2: Otvor v Chrome
- Otvor URL adresu aplikácie
- Aplikácia automaticky zobrazí banner **"Nainštalovať aplikáciu"**

### Krok 3: Inštaluj
**Spôsob A - Cez banner:**
1. Klikni na tlačidlo **"Inštalovať"** v banneri

**Spôsob B - Cez menu:**
1. Klikni na 3 bodky vpravo hore
2. Vyber **"Pridať na plochu"** alebo **"Install app"**
3. Potvrď

### Hotovo! 🎉
- Ikona sa objaví v zozname aplikácií
- Funguje ako normálna aplikácia
- Offline režim
- Lokálne dáta

---

## 🌐 ALTERNATÍVA: Jednoduchá lokálna inštalácia

Ak nechceš nahrávať na web, môžeš použiť tieto riešenia:

### Pre iOS aj Android:
1. **HTML Viewer aplikácie** (z App Store / Google Play)
   - Stiahni si aplikáciu na prezeranie HTML súborov
   - Nahraj súbor `kniha_jazd_pwa.html` do telefónu
   - Otvor v HTML Viewer aplikácii

2. **Lokálny server v počítači:**
   ```bash
   # V priečinku so súbormi spusti:
   python3 -m http.server 8000
   ```
   - Potom na mobile otvor: `http://[IP-tvojho-PC]:8000/kniha_jazd_pwa.html`
   - Následne inštaluj podľa vyššie uvedených krokov

---

## 📋 ZOZNAM SÚBOROV

V balíku sú 3 súbory:
1. **kniha_jazd_pwa.html** - hlavná aplikácia
2. **manifest.json** - konfigurácia PWA (ikona, názov, farby)
3. **service-worker.js** - offline funkcionalita

**Všetky 3 súbory musia byť v rovnakom priečinku!**

---

## ⚙️ FUNKCIE APLIKÁCIE

✅ Offline režim - funguje bez internetu
✅ Lokálne úložisko - dáta len v telefóne
✅ Automatické výpočty - km sa počítajú samy
✅ Export do Excel - stiahneš hotový xlsx súbor
✅ Štatistiky - celkové km, kWh, počet ciest
✅ Zálohovanie - export/import JSON pre bezpečnosť
✅ Vibrácie - haptická spätná väzba pri akciách
✅ Responzívny dizajn - prispôsobí sa obrazovke

---

## 🔒 SÚKROMIE

- Všetky dáta sú uložené len v tvojom zariadení
- Aplikácia NEposila nič na internet
- Žiadna registrácia, žiadne účty
- Môžeš ju používať úplne offline

---

## 🆘 RIEŠENIE PROBLÉMOV

**iPhone: "Pridať na plochu" nefunguje**
- Musíš použiť Safari, nie Chrome
- iOS 11.3 alebo novší

**Android: Nezobrazuje sa "Inštalovať"**
- Použi Chrome alebo Edge
- Skontroluj či sú všetky 3 súbory v rovnakom priečinku
- Android 5.0 alebo novší

**Export do Excel nefunguje**
- Skontroluj či máš povolené stiahnutia v prehliadači
- Na iOS musí byť súbor v "Files" (Súbory)

---

## 📞 ODPORÚČANÉ WEBHOSTINGY (zadarmo)

1. **Netlify** - https://netlify.com
   - Najjednoduchšie
   - Drag & Drop upload
   - Automatická HTTPS

2. **GitHub Pages** - https://pages.github.com
   - Zadarmo
   - Potrebuješ GitHub účet

3. **Vercel** - https://vercel.com
   - Rýchle
   - Jednoduché

---

## 🎯 TIP: Backup cez JSON

Aplikácia má funkciu exportu do JSON:
1. Klikni **"Exportovať JSON"**
2. Uloží sa súbor s všetkými záznamami
3. Môžeš ho importovať späť cez **"Importovať JSON"**
4. Ideálne na prenosenie dát medzi zariadeniami

---

**Autor:** Claude AI
**Verzia:** 1.0
**Dátum:** 2025
