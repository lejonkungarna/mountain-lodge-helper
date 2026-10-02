import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Croissant, Wrench, Sparkles, Check } from "lucide-react";
import auroraImg from "@/assets/aurora.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nordlys Fjällhotell — Välkommen" },
      {
        name: "description",
        content:
          "Välkomstsida för gäster på Nordlys Fjällhotell i Abisko. Boka bastu, beställ frukost, anmäl fel och aktivera norrskenslarm.",
      },
      { property: "og:title", content: "Nordlys Fjällhotell — Välkommen" },
      {
        property: "og:description",
        content:
          "Boka bastu, beställ frukost, anmäl fel och aktivera norrskenslarm under din vistelse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bastuTider = ["16:00–18:00", "18:00–20:00", "20:00–22:00"];
const frukostTider = ["07:00", "08:00", "09:00"];
const frukostAlternativ = ["Rågbröd & gräddost", "Rökt lax", "Ägg & bacon", "Kaffe / te", "Yoghurt & granola"];
const felTyper = ["Värme / kyla", "Vatten / avlopp", "El / belysning", "Lås / nyckel", "Annat"];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="glass-field block rounded-xl px-3 py-2">
      <span className="block text-[10px] font-medium uppercase tracking-wide text-mist">{label}</span>
      {children}
    </label>
  );
}

function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl bg-aurora/20 px-4 py-3 outline-1 outline-aurora/40">
      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-aurora/60">
        <Check className="size-2.5 text-ink" strokeWidth={3} />
      </span>
      <p className="text-sm text-ink/80">{children}</p>
    </div>
  );
}

const inputCls = "w-full bg-transparent text-sm text-ink outline-none placeholder:text-mist/60";
const selectCls = "w-full appearance-none bg-transparent text-sm text-ink outline-none";
const btnCls =
  "w-full rounded-xl bg-ink py-3 text-sm font-medium text-frost transition-colors hover:bg-ink/85";

