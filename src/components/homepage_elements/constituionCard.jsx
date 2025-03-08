import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./constitutionCard.css";

const UniqueConstitutionCards = () => {
  const { t } = useTranslation();

  const constitutionData = [
    { title: t("constitution.preamble.title"), description: t("constitution.preamble.description") },
    { title: t("constitution.fundamentalRights.title"), description: t("constitution.fundamentalRights.description") },
    { title: t("constitution.directivePrinciples.title"), description: t("constitution.directivePrinciples.description") },
    { title: t("constitution.fundamentalDuties.title"), description: t("constitution.fundamentalDuties.description") }
  ];

  return (
    <section className="unique-constitution-section">
      {/* Heading Section */}
      <div className="unique-constitution-header">
        <div className="unique-header-left">
          <h2>{t("constitution.heading")}</h2>
          <h4>{t("constitution.subheading")}</h4>
        </div>
        <div className="unique-header-right">
          <p>{t("constitution.description")}</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="unique-constitution-cards-container">
        {constitutionData.map((item, index) => (
          <div className="unique-constitution-card" key={index}>
            <div className="unique-constitution-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <FaArrowRight className="unique-next-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueConstitutionCards;
