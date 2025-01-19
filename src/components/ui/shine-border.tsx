// "use client"

// import { cn } from "@/lib/utils"

// interface ShineBorderProps {
//   className?: string
//   children: React.ReactNode
// }

// export function ShineBorder({
//   className,
//   children
// }: ShineBorderProps) {
//   return (
//     <div className={cn("relative group", className)}>
//       {/* Static content */}
//       <div className="relative z-10">
//         {children}
//       </div>
      
//       {/* Border container */}
//       <div 
//         className="absolute inset-0 rounded-[inherit]"
//         style={{
//           background: 'rgba(176, 38, 255, 0.1)',
//           padding: '0.5px'
//         }}
//       />
      
//       {/* Animated beam */}
//       <div
//         className="absolute inset-0 rounded-[inherit]"
//         style={{
//           background: `linear-gradient(
//             90deg,
//             transparent 0%,
//             transparent calc(var(--beam-position, 0%) - 5%),
//             rgba(176, 38, 255, 0.8) var(--beam-position, 0%),
//             transparent calc(var(--beam-position, 0%) + 5%),
//             transparent 100%
//           )`,
//           animation: 'moveBeam 3s linear infinite',
//           WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//           WebkitMaskComposite: 'xor',
//           maskComposite: 'exclude'
//         }}
//       />

//       <style jsx global>{`
//         @keyframes moveBeam {
//           0% {
//             --beam-position: 0%;
//           }
//           100% {
//             --beam-position: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

