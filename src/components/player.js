import React from "react";
import { Link } from "react-router-dom";

export default function Player({ player }) {
  return (
    <Link to="/teams" className="player">
      {player.tag}
    </Link>
  );
}
