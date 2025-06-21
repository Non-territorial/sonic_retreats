import { getDictionary, Dictionary } from "./dictionaries";
import HomeClient from "../../components/HomeClient";

interface Retreat {
  title: string;
  location: string;
  time: string;
  playbackId: string;
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict: Dictionary = await getDictionary(lang as "en" | "se" | "it" | "jp");

  const retreats: Retreat[] = dict.homepage.section6.retreats || [];

  return <HomeClient retreats={retreats} dict={dict} navbarTranslations={dict.navbar} />;
}