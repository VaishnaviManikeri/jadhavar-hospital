import React, { useEffect, useRef } from "react";

/**
 * SuccessStory.jsx
 * Dr. Jadhavar Physiotherapy & Rehabilitation Center — Success Stories page
 * Palette: #08A3A3 (teal) + White + Black
 * Font: Poppins
 */

const stories = [
  {
    id: "stroke",
    tag: "Stroke Rehabilitation",
    name: "Ramesh Patil, 58",
    duration: "6-month recovery",
    quote:
      "I couldn't lift my left arm after my stroke. Today I can dress myself, write, and walk to the market alone.",
    detail:
      "Presented with left-side weakness following an ischemic stroke. A structured neuro-rehab plan combining motor re-training, balance drills, and gait practice restored functional independence.",
  },
  {
    id: "paralysis",
    tag: "Paralysis Recovery",
    name: "Sunita Deshmukh, 34",
    duration: "10-month recovery",
    quote:
      "The doctors told my family I may never walk again. With therapy, I stood on my own two feet within a year.",
    detail:
      "Partial lower-limb paralysis after a spinal injury. Progressive strength training, electrical stimulation, and supported gait therapy rebuilt mobility step by step.",
  },
  {
    id: "sports",
    tag: "Sports Injury Recovery",
    name: "Arjun Kadam, 22",
    duration: "3-month recovery",
    quote:
      "A torn ligament almost ended my football season. This team got me back on the field stronger than before.",
    detail:
      "ACL strain sustained during a match. A sport-specific rehab protocol of controlled loading, agility work, and return-to-play testing brought a full, confident recovery.",
  },
  {
    id: "posture",
    tag: "Posture Correction",
    name: "Priya Nair, 27",
    duration: "8-week program",
    quote:
      "Years at a desk gave me a permanent hunch and constant neck pain. My posture — and confidence — is finally corrected.",
    detail:
      "Forward-head posture and rounded shoulders from prolonged desk work. Postural re-education, core activation, and ergonomic coaching corrected alignment and relieved chronic strain.",
  },
  {
    id: "backpain",
    tag: "Back Pain Relief",
    name: "Vinod Joshi, 45",
    duration: "5-week program",
    quote:
      "I had given up on ever bending down pain-free. Now I garden, travel, and sleep through the night again.",
    detail:
      "Chronic lower-back pain from a lumbar disc issue. Manual therapy, core stabilization, and graded mobility exercises reduced pain and restored day-to-day function.",
  },
];

const reels = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/reel/DA7lBHJMYp0/",
    label: "Patient Journey",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/reel/DA5DzGNMGsb/",
    label: "Recovery in Motion",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/reel/DBDcSKpstYF/",
    label: "Therapy Session",
  },
  {
    id: "reel-4",
    url: "https://www.instagram.com/reel/DBYHWVJPIbL/",
    label: "Real Results",
  },
];

/** Loads the Instagram embed script once and re-processes embeds whenever new ones mount */
function useInstagramEmbed(deps) {
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm && window.instgrm.Embeds) {
      processEmbeds();
      return;
    }

    const existingScript = document.getElementById("instagram-embed-script");
    if (existingScript) {
      existingScript.addEventListener("load", processEmbeds);
      return () => existingScript.removeEventListener("load", processEmbeds);
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function InstagramReelCard({ reel }) {
  return (
    <div className="ss-reel-card">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: 0,
          maxWidth: "100%",
          minWidth: "270px",
          width: "100%",
        }}
      />
      <div className="ss-reel-label">{reel.label}</div>
    </div>
  );
}

