import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock3, Stethoscope } from "lucide-react";
import heroImageAsset from "@/assets/doctor-consultation.png.asset.json";
const heroImage = heroImageAsset.url;
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Eye Treatments in Islampur | Haripriyaa Netralaya" },
      {
        name: "description",
        content:
          "Explore cataract, retina, glaucoma, screening and optical services at Haripriyaa Netralaya.",
      },
      {
        property: "og:title",
        content: "Eye Treatments — Haripriyaa Netralaya",
      },
      {
        property: "og:description",
        content:
          "Precision-led treatments with Dr. Neeta Ramesh Patil for clearer, healthier vision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreatmentsPage,
});

const services = [
  {
    titleEn: "Computerized accurate spectacle power measurement",
    titleMr: "Computer ने अचूक चष्म्याचा नंबर",
    symptoms: [
      { en: "Blurred or fluctuating vision", mr: "धूसर किंवा अस्थिर दृष्टी" },
      { en: "Frequent headaches while reading", mr: "वाचताना वारंवार डोकेदुखी" },
      { en: "Eye strain after screen use", mr: "स्क्रीन वापरानंतर डोळ्यांचा तणाव" },
    ],
    steps: [
      { en: "Digital auto-refraction test", mr: "डिजिटल auto-refraction चाचणी" },
      { en: "Lifestyle and near-work assessment", mr: "जीवनशैली व जवळच्या कामाचे मूल्यांकन" },
      { en: "Precise spectacle prescription", mr: "अचूक चष्मा नंबर देणे" },
    ],
    recovery: {
      en: "Results are ready instantly; glasses are prepared within hours.",
      mr: "तात्काळ निकाल; काही तासांत चष्मे तयार होतात.",
    },
    tech: { en: "Computerized auto-refractometer", mr: "संगणकीय auto-refractometer" },
  },
  {
    titleEn: "Eye wart removal & Cataract surgery",
    titleMr: "डोळ्यांवरील मोस काढणे व मोतीबिंदू ऑपरेशन",
    symptoms: [
      { en: "Cloudy or hazy vision", mr: "धूसर किंवा धुसकट दृष्टी" },
      { en: "Growth or lump on the eyelid", mr: "पापणीवर वाढ किंवा गांठ" },
      { en: "Glare and difficulty driving at night", mr: "प्रकाशाचा त्रास व रात्री गाडी चालवणे कठीण" },
    ],
    steps: [
      { en: "Detailed lens and lid examination", mr: "सविस्तर लेंस व पापणी तपासणी" },
      { en: "Stitchless Phaco procedure", mr: "बिना टाक्यांचे Phaco प्रक्रिया" },
      { en: "Guided post-op review", mr: "मार्गदर्शित ऑपरेशननंतर तपासणी" },
    ],
    recovery: {
      en: "Both surgeries are done without injection, bandage or stitches; most patients resume light routines in 2–3 days.",
      mr: "दोन्ही ऑपरेशन्स बिना इंजेक्शन, बिना पट्टी, बिना टाक्या; बहुतेक रुग्ण २-३ दिवसांत सामान्य कामे करू लागतात.",
    },
    tech: { en: "Stitchless Phaco / topical anesthesia", mr: "बिना टाक्यांचे Phaco / स्थानिक निश्चेतन" },
  },
  {
    titleEn: "Stitchless laser surgery",
    titleMr: "लेसर ऑपरेशन — बिना टाक्यांचे",
    symptoms: [
      { en: "Faded colours or reduced contrast", mr: "फिकट रंग किंवा कमी कंट्रास्ट" },
      { en: "Blur that spectacles cannot fully correct", mr: "चष्म्याने पूर्णपणे दुर होत नसलेली धूसरता" },
      { en: "Difficulty with bright lights", mr: "तेजस्वी प्रकाशात त्रास" },
    ],
    steps: [
      { en: "Advanced lens and corneal mapping", mr: "प्रगत लेंस व कॉर्निया मॅपिंग" },
      { en: "Laser-assisted precise incision", mr: "लेसर-सहाय्यित अचूक छेद" },
      { en: "Premium IOL placement", mr: "प्रीमियम IOL बसवणे" },
    ],
    recovery: {
      en: "Rapid visual recovery with minimal follow-up and no stitches.",
      mr: "कमी फॉलो-अप, बिना टाक्या आणि द्रुत दृष्टी सुधारणा.",
    },
    tech: { en: "Femtosecond laser platform", mr: "फेम्टोसेकंद लेसर प्लॅटफॉर्म" },
  },
  {
    titleEn: "Treatment for eye trauma and injuries",
    titleMr: "डोळ्यांवरील आघातांवर उपचार",
    symptoms: [
      { en: "Sudden eye pain after an accident", mr: "अपघातानंतर अचानक डोळ्यांचे दुखणे" },
      { en: "Redness, cuts or foreign-body sensation", mr: "लालness, काप, किंवा परके वस्तूची जाणीव" },
      { en: "Vision drop after injury", mr: "जखमेनंतर दृष्टी कमी होणे" },
    ],
    steps: [
      { en: "Emergency slit-lamp examination", mr: "आपातकालीन slit-lamp तपासणी" },
      { en: "Imaging and damage assessment", mr: "इमेजिंग व नुकसान मूल्यांकन" },
      { en: "Medical or microsurgical repair", mr: "वैद्यकीय किंवा सूक्ष्मशस्त्रक्रिया दुरुस्ती" },
    ],
    recovery: {
      en: "Recovery depends on injury severity; follow-ups are scheduled closely.",
      mr: "जखमेच्या तीव्रतेवर अवलंबून; फॉलो-अप जवळपास ठेवले जातात.",
    },
    tech: { en: "Advanced microsurgical suite", mr: "प्रगत सूक्ष्मशस्त्रक्रिया सुविधा" },
  },
  {
    titleEn: "Ayurvedic therapies for Diabetic Retinopathy & Digital Eye Strain",
    titleMr: "Diabetic Retinopathy व Digital Eye Strain साठी खास आयुर्वेदिक तर्पण, शिरोधारा आणि इतर चिकित्सा",
    symptoms: [
      { en: "Burning or dry eyes after screen use", mr: "स्क्रीन वापरानंतर डोळ्यांमध्ये जळजळ किंवा कोरडेपणा" },
      { en: "Diabetes-related vision changes", mr: "मधुमेहामुळे होणारे दृष्टी बदल" },
      { en: "Heaviness and fatigue around the eyes", mr: "डोळ्यांच्या भोवती जडपणा व थकवा" },
    ],
    steps: [
      { en: "Ayurvedic eye and systemic assessment", mr: "आयुर्वेदिक डोळा व संपूर्ण मूल्यांकन" },
      { en: "Tarpana / Shirodhara therapy sessions", mr: "तर्पण / शिरोधारा चिकित्सा सत्रे" },
      { en: "Diet and screen-habit guidance", mr: "आहार व स्क्रीन सवयींचे मार्गदर्शन" },
    ],
    recovery: {
      en: "Gentle, relaxing sessions with gradual relief of dryness and strain.",
      mr: "सौम्य, आरामदायक सत्र; कोरडेपणा व तणाव हळूहळू कमी होतो.",
    },
    tech: { en: "Classical Ayurvedic protocols", mr: "शास्त्रीय आयुर्वेदिक प्रोटोकॉल" },
  },
  {
    titleEn: "Discharge within half an hour after operation",
    titleMr: "ऑपरेशन नंतर अर्ध्या तासात Discharge",
    symptoms: [
      { en: "Concerns about long hospital stays", mr: "दीर्घ रुग्णालय वास्तव्याबद्दल चिंता" },
      { en: "Need to return home the same day", mr: "त्या दिवशी घरी परतण्याची इच्छा" },
      { en: "Limited time away from work or family", mr: "काम किंवा कुटुंबापासून कमी वेळ घालवणे" },
    ],
    steps: [
      { en: "Pre-operative counselling", mr: "ऑपरेशनपूर्व सल्ला" },
      { en: "Swift, efficient day-care procedure", mr: "जलद, कुशल दिवस-काळजी प्रक्रिया" },
      { en: "Post-op observation and discharge", mr: "ऑपरेशननंतर निरीक्षण व डिस्चार्ज" },
    ],
    recovery: {
      en: "Most patients are discharged within 30 minutes of the procedure.",
      mr: "बहुतेक रुग्ण प्रक्रियेनंतर अर्ध्या तासात डिस्चार्ज होतात.",
    },
    tech: { en: "Day-care surgical protocol", mr: "दिवस-काळजी शस्त्रक्रिया प्रोटोकॉल" },
  },
  {
    titleEn: "Transport facility for outstation patients",
    titleMr: "परगावच्या रुग्णांसाठी वाहनाची सोय",
    symptoms: [
      { en: "Difficulty travelling from distant towns", mr: "दूरच्या गावांतून प्रवास करणे कठीण" },
      { en: "No reliable local transport", mr: "विश्वसनीय स्थानिक वाहतूक नसणे" },
      { en: "Elderly patients travelling alone", mr: "वृद्ध रुग्ण एकटे प्रवास करणे" },
    ],
    steps: [
      { en: "Book appointment and request transport", mr: "अपॉइंटमेंट बुक करा व वाहन मागवा" },
      { en: "Coordinated pickup from your location", mr: "तुमच्या ठिकाणाहून समन्वित पिकअप" },
      { en: "Comfortable return after consultation", mr: "तपासणीनंतर आरामदायक परतीची सोय" },
    ],
    recovery: {
      en: "Travel assistance is arranged so you can focus only on your eye care.",
      mr: "प्रवास सोय व्यवस्थित असते म्हणून तुम्ही फक्त डोळ्याच्या काळजीवर लक्ष देऊ शकता.",
    },
    tech: { en: "Clinic-coordinated patient transport", mr: "रुग्णालय-समन्वित रुग्ण वाहतूक" },
  },
  {
    titleEn: "Affordable & attractive spectacles",
    titleMr: "परवडणारे व आकर्षक चष्मे",
    symptoms: [
      { en: "Outdated or broken frames", mr: "जुने किंवा मोडलेले फ्रेम" },
      { en: "Budget constraints for quality glasses", mr: "गुणवत्ता चष्म्यांसाठी बजेट मर्यादा" },
      { en: "Want stylish frames with accurate lenses", mr: "अचूक लेंससह फॅशनेबल फ्रेम हवे आहेत" },
    ],
    steps: [
      { en: "Frame selection to match your style", mr: "तुमच्या शैलीला साजेसे फ्रेम निवड" },
      { en: "Digital lens fitting and edging", mr: "डिजिटल लेंस फिटिंग व एजिंग" },
      { en: "Quality check and same-day handover", mr: "गुणवत्ता तपासणी व त्या दिवशी हस्तांतरण" },
    ],
    recovery: {
      en: "Most wearers adapt to their new lenses within a few days.",
      mr: "बहुतेक वापरकर्ते काही दिवसांत नवीन लेंसशी सरावतात.",
    },
    tech: { en: "In-house optical finishing lab", mr: "इन-हाउस ऑप्टिकल फिनिशिंग लॅब" },
  },
];

