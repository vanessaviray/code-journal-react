import { Outlet } from "react-router-dom";

export function NavBar(){
  return (
    <>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <a className="white-text">Code Journal</a>
              <h3>
                <a id="entriesLink" className="entries-link white-text" >
                  Entries
                </a>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
