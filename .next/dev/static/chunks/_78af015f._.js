(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Nebula.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nebula
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Nebula() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nebula.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "Nebula.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["Nebula.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            const particles = [];
            const particleCount = 200;
            // Helper function to create HSLA color string
            const hsla = {
                "Nebula.useEffect.hsla": (h, s, l, a)=>{
                    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
                }
            }["Nebula.useEffect.hsla"];
            // Create initial nebula particles
            const createNebula = {
                "Nebula.useEffect.createNebula": ()=>{
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    for(let i = 0; i < particleCount; i++){
                        const angle = Math.PI * 2 * i / particleCount + (Math.random() - 0.5) * 0.5;
                        const initialDistance = Math.random() * Math.min(canvas.width, canvas.height) * 0.2;
                        const expansionSpeed = 0.15 + Math.random() * 0.25;
                        particles.push({
                            x: centerX + Math.cos(angle) * initialDistance,
                            y: centerY + Math.sin(angle) * initialDistance,
                            baseX: centerX,
                            baseY: centerY,
                            angle: angle,
                            distance: initialDistance,
                            expansionSpeed: expansionSpeed,
                            vx: Math.cos(angle) * expansionSpeed,
                            vy: Math.sin(angle) * expansionSpeed,
                            radius: 1.5 + Math.random() * 3.5,
                            hue: 270 + Math.random() * 40,
                            saturation: 60 + Math.random() * 20,
                            lightness: 40 + Math.random() * 40,
                            opacity: 0.2 + Math.random() * 0.5,
                            life: Math.random() * 50,
                            maxLife: 150 + Math.random() * 300
                        });
                    }
                }
            }["Nebula.useEffect.createNebula"];
            createNebula();
            let animationFrame;
            let time = 0;
            // Animation loop
            const animate = {
                "Nebula.useEffect.animate": ()=>{
                    time += 0.016; // ~60fps
                    // Clear with very subtle fade for trailing effect
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw base nebula gradient
                    const baseGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.8);
                    baseGradient.addColorStop(0, 'rgba(138, 43, 226, 0.15)');
                    baseGradient.addColorStop(0.3, 'rgba(75, 0, 130, 0.1)');
                    baseGradient.addColorStop(0.6, 'rgba(25, 25, 112, 0.05)');
                    baseGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                    ctx.fillStyle = baseGradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Update and draw particles
                    particles.forEach({
                        "Nebula.useEffect.animate": (particle)=>{
                            // Continuous expansion from center
                            particle.distance += particle.expansionSpeed;
                            // Add subtle orbital motion
                            const orbitalAngle = particle.angle + time * 0.001;
                            const spiralFactor = 1 + time * 0.0001;
                            particle.x = particle.baseX + Math.cos(orbitalAngle) * particle.distance * spiralFactor;
                            particle.y = particle.baseY + Math.sin(orbitalAngle) * particle.distance * spiralFactor;
                            particle.life += 0.3;
                            // Reset particle when it goes too far
                            const maxDistance = Math.max(canvas.width, canvas.height) * 1.5;
                            if (particle.distance > maxDistance || particle.life > particle.maxLife) {
                                particle.baseX = canvas.width / 2 + (Math.random() - 0.5) * 100;
                                particle.baseY = canvas.height / 2 + (Math.random() - 0.5) * 100;
                                particle.angle = Math.random() * Math.PI * 2;
                                particle.distance = Math.random() * 50;
                                particle.life = 0;
                                particle.maxLife = 150 + Math.random() * 300;
                                particle.opacity = 0.2 + Math.random() * 0.5;
                            }
                            // Pulsing opacity based on distance
                            const distanceFactor = Math.min(particle.distance / (maxDistance * 0.5), 1);
                            const pulse = Math.sin(time * 0.5 + particle.angle) * 0.2 + 0.8;
                            const currentOpacity = particle.opacity * (1 - distanceFactor * 0.5) * pulse;
                            // Draw particle with multi-layer glow effect
                            const glowRadius = particle.radius * 4;
                            const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius);
                            gradient.addColorStop(0, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity));
                            gradient.addColorStop(0.3, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity * 0.6));
                            gradient.addColorStop(0.6, hsla(particle.hue, particle.saturation, particle.lightness, currentOpacity * 0.3));
                            gradient.addColorStop(1, hsla(particle.hue, particle.saturation, particle.lightness, 0));
                            ctx.fillStyle = gradient;
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
                            ctx.fill();
                            // Draw bright core
                            ctx.fillStyle = hsla(particle.hue, particle.saturation, particle.lightness, Math.min(currentOpacity * 1.5, 1));
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }["Nebula.useEffect.animate"]);
                    animationFrame = requestAnimationFrame(animate);
                }
            }["Nebula.useEffect.animate"];
            animate();
            return ({
                "Nebula.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    cancelAnimationFrame(animationFrame);
                }
            })["Nebula.useEffect"];
        }
    }["Nebula.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 w-full h-full pointer-events-none z-0",
        style: {
            background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, rgba(75, 0, 130, 0.1) 30%, rgba(25, 25, 112, 0.05) 60%, #000 100%)'
        }
    }, void 0, false, {
        fileName: "[project]/components/Nebula.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(Nebula, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Nebula;
var _c;
__turbopack_context__.k.register(_c, "Nebula");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StarField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StarField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function StarField() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarField.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const resizeCanvas = {
                "StarField.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["StarField.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            const stars = [];
            const starCount = 200;
            // Create stars
            for(let i = 0; i < starCount; i++){
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 1000,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinklePhase: Math.random() * Math.PI * 2
                });
            }
            let animationFrame;
            let time = 0;
            const animate = {
                "StarField.useEffect.animate": ()=>{
                    time += 0.016; // ~60fps
                    // Clear canvas
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw stars
                    stars.forEach({
                        "StarField.useEffect.animate": (star)=>{
                            // Twinkling effect
                            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
                            const currentOpacity = star.opacity * twinkle;
                            ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                            ctx.fill();
                            // Glow effect for brighter stars
                            if (star.size > 1) {
                                const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
                                gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.5})`);
                                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                                ctx.fillStyle = gradient;
                                ctx.beginPath();
                                ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                                ctx.fill();
                            }
                        }
                    }["StarField.useEffect.animate"]);
                    animationFrame = requestAnimationFrame(animate);
                }
            }["StarField.useEffect.animate"];
            animate();
            return ({
                "StarField.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    cancelAnimationFrame(animationFrame);
                }
            })["StarField.useEffect"];
        }
    }["StarField.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 w-full h-full pointer-events-none z-0"
    }, void 0, false, {
        fileName: "[project]/components/StarField.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(StarField, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = StarField;
var _c;
__turbopack_context__.k.register(_c, "StarField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/portfolio/PortfolioGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nebula$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nebula.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StarField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StarField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PortfolioGallery() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('*');
    const [imageErrors, setImageErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const isotopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filters = [
        {
            id: '*',
            label: 'All'
        },
        {
            id: '.sculpture',
            label: 'Sculpture'
        },
        {
            id: '.photography',
            label: 'Photography'
        },
        {
            id: '.literature',
            label: 'Literature'
        },
        {
            id: '.installation',
            label: 'Installation'
        },
        {
            id: '.artwork',
            label: 'Artwork'
        }
    ];
    // Todas las obras del portfolio original
    const artworks = [
        {
            id: 1,
            title: 'Proud and Unprejudiced',
            category: 'artwork',
            image: '/portfolio/2025_proud_and_unprejudiced_web-980x1645.jpg',
            slug: 'proud-and-unprejudiced'
        },
        {
            id: 2,
            title: 'New Colabo',
            category: 'artwork',
            image: '/portfolio/2025_new_colabo_web-980x788.jpg',
            slug: 'new-colabo'
        },
        {
            id: 3,
            title: 'Historical Souvenir',
            category: 'artwork',
            image: '/portfolio/2_Historical-Souvenir-980x1244.jpg',
            slug: 'historical-souvenir'
        },
        {
            id: 4,
            title: 'DENDRITA ASÍNCRONA',
            category: 'installation',
            image: '/portfolio/dendritajpg-1-980x942.jpg',
            slug: 'dendrita-asincrona'
        },
        {
            id: 5,
            title: 'Like me',
            category: 'artwork',
            image: '/portfolio/IMG20240315110820-EDIT_2-980x1809.jpg',
            slug: 'like-me'
        },
        {
            id: 6,
            title: 'Actantes: Mira que te diga',
            category: 'literature',
            image: '/portfolio/libro-fondo-gris-1-scaled-980x610.jpg',
            slug: 'actantes'
        },
        {
            id: 7,
            title: 'I Neon Ucrania LGTBIQ',
            category: 'photography',
            image: '/portfolio/I-Neon_Ucrania_LGTBIQ_web-980x735.jpg',
            slug: 'i-neon-ucrania-lgtbiq'
        },
        {
            id: 8,
            title: 'Serena – Luz de Luna III',
            category: 'literature',
            image: '/portfolio/3258477010.jpg',
            slug: 'serena-luz-de-luna-iii'
        },
        {
            id: 9,
            title: 'ANATOMÍA UNIVERSAL: OJO',
            category: 'installation',
            image: '/portfolio/IMG20220427162158-scaled-980x980.jpg',
            slug: 'anatomia-universal-ojo'
        },
        {
            id: 10,
            title: 'Self-portrait: Transposition',
            category: 'artwork',
            image: '/portfolio/web_self-portrait_Exposoma_Nebulae-980x1325.jpg',
            slug: 'self-portrait-exposoma-nebulae'
        },
        {
            id: 11,
            title: 'SUPERNORMAL JEWEL: SELFPORTRAIT',
            category: 'sculpture',
            image: '/portfolio/supernormal_jewel.jpg',
            slug: 'supernormal-jewel-selfportrait'
        },
        {
            id: 12,
            title: 'Serie: Ambioma de Rorschach',
            category: 'installation',
            image: '/portfolio/Ambioma-de-Rorschach.-Erato-Calíope-Euterpe-2015.jpg',
            slug: 'serie-ambioma-de-rorschach'
        },
        {
            id: 13,
            title: 'AMBIOMA & GENOMA​: Europa',
            category: 'artwork',
            image: '/portfolio/IMG_20190915_123002-scaled-scaled.jpg',
            slug: 'ambioma-genoma-europa'
        },
        {
            id: 14,
            title: 'AMBIOMA & GENOMA​: Joan',
            category: 'artwork',
            image: '/portfolio/IMG_20190915_122329-e1608332627224.jpg',
            slug: 'ambioma-genoma-joan'
        },
        {
            id: 15,
            title: 'AMBIOMA & GENOMA​: Vanessa',
            category: 'artwork',
            image: '/portfolio/IMG_20190915_122049-scaled-e1608289329948.jpg',
            slug: 'ambioma-genoma-vanessa'
        },
        {
            id: 16,
            title: 'El Síndrome de Stendhall de Hércules, hoy',
            category: 'installation',
            image: '/portfolio/Pag-15.jpg',
            slug: 'el-sindrome-de-stendhall-de-hercules-hoy'
        },
        {
            id: 17,
            title: 'THE BIRTH OF… PETROLEUM',
            category: 'artwork',
            image: '/portfolio/Pag-17-e1600798968283.jpg',
            slug: 'the-birth-of-petroleum'
        },
        {
            id: 18,
            title: 'CRSS ¿Quién es el culpable?',
            category: 'installation',
            image: '/portfolio/crss3.jpg',
            slug: 'crss-quien-es-el-culpable'
        },
        {
            id: 19,
            title: 'THE BIRTH OF…',
            category: 'installation',
            image: '/portfolio/Pag-19.jpg',
            slug: 'the-birth-of'
        },
        {
            id: 20,
            title: 'PÓDIUM SOCIAL: ORO, PLATA, BRONCE',
            category: 'installation',
            image: '/portfolio/Pag-233-1.jpg',
            slug: 'podium-social-oro-plata-bronce'
        }
    ];
    // Initialize Isotope with dynamic imports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioGallery.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !galleryRef.current) return;
            let mounted = true;
            let timer = null;
            const initIsotope = {
                "PortfolioGallery.useEffect.initIsotope": async ()=>{
                    try {
                        // Dynamically import Isotope and imagesLoaded
                        const [IsotopeModule, imagesLoadedModule] = await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/isotope-layout/js/isotope.js [app-client] (ecmascript, async loader)"),
                            __turbopack_context__.A("[project]/node_modules/imagesloaded/imagesloaded.js [app-client] (ecmascript, async loader)")
                        ]);
                        if (!mounted || !galleryRef.current) return;
                        const Isotope = IsotopeModule.default || IsotopeModule;
                        const imagesLoaded = imagesLoadedModule.default || imagesLoadedModule;
                        // Wait for images to load first
                        const imgLoad = imagesLoaded(galleryRef.current);
                        const init = {
                            "PortfolioGallery.useEffect.initIsotope.init": ()=>{
                                if (!mounted || !galleryRef.current) return;
                                // Destroy existing instance if any
                                if (isotopeRef.current) {
                                    isotopeRef.current.destroy();
                                }
                                const iso = new Isotope(galleryRef.current, {
                                    itemSelector: '.portfolio-item',
                                    layoutMode: 'masonry',
                                    masonry: {
                                        columnWidth: '.portfolio-item-sizer',
                                        gutter: 20
                                    },
                                    transitionDuration: '0.5s',
                                    filter: activeFilter === '*' ? '*' : activeFilter
                                });
                                isotopeRef.current = iso;
                            }
                        }["PortfolioGallery.useEffect.initIsotope.init"];
                        imgLoad.on('always', init);
                        // Also try to initialize immediately in case images are already loaded
                        timer = setTimeout({
                            "PortfolioGallery.useEffect.initIsotope": ()=>{
                                if (galleryRef.current && galleryRef.current.querySelectorAll('img').length > 0) {
                                    init();
                                }
                            }
                        }["PortfolioGallery.useEffect.initIsotope"], 100);
                    } catch (error) {
                        console.error('Error loading Isotope:', error);
                    }
                }
            }["PortfolioGallery.useEffect.initIsotope"];
            initIsotope();
            return ({
                "PortfolioGallery.useEffect": ()=>{
                    mounted = false;
                    if (timer) {
                        clearTimeout(timer);
                    }
                    if (isotopeRef.current) {
                        isotopeRef.current.destroy();
                        isotopeRef.current = null;
                    }
                }
            })["PortfolioGallery.useEffect"];
        }
    }["PortfolioGallery.useEffect"], [
        activeFilter
    ]);
    // Update Isotope when filter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioGallery.useEffect": ()=>{
            if (!isotopeRef.current || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            const filterValue = activeFilter === '*' ? '*' : activeFilter;
            isotopeRef.current.arrange({
                filter: filterValue
            });
        }
    }["PortfolioGallery.useEffect"], [
        activeFilter
    ]);
    // Split text for title animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioGallery.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const splitTitles = {
                "PortfolioGallery.useEffect.splitTitles": ()=>{
                    const titles = document.querySelectorAll('.portfolio-title-text');
                    titles.forEach({
                        "PortfolioGallery.useEffect.splitTitles": (title)=>{
                            // Skip if already split
                            if (title.querySelector('.char')) return;
                            const text = title.textContent || '';
                            const chars = text.split('').map({
                                "PortfolioGallery.useEffect.splitTitles.chars": (char, index)=>`<span class="char" style="--char-index: ${index}">${char === ' ' ? '&nbsp;' : char}</span>`
                            }["PortfolioGallery.useEffect.splitTitles.chars"]);
                            title.innerHTML = chars.join('');
                        }
                    }["PortfolioGallery.useEffect.splitTitles"]);
                }
            }["PortfolioGallery.useEffect.splitTitles"];
            // Run after a delay to ensure DOM is ready
            const timer = setTimeout(splitTitles, 300);
            return ({
                "PortfolioGallery.useEffect": ()=>clearTimeout(timer)
            })["PortfolioGallery.useEffect"];
        }
    }["PortfolioGallery.useEffect"], [
        artworks
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-8 md:py-12 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "portfolio-title text-6xl md:text-8xl lg:text-9xl font-arbonnie font-bold mb-12 tracking-[0.15em] uppercase",
                        children: "PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-6 md:py-8 border-t border-gray-800 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center items-center gap-1 md:gap-2",
                        children: filters.map((filter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFilter(filter.id),
                                        className: `text-xs md:text-sm font-poppins font-light tracking-wider transition-all duration-300 ${activeFilter === filter.id ? 'text-[#0693e3]' : 'text-white hover:opacity-70'}`,
                                        children: filter.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this),
                                    index < filters.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 mx-1.5 md:mx-2 text-xs md:text-sm",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                        lineNumber: 305,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, filter.id, true, {
                                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-8 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nebula$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StarField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: galleryRef,
                            className: "portfolio-gallery",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "portfolio-item-sizer"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                artworks.map((artwork, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `portfolio-item ${artwork.category} items star-birth`,
                                        "data-category": artwork.category,
                                        "data-filter": `.${artwork.category}`,
                                        style: {
                                            animationDelay: `${index * 0.1}s`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `#`,
                                                className: "block",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                },
                                                children: [
                                                    !imageErrors[artwork.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: artwork.image,
                                                        alt: artwork.title,
                                                        width: 980,
                                                        height: 1645,
                                                        className: "portfolio-image",
                                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                                        onError: ()=>setImageErrors((prev)=>({
                                                                    ...prev,
                                                                    [artwork.id]: true
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-64 bg-gray-800 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 text-sm",
                                                            children: "Imagen no disponible"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "item-img-overlay",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "overlay-info",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "portfolio-title-text",
                                                                children: artwork.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    }, artwork.id, false, {
                                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/PortfolioGallery.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_s(PortfolioGallery, "t121WuGOD0yMVDfymZCvK2xQOEE=");
_c = PortfolioGallery;
var _c;
__turbopack_context__.k.register(_c, "PortfolioGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shapes/StarField3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LowerStarField",
    ()=>LowerStarField,
    "UpperStarField",
    ()=>UpperStarField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Generate star positions once outside component for performance
const generateStarPositions = (spread, count)=>[
        ...Array(count)
    ].map(()=>({
            x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(spread),
            y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(spread),
            z: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(spread * 2)
        }));
const UPPER_POSITIONS = generateStarPositions(10, 500);
const LOWER_POSITIONS = generateStarPositions(40, 500);
const UpperStarField = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(()=>{
    _s();
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: UPPER_POSITIONS.map((position, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    position.x,
                    position.y,
                    position.z
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.005,
                            1,
                            2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/shapes/StarField3D.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/components/shapes/StarField3D.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `star-upper-${index}`, true, {
                fileName: "[project]/components/shapes/StarField3D.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/shapes/StarField3D.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "PnfuaQLrpH5YTV5484E1LZLgA0Q=")), "PnfuaQLrpH5YTV5484E1LZLgA0Q=");
_c1 = UpperStarField;
UpperStarField.displayName = 'UpperStarField';
const LowerStarField = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c2 = _s1(({ position, size = 0.005 })=>{
    _s1();
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: position,
        children: LOWER_POSITIONS.map((starPos, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    starPos.x,
                    starPos.y,
                    starPos.z
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            size,
                            1,
                            2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/shapes/StarField3D.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/components/shapes/StarField3D.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `star-lower-${index}`, true, {
                fileName: "[project]/components/shapes/StarField3D.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/shapes/StarField3D.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "PnfuaQLrpH5YTV5484E1LZLgA0Q=")), "PnfuaQLrpH5YTV5484E1LZLgA0Q=");
_c3 = LowerStarField;
LowerStarField.displayName = 'LowerStarField';
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "UpperStarField$React.memo");
__turbopack_context__.k.register(_c1, "UpperStarField");
__turbopack_context__.k.register(_c2, "LowerStarField$React.memo");
__turbopack_context__.k.register(_c3, "LowerStarField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CVBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CVBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shapes$2f$StarField3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shapes/StarField3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RotatingStars() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "RotatingStars.useFrame": (state, delta)=>{
            if (ref.current) {
                ref.current.rotation.y -= delta * 0.05; // Gentle rotation
            }
        }
    }["RotatingStars.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shapes$2f$StarField3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpperStarField"], {}, void 0, false, {
                fileName: "[project]/components/CVBackground.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shapes$2f$StarField3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LowerStarField"], {
                position: [
                    0,
                    -10,
                    0
                ],
                size: 0.008
            }, void 0, false, {
                fileName: "[project]/components/CVBackground.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shapes$2f$StarField3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LowerStarField"], {
                position: [
                    0,
                    10,
                    0
                ],
                size: 0.008
            }, void 0, false, {
                fileName: "[project]/components/CVBackground.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CVBackground.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(RotatingStars, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = RotatingStars;
function CVBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: 'black' // Fallback and base color
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    5
                ],
                fov: 60
            },
            gl: {
                alpha: true,
                antialias: true
            },
            style: {
                width: '100%',
                height: '100%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingStars, {}, void 0, false, {
                    fileName: "[project]/components/CVBackground.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/components/CVBackground.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CVBackground.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CVBackground.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = CVBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "RotatingStars");
__turbopack_context__.k.register(_c1, "CVBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_78af015f._.js.map