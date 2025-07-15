export type Contact = {
  title: string;
  link: string;
  name: string;
  icon: string; // path
};

export type ContactsData = {
  title: {
    en: string;
    ru: string;
  };
  items: Contact[];
};

export type Skill = {
  title: string;
  icon: string; // path
};

export type SkillsData = {
  title: {
    en: string;
    ru: string;
  };

  development: {
    title: {
      en: string;
      ru: string;
    };
    items: Skill[];
  };

  design: {
    title: {
      en: string;
      ru: string;
    };
    items: Skill[];
  };
};
