// This file is part of YouTube Anti Darker Dark.
//
// YouTube Anti Darker Dark is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
// YouTube Anti Darker Dark is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with YouTube Anti Darker Dark. If not, see <https://www.gnu.org/licenses/>.
// Copyright 2022 Kaneko Qt

`use strict`;

class YouTubeAntiDarkerDark
{
  static #ruleExp = new RegExp(`darker-dark-theme`);

  static
  {
    console.debug(`YouTube Anti Darker Dark loaded.`);

    this.#editStyles();
  }

  static #editStyles()
  {
    for (let styleSheet of document.styleSheets)
    {
      try
      {
        for (let ruleIndex = 0;
                 ruleIndex < styleSheet.cssRules.length;
               ++ruleIndex)
        {
          let rule = styleSheet.cssRules[ruleIndex];
        
          if (this.#ruleExp.test(rule.selectorText))
          {
            styleSheet.deleteRule(ruleIndex);
          }
        }
      }
      catch (ex)
      {
        console.debug(`Failed to edit style sheet: `, styleSheet, ex);
      }
    }
  }
}