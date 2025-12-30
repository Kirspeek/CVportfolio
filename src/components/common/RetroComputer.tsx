"use client";

import React, { useEffect, useRef, useState } from "react";
import "./RetroComputer.css";

export default function RetroComputer() {
  const [screenOn, setScreenOn] = useState(false);
  const [towerOn, setTowerOn] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = setTimeout(() => setScreenOn(true), 200);
    const onTower = setTimeout(() => setTowerOn(true), 2200);
    return () => {
      clearTimeout(on);
      clearTimeout(onTower);
    };
  }, []);

  useEffect(() => {
    if (!screenOn) return;
    const output = outputRef.current;
    if (!output) return;

    output.innerHTML = "";
    const write = (text: string) => {
      output.innerHTML += `${text}<br/>`;
      output.scrollTop = output.scrollHeight;
    };

    const sequence = async () => {
      output.parentElement?.classList.add("screenEffect");
      output.style.display = "block";
      await new Promise((r) => setTimeout(r, 500));
      write("Checking connections...");
      await new Promise((r) => setTimeout(r, 800));
      if (!towerOn) {
        const popup = document.createElement("div");
        popup.className = "popup screenEffect";
        popup.id = "noSignal";
        popup.textContent = "NO SIGNAL";
        output.appendChild(popup);
        return;
      }
      // Simulated boot when tower is on
      write("Booting up...");
      await new Promise((r) => setTimeout(r, 400));
      write("Hard Disk System Configuration:");
      await new Promise((r) => setTimeout(r, 300));
      write("A: Hard Disk, 4.8 Mbytes");
      await new Promise((r) => setTimeout(r, 200));
      write("B: Hard Disk, Floppy Size");
      await new Promise((r) => setTimeout(r, 200));
      write("C: Floppy Disk");
      await new Promise((r) => setTimeout(r, 200));
      write(`Current date is ${new Date().toDateString()}`);
      await new Promise((r) => setTimeout(r, 200));
      write("IBM Personal Computer");
      await new Promise((r) => setTimeout(r, 200));
      write("Version 1.23 Copyright IBM Corp 1984");
    };

    sequence();
  }, [screenOn, towerOn]);

  const toggleScreen = () => setScreenOn((v) => !v);
  const toggleTower = () => setTowerOn((v) => !v);

  return (
    <div className="retro-card">
      <div className="retro-computer">
        <div className="center">
          <div className="behind" />
          <div className="screenBox">
            <div className="frame">
              <div className="screenBox2">
                <div className="screenBox3">
                  <div className="screen">
                    <div className="output" ref={outputRef} />
                  </div>
                </div>
              </div>
              <div className="bottomFrame">
                <div className="fan" />
                <div className="ibmLogo">IBM</div>
                <div className="powerButton" onClick={toggleScreen}>
                  <div className="powerIcon" />
                </div>
                <div
                  className={`powerLight ${screenOn ? "lightOn" : "lightOff"}`}
                />
              </div>
            </div>
          </div>
          <div className="screenFoot" />
          <div className="computer">
            <div className="computerFrame">
              <div className="computerFan1" />
              <div className="computerFan2" />
              <div className="screw1" />
              <div className="screw2" />
              <div className="computerFrame2">
                <div className="floppy">
                  <div className="fingerGrip" />
                  <div className="slot" />
                </div>
                <div className="socket1" />
                <div className="socket2" />
              </div>
              <div className="screw3" />
              <div className="screw4" />
              <div className="screw5" />
              <div className="powerButton">
                <div className="buttonSlide">
                  <div
                    className={`computerButton ${
                      towerOn ? "computerButtonOn" : "computerButtonOff"
                    }`}
                    onClick={toggleTower}
                  />
                </div>
                <div className="offIndicator" />
                <div className="onIndicator" />
              </div>
              <div
                className={`powerLight ${towerOn ? "lightOn" : "lightOff"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
