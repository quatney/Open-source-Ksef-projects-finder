export interface ProjectItem {
  id: string;
  number: number;
  title: string;
  category: string;
  domain: 'Computer Science & AI' | 'Robotics & Engineering' | 'Agriculture & Food Tech' | 'Environmental & Chemistry' | 'Energy & Physics' | 'Biomedical & Health';
  problem: string;
  innovation: string;
  methodology: string;
  equipment: string;
  metrics: string;
  costKSh: number;
  feasibility: 'Very High' | 'High' | 'Moderate';
  judgeAppeal: string;
}

export const KSEF_PROJECTS: ProjectItem[] = [
  // --- COMPUTER SCIENCE & AI ---
  {
    id: 'cs-01',
    number: 1,
    title: 'Offline Edge-AI Acoustic Detection of Stored Grain Weevils (Sitophilus zeamais) Using Low-Cost Microcontrollers (ESP32) and TinyML',
    category: 'Computer Science & Artificial Intelligence',
    domain: 'Computer Science & AI',
    problem: 'Maize weevils destroy over 20% of Kenya\'s stored grain harvest. Infestations inside grain silos and hermetic bags are invisible until extensive hollow-grain damage has occurred.',
    innovation: 'Deploys a lightweight quantized TinyML convolutional neural network on an ultra-cheap ESP32 microcontroller connected to an acoustic contact piezo-sensor. It detects the faint acoustic chewing and locomotion clicks (1.5 kHz–4.5 kHz) of larvae inside grains before external holes appear, entirely offline with zero cloud internet dependency.',
    methodology: 'Audio dataset collection of infested vs. clean grain; frequency band-pass filtering (FFT); model training using Edge Impulse / TensorFlow Lite for Microcontrollers; deployment onto ESP32 with sleep cycles powered by a coin cell battery; validation against visual destructive grain dissection.',
    equipment: 'ESP32 development board (KSh 750), contact piezo microphone element (KSh 150), pre-amplifier module (MAX9814 - KSh 350), 10 kg maize, glass jars.',
    metrics: 'Classification accuracy (%), False Positive Rate (%), detection latency (ms), battery current consumption in deep sleep (uA), earliest day of infestation detection.',
    costKSh: 2200,
    feasibility: 'Very High',
    judgeAppeal: 'Exceptional. Combines cutting-edge edge AI/TinyML with Kenya\'s most critical food security crisis without requiring internet or expensive cloud servers.'
  },
  {
    id: 'cs-02',
    number: 2,
    title: 'Low-Bandwidth Offline Computer Vision Mobile Diagnostic Engine for Early Blight and Bacterial Wilt in Smallholder Solanaceae Crops',
    category: 'Computer Science & Software Engineering',
    domain: 'Computer Science & AI',
    problem: 'Smallholder tomato and potato farmers in Kinangop and Meru misdiagnose early blight (Alternaria solani) and bacterial wilt (Ralstonia solanacearum), spraying wrong, expensive fungicides and worsening chemical resistance.',
    innovation: 'An offline-first Android application running a heavily quantized MobileNetV3 model fine-tuned on an indigenous Kenyan dataset of leaf lesions under direct equatorial sun and shade. Operates 100% without internet connectivity, providing immediate diagnosis and localized organic remediation guidance.',
    methodology: 'Creation of a balanced dataset (1,200 photos of Kenyan tomato/potato leaves across disease stages); training with transfer learning; 8-bit integer quantization (INT8 TFLite); testing against certified agricultural extension officer field diagnoses.',
    equipment: 'Any standard Android smartphone (student or parent phone), Python/PyTorch or Google Colab (free tier), phone camera.',
    metrics: 'Model F1-score, inference time per image on budget CPU (<150ms), model file size (<8MB), diagnostic agreement rate with certified plant pathologist.',
    costKSh: 500,
    feasibility: 'Very High',
    judgeAppeal: 'High marks in Computer Science for addressing the rural "digital divide" through fully offline edge inference rather than generic cloud API wrappers.'
  },
  {
    id: 'cs-03',
    number: 3,
    title: 'Cryptographic Decentralized Water Rationing Quota and Anti-Tamper Token System for Rural Solar Boreholes',
    category: 'Computer Science & Information Technology',
    domain: 'Computer Science & AI',
    problem: 'Water disputes and physical vandalism around community boreholes in Turkana and Garissa during droughts due to lack of transparent, verifiable water distribution records.',
    innovation: 'A lightweight cryptographic hashing protocol and offline token dispenser run on an Arduino/ESP32 linked to an electronic pulse flowmeter. Generates cryptographic time-stamped proof-of-quota tokens, preventing double-dispensing and ledger manipulation without requiring cellular internet.',
    methodology: 'Implementation of SHA-256 micro-hashing on embedded C++; flow rate calibration using Hall-effect water pulse meter; simulation of adversarial attacks (clock rollback, replay token attacks); hardware flow valve latching testing.',
    equipment: 'ESP32 / Arduino Uno, 12V solenoid valve, 1/2-inch pulse water flowmeter (YF-S201 - KSh 600), 4x4 keypad, 16x2 I2C LCD display.',
    metrics: 'Water metering accuracy (deviation in mL), cryptographic transaction verification time (ms), tampering rejection rate (100%), power consumption.',
    costKSh: 3400,
    feasibility: 'High',
    judgeAppeal: 'Strong algorithmic security combined with real pastoralist drought-conflict mitigation.'
  },
  {
    id: 'cs-04',
    number: 4,
    title: 'Low-Cost Optical Braille-to-Speech Real-Time Translation Reader for Kenyan Secondary School Science Diagrams',
    category: 'Computer Science / Assistive Technology',
    domain: 'Computer Science & AI',
    problem: 'Visually impaired students in specialized Kenyan schools (e.g. Thika School for the Blind) face severe shortages of tactile STEM and science textbooks, which cost >KSh 5,000 per volume to transcribe.',
    innovation: 'A custom, low-cost overhead camera scanner using shadow-enhancement image filtering (directional side-LED illumination) that detects embossed Braille dots on ordinary paper, translates standard Grade 2 Braille text, and vocalizes it via an offline text-to-speech synthesizer.',
    methodology: 'Computer vision dot segmentation using adaptive thresholding and morphological operators; Braille character matrix lookup algorithm; offline eSpeak synthesis outputted via 3.5mm audio jack.',
    equipment: 'Raspberry Pi Zero 2W or recycled Android phone, Pi camera module or webcam (KSh 900), directional LED strip, wooden frame, earphones.',
    metrics: 'Character recognition accuracy under variable ambient lighting (%), translation speed (words per minute), error rate on deformed/aged Braille paper.',
    costKSh: 4200,
    feasibility: 'High',
    judgeAppeal: 'Touches special needs education, human rights, and applied image processing. Judges consistently reward high-utility assistive tools.'
  },
  {
    id: 'cs-05',
    number: 5,
    title: 'Offline Ultrasonic Bat-Bio-Inspired Pest Deterrent Algorithm with Dynamic Frequency Modulation against Nocturnal Crop Moths',
    category: 'Computer Science / Physics & Embedded Systems',
    domain: 'Computer Science & AI',
    problem: 'African bollworm and armyworm adult moths mate and lay hundreds of eggs on crops during the night. Chemical spraying is hazardous and fails against adult flyers.',
    innovation: 'An embedded system that mimics predatory insectivorous bat echolocation biosignals (25 kHz–45 kHz). Uses a pseudo-random frequency hopping algorithm programmed on an AVR microcontroller to prevent moth habituation, triggering evasive landing reflexes and halting oviposition.',
    methodology: 'Algorithm programming for variable duty-cycle PWM ultrasonic signal generation; testing moth behavioral avoidance in a controlled flight enclosure; monitoring egg deposition counts on treated vs. untreated maize seedlings.',
    equipment: 'Arduino Nano (KSh 450), 2x piezoelectric ultrasonic transducers (KSh 300), MOSFET driver circuit, 9V battery/solar cell, flight mesh cage.',
    metrics: 'Reduction in oviposition / egg cluster counts (%), moth flight flight-path deviation angle, sound pressure level (dB) attenuation over distance.',
    costKSh: 1800,
    feasibility: 'Very High',
    judgeAppeal: 'Fascinating intersection of evolutionary biology, physics, and embedded algorithmic control.'
  },

  // --- ROBOTICS & APPLIED ENGINEERING ---
  {
    id: 'rob-01',
    number: 6,
    title: 'Autonomous Cable-Driven Fluvial Plastic Debris Interceptor and Water Quality Profiling Rover for Urban Canals',
    category: 'Robotics & Mechanical Engineering',
    domain: 'Robotics & Engineering',
    problem: 'Urban rivers like Nairobi River and Ngong River are choked with floating plastic bags and bottles that clog drainage conduits, causing devastating flash floods.',
    innovation: 'A floating catamaran interceptor powered by an anchored continuous cable pulley system driven by a stationary solar-powered motor on the bank. Uses a passive conveyor rake to collect surface plastics while simultaneously logging dissolved oxygen, turbidity, and temperature coordinates.',
    methodology: 'Hydrodynamic hull fabrication from recycled PVC pipes; mechanical rake torque calculations; stepper motor control; sensor calibration; field testing in an irrigation canal or stream.',
    equipment: 'Recycled PVC pipes, 12V high-torque DC wiper motor, bicycle chain/cable, turbidity sensor (KSh 800), analog pH/temp probe, 20W solar panel.',
    metrics: 'Plastic retrieval mass capacity per hour (kg/hr), debris diversion efficiency (%), power autonomy duration, spatial water quality mapping.',
    costKSh: 5800,
    feasibility: 'High',
    judgeAppeal: 'Visual showstopper on display. Directly tackles the Nairobi River cleanup agenda with demonstrable physical automation.'
  },
  {
    id: 'rob-02',
    number: 7,
    title: 'Low-Cost Dual-Axis Solar Photovoltaic Tracker Utilizing Closed-Loop LDR Bridge and Non-Linear Gravitational Water Counterweight Actuation',
    category: 'Energy and Transportation / Mechanical Engineering',
    domain: 'Robotics & Engineering',
    problem: 'Fixed solar panels in rural off-grid institutions lose up to 35% of daily solar irradiance potential due to poor sun incidence angles, while electric motor trackers consume significant power.',
    innovation: 'A hybrid semi-passive tracking system: East-to-West daily tracking uses controlled gravity discharge of water through an orifice, while North-to-South seasonal tilt uses a tiny micro-servo governed by a 4-quadrant Light Dependent Resistor (LDR) analog comparator bridge.',
    methodology: 'Design of hydraulic orifice discharge rate matching earth rotation velocity (15 deg/hr); electrical comparative testing of power output (Wh) between fixed 15-degree panel vs. tracking panel across 14 consecutive days.',
    equipment: 'Two identical 10W solar panels, 4x LDRs, LM393 comparator IC, micro servo motor, plastic counterweight water canisters, digital multimeters.',
    metrics: 'Cumulative electrical energy generated (Watt-hours/day), tracking error angle (degrees), parasitic power consumption of tracker mechanism.',
    costKSh: 3200,
    feasibility: 'Very High',
    judgeAppeal: 'Judges appreciate the ingenuity of combining low-tech hydraulic gravity drive with electronics to eliminate parasitic battery drain.'
  },
  {
    id: 'rob-03',
    number: 8,
    title: 'Self-Leveling Gyroscopic Suspension Carrier for Bicycle and Boda-Boda Transport of Fragile Veterinary Vaccines and Blood Vials',
    category: 'Mechanical Engineering & Healthcare Technology',
    domain: 'Robotics & Engineering',
    problem: 'Rural health clinics and artificial insemination technicians in Kenya transport fragile glass vaccine vials, antibiotics, and blood samples over rough, unpaved murram roads on motorbikes. Severe mechanical vibrations cause ampoule breakage and protein denaturation.',
    innovation: 'A 2-axis motorized gyroscopic gimbal box stabilized by an MPU6050 accelerometer-gyroscope sensor and closed-loop PID control, insulated with vacuum-flask thermal casing.',
    methodology: 'Fabrication of aluminum/wood gimbal rings; PID tuning on Arduino; vibration testing by riding over standardized rumble strips and measuring G-force shock dampening via a 3-axis accelerometer data logger.',
    equipment: 'Arduino Nano, MPU-6050 IMU sensor (KSh 350), 2x SG90/MG995 servo motors, wooden/acrylic gimbal frame, Styrofoam cold chamber.',
    metrics: 'Peak acceleration shock attenuation (G-force reduction %), angular orientation error during tilt, temperature stability over 4 hours.',
    costKSh: 2800,
    feasibility: 'Very High',
    judgeAppeal: 'Practical, high-impact rural healthcare logistics innovation with a dynamic live demonstration.'
  },

  // --- AGRICULTURE & FOOD TECHNOLOGY ---
  {
    id: 'ag-01',
    number: 9,
    title: 'Dual-Action Passive Charcoal Evaporative Cooler Incorporating Potassium Permanganate Clay Ethylene Scrubber and Neem Antifungal Wick',
    category: 'Agriculture & Food Technology',
    domain: 'Agriculture & Food Tech',
    problem: 'Tomatoes and kales rot within 5–7 days in tropical markets. Conventional charcoal coolers cool the air but create high humidity that incubates mold while trapped ethylene gas triggers fast over-ripening.',
    innovation: 'Couples a wetted charcoal matrix infused with volatile neem leaf extract (suppressing mold spores) with an upper convective chimney packed with porous clay pellets soaked in KMnO4 that chemically oxidizes ethylene (3 C2H4 + 2 KMnO4 + 4 H2O -> 3 C2H4(OH)2 + 2 MnO2 + 2 KOH).',
    methodology: 'Triplicate 21-day trial on mature green tomatoes (N = 45); continuous logging of temperature and relative humidity; physiological weight loss (PWL %); fruit firmness penetrometry; titratable acidity titration with 0.1M NaOH.',
    equipment: 'Timber offcuts, wire mesh, lump charcoal, local red clay, potassium permanganate crystals (school lab), digital hygrometer probes, burette.',
    metrics: 'Shelf-life extension (21 days vs 7 days ambient), physiological weight loss (3.8% vs 19.4%), decay incidence (6.7% vs 60%), titratable acidity retention.',
    costKSh: 3600,
    feasibility: 'Very High',
    judgeAppeal: 'Flawless execution potential. Uses standard school chemistry supplies to solve a multibillion-shilling agricultural loss.'
  },
  {
    id: 'ag-02',
    number: 10,
    title: 'Porous Sintered Clay-Sawdust Sub-Surface Micro-Capillary Emitter Cartridge for Zero-Evaporation Smallholder Irrigation',
    category: 'Agriculture & Environmental Engineering',
    domain: 'Agriculture & Food Tech',
    problem: 'Commercial plastic drip emitters clog constantly with turbid borehole water and silt, while overhead sprinkler watering loses up to 50% to surface evaporation in ASAL regions.',
    innovation: 'A modular ceramic sub-surface emitter cylinder extruded from local red pottery clay blended with sieved carpenter sawdust. During pit firing, sawdust burns out, leaving tortuous micropores that release water strictly via soil capillary suction tension.',
    methodology: 'Formulation of clay-sawdust ratios (10%, 20%, 30%, 40%); firing in charcoal kiln; hydraulic conductivity testing under variable water heads; moisture tensiometer soil profiling; tomato plot yield comparison.',
    equipment: 'Local red clay, fine wood sawdust, PVC fittings, recycled 5L bottles, soil moisture tensiometer or soil drying oven balance.',
    metrics: 'Discharge rate vs soil matric potential (mL/hr), water saving efficiency (% water saved per kg yield), zero-clogging operational lifespan.',
    costKSh: 1800,
    feasibility: 'Very High',
    judgeAppeal: 'Ancient physics (olla effect) modernized into an engineering cartridge; exceptionally high relevance to drought resilience.'
  },
  {
    id: 'ag-03',
    number: 11,
    title: 'Synergistic Botanical Nano-Emulsion of Tagetes minuta and Ocimum basilicum for Oviposition Deterrence and Control of Fall Armyworm (Spodoptera frugiperda)',
    category: 'Agriculture & Biotechnology',
    domain: 'Agriculture & Food Tech',
    problem: 'Fall armyworm devastates Kenyan maize fields, forcing smallholders into heavy debt purchasing toxic synthetic pesticides that poison local soils and beneficial pollinators.',
    innovation: 'Steam-distilled essential oils from wild Mexican marigold (Tagetes minuta) and wild sweet basil formulated into a long-lasting aqueous micro-emulsion using local gum arabic and vegetable oil as natural surfactants and UV-stabilizers.',
    methodology: 'Extraction using simple laboratory condenser; emulsion droplet stability checks; Y-tube olfactometer behavioral choice bioassays on adult female moths; contact larval mortality bioassays (LC50 determination over 24h, 48h).',
    equipment: 'Simple glass steam distillation rig, Y-tube olfactometer (glass tubing), field-collected armyworm larvae, potted maize plants.',
    metrics: 'Moth oviposition deterrence index (%), larval mortality rate (% LC50), field wash-off resistance under simulated rain.',
    costKSh: 2500,
    feasibility: 'High',
    judgeAppeal: 'Rigorous biological chemistry with clean statistical curves and direct support for organic sustainable farming.'
  },
  {
    id: 'ag-04',
    number: 12,
    title: 'Solar-Thermal Convective Tunnel Dryer with Integrated Castor-Oil Phase Change Material (PCM) for Continuous Day-Night Fruit Dehydration',
    category: 'Agriculture & Renewable Energy',
    domain: 'Agriculture & Food Tech',
    problem: 'Open-air sun drying of mangoes and bananas in Eastern Kenya exposes fruit to dust, insects, and fungal rot, while traditional solar dryers stop operating at sunset, causing moisture reabsorption.',
    innovation: 'An indirect solar convective tunnel dryer with a bottom thermal storage bed filled with hydrogenated castor oil / paraffin wax composite inside recycled glass bottles. Stores latent heat during peak sun and releases it at night to maintain drying temperatures >45°C.',
    methodology: 'Solar air heater collector fabrication with matte-black corrugated roofing sheet; temperature gradient logging across day and night; moisture content loss rate (g/hr) of sliced mangoes; rehydration ratio testing.',
    equipment: 'Timber, clear polythene/glass, black corrugated mabati sheet, recycled glass bottles, castor/paraffin wax, digital food thermometer, scale.',
    metrics: 'Final moisture content (<12%), drying time reduction (hours), night-time chamber temperature elevation over ambient (ΔT °C).',
    costKSh: 3900,
    feasibility: 'High',
    judgeAppeal: 'Combines thermodynamics, materials science, and food processing in an impressive physical build.'
  },

  // --- ENVIRONMENTAL SCIENCE & WATER QUALITY ---
  {
    id: 'env-01',
    number: 13,
    title: 'Chemically Activated and Iron/Aluminium Coated Volcanic Pumice Packed Bed for Continuous Gravity-Fed Groundwater Defluoridation in the Rift Valley',
    category: 'Environmental Science & Chemistry',
    domain: 'Environmental & Chemistry',
    problem: 'Toxic geogenic fluoride levels (4–18 mg/L) in Nakuru, Baringo, and Naivasha boreholes cause severe skeletal and dental fluorosis. Commercial bone char has strong cultural and religious taboos and taste issues.',
    innovation: 'Takes abundant, zero-cost Rift Valley volcanic pumice, activates it with mild acid, and precipitates an ultra-thin layer of aluminium hydroxide (Al(OH)3) onto its internal pores, creating a culturally neutral, high-capacity fluoride ligand-exchange adsorbent.',
    methodology: 'Crushing and sieving pumice (0.8–1.6mm); acid leaching; chemical coating with alum and sodium bicarbonate; batch equilibrium isotherms (Langmuir/Freundlich); fixed-bed column breakthrough testing using authentic Nakuru borehole water.',
    equipment: 'Raw volcanic pumice, alum, sodium bicarbonate, SPADNS fluoride reagent or spectrophotometer/fluoride probe, acrylic column tubing.',
    metrics: 'Fluoride adsorption capacity (mg/g), bed volumes treated to WHO 1.5 mg/L breakthrough limit, regeneration efficiency with dilute NaOH (%).',
    costKSh: 4800,
    feasibility: 'High',
    judgeAppeal: 'Elite environmental chemistry. Direct solution to a lifelong public-health crisis in Kenya with rigorous dynamic breakthrough curves.'
  },
  {
    id: 'env-02',
    number: 14,
    title: 'Anaerobic Kinetic Pre-Treatment of Invasive Lake Victoria Water Hyacinth with Bovine Rumen Fluid for Enhanced Biogas Methane Yield',
    category: 'Environmental Science & Biotechnology',
    domain: 'Environmental & Chemistry',
    problem: 'Invasive water hyacinth chokes Lake Victoria. Untreated digestion of hyacinth yields very low biogas because of tough lignocellulose that standard bacteria cannot break down.',
    innovation: 'Pre-incubates chopped water hyacinth in fresh bovine rumen fluid (collected free from slaughterhouses) containing specialized native cellulolytic microbes (Fibrobacter succinogenes) to break down lignin before entering the anaerobic digester.',
    methodology: 'Batch digestion in 5L aspirator bottles across pre-treatment times (0h, 12h, 24h, 48h); measurement of gas volume via inverted water displacement; methane fraction determination by scrubbing CO2 through concentrated potassium hydroxide (KOH) solution.',
    equipment: 'Plastic 5L containers, rubber tubes, fresh rumen fluid, harvested water hyacinth, KOH pellets, graduated measuring cylinder.',
    metrics: 'Cumulative methane volume per gram volatile solids (mL CH4/g VS), digester lag phase reduction (days), total solids degradation (%).',
    costKSh: 1900,
    feasibility: 'Very High',
    judgeAppeal: 'Circular blue-economy innovation turning two ecological nuisances (hyacinth and slaughterhouse rumen waste) into clean cooking energy.'
  },
  {
    id: 'env-03',
    number: 15,
    title: 'Upcycling Waste Expanded Polystyrene (EPS) and Macadamia Nut Shell Flour into Lightweight, Fire-Retardant Thermal Insulation Ceiling Boards',
    category: 'Environmental Science & Materials Engineering',
    domain: 'Environmental & Chemistry',
    problem: 'Corrugated iron-sheet roofs (mabati) in informal settlements and ASAL homes create extreme indoor heat (>38°C), while waste polystyrene packaging litters urban streets.',
    innovation: 'Dissolves waste packaging styrofoam in d-limonene (natural citrus solvent) or minimal acetone, blending it with finely ground macadamia nut shell bio-filler and sodium borate (borax) fire retardant to cast rigid, insulating architectural ceiling panels.',
    methodology: 'Composite formulation at varying shell flour loadings (0% to 50%); density and water absorption testing; thermal conductivity measurement via guarded hot plate; flammability testing (burn rate mm/min).',
    equipment: 'Waste EPS foam, ground macadamia shells/sawdust, technical borax, wooden mold press, thermocouple temperature probes.',
    metrics: 'Thermal conductivity k-value (W/m·K), flexural bending strength (MPa), flame spread rating, production cost per square meter.',
    costKSh: 2400,
    feasibility: 'Very High',
    judgeAppeal: 'Highly tangible green building material that tackles both urban plastic waste and severe tropical indoor heat stress.'
  },
  {
    id: 'env-04',
    number: 16,
    title: 'Pyrolyzed Acid-Activated Coffee Husk Biochar for the Continuous Adsorptive Removal of Synthetic Azo Dyes from Cottage Textile Effluents',
    category: 'Chemistry & Environmental Management',
    domain: 'Environmental & Chemistry',
    problem: 'Small-scale tie-and-dye and garment cottage businesses discharge non-biodegradable synthetic dyes into Nairobi and River Athi tributaries, blocking sunlight and poisoning aquatic life.',
    innovation: 'Synthesizes high-surface-area mesoporous biochar from abundant coffee processing waste husks via low-temperature oxygen-limited pyrolysis (400°C) with phosphoric acid surface activation, achieving rapid decolorization of azo dyes.',
    methodology: 'Oxygen-limited pyrolysis in steel drum; acid activation; spectrophotometric/colorimetric batch adsorption of methylene blue/reactive red dyes; pseudo-second-order kinetic modeling.',
    equipment: 'Coffee husks, enclosed steel container, charcoal stove, phosphoric or citric acid, colorimeter or standard test tubes, dye powder.',
    metrics: 'Percentage dye removal efficiency (>95%), maximum adsorption capacity qmax (mg/g), equilibrium contact time (min).',
    costKSh: 2100,
    feasibility: 'Very High',
    judgeAppeal: 'Classic analytical chemistry with profound environmental relevance to Kenya\'s textile and river pollution challenges.'
  },

  // --- PHYSICS, ENERGY & APPLIED MATERIALS ---
  {
    id: 'phy-01',
    number: 17,
    title: 'Thermoelectric Energy Harvesting Rocket Cookstove with Heat-Pipe Interface for Simultaneous Off-Grid Evening Study Lighting',
    category: 'Physics & Energy Technology',
    domain: 'Energy & Physics',
    problem: 'Over 6 million rural Kenyan homes cook with wood or charcoal by the dim light of dirty kerosene lamps or smartphone torches while having no electrical lighting for students to study.',
    innovation: 'Mounts a thermoelectric Seebeck generator (TEG) onto the external clay-insulated wall of an improved cookstove using an aluminum heat pipe and passive thermosiphon water reservoir to maintain a continuous ΔT > 100°C without burning out the semiconductor module.',
    methodology: 'Thermal profiling of stove wall; open-circuit voltage and load current curves through variable resistors; powering a 3W high-efficiency LED lamp; overall thermal-to-electrical efficiency calculation.',
    equipment: 'Clay rocket stove (Jiko Kisasa), 2x SP1848 TEG modules (KSh 400 each), aluminum heat sinks, thermal paste, multimeter, 5V boost regulator, LED light.',
    metrics: 'Peak power output (Watts), stable voltage (Volts), lumens output at 1 meter, continuous operating time per cooking session.',
    costKSh: 2600,
    feasibility: 'Very High',
    judgeAppeal: 'Live, working physics demonstration right in front of judges that lights up a lamp directly from burning twigs.'
  },
  {
    id: 'phy-02',
    number: 18,
    title: 'Sub-Critical Amorphous Silica Pozzolan Extraction from Rice Husk Ash for Affordable Low-Carbon Construction Mortar',
    category: 'Physics & Civil Engineering Materials',
    domain: 'Energy & Physics',
    problem: 'Portland cement is expensive (KSh 800+ per bag) and carbon-intensive, while millions of tons of rice husks are dumped or burned in open fields across Mwea and Ahero.',
    innovation: 'Standardizes an insulated combustion protocol in a regulated-air drum kiln at 550°C–650°C to produce reactive amorphous silica ash (rather than toxic, non-reactive crystalline silica), which reacts with slaked lime to create Portland-free cementitious mortar.',
    methodology: 'Controlled thermal burning; electrical conductivity testing of saturated lime solutions to verify pozzolanic reactivity; casting 50mm mortar test cubes (replacing 20%–40% cement); compressive failure testing at 7, 14, and 28 days.',
    equipment: 'Rice husks, converted 200L oil drum kiln, slaked lime, builder\'s sand, cube molds, mechanical lever load testing frame.',
    metrics: 'Compressive strength (MPa at 28 days), electrical conductivity drop rate (uS/cm), water absorption percentage.',
    costKSh: 2800,
    feasibility: 'High',
    judgeAppeal: 'Civil engineering and solid-state materials science offering a concrete, measurable route to low-cost housing.'
  },

  // --- BIOMEDICAL & PUBLIC HEALTH ---
  {
    id: 'med-01',
    number: 19,
    title: 'Low-Cost Point-of-Milking Bromothymol Blue and Detergent Gel Diagnostic Strip for Rapid Detection of Sub-Clinical Mastitis in Smallholder Cows',
    category: 'Biomedical & Veterinary Technology',
    domain: 'Biomedical & Health',
    problem: 'Sub-clinical mastitis quietly reduces milk yields by 20%–30% in Kenyan dairy cattle, but farmers only detect it when milk turns clotted and cows are permanently damaged.',
    innovation: 'A dry-reagent paper test strip impregnated with a buffered bromothymol blue and sodium dodecyl sulfate (SDS) matrix. Reacts within 15 seconds to elevated milk pH and somatic cell somatic enzymes, producing an unmistakable color shift from yellow to deep blue.',
    methodology: 'Filter paper strip chemical impregnation; bench testing against calibrated milk samples across somatic cell ranges; sensitivity and specificity benchmarking against commercial California Mastitis Test (CMT) liquids.',
    equipment: 'Whatman filter paper, bromothymol blue indicator, SDS detergent, sodium citrate buffer, fresh raw milk samples from local dairy cows.',
    metrics: 'Diagnostic sensitivity (%), specificity (%), reaction time (seconds), dry strip shelf stability over 60 days.',
    costKSh: 1900,
    feasibility: 'Very High',
    judgeAppeal: 'Immediate financial impact for Kenyan dairy farmers; pristine biochemistry executed with basic reagents.'
  },
  {
    id: 'med-02',
    number: 20,
    title: 'Non-Electric Solar-Thermal Autoclave with Bimetallic Safety Release Valve for Rural Primary Healthcare Clinic Sterilization',
    category: 'Biomedical Engineering & Applied Physics',
    domain: 'Biomedical & Health',
    problem: 'Rural off-grid dispensaries in remote areas lack reliable electricity to run electric autoclaves, risking lethal surgical infections from improperly sterilized forceps and scalpels.',
    innovation: 'A portable pressure-cooker based autoclave driven by a high-efficiency parabolic solar concentrator, regulated by a bimetallic thermal valve that strictly maintains the WHO sterilization threshold of 121°C at 15 psi (103 kPa) for 20 continuous minutes.',
    methodology: 'Parabolic solar dish fabrication with mirrored adhesive film; pressure and temperature gauge calibration; microbial sterilization verification using heat-tolerant non-pathogenic spore indicator strips (Bacillus stearothermophilus simulant).',
    equipment: 'Standard commercial domestic pressure cooker (5L - KSh 2,000), pressure gauge & thermometer probe, parabolic dish frame, shiny mylar film.',
    metrics: 'Time to reach 121°C (minutes), pressure holding stability (psi), sterilization efficacy on bacterial culture swabs.',
    costKSh: 4200,
    feasibility: 'High',
    judgeAppeal: 'Addresses a life-or-death rural healthcare problem with pure applied thermodynamics.'
  }
];
