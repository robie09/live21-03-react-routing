import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";

const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const NotFound = () => (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );

  return (
    <AppWrapper>
      <Switch>
        // case "/":
        <Route path="/">
          <Home instructors={instructors} goTo={setCurrentPage} />;
        </Route>
        //case "/instructors/hamza":
        <Route path="/instructor/:instructorSlug">
          <InstructorProfile
            instructors={instructors}
            instructorSlug="hamza"
            goTo={setCurrentPage}
          />
        </Route>
        <Router path="/instructor/:instructorSlug">
          <InstructorProfile
            instructors={instructors}
            instructorSlug="laila"
            goTo={setCurrentPage}
          />
        </Router>
        <Route component={App}>
          <InstructorProfile
            instructors={instructors}
            instructorSlug="hasan"
            goTo={setCurrentPage}
          />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AppWrapper>
  );
};

export default App;
