import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import CarRental from "@/pages/CarRental"; // Added import for CarRental
// import Footer from "@/components/layout/Footer"; // Added import for Footer

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resources" component={Resources} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/car-rental" component={CarRental} /> {/* Added Car Rental route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Router />
        <Toaster />
       {/* // <Footer /> Added Footer component */}
      </>
    </QueryClientProvider>
  );
}

export default App;

// "@/components/layout/Footer.jsx" content (example)
// export default function Footer() {
//   return (
//     <footer>
//       <p>&copy; {new Date().getFullYear()} My Company</p>
//     </footer>
//   );
// }