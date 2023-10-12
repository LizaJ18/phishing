import logo from "./assets/icons/logo.svg";
import profile from "./assets/icons/profile.png";
import za from "./assets/icons/zachan.jpg";

function App() {
  return (
    <div>
      {/* navigation bar*/}
      <nav className="flex items-center justify-between px-[50px] py-[15px] border-b-2 bg-white border-black shadow-xl sticky top-0">
        <div className="flex items-center">
          <img className="w-[50px]" src={logo} />

          <h1 className="text-4xl font-semibold italic ml-5">My CV Resume</h1>
        </div>
        <div className="flex items-center font-semibold">
          <h2 className="m-4 ">LOG IN</h2>
          <h3 className="m-4">CREATE ACCOUNT</h3>
          <img className="w-[50px]" src={profile} />
        </div>
      </nav>
      {/* self intro div*/}
      <div className="flex items-center justify-center p-[40px] px-[30px] pt-[90px] ">
        <div className="pl-[60px]">
          <img
            className="rounded-[50px] shadow-[20px_20px_0px_10px_#ED3C3C] w-[70%]"
            src={za}
          />
        </div>

        <div
          className=" flex flex-col gap-2 pt-[5px] pl-[30px] w-[60%]"
          style={{ fontFamily: "IBM Plex Sans" }}
        >
          <h1 className="font-semibold text-[55px]">
            Chan Liza ~ Graphic Designer
          </h1>
          <h2 className="font-semibold text-[45px] "></h2>
          <p1 className="text-[20px]">
            Creative and detail-oriented graphic designer with 3 years of
            experience in designing logos, brochures, and websites. Proficient
            in Adobe Creative Suite, Sketch, and Figma. Passionate about
            creating visually appealing designs that communicate the client’s
            message effectively
          </p1>
          <p2 className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            praesentium non reiciendis impedit molestias soluta repellendus
            iste. Cum, non expedita. Cupiditate aperiam laudantium neque
            voluptate corporis? Voluptatibus id unde nisi.
          </p2>
        </div>
      </div>

      {/* this is the second dev with experience details section*/}
      <div className="flex flex-col">
        <h1 className="text-[40px]  p-[30px] ml-[40px] font-bold">
          Experience
        </h1>
        <div className="flex item-center justify-between px-[100px] py-[80px] bg-[#562828] text-white">
          <div>
            <h1 className="text-[30px]">2019-2020</h1>
            <p className="w-[350px] text-[20px]">
              experience in computer engineer Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores, enim perferendis
              recusandae.
            </p>
          </div>
          <div>
            <h1 className="text-[30px]">2019-2020</h1>
            <p className="w-[350px] text-[20px]">
              experience in computer engineer Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores, enim perferendis
              recusandae.
            </p>
          </div>
          <div>
            <h1 className="text-[30px]">2019-2020</h1>
            <p className="w-[350px] text-[20px]">
              experience in computer engineer Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores, enim perferendis
              recusandae.
            </p>
          </div>
        </div>
      </div>

      {/*contact and education div*/}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
          <h1>Contact Details</h1>
          <h2>Education Background</h2>
        </div>

        <div className="flex justify-between ">
          <div className="flex flex-col px-[100px] bg-[#FF7A72] pt-[10px] rounded-r-[40px] pb-[35px]">
            {/*how do i target all the header at once?*/}
            <div className="flex flex-col text-[20px] pb-[13px] pt-[40px]">
              <h1 className="text-[25px] font-semibold">Phone</h1>
              <p1>+855 39 384 143 </p1>
              <p1>+855 39 384 143 </p1>
            </div>
            <div className="flex flex-col text-[20px] pb-[13px]">
              <h2 className="text-[25px] font-semibold">Emails</h2>
              <p2 className>kakzachan@gmail.com</p2>
            </div>
            <div className="flex flex-col text-[20px] pb-[13px]">
              <h3 className="text-[25px] font-semibold">Address</h3>
              <p3 className="w-[250px]">
                Str. 143 Borey Vimean Phnom Penh Chomka doung district phnom
                penh
              </p3>
            </div>
          </div>

          <div className="flex flex-col pr-[120px] pl-[90px] rounded-l-[40px] py-[50px] text-[20px] text-white bg-[#6F1919]">
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>
                Studied and graduate from SontherMok National School with a
                Diploma grade B+
              </p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2019-2020</h1>
              <p1>
                Graduated with certificate in English Pacific Asia school with
                English bachelor
              </p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>Studied and Graduated with Bachelor of Computer Science</p1>
            </div>
            <div className="pb-[15px]">
              <h1 className="text-[25px] font-semibold">2009-2021</h1>
              <p1>
                Gradute from France Design school bachelor of graphic design
              </p1>
            </div>
          </div>
        </div>
      </div>
      {/* Skills / past projects and language div */}
      <div className="flex flex-col justify-between">
        <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
          <h1>Skills</h1>
          <h2>Projects</h2>
        </div>
        <div className="flex item-center justify-between">
          {/* skills and language div */}
          <div className="flex flex-col">
            <div className="flex flex-col text-[23px] pl-[100px] pr-[40px] leading-[45px] py-[50px] bg-[#C13131] rounded-r-[40px] text-white">
              <p1>Graphic Design Certified 2021</p1>
              <p2>Design Researcher Certified</p2>
              <p3>Hacker CFO</p3>
              <p4>Digital Marketing</p4>
            </div>
            <div className="flex justify-between text-[40px]  p-[30px] ml-[40px] font-bold">
              <h1>Language</h1>
            </div>
            <div className="flex flex-col text-[23px] px-[100px] leading-[50px] py-[50px] bg-[#FF8C8C] rounded-r-[40px]">
              <p1>Khmer</p1>
              <p2>English</p2>
              <p3>French</p3>
              <p4>Chinese</p4>
            </div>
          </div>
          {/* project div */}
          <div className="flex-col w-[60%]">
            <div className="flex items-center justify-between text-[35px]">
              <div className="pr-[60px] pl-[25px] pt-[25px] pb-[190px] bg-[#FF8C8C] rounded-tl-[40px]">
                <h1>CADT CANTEEN WEB DESIGN</h1>
                <p1 className="text-[20px]">View More</p1>
              </div>
              <div className="pl-[25px] pt-[25px] pb-[190px] bg-[#562828] text-white">
                <h1>CAMTECH WEB MINI GAME DESIGN</h1>
                <p1 className="text-[20px]">View More</p1>
              </div>
            </div>
            <div className="flex items-center justify-between text-[35px]">
              <div className="pr-[60px] pl-[25px] pt-[25px] pb-[190px] bg-[#562828] rounded-bl-[40px] text-white">
                <h1>CADT CANTEEN WEB DESIGN</h1>
                <p1 className="text-[20px]">View More</p1>
              </div>
              <div className="pl-[25px] pt-[25px] pb-[190px] bg-[#FF8C8C]">
                <h1>CAMTECH WEB MINI GAME DESIGN</h1>
                <p1 className="text-[20px]">View More</p1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
