(function () {
  'use strict';

  var STORAGE_KEY = 'chyiLabLang';
  var EN_NAV = {
    'lab.html': 'Home',
    'professor.html': 'Professor',
    'research.html': 'Research',
    'team.html': 'Team',
    'achievements.html': 'Achievements',
    'publications.html': 'Publications',
    'courses.html': 'Courses',
    'equipment.html': 'Equipment',
    'life.html': 'Lab Life',
    'links.html': 'Links'
  };

  var EN_TITLES = {
    'index.html': 'Chyi Lab Entrance',
    'lab.html': 'Home - Professor Website',
    'professor.html': 'Professor Profile - Professor Website',
    'research.html': 'Research Projects - Professor Website',
    'team.html': 'Research Team - Prof. Jen-Inn Chyi Lab',
    'achievements.html': 'Research Achievements - Professor Website',
    'publications.html': 'Publications - Professor Website',
    'courses.html': 'Courses - Professor Website',
    'equipment.html': 'Laboratory Equipment - Professor Website',
    'life.html': 'Lab Life - Professor Website',
    'links.html': 'Useful Links - Professor Website'
  };

  function getFileName() {
    var path = window.location.pathname || '';
    var name = path.split('/').pop();
    if (!name) return 'index.html';
    return name;
  }

  function rememberText(el) {
    if (!el.dataset.i18nOriginalText) {
      el.dataset.i18nOriginalText = el.textContent;
    }
  }

  function rememberHtml(el) {
    if (!el.dataset.i18nOriginalHtml) {
      el.dataset.i18nOriginalHtml = el.innerHTML;
    }
  }

  function rememberAttr(el, attrName) {
    var key = 'i18nOriginalAttr' + attrName;
    if (!el.dataset[key]) {
      el.dataset[key] = el.getAttribute(attrName) || '';
    }
  }

  function setText(selector, enText, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (el) {
      rememberText(el);
      el.textContent = lang === 'en' ? enText : el.dataset.i18nOriginalText;
    });
  }

  function setHtml(selector, enHtml, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (el) {
      rememberHtml(el);
      el.innerHTML = lang === 'en' ? enHtml : el.dataset.i18nOriginalHtml;
    });
  }

  function setTextList(selector, enList, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (el, idx) {
      rememberText(el);
      if (lang === 'en' && typeof enList[idx] === 'string') {
        el.textContent = enList[idx];
      }
      if (lang !== 'en') {
        el.textContent = el.dataset.i18nOriginalText;
      }
    });
  }

  function setHtmlList(selector, enList, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (el, idx) {
      rememberHtml(el);
      if (lang === 'en' && typeof enList[idx] === 'string') {
        el.innerHTML = enList[idx];
      }
      if (lang !== 'en') {
        el.innerHTML = el.dataset.i18nOriginalHtml;
      }
    });
  }

  function setAttrList(selector, attrName, enList, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (el, idx) {
      rememberAttr(el, attrName);
      var key = 'i18nOriginalAttr' + attrName;
      if (lang === 'en' && typeof enList[idx] === 'string') {
        el.setAttribute(attrName, enList[idx]);
      }
      if (lang !== 'en') {
        el.setAttribute(attrName, el.dataset[key]);
      }
    });
  }

  function translateNav(lang) {
    var links = document.querySelectorAll('nav .nav-links a[href]');
    links.forEach(function (a) {
      if (!a.dataset.i18nOriginalText) {
        a.dataset.i18nOriginalText = a.textContent.trim();
      }
      if (lang === 'en') {
        var href = a.getAttribute('href') || '';
        if (EN_NAV[href]) {
          a.textContent = EN_NAV[href];
        }
      } else {
        a.textContent = a.dataset.i18nOriginalText;
      }
    });
  }

  function translateTitle(file, lang) {
    if (!document.documentElement.dataset.i18nOriginalTitle) {
      document.documentElement.dataset.i18nOriginalTitle = document.title;
    }

    if (lang === 'en' && EN_TITLES[file]) {
      document.title = EN_TITLES[file];
    } else {
      document.title = document.documentElement.dataset.i18nOriginalTitle;
    }
  }

  function translatePage(file, lang) {
    if (file === 'index.html') {
      setText('.title', 'GaN and Microwave Optoelectronic Devices Laboratory', lang);
      setHtml(
        '.intro-text',
        'Welcome to the online entrance of the GaN and Microwave Optoelectronic Devices Laboratory.<br>Our lab focuses on epitaxy and process technologies for compound-semiconductor devices, integrating material growth, device structure design, and fabrication to explore next-generation optoelectronic semiconductor technologies.',
        lang
      );
      setText('.enter-btn', 'Enter Lab Website', lang);
      setText(
        '.enter-hint',
        'Click the button to enter the main site and browse members, research directions, and publications.',
        lang
      );
      return;
    }

    if (file === 'lab.html') {
      setText('.hero-title', 'Prof. Jen-Inn Chyi - GaN and Microwave Optoelectronic Devices Laboratory', lang);
      setText('.hero-subtitle', 'Department of Electrical Engineering, National Central University', lang);
      setHtml(
        '.hero-text',
        'Welcome to the website of Prof. Jen-Inn Chyi. Our laboratory focuses on III-V semiconductors, GaN power devices, and high-frequency optoelectronic devices, covering epitaxial materials, device fabrication, and characterization. Through industry-academia collaboration and interdisciplinary research, we cultivate next-generation semiconductor professionals.',
        lang
      );
      setText('.btn-primary', 'Meet the Professor', lang);
      setText('.btn-outline', 'View Research Projects', lang);
      setText('.hero-right-title', 'Lab Highlights', lang);
      setTextList('.hero-kv-list li', [
        'GaN-on-Si, normally-off power devices, and high-voltage HEMT structure design',
        'High-speed heterojunction bipolar transistors (HBTs) in InP / InGaAs systems',
        'Growth and characterization of quantum-dot and nanostructure optoelectronic devices',
        'Long-term GaN / LED / RF device collaborations with domestic and international industry'
      ], lang);

      setText('.section-title', 'Latest News', lang);
      setText('.section-note', 'Scholarships, awards, and important announcements', lang);
      setText(
        '.featured-news .news-highlight a',
        'A Letter from Prof. Jen-Inn Chyi to New Graduate Students (Required Reading)',
        lang
      );
      setText(
        '.featured-news .news-small',
        'Click the title to open the PDF directly in your browser, or use your browser download function to save it.',
        lang
      );

      setHtmlList('ul.news-list li.news-item', [
        '<span class="news-highlight">Congratulations! M.S. student 林宏洋, advised by Prof. Jen-Inn Chyi, received the Excellent Paper Award at the 2025 International Electron Devices and Materials Symposium.</span><div class="news-date">2025</div><details class="news-collapse"><summary class="news-collapse-toggle">Click to view award photos</summary><div class="news-images"><img src="png/IEDMS1.jpeg" alt="IEDMS 2025 Excellent Paper Award certificate"><img src="png/IEDMS2.jpeg" alt="IEDMS 2025 award ceremony photo"></div></details>',
        '<span class="news-highlight">Congratulations! Prof. Jen-Inn Chyi received the Optoelectronic Engineering Award from the Optical Engineering Society of the Republic of China (Taiwan).</span><div class="news-date">2024</div>',
        '<span class="news-highlight">Congratulations! Prof. Jen-Inn Chyi received the Outstanding Distinguished Research Fellow honor from the National Science and Technology Council (NSTC).</span><div class="news-date">2023</div>',
        '<span class="news-highlight">Congratulations! Prof. Jen-Inn Chyi received the Electrical Engineering Medal from the Chinese Institute of Electrical Engineering.</span><div class="news-date">2020</div>',
        '<span class="news-highlight">Congratulations! Ph.D. student Indraneel Sanyal received the 2020 CTCI Foundation Technology Scholarship (International Student Research Scholarship).</span><div class="news-date">2020/11</div>',
        '<span class="news-highlight">Congratulations! Ph.D. student 薛惟仁, advised by Prof. Jen-Inn Chyi, received the Best Poster Award at the 20th International Conference on Molecular Beam Epitaxy (ICMBE 2018) for the work "Fabrication and Characterization of Al2O3/InAs Metal-Oxide-Semiconductor Field-Effect Transistors".</span><div class="news-date">2018/09/02</div>',
        'Undergraduate student 孫逸然, advised by Prof. Jen-Inn Chyi, received support from the 2015 MOST Undergraduate Research Project for "Metal/AlO/GaN structure capacitance-voltage measurement and interface defect analysis".<div class="news-date">2015/07/01</div>',
        'Congratulations! Prof. Jen-Inn Chyi received the 2015 Outstanding Research Award from the Pan Wen-Yuan Foundation.',
        'Congratulations! Prof. Jen-Inn Chyi received the 2014 MOST Outstanding Research Award for work related to microelectronic engineering.<div class="news-date">2014/05</div>',
        'We thank Crosslight Software Inc. and Crosslight Software Taiwan Branch for providing simulation software to students in the compound-semiconductor course (<a href="http://www.crosslight.com.tw" target="_blank">http://www.crosslight.com.tw</a>).',
        'Congratulations! Prof. Jen-Inn Chyi advised M.S. student 楊正宇, who received the Garmin Scholarship.<div class="news-date">2012/01/09</div>',
        'Congratulations! Prof. Jen-Inn Chyi was elevated to SPIE Fellow.<div class="news-date">2011/12/13</div>',
        'Congratulations! Prof. Jen-Inn Chyi was elevated to 2011 IEEE Fellow.<div class="news-date">2011/11/25</div>',
        'Congratulations! M.S. student 張哲安, advised by Prof. Jen-Inn Chyi, won Third Prize in the 2011 Young Paper Award of the Chinese Institute of Electrical Engineering for "Process development of submicron InGaAsSb-base heterojunction bipolar transistors and emitter-size effect study".<div class="news-date">2011/10/17</div>',
        'Congratulations! Undergraduate student 蕭力函, advised by Prof. Jen-Inn Chyi, won the MOST 2010 Undergraduate Research Project Creative Award for "Optical and electrical properties of GZO grown by molecular beam epitaxy".<div class="news-date">2011/08/05</div>',
        'Congratulations! M.S. student 林憲佑, advised by Prof. Jen-Inn Chyi, received a scholarship from AOT Electronics Co., Ltd.<div class="news-date">2011/05/09</div>',
        'Congratulations! M.S. student 林憲佑, advised by Prof. Jen-Inn Chyi, received the Optics and Photonics Taiwan 2010 Student Paper Award.<div class="news-date">2010/12/03</div>',
        'Congratulations! Ph.D. student 張朝閔, advised by Prof. Jen-Inn Chyi, received the MBE Taiwan 2010 Student Paper Award for "Characterization of Performance InAlAs/InGaAsSb/InGaAs Double Heterojunction Bipolar Transistors".<div class="news-date">2010/05/24</div>',
        'Congratulations! Ph.D. student 劉學興, advised by Prof. Jen-Inn Chyi, received the Optics and Photonics Taiwan 2009 Student Paper Award for "Reduction of the efficiency droop of InGaN quantum well light-emitting diodes by using an In0.04Ga0.96N pre-layer and trimethylindium treatment".<div class="news-date">2009/12/23</div>',
        'Congratulations! M.S. student 陳鵬壬, advised by Prof. Jen-Inn Chyi, received the Optics and Photonics Taiwan 2009 Student Paper Award for "Efficiency Enhancement of InGaN LEDs with an n-type AlGaN/GaN/InGaN Current Spreading Layer".<div class="news-date">2009/12/23</div>',
        'Congratulations! M.S. student 王聖瑜, advised by Prof. Jen-Inn Chyi, received the MBE Taiwan 2009 Student Paper Award for "Low Surface Recombination Velocity in InAlAs/InGaAsSb/InGaAs Double Heterojunction Bipolar Transistors".<div class="news-date">2009/06/05</div>',
        'Congratulations! M.S. student 江佩宜, advised by Prof. Jen-Inn Chyi, received the 2008 Outstanding Paper Award from the Taiwan Electronic Materials and Devices Association for "High Performance InAlAs/InGaAsSb/InGaAs Double Heterojunction Bipolar Transistors".<div class="news-date">2008/12/12</div>'
      ], lang);
      return;
    }

    if (file === 'professor.html') {
      setText('.eyebrow', 'Professor Profile', lang);
      setText('h1', 'Professor Profile', lang);
      setText('.subtitle', 'Department of Electrical Engineering, National Central University', lang);
      var sections = document.querySelectorAll('.section-title');
      var en = ['Biography', 'Career Highlights', 'Academic Honors'];
      sections.forEach(function (el, idx) {
        rememberText(el);
        if (lang === 'en' && en[idx]) {
          el.textContent = en[idx];
        } else if (lang !== 'en') {
          el.textContent = el.dataset.i18nOriginalText;
        }
      });
      return;
    }

    if (file === 'research.html') {
      setText('.eyebrow', 'Research Projects', lang);
      setText('h1', 'Research Projects', lang);
      setText('.subtitle', 'Major industry-academia and NSTC/MOST projects, listed from newest to oldest.', lang);
      setText('.section-title', 'Project List', lang);
      return;
    }

    if (file === 'team.html') {
      setText('.eyebrow', 'Research Team', lang);
      setText('.page-title', 'Research Team', lang);
      setText('.page-subtitle', 'Current members and alumni from the GaN and Microwave Optoelectronic Devices Laboratory.', lang);
      var teamSections = document.querySelectorAll('.section-title');
      var teamEn = [
        'Device Fabrication, Characterization, and Design',
        'MOCVD Epitaxy Design and Process Team',
        'MBE Growth Team',
        'Alumni by Year'
      ];
      teamSections.forEach(function (el, idx) {
        rememberText(el);
        if (lang === 'en' && teamEn[idx]) {
          el.textContent = teamEn[idx];
        } else if (lang !== 'en') {
          el.textContent = el.dataset.i18nOriginalText;
        }
      });
      return;
    }

    if (file === 'achievements.html') {
      setText('.eyebrow', 'Research Achievements', lang);
      setText('h1', 'Research Achievement Gallery', lang);
      return;
    }

    if (file === 'publications.html') {
      setText('.eyebrow', 'Publications', lang);
      setText('h1', 'Publications and Research Output', lang);
      setText('.subtitle', 'Complete publication records and research achievements are available on ResearchGate.', lang);
      setText('.btn-primary', 'Open ResearchGate', lang);
      setText('.btn-outline', 'View Research Projects', lang);
      setText('.hero-right-title', 'Research Page Preview', lang);
      setText('.hero-right-note', 'Click the preview image to open the ResearchGate profile.', lang);
      return;
    }

    if (file === 'courses.html') {
      setText('.eyebrow', 'Courses', lang);
      setText('h1', 'Courses', lang);
      setText('.subtitle', 'Overview of frequently offered courses, including descriptions, objectives, and unit outlines.', lang);
      var sectionTitles = document.querySelectorAll('.course-section-title');
      var sectionEn = [
        'Course Overview',
        'Course Objectives',
        'Textbook and References',
        'Assessment',
        'Topics and Unit Outline'
      ];
      sectionTitles.forEach(function (el, idx) {
        rememberText(el);
        var mapped = sectionEn[idx % sectionEn.length];
        if (lang === 'en') {
          el.textContent = mapped;
        } else {
          el.textContent = el.dataset.i18nOriginalText;
        }
      });

      var metaLabels = document.querySelectorAll('.meta-label');
      var metaEn = ['Year', 'Semester', 'Credits', 'Course Type'];
      metaLabels.forEach(function (el, idx) {
        rememberText(el);
        if (lang === 'en') {
          el.textContent = metaEn[idx % metaEn.length];
        } else {
          el.textContent = el.dataset.i18nOriginalText;
        }
      });
      return;
    }

    if (file === 'equipment.html') {
      setText('.eyebrow', 'Laboratory Facilities', lang);
      setText('h1', 'Laboratory Equipment', lang);
      setText('.subtitle', 'This page lists the major growth, process, and measurement facilities in our laboratory.', lang);

      setTextList('.section-title', [
        'Molecular Beam Epitaxy Systems (MBE)',
        'Metal-Organic Chemical Vapor Deposition Systems (MOCVD)'
      ], lang);

      setTextList('.equipment-name', [
        'Molecular Beam Epitaxy System 1',
        'Molecular Beam Epitaxy System 2',
        'Molecular Beam Epitaxy System 3',
        '8-inch MOCVD System',
        '8-inch MOCVD System',
        '6-inch MOCVD System',
        '4-inch MOCVD System'
      ], lang);

      setAttrList('.equipment-image', 'alt', [
        'Molecular Beam Epitaxy System 1',
        'Molecular Beam Epitaxy System 2',
        'Molecular Beam Epitaxy System 3',
        '8-inch MOCVD System A',
        '8-inch MOCVD System B',
        '6-inch MOCVD System',
        '4-inch MOCVD System'
      ], lang);
      return;
    }

    if (file === 'life.html') {
      setText('.eyebrow', 'Lab Life', lang);
      setText('h1', 'Lab Life', lang);
      setText('.subtitle', 'A curated album index of lab gatherings, trips, and memorable moments over the years.', lang);

      setTextList('.life-year-note', [
        'Birthday wishes at meetings',
        'Birthday wishes at meetings',
        'ICNS International Symposium in Fukuoka (2023)',
        'Advisor Appreciation Banquet',
        'Advisor Appreciation Banquet and belated birthday celebration',
        'Advisor Appreciation Banquet and advisee gathering',
        'Christmas events and Pan Wen-Yuan Outstanding Research Award',
        'End-of-term dinner and advisor appreciation banquet',
        'Spring banquet, year-end dinner, and Winter Solstice tangyuan',
        'Formosan Aboriginal Culture Village, Yilan trip, Baxian outing, Taoyuan Arena',
        'Delta lab opening, Mid-Autumn BBQ, and KTV',
        'Birthdays and graduation ceremony',
        'Conference and gatherings'
      ], lang);

      setTextList('.life-card-title', [
        'Birthday wishes at meetings',
        'Birthday wishes at meetings',
        'ICNS International Symposium in Fukuoka (2023)',
        'Advisor Appreciation Banquet',
        'Advisor Appreciation Banquet',
        'Belated Birthday Celebration',
        'Advisor Appreciation Banquet',
        'Freshman Advisee Gathering',
        'Christmas Pizza Party',
        'Advisor Appreciation Banquet',
        'Pan Wen-Yuan Outstanding Research Award Ceremony',
        'End-of-term Dinner',
        'Advisor Appreciation Banquet',
        'Spring Banquet',
        'Year-end Dinner',
        'Winter Solstice Tangyuan Gathering',
        'Formosan Aboriginal Culture Village',
        'Yilan Trip',
        'Lab Outing - Baxian',
        'Taoyuan Arena Baseball Game',
        'Delta Advanced Power Electronics Lab Opening Ceremony',
        'Mid-Autumn BBQ',
        'KTV',
        'Happy Birthday',
        'Graduation Ceremony',
        'Conference - IEDMS',
        'Lab Dinner Gathering'
      ], lang);

      setTextList('.life-card-date', [
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, '(Date not specified)'
      ], lang);

      setTextList('.life-card-link', new Array(27).fill('View Album'), lang);
      return;
    }

    if (file === 'links.html') {
      setText('.eyebrow', 'Useful Links', lang);
      setText('h1', 'Useful Links', lang);
      setText('.subtitle', 'Click an icon below to open the target website in a new tab.', lang);
    }
  }

    var AUTO_CACHE_KEY = 'chyiLabAutoTranslateCacheV1';
  var autoTranslateState = {
    captured: false,
    textNodes: [],
    attrNodes: [],
    cache: null
  };
  var applyVersion = 0;
  function hasHan(text) {
    return /[\u3400-\u9FFF\uF900-\uFAFF]/.test(text || '');
  }
  function splitContent(text) {
    var value = text || '';
    var match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match) {
      return { prefix: '', core: value, suffix: '' };
    }
    return {
      prefix: match[1],
      core: match[2],
      suffix: match[3]
    };
  }
  function loadAutoCache() {
    if (autoTranslateState.cache) {
      return autoTranslateState.cache;
    }
    try {
      var raw = localStorage.getItem(AUTO_CACHE_KEY);
      if (raw) {
        autoTranslateState.cache = JSON.parse(raw);
      }
    } catch (err) {
      // Ignore storage errors.
    }
    if (!autoTranslateState.cache || typeof autoTranslateState.cache !== 'object') {
      autoTranslateState.cache = {};
    }
    return autoTranslateState.cache;
  }
  function saveAutoCache() {
    try {
      localStorage.setItem(AUTO_CACHE_KEY, JSON.stringify(loadAutoCache()));
    } catch (err) {
      // Ignore storage errors.
    }
  }
  function captureAutoTranslatables() {
    if (autoTranslateState.captured || !document.body) {
      return;
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement) {
        continue;
      }
      if (node.parentElement.closest('.lang-switcher')) {
        continue;
      }
      var tag = node.parentElement.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
        continue;
      }
      var parts = splitContent(node.textContent);
      if (!parts.core || !hasHan(parts.core)) {
        continue;
      }
      autoTranslateState.textNodes.push({
        node: node,
        original: node.textContent
      });
    }
    var attrNames = ['alt', 'title', 'placeholder', 'aria-label', 'value'];
    var attrTargets = document.querySelectorAll('[alt],[title],[placeholder],[aria-label],input[value],button[value]');
    attrTargets.forEach(function (el) {
      if (el.closest('.lang-switcher')) {
        return;
      }
      attrNames.forEach(function (attr) {
        if (!el.hasAttribute(attr)) {
          return;
        }
        if (attr === 'value') {
          var tagName = el.tagName;
          if (tagName === 'INPUT') {
            var type = (el.getAttribute('type') || '').toLowerCase();
            if (type !== 'button' && type !== 'submit' && type !== 'reset') {
              return;
            }
          } else if (tagName !== 'BUTTON') {
            return;
          }
        }
        var value = el.getAttribute(attr) || '';
        if (!hasHan(value)) {
          return;
        }
        autoTranslateState.attrNodes.push({
          el: el,
          attr: attr,
          original: value
        });
      });
    });
    autoTranslateState.captured = true;
  }
  function restoreAutoTranslatables() {
    captureAutoTranslatables();
    autoTranslateState.textNodes.forEach(function (item) {
      if (item.node && item.node.isConnected) {
        item.node.textContent = item.original;
      }
    });
    autoTranslateState.attrNodes.forEach(function (item) {
      if (item.el && item.el.isConnected) {
        item.el.setAttribute(item.attr, item.original);
      }
    });
  }
  function parseGoogleResponse(data) {
    if (!Array.isArray(data) || !Array.isArray(data[0])) {
      return '';
    }
    return data[0].map(function (part) {
      if (!Array.isArray(part)) {
        return '';
      }
      return part[0] || '';
    }).join('');
  }
  async function fetchEnglishText(text) {
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=en&dt=t&q=' + encodeURIComponent(text);
    var response = await fetch(url, { credentials: 'omit' });
    if (!response.ok) {
      throw new Error('Translation request failed');
    }
    var data = await response.json();
    return parseGoogleResponse(data);
  }
  async function getEnglishText(text) {
    if (!text) {
      return text;
    }
    var cache = loadAutoCache();
    if (Object.prototype.hasOwnProperty.call(cache, text)) {
      return cache[text];
    }
    try {
      var translated = await fetchEnglishText(text);
      cache[text] = translated || text;
      saveAutoCache();
      return cache[text];
    } catch (err) {
      cache[text] = text;
      saveAutoCache();
      return text;
    }
  }
  function collectPendingChinese() {
    var pendingTexts = [];
    var pendingAttrs = [];
    var uniqueMap = {};
    autoTranslateState.textNodes.forEach(function (item) {
      if (!item.node || !item.node.isConnected) {
        return;
      }
      var parts = splitContent(item.node.textContent);
      if (!parts.core || !hasHan(parts.core)) {
        return;
      }
      pendingTexts.push({
        item: item,
        prefix: parts.prefix,
        core: parts.core,
        suffix: parts.suffix
      });
      uniqueMap[parts.core] = true;
    });
    autoTranslateState.attrNodes.forEach(function (item) {
      if (!item.el || !item.el.isConnected) {
        return;
      }
      var current = item.el.getAttribute(item.attr) || '';
      if (!current || !hasHan(current)) {
        return;
      }
      pendingAttrs.push({
        item: item,
        core: current
      });
      uniqueMap[current] = true;
    });
    return {
      pendingTexts: pendingTexts,
      pendingAttrs: pendingAttrs,
      uniqueTexts: Object.keys(uniqueMap)
    };
  }
  async function translateUniqueTexts(uniqueTexts, currentVersion) {
    var translatedMap = {};
    var index = 0;
    var workerCount = Math.min(6, uniqueTexts.length);
    async function worker() {
      while (index < uniqueTexts.length) {
        if (currentVersion !== applyVersion) {
          return;
        }
        var text = uniqueTexts[index++];
        translatedMap[text] = await getEnglishText(text);
      }
    }
    var workers = [];
    for (var i = 0; i < workerCount; i += 1) {
      workers.push(worker());
    }
    await Promise.all(workers);
    return translatedMap;
  }
  async function applyAutoEnglish(currentVersion) {
    captureAutoTranslatables();
    var bucket = collectPendingChinese();
    if (bucket.uniqueTexts.length === 0) {
      return;
    }
    var translatedMap = await translateUniqueTexts(bucket.uniqueTexts, currentVersion);
    if (currentVersion !== applyVersion) {
      return;
    }
    bucket.pendingTexts.forEach(function (entry) {
      if (!entry.item.node || !entry.item.node.isConnected) {
        return;
      }
      var translated = translatedMap[entry.core] || entry.core;
      entry.item.node.textContent = entry.prefix + translated + entry.suffix;
    });
    bucket.pendingAttrs.forEach(function (entry) {
      if (!entry.item.el || !entry.item.el.isConnected) {
        return;
      }
      var translated = translatedMap[entry.core] || entry.core;
      entry.item.el.setAttribute(entry.item.attr, translated);
    });
  }
  function setSwitcherBusy(button, busy) {
    if (!button) {
      return;
    }
    button.disabled = !!busy;
    button.style.opacity = busy ? '0.7' : '';
    button.style.cursor = busy ? 'wait' : 'pointer';
  }
  function injectStyles() {
    if (document.getElementById('lang-switcher-style')) return;
    var style = document.createElement('style');
    style.id = 'lang-switcher-style';
    style.textContent = '' +
      '.lang-switcher { display:flex; align-items:center; }' +
      '.lang-switcher-btn {' +
      ' border:1px solid rgba(56,189,248,0.7);' +
      ' background:rgba(15,23,42,0.95);' +
      ' color:#38bdf8;' +
      ' border-radius:999px;' +
      ' padding:4px 12px;' +
      ' font-size:0.82rem;' +
      ' letter-spacing:0.08em;' +
      ' cursor:pointer;' +
      ' transition:all .2s ease;' +
      '}' +
      '.lang-switcher-btn:hover { background:rgba(56,189,248,0.14); }' +
      '.lang-switcher-floating {' +
      ' position:fixed; top:14px; right:14px; z-index:999;' +
      '}';
    document.head.appendChild(style);
  }
  function createSwitcher() {
    var existing = document.getElementById('lang-switcher-btn');
    if (existing) return existing;
    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    var btn = document.createElement('button');
    btn.id = 'lang-switcher-btn';
    btn.className = 'lang-switcher-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle language');
    wrap.appendChild(btn);
    var navInner = document.querySelector('nav .nav-inner');
    if (navInner) {
      navInner.appendChild(wrap);
    } else {
      wrap.classList.add('lang-switcher-floating');
      document.body.appendChild(wrap);
    }
    return btn;
  }
  function getStoredLang() {
    try {
      var val = localStorage.getItem(STORAGE_KEY);
      if (val === 'zh' || val === 'en') return val;
    } catch (err) {
      // Ignore storage errors.
    }
    return 'zh';
  }
  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      // Ignore storage errors.
    }
  }
  function applyLanguage(lang, button) {
    applyVersion += 1;
    var currentVersion = applyVersion;
    var file = getFileName();
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    if (lang !== 'en') {
      restoreAutoTranslatables();
    }
    translateTitle(file, lang);
    translateNav(lang);
    translatePage(file, lang);
    if (button) {
      button.textContent = lang === 'en' ? 'ZH' : 'EN';
      button.title = lang === 'en' ? 'Switch to Chinese' : 'Switch to English';
    }
    if (lang === 'en') {
      setSwitcherBusy(button, true);
      applyAutoEnglish(currentVersion).finally(function () {
        if (currentVersion === applyVersion) {
          setSwitcherBusy(button, false);
        }
      });
    } else {
      setSwitcherBusy(button, false);
    }
  }
  function init() {
    injectStyles();
    var button = createSwitcher();
    captureAutoTranslatables();
    var current = getStoredLang();
    applyLanguage(current, button);
    button.addEventListener('click', function () {
      current = current === 'en' ? 'zh' : 'en';
      saveLang(current);
      applyLanguage(current, button);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
