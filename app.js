
"use strict";

// Rafiq Al Quran - Application core

const RafiqApp = {
  getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  },

  getProgress() {
    try {
      return JSON.parse(
        localStorage.getItem("rafiq_progress")
      ) || {
        streak: 0,
        totalPages: 0,
        lastReadDate: null,
        recoveryMonth: null,
        recoveryUsed: false
      };
    } catch {
      return {
        streak: 0,
        totalPages: 0,
        lastReadDate: null,
        recoveryMonth: null,
        recoveryUsed: false
      };
    }
  },

  saveProgress(progress) {
    localStorage.setItem(
      "rafiq_progress",
      JSON.stringify(progress)
    );
  },

  getStats() {
    return this.getProgress();
  }
};

window.RafiqApp = RafiqApp;

document.addEventListener("DOMContentLoaded", () => {
  const progress = RafiqApp.getStats();

  const streakElement = document.getElementById("streak");
  const pagesElement = document.getElementById("pages");

  if (streakElement) {
    streakElement.textContent = progress.streak;
  }

  if (pagesElement) {
    pagesElement.textContent = progress.totalPages;
  }

  console.log("Rafiq Al Quran is ready 🌙");
});
