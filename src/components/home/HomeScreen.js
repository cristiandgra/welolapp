import React from "react";
import { InitialVideo } from "./InitialVideo";

export const HomeScreen = () => {
  return (
    <div className="container">
      <div className="hometext">
        <h1 style={{ fontStyle: "italic" }}>Welcome to WeLoL</h1>
        <p>
          <u>
            League of legens page with the last patch news, champs info and more
            ...
          </u>
        </p>
        <InitialVideo />
        <a
          className="btn-pff"
          href="https://signup.euw.leagueoflegends.com/es/signup/index"
          target="_blank"
          rel="noreferrer noopener"
        >
          PLAY FOR FREE
        </a>
      </div>
      <div className="news-cards">
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta1070711dbf6589d/5fc8754afaf76f509e135832/patch-10-25-banner.jpg"
            alt=""
          />
          <h3> Patch 10.25 Notes</h3>
          <p>
            We've made it through the storm and landed on the last patch of the
            year! Get your reading glasses and Santa hats on, because we've got
            a substantial list of changes from smoothing out the new
            landscape...
          </p>
          <a
            href="https://na.leagueoflegends.com/en-us/news/game-updates/patch-10-25-notes/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Show updates <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt30d3d484527d8e5a/5fb5eee4fd99385ff6006de3/LOL_PROMOART_9-1.jpg"
            alt=""
          />
          <h3> Patch 10.24 Notes</h3>
          <p>
            {" "}
            Hey, is this thing on? *taps mic* Anyone still alive after the chonk
            of last patch? So here we are, the preseason aftermath! We bring to
            you a series of changes that are overwhelmingly heavy on items as we
            feel out the changes in the new ecosystem...
          </p>
          <a
            href="https://euw.leagueoflegends.com/en-gb/news/game-updates/patch-10-24-notes/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Show updates <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7d22282a41a3a7a3/5fa99fc097f9f35d942e9bbb/Patch_10_23_Notes_Header_v2.jpg"
            alt=""
          />
          <h3> Patch 10.23 Notes</h3>
          <p>
            {" "}
            It's that time again! It's preseason, baby, and this year, we're
            moving and shaking with huge item changes from the Item Shop you
            open up every game to updates for some of your favorites to an
            all-new tier of majestic Mythic items...
          </p>
          <a
            href="https://euw.leagueoflegends.com/en-gb/news/game-updates/patch-10-23-notes/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Show updates <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb16f7bf3691493f5/5e32376ae147ae4537d93a32/LOL_PROMOART_5.jpg"
            alt=""
          />
          <h3> Patch 10.22 Notes</h3>
          <p>
            {" "}
            Here we go— one last light patch for the books before we switch
            gears into heavy-duty preseason changes! Kick back, put on some
            tunes (we’ve got a new pop star in our midst, after all), you know
            the drill...
          </p>
          <a
            href="https://euw.leagueoflegends.com/en-gb/news/game-updates/patch-10-23-notes/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Show updates <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
