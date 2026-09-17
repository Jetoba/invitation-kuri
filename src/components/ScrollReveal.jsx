import useInView from "../hooks/useInView.js";

export default function ScrollReveal({ children, className = "", as: Tag = "div", ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`scroll-fade ${inView ? "in-view" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