function Index() {
  // Bastu
  const [bastuDatum, setBastuDatum] = useState("");
  const [bastuTid, setBastuTid] = useState(bastuTider[0]);
  const [bastuGaster, setBastuGaster] = useState(2);
  const [bastuBokad, setBastuBokad] = useState(false);

  // Frukost
  const [frukostTid, setFrukostTid] = useState(frukostTider[1]);
  const [frukostVal, setFrukostVal] = useState<string[]>(["Rågbröd & gräddost"]);
  const [frukostRum, setFrukostRum] = useState("");
  const [frukostSkickad, setFrukostSkickad] = useState(false);

  // Felanmälan
  const [felTyp, setFelTyp] = useState<string>(felTyper[0]);
  const [felRum, setFelRum] = useState("");
  const [felText, setFelText] = useState("");
  const [felSkickad, setFelSkickad] = useState(false);

  // Norrskenslarm
  const [larmRum, setLarmRum] = useState("");
  const [larmTel, setLarmTel] = useState("");
  const [larmAktivt, setLarmAktivt] = useState(false);

  const toggleFrukost = (item: string) =>
    setFrukostVal((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sky font-sans text-mist antialiased">
      {/* Ambient frosted blobs */}
      <div className="drift-a absolute -top-24 -left-16 h-[38rem] w-[38rem] rounded-full bg-ice/90 blur-3xl" />
      <div className="drift-b absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full bg-aurora/40 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-[30rem] w-[30rem] rounded-full bg-glacier/60 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="glass-field grid size-9 place-items-center rounded-xl">
            <span className="font-display text-lg text-mist">N</span>
          </div>
          <span className="font-display text-2xl tracking-tight text-ink">Nordlys</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-mist md:flex">
          <a href="#bastu" className="transition-colors hover:text-ink">Bastu</a>
          <a href="#frukost" className="transition-colors hover:text-ink">Frukost</a>
          <a href="#felanmalan" className="transition-colors hover:text-ink">Felanmälan</a>
          <a href="#norrskenslarm" className="transition-colors hover:text-ink">Norrsken</a>
        </nav>
        <span className="glass-field rounded-full px-5 py-2 text-sm font-medium text-ink shadow-sm">
          Rum 204
        </span>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        {/* Hero */}
        <section className="pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="glass-field mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-mist">
            <span className="size-1.5 rounded-full bg-aurora" />
            Fjällhotell · Abisko, 68°N
          </div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Välkommen till <span className="italic text-aurora">Nordlys</span> — där fjället möter himlen.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Värme, ljus och stillhet. Hantera hela din vistelse här: boka bastun, beställ frukost,
            anmäl ett fel eller låt oss väcka dig när norrskenet dansar.
          </p>
        </section>

        {/* Services */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* Bastu */}
          <div id="bastu" className="glass-card scroll-mt-6 rounded-3xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-ice/70">
                <Flame className="size-5 text-ink/70" />
              </span>
              <div>
                <p className="font-display text-xl text-ink">Boka bastu</p>
                <p className="text-xs text-mist">Cederbastu · 85°</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBastuBokad(true);
              }}
            >
              <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                <Field label="Datum">
                  <input
                    type="date"
                    required
                    value={bastuDatum}
                    onChange={(e) => setBastuDatum(e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Tid">
                  <select
                    value={bastuTid}
                    onChange={(e) => setBastuTid(e.target.value)}
                    className={selectCls}
                  >
                    {bastuTider.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <div className="col-span-2">
                  <Field label="Gäster">
                    <input
                      type="number"
                      min={1}
                      max={6}
                      required
                      value={bastuGaster}
                      onChange={(e) => setBastuGaster(Number(e.target.value))}
                      className={inputCls}
                    />
                  </Field>
                </div>
              </div>
              <button type="submit" className={btnCls}>Boka bastutid</button>
            </form>
            {bastuBokad && (
              <Confirm>
                Bastun är bokad <strong className="font-medium text-ink">{bastuTid}</strong> för{" "}
                {bastuGaster} {bastuGaster === 1 ? "gäst" : "gäster"}. Handdukar finns på plats.
              </Confirm>
            )}
          </div>

          {/* Frukost */}
          <div id="frukost" className="glass-card scroll-mt-6 rounded-3xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-ice/70">
                <Croissant className="size-5 text-ink/70" />
              </span>
              <div>
                <p className="font-display text-xl text-ink">Beställ frukost</p>
                <p className="text-xs text-mist">Serveras på rummet 07–10</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFrukostSkickad(true);
              }}
            >
              <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
                <Field label="Tid">
                  <select
                    value={frukostTid}
                    onChange={(e) => setFrukostTid(e.target.value)}
                    className={selectCls}
                  >
                    {frukostTider.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Rum">
                  <input
                    type="text"
                    required
                    placeholder="204"
                    value={frukostRum}
                    onChange={(e) => setFrukostRum(e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="mb-4 space-y-2 text-sm">
                {frukostAlternativ.map((item) => (
                  <label
                    key={item}
                    className="glass-field flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2"
                  >
                    <input
                      type="checkbox"
                      checked={frukostVal.includes(item)}
                      onChange={() => toggleFrukost(item)}
                      className="size-4 accent-aurora"
                    />
                    <span className="text-ink/80">{item}</span>
                  </label>
                ))}
              </div>
              <button type="submit" className={btnCls}>Skicka beställning</button>
            </form>
            {frukostSkickad && (
              <Confirm>
                Frukosten serveras kl <strong className="font-medium text-ink">{frukostTid}</strong>{" "}
                på rum {frukostRum}. Smaklig måltid!
              </Confirm>
            )}
          </div>

          {/* Felanmälan */}
          <div id="felanmalan" className="glass-card scroll-mt-6 rounded-3xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-ice/70">
                <Wrench className="size-5 text-ink/70" />
              </span>
              <div>
                <p className="font-display text-xl text-ink">Anmäl ett fel</p>
                <p className="text-xs text-mist">Vi åtgärdar inom 2h</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFelSkickad(true);
              }}
            >
              <div className="mb-4 space-y-2 text-sm">
                <Field label="Typ av fel">
                  <select
                    value={felTyp}
                    onChange={(e) => setFelTyp(e.target.value)}
                    className={selectCls}
                  >
                    {felTyper.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Rum">
                  <input
                    type="text"
                    required
                    placeholder="204"
                    value={felRum}
                    onChange={(e) => setFelRum(e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Beskrivning">
                  <textarea
                    required
                    rows={2}
                    placeholder="Beskriv felet kort..."
                    value={felText}
                    onChange={(e) => setFelText(e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>
              <button type="submit" className={btnCls}>Skicka anmälan</button>
            </form>
            {felSkickad && (
              <Confirm>
                Tack! Din anmälan om <strong className="font-medium text-ink">{felTyp.toLowerCase()}</strong>{" "}
                är mottagen. Vi återkommer inom två timmar.
              </Confirm>
            )}
          </div>
        </section>

        {/* Norrskenslarm */}
        <section
          id="norrskenslarm"
          className="glass-card mt-8 scroll-mt-6 overflow-hidden rounded-3xl"
        >
          <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_1fr] md:p-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-aurora/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink">
                <span className="size-1.5 rounded-full bg-aurora" />
                Norrsken väntas i kväll 21:40
              </div>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-ink md:text-4xl">
                Norrskenslarm
              </h2>
              <p className="mt-3 max-w-md text-mist">
                Vi bevakar himlens aktivitet hela natten och väcker dig med ett mjukt ljus och en
                notis i telefonen när norrskenet tänds.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLarmAktivt(true);
                }}
              >
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <Field label="Rum">
                    <input
                      type="text"
                      required
                      placeholder="204"
                      value={larmRum}
                      onChange={(e) => setLarmRum(e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Telefon">
                    <input
                      type="tel"
                      required
                      placeholder="+46 70 123 45 67"
                      value={larmTel}
                      onChange={(e) => setLarmTel(e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/70">
                  <span className="glass-field rounded-full px-3 py-1">Mjuk väckning</span>
                  <span className="glass-field rounded-full px-3 py-1">Push-notis</span>
                  <span className="glass-field rounded-full px-3 py-1">SMS</span>
                </div>
                <button type="submit" className={`${btnCls} mt-5 md:w-auto md:px-8`}>
                  Aktivera norrskenslarm
                </button>
              </form>
              {larmAktivt && (
                <Confirm>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-aurora" />
                    Larmet är aktivt — vi väcker rum {larmRum} vid första skenet. Sov gott!
                  </span>
                </Confirm>
              )}
            </div>
            <img
              src={auroraImg}
              alt="Norrsken över snöklädda fjäll"
              loading="lazy"
              width={1024}
              height={768}
              className="min-h-[16rem] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-ink/5"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-frost/60">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-8 text-sm text-mist sm:flex-row sm:items-center">
          <p>Nordlys Fjällhotell · Abisko · reception@nordlys.se</p>
          <p className="text-mist/70">Receptionen är öppen dygnet runt</p>
        </div>
      </footer>
    </div>
  );
}
