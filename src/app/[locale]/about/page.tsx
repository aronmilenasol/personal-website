import AboutMe from "../components/about/AboutMe";
import AboutWebsite from "../components/about/AboutWebsite";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-light text-dark flex items-center justify-center flex-col p-4 md:p-8">
        <AboutMe />
        <AboutWebsite />
      </div>
    </>
  );
}
