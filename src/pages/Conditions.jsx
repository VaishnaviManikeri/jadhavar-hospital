import { useState } from "react";
import {
  PersonStanding,
  Activity,
  Footprints,
  Dumbbell,
  Trophy,
  Snowflake,
  Bone,
  Zap,
  Brain,
  Accessibility,
  Stethoscope,
  Scan,
  Layers,
  HeartPulse,
  Move,
  Plus,
} from "lucide-react";
import "./Conditions.css";

// -----------------------------------------------------------------------
// Data: every condition the clinic treats, its icon, and its description.
// Keeping this as data (rather than hard-coded markup) makes it trivial
// to add/remove/edit a condition later without touching the JSX below.
// -----------------------------------------------------------------------
const CONDITIONS = [
  {
    id: "neck-pain",
    title: "Neck Pain",
    icon: PersonStanding,
    description:
      "Targeted manual therapy and mobility exercises to relieve stiffness, reduce nerve irritation, and restore full range of motion in the cervical spine.",
  },
  {
    id: "back-pain",
    title: "Back Pain",
    icon: Activity,
    description:
      "A structured program combining posture correction, core strengthening, and hands-on therapy to relieve acute and chronic lower/upper back pain.",
  },
  {
    id: "knee-pain",
    title: "Knee Pain",
    icon: Footprints,
    description:
      "Assessment-driven rehab for ligament strain, cartilage wear, and joint instability, focused on rebuilding strength and pain-free movement.",
  },
  {
    id: "shoulder-pain",
    title: "Shoulder Pain",
    icon: Dumbbell,
    description:
      "Restores rotator cuff strength and shoulder mechanics through guided mobilization, taping, and progressive strengthening protocols.",
  },
  {
    id: "sports-injuries",
    title: "Sports Injuries",
    icon: Trophy,
    description:
      "Sport-specific recovery plans for sprains, strains, and overuse injuries, designed to safely return athletes to peak performance.",
  },
  {
    id: "frozen-shoulder",
    title: "Frozen Shoulder",
    icon: Snowflake,
    description:
      "Progressive stretching, joint mobilization, and heat therapy to break the stiffness cycle and gradually recover lost shoulder movement.",
  },
  {
    id: "arthritis",
    title: "Arthritis",
    icon: Bone,
    description:
      "Low-impact strengthening and joint-protection strategies that ease inflammation, reduce stiffness, and support long-term joint health.",
  },
  {
    id: "sciatica",
    title: "Sciatica",
    icon: Zap,
    description:
      "Nerve-gliding techniques and spinal decompression exercises that relieve pressure on the sciatic nerve and calm radiating leg pain.",
  },
  {
    id: "stroke-rehabilitation",
    title: "Stroke Rehabilitation",
    icon: Brain,
    description:
      "Neuro-physiotherapy focused on regaining motor control, balance, and independence in daily activities after a stroke.",
  },
  {
    id: "paralysis-rehabilitation",
    title: "Paralysis Rehabilitation",
    icon: Accessibility,
    description:
      "Individualized neuro-rehab programs that rebuild muscle activation, coordination, and functional mobility for paralysis patients.",
  },
  {
    id: "post-surgery-rehabilitation",
    title: "Post-Surgery Rehabilitation",
    icon: Stethoscope,
    description:
      "Structured recovery plans following orthopedic or neurological surgery to safely restore strength, mobility, and confidence.",
  },
  {
    id: "cervical-lumbar-spondylosis",
    title: "Cervical & Lumbar Spondylosis",
    icon: Scan,
    description:
      "Targeted spinal therapy that eases degenerative wear on the neck and lower back, reducing stiffness and nerve compression.",
  },
  {
    id: "slip-disc",
    title: "Slip Disc",
    icon: Layers,
    description:
      "Non-surgical decompression and core-stabilization therapy to relieve disc pressure and support long-term spinal health.",
  },
  {
    id: "muscle-ligament-injuries",
    title: "Muscle & Ligament Injuries",
    icon: HeartPulse,
    description:
      "Hands-on soft-tissue therapy paired with progressive loading exercises to repair and strengthen injured muscles and ligaments.",
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    icon: Move,
    description:
      "Postural assessment and corrective exercise plans that rebalance the body, easing strain caused by prolonged sitting or poor alignment.",
  },
];

export default function Conditions() {
  // Tracks which card ids are currently "filled" / expanded.
  const [openCards, setOpenCards] = useState(() => new Set());

  const toggleCard = (id) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="conditions-section" aria-labelledby="conditions-heading">
      <div className="conditions-header">
        <span className="conditions-eyebrow">What We Treat</span>
        <h2 id="conditions-heading" className="conditions-heading">
          Conditions We Treat
        </h2>
        <p className="conditions-subheading">
          Tap on a condition to see how our physiotherapy team helps you recover.
        </p>
      </div>

      <div className="conditions-grid">
        {CONDITIONS.map(({ id, title, icon: Icon, description }) => {
          const isOpen = openCards.has(id);
          return (
            <button
              type="button"
              key={id}
              className={`condition-card${isOpen ? " is-filled" : ""}`}
              onClick={() => toggleCard(id)}
              aria-expanded={isOpen}
              aria-controls={`desc-${id}`}
            >
              {/* Liquid / bucket fill layer */}
              <span className="fill-layer" aria-hidden="true">
                <span className="fill-wave" />
              </span>

              <span className="card-content">
                <span className="icon-wrap">
                  <Icon className="condition-icon" strokeWidth={1.75} />
                </span>

                <span className="card-title">{title}</span>

                <span
                  id={`desc-${id}`}
                  className="card-description"
                  role="region"
                >
                  {description}
                </span>

                <span className="card-indicator">
                  <Plus className="indicator-icon" strokeWidth={2} />
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}