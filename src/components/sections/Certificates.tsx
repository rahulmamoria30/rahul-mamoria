"use client"
import Image from "next/image"

const certificates = [
  {
    title: "Google Cloud Digital Leader",
    image: "/images/certificates/gcp_certificate.jpg",
    issuer: "Google Cloud",
  },
  {
    title: "React Developer Certification",
    image: "/images/certificates/React_certificate.jpg",
    issuer: "Udemy",
  },
  {
    title: "Angular Developer Certification",
    image: "/images/certificates/Angular_certificate.jpg",
    issuer: "Udemy",
  },
  {
    title: "Jest Unit Testing",
    image: "/images/certificates/unit_testing.jpg",
    issuer: "Udemy",
  },
  {
    title: "Typescript Unit Testing",
    image: "/images/certificates/Typescript_certificate.jpg",
    issuer: "Udemy",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mt-12 relative">
          <div className="flex animate-scroll gap-5">
            {/* First set of certificates */}
            {certificates.map((cert, index) => (
              <div
                key={`first-${index}`}
                className="group flex-shrink-0 w-72 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative w-full h-44 mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground/90 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground/70">
                  {cert.issuer}
                </p>
              </div>
            ))}

            {/* Duplicate set for continuous scroll */}
            {certificates.map((cert, index) => (
              <div
                key={`second-${index}`}
                className="group flex-shrink-0 w-72 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative w-full h-44 mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground/90 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground/70">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
