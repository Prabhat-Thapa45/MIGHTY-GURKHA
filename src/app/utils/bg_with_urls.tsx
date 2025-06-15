"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items with their corresponding URLs
  const breadcrumbs = pathSegments.map((segment, idx) => {
    const href = "/" + pathSegments.slice(0, idx + 1).join("/");
    return {
      label: capitalize(segment),
      href,
      isLast: idx === pathSegments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className=" h-[130px] md:h-[200px] bg-green-600"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
        justifyContent: "center",
        fontSize: "1.3rem",
        overflowX: "auto",
      }}
    >
      <div className="flex flex-row">
        <Link
          href="/"
          className="text-white hover:text-gray-200"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
        {breadcrumbs.length > 0 &&
          breadcrumbs.map((crumb) => (
            <span
              key={crumb.href}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="font-bold text-white"
                style={{ margin: "0 0.5rem" }}
              >
                /
              </span>
              {crumb.isLast ? (
                <span className="text-white">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        <style jsx>{`
          nav {
            min-height: 60px;
          }
          @media (max-width: 600px) {
            nav {
              font-size: 16px;
              padding: 0 0.5rem;
            }
          }
        `}</style>
      </div>
      {breadcrumbs.length > 0 && (
        <span className="pt-3 ml-4 text-5xl font-extrabold text-white">
          {breadcrumbs[breadcrumbs.length - 1].label}
        </span>
      )}
    </nav>
  );
};

export default Breadcrumbs;
