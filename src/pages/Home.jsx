import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaHome, FaProjectDiagram, FaCode } from "react-icons/fa";

import ProfileCard from '../components/ProfileCard';
import Threads from '../components/Threads';
import RotatingText from '../components/RotatingText';
import Dock from '../components/Dock';
import PixelCard from '../components/PixelCard';
import TiltedCard from '../components/TiltedCard';
import FuzzyText from '../components/FuzzyText';
import { CardContainer, CardBody, CardItem } from "../components/3d-card";
import StarBorder from "../components/StarBorder";
import ShinyText from "../components/ShinyText";
import emailjs from 'emailjs-com';
import VariableProximity from '../components/VariableProximity';
import ScrollFloat from '../components/ScrollFloat';

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const items = [
    { icon: <FaHome size={18} />, label: 'Home', onClick: () => scrollTo("about") },
    { icon: <FaProjectDiagram size={18} />, label: 'Projects', onClick: () => scrollTo("projects") },
    { icon: <FaCode size={18} />, label: 'Skills', onClick: () => scrollTo("skills") },
    { icon: <FaEnvelope size={18} />, label: 'Contact', onClick: () => scrollTo("contact") },
  

      // ✅ External Links
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    onClick: () => window.open('https://github.com/shashank317', '_blank')
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    onClick: () => window.open('https://www.linkedin.com/in/shashank-sh-97300a301/', '_blank')
  }
];
  

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_1kfphh8',
      'template_l1mbhgt',
      e.target,
      'NBnQgVivyuZCk5r4n'
    ).then(() => {
      alert("✅ Message sent!");
      e.target.reset();
    }).catch((err) => {
      console.error(err);
      alert("❌ Failed to send message.");
    });
  };

  return (
      <div className="relative min-h-screen font-sans text-white overflow-x-hidden">

        {/* ✅ Threads Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>

   <ScrollFloat>
  <section id="about" className="w-full min-h-screen flex items-center justify-center px-8 pt-24 pb-24">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="flex-1 text-left md:pl-4 -mt-10"> {/* <-- slightly moved upward */}
        <div ref={containerRef}>
          <RotatingText
            texts={["Backend Engineer", "FastAPI Developer", "Python Enthusiast", "Open Source Lover"]}
            mainClassName="px-4 py-2 sm:px-6 sm:py-2 bg-cyan-300 text-black font-bold text-3xl sm:text-4xl md:text-5xl rounded-lg inline-block mb-6"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <VariableProximity
          label={`I’m Shashank, a Python developer passionate about clean architecture and efficient backend systems. My focus is on performance, security, and writing scalable APIs. Outside of coding, I enjoy tech communities and open source collaboration.`}
          className="variable-proximity-demo text-lg sm:text-xl font-semibold leading-relaxed text-gray-300 mb-6"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />

        <div className="mt-4">
          <StarBorder
            as="a"
            href="https://docs.google.com/document/d/11z3JTRXolO4eI4VhhwGUKLObpJMFyblI3lgtlpz4iWQ/edit?tab=t.0"
            download
            className="text-white rounded-md"
            color="cyan"
            speed="5s"
          >
            <ShinyText text="Download Resume 📄" speed={3} />
          </StarBorder>
        </div>
      </div>

      {/* Right Profile Card */}
      <div className="flex-1 flex justify-center md:justify-end md:pr-4">
        <ProfileCard
          name="Shashank"
          title="Python Developer"
          handle="shashank07"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/image.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>

    </div>
  </section>
</ScrollFloat>


{/* ✅ Education Section */}
{/* ✅ Education Section - 3D Floating Cards */}
<ScrollFloat>
<section id="education" className="w-full min-h-screen px-8 py-24 flex flex-col items-center justify-center bg-black/10">
  <FuzzyText
    baseIntensity={0.2}
    hoverIntensity={0.8}
    enableHover={true}
    className="text-4xl sm:text-5xl font-bold mb-16 text-cyan-300"
    fontSize="clamp(2rem, 4vw, 3rem)"
  >
    🎓 EDUCATION
  </FuzzyText>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Card 1 */}
    <CardContainer>
     <CardBody className="bg-black border border-gray-100 p-6 rounded-xl w-[300px] h-[380px] shadow-lg group/card">
        <CardItem translateZ="40" className="text-xl font-bold text-white mb-2">
          PDA College of Engineering
        </CardItem>
        <CardItem translateZ="30" className="text-gray-300 text-lg mb-1">
          B.Tech in Computer Science
        </CardItem>
        <CardItem translateZ="20" className="text-gray-400 text-sm mb-4">
          2024
        </CardItem>
        <CardItem translateZ="60" className="rounded-xl overflow-hidden mt-2">
          <img
            src="/pda.webp"
            alt="PDA"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>

    {/* Card 2 */}
    <CardContainer>
      <CardBody className="bg-black border border-gray-100 p-6 rounded-xl w-[300px] h-[380px] shadow-lg group/card">
        <CardItem translateZ="40" className="text-xl font-bold text-white mb-2">
          SBR Composite PU College
        </CardItem>
        <CardItem translateZ="30" className="text-gray-300 text-lg mb-1">
          PUC
        </CardItem>
        <CardItem translateZ="20" className="text-gray-400 text-sm mb-4">
          2019
        </CardItem>
        <CardItem translateZ="60" className="rounded-xl overflow-hidden mt-2">
          <img
            src="/PP.webp"
            alt="PUC"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>

    {/* Card 3 */}
    <CardContainer>
      <CardBody className="bg-black border border-gray-100 p-6 rounded-xl w-[300px] h-[380px] shadow-lg group/card">
        <CardItem translateZ="40" className="text-xl font-bold text-white mb-2">
          SBR Public School
        </CardItem>
        <CardItem translateZ="30" className="text-gray-300 text-lg mb-1">
          SSLC
        </CardItem>
        <CardItem translateZ="20" className="text-gray-400 text-sm mb-4">
          2017
        </CardItem>
        <CardItem translateZ="60" className="rounded-xl overflow-hidden mt-2">
          <img
            src="../public/school.jpg"
            alt="School"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  </div>