export default function SuccessStory() {
  useInstagramEmbed([]);

  return (
    <div className="ss-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        :root {
          --teal: #08A3A3;
          --teal-dark: #066b6b;
          --teal-tint: #e6f7f7;
          --black: #0a0a0a;
          --white: #ffffff;
        }

        * { box-sizing: border-box; }

        .ss-page {
          font-family: 'Poppins', sans-serif;
          background: var(--white);
          color: var(--black);
          margin: 0;
          padding: 0;
        }

        .ss-hero {
          background: var(--black);
          color: var(--white);
          padding: 90px 24px 70px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .ss-hero::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, var(--teal), var(--teal-dark), var(--teal));
        }

        .ss-eyebrow {
          color: var(--teal);
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .ss-hero h1 {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .ss-hero p {
          max-width: 640px;
          margin: 0 auto;
          font-size: 16px;
          font-weight: 400;
          color: #d9d9d9;
          line-height: 1.7;
        }

        /* EKG signature divider — echoes vitals / recovery pulse */
        .ss-pulse {
          width: 100%;
          background: var(--white);
          padding: 28px 0 0;
        }
        .ss-pulse svg {
          display: block;
          width: 100%;
          height: 40px;
        }

        .ss-section {
          padding: 60px 24px 90px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .ss-section-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 46px;
        }

        .ss-section-head .ss-eyebrow {
          color: var(--teal-dark);
        }

        .ss-section-head h2 {
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 700;
          margin: 0 0 12px;
          color: var(--black);
        }

        .ss-section-head p {
          font-size: 15px;
          font-weight: 400;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        .ss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }

        .ss-card {
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          padding: 30px 26px;
          background: var(--white);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .ss-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(8, 163, 163, 0.16);
          border-color: var(--teal);
        }

        .ss-card-tag {
          display: inline-block;
          background: var(--teal-tint);
          color: var(--teal-dark);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        .ss-card h3 {
          font-size: 19px;
          font-weight: 700;
          margin: 0 0 4px;
          color: var(--black);
        }

        .ss-card .ss-duration {
          font-size: 13px;
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 16px;
        }

        .ss-quote {
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          color: #1a1a1a;
          border-left: 3px solid var(--teal);
          padding-left: 14px;
          margin: 0 0 16px;
          line-height: 1.6;
        }

        .ss-detail {
          font-size: 14px;
          font-weight: 400;
          color: #444;
          line-height: 1.7;
          margin: 0;
        }

        .ss-note {
          text-align: center;
          font-size: 13px;
          font-weight: 400;
          color: #777;
          margin-top: 50px;
        }

        /* Video testimonials — Instagram reels */
        .ss-video-section {
          background: var(--teal-tint);
          padding: 70px 24px 84px;
        }

        .ss-reel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .ss-reel-card {
          background: var(--white);
          border-radius: 16px;
          padding: 14px 14px 20px;
          border: 1px solid #d6efef;
          box-shadow: 0 6px 20px rgba(8, 163, 163, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ss-reel-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(8, 163, 163, 0.18);
        }

        .ss-reel-card iframe {
          border-radius: 12px !important;
        }

        .ss-reel-label {
          margin-top: 14px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          color: var(--teal-dark);
        }

        .ss-cta {
          background: var(--teal);
          color: var(--white);
          text-align: center;
          padding: 64px 24px;
        }

        .ss-cta h2 {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          margin: 0 0 12px;
        }

        .ss-cta p {
          font-weight: 400;
          margin: 0 0 26px;
          color: #eafafa;
        }

        .ss-cta button {
          background: var(--black);
          color: var(--white);
          border: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 34px;
          border-radius: 999px;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .ss-cta button:hover {
          opacity: 0.85;
        }

        @media (max-width: 480px) {
          .ss-hero { padding: 64px 20px 50px; }
          .ss-section { padding: 44px 18px 60px; }
          .ss-video-section { padding: 50px 18px 60px; }
        }
      `}</style>

      {/* Hero */}
      <section className="ss-hero">
        <div className="ss-eyebrow">Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center</div>
        <h1>Real Recoveries. Real People.</h1>
        <p>
          Every story here is shared with the patient's permission — a record of the effort,
          therapy, and resilience behind each recovery at our center.
        </p>
      </section>

      {/* Signature pulse divider */}
      <div className="ss-pulse">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
          <polyline
            points="0,20 250,20 280,5 310,35 340,20 500,20 530,10 560,30 590,20 750,20 780,2 810,38 840,20 1000,20 1030,8 1060,32 1090,20 1200,20"
            fill="none"
            stroke="#08A3A3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Stories */}
      <section className="ss-section">
        <div className="ss-grid">
          {stories.map((story) => (
            <article className="ss-card" key={story.id}>
              <span className="ss-card-tag">{story.tag}</span>
              <h3>{story.name}</h3>
              <div className="ss-duration">{story.duration}</div>
              <p className="ss-quote">&ldquo;{story.quote}&rdquo;</p>
              <p className="ss-detail">{story.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Video testimonials — Instagram reels */}
      <section className="ss-video-section">
        <div className="ss-section-head">
          <div className="ss-eyebrow">Watch &amp; Believe</div>
          <h2>Video Testimonials</h2>
          <p>
            Straight from our patients — see the sessions, the milestones, and the moments
            of progress behind every recovery.
          </p>
        </div>
        <div className="ss-reel-grid">
          {reels.map((reel) => (
            <InstagramReelCard reel={reel} key={reel.id} />
          ))}
        </div>
        <p className="ss-note">
          Videos load directly from Instagram and may take a moment to appear.
        </p>
      </section>

      {/* CTA */}
      <section className="ss-cta">
        <h2>Ready to start your own recovery story?</h2>
        <p>Book a consultation with Dr. Jadhavar's team and take the first step forward.</p>
        <button type="button">Book a Consultation</button>
      </section>
    </div>
  );
}
