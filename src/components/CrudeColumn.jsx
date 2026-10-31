// رسم مبسط لبرج التقطير: المنتجات من الأخف (فوق) للأثقل (تحت)
export default function CrudeColumn({ layers }) {
  return (
    <ol className="column" aria-label="منتجات تقطير الزيت الخام من الأخف للأثقل">
      {layers.map((l, i) => (
        <li key={l.label} style={{ "--i": i }}>
          <span>{l.label}</span>
          {l.note && <small>{l.note}</small>}
        </li>
      ))}
    </ol>
  );
}