</section>
</ScrollFloat>





      {/* ✅ Projects Section */}
       {/* ✅ Projects Section - PixelCard Layout */}
<ScrollFloat>
<section id="projects" className="w-full min-h-screen px-8 py-24">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-800">🚀 PROJECTS</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project 1 */}
    <PixelCard variant="pink" className="relative">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">Project One</h3>
        <p className="text-gray-200 text-sm mt-1">TEAM-Sync with AI assistent using Python and FastAPI.</p>
      </div>
      <img src="/team-sync.png" alt="Project One" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>

    {/* Project 2 */}
    <PixelCard variant="pink">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">Project Two</h3>
        <p className="text-gray-200 text-sm mt-1">Exploratory-Analysis-Of-Geolocational-Data.</p>
      </div>
      <img src="/p2.png" alt="Project Two" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>

    {/* Project 3 */}
    <PixelCard variant="pink">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">Project Three</h3>
        <p className="text-gray-200 text-sm mt-1">movie_recommendation-ML</p>
      </div>
      <img src="/mlp.jpg" alt="Project Three" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>

    {/* Project 4 */}
    <PixelCard variant="pink">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">Project Four</h3>
        <p className="text-gray-200 text-sm mt-1">Data visualization and sales_data_analysis</p>
      </div>
      <img src="/powerbi.webp" alt="Project Four" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>

    {/* Project 5 */}
    <PixelCard variant="pink">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">5</h3>
        <p className="text-gray-200 text-sm mt-1">R\ERRORS in this project</p>
      </div>
      <img src="https://via.placeholder.com/400x250" alt="Project Five" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>

    {/* Project 6 */}
    <PixelCard variant="pink">
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black/60 rounded-xl">
        <h3 className="text-xl font-bold text-white">6</h3>
        <p className="text-gray-200 text-sm mt-1">R\ERRORS in this project.</p>
      </div>
      <img src="https://via.placeholder.com/400x250" alt="Project Six" className="w-full h-full object-cover rounded-xl" />
    </PixelCard>
  </div>
</section>
</ScrollFloat>






      {/* ✅ Skills Section */}
      {/* ✅ Skills Section */}
<ScrollFloat>
<section id="skills" className="w-full min-h-screen px-8 py-24 flex flex-col items-center justify-center">
  <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">🛠 SKILLS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    <TiltedCard
      imageSrc="/python.png"
      altText="Python"
      captionText="Python"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Python</p>}
    />
    <TiltedCard
      imageSrc="/fastapi.png"
      altText="FastAPI"
      captionText="FastAPI"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">FastAPI</p>}
    />
    <TiltedCard
      imageSrc="/ML.jpg"
      altText="Machine Learning"
      captionText="Machine Learning"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Machin Learning</p>}
    />
    <TiltedCard
      imageSrc="/public/Sk.jpg"
      altText="Scikit-Learn"
      captionText="Scikit-Learn.js"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Scikit-Learn</p>}
    />
    <TiltedCard
      imageSrc="/pandas.jpg"
      altText="Pandas"
      captionText="Pandas"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Pandas</p>}
    />
    <TiltedCard
      imageSrc="/numpy.webp"
      altText="Numpy"
      captionText="Numpy"
      containerHeight="150px"
      containerWidth="150px"
      imageHeight="150px"
      imageWidth="150px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Numpy</p>}
    />
  </div>
</section>
</ScrollFloat>


      {/* ✅ Contact Section */}
<ScrollFloat>
<section id="contact" className="w-full min-h-screen px-8 py-24 text-white bg-transparent">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">📬 Contact Me</h2>

        <form
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6"
          onSubmit={handleEmailSubmit}
        >
          {/* Name Field */}
          <div className="group relative">
            <label htmlFor="name" className="block text-sm mb-1 text-white">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-black/30 text-white border border-gray-600 rounded-xl transition-all duration-300 outline-none focus:ring-2 focus:ring-pink-400 shadow-md group-hover:ring-1 group-hover:ring-white"
            />
          </div>

          {/* Email Field */}
          <div className="group relative">
            <label htmlFor="email" className="block text-sm mb-1 text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-black/30 text-white border border-gray-600 rounded-xl transition-all duration-300 outline-none focus:ring-2 focus:ring-pink-400 shadow-md group-hover:ring-1 group-hover:ring-white"
            />
          </div>

          {/* Message Field */}
          <div className="group relative">
            <label htmlFor="message" className="block text-sm mb-1 text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 bg-black/30 text-white border border-gray-600 rounded-xl transition-all duration-300 outline-none focus:ring-2 focus:ring-pink-400 shadow-md group-hover:ring-1 group-hover:ring-white"
            ></textarea>
          </div>

          {/* StarBorder Submit Button */}
          <div className="text-center mt-8">
            <StarBorder
              as="button"
              type="submit"
              className="text-white rounded-lg"
              color="cyan"
              speed="5s"
            >
              <ShinyText text="Submit ✨" speed={3} />
            </StarBorder>
          </div>
        </form>
      </section>
      </ScrollFloat>

      {/* ✅ Dock Fixed at Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
   
  );
};

export default Home;



     