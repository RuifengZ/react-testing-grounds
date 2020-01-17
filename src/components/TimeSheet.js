import React from "react";

export default function TimeSheet() {
  return (
    <div>
      <h1>When did you clock in?</h1>
      <div class="ui mini focus input">
        <input type="time" placeholder="Clock In..." />
      </div>
    </div>
  );
}
