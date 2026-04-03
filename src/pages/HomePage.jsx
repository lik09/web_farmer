import React, { Suspense } from "react";

// Lazy load all pages/components
const CarouselComponent = React.lazy(() => import("../components/ui/CarouselComponent"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const ServicesPage = React.lazy(() => import("./ServicesPage"));
const ProjectPage = React.lazy(() => import("./ProjectPage"));
const ContactPage = React.lazy(() => import("./ContactPage"));
const BlogsPage = React.lazy(() => import("./BlogsPage"));

// Helper to wrap components in Suspense
const Loadable = (Component, fallbackText) => (
  <Suspense fallback={<div style={{ textAlign: "center", padding: 50 }}>{fallbackText}</div>}>
    <Component />
  </Suspense>
);

function HomePage() {
  return (
    <div>
      {Loadable(CarouselComponent, "Loading carousel...")}
      {Loadable(AboutPage, "Loading about...")}
      {Loadable(ServicesPage, "Loading services...")}
      {Loadable(ProjectPage, "Loading projects...")}
      {Loadable(ContactPage, "Loading contact...")}
      {Loadable(BlogsPage, "Loading blogs...")}
    </div>
  );
}

export default HomePage;