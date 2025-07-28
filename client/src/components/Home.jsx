import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  //   Star,
  //   Zap,
  //   Heart,
  //   Globe,
  ArrowLeft,
  Radio,
  Flag,
  Headphones,
  Gift,
  Cloud,
  Target,
  MousePointerClick,
} from "lucide-react";
import classes from "../css/home.module.css";

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "קליטה",
      desc: "קליטה מעולה בכל מקום שתהיו",
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: "שקט נפשי",
      desc: "הכל כולל הכל, ללא הפתעות",
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: "מספר ישראלי",
      desc: "מספר ישראלי לכל השכרה",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "תמיכה",
      desc: "תמיכה 24/6, בכל מקום בעולם",
    },
  ];

  return (
    <div className={classes.container}>
      {/* Background Effects */}
      <div className={classes.backgroundEffects}>
        {/* Animated gradient orbs */}
        <div
          className={classes.gradientOrb1}
          style={{
            left: mousePos.x / 10,
            top: mousePos.y / 10,
            transform: `translate(-50%, -50%) scale(${1 + scrollY / 5000})`,
          }}
        />
        <div
          className={classes.gradientOrb2}
          style={{
            right: mousePos.x / 15,
            bottom: mousePos.y / 15,
            transform: `translate(50%, 50%) scale(${1 + scrollY / 8000})`,
          }}
        />

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={classes.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={classes.mainContent}>
        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div
            className={`${classes.heroContent} ${
              isVisible ? classes.visible : ""
            }`}
          >
            <h1 className={classes.heroTitle}>טסים ברוגע, טסים על בטוח..</h1>
            <p className={classes.heroSubtitle}>
              חווית נסיעה אחרת, עם תקשורת בינלאומית מתקדמת ושירות לקוחות מעולה,
              איתכם - לאורך כל הדרך.
            </p>

            <div className={classes.heroButtons}>
              <button className={classes.primaryButton}>
                <span className={classes.buttonContent}>
                  התחל עכשיו
                  <ArrowLeft className="w-5 h-5" />
                </span>
                <div className={classes.buttonOverlay} />
              </button>

              <button className={classes.secondaryButton}>למד עוד</button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={classes.scrollIndicator}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ChevronDown className="w-8 h-8" />
          </div>
        </section>

        {/* Features Section */}
        <section className={classes.featuresSection}>
          <div className={classes.featuresContainer}>
            <h2 className={classes.featuresTitle}>למה לבחור טסים?</h2>

            <div className={classes.featuresGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={classes.featureCard}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className={classes.featureContent}>
                    <div className={classes.featureIcon}>{feature.icon}</div>
                    <h3 className={classes.featureTitle}>{feature.title}</h3>
                    <p className={classes.featureDesc}>{feature.desc}</p>
                  </div>

                  {/* Glow effect */}
                  <div className={classes.featureGlow} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaContainer}>
            <div className={classes.ctaCard}>
              <h2 className={classes.ctaTitle}>מוכנים להתחיל?</h2>
              <p className={classes.ctaSubtitle}>
                הצטרפו אלינו למסע מרתק אל העתיד
              </p>

              <button className={classes.ctaButton}>
                <span className={classes.ctaButtonContent}>
                  בואו נתחיל
                  <div className={classes.ctaButtonIcon} />
                </span>
                <div className={classes.ctaButtonOverlay} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
