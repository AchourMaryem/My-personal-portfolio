import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
	FaJava,
	FaSchool,
	FaHandsHelping,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiFramer,
	SiAdobexd,
	SiAdobephotoshop,
	SiFlutter,
	SiDart,
	SiWindows,
	SiLinux,
	SiEclipseide,
	SiVisualstudio,
	SiVisualstudiocode,
	SiAngular,
	SiTailwindcss,
	SiBootstrap,
	SiFlask,
	SiDotnet,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiPhp,
	SiGo,
	SiGraphql,
	SiCsharp,
	SiC,
	SiMysql,
	SiAdobeillustrator,
	SiI18Next,
	SiPostman,
	SiAndroidstudio,
	SiLaravel,
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { PiCertificateFill, PiListChecksBold } from "react-icons/pi";
import { MdSchool, MdWork } from "react-icons/md";
export const aboutData = [
	{
		title: "ÉDUCATION",
		titleIcon: <MdSchool size={30} />,
		info: [
			{
				title: "Cycle Ingénierie Informatique (Accrédité Européen)",
				school: "École Polytechnique De Sousse",
				stage: "2021 – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305494/cv%20webp/t%C3%A9l%C3%A9charg%C3%A9_dlanaq_fmo79y.webp",
				link: "https://www.linkedin.com/company/ecole-polytechnique-sousse/",
			},
			{
				title:
					"Cycle Préparatoire Intégrée (Mathématiques , Physique , Informatique)",
				school: "École Polytechnique De Sousse",
				stage: "2019 – 2021",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305494/cv%20webp/t%C3%A9l%C3%A9charg%C3%A9_dlanaq_fmo79y.webp",
				link: "https://www.linkedin.com/company/ecole-polytechnique-sousse/",
			},
			{
				title:
					"Baccalauréat Science Technique (Électrique, Mécanique, Physique)",
				school: "Lycée Hammam Sousse 2",
				stage: "2018 – 2019",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305494/cv%20webp/lyc%C3%A9ehs2_v8e5jy_nbqlc3.webp",
				link: "https://www.linkedin.com/company/lyc%C3%A9e-hammam-sousse-2/about/",
			},
		],
		show: true,
	},
	{
		title: "EXPÉRIENCE",
		titleIcon: <MdWork size={30} />,

		info: [
			{
				title: "Développeur Web",
				company: "VAERDIA, Sousse, Tunisie",
				tasks: [
					"Collaboration sur site avec une équipe pluridisciplinaire, mettant en valeur les compétences en MUI, React.js et Next.js. Mes responsabilités englobent l'utilisation de modèles pour concevoir des solutions de Gestion de la Relation Client (CRM) sur mesure.",
					"Incorporation des API fournies en utilisant React Query.",
					"Création performante d'un Backend Flask/MySQL pour gérer fichiers (création, recherche, export),mettant en avant compétences web et conception de bases de données.",
				],
				stage: "2023 (Juillet) – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305502/cv%20webp/VAERDIA_zpy9qy_ic1kk6.webp",
				link: "https://vaerdia.com/",
			},
			{
				title: "Développeur Web",
				company: "JOODLAB, Sousse, Tunisie",
				tasks: [
					"Collaboration à distance avec une équipe sur plusieurs projets en utilisant Angular, Next.js et TailwindCSS, avec GitLab comme plateforme de gestion de version.",
					"La mise en place de plusieurs langues en utilisant le Framework de internationalisation I18n.",
					"La maintenance et le développement pour améliorer l'expérience utilisateur.",
					"La mise en place de stratégies SEO, optimisant le contenu, les mots-clés et la structure du site pour améliorer la visibilité en ligne et augmenter le trafic organique.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691950658/joodlab_ko9uea.svg",
				link: "https://www.joodlab.com/",
			},
			{
				title: "Support Client",
				company: "JOODLAB, Sousse, Tunisie",
				tasks: [
					"L’optimisation de l'expérience utilisateur avec des vidéos tutorielles, guides et blogs détaillés pour les outils d'hôtellerie et de change de devises de l'entreprise.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691950658/joodlab_ko9uea.svg",
				link: "https://www.joodlab.com/",
			},
			{
				title: "Directeur Ressources Humaines",
				company: "SAPIOUS, Sousse, Tunisie",
				tasks: [
					"La gestion du processus de sélection et d'acceptation des étudiants, la coordination des groupes et le suivi de leur présence tout au long des sessions.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305540/cv%20webp/230792985_163533325873832_1648812716993218950_n_dpnjsj_nlars1.webp",
				link: "https://www.sapious.org/ ",
			},
		],
		show: true,
	},
	{
		title: "BÉNÉVOLAT",
		titleIcon: <FaHandsHelping size={30} />,

		info: [
			{
				title: "Secouriste (FPS)",
				club: "Croissant-Rouge Comité Local Hammem Sousse",
				stage: "2022 – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305493/cv%20webp/crt_oljpvy_i96ilx.webp",
				link: "https://www.facebook.com/CRTHS",
			},
			{
				title: "Secouriste, Vice Président du Club",
				club: "Croissant-Rouge Club Universitaire Ecole Polytechnique De Sousse ",
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305493/cv%20webp/crt_oljpvy_i96ilx.webp",
				link: "https://www.facebook.com/crtpolyestim",
			},
			{
				title: "Organisateur, graphiste et photographe",
				club: "Devfest, Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305492/cv%20webp/devfest2021_tcpsu1_mqwjxq.webp",
				link: "https://www.linkedin.com/company/gdg-sousse",
			},
			{
				title: "Créateur de contenu et gestionnaire de communauté",
				club: "We Are Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305499/cv%20webp/wearesousse_pmu99y_hb8zsd.webp",
				link: "https://www.facebook.com/WeareSousse",
			},
			{
				title: "Officier des Affaires Internes et Externe",
				club: "GDSC Ecole Polytechnique De Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305493/cv%20webp/GDSC_Ecole_Polytechnique_de_Sousse_Vertical_color_dj1a2l_z0uefp.webp",
				link: "https://www.facebook.com/GDSCpoly",
			},
			{
				title: "Président du Club",
				club: "Tunivisions Ecole Polytechnique De Sousse",
				stage: "2020 – 2021",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/tunivisions_eps_s2zufb_nrbnqe.webp",
				link: "https://www.facebook.com/ClubTunivisionsEPS",
			},
			{
				title: "Membre actif au Club",
				club: "Tunivisions Ecole Polytechnique De Sousse",
				stage: "2019 – 2020",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/tunivisions_eps_s2zufb_nrbnqe.webp",
				link: "https://www.facebook.com/ClubTunivisionsEPS",
			},
		],
		show: true,
	},
	
];