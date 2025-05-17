import AboutMe from "../components/about/AboutMe";
import AboutWebsite from "../components/about/AboutWebsite";
import AboutLikes from "../components/about/AboutLikes";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-light text-dark flex items-center justify-center flex-col p-4 md:p-8">
        <AboutMe />
        <AboutLikes />
        <AboutWebsite />
      </div>
    </>
  );
}
