import { FaBookOpen, FaHome, FaPlane } from "react-icons/fa";
import { MdMail, MdPerson } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { GrCloudComputer } from "react-icons/gr";

const LinksSection = [
  { link: "Intro", slug: "Introduction", labelIcon: <FaHome /> },
  { link: "Migration", slug: "Migration des services", labelIcon: <FaPlane /> },
  { link: "Mail", slug: "Mail", labelIcon: <MdMail /> },
  {
    link: "SEO",
    slug: "Développer la présence en ligne",
    labelIcon: <BiNetworkChart />,
  },
  { link: "Gestion Client", slug: "Client", labelIcon: <MdPerson /> },
  {
    link: "GestionPatrimoine",
    slug: "Gestion du patrimoine",
    labelIcon: <GrCloudComputer />,
  },
  {
    link: "Veille-techno",
    slug: "Veille Technologique",
    labelIcon: <FaBookOpen />,
  },
];

export default LinksSection;
