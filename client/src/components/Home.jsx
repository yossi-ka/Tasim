import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ArrowLeft } from "lucide-react";
import classes from "../css/home.module.css";
import { heroTexts } from "./HomeAnimations";
import { features } from "./HomeAnimations";
import { services } from "./HomeAnimations";
import HomeBGEffects from "./HomeBGEffects";

function Home() {
  const navigate = useNavigate();

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect לאנימציית הטקסט
  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      // הוספת אותיות
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        // המתנה לפני מחיקה
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // מחיקת אותיות
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 5);
      } else {
        // מעבר לטקסט הבא
        setTimeout(() => {
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % heroTexts.length
          );
          setIsTyping(true);
        }, 1200);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTextIndex]);

  // useEffect לעדכון כותרת הדף
  useEffect(() => {
    document.title = "טסים - דף הבית";
  }, []);

  //  פונקציה לגלילה לחלק השירותים
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      // במקום scrollIntoView, השתמש ב-scrollTo עם offset
      const offsetTop = section.offsetTop - 100; // 100px מרווח מעל
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  //  פונקציה לגלילה לחלק הבא של התכונות
  const scrollToNextSection = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      const offsetTop = featuresSection.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes.container}>
      {/* Background Effects */}
      <HomeBGEffects setIsVisible={setIsVisible} />

      {/* Main Content */}
      <div className={classes.mainContent}>
        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.logo}>
            <img src="/images/logo.png" alt="logo-tasim" />
          </div>
          <div
            className={`${classes.heroContent} ${
              isVisible ? classes.visible : ""
            }`}
          >
            <h1 className={classes.heroTitle}>
              {displayedText}
              <span className={classes.cursor}>|</span>
            </h1>
            <p className={classes.heroSubtitle}>
              השכרת טלפונים וסימים לחו"ל <br /> חווית נסיעה אחרת, עם תקשורת
              בינלאומית מתקדמת ושירות לקוחות מעולה,
              <br /> טסים - השותפים שלכם למסע.
            </p>

            <div className={classes.heroButtons}>
              <button
                onClick={scrollToNextSection}
                className={classes.primaryButton}
              >
                <span className={classes.buttonContent}>
                  התחל עכשיו
                  <ArrowLeft className={classes.arrowLeft} />
                </span>
                <div className={classes.buttonOverlay} />
              </button>

              <button
                onClick={() => navigate("/about")}
                className={classes.secondaryButton}
              >
                ספרו לי עוד
              </button>

              <button
                onClick={scrollToServices}
                className={classes.primaryButton}
              >
                <span className={classes.buttonContent}>מה יש לנו להציע?</span>
                <div className={classes.buttonOverlay} />
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={classes.scrollIndicator}
            onClick={scrollToNextSection}
          >
            <ChevronDown className="w-8 h-8" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={classes.featuresSection}>
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

        {/* Services Section */}
        <section className={classes.servicesSection}>
          <div className={classes.servicesContainer}>
            <h2 id="services" className={classes.servicesTitle}>
              השירותים שלנו
            </h2>
            <p className={classes.servicesSubtitle}>
              פתרונות תקשורת מתקדמים לכל סוג של נסיעה
            </p>

            <div className={classes.servicesGrid}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={classes.serviceCard}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className={classes.serviceHeader}>
                    <div className={classes.serviceIcon}>{service.icon}</div>
                    <h3 className={classes.serviceTitle}>{service.title}</h3>
                    <p className={classes.serviceDesc}>{service.desc}</p>
                  </div>

                  <div className={classes.serviceFeatures}>
                    {service.features.map((feature, i) => (
                      <div key={i} className={classes.serviceFeature}>
                        <div className={classes.featureBullet} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={classes.serviceButton}>
                    <span>לפרטים נוספים</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  {/* Service glow effect */}
                  <div className={classes.serviceGlow} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaContainer}>
            <div className={classes.ctaCard}>
              <h2 className={classes.ctaTitle}>מוכנים? הכל כבר ארוז?</h2>
              <p className={classes.ctaSubtitle}>
                בואו נתחיל את הטיול שלכם עם טסים! <br />
                להישאר מחוברים בכל מקום בעולם, מעולם לא היה קל יותר.
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
