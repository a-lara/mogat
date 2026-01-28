(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Particles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Particles() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particles = [];
            const particleCount = 60;
            for(let i = 0; i < particleCount; i++){
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: 3,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
            function animate() {
                if (!ctx || !canvas) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                particles.forEach({
                    "Particles.useEffect.animate": (particle)=>{
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }["Particles.useEffect.animate"]);
                requestAnimationFrame(animate);
            }
            animate();
            const handleResize = {
                "Particles.useEffect.handleResize": ()=>{
                    if (!canvas) return;
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["Particles.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Particles.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Particles.useEffect"];
        }
    }["Particles.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed left-0 top-0 w-[100vw] h-[100dvh] pointer-events-none",
        style: {
            zIndex: 1
        }
    }, void 0, false, {
        fileName: "[project]/components/Particles.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Particles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Particles;
var _c;
__turbopack_context__.k.register(_c, "Particles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Particles_tsx_913c8040._.js.map