"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = (boo) => {
    const sideBarEl = document.querySelector(`.${styles.sideBar}`);
    if (boo) {
      sideBarEl.classList.add(styles.open);
      document.querySelector(`.${styles.navBar}`).classList.add(styles.open);
      document.querySelector(".main").classList.add("open");
      setSideBar(true);
    } else {
      sideBarEl.classList.remove(styles.open);
      document.querySelector(`.${styles.navBar}`).classList.remove(styles.open);
      document.querySelector(".main").classList.remove("open");
      setSideBar(false);
    }
    console.log("\n Toggle side bar called \n");

    // sideBarEl.classList.toggle(styles.open);
    // document.querySelector(`.${styles.navBar}`).classList.toggle(styles.open);
    // document.querySelector(".main").classList.toggle("open");

    // if (!sideBar) {
    // } else {
    //   setSideBar(false);
    // }
  };
  const handleSidebarClick = (e) => {
    const sideBarEl = document.querySelector(`.${styles.sideBar}`);
    if (document.querySelector(`.${styles.burgerIcon}`).contains(e.target)) {
      return;
    }
    if (sideBarEl.contains(e.target)) {
      console.log("side bar clicked!", sideBar);
    } else {
      console.log("click was outside the sidebar", sideBar);
      if (sideBar) {
        console.log("Sidebar closed outclicked");
        toggleSideBar(false);
        console.log("side bar line:20", sideBar);
      }
    }
  };

  useEffect(() => {
    if (sideBar) {
      console.log("event listener add");
      document.addEventListener("click", handleSidebarClick, true);
    } else {
      console.log("event listener removed");

      document.removeEventListener("click", handleSidebarClick, true);
    }
  }, [sideBar]);

  console.log(`Side bar: ${sideBar}`);
  return (
    <>
      <nav className={`${styles.navBar}`}>
        <div className={styles.banner}>
          <Image
            src="/logo.jpg"
            width={1024}
            height={1024}
            alt="a teal paper with black dashes"
            className={`${styles.brannerImg}`}
          />
          <h4>Teal Notes</h4>
        </div>
        <div
          className={`${styles.burgerIcon} ${sideBar ? styles.change : ""}`}
          onClick={(e) => {
            toggleSideBar(!sideBar);
          }}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </nav>
    </>
  );
}
