"use client";

import { usePathname, useSearchParams } from "next/navigation";

import {
  FaMicrophoneAlt,
  FaSchool,
  FaBasketballBall,
  FaGraduationCap,
  FaBookOpen,
  FaTheaterMasks,
} from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { TiFlowMerge } from "react-icons/ti";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { BiCameraMovie } from "react-icons/bi";
import {
  AiFillCrown,
  AiOutlineFundProjectionScreen,
  AiOutlineTrophy,
} from "react-icons/ai";

export const categories = [
  {
    label: "School",
    icon: FaSchool,
    description: "This Venue is a school",
  },
  {
    label: "Auditorium",
    icon: FaMicrophoneAlt,
    description:
      "Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.",
  },
  {
    label: "Gymnasium",
    icon: FaBasketballBall,
    description:
    "Versatile indoor spaces suitable for hosting sports events, fitness classes, workshops, or exhibitions. They often have equipment like basketball hoops, volleyball nets, or gymnastics mats."
  },
  {
    label: "Banquet Hall",
    icon: AiFillCrown,
    description:
      "Elegant and well-appointed halls for hosting formal events like weddings, receptions, galas, or corporate banquets. They typically offer catering services as well.",
  },
  {
    label: "Meeting Room",
    icon: AiOutlineFundProjectionScreen,
    description:
      "Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.",
  },
  {
    label: "Outdoor Amphitheater",
    icon: BiCameraMovie,
    description:
      "Open-air venues with tiered seating for hosting performances, concerts, or movie screenings.",
  },
  {
    label: "Exhibition Hall",
    icon: TiFlowMerge,
    description:
      "Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.",
  },
  {
    label: "Lounge",
    icon: FiCoffee,
    description:
      "Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.",
  },
  {
    label: "Lecture Hall",
    icon: FaGraduationCap,
    description:
      "Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.",
  },
  {
    label: "Library",
    icon: FaBookOpen,
    description:
      "Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.",
  },
  {
    label: "Theater",
    icon: FaTheaterMasks,
    description:
      "Elegant and well-appointed halls for hosting formal events like weddings, receptions, galas, or corporate banquets. They typically offer catering services as well.",
  },
  {
    label: "Sports Field",
    icon: AiOutlineTrophy,
    description:
      "Versatile outdoor spaces suitable for hosting sports events, track meets, or exhibitions. They often have equipment like starting blocks, vaulting poles, or gymnastics mats.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className='
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        '
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

