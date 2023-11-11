import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className=""></div>
      <Link href={"/auth"}>ログイン</Link>
    </header>
  );
};

export default Header;
