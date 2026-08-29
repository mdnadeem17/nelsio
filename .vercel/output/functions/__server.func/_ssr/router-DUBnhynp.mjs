import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DUBnhynp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BNVeQlHt.css";
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	console.error("[NELSIO] Error captured:", error, context);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "google-site-verification",
				content: "ISryf9QA-Y9LA4oYboKZoZgGED28i1HkVWaXE4l8uyU"
			},
			{ title: "NELSIO — Built to endure. Engineered to scale." },
			{
				name: "description",
				content: "NELSIO is the parent company behind CUTZO and IBZEN, co-founded by Mohammed Nadeem and Pavan UG. We build enduring software platforms and educational initiatives."
			},
			{
				name: "keywords",
				content: "NELSIO, Mohammed Nadeem, Pavan UG, Mohammed Nadeem founder of NELSIO, Pavan UG founder of NELSIO, CUTZO, IBZEN, parent company, tech founders India"
			},
			{
				name: "author",
				content: "NELSIO"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:title",
				content: "NELSIO — Built to endure. Engineered to scale."
			},
			{
				property: "og:description",
				content: "NELSIO is the parent company behind CUTZO and IBZEN, co-founded by Mohammed Nadeem and Pavan UG."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nelsio.com"
			},
			{
				property: "og:site_name",
				content: "NELSIO"
			},
			{
				property: "og:image",
				content: "https://www.nelsio.com/nelsio-logo.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:type",
				content: "image/png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "NELSIO"
			},
			{
				name: "twitter:description",
				content: "Parent company behind CUTZO, IBZEN, and emerging technology initiatives."
			},
			{
				name: "twitter:image",
				content: "https://www.nelsio.com/nelsio-logo.png"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.nelsio.com"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/icon.svg?v=2"
			},
			{
				rel: "shortcut icon",
				type: "image/svg+xml",
				href: "/icon.svg?v=2"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon.svg?v=2"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"@id": "https://www.nelsio.com/#organization",
					name: "NELSIO",
					alternateName: [
						"Nelsio",
						"NELSIO company",
						"NELSIO India"
					],
					url: "https://www.nelsio.com",
					logo: "https://www.nelsio.com/nelsio-logo.png",
					image: "https://www.nelsio.com/nelsio-logo.png",
					description: "NELSIO is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, based in Bengaluru, India. NELSIO builds enduring software platforms and educational initiatives including CUTZO and IBZEN.",
					foundingDate: "2025",
					foundingLocation: "Bengaluru, Karnataka, India",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Bengaluru",
						addressRegion: "Karnataka",
						addressCountry: "IN"
					},
					sameAs: ["https://www.linkedin.com/company/nelsio/"],
					founder: [{
						"@type": "Person",
						"@id": "https://www.nelsio.com/#mohammed-nadeem",
						name: "Mohammed Nadeem",
						jobTitle: "Co-Founder of NELSIO",
						image: "https://www.nelsio.com/mohammed-nadeem.png",
						url: "https://www.nelsio.com/#founders",
						sameAs: ["https://www.linkedin.com/in/mohammed-nadeem-nelsio"],
						worksFor: {
							"@type": "Organization",
							"@id": "https://www.nelsio.com/#organization"
						}
					}, {
						"@type": "Person",
						"@id": "https://www.nelsio.com/#pavan-ug",
						name: "Pavan UG",
						jobTitle: "Co-Founder of NELSIO",
						image: "https://www.nelsio.com/pavan-ug.png",
						url: "https://www.nelsio.com/#founders",
						sameAs: ["https://www.linkedin.com/in/pavan-ug"],
						worksFor: {
							"@type": "Organization",
							"@id": "https://www.nelsio.com/#organization"
						}
					}],
					subOrganization: [
						{
							"@type": "Organization",
							name: "CUTZO",
							description: "Smart appointments and queue management for salons. A flagship startup under NELSIO."
						},
						{
							"@type": "Organization",
							name: "IBZEN",
							description: "Youth Innovation & Career Education initiative under NELSIO."
						},
						{
							"@type": "Organization",
							name: "Apna Look",
							description: "AI-powered outfit recommendations startup concept under NELSIO."
						}
					]
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "NELSIO",
					url: "https://www.nelsio.com"
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					"@id": "https://www.nelsio.com/#mohammed-nadeem",
					name: "Mohammed Nadeem",
					alternateName: ["Mohammad Nadeem", "Mohammed Nadeem NELSIO"],
					jobTitle: "Co-Founder of NELSIO",
					worksFor: {
						"@type": "Organization",
						"@id": "https://www.nelsio.com/#organization",
						name: "NELSIO",
						url: "https://www.nelsio.com"
					},
					image: "https://www.nelsio.com/mohammed-nadeem.png",
					url: "https://www.nelsio.com/#founders",
					description: "Mohammed Nadeem is the Co-Founder of NELSIO (nelsio.com), a technology parent company founded in 2025 in Bengaluru, India. He drives the strategic vision, long-term roadmaps, and product execution across NELSIO's portfolio including CUTZO and IBZEN.",
					nationality: {
						"@type": "Country",
						name: "India"
					},
					knowsAbout: [
						"technology startups",
						"product strategy",
						"software platforms",
						"entrepreneurship"
					],
					sameAs: ["https://www.linkedin.com/in/mohammed-nadeem-nelsio"]
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					"@id": "https://www.nelsio.com/#pavan-ug",
					name: "Pavan UG",
					alternateName: ["Pavan U G", "Pavan UG NELSIO"],
					jobTitle: "Co-Founder of NELSIO",
					worksFor: {
						"@type": "Organization",
						"@id": "https://www.nelsio.com/#organization",
						name: "NELSIO",
						url: "https://www.nelsio.com"
					},
					image: "https://www.nelsio.com/pavan-ug.png",
					url: "https://www.nelsio.com/#founders",
					description: "Pavan UG is the Co-Founder of NELSIO (nelsio.com), a technology parent company founded in 2025 in Bengaluru, India. He directs technical infrastructure, software engineering standards, and systems architecture across all NELSIO platforms.",
					nationality: {
						"@type": "Country",
						name: "India"
					},
					knowsAbout: [
						"software engineering",
						"systems architecture",
						"technical infrastructure",
						"entrepreneurship"
					],
					sameAs: ["https://www.linkedin.com/in/pavan-ug"]
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "Who are the founders of NELSIO?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "NELSIO was co-founded by Mohammed Nadeem and Pavan UG in 2025. Mohammed Nadeem leads strategic vision and product execution. Pavan UG leads technical infrastructure and software engineering. Both are based in Bengaluru, India. Learn more at https://www.nelsio.com/#founders"
							}
						},
						{
							"@type": "Question",
							name: "Who is Mohammed Nadeem?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Mohammed Nadeem is the Co-Founder of NELSIO (nelsio.com), a technology parent company based in Bengaluru, India, founded in 2025. He drives the strategic vision, long-term roadmaps, and product execution across NELSIO's portfolio of startups and platforms including CUTZO and IBZEN."
							}
						},
						{
							"@type": "Question",
							name: "Who is Pavan UG?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Pavan UG is the Co-Founder of NELSIO (nelsio.com), a technology parent company based in Bengaluru, India, founded in 2025. He directs technical infrastructure, software engineering standards, and systems architecture across all NELSIO technology platforms."
							}
						},
						{
							"@type": "Question",
							name: "What is NELSIO?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "NELSIO is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, headquartered in Bengaluru, India. NELSIO builds enduring software platforms and educational initiatives. Its portfolio includes CUTZO (salon appointment management), IBZEN (youth career education), and Apna Look (AI fashion-tech). Website: https://www.nelsio.com"
							}
						},
						{
							"@type": "Question",
							name: "When was NELSIO founded?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "NELSIO was founded in 2025 by Mohammed Nadeem and Pavan UG in Bengaluru, Karnataka, India."
							}
						},
						{
							"@type": "Question",
							name: "What products does NELSIO own?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "NELSIO's portfolio includes: CUTZO (smart appointment and queue management for salons), IBZEN (youth innovation and career education workshops for school students), and Apna Look (AI-powered outfit recommendations). All ventures operate under the NELSIO parent company at nelsio.com."
							}
						},
						{
							"@type": "Question",
							name: "Where is NELSIO based?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "NELSIO is headquartered in Bengaluru, Karnataka, India."
							}
						}
					]
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "AboutPage",
					"@id": "https://www.nelsio.com/#aboutpage",
					url: "https://www.nelsio.com",
					name: "About NELSIO",
					description: "NELSIO is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, based in Bengaluru, India.",
					about: {
						"@type": "Organization",
						"@id": "https://www.nelsio.com/#organization"
					},
					mentions: [{
						"@type": "Person",
						"@id": "https://www.nelsio.com/#mohammed-nadeem"
					}, {
						"@type": "Person",
						"@id": "https://www.nelsio.com/#pavan-ug"
					}]
				}) }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./letter-CaVAG1Kq.mjs");
