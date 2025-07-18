export interface GeneralData {
  about: About;
  contacts: Contacts;
  skills: Skills;
  achievements: AchievementItem[];
}

export interface About {
  photo: string;
  body: {
    en: string;
    ru: string;
  };
}

export interface Contacts {
  items: ContactItem[];
}

export interface ContactItem {
  title: string;
  name: string;
  link: string;
  icon: string;
}

export interface Skills {
  development: SkillCategory;
  design: SkillCategory;
}

export interface SkillCategory {
  items: SkillItem[];
}

export interface SkillItem {
  title: string;
  icon: string;
}

export interface AchievementItem {
  title: string;
  link: string;
  linkTitle: {
    en: string;
    ru: string;
  };
  body: {
    en: string;
    ru: string;
  };
}

export interface ProjectsData {
  items: ProjectItem[];
}

export interface ProjectItem {
  image: string;
  title: {
    en: string;
    ru: string;
  };
  body: {
    en: string;
    ru: string;
  };
  link: string;
}
