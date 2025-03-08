import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import { useTranslation } from "react-i18next";
import englishData from "../../locales/english.json";
import hindiData from "../../locales/hindi.json";
import "./modulePage.css";

const ModulePage = () => {
  const { moduleName } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [content, setContent] = useState(englishData.module[moduleName] || englishData.module["preamble"]);

  // Load content dynamically based on the selected language
  useEffect(() => {
    const selectedData = i18n.language === "hi" ? hindiData.module : englishData.module;
    setContent(selectedData[moduleName] || selectedData["preamble"]);
  }, [i18n.language, moduleName]);

  return (
    <div className="module-page">
      <Navbar />

      {/* YouTube Video */}
      <div className="module-video-container">
        <iframe
          src={content.video}
          title="YouTube Video"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* Theory Section */}
      <div className="module-theory-section">
        <h2>{content.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.theory }}></div>
      </div>

      {/* Buttons Section */}
      <div className="module-buttons">
        <button 
          className="module-download-btn" 
          onClick={() => window.location.href = content.file}
        >
          Download File
        </button>
        <button 
          className="module-start-btn" 
          onClick={() => navigate(`/module/${moduleName}/submodule/0`)}
        >
          Start Module
        </button>
      </div>

    </div>
  );
};

export default ModulePage;
