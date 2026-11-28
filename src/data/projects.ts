export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  image?: string;
  deliverables: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: CaseStudy[] = [
  {
    id: 'cine-ad',
    tag: 'creative ads & video',
    title: 'Commercial Key Visual & Ad Production Suite',
    summary:
      'Crafted 4K commercial video cutdowns, studio lighting setups, and key visual poster suites for broadcast, social ads, and retail point-of-sale.',
    challenge:
      'Produce a unified commercial campaign across 4K video spots, retail point-of-sale prints, and social cutdowns with zero visual degradation across aspect ratios.',
    solution:
      'Engineered an end-to-end physical and 3D lighting pipeline in Cinema 4D and DaVinci Resolve, delivering simultaneous 16:9 broadcast masters, 9:16 vertical cuts, and 300 DPI full-bleed print assets.',
    image: '/images/posters/poster-lays-studio.jpg',
    deliverables: [
      '4K Cinema Trailer',
      'Studio Lighting Master',
      'Billboard Key Visuals',
      'Social Cutdowns',
    ],
    stack: ['Cinema 4D', 'DaVinci Resolve', 'Commercial Food Styling', 'Color Grading'],
    metrics: [
      { label: 'Master Resolution', value: '4K / 60fps' },
      { label: 'Print Quality', value: '300 DPI CMYK' },
      { label: 'Aspect Formats', value: '16:9 · 9:16 · 4:5' },
    ],
  },
  {
    id: 'ai-agents',
    tag: 'autonomous agents',
    title: 'Autonomous Research & Decision Fleet',
    summary:
      'Designed a fleet of 5 coordinated AI agents connected through Model Context Protocol (MCP) to automate regulatory compliance and data intake.',
    challenge:
      'Manual regulatory compliance verification across multi-source documents caused multi-day bottlenecks and inconsistent audit trails.',
    solution:
      'Architected a deterministic 5-agent swarm orchestrated over FastAPI and MCP servers with pgvector retrieval, strict schema validation, and a live trace visualizer.',
    deliverables: [
      'Multi-Agent Dispatcher',
      'Custom MCP Connectors',
      'Deterministic Guardrails',
      'Trace Visualizer',
    ],
    stack: ['Python', 'FastAPI', 'Claude SDK', 'PostgreSQL pgvector'],
    metrics: [
      { label: 'Agent Nodes', value: '5 Coordinated' },
      { label: 'Protocol', value: 'MCP v1 Native' },
      { label: 'Schema Enforcement', value: '100% Typed' },
    ],
  },
  {
    id: 'desktop-suite',
    tag: 'cross-platform software',
    title: 'Strata Studio: Desktop Audio & Media Suite',
    summary:
      'Engineered a native cross-platform application for Windows and macOS with sub-5ms audio processing latency and hardware GPU acceleration.',
    challenge:
      'Electron-based media tools consumed excessive RAM and suffered audio buffer jitter during live multi-track DSP processing.',
    solution:
      'Built a Rust-backed Tauri shell paired with a native C++ DSP audio core and Metal/DirectX GPU rendering, reducing memory footprint by 70% while maintaining sub-5ms latency.',
    deliverables: [
      'Windows MSIX & macOS DMG',
      'C++ Audio DSP Core',
      'Hardware Accelerated UI',
      'Offline SQLite Sync',
    ],
    stack: ['Tauri', 'Rust', 'Next.js UI', 'Metal / DirectX'],
    metrics: [
      { label: 'DSP Latency', value: '< 5ms' },
      { label: 'Platforms', value: 'Win & macOS' },
      { label: 'Storage Engine', value: 'Local SQLite' },
    ],
  },
  {
    id: 'game-prototype',
    tag: 'game development',
    title: 'VoxelDrift: Interactive Stylized Simulator',
    summary:
      'Built an interactive physics-driven simulator with custom volumetric shaders, dynamic camera rigs, and cross-platform controller support.',
    challenge:
      'Deliver console-grade stylized volumetric lighting and responsive vehicle physics that run smoothly both natively and inside a browser sandbox.',
    solution:
      'Developed custom compute shaders and rigid-body suspension physics in Godot 4, compiling cleanly to native binaries and WebAssembly for instant browser playtesting.',
    deliverables: [
      'Godot Engine Core',
      'Custom HLSL Shaders',
      'WebAssembly Browser Build',
      'Steam-Ready Packaging',
    ],
    stack: ['Godot 4', 'GDScript', 'Compute Shaders', 'Wasm'],
    metrics: [
      { label: 'Target Frame Rate', value: '60+ FPS' },
      { label: 'Engine', value: 'Godot 4.x' },
      { label: 'Web Build', value: 'WebAssembly' },
    ],
  },
];
