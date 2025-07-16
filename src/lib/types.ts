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

export type Project = {
  title: {
    en: string;
    ru: string;
  };
  image: string; // path
  link: string;
  body: {
    en: string;
    ru: string;
  };
};

export type ProjectsData = {
  title: {
    en: string;
    ru: string;
  };
  items: Project[];
};
