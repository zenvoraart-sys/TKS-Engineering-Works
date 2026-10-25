export const business = {
  name: 'TKS Engineering Works',
  established: '2005',
  city: 'Chennai, Tamil Nadu',
  address: 'No 64, Mugappair Rd, Padi, Chennai, Tamil Nadu 600058',
  email: 'tksengneering2004@gmail.com',
  phone: '+91 93455 06409',
  phoneHref: 'tel:+919345506409',
  whatsappHref:
    'https://wa.me/919345506409?text=Hello%20TKS%20Engineering%20Works%2C%20I%20would%20like%20to%20request%20a%20quote.',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=No%2064%2C%20Mugappair%20Rd%2C%20Padi%2C%20Chennai%2C%20Tamil%20Nadu%20600058',
  hours: ['Monday-Sunday: 9 AM-6 PM'],
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Steel Fabrication Service',
    summary:
      'Steel fabrication work delivered with skilled professionals, quality material and practical project execution.',
    image: '/projects/service-steel-fabrication.jpeg',
  },
  {
    title: 'SS Fabrication Service',
    summary:
      'Stainless steel fabrication using modern methods, aligned to customer preferences and budget.',
    image: '/projects/equipment-support-clean.jpeg',
  },
  {
    title: 'Structural Roofing & Truss Work',
    summary:
      'Structural roofing, canopy and truss work for durable building and site requirements.',
    image: '/projects/hero-structural-roofing.jpeg',
  },
  {
    title: 'Stainless Steel Railing',
    summary:
      'Rugged stainless steel railing work for functional, long-lasting and clean architectural finishes.',
    image: '/projects/temple-entry-railing.jpeg',
  },
  {
    title: 'Stainless Steel & MS Gates',
    summary:
      'SS gates, MS gates and railing gates designed for security, durability and everyday use.',
    image: '/projects/service-ss-gate.jpeg',
  },
  {
    title: 'Rolling Shutter',
    summary:
      'Rolling shutter work for building openings and other project requirements.',
    image: '/projects/service-rolling-shutter.jpeg',
  },
  {
    title: 'Metal Grills',
    summary:
      'Design and metal grills for windows, openings and other building requirements.',
    image: '/projects/service-design-grill.jpeg',
  },
  {
    title: 'Gazebos',
    summary:
      'Customisable gazebo structures in different sizes and designs, planned around the intended space.',
    image: '/projects/canopy-frame-wide.jpeg',
  },
  {
    title: 'Metal Angle',
    summary:
      'MS angle and angle products for fabrication and building requirements.',
    image: '/projects/service-metal-angle.jpeg',
  },
];

export const projectCategories = [
  'Structural & roofing',
  'Steel fabrication',
  'Gates & access',
  'Railings & grills',
  'Custom metalwork',
  'Other',
];

