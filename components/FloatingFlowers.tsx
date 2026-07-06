"use client";

export default function FloatingFlowers() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          fontSize: "80px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          fontSize: "80px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        🌸
      </div>
    </>
  );
}