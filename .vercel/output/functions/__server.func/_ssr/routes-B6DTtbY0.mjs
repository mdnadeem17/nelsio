import { r as __toESM } from "../_runtime.mjs";
import { n as pavan_ug_default, t as mohammed_nadeem_default } from "./pavan-ug-Bqo-bmMd.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Check, r as ArrowUpRight, t as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6DTtbY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nelsio_logo_default = "/assets/nelsio-logo-C82k5fJl.png";
function useLogoFallback() {
	const [err, setErr] = (0, import_react.useState)(false);
	return [err, () => setErr(true)];
}
function useFadeIn(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				obs.disconnect();
			}
		}, { threshold });
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);
	return {
		ref,
		visible
	};
}
function NavLogo() {
	const [err, onErr] = useLogoFallback();
	return err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-[18px] font-semibold tracking-[-0.04em] text-foreground lowercase",
		children: "nelsio"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: nelsio_logo_default,
		alt: "NELSIO",
		className: "h-[65px] md:h-[80px] w-auto object-contain select-none mix-blend-multiply -my-4",
		onError: onErr
	});
}
function HeroWordmark() {
	const [err, onErr] = useLogoFallback();
	return err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full select-none",
		style: { lineHeight: 0 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[22vw] font-semibold tracking-[-0.05em] leading-none text-foreground lowercase block",
			children: "nelsio"
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full flex justify-center items-center py-4 md:py-10 overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: nelsio_logo_default,
			alt: "NELSIO",
			className: "w-[150%] md:w-[160%] max-w-none h-auto object-contain mx-auto select-none block mix-blend-multiply",
			draggable: false,
			onError: onErr
		})
	});
}
function FooterLogo() {
	const [err, onErr] = useLogoFallback();
	return err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-[16px] font-semibold tracking-[-0.04em] text-foreground lowercase",
		children: "nelsio"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: nelsio_logo_default,
		alt: "NELSIO",
		className: "h-[50px] md:h-[60px] w-auto object-contain select-none mix-blend-multiply -my-3",
		onError: onErr
	});
}
var NAV_LINKS = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Vision",
		href: "#vision"
	},
	{
		label: "Ecosystem",
		href: "#ecosystem"
	},
	{
		label: "Philosophy",
		href: "#philosophy"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fn = () => setScrolled(window.scrollY > 40);
		fn();
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06]" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-nelsio flex items-center justify-between h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					"aria-label": "NELSIO home",
					className: "transition-opacity hover:opacity-70",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLogo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-[13px] text-foreground/55 hover:text-foreground transition-colors duration-200 tracking-[0.01em]",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-[13px] font-medium text-foreground hover:text-foreground/60 transition-colors duration-200 tracking-[0.01em]",
					children: "Get in touch →"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen flex flex-col pt-16 overflow-hidden bg-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-orb-1 absolute rounded-full",
						style: {
							width: "900px",
							height: "900px",
							top: "-200px",
							left: "-180px",
							background: "radial-gradient(circle, rgba(235,235,240,0.8) 0%, rgba(220,220,225,0.4) 40%, transparent 70%)",
							filter: "blur(60px)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-orb-2 absolute rounded-full",
						style: {
							width: "800px",
							height: "800px",
							top: "-100px",
							right: "-200px",
							background: "radial-gradient(circle, rgba(225,230,238,0.7) 0%, rgba(205,212,222,0.35) 40%, transparent 70%)",
							filter: "blur(70px)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-orb-3 absolute rounded-full",
						style: {
							width: "700px",
							height: "700px",
							bottom: "5%",
							left: "30%",
							background: "radial-gradient(circle, rgba(245,245,247,0.6) 0%, rgba(230,230,235,0.25) 40%, transparent 70%)",
							filter: "blur(80px)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: {
							backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
							backgroundRepeat: "repeat",
							backgroundSize: "200px 200px",
							opacity: .4
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-nelsio relative z-10 pt-20 md:pt-28 flex items-start justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.25em] text-foreground/35 select-none mt-1 hidden sm:block",
					children: "Built for enduring purpose"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 flex items-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-nelsio relative z-10 w-full pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-foreground max-w-[16ch] mb-12 md:mb-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "NELSIO — "
								}),
								"Some things",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"are worth",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-foreground/38",
									children: [
										"building",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"slowly."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-black/[0.08] pt-6 pb-0 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] md:text-[16px] leading-[1.75] text-foreground/50 max-w-[46ch]",
								children: "NELSIO is the parent company behind our independent startups, platforms, and educational initiatives. We build technology and companies designed to last."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								className: "shrink-0 text-[12px] uppercase tracking-[0.18em] text-foreground/40 hover:text-foreground transition-colors duration-200 pb-1",
								children: "Learn more ↓"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 md:mt-14 -mx-[clamp(1.25rem,4vw,3rem)] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroWordmark, {})
						})
					]
				})
			})
		]
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	const { ref, visible } = useFadeIn();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(18px)",
			transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
		},
		children
	});
}
function Section({ id, label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `py-28 md:py-40 border-t border-black/[0.07] ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-nelsio",
			children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-14 md:mb-20 select-none",
				children: label
			}), children]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		label: "About NELSIO",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-[clamp(2.4rem,4.5vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.04em] text-foreground max-w-[22ch] mb-16 md:mb-20",
			children: [
				"Built to endure.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground/38",
					children: "Engineered to scale."
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[0.07]",
			children: [
				{
					n: "01",
					text: "NELSIO is the unified parent company and developer identity housing our distinct platforms, applications, and educational initiatives under one roof."
				},
				{
					n: "02",
					text: "From commercial platforms like CUTZO to youth initiatives like IBZEN, each operates with independent focus while sharing our rigorous engineering standard."
				},
				{
					n: "03",
					text: "We are not built to optimize for quarters. We are built to be measured in decades. That distinction shapes every decision we make.",
					accent: true
				}
			].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-8 pb-10 pr-0 md:pr-12 border-b border-black/[0.07] md:border-b-0 md:border-r md:last:border-r-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/28 mb-5",
						children: item.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-[16px] leading-[1.8] ${item.accent ? "text-foreground font-medium" : "text-foreground/55"}`,
						children: item.text
					})]
				})
			}, item.n))
		})]
	});
}
var FOUNDERS = [{
	name: "Mohammed Nadeem",
	role: "Co-Founder",
	bio: "Mohammed Nadeem is the Co-Founder of NELSIO. He drives the strategic vision, long-term roadmaps, and product execution across NELSIO's independent startups, platforms, and educational initiatives.",
	img: mohammed_nadeem_default
}, {
	name: "Pavan UG",
	role: "Co-Founder",
	bio: "Pavan UG is the Co-Founder of NELSIO. He directs the technical infrastructure, software engineering standards, and systems architecture across all NELSIO technology platforms.",
	img: pavan_ug_default
}];
function Founders() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "founders",
		label: "Leadership",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground mb-16 md:mb-24 max-w-[24ch]",
			children: [
				"Guided by conviction.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground/40",
					children: "Building for decades."
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[880px]",
			children: FOUNDERS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						itemScope: true,
						itemType: "https://schema.org/ImageObject",
						className: "relative w-full aspect-[3/4] rounded overflow-hidden max-w-[300px] bg-[oklch(0.96_0_0)] m-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								itemProp: "contentUrl",
								src: f.img,
								alt: `${f.name} — ${f.role} & Founder of NELSIO`,
								title: `${f.name} — ${f.role} of NELSIO`,
								className: "w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "name",
								content: `${f.name} — Co-Founder of NELSIO`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "sr-only",
								children: [f.name, ", Co-Founder of NELSIO"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-black/[0.07] pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[17px] font-medium text-foreground tracking-[-0.02em]",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-foreground/40 mt-1 uppercase tracking-[0.14em]",
								children: f.role
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-[1.8] text-foreground/55",
							children: f.bio
						})]
					})]
				})
			}, f.name))
		})]
	});
}
function MissionVision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "vision",
		label: "Mission & Vision",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[0.07]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-10 pb-14 pr-0 md:pr-16 md:border-r border-black/[0.07]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.22em] text-foreground/30 mb-5",
						children: "Mission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(1.6rem,2.5vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-foreground mb-5",
						children: "To build, scale, and endure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[16px] leading-[1.8] text-foreground/55 max-w-[42ch]",
						children: "NELSIO exists as the parent company created to design, build, and support our software applications and youth initiatives — giving each startup the dedicated engineering and time it needs to scale."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-10 pb-14 pl-0 md:pl-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.22em] text-foreground/30 mb-5",
							children: "Vision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[clamp(1.6rem,2.5vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-foreground mb-5",
							children: "Platforms built to compound value."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16px] leading-[1.8] text-foreground/55 max-w-[42ch]",
							children: "A generation from now, the engineering quality and utility of our platforms will be our enduring legacy. We build toward permanence rather than short-term trends."
						})
					]
				})
			})]
		})
	});
}
var COMPANIES = [
	{
		name: "CUTZO",
		relationship: "Flagship Startup",
		sector: "Commerce & Services",
		tagline: "Smart appointments and queue management for salons.",
		summary: "Book nearby salons, join virtual queues, and eliminate waiting — while salon owners manage walk-ins and bookings from one dashboard."
	},
	{
		name: "IBZEN",
		relationship: "Youth Initiative",
		sector: "Youth Innovation & Career Education",
		tagline: "Two-day workshops that change how school students see the future.",
		summary: "Immersive sessions in technology, engineering, and financial literacy — connecting students with mentors and real-world career exposure."
	},
	{
		name: "Apna Look",
		relationship: "Startup Concept",
		sector: "AI & Fashion-Tech",
		tagline: "AI-powered outfit recommendations tailored to you.",
		summary: "A concept exploring personalised style based on body type, skin tone, budget, and preference — combining innovations from multiple brands into complete looks."
	}
];
function Companies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "ecosystem",
		label: "Ecosystem & Initiatives",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground mb-4 max-w-[22ch]",
			children: [
				"Distinct platforms.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground/40",
					children: "One shared standard."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[16px] leading-[1.75] text-foreground/50 max-w-[50ch] mb-16 md:mb-24",
			children: "Every platform and initiative within our group operates with dedicated purpose — united by uncompromising engineering quality and long-term commitment."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-0 border-t border-black/[0.07]",
			children: COMPANIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-9 md:py-12 border-b border-black/[0.07] -mx-6 px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:w-56 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.04em] text-foreground leading-none",
								children: c.name
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] border border-black/[0.12] text-foreground/70 rounded",
										children: c.relationship
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase tracking-[0.15em] text-foreground/35",
										children: c.sector
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] font-medium text-foreground/80 mb-1.5 tracking-[-0.01em]",
									children: c.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] leading-[1.7] text-foreground/45 max-w-[52ch]",
									children: c.summary
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 self-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 text-[12px] text-foreground/30 group-hover:text-foreground transition-colors duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})
						})
					]
				})
			}, c.name))
		})]
	});
}
var PRINCIPLES = [
	{
		n: "I",
		title: "Think beyond generations.",
		body: "Short-term gains are not our objective. We dedicate time and patience to things that compound: knowledge, reputation, and quality of work."
	},
	{
		n: "II",
		title: "Pursue excellence without compromise.",
		body: "There are no acceptable shortcuts in work we put our name to. The standard does not move. It only rises."
	},
	{
		n: "III",
		title: "Move with intention.",
		body: "Deliberate action outperforms reactive speed. We think carefully before we commit, and we commit fully once we do."
	},
	{
		n: "IV",
		title: "Respect the craft.",
		body: "Whether it is a startup, a software platform, or a sentence: it deserves care. Craftsmanship is not optional. It is the baseline."
	},
	{
		n: "V",
		title: "Create lasting value.",
		body: "We measure success not by what we launch, but by what remains, and whether it continues to serve those who depend on it."
	}
];
function Philosophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "philosophy",
		label: "Philosophy",
		className: "bg-foreground text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-background mb-16 md:mb-24 max-w-[22ch]",
			children: [
				"The principles that",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"guide everything."
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/10",
			children: PRINCIPLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-10 pr-8 border-b border-white/10 md:border-r md:border-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] font-medium text-background/30 uppercase tracking-[0.2em] mb-5",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[17px] font-medium text-background tracking-[-0.02em] mb-3 leading-[1.35]",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-[1.75] text-background/50",
							children: p.body
						})
					]
				})
			}, p.n))
		})]
	});
}
function Governance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "governance",
		label: "How we operate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[0.07]",
			children: [
				{
					n: "01",
					label: "Standard",
					body: "Every application or platform published under the NELSIO name is held to rigorous engineering and design standards before release."
				},
				{
					n: "02",
					label: "Accountability",
					body: "As the parent company and publisher, we take full responsibility for our software security, reliability, and user trust."
				},
				{
					n: "03",
					label: "Transparency",
					body: "We maintain clear operational separation between our software platforms and educational initiatives under our parent identity."
				}
			].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-8 pb-10 pr-0 md:pr-12 border-b border-black/[0.07] md:border-b-0 md:border-r md:last:border-r-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/28 mb-4",
						children: [
							item.n,
							" — ",
							item.label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] leading-[1.8] text-foreground/55",
						children: item.body
					})]
				})
			}, item.n))
		})
	});
}
function LookingForward() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "forward",
		label: "Looking Forward",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground",
					children: [
						"Quietly building",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"what endures."
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "md:col-span-6 md:col-start-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-[17px] leading-[1.8] text-foreground/55",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are in the early chapters of a much longer story. NELSIO has not set out to grow quickly, nor to accumulate. We have set out to do good work, the kind that accumulates quietly into something worthy of the time it took." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Future developments are crafted with deliberate care rather than artificial deadlines. Every platform launched under our parent organization carries our enduring standard of engineering and utility." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 font-medium text-[16px]",
							children: "There is no urgency here. Only intention."
						})
					]
				})
			})]
		})
	});
}
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 md:py-44 border-t border-black/[0.07] bg-[oklch(0.985_0_0)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-nelsio",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.15] tracking-[-0.04em] text-foreground max-w-[22ch]",
				children: [
					"\"Enduring value is not announced.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/40",
						children: "It is proven over time.\""
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-[13px] uppercase tracking-[0.18em] text-foreground/35",
					children: "NELSIO"
				})
			})]
		})
	});
}
function CopyEmail({ email }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center justify-between py-5 border-b border-black/[0.07] cursor-pointer",
		onClick: copy,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `mailto:${email}`,
			onClick: (e) => e.stopPropagation(),
			className: "text-[17px] md:text-[19px] font-normal text-foreground hover:text-foreground/60 transition-colors tracking-[-0.01em]",
			children: email
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: copy,
			className: "flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground transition-colors",
			children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copied" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		label: "Contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground",
						children: [
							"We are",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"listening."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[15px] leading-[1.75] text-foreground/50 max-w-[38ch]",
						children: "If what we stand for resonates with you, we would be glad to hear from you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border-t border-black/[0.07] pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-1",
								children: "Headquarters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] text-foreground/70 font-medium",
								children: "Bengaluru, India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] text-foreground/45 mt-0.5",
								children: "Operating globally across software platforms and youth initiatives."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				className: "md:col-span-5 md:col-start-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-2",
						children: "General"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyEmail, { email: "hello@nelsio.com" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-2 mt-8",
						children: "Ecosystem & Initiatives"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyEmail, { email: "ventures@nelsio.com" })
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-black/[0.07] py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-nelsio",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-12 mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLogo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-foreground/40 max-w-[28ch] leading-[1.7]",
							children: "The parent company behind our software platforms and youth initiatives."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-4",
						children: "Ecosystem & Initiatives"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5",
						children: COMPANIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#ecosystem",
							className: "text-[13px] text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.1em] text-foreground/25",
								children: c.relationship
							})]
						}) }, c.name))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-1.5",
							children: "Navigation"
						}), NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-[13px] text-foreground/50 hover:text-foreground transition-colors",
							children: l.label
						}, l.href))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-1.5",
								children: "Connect"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.linkedin.com/company/nelsio/",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1 text-[13px] text-foreground/50 hover:text-foreground transition-colors",
								children: ["LinkedIn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/letter",
								className: "text-[13px] text-foreground/50 hover:text-foreground transition-colors",
								children: "Founders' Letter"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.06] pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] text-foreground/35",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" NELSIO. All rights reserved."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#privacy",
							className: "text-[12px] text-foreground/35 hover:text-foreground/70 transition-colors",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#terms",
							className: "text-[12px] text-foreground/35 hover:text-foreground/70 transition-colors",
							children: "Terms of Service"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] text-foreground/35",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bengaluru, India" })
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-foreground selection:bg-foreground selection:text-white antialiased relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none fixed inset-0 z-0 bg-dot-grid opacity-75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founders, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionVision, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companies, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Governance, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookingForward, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "About NELSIO — Key Facts",
				className: "sr-only",
				itemScope: true,
				itemType: "https://schema.org/Organization",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
						itemProp: "name",
						content: "NELSIO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
						itemProp: "url",
						content: "https://www.nelsio.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
						itemProp: "foundingDate",
						content: "2025"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
						itemProp: "description",
						content: "NELSIO is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, based in Bengaluru, Karnataka, India."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "About NELSIO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NELSIO (nelsio.com) is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025. NELSIO is headquartered in Bengaluru, Karnataka, India. NELSIO builds enduring software platforms, independent startups, and educational initiatives. The company's portfolio includes CUTZO, IBZEN, and Apna Look." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Who founded NELSIO?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NELSIO was co-founded by Mohammed Nadeem and Pavan UG in 2025. Mohammed Nadeem is the Co-Founder of NELSIO responsible for strategic vision and product execution. Pavan UG is the Co-Founder of NELSIO responsible for technical infrastructure and software engineering." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Mohammed Nadeem — Co-Founder of NELSIO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						itemScope: true,
						itemType: "https://schema.org/Person",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "name",
								content: "Mohammed Nadeem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "jobTitle",
								content: "Co-Founder of NELSIO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "url",
								content: "https://www.nelsio.com/#founders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mohammed Nadeem is the Co-Founder of NELSIO (nelsio.com). He drives the strategic vision, long-term roadmaps, and product execution across NELSIO's portfolio of startups, platforms, and educational initiatives. Mohammed Nadeem co-founded NELSIO in 2025 alongside Pavan UG. Mohammed Nadeem is based in Bengaluru, India. Mohammed Nadeem's LinkedIn: linkedin.com/in/mohammed-nadeem-nelsio" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Pavan UG — Co-Founder of NELSIO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						itemScope: true,
						itemType: "https://schema.org/Person",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "name",
								content: "Pavan UG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "jobTitle",
								content: "Co-Founder of NELSIO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
								itemProp: "url",
								content: "https://www.nelsio.com/#founders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pavan UG is the Co-Founder of NELSIO (nelsio.com). He directs the technical infrastructure, software engineering standards, and systems architecture across all NELSIO technology platforms. Pavan UG co-founded NELSIO in 2025 alongside Mohammed Nadeem. Pavan UG is based in Bengaluru, India. Pavan UG's LinkedIn: linkedin.com/in/pavan-ug" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "NELSIO Products and Initiatives" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "CUTZO" }), " — Flagship startup under NELSIO. Smart appointment booking and queue management for salons. Sector: Commerce and Services."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "IBZEN" }), " — Youth initiative under NELSIO. Immersive two-day workshops in technology, engineering, and financial literacy for school students. Sector: Youth Innovation and Career Education."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Apna Look" }), " — Startup concept under NELSIO. AI-powered outfit recommendations based on body type, skin tone, budget, and preference. Sector: AI and Fashion-Tech."] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Frequently Asked Questions about NELSIO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Who are the founders of NELSIO?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "NELSIO was co-founded by Mohammed Nadeem and Pavan UG in 2025 in Bengaluru, India." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "What is NELSIO?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "NELSIO is a technology parent company that builds software platforms and educational initiatives. Its portfolio includes CUTZO, IBZEN, and Apna Look. Official website: nelsio.com" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "When was NELSIO founded?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "NELSIO was founded in 2025 by Mohammed Nadeem and Pavan UG." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Where is NELSIO based?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "NELSIO is headquartered in Bengaluru, Karnataka, India." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Who is Mohammed Nadeem?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Mohammed Nadeem is the Co-Founder of NELSIO (nelsio.com), a technology parent company in Bengaluru, India. He leads strategic vision, product roadmaps, and execution across NELSIO's ventures." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Who is Pavan UG?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Pavan UG is the Co-Founder of NELSIO (nelsio.com), a technology parent company in Bengaluru, India. He leads technical infrastructure, software engineering, and systems architecture." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "What is CUTZO?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "CUTZO is a flagship startup under NELSIO that provides smart appointment booking and queue management for salons." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "What is IBZEN?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "IBZEN is a youth initiative under NELSIO that runs immersive two-day workshops in technology, engineering, and financial literacy for school students." })
					] })
				]
			})
		]
	});
}
//#endregion
export { Index as component };
