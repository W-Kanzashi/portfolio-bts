import { FaBookOpen, FaPlane } from "react-icons/fa";
import { MdMail, MdPerson, MdBackup } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { GrCloudComputer } from "react-icons/gr";
import { AiOutlineProject } from "react-icons/ai";
import { SiProxmox } from "react-icons/si";

export const Courses = [
  {
    link: "Proxmox",
    slug: "Proxmox",
    labelIcon: <SiProxmox />,
  },
  {
    link: "GestionSauvegardes",
    slug: "Gestion des Sauvegardes",
    labelIcon: <MdBackup />,
  },
  {
    link: "GestionProjet",
    slug: "Gestion de Projet",
    labelIcon: <AiOutlineProject />,
  },
  {
    link: "GestionPatrimoine",
    slug: "Gestion du patrimoine",
    labelIcon: <GrCloudComputer />,
  },
];

export const Work = [
  { link: "Migration", slug: "Migration des services", labelIcon: <FaPlane /> },
  { link: "Mail", slug: "Mail", labelIcon: <MdMail /> },
  {
    link: "SEO",
    slug: "Présence en ligne",
    labelIcon: <BiNetworkChart />,
  },
  {
    link: "Client",
    slug: "Gestion des Clients",
    labelIcon: <MdPerson />,
  },
];

export const Personal = [
  {
    link: "Veille-techno",
    slug: "Veille Technologique",
    labelIcon: <FaBookOpen />,
  },
];
