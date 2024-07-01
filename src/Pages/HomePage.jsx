import HomeNavbar from "../components/Home/HomeNavbar";
import Hero from "../components/Home/Hero";
import Company from "../components/Home/Company";
import Courses from "../components/Home/Courses";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonial";
import Projects from "../components/Home/Projects";
import ProjectIdea from "../components/Home/ProjectIdea";
import Footer from "../components/Home/Footer";

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <Company />
      <Courses />
      <Features />
      <Testimonial />
      <Projects />
      <Footer />
      <ProjectIdea />
    </>
  );
};

export default HomePage;
