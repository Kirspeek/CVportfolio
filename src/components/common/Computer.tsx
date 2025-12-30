"use client";

import React, { useState } from "react";
import "./RetroComputer.css";

export type ComputerProps = {
  className?: string;
  screenOn?: boolean;
  towerOn?: boolean;
};

/**
 * Presentational retro computer. Styles are defined in `RetroComputer.css`.
 * No animations or auto-boot logic; minimal local state just to demo power toggles.
 */
export default function Computer({
  className,
  screenOn,
  towerOn,
}: ComputerProps) {
  const [isScreenOn, setIsScreenOn] = useState<boolean>(!!screenOn);
  const [isTowerOn, setIsTowerOn] = useState<boolean>(!!towerOn);

  return (
    <div className={`retro-card ${className ?? ""}`.trim()}>
      <div className="retro-computer">
        <div className="center">
          {/* Behind panel */}
          <div className="behind" />

          {/* Monitor */}
          <div className="screenBox">
            <div className="frame">
              <div className="screenBox2">
                <div className="screenBox3">
                  <div className="screen">
                    <div
                      className="output"
                      style={{ display: isScreenOn ? "block" : "none" }}
                    >
                      <div>Booting up...</div>
                      <div>Hard Disk System Configuration:</div>
                      <div>A: Hard Disk, 4.8 Mbytes</div>
                      <div>B: Hard Disk, Floppy Size</div>
                      <div>C: Floppy Disk</div>
                      <div>IBM Personal Computer</div>
                      <div>Version 1.23 Copyright IBM Corp 1984</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottomFrame">
                <div className="fan" />
                <div className="ibmLogo">IBM</div>
                <div
                  className="powerButton"
                  onClick={() => setIsScreenOn((v) => !v)}
                >
                  <div className="powerIcon" />
                </div>
                <div
                  className={`powerLight ${isScreenOn ? "lightOn" : "lightOff"}`}
                />
              </div>
            </div>
          </div>

          {/* Screen foot */}
          <div className="screenFoot" />

          {/* Tower */}
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
              <div
                className="powerButton"
                onClick={() => setIsTowerOn((v) => !v)}
              >
                <div className="buttonSlide">
                  <div
                    className={`computerButton ${
                      isTowerOn ? "computerButtonOn" : "computerButtonOff"
                    }`}
                  />
                </div>
                <div className="offIndicator" />
                <div className="onIndicator" />
              </div>
              <div
                className={`powerLight ${isTowerOn ? "lightOn" : "lightOff"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
