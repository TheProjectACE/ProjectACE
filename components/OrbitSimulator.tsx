"use client";

import { useMemo, useState } from "react";

export function OrbitSimulator() {
  const [speed, setSpeed] = useState(1);
  const [phase, setPhase] = useState(35);
  const [radius, setRadius] = useState(118);
  const point = useMemo(() => {
    const angle = phase * Math.PI / 180;
    return { x: 180 + radius * Math.cos(angle), y: 155 + radius * 0.44 * Math.sin(angle) };
  }, [phase, radius]);
  return (
    <div className="orbit-demo">
      <div className="workbench-head"><div><h3 className="workbench-title">Orbital motion concept</h3><p className="workbench-sub">A geometry-only educational illustration—not a predictive orbit solver.</p></div><span className="badge badge-demo">Simulated</span></div>
      <svg viewBox="0 0 360 310" role="img" aria-label="Diagram of a central body and a simulated object moving along an elliptical path">
        <defs><radialGradient id="planet-glow"><stop stopColor="#629bff" stopOpacity=".38"/><stop offset="1" stopColor="#629bff" stopOpacity="0"/></radialGradient></defs>
        <circle cx="180" cy="155" r="72" fill="url(#planet-glow)"/>
        <ellipse cx="180" cy="155" rx={radius} ry={radius * .44} fill="none" stroke="rgba(85,230,242,.6)" strokeWidth="1.5" strokeDasharray="5 6"/>
        <circle cx="180" cy="155" r="25" fill="#17395c" stroke="#629bff" strokeWidth="1.4"/>
        <path d="M164 161 Q180 132 196 161" fill="none" stroke="#8bdcff" strokeWidth="1.4"/>
        <circle cx={point.x} cy={point.y} r={6 + speed * .5} fill="#55e6f2"/>
        <circle cx={point.x} cy={point.y} r={13 + speed} fill="none" stroke="#55e6f2" strokeOpacity=".35"/>
        <text x="180" y="200" textAnchor="middle" fontSize="10" fill="#a2b3c8">Central body (illustrative)</text>
        <text x="180" y="290" textAnchor="middle" fontSize="10" fill="#73869e">No real-world scale, units, or orbital parameters</text>
      </svg>
      <div className="orbit-controls">
        <div className="field"><label htmlFor="sim-phase">Illustration phase: {phase}°</label><input id="sim-phase" type="range" min="0" max="359" value={phase} onChange={(event) => setPhase(Number(event.target.value))} /></div>
        <div className="field"><label htmlFor="sim-radius">Illustration radius: {radius} units</label><input id="sim-radius" type="range" min="70" max="135" value={radius} onChange={(event) => setRadius(Number(event.target.value))} /></div>
      </div>
      <div className="field" style={{ marginTop: 14 }}><label htmlFor="sim-speed">Marker size (visual only): {speed}</label><input id="sim-speed" type="range" min="1" max="5" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} /></div>
      <p className="field-help" style={{ marginTop: 12 }}>This illustration deliberately omits gravitational equations, mass, units, and time integration. It should not be used for navigation, mission design, or scientific conclusions.</p>
    </div>
  );
}