var Route$1 = createFileRoute("/letter")({
	head: () => ({ meta: [
		{ title: "A Letter from our Founders — NELSIO" },
		{
			name: "description",
			content: "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to."
		},
		{
			name: "keywords",
			content: "NELSIO founders, Mohammed Nadeem founder of NELSIO, Pavan UG founder of NELSIO, Founders Letter, CUTZO, IBZEN, parent company, startups India"
		},
		{
			property: "og:title",
			content: "A Letter from our Founders — NELSIO"
		},
		{
			property: "og:description",
			content: "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to."
		},
		{
			property: "og:url",
			content: "https://nelsio.com/letter"
		},
		{
			name: "twitter:title",
			content: "A Letter from our Founders — NELSIO"
		},
		{
			name: "twitter:description",
			content: "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-B6DTtbY0.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{
			name: "google-site-verification",
			content: "ISryf9QA-Y9LA4oYboKZoZgGED28i1HkVWaXE4l8uyU"
		},
		{ title: "NELSIO — Parent Company of CUTZO & IBZEN | Co-Founded by Mohammed Nadeem & Pavan UG" },
		{
			name: "description",
			content: "NELSIO (nelsio.com) is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, based in Bengaluru, India. NELSIO builds enduring software platforms and educational initiatives including CUTZO (salon booking) and IBZEN (youth career education)."
		},
		{
			name: "keywords",
			content: "NELSIO, Mohammed Nadeem, Pavan UG, Mohammed Nadeem founder of NELSIO, Pavan UG founder of NELSIO, who founded NELSIO, NELSIO founders, CUTZO, IBZEN, Apna Look, software parent company India, tech startups Bengaluru, nelsio.com"
		},
		{
			property: "og:title",
			content: "NELSIO — Co-Founded by Mohammed Nadeem & Pavan UG"
		},
		{
			property: "og:description",
			content: "NELSIO is a technology parent company co-founded by Mohammed Nadeem and Pavan UG in 2025, Bengaluru, India. Home of CUTZO and IBZEN."
		},
		{
			property: "og:url",
			content: "https://www.nelsio.com"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:image",
			content: "https://www.nelsio.com/mohammed-nadeem.png"
		},
		{
			property: "og:image:width",
			content: "1200"
		},
		{
			property: "og:image:height",
			content: "1600"
		},
		{
			property: "og:image:type",
			content: "image/png"
		},
		{
			property: "og:image:alt",
			content: "Mohammed Nadeem — Co-Founder of NELSIO"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LetterRoute = Route$1.update({
	id: "/letter",
	path: "/letter",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	LetterRoute
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
