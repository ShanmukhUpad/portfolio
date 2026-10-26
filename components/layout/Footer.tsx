export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="theme-dark overflow-hidden">
      <div className="frame pt-16 pb-6">
        <p
          aria-hidden
          className="font-display font-bold text-accent select-none"
          style={{ fontSize: "clamp(2.25rem, 6.4vw, 5.75rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
        >
          Shanmukh Upadhyayula
        </p>
        <p className="mt-6 text-[13px] text-ink-soft">© {year} Shanmukh Upadhyayula</p>
      </div>
    </footer>
  );
}