function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments & services"
        title="Precision care for every stage of vision."
        description="Understand your symptoms, your options and your path to recovery with Dr. Neeta Ramesh Patil—without medical jargon."
        image={heroImage}
      />

      <section className="py-24">
        <div className="page-shell space-y-6">
          {services.map((service, index) => (
            <article
              key={service.titleEn}
              className="rounded-lg border border-border bg-card p-6 sm:p-9"
            >
              <div className="grid gap-8 lg:grid-cols-[.8fr_1fr_1fr]">
                <div>
                  <p className="font-serif text-2xl text-secondary">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl text-ice sm:text-3xl">
                    {service.titleEn}
                  </h2>
                  <p className="mt-2 font-serif text-lg leading-snug text-secondary">
                    {service.titleMr}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-secondary">
                    <Stethoscope className="size-4" />
                    {service.tech.en}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase text-secondary/80">
                    {service.tech.mr}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-secondary">
                    When to get checked
                  </h3>
                  <p className="text-xs font-bold uppercase text-secondary/80">
                    कधी तपासणी करावी
                  </p>
                  <div className="mt-4 space-y-3">
                    {service.symptoms.map((item) => (
                      <div key={item.en} className="flex gap-2 text-sm">
                        <Check className="mt-1 size-4 shrink-0 text-secondary" />
                        <div>
                          <p className="text-muted-foreground">{item.en}</p>
                          <p className="text-secondary/80">{item.mr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 flex gap-2 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                    <Clock3 className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      {service.recovery.en}
                      <br />
                      <span className="text-secondary/80">
                        {service.recovery.mr}
                      </span>
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-secondary">
                    Your care pathway
                  </h3>
                  <p className="text-xs font-bold uppercase text-secondary/80">
                    तुमच्या काळजीचा मार्ग
                  </p>
                  <ol className="mt-4 space-y-3">
                    {service.steps.map((item, i) => (
                      <li
                        key={item.en}
                        className="flex items-start gap-3 rounded-md bg-muted p-3 text-sm text-ice"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <div>
                          <p>{item.en}</p>
                          <p className="text-secondary/80">{item.mr}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={`https://wa.me/919975335457?text=${encodeURIComponent(
                      `I would like to consult Dr. Neeta Ramesh Patil about ${service.titleEn}.`
                    )}`}
                    className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                  >
                    Consult Dr. Neeta Patil
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 text-center">
        <div className="page-shell">
          <h2 className="display-serif text-4xl text-ice sm:text-5xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Begin with a comprehensive eye evaluation. We’ll guide you from
            there.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full border border-border px-6 py-3 text-sm font-bold text-ice"
          >
            Book an evaluation
          </Link>
        </div>
      </section>
    </>
  );
}
