import { useState } from "react";
import "./App.css";
import { PostList } from "./features/posts/PostList";
import { Footer } from "./components/Footer";
import { Header } from "./components/ Header";
import { MainSort } from "./components/MainSort";
import { BrowserRouter as Router,Route,Switch, Redirect } from "react-router-dom";
import { Post } from "./features/posts/Post";
import { RegistrationPage } from "./features/users/RegistrationPage";
import { LoginPage } from "./features/users/LoginPage";
/*
// Data Mock

Comments = [
  {id, uid, comment_text, likes timestamp}
]

Questions = [
  {title: Title1, user: user.id,category, likes comments(subcoll), timestamp,}
]

-------------------MUST HAVES------------

- User authentication through gmail
- Main page with list of questions
- User´s questions page
- Question sorting by category
- Like counter for Post&Comments

-------------------Optional------------

- Images in Posts/Comments
- Swear word filter
- Emoticons for Posts only


*/




function App() {
  return (
    <Router>
      <div className="container flex flex-col">
        <div className="basis 1/4">
          <Header />
        </div>
        <div className="basis1/2 flex flex-col items-center gap-y-2">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="w-3/6">
                  {/*
                  <MainSort />
                  <PostList />
              */}
                  <a href="login" >Login</a>
                  <a href="register">Registration</a>

                </div>
              )}
            />

            <Route exact path="/posts/postId" component={Post} />
            <Route exact path="/register" component = {RegistrationPage} />
            <Route exact path="/login" component = {LoginPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
