export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="theme-dark overflow-hidden">
      <div className="frame pt-16 pb-6">
        <p
          aria-hidden
          className="font-display font-bold text-accent select-none"
          style={{ fontSize: "clamp(2.6rem, 8.2vw, 7.5rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}
        >
          Shanmukh Upadhyayula
        </p>
        <p className="mt-6 text-[13px] text-ink-soft">© {year} Shanmukh Upadhyayula</p>
      </div>
    </footer>
  );
}
