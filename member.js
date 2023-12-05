function skillsMember() {
  const member = document.querySelector(".member");
  const memberSkills = document.querySelector(".member__skills");
  const memberSkillsTitle = document.querySelector(".member__skills-title");
  const memberSkillsList = document.querySelector(".member__skills-list");
  const memberSkillsBtn = document.querySelector(".member__skills-btn");
  const memberSkillsBtnText = document.querySelector(".member__skills-btn-text");
  const memberSkillsBtnIcon = document.querySelector(".member__skills-btn-icon");

  if (memberSkills) {
    memberSkillsBtn.addEventListener("click", () => {
      memberSkills.classList.toggle("member__skills--active");
      memberSkillsBtnText.classList.toggle("member__skills-btn-text--active");
      memberSkillsBtnIcon.classList.toggle("member__skills-btn-icon--active");

      if (memberSkills.classList.contains("member__skills--active")) {
        memberSkillsBtnText.textContent = "Скрыть";
      } else {
        memberSkillsBtnText.textContent = "Показать все";
      }
    });
  }

  // if (memberSkillsList) {
  //   memberSkillsList.addEventListener("click", (e) => {
  //     const target = e.target;
  //     const parent = target.closest(".member__skills-item");

  //     if (parent) {
  //       parent.classList.toggle("member__skills-item--active");
  //     }
  //   });
  // }

  if (memberSkillsList) {
    memberSkillsList.addEventListener("click", (e) => {
      const target = e.target;
      const parent = target.closest(".member__skills-item");

      if (parent) {
        parent.classList.toggle("member__skills-item--active");
      }
    });
  }

  if (memberSkillsList) {
    memberSkillsList.addEventListener("click", (e) => {
      const target = e.target;
      const parent = target.closest(".member__skills-item");

      if (parent) {
        parent.classList.toggle("member__skills-item--active");
      }
    });
  }
}