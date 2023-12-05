function SkillsMember() {
  this.skills = [];
  this.addSkill = function (skill) {
    this.skills.push(skill);
  };
  this.removeSkill = function (skill) {
    const index = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
  };
}