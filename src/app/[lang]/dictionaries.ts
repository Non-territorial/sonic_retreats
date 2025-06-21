import 'server-only';

interface Retreat {
  title: string;
  location: string;
  time: string;
  playbackId: string;
}

export interface Dictionary {
  homepage: {
    section1: { description: string };
    section2: { title: string; description: string };
    section3: { title: string; description: string };
    section4: { title: string; description: string };
    section5: { image_alt: string };
    section6: {
      title_label: string;
      location_label: string;
      time_label: string;
      retreats: Retreat[];
      form: {
        placeholder: string;
        button: string;
        submitting: string;
        success: string;
        error: string;
        invalid_response: string;
      };
    };
    section7: { description: string };
    section8: { image_alt: string };
    section9: { description: string };
  };
  faq: {
    what_is_sonic_retreats: { title: string; description: string };
    who_is_for: { title: string; description: string };
    locations: { title: string; description: string };
    how_to_join: { title: string; description: string };
    cost: { title: string; description: string };
    included: { title: string; description: string };
    host_own: { title: string; description: string };
  };
  terms: {
    title: string;
    intro: string;
    purpose: { title: string; description: string };
    eligibility: { title: string; description: string };
    use: { title: string; description: string };
    email_privacy: { title: string; description: string };
    intellectual_property: { title: string; description: string };
    governing_law: { title: string; description: string };
    contact: { title: string; description: string };
  };
  privacy: {
    title: string;
    last_updated: string;
    intro: string;
    collect: { title: string; description: string };
    use: { title: string; description: string };
    sharing: { title: string; description: string };
    rights: { title: string; description: string };
    security: { title: string; description: string };
    cookies: { title: string; description: string };
    changes: { title: string; description: string };
    contact: { title: string; description: string };
  };
  navbar: {
    retreats: string;
    enquire: string;
    contact: string;
    faq: string;
    terms: string;
    privacy: string;
  };
}

const dictionaries: Record<'en' | 'se' | 'it' | 'jp', () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
  se: () => import('./dictionaries/se.json').then((module) => module.default as Dictionary),
  it: () => import('./dictionaries/it.json').then((module) => module.default as Dictionary),
  jp: () => import('./dictionaries/jp.json').then((module) => module.default as Dictionary),
};

export const getDictionary = async (lang: 'en' | 'se' | 'it' | 'jp'): Promise<Dictionary> => {
  console.log(`Loading dictionary for language: ${lang}`);
  const dictionary = await dictionaries[lang]();
  console.log(`Dictionary loaded for ${lang}:`, Object.keys(dictionary));
  return dictionary;
};