export const solutions = [
  {
    title: 'Site-Fit Fabrication',
    text: 'Fabrication work planned around actual site conditions, access, installation sequence and usage needs.',
    image: '/projects/base-plate-detail.jpeg',
  },
  {
    title: 'Architectural Metalwork',
    text: 'Gates, railings, grills and canopy frames that balance clean appearance with long-term strength.',
    image: '/projects/decorative-gate.jpeg',
  },
  {
    title: 'Roofing & Support Structures',
    text: 'Structural roofing, truss and support frame solutions for residential, commercial and industrial spaces.',
    image: '/projects/large-structural-frame.jpeg',
  },
];

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'structural-roof-truss-installation',
    title: 'Structural Roof Truss Installation',
    category: 'Structural Roofing & Truss Work',
    description: 'Fabricated steel roof supports assembled on site to carry the roofing structure.',
    image: '/projects/hero-structural-roofing.jpeg',
    featured: true,
  },
  {
    id: 'steel-canopy-frame-installation',
    title: 'Steel Canopy Frame Installation',
    category: 'Structural Roofing & Truss Work',
    description: 'Steel canopy frame members positioned and joined to form a covered outdoor structure.',
    image: '/projects/canopy-frame-wide.jpeg',
    featured: false,
  },
  {
    id: 'large-outdoor-frame',
    title: 'Large Outdoor Steel Framework',
    category: 'Steel Fabrication',
    description: 'Large steel members fitted together on site to create an open structural frame.',
    image: '/projects/large-structural-frame.jpeg',
    featured: true,
  },
  {
    id: 'rooftop-frame',
    title: 'Rooftop Metal Frame',
    category: 'Structural Work',
    description: 'Rooftop steel framing fabricated and assembled for an exterior structure.',
    image: '/projects/rooftop-frame.jpeg',
    featured: true,
  },
  {
    id: 'staircase-railing',
    title: 'Staircase Railing',
    category: 'Railing & Gate',
    description: 'Metal railing fitted along an interior staircase for edge protection and support.',
    image: '/projects/staircase-railing.jpeg',
    featured: false,
  },
  {
    id: 'rooftop-gazebo-01',
    title: 'Rooftop Shingle-Roof Gazebo',
    category: 'Gazebos',
    description: 'A four-post rooftop gazebo structure finished with a pitched shingle roof.',
    image: '/projects/rooftop-gazebo-01.jpeg',
    featured: false,
  },
  {
    id: 'timber-tread-steel-staircase',
    title: 'Steel Staircase with Timber Treads',
    category: 'Steel Fabrication Service',
    description: 'An open steel staircase fitted with timber treads and a matching handrail finish.',
    image: '/projects/timber-tread-steel-staircase.jpeg',
    featured: false,
  },
  {
    id: 'entry-metal-grille',
    title: 'Full-Height Entry Grille',
    category: 'Metal Grills',
    description: 'Vertical metal bars form a full-height security partition at an indoor stair entrance.',
    image: '/projects/entry-metal-grille.jpeg',
    featured: false,
  },
  {
    id: 'industrial-roofing-structure',
    title: 'Industrial Roofing Support Frame',
    category: 'Structural Roofing & Truss Work',
    description: 'Steel supports fitted beneath a large industrial roof and cladding installation.',
    image: '/projects/industrial-roofing-structure.jpeg',
    featured: false,
  },
  {
    id: 'slatted-boundary-fence-wide',
    title: 'Slatted Boundary Fence',
    category: 'Stainless Steel & MS Gates',
    description: 'A long run of steel-framed boundary panels with evenly spaced vertical slats.',
    image: '/projects/slatted-boundary-fence-wide.jpeg',
    featured: false,
  },
  {
    id: 'slatted-boundary-fence-side',
    title: 'Slatted Fence Side Installation',
    category: 'Stainless Steel & MS Gates',
    description: 'Angled view of steel fence bays following the boundary beside a landscaped property.',
    image: '/projects/slatted-boundary-fence-side.jpeg',
    featured: false,
  },
  {
    id: 'wood-look-driveway-gate',
    title: 'Wood-Look Driveway Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A framed driveway gate finished with horizontal wood-look slats.',
    image: '/projects/wood-look-driveway-gate.jpeg',
    featured: false,
  },
  {
    id: 'ornamental-arched-driveway-gate',
    title: 'Arched Ornamental Driveway Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A curved steel driveway gate with wood-look infill and decorative metal details.',
    image: '/projects/ornamental-arched-driveway-gate.jpeg',
    featured: false,
  },
  {
    id: 'curved-walkway-canopy',
    title: 'Curved Walkway Canopy',
    category: 'Structural Roofing & Truss Work',
    description: 'A curved steel canopy frame supports translucent roofing along a narrow passage.',
    image: '/projects/curved-walkway-canopy.jpeg',
    featured: false,
  },
  {
    id: 'park-gazebo-tiled-roof',
    title: 'Park Pavilion with Tiled Roof',
    category: 'Gazebos',
    description: 'A freestanding steel pavilion with a pitched tiled roof in an outdoor recreation area.',
    image: '/projects/park-gazebo-tiled-roof.jpeg',
    featured: false,
  },
  {
    id: 'rooftop-canopy-frame',
    title: 'Rooftop Canopy Support Frame',
    category: 'Structural Roofing & Truss Work',
    description: 'A raised steel grid assembled on a rooftop to support a broad overhead cover.',
    image: '/projects/rooftop-canopy-frame.jpeg',
    featured: false,
  },
  {
    id: 'walnut-panel-double-gate',
    title: 'Walnut-Panel Double Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A paired steel gate with dark framing and broad walnut-look infill panels.',
    image: '/projects/walnut-panel-double-gate.jpeg',
    featured: false,
  },
  {
    id: 'modern-home-entry-gate',
    title: 'Modern Home Entry Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A multi-section metal entry gate with patterned upper panels and wood-look lower panels.',
    image: '/projects/modern-home-entry-gate.jpeg',
    featured: false,
  },
  {
    id: 'ornamental-metal-entrance-gate',
    title: 'Decorative Metal Entrance Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A metal entrance gate with vertical bars and ornamental accents in the grille.',
    image: '/projects/ornamental-metal-entrance-gate.jpeg',
    featured: false,
  },
  {
    id: 'temple-entry-railing',
    title: 'Stainless Steel Entry Railing',
    category: 'Stainless Steel Railing',
    description: 'Metal railings fitted along the approach and steps at a decorated building entrance.',
    image: '/projects/temple-entry-railing.jpeg',
    featured: false,
  },
  {
    id: 'spiral-steel-staircase',
    title: 'Spiral Steel Staircase',
    category: 'Steel Fabrication Service',
    description: 'A compact spiral stair fabricated in metal with a circular outer handrail.',
    image: '/projects/spiral-steel-staircase.jpeg',
    featured: false,
  },
  {
    id: 'decorative-lattice-roof-screen',
    title: 'Decorative Lattice Roof Screen',
    category: 'Architectural Metalwork',
    description: 'Perforated lattice panels fixed within a covered steel frame for screening and airflow.',
    image: '/projects/decorative-lattice-roof-screen.jpeg',
    featured: false,
  },
  {
    id: 'rooftop-gazebo-02',
    title: 'Rooftop Gazebo with Shingle Roof',
    category: 'Gazebos',
    description: 'A compact rooftop pavilion with a pitched shingle roof carried on four supports.',
    image: '/projects/rooftop-gazebo-02.jpeg',
    featured: false,
  },
  {
    id: 'rooftop-gazebo-03',
    title: 'Pitched-Roof Garden Pavilion',
    category: 'Gazebos',
    description: 'A freestanding pavilion structure with a tiled pitched roof and open sides.',
    image: '/projects/rooftop-gazebo-03.jpeg',
    featured: false,
  },
  {
    id: 'radial-roof-support-detail',
    title: 'Radial Steel Roof Support',
    category: 'Steel Fabrication Service',
    description: 'A close view of radial steel members joined to support a patterned overhead finish.',
    image: '/projects/radial-roof-support-detail.jpeg',
    featured: false,
  },
  {
    id: 'wood-finish-steel-staircase',
    title: 'Timber-Finish Staircase',
    category: 'Steel Fabrication Service',
    description: 'A staircase combining a metal support structure with timber treads and handrail.',
    image: '/projects/wood-finish-steel-staircase.jpeg',
    featured: false,
  },
  {
    id: 'tiled-roof-truss-installation',
    title: 'Tiled Roof Truss Installation',
    category: 'Structural Roofing & Truss Work',
    description: 'A steel support frame installed beneath a pitched tiled roof over an open area.',
    image: '/projects/tiled-roof-truss-installation.jpeg',
    featured: false,
  },
  {
    id: 'multi-panel-steel-gate',
    title: 'Multi-Panel Steel Entry Gate',
    category: 'Stainless Steel & MS Gates',
    description: 'A wide multi-leaf gate combining open steel gridwork with solid horizontal infill.',
    image: '/projects/multi-panel-steel-gate.jpeg',
    featured: false,
  },
  {
    id: 'perforated-metal-screen',
    title: 'Perforated Metal Privacy Screen',
    category: 'Architectural Metalwork',
    description: 'Patterned metal panels installed in a covered frame to screen a side-facing area.',
    image: '/projects/perforated-metal-screen.jpeg',
    featured: false,
  },
  {
    id: 'steel-canopy-frame',
    title: 'Steel Canopy Frame',
    category: 'Structural Roofing & Truss Work',
    description: 'A steel canopy skeleton shown during installation before the roof covering is fitted.',
    image: '/projects/steel-canopy-frame.jpeg',
    featured: false,
  },
  {
    id: 'window-metal-grille',
    title: 'Window Security Grille',
    category: 'Metal Grills',
    description: 'A fitted metal window grille with a geometric arrangement of horizontal and vertical bars.',
    image: '/projects/window-metal-grille.jpeg',
    featured: false,
  },
  {
    id: 'decorative-ceiling-panels',
    title: 'Decorative Ceiling Panel Canopy',
    category: 'Architectural Metalwork',
    description: 'Decorative ceiling panels set within a supporting frame to finish a covered outdoor area.',
    image: '/projects/decorative-ceiling-panels.jpeg',
    featured: false,
  },
];

export const galleryImages = [
  '/projects/hero-structural-roofing.jpeg',
  '/projects/large-structural-frame.jpeg',
  '/projects/canopy-frame-wide.jpeg',
  '/projects/canopy-detail.jpeg',
  '/projects/rooftop-frame.jpeg',
  '/projects/building-canopy.jpeg',
  '/projects/equipment-support-clean.jpeg',
  '/projects/equipment-support-frame.jpeg',
  '/projects/interior-installation.jpeg',
  '/projects/active-work-frame.jpeg',
  '/projects/base-plate-detail.jpeg',
  '/projects/site-base-work.jpeg',
  '/projects/railing-progress.jpeg',
  '/projects/walkway-railing.jpeg',
  '/projects/decorative-gate.jpeg',
  '/projects/exterior-walkway.jpeg',
  '/projects/staircase-railing.jpeg',
];
