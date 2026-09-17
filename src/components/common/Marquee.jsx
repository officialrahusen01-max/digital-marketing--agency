export default function Marquee({ text = "Digital Marketing Agency", speed = 20 }) {
  return (
    <div className="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        <span>{text}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <span>{text}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
