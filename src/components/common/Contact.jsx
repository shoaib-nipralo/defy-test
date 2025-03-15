import { Building, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex min-h-screen bg-[#F7BE68]">
      <div className="container flex flex-col mx-auto md:flex-row">
        {/* Left side with contact information */}
        <div className="relative w-full p-6 md:w-1/2 md:p-10">
          <div className="relative pl-10 border-l-2 border-black">
            {/* Head Office */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] bg-[#E5B163]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase">HEAD OFFICE</h3>
              <p className="text-sm">
                C - 20, G Block Rd, G Block BKC, Bandra Kurla
                <br />
                Complex, Bandra East, Mumbai, Maharashtra
                <br />
                400051
              </p>
            </div>

            {/* Drone Training Academy */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] bg-[#f8c05e]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase">OUR DRONE TRAINING ACADEMY</h3>
              <p className="text-sm">
                Sri sri rural development programm skill centre,
                <br />
                Kanakapura Main Rd, near VKR quarters,
                <br />
                Udayapura, Bengaluru, Karnataka 560082
              </p>
            </div>

            {/* Center of Excellence */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] bg-[#f8c05e]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase">
                CENTER OF EXCELLENCE FOR
                <br />
                ADVANCED DRONE RESEARCH
              </h3>
              <p className="text-sm">Sri Sri University, Cuttack, Odisha.</p>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <div className="absolute -left-[42px] bg-[#f8c05e]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase">CONTACT NUMBER</h3>
              <p className="text-sm">+91 93720-27820</p>
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="w-full p-6 md:w-1/2 md:p-10">
          <h2 className="mb-6 text-4xl font-bold">CONTACT US</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 outline-none appearance-none focus:outline-none placeholder-black/70 " style={{backgroundColor: "#E5B163"}}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 outline-none appearance-none focus:outline-none placeholder-black/70 " style={{backgroundColor: "#E5B163"}}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 outline-none appearance-none placeholder-black/70 focus:outline-none " style={{backgroundColor: "#E5B163"}}
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full bg-[#f8c05e] appearance-none outline-none focus:outline-none placeholder-black/70 p-3" style={{backgroundColor: "#E5B163"}}
            />
            
            {/* Purpose Dropdown */}
            <select
              className="w-full bg-[#f8c05e] appearance-none outline-none focus:outline-none placeholder-black/70 p-3 " style={{backgroundColor: "#E5B163"}}
            >
              <option value="" disabled select="true">
                Purpose
              </option>
              <option value="inquiry">General Inquiry</option>
              <option value="training">Training Information</option>
              <option value="research">Research Collaboration</option>
              <option value="other">Other</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#f8c05e] appearance-none outline-none focus:outline-none  placeholder-black/70 p-3 " style={{backgroundColor: "#E5B163"}}
            />
            <textarea
              placeholder="Message"
              className="w-full bg-[#f8c05e] appearance-none outline-none focus:outline-none  placeholder-black/70 p-3  min-h-[100px]" style={{backgroundColor: "#E5B163"}}
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 text-black transition duration-300 bg-transparent border-2 border-black rounded-full hover:bg-black hover:text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
