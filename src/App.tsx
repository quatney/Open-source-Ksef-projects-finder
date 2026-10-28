/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  Bot, 
  Leaf, 
  Droplets, 
  Zap, 
  Stethoscope, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle,
  Tag,
  Coins,
  ArrowRight,
  Filter
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { KSEF_PROJECTS, ProjectItem } from './projectsData';

export default function App() {
  const [studentName, setStudentName] = useState('Alex Mwangi & Faith Chebet');
  const [schoolName, setSchoolName] = useState('Alliance High School');
  const [county, setCounty] = useState('Kiambu County');
  const [subCounty, setSubCounty] = useState('Kikuyu Sub-County');
  const [year, setYear] = useState('2026/2027');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'compendium' | 'edit'>('compendium');

  const compendiumRef = useRef<HTMLDivElement>(null);

  const domains = [
    'All',
    'Computer Science & AI',
    'Robotics & Engineering',
    'Agriculture & Food Tech',
    'Environmental & Chemistry',
    'Energy & Physics',
    'Biomedical & Health'
  ];

  const filteredProjects = KSEF_PROJECTS.filter((p) => {
    const matchesDomain = selectedDomain === 'All' || p.domain === selectedDomain;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.innovation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Computer Science & AI':
        return <Cpu className="w-4 h-4 text-indigo-600" />;
      case 'Robotics & Engineering':
        return <Bot className="w-4 h-4 text-cyan-600" />;
      case 'Agriculture & Food Tech':
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'Environmental & Chemistry':
        return <Droplets className="w-4 h-4 text-teal-600" />;
      case 'Energy & Physics':
        return <Zap className="w-4 h-4 text-amber-600" />;
      case 'Biomedical & Health':
        return <Stethoscope className="w-4 h-4 text-rose-600" />;
      default:
        return <FileText className="w-4 h-4 text-stone-600" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Robust Multi-Page PDF Generation Engine using jsPDF
  const handleDownloadMultiPagePDF = () => {
    setIsExporting(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const margin = 16;
      const pageWidth = 210;
      const pageHeight = 297;
      const contentWidth = pageWidth - margin * 2;
      let y = 25;
      let pageNumber = 1;

      const printRunningHeader = () => {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(130, 130, 130);
        doc.text('KSEF Research Compendium & Strategic Innovation Guide | Kenya Science & Engineering Fair', margin, 12);
        doc.setDrawColor(210, 210, 210);
        doc.setLineWidth(0.3);
        doc.line(margin, 14, pageWidth - margin, 14);
      };

      const printRunningFooter = () => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(130, 130, 130);
        doc.text(`CEMASTEA / KSEF National Strategic Guide • ${year}`, margin, pageHeight - 10);
        doc.text(`Page ${pageNumber}`, pageWidth - margin - 15, pageHeight - 10);
      };

      const checkPageBreak = (spaceNeeded: number) => {
        if (y + spaceNeeded > pageHeight - 20) {
          printRunningFooter();
          doc.addPage();
          pageNumber++;
          y = 22;
          printRunningHeader();
        }
      };

      // --- COVER PAGE (PAGE 1) ---
      doc.setFillColor(15, 60, 40); // Deep Kenyan Forest Green
      doc.rect(0, 0, pageWidth, 42, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(230, 245, 235);
      doc.text('REPUBLIC OF KENYA • MINISTRY OF EDUCATION • CEMASTEA', margin, 18);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(255, 255, 255);
      doc.text('KENYA SCIENCE AND ENGINEERING FAIR (KSEF)', margin, 28);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Official National Project Innovation Compendium & Strategic Research Guide', margin, 35);

      y = 55;

      doc.setFont('times', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(20, 20, 20);
      const titleLines = doc.splitTextToSize(
        'HIGH-IMPACT REALISTIC SCIENCE & ENGINEERING RESEARCH PROJECTS FOR KSEF & REGENERON ISEF',
        contentWidth
      );
      doc.text(titleLines, margin, y);
      y += titleLines.length * 9 + 4;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(16, 120, 70);
      doc.text('Covering Computer Science, AI, Robotics, Agriculture, Water, Chemistry, Physics & Health', margin, y);
      y += 8;

      doc.setDrawColor(16, 120, 70);
      doc.setLineWidth(1);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;

      // Metadata Box
      doc.setFillColor(245, 248, 246);
      doc.roundedRect(margin, y, contentWidth, 32, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(20, 20, 20);
      doc.text(`Investigators / Presenters: ${studentName}`, margin + 5, y + 8);
      doc.text(`School / Institution: ${schoolName}`, margin + 5, y + 15);
      doc.text(`Sub-County & County: ${subCounty}, ${county}`, margin + 5, y + 22);
      doc.text(`Academic / Fair Cycle: ${year} • Official KSEF Sub-County to National Circuit`, margin + 5, y + 29);
      y += 42;

      // Executive Mentor Foreword
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 60, 40);
      doc.text('EXECUTIVE MENTOR FOREWORD: WHAT WINS AT KSEF & ISEF', margin, y);
      y += 6;

      doc.setFont('times', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(40, 40, 40);
      const forewordText = 
        'Winning projects at KSEF and international platforms like Regeneron ISEF avoid the "gadget trap" and "website trap." Judges do not reward generic mobile apps or standard Arduino circuits unless they address a deep scientific question or rigorous physical engineering challenge. A winning project must satisfy three non-negotiable principles: (1) Investigate a painful, quantifiable problem affecting Kenyan lives or livelihoods; (2) Apply fundamental principles of physics, chemistry, biology, or computer science; and (3) Produce reproducible numerical data with standard deviations, independent variables, and strict control groups. This compendium delivers 20 fully structured, vetted projects engineered specifically for feasibility in Kenyan secondary schools.';
      const splitForeword = doc.splitTextToSize(forewordText, contentWidth);
      doc.text(splitForeword, margin, y);
      y += splitForeword.length * 4.8 + 10;

      // Table of Contents Summary
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 60, 40);
      doc.text('COMPENDIUM DOMAIN INDEX (20 SELECTED PROJECTS)', margin, y);
      y += 6;

      const domainsSummary = [
        ['1. Computer Science, TinyML & Edge AI (Projects 1 to 5)', 'Weevil Acoustic TinyML, Offline Crop Vision, Borehole Crypto Token, Braille TTS, Ultrasonic Pest Deterrent'],
        ['2. Robotics & Applied Engineering (Projects 6 to 8)', 'Cable River Plastic Interceptor, Gravity Solar Tracker, Gyroscope Vaccine Suspension'],
        ['3. Agriculture & Food Technology (Projects 9 to 12)', 'Dual-Action Evaporative Cooler, Capillary Clay Emitter, Tagetes Bio-Emulsion, PCM Solar Dryer'],
        ['4. Water Quality & Environmental Science (Projects 13 to 16)', 'Pumice Defluoridation, Rumen Hyacinth Biogas, EPS Macadamia Ceiling, Coffee Biochar Dye Removal'],
        ['5. Physics, Alternative Energy & Health (Projects 17 to 20)', 'Thermoelectric Cookstove, Rice Husk Ash Pozzolan, Mastitis Test Strip, Solar Autoclave']
      ];

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      domainsSummary.forEach((d) => {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text(d[0], margin, y);
        y += 4.5;
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(80, 80, 80);
        doc.text(d[1], margin + 5, y);
        y += 6;
      });

      printRunningFooter();

      // --- MULTI-PAGE PROJECT PROFILES ---
      KSEF_PROJECTS.forEach((proj) => {
        doc.addPage();
        pageNumber++;
        y = 22;
        printRunningHeader();

        // Project Header Card
        doc.setFillColor(242, 248, 244);
        doc.roundedRect(margin, y, contentWidth, 18, 1.5, 1.5, 'F');
        doc.setDrawColor(180, 215, 195);
        doc.setLineWidth(0.4);
        doc.roundedRect(margin, y, contentWidth, 18, 1.5, 1.5, 'S');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(16, 120, 70);
        doc.text(`PROJECT #${proj.number} • CATEGORY: ${proj.category.toUpperCase()}`, margin + 4, y + 6);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(60, 60, 60);
        doc.text(`Domain: ${proj.domain} | Budget: KSh ${proj.costKSh.toLocaleString()} | Feasibility: ${proj.feasibility}`, margin + 4, y + 13);
        y += 24;

        // Project Title
        doc.setFont('times', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(15, 20, 25);
        const pTitleLines = doc.splitTextToSize(proj.title, contentWidth);
        doc.text(pTitleLines, margin, y);
        y += pTitleLines.length * 6 + 4;

        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;

        // Problem Section
        checkPageBreak(30);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(180, 40, 30);
        doc.text('A. REAL PROBLEM IN KENYA:', margin, y);
        y += 4.5;
        doc.setFont('times', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(30, 30, 30);
        const pProb = doc.splitTextToSize(proj.problem, contentWidth);
        doc.text(pProb, margin, y);
        y += pProb.length * 4.3 + 5;

        // Innovation Section
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(16, 120, 70);
        doc.text('B. SCIENTIFIC & TECHNICAL INNOVATION:', margin, y);
        y += 4.5;
        doc.setFont('times', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(30, 30, 30);
        const pInnov = doc.splitTextToSize(proj.innovation, contentWidth);
        doc.text(pInnov, margin, y);
        y += pInnov.length * 4.3 + 5;

        // Methodology Section
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 60, 100);
        doc.text('C. EXPERIMENTAL DESIGN & METHODOLOGY:', margin, y);
        y += 4.5;
        doc.setFont('times', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(30, 30, 30);
        const pMeth = doc.splitTextToSize(proj.methodology, contentWidth);
        doc.text(pMeth, margin, y);
        y += pMeth.length * 4.3 + 5;

        // Equipment & Metrics Two-Column Box
        checkPageBreak(38);
        doc.setFillColor(248, 249, 250);
        doc.rect(margin, y, contentWidth, 32, 'F');
        doc.setDrawColor(225, 230, 235);
        doc.rect(margin, y, contentWidth, 32, 'S');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 30, 30);
        doc.text('Required Materials & Apparatus:', margin + 3, y + 5);
        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(50, 50, 50);
        const pEquip = doc.splitTextToSize(proj.equipment, contentWidth - 6);
        doc.text(pEquip, margin + 3, y + 10);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 30, 30);
        doc.text('Objective Numerical Metrics & Testing:', margin + 3, y + 21);
        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(50, 50, 50);
        const pMetr = doc.splitTextToSize(proj.metrics, contentWidth - 6);
        doc.text(pMetr, margin + 3, y + 26);
        y += 36;

        // Judge Defense & Strategic Edge
        checkPageBreak(25);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(120, 60, 15);
        doc.text('D. KSEF JUDGES\' PERSPECTIVE & COMPETITIVE EDGE:', margin, y);
        y += 4.5;
        doc.setFont('times', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(40, 40, 40);
        const pJudge = doc.splitTextToSize(proj.judgeAppeal, contentWidth);
        doc.text(pJudge, margin, y);
        y += pJudge.length * 4 + 6;

        // Quick Footer for this project
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageWidth - margin, y);

        printRunningFooter();
      });

      // --- FINAL STRATEGY SHEET: KSEF MARKING RUBRIC (FINAL PAGE) ---
      doc.addPage();
      pageNumber++;
      y = 22;
      printRunningHeader();

      doc.setFont('times', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(15, 60, 40);
      doc.text('OFFICIAL KSEF SCORING MATRIX & PRESENTATION STRATEGY', margin, y);
      y += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(40, 40, 40);
      const stratText = 
        'To win at sub-county, county, regional, and national KSEF competitions, ensure your team prepares for all three scoring segments. Standard KSEF scoring allocates 80 marks total:';
      doc.text(stratText, margin, y);
      y += 7;

      const rubricTable = [
        ['Part A: Written Communication (Write-Up & Poster)', '30 Marks', 'Logical organization, deep literature citations, explicit variable controls, raw and processed data balance, discussion of anomalies, plagiarism form.'],
        ['Part B: Oral Communication (Face-to-Face Defense)', '15 Marks', 'Deep conceptual mastery of physics/chemistry/biology/algorithms, immediate confident answers, teamwork synergy, independent work demonstration.'],
        ['Part C: Scientific Thought, Method & Originality', '35 Marks', 'Originality of concept, mathematical modeling, sample size rigor (N >= 3), calibration accuracy, practical relevance to Kenya Vision 2030.']
      ];

      rubricTable.forEach((row) => {
        doc.setFillColor(245, 248, 246);
        doc.roundedRect(margin, y, contentWidth, 18, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(15, 60, 40);
        doc.text(`${row[0]} — ${row[1]}`, margin + 3, y + 5);
        doc.setFont('times', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(50, 50, 50);
        const rDesc = doc.splitTextToSize(row[2], contentWidth - 6);
        doc.text(rDesc, margin + 3, y + 10);
        y += 22;
      });

      y += 6;
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(20, 20, 20);
      doc.text('MANDATORY VERIFICATION & BIOSAFETY SIGN-OFF', margin, y);
      y += 12;

      doc.setDrawColor(160, 160, 160);
      doc.line(margin, y, margin + 65, y);
      doc.line(pageWidth - margin - 65, y, pageWidth - margin, y);
      y += 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.text('Lead Student Researcher Signature & Date', margin, y);
      doc.text('Science Patron / Principal Signature & Official Stamp', pageWidth - margin - 65, y);

      printRunningFooter();

      // Trigger multi-page PDF download
      doc.save('KSEF_Ultimate_Project_Compendium_2026.pdf');
    } catch (err) {
      console.error('Error generating multipage PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {/* Top Sticky Toolbar */}
      <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-bold shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900 tracking-tight text-sm sm:text-base">
                  KSEF Multi-Project Compendium
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  20 Curated Research Projects
                </span>
              </div>
              <p className="text-xs text-stone-500">Computer Science, AI, Robotics, Agriculture, Water & Physics</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'compendium' ? 'edit' : 'compendium')}
              className="px-3 py-2 text-xs font-medium rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-stone-500" />
              {activeTab === 'compendium' ? 'Edit Details' : 'View Catalog'}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-900 text-white shadow-xs transition-colors flex items-center gap-1.5"
              title="Prints or opens system 'Save as PDF' with page breaks"
            >
              <Printer className="w-4 h-4" />
              <span>Print All</span>
            </button>

            <button
              onClick={handleDownloadMultiPagePDF}
              disabled={isExporting}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="Exports the full 20+ project multi-page PDF document"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generating Multi-Page PDF...' : 'Download Multi-Page PDF'}</span>
            </button>
          </div>
        </div>

        {/* Metadata Editor Drawer */}
        {activeTab === 'edit' && (
          <div className="bg-stone-50 border-t border-stone-200 px-4 sm:px-6 py-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-stone-600 font-semibold mb-1">Student Presenters</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-stone-600 font-semibold mb-1">School Name</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-stone-600 font-semibold mb-1">Sub-County & County</label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={subCounty}
                    onChange={(e) => setSubCounty(e.target.value)}
                    className="w-1/2 px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                  <input
                    type="text"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    className="w-1/2 px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-600 font-semibold mb-1">Competition Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-stone-50 border-t border-stone-200/80 px-4 sm:px-6 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              <span className="text-stone-500 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Domain:
              </span>
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    selectedDomain === dom
                      ? 'bg-emerald-800 text-white font-medium'
                      : 'bg-white text-stone-600 border border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search tech, AI, chemistry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Multi-Page Reader & Printable Compendium */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div
          ref={compendiumRef}
          className="bg-white rounded-xl shadow-lg border border-stone-200/90 p-8 sm:p-14 font-serif-report text-stone-900 print:p-0 print:border-none print:shadow-none"
        >
          {/* Official Document Cover Header */}
          <div className="text-center border-b-2 border-emerald-900 pb-8 mb-10">
            <div className="text-xs uppercase font-sans font-bold tracking-widest text-emerald-800 mb-1">
              Republic of Kenya • Ministry of Education • CEMASTEA
            </div>
            <div className="text-sm font-sans font-semibold tracking-wider text-stone-600 uppercase mb-3">
              Kenya Science and Engineering Fair (KSEF) Official Research Project Compendium
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 max-w-4xl mx-auto leading-tight uppercase font-serif-report">
              High-Impact, Measurable Science & Engineering Projects for KSEF & International ISEF Selection
            </h1>

            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-sans text-stone-600">
              <div><strong className="text-stone-800">Student Presenters:</strong> {studentName}</div>
              <div><strong className="text-stone-800">School:</strong> {schoolName}</div>
              <div><strong className="text-stone-800">Jurisdiction:</strong> {subCounty}, {county}</div>
              <div><strong className="text-stone-800">Fair Cycle:</strong> {year}</div>
            </div>
          </div>

          {/* Senior Mentor Foreword */}
          <section className="mb-10 p-5 rounded-xl bg-stone-50 border border-stone-200/90 font-sans text-xs sm:text-sm text-stone-800">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Senior KSEF Mentor Strategic Guidance: What Real Judges Reward</span>
            </div>
            <p className="leading-relaxed mb-2 text-stone-700">
              In recent years, many students have fallen into the <em>"Website/App Trap"</em>—submitting a generic web dashboard, mobile app, or basic moisture-pump kit. At sub-county and county levels, judges see dozens of identical projects and score them near the bottom for originality and scientific method.
            </p>
            <p className="leading-relaxed text-stone-700">
              In <strong>Computer Science & Tech</strong>, winning projects utilize <strong>offline edge intelligence, TinyML, local acoustic classification, or hardware-integrated cryptographic tokens</strong>. In <strong>Physical & Life Sciences</strong>, winners construct functional prototypes that generate empirical rate curves, chemical titrations, and statistical tests. The 20 projects below provide rigorous, defensible, and realistic research templates tailored for Kenya.
            </p>
          </section>

          {/* Catalog Projects List */}
          <div className="space-y-12">
            {filteredProjects.map((proj) => (
              <article 
                key={proj.id} 
                className="page-break-inside-avoid border-b border-stone-300 pb-10 last:border-b-0"
              >
                {/* Project Badge Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-sans text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
                      {proj.number}
                    </span>
                    <span className="font-bold text-emerald-900 uppercase tracking-wide">
                      {proj.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500">
                    <span className="flex items-center gap-1 font-medium bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                      {getDomainIcon(proj.domain)}
                      <span>{proj.domain}</span>
                    </span>
                    <span className="font-semibold text-stone-700">Est. Cost: KSh {proj.costKSh.toLocaleString()}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 font-serif-report leading-snug">
                  {proj.title}
                </h2>

                {/* Four Quadrant Details */}
                <div className="space-y-3.5 text-sm sm:text-base text-stone-800">
                  {/* Problem */}
                  <div>
                    <h3 className="text-xs uppercase font-sans font-bold text-rose-800 tracking-wider flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-700"></span>
                      1. The Real Problem in Kenya
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed pl-3.5 border-l-2 border-rose-200">
                      {proj.problem}
                    </p>
                  </div>

                  {/* Innovation */}
                  <div>
                    <h3 className="text-xs uppercase font-sans font-bold text-emerald-800 tracking-wider flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                      2. Scientific / Technical Innovation
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed pl-3.5 border-l-2 border-emerald-200">
                      {proj.innovation}
                    </p>
                  </div>

                  {/* Methodology */}
                  <div>
                    <h3 className="text-xs uppercase font-sans font-bold text-sky-800 tracking-wider flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-sky-700"></span>
                      3. Experimental Design & Methodology
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed pl-3.5 border-l-2 border-sky-200">
                      {proj.methodology}
                    </p>
                  </div>

                  {/* Tech Specs & Testing Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans text-xs">
                    <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5 text-stone-600" />
                        <span>Apparatus, Tools & Reagents:</span>
                      </div>
                      <div className="text-stone-600 text-[11px] leading-relaxed">
                        {proj.equipment}
                      </div>
                    </div>

                    <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5 text-stone-600" />
                        <span>Objective Quantitative Metrics:</span>
                      </div>
                      <div className="text-stone-600 text-[11px] leading-relaxed">
                        {proj.metrics}
                      </div>
                    </div>
                  </div>

                  {/* Judge Appeal */}
                  <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200/80 font-sans text-xs text-amber-950">
                    <strong>KSEF Judge Defense & Winning Edge:</strong> {proj.judgeAppeal}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* KSEF Official Rubric Guide (Final Page) */}
          <div className="page-break-before pt-10 mt-12 border-t-2 border-emerald-900 font-sans text-xs sm:text-sm">
            <h2 className="text-lg font-bold text-emerald-900 uppercase tracking-wide mb-2">
              Official KSEF Marking Scheme & Presentation Breakdown
            </h2>
            <p className="text-stone-600 mb-4 text-xs">
              Every project is evaluated by a panel of judges out of a standard 80 marks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                <div className="text-emerald-800 font-bold text-sm mb-1">Part A: Written Report</div>
                <div className="text-xs font-semibold text-stone-500 mb-2">30 Marks Maximum</div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Clear problem definition, exhaustive literature review with APA citations, explicit variables, comprehensive raw & processed tables, and signed plagiarism declaration.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                <div className="text-emerald-800 font-bold text-sm mb-1">Part B: Oral Defense</div>
                <div className="text-xs font-semibold text-stone-500 mb-2">15 Marks Maximum</div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Deep personal mastery of the underlying science/algorithms, prompt answers without looking at notes, equal teamwork participation, and clear scientific speech.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                <div className="text-emerald-800 font-bold text-sm mb-1">Part C: Scientific Method</div>
                <div className="text-xs font-semibold text-stone-500 mb-2">35 Marks Maximum</div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Originality of design, experimental rigor (triplicate trials, N &gt;= 3), statistical error bars, instrument calibration, and tangible contribution to Kenya Vision 2030.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-stone-600">
              <div>
                <div className="border-b border-stone-400 w-48 mb-1"></div>
                <div>Lead Student Investigator Signature & Date</div>
              </div>
              <div>
                <div className="border-b border-stone-400 w-48 mb-1"></div>
                <div>Science Fair Patron / School Principal Stamp & Date</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Footer */}
      <footer className="no-print max-w-5xl mx-auto px-4 pb-12 text-center text-xs text-stone-500 font-sans">
        <p>
          💡 <strong>Multi-Page PDF Ready:</strong> Click <em>"Download Multi-Page PDF"</em> for an instant multi-page document file containing all 20 structured projects, or <em>"Print All"</em> for high-resolution A4 printing.
        </p>
      </footer>
    </div>
  );
}